"use strict";

/* ---------- Data ---------- */
const PRODUCTS = [
  { id: 1, name: "دانه قهوه اتیوپی یرگاچف", cat: "beans", roast: "light", price: 685000,
    notes: "نت‌های یاس، هلو و چای سیاه — اسیدیته روشن و پایان تمیز",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=700&q=80", featured: true },
  { id: 2, name: "دانه قهوه کلمبیا سوپریمو", cat: "beans", roast: "medium", price: 590000,
    notes: "کارامل، فندق و پرتقال — متعادل و همه‌پسند",
    img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&q=80", featured: true },
  { id: 3, name: "دانه قهوه برزیل سرادو", cat: "beans", roast: "medium", price: 520000,
    notes: "شکلات تلخ، بادام برشته و شکر قهوه‌ای — بدنه بالا",
    img: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=700&q=80", featured: false },
  { id: 4, name: "دانه قهوه کنیا AA", cat: "beans", roast: "light", price: 720000,
    notes: "انگور سیاه، گریپ‌فروت و شکر سوخته — پرجنب‌وجوش",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80", featured: true },
  { id: 5, name: "اسپرسو بلِند نو‌کام (آسیاب‌شده)", cat: "ground", roast: "dark", price: 540000,
    notes: "ترکیب ۷۰٪ عربیکا / ۳۰٪ روبوستا — کرمای غلیظ، شکلات و دود ملایم",
    img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=700&q=80", featured: true },
  { id: 6, name: "قهوه ترک سنتی نو‌کام (آسیاب‌شده)", cat: "ground", roast: "medium", price: 380000,
    notes: "آسیاب بسیار ریز مخصوص جزوه — هل سبز و کاکائو",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=700&q=80", featured: false },
  { id: 7, name: "دکاف کلمبیا بدون کافئین (آسیاب‌شده)", cat: "ground", roast: "medium", price: 610000,
    notes: "کافئین‌زدایی با روش آب سوئیسی — طعم کامل، بدون کافئین",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80", featured: false },
  { id: 8, name: "موکاپات استیل ۶ کاپ", cat: "equipment", roast: null, price: 1850000,
    notes: "استیل ضدزنگ ۱۸/۱۰، مناسب اجاق گازی و برقی، دسته نسوز",
    img: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=700&q=80", featured: true },
  { id: 9, name: "فرنچ‌پرس شیشه‌ای ۸۰۰ میلی‌لیتر", cat: "equipment", roast: null, price: 940000,
    notes: "شیشه بوروسیلیکات، فیلتر استیل ریزبافت، بدنه چوب گردو",
    img: "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=700&q=80", featured: false },
  { id: 10, name: "آسیاب دستی استیل با تیغه سرامیکی", cat: "equipment", roast: null, price: 1290000,
    notes: "قابلیت تنظیم درجه آسیاب از ترک تا فرنچ‌پرس، کم‌صدا و قابل حمل",
    img: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=700&q=80", featured: false }
];

const CAT_NAMES = { beans: "دانه قهوه", ground: "قهوه آسیاب‌شده", equipment: "تجهیزات" };
const ROAST_NAMES = { light: "روشن", medium: "متوسط", dark: "تیره" };
const ROAST_LEVEL = { light: 33, medium: 66, dark: 100 };
const WEIGHT_MULT = { 250: 1, 500: 1.9, 1000: 3.6 };
const RATES = { IRR: 1, USD: 62000, AED: 17000 };
const FREE_SHIP = 500000, SHIP_COST = 45000;

/* ---------- State ---------- */
const state = {
  currency: "IRR",
  cart: [],            // {key, pid, name, variant, unitPrice, qty}
  wallet: 350000,      // Toman
  points: 2450,
  modalPid: null
};

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);
const faDigits = (s) => String(s).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
const group = (n) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "٬");

function fmt(toman) {
  if (state.currency === "IRR") return faDigits(group(toman)) + " تومان";
  const v = toman / RATES[state.currency];
  const s = v >= 100 ? v.toFixed(0) : v.toFixed(2);
  return (state.currency === "USD" ? "$" : "د.إ ") + s;
}
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.hidden = false;
  setTimeout(() => { t.hidden = true; }, 2600);
}

/* ---------- Product grid + filters ---------- */
function renderProducts() {
  const q = $("searchInput").value.trim();
  const cat = $("catFilter").value;
  const roast = $("roastFilter").value;
  const maxPrice = Number($("priceRange").value);
  $("priceLabel").textContent = fmt(maxPrice);

  const list = PRODUCTS.filter((p) =>
    (cat === "all" || p.cat === cat) &&
    (roast === "all" || p.roast === roast) &&
    p.price <= maxPrice &&
    (q === "" || p.name.includes(q) || p.notes.includes(q))
  );

  $("productGrid").innerHTML = list.map((p) => `
    <article class="card">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="card-body">
        <span class="card-cat">${CAT_NAMES[p.cat]}${p.roast ? " · برشت " + ROAST_NAMES[p.roast] : ""}</span>
        <h3>${p.name}</h3>
        <p class="muted">${p.notes}</p>
        <div class="card-foot">
          <strong>${p.cat === "equipment" ? fmt(p.price) : "از " + fmt(p.price)}</strong>
          <button class="btn btn-small" data-view="${p.id}">مشاهده و خرید</button>
        </div>
      </div>
    </article>`).join("");

  $("resultCount").textContent = faDigits(list.length) + " محصول نمایش داده شد";
  $("emptyMsg").hidden = list.length > 0;

  document.querySelectorAll("[data-view]").forEach((b) =>
    b.addEventListener("click", () => openModal(Number(b.dataset.view))));
}

/* ---------- Product modal ---------- */
function openModal(pid) {
  state.modalPid = pid;
  const p = PRODUCTS.find((x) => x.id === pid);
  $("mImg").src = p.img;
  $("mImg").alt = p.name;
  $("mName").textContent = p.name;
  $("mNotes").textContent = p.notes;
  const isEq = p.cat === "equipment";
  $("mRoast").textContent = isEq ? "—" : ROAST_NAMES[p.roast];
  $("mRoastFill").style.width = isEq ? "0%" : ROAST_LEVEL[p.roast] + "%";
  $("mWeight").disabled = isEq;
  $("grindWrap").style.display = isEq ? "none" : "";
  $("mSub").checked = false;
  updateModalPrice();
  $("productModal").hidden = false;
}
function modalUnitPrice() {
  const p = PRODUCTS.find((x) => x.id === state.modalPid);
  let price = p.cat === "equipment" ? p.price : p.price * WEIGHT_MULT[$("mWeight").value];
  if ($("mSub").checked) price *= 0.9;
  return Math.round(price);
}
function updateModalPrice() { $("mPrice").textContent = fmt(modalUnitPrice()); }

function addFromModal() {
  const p = PRODUCTS.find((x) => x.id === state.modalPid);
  const isEq = p.cat === "equipment";
  const variant = isEq
    ? "تجهیزات"
    : $("mWeight").value + " گرم · " + $("mGrind").value + ($("mSub").checked ? " · اشتراک ماهانه" : "");
  const key = p.id + "|" + variant;
  const existing = state.cart.find((i) => i.key === key);
  if (existing) existing.qty += 1;
  else state.cart.push({ key, pid: p.id, name: p.name, variant, unitPrice: modalUnitPrice(), qty: 1 });
  $("productModal").hidden = true;
  renderCart();
  toast("«" + p.name + "» به سبد اضافه شد");
}

/* ---------- Cart ---------- */
function cartTotals() {
  const sub = state.cart.reduce((s, i) => s + i.unitPrice * i.qty, 0);
  const ship = state.cart.length === 0 || sub >= FREE_SHIP ? 0 : SHIP_COST;
  return { sub, ship, total: sub + ship };
}
function renderCart() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  $("cartCount").textContent = faDigits(count);
  if (state.cart.length === 0) {
    $("cartItems").innerHTML = '<p class="muted">سبد خرید خالی است.</p>';
  } else {
    $("cartItems").innerHTML = state.cart.map((i) => `
      <div class="cart-item">
        <div><strong>${i.name}</strong><small>${i.variant}</small>
        <span class="muted">${fmt(i.unitPrice)}</span></div>
        <div class="qty">
          <button data-dec="${i.key}">−</button><span>${faDigits(i.qty)}</span><button data-inc="${i.key}">+</button>
          <button class="rm" data-rm="${i.key}">حذف</button>
        </div>
      </div>`).join("");
    document.querySelectorAll("[data-inc]").forEach((b) => b.addEventListener("click", () => changeQty(b.dataset.inc, 1)));
    document.querySelectorAll("[data-dec]").forEach((b) => b.addEventListener("click", () => changeQty(b.dataset.dec, -1)));
    document.querySelectorAll("[data-rm]").forEach((b) => b.addEventListener("click", () => removeItem(b.dataset.rm)));
  }
  const t = cartTotals();
  $("cartSubtotal").textContent = fmt(t.sub);
  $("cartShipping").textContent = t.ship === 0 ? "رایگان" : fmt(t.ship);
  $("cartTotal").textContent = fmt(t.total);
}
function changeQty(key, d) {
  const i = state.cart.find((x) => x.key === key);
  if (!i) return;
  i.qty += d;
  if (i.qty <= 0) state.cart = state.cart.filter((x) => x.key !== key);
  renderCart();
}
function removeItem(key) {
  state.cart = state.cart.filter((x) => x.key !== key);
  renderCart();
}
function openDrawer() {
  $("cartDrawer").classList.add("open");
  $("cartDrawer").setAttribute("aria-hidden", "false");
  $("drawerBackdrop").hidden = false;
  $("checkoutView").hidden = true;
  $("cartItems").style.display = "";
  $("cartFoot").style.display = "";
}
function closeDrawer() {
  $("cartDrawer").classList.remove("open");
  $("cartDrawer").setAttribute("aria-hidden", "true");
  $("drawerBackdrop").hidden = true;
}

/* ---------- Checkout ---------- */
function openCheckout() {
  if (state.cart.length === 0) { toast("سبد خرید خالی است"); return; }
  $("cartItems").style.display = "none";
  $("cartFoot").style.display = "none";
  $("checkoutView").hidden = false;
  $("paySuccess").hidden = true;
  $("checkoutError").textContent = "";
  updatePayUI();
}
function updatePayUI() {
  const m = $("payMethod").value;
  const t = cartTotals();
  $("gatewayFields").style.display = m === "gateway" ? "" : "none";
  if (m === "installment") {
    const each = Math.ceil(t.total / 4);
    $("installmentInfo").hidden = false;
    $("installmentInfo").textContent = "۴ قسط ماهانه، هر قسط " + fmt(each) + " — قسط اول هنگام ثبت سفارش.";
  } else {
    $("installmentInfo").hidden = true;
  }
  $("payBtn").textContent = m === "wallet"
    ? "پرداخت از کیف پول (" + fmt(t.total) + ")"
    : "پرداخت " + fmt(t.total);
}
function doPay() {
  const m = $("payMethod").value;
  const t = cartTotals();
  $("checkoutError").textContent = "";
  if (m === "gateway") {
    const num = $("cardNum").value.replace(/\D/g, "");
    if (num.length < 16) { $("checkoutError").textContent = "شماره کارت باید ۱۶ رقم باشد."; return; }
    if ($("cardName").value.trim().length < 3) { $("checkoutError").textContent = "نام صاحب کارت را وارد کنید."; return; }
  }
  if (m === "wallet") {
    if (state.wallet < t.total) { $("checkoutError").textContent = "موجودی کیف پول کافی نیست؛ کیف پول را شارژ کنید یا روش پرداخت را تغییر دهید."; return; }
    state.wallet -= t.total;
    state.wallet += Math.round(t.total * 0.02); // 2% cashback
  }
  const earned = Math.floor(t.total / 10000) * 10;
  state.points += earned;
  $("orderCode").textContent = "NK-" + Math.floor(1000 + Math.random() * 9000);
  $("successPoints").textContent = "با این خرید " + faDigits(earned) + " امتیاز به باشگاه شما اضافه شد.";
  $("paySuccess").hidden = false;
  state.cart = [];
  renderCart();
  renderClub();
  renderWallet();
}

/* ---------- Club & wallet ---------- */
function tierOf(points) {
  if (points >= 5000) return "طلایی";
  if (points >= 1000) return "نقره‌ای";
  return "برنزی";
}
function renderClub() {
  $("clubPoints").textContent = faDigits(group(state.points));
  $("clubTier").textContent = tierOf(state.points);
  const toGold = Math.max(0, 5000 - state.points);
  $("pointsToGold").textContent = faDigits(group(toGold));
  $("tierProgress").style.width = Math.min(100, (state.points / 5000) * 100) + "%";
}
function redeem() {
  if (state.points < 500) { $("redeemMsg").textContent = "برای تبدیل، حداقل ۵۰۰ امتیاز لازم است."; return; }
  state.points -= 500;
  state.wallet += 50000;
  $("redeemMsg").textContent = "انجام شد: ۵۰۰ امتیاز به ۵۰٬۰۰۰ تومان اعتبار کیف پول تبدیل شد.";
  renderClub();
  renderWallet();
}
function renderWallet() { $("walletBalance").textContent = fmt(state.wallet); }

/* ---------- Events ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
  renderClub();
  renderWallet();

  ["searchInput", "catFilter", "roastFilter", "priceRange"].forEach((id) =>
    $(id).addEventListener("input", renderProducts));
  $("resetFilters").addEventListener("click", () => {
    $("searchInput").value = "";
    $("catFilter").value = "all";
    $("roastFilter").value = "all";
    $("priceRange").value = 2500000;
    renderProducts();
  });

  document.querySelectorAll("[data-cat-jump]").forEach((b) =>
    b.addEventListener("click", () => {
      $("catFilter").value = b.dataset.catJump;
      renderProducts();
      document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    }));

  document.querySelectorAll(".cur-btn").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll(".cur-btn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      state.currency = b.dataset.cur;
      renderProducts();
      renderCart();
      renderWallet();
      if (!$("productModal").hidden) updateModalPrice();
    }));

  $("burgerBtn").addEventListener("click", () => $("mainNav").classList.toggle("open"));
  document.querySelectorAll("#mainNav a").forEach((a) =>
    a.addEventListener("click", () => $("mainNav").classList.remove("open")));

  $("modalClose").addEventListener("click", () => { $("productModal").hidden = true; });
  $("productModal").addEventListener("click", (e) => { if (e.target === e.currentTarget) e.currentTarget.hidden = true; });
  ["mWeight", "mGrind", "mSub"].forEach((id) => $(id).addEventListener("change", updateModalPrice));
  $("mAdd").addEventListener("click", addFromModal);

  $("cartBtn").addEventListener("click", openDrawer);
  $("drawerClose").addEventListener("click", closeDrawer);
  $("drawerBackdrop").addEventListener("click", closeDrawer);

  $("checkoutBtn").addEventListener("click", openCheckout);
  $("backToCartBtn").addEventListener("click", () => {
    $("checkoutView").hidden = true;
    $("cartItems").style.display = "";
    $("cartFoot").style.display = "";
  });
  $("payMethod").addEventListener("change", updatePayUI);
  $("payBtn").addEventListener("click", doPay);

  $("redeemBtn").addEventListener("click", redeem);
  $("chargeBtn").addEventListener("click", () => {
    state.wallet += 200000;
    renderWallet();
    toast("کیف پول ۲۰۰٬۰۰۰ تومان شارژ شد");
  });
  $("walletHistoryBtn").addEventListener("click", () => {
    const h = $("walletHistory");
    h.hidden = !h.hidden;
  });
});
