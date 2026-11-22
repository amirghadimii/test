# -*- coding: utf-8 -*-
"""
نرم‌افزار کتابخانه مدرسه — نسخه localhost برای ویندوز ۱۰
بک‌اند: پایتون استاندارد (بدون نیاز به نصب هیچ کتابخانه‌ای) + دیتابیس SQLite
اجرا: python server.py  →  http://localhost:8080
"""
import csv, hashlib, io, json, os, secrets, sqlite3, sys
from datetime import date, timedelta
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

BASE = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE, "data", "library.db")
STATIC = os.path.join(BASE, "static")
PORT = int(os.environ.get("PORT", "8080"))

# ---------- ۵۰ دسته‌بندی پیش‌فرض کتاب ----------
DEFAULT_CATEGORIES = [
    "رمان ایرانی", "رمان خارجی", "داستان کوتاه", "شعر کلاسیک", "شعر معاصر",
    "ادبیات کهن", "روانشناسی", "خودیاری و موفقیت", "فلسفه", "تاریخ ایران",
    "تاریخ جهان", "جغرافیا", "علوم تجربی", "فیزیک", "شیمی",
    "زیست‌شناسی", "ریاضیات", "کامپیوتر و برنامه‌نویسی", "فناوری و هوش مصنوعی", "دین و معارف اسلامی",
    "قرآن و حدیث", "اخلاق و تربیت", "کودک و نوجوان", "کتاب تصویری کودک", "ورزشی",
    "هنر و نقاشی", "موسیقی", "سینما و تئاتر", "زبان انگلیسی", "زبان عربی",
    "کمک‌درسی هفتم", "کمک‌درسی هشتم", "کمک‌درسی نهم", "کمک‌درسی دهم", "کمک‌درسی یازدهم",
    "کمک‌درسی دوازدهم و کنکور", "تست و آزمون", "زندگی‌نامه و خاطرات", "سفرنامه", "طنز",
    "علمی‌تخیلی و فانتزی", "معمایی و پلیسی", "ترسناک", "عاشقانه", "اجتماعی",
    "سیاسی", "اقتصاد و مدیریت", "پزشکی و سلامت", "آشپزی و تغذیه", "عمومی",
]
GRADE_NAMES = {7: "هفتم", 8: "هشتم", 9: "نهم", 10: "دهم", 11: "یازدهم", 12: "دوازدهم"}

# ---------- تاریخ شمسی ----------
def g2j(gy, gm, gd):
    # الگوریتم استاندارد تبدیل میلادی به شمسی (jdf)
    g_dm = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    j_dm = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
    gy -= 1600; gm -= 1; gd -= 1
    g_no = 365 * gy + (gy + 3) // 4 - (gy + 99) // 100 + (gy + 399) // 400
    for i in range(gm):
        g_no += g_dm[i]
    if gm > 1 and ((gy % 4 == 0 and gy % 100 != 0) or gy % 400 == 0):
        g_no += 1
    g_no += gd
    j_no = g_no - 79
    j_np, j_no = divmod(j_no, 12053)
    jy = 979 + 33 * j_np + 4 * (j_no // 1461)
    j_no %= 1461
    if j_no >= 366:
        jy += (j_no - 1) // 365
        j_no = (j_no - 1) % 365
    i = 0
    while i < 11 and j_no >= j_dm[i]:
        j_no -= j_dm[i]; i += 1
    return jy, i + 1, j_no + 1

def jalali_today():
    t = date.today()
    return g2j(t.year, t.month, t.day)

# ---------- دیتابیس ----------
def db():
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    c = sqlite3.connect(DB_PATH)
    c.row_factory = sqlite3.Row
    c.execute("PRAGMA journal_mode=WAL")
    c.execute("PRAGMA foreign_keys=ON")
    return c

def hash_pw(pw, salt=None):
    salt = salt or secrets.token_hex(16)
    h = hashlib.pbkdf2_hmac("sha256", pw.encode(), bytes.fromhex(salt), 120000).hex()
    return salt, h

def init_db():
    c = db()
    c.executescript("""
    CREATE TABLE IF NOT EXISTS admins(id INTEGER PRIMARY KEY, username TEXT UNIQUE, salt TEXT, pw TEXT);
    CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, created TEXT);
    CREATE TABLE IF NOT EXISTS categories(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE NOT NULL);
    CREATE TABLE IF NOT EXISTS students(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL,
        grade INTEGER NOT NULL, section TEXT DEFAULT 'الف', phone TEXT DEFAULT '', code TEXT DEFAULT '');
    CREATE TABLE IF NOT EXISTS books(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL,
        author TEXT DEFAULT '', num TEXT UNIQUE NOT NULL, category_id INTEGER REFERENCES categories(id),
        copies INTEGER NOT NULL DEFAULT 1);
    CREATE TABLE IF NOT EXISTS loans(id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER, book_id INTEGER, start TEXT, due TEXT, returned TEXT,
        student_name TEXT, book_title TEXT);
    CREATE TABLE IF NOT EXISTS reservations(id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER, book_id INTEGER, date TEXT);
    CREATE TABLE IF NOT EXISTS settings(k TEXT PRIMARY KEY, v TEXT);
    """)
    if not c.execute("SELECT 1 FROM admins").fetchone():
        s, h = hash_pw("admin123")
        c.execute("INSERT INTO admins(username,salt,pw) VALUES('admin',?,?)", (s, h))
    if not c.execute("SELECT 1 FROM categories").fetchone():
        c.executemany("INSERT OR IGNORE INTO categories(name) VALUES(?)", [(x,) for x in DEFAULT_CATEGORIES])
    defaults = {"auto_cleanup": "1", "cleanup_month": "4", "cleanup_day": "1",
                "promote_others": "1", "last_cleanup_jyear": "0", "school_name": "کتابخانه مدرسه"}
    for k, v in defaults.items():
        c.execute("INSERT OR IGNORE INTO settings(k,v) VALUES(?,?)", (k, v))
    c.commit(); c.close()

def get_settings(c):
    return {r["k"]: r["v"] for r in c.execute("SELECT k,v FROM settings")}

def set_setting(c, k, v):
    c.execute("INSERT INTO settings(k,v) VALUES(?,?) ON CONFLICT(k) DO UPDATE SET v=excluded.v", (k, str(v)))

# ---------- پایان سال تحصیلی ----------
def run_end_of_year(c, force=False):
    """حذف خودکار دوازدهمی‌ها + (اختیاری) ارتقای بقیه پایه‌ها. برمی‌گرداند: گزارش عملیات."""
    st = get_settings(c)
    jy, jm, jd = jalali_today()
    cm, cd = int(st["cleanup_month"]), int(st["cleanup_day"])
    due_now = (jm, jd) >= (cm, cd)
    if not force:
        if st["auto_cleanup"] != "1" or not due_now or int(st["last_cleanup_jyear"]) >= jy:
            return None
    deleted, skipped, promoted = [], [], 0
    for s in c.execute("SELECT * FROM students WHERE grade=12").fetchall():
        active = c.execute("SELECT 1 FROM loans WHERE student_id=? AND returned IS NULL", (s["id"],)).fetchone()
        if active:
            skipped.append(s["name"])
            continue
        c.execute("DELETE FROM reservations WHERE student_id=?", (s["id"],))
        c.execute("DELETE FROM students WHERE id=?", (s["id"],))
        deleted.append(s["name"])
    if st["promote_others"] == "1":
        cur = c.execute("UPDATE students SET grade=grade+1 WHERE grade BETWEEN 7 AND 11")
        promoted = cur.rowcount
    set_setting(c, "last_cleanup_jyear", jy)
    c.commit()
    return {"year": jy, "deleted": deleted, "skipped_active_loan": skipped, "promoted": promoted}

def book_status(c, book_row):
    loaned = c.execute("SELECT COUNT(*) n FROM loans WHERE book_id=? AND returned IS NULL", (book_row["id"],)).fetchone()["n"]
    reserved = c.execute("SELECT 1 FROM reservations WHERE book_id=?", (book_row["id"],)).fetchone() is not None
    if loaned >= book_row["copies"]:
        return "loaned"
    if loaned == 0 and reserved:
        return "reserved"
    return "available"

# ---------- HTTP ----------
class H(BaseHTTPRequestHandler):
    def log_message(self, *a): pass

    def send_json(self, obj, code=200):
        body = json.dumps(obj, ensure_ascii=False).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def body_json(self):
        n = int(self.headers.get("Content-Length") or 0)
        if not n: return {}
        try: return json.loads(self.rfile.read(n).decode("utf-8"))
        except Exception: return {}

    def authed(self):
        tok = ""
        for part in (self.headers.get("Cookie") or "").split(";"):
            if part.strip().startswith("session="):
                tok = part.strip()[8:]
        if not tok: return False
        c = db(); ok = c.execute("SELECT 1 FROM sessions WHERE token=?", (tok,)).fetchone() is not None; c.close()
        return ok

    def need_auth(self):
        if not self.authed():
            self.send_json({"error": "ابتدا وارد پنل مدیریت شوید."}, 401)
            return True
        return False

    # ----- GET -----
    def do_GET(self):
        u = urlparse(self.path); p, q = u.path, parse_qs(u.query)
        c = db()
        try:
            run_end_of_year(c)  # بررسی پایان سال در هر بازدید (سبک و روزانه یک‌بار مؤثر است)
            if p == "/" or p == "/index.html":
                return self.serve_file(os.path.join(STATIC, "index.html"), "text/html; charset=utf-8")
            if p.startswith("/static/"):
                f = os.path.join(STATIC, os.path.basename(p))
                ct = "text/css" if f.endswith(".css") else "application/javascript" if f.endswith(".js") else "application/octet-stream"
                return self.serve_file(f, ct)
            if p == "/api/me":
                return self.send_json({"authed": self.authed(), "school": get_settings(c)["school_name"]})
            if p == "/api/categories":
                rows = [dict(r) for r in c.execute(
                    "SELECT cat.id, cat.name, COUNT(b.id) books FROM categories cat LEFT JOIN books b ON b.category_id=cat.id GROUP BY cat.id ORDER BY cat.name")]
                return self.send_json({"categories": rows})

            if p.startswith("/api/export/"):
                if self.need_auth(): return
                kind = p.split("/")[-1]
                return self.export_csv(c, kind)
            if not p.startswith("/api/"):
                return self.send_json({"error": "not found"}, 404)
            if self.need_auth(): return
            if p == "/api/stats":
                return self.send_json(self.stats(c))
            if p == "/api/students":
                return self.list_students(c, q)
            if p == "/api/books":
                return self.list_books(c, q)
            if p == "/api/loans":
                rows = []
                for l in c.execute("SELECT * FROM loans WHERE returned IS NULL ORDER BY due").fetchall():
                    d = dict(l)
                    d["student_name"] = d["student_name"] or ""
                    d["book_title"] = d["book_title"] or ""
                    d["overdue_days"] = (date.today() - date.fromisoformat(d["due"])).days if d["due"] else 0
                    rows.append(d)
                res = [dict(r, student_name=(c.execute("SELECT name FROM students WHERE id=?", (r["student_id"],)).fetchone() or {"name": "—"})["name"],
                            book_title=(c.execute("SELECT title FROM books WHERE id=?", (r["book_id"],)).fetchone() or {"title": "—"})["title"])
                       for r in c.execute("SELECT * FROM reservations ORDER BY date").fetchall()]
                return self.send_json({"loans": rows, "reservations": res})
            if p == "/api/settings":
                return self.send_json({"settings": get_settings(c), "jalali_today": jalali_today()})
            return self.send_json({"error": "not found"}, 404)
        finally:
            c.close()

    def stats(self, c):
        total_books = c.execute("SELECT COALESCE(SUM(copies),0) n FROM books").fetchone()["n"]
        titles = c.execute("SELECT COUNT(*) n FROM books").fetchone()["n"]
        students = c.execute("SELECT COUNT(*) n FROM students").fetchone()["n"]
        loans = c.execute("SELECT COUNT(*) n FROM loans WHERE returned IS NULL").fetchone()["n"]
        today_iso = date.today().isoformat()
        over = [dict(l) for l in c.execute(
            "SELECT * FROM loans WHERE returned IS NULL AND due<=? ORDER BY due", (today_iso,)).fetchall()]
        weekly = []
        for i in range(6, -1, -1):
            d = (date.today() - timedelta(days=i)).isoformat()
            weekly.append({"date": d, "count": c.execute("SELECT COUNT(*) n FROM loans WHERE start=?", (d,)).fetchone()["n"]})
        top = [dict(r) for r in c.execute(
            "SELECT b.title, b.author, COUNT(l.id) cnt FROM loans l JOIN books b ON b.id=l.book_id GROUP BY b.id ORDER BY cnt DESC LIMIT 5").fetchall()]
        recent = [dict(r) for r in c.execute("SELECT * FROM loans ORDER BY id DESC LIMIT 6").fetchall()]
        return {"total_books": total_books, "titles": titles, "students": students,
                "active_loans": loans, "overdue": over, "weekly": weekly, "top": top, "recent": recent}

    def list_students(self, c, q):
        query = (q.get("q", [""])[0] or "").strip()
        grade = q.get("grade", [""])[0]
        page = max(1, int(q.get("page", ["1"])[0])); per = min(200, int(q.get("per", ["50"])[0]))
        where, args = [], []
        if query: where.append("(name LIKE ? OR code LIKE ? OR phone LIKE ?)"); args += [f"%{query}%"] * 3
        if grade: where.append("grade=?"); args.append(int(grade))
        w = (" WHERE " + " AND ".join(where)) if where else ""
        total = c.execute(f"SELECT COUNT(*) n FROM students{w}", args).fetchone()["n"]
        rows = []
        for s in c.execute(f"SELECT * FROM students{w} ORDER BY grade, name LIMIT ? OFFSET ?", args + [per, (page - 1) * per]).fetchall():
            d = dict(s); d["class_name"] = f"{GRADE_NAMES.get(s['grade'], s['grade'])} {s['section']}"
            d["active_loans"] = c.execute("SELECT COUNT(*) n FROM loans WHERE student_id=? AND returned IS NULL", (s["id"],)).fetchone()["n"]
            rows.append(d)
        return self.send_json({"students": rows, "total": total, "page": page, "per": per})

    def list_books(self, c, q, public=False):
        query = (q.get("q", [""])[0] or "").strip()
        cat = q.get("category", [""])[0]; status = q.get("status", [""])[0]
        page = max(1, int(q.get("page", ["1"])[0])); per = min(200, int(q.get("per", ["50"])[0]))
        where, args = [], []
        if query: where.append("(b.title LIKE ? OR b.author LIKE ? OR b.num LIKE ?)"); args += [f"%{query}%"] * 3
        if cat: where.append("b.category_id=?"); args.append(int(cat))
        w = (" WHERE " + " AND ".join(where)) if where else ""
        total = c.execute(f"SELECT COUNT(*) n FROM books b{w}", args).fetchone()["n"]
        rows = []
        for b in c.execute(f"""SELECT b.*, cat.name category FROM books b LEFT JOIN categories cat ON cat.id=b.category_id
                                {w} ORDER BY b.title LIMIT ? OFFSET ?""", args + [per, (page - 1) * per]).fetchall():
            d = dict(b); d["status"] = book_status(c, b)
            d["loaned"] = c.execute("SELECT COUNT(*) n FROM loans WHERE book_id=? AND returned IS NULL", (b["id"],)).fetchone()["n"]
            al = c.execute("SELECT id, student_name, due FROM loans WHERE book_id=? AND returned IS NULL ORDER BY due LIMIT 1", (b["id"],)).fetchone()
            d["active_loan"] = dict(al) if al else None  # کتاب دست کیست و سررسیدش کی است
            if not status or d["status"] == status:
                rows.append(d)
        return self.send_json({"books": rows, "total": total, "page": page, "per": per})

    def export_csv(self, c, kind):
        out = io.StringIO(); w = csv.writer(out)
        if kind == "books":
            w.writerow(["title", "author", "num", "category", "copies"])
            for r in c.execute("SELECT b.*, cat.name category FROM books b LEFT JOIN categories cat ON cat.id=b.category_id ORDER BY b.title"):
                w.writerow([r["title"], r["author"], r["num"], r["category"] or "", r["copies"]])
            name = "books.csv"
        else:
            w.writerow(["name", "grade", "section", "phone", "code"])
            for r in c.execute("SELECT * FROM students ORDER BY grade, name"):
                w.writerow([r["name"], r["grade"], r["section"], r["phone"], r["code"]])
            name = "students.csv"
        body = ("﻿" + out.getvalue()).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/csv; charset=utf-8")
        self.send_header("Content-Disposition", f'attachment; filename="{name}"')
        self.send_header("Content-Length", str(len(body)))
        self.end_headers(); self.wfile.write(body)

    def serve_file(self, path, ct):
        if not os.path.exists(path):
            return self.send_json({"error": "file not found"}, 404)
        body = open(path, "rb").read()
        self.send_response(200); self.send_header("Content-Type", ct)
        self.send_header("Content-Length", str(len(body))); self.end_headers(); self.wfile.write(body)

    # ----- POST / PUT / DELETE -----
    def do_POST(self):
        u = urlparse(self.path); p = u.path
        data = self.body_json(); c = db()
        try:
            if p == "/api/login":
                row = c.execute("SELECT * FROM admins WHERE username=?", (data.get("username", "").strip(),)).fetchone()
                if row:
                    _, h = hash_pw(data.get("password", ""), row["salt"])
                    if secrets.compare_digest(h, row["pw"]):
                        tok = secrets.token_urlsafe(32)
                        c.execute("INSERT INTO sessions(token,created) VALUES(?,?)", (tok, date.today().isoformat())); c.commit()
                        body = json.dumps({"ok": True}).encode()
                        self.send_response(200); self.send_header("Content-Type", "application/json")
                        self.send_header("Set-Cookie", f"session={tok}; Path=/; HttpOnly; SameSite=Lax")
                        self.send_header("Content-Length", str(len(body))); self.end_headers(); self.wfile.write(body)
                        return
                return self.send_json({"error": "نام کاربری یا رمز عبور اشتباه است."}, 403)
            if self.need_auth(): return
            if p == "/api/logout":
                c.execute("DELETE FROM sessions"); c.commit(); return self.send_json({"ok": True})
            if p == "/api/students":
                name = (data.get("name") or "").strip(); grade = int(data.get("grade") or 0)
                if len(name) < 3 or grade not in GRADE_NAMES:
                    return self.send_json({"error": "نام کامل و پایه (هفتم تا دوازدهم) لازم است."}, 400)
                cur = c.execute("INSERT INTO students(name,grade,section,phone,code) VALUES(?,?,?,?,?)",
                                (name, grade, data.get("section", "الف"), data.get("phone", ""), data.get("code", "")))
                c.commit(); return self.send_json({"ok": True, "id": cur.lastrowid})
            if p == "/api/books":
                title = (data.get("title") or "").strip(); num = (data.get("num") or "").strip()
                if len(title) < 2 or not num: return self.send_json({"error": "عنوان و شماره کتاب لازم است."}, 400)
                if c.execute("SELECT 1 FROM books WHERE num=?", (num,)).fetchone():
                    return self.send_json({"error": "این شماره کتاب قبلاً ثبت شده است."}, 400)
                cur = c.execute("INSERT INTO books(title,author,num,category_id,copies) VALUES(?,?,?,?,?)",
                                (title, data.get("author", ""), num, data.get("category_id") or None, max(1, int(data.get("copies") or 1))))
                c.commit(); return self.send_json({"ok": True, "id": cur.lastrowid})
            if p == "/api/categories":
                name = (data.get("name") or "").strip()
                if len(name) < 2: return self.send_json({"error": "نام دسته لازم است."}, 400)
                try:
                    cur = c.execute("INSERT INTO categories(name) VALUES(?)", (name,)); c.commit()
                    return self.send_json({"ok": True, "id": cur.lastrowid})
                except sqlite3.IntegrityError:
                    return self.send_json({"error": "این دسته قبلاً وجود دارد."}, 400)
            if p == "/api/loans":
                sid, bid = int(data.get("student_id", 0)), int(data.get("book_id", 0))
                due = data.get("due") or (date.today() + timedelta(days=14)).isoformat()
                s = c.execute("SELECT * FROM students WHERE id=?", (sid,)).fetchone()
                b = c.execute("SELECT * FROM books WHERE id=?", (bid,)).fetchone()
                if not s or not b: return self.send_json({"error": "دانش‌آموز یا کتاب پیدا نشد."}, 400)
                if book_status(c, b) == "loaned": return self.send_json({"error": "همه نسخه‌های این کتاب در امانت است."}, 400)
                c.execute("DELETE FROM reservations WHERE book_id=? AND student_id=?", (bid, sid))
                cur = c.execute("INSERT INTO loans(student_id,book_id,start,due,student_name,book_title) VALUES(?,?,?,?,?,?)",
                                (sid, bid, date.today().isoformat(), due, s["name"], b["title"]))
                c.commit(); return self.send_json({"ok": True, "id": cur.lastrowid})
            if p.startswith("/api/loans/") and p.endswith("/return"):
                lid = int(p.split("/")[3])
                c.execute("UPDATE loans SET returned=? WHERE id=? AND returned IS NULL", (date.today().isoformat(), lid)); c.commit()
                return self.send_json({"ok": True})
            if p.startswith("/api/reservations/") and p.endswith("/lend"):
                rid = int(p.split("/")[3])
                r = c.execute("SELECT * FROM reservations WHERE id=?", (rid,)).fetchone()
                if not r: return self.send_json({"error": "رزرو پیدا نشد."}, 404)
                s = c.execute("SELECT * FROM students WHERE id=?", (r["student_id"],)).fetchone()
                b = c.execute("SELECT * FROM books WHERE id=?", (r["book_id"],)).fetchone()
                c.execute("DELETE FROM reservations WHERE id=?", (rid,))
                c.execute("INSERT INTO loans(student_id,book_id,start,due,student_name,book_title) VALUES(?,?,?,?,?,?)",
                          (r["student_id"], r["book_id"], date.today().isoformat(),
                           (date.today() + timedelta(days=14)).isoformat(), s["name"] if s else "", b["title"] if b else ""))
                c.commit(); return self.send_json({"ok": True})
            if p == "/api/end-of-year":
                rep = run_end_of_year(c, force=True)
                return self.send_json({"ok": True, "report": rep})
            if p == "/api/import/books":
                return self.import_books(c, data.get("csv", ""))
            if p == "/api/change-password":
                row = c.execute("SELECT * FROM admins WHERE username='admin'").fetchone()
                _, h = hash_pw(data.get("current", ""), row["salt"])
                if not secrets.compare_digest(h, row["pw"]):
                    return self.send_json({"error": "رمز فعلی اشتباه است."}, 403)
                if len(data.get("new", "")) < 6: return self.send_json({"error": "رمز جدید حداقل ۶ حرف باشد."}, 400)
                s2, h2 = hash_pw(data["new"])
                c.execute("UPDATE admins SET salt=?, pw=? WHERE id=?", (s2, h2, row["id"])); c.commit()
                return self.send_json({"ok": True})
            return self.send_json({"error": "not found"}, 404)
        finally:
            c.close()

    def import_books(self, c, text):
        if not text.strip(): return self.send_json({"error": "فایل CSV خالی است."}, 400)
        cats = {r["name"]: r["id"] for r in c.execute("SELECT * FROM categories")}
        added, skipped = 0, 0
        for row in csv.DictReader(io.StringIO(text)):
            title = (row.get("title") or "").strip(); num = (row.get("num") or "").strip()
            if not title or not num or c.execute("SELECT 1 FROM books WHERE num=?", (num,)).fetchone():
                skipped += 1; continue
            cat_name = (row.get("category") or "").strip()
            cid = cats.get(cat_name)
            if cat_name and not cid:
                cur = c.execute("INSERT INTO categories(name) VALUES(?)", (cat_name,)); cid = cur.lastrowid; cats[cat_name] = cid
            try: copies = max(1, int(row.get("copies") or 1))
            except Exception: copies = 1
            c.execute("INSERT INTO books(title,author,num,category_id,copies) VALUES(?,?,?,?,?)",
                      (title, (row.get("author") or "").strip(), num, cid, copies))
            added += 1
        c.commit()
        return self.send_json({"ok": True, "added": added, "skipped": skipped})

    def do_PUT(self):
        if self.need_auth(): return
        data = self.body_json(); c = db()
        try:
            if urlparse(self.path).path == "/api/settings":
                allowed = {"auto_cleanup", "cleanup_month", "cleanup_day", "promote_others", "school_name"}
                for k, v in data.items():
                    if k in allowed: set_setting(c, k, v)
                c.commit(); return self.send_json({"ok": True})
            return self.send_json({"error": "not found"}, 404)
        finally:
            c.close()

    def do_DELETE(self):
        if self.need_auth(): return
        p = urlparse(self.path).path; c = db()
        try:
            parts = p.split("/")
            if len(parts) == 4 and parts[2] in ("students", "books", "categories", "reservations"):
                table, rid = parts[2], int(parts[3])
                if table == "students":
                    if c.execute("SELECT 1 FROM loans WHERE student_id=? AND returned IS NULL", (rid,)).fetchone():
                        return self.send_json({"error": "این دانش‌آموز کتاب امانتی دارد؛ اول کتاب را برگردانید."}, 400)
                    c.execute("DELETE FROM reservations WHERE student_id=?", (rid,))
                if table == "books":
                    if c.execute("SELECT 1 FROM loans WHERE book_id=? AND returned IS NULL", (rid,)).fetchone():
                        return self.send_json({"error": "این کتاب در امانت است."}, 400)
                    c.execute("DELETE FROM reservations WHERE book_id=?", (rid,))
                if table == "categories":
                    c.execute("UPDATE books SET category_id=NULL WHERE category_id=?", (rid,))
                c.execute(f"DELETE FROM {table} WHERE id=?", (rid,)); c.commit()
                return self.send_json({"ok": True})
            return self.send_json({"error": "not found"}, 404)
        finally:
            c.close()

def main():
    init_db()
    c = db(); rep = run_end_of_year(c); c.close()
    if rep: print("پایان سال اجرا شد:", rep)
    srv = ThreadingHTTPServer(("127.0.0.1", PORT), H)  # فقط همان یک سیستم کتابخانه — هیچ اتصال بیرونی/گوشی
    print(f"کتابخانه مدرسه آماده است → http://localhost:{PORT}  (ورود مدیر: admin / admin123)")
    print("این پنجره را باز نگه دارید؛ بستن آن یعنی خاموش شدن برنامه.")
    # باز کردن خودکار مرورگر (وقتی با دابل‌کلیک روی server.py اجرا می‌شود)
    try:
        import threading, webbrowser
        threading.Timer(1.2, lambda: webbrowser.open(f"http://localhost:{PORT}")).start()
    except Exception:
        pass
    try: srv.serve_forever()
    except KeyboardInterrupt: pass

if __name__ == "__main__":
    main()
