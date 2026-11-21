"use strict";

/* ============ Sample dataset — the "fetched" Instagram page (MVP simulation) ============ */
const SAMPLE = {
  handle: "doctor.jabbari",
  name: "دکتر آرزو جباری",
  tagline: "فیلر بادی و زیبایی — تهران",
  logo: "assets/img/logo.jpg",
  hero: "assets/img/hero.jpg",
  phone: "09029383491",
  phone2: "02188192546",
  whatsapp: "989029383491",
  addresses: [
    "جردن، بلوار میرداماد، ساختمان ۳۴۹، طبقه ۱۳",
    "سعادت‌آباد، مرکز پزشکی تهران، سرو شرقی، کوچه سوم، پلاک ۱ واحد ۲"
  ],
  services: [
    { t: "فیلر بادی", d: "فرم‌دهی باسن و سینه بدون جراحی، با فیلرهای تخصصی بادی.", img: "assets/img/filler.jpg" },
    { t: "تزریق ژل", d: "حجم‌دهی و فرم‌دهی طبیعی لب و صورت با ژل‌های معتبر.", img: "assets/img/gel.jpg" },
    { t: "بوتاکس", d: "رفع چین‌وچروک پیشانی، دور چشم و خط اخم.", img: "assets/img/botox.jpg" },
    { t: "فیلر گونه", d: "برجسته‌سازی و لیفت گونه برای فرم جوان‌تر صورت.", img: "assets/img/cheek.jpg" },
    { t: "پروفایلو", d: "آبرسانی عمیق و جوانسازی پوست با پروفایلو اصل.", img: "assets/img/profhilo.jpg" },
    { t: "مزوژل", d: "تغذیه و شفافیت پوست با کوکتل‌های مزوژل.", img: "assets/img/mesogel.jpg" },
    { t: "جالپرو", d: "تحریک کلاژن‌سازی و بهبود کیفیت پوست با جالپرو.", img: "assets/img/jalupro.jpg" }
  ],
  gallery: [
    "assets/img/gallery-interior.jpg", "assets/img/gallery-lounge.jpg",
    "assets/img/gallery-portrait.jpg", "assets/img/gallery-reception.jpg",
    "assets/img/gallery-room.jpg", "assets/img/gallery-treatment.jpg",
    "assets/img/consult.jpg"
  ],
  steps: [
    { t: "مشاوره و معاینه", d: "بررسی فرم بدن و انتظارات شما و انتخاب بهترین روش." },
    { t: "طراحی فرم اختصاصی", d: "طراحی فرم متناسب با اندام و سلیقه خودتان، قبل از شروع کار." },
    { t: "انجام کار", d: "تزریق با مواد اصل و تکنیک تخصصی فیلر بادی." },
    { t: "مراقبت و پیگیری", d: "آموزش مراقبت‌های بعد از کار و پیگیری نتیجه در جلسات بعد." }
  ],
  faq: [
    { q: "فیلر بادی چقدر ماندگاری دارد؟", a: "ماندگاری به نوع فیلر، ناحیه تزریق و شرایط بدن هر فرد بستگی دارد و در جلسه مشاوره دقیق‌تر توضیح داده می‌شود." },
    { q: "آیا فیلر بادی نیاز به جراحی و بیهوشی دارد؟", a: "خیر؛ فیلر بادی یک روش غیرجراحی است و در مطب انجام می‌شود." },
    { q: "دوران نقاهت چقدر است؟", a: "بیشتر افراد بلافاصله به کارهای روزمره برمی‌گردند؛ مراقبت‌های لازم بعد از کار به شما گفته می‌شود." },
    { q: "چطور نوبت بگیرم؟", a: "از فرم رزرو همین سایت یا تماس و واتساپ می‌توانید نوبت مشاوره بگیرید." }
  ]
};

const PALETTES = [
  { id: "wine",      name: "شرابی / طلایی",   dots: ["#7a2233", "#5c1a2b", "#c9a24b"] },
  { id: "emerald",   name: "زمردی / مریم‌گلی", dots: ["#2f5d46", "#1f4230", "#b08d4f"] },
  { id: "navy",      name: "سرمه‌ای / کهربایی", dots: ["#1d2f52", "#121e36", "#e0a458"] },
  { id: "plum",      name: "بنفش / پلوم",      dots: ["#4a2545", "#30152c", "#cf92b4"] },
  { id: "teal",      name: "فیروزه‌ای",        dots: ["#0e6b6b", "#074747", "#e8b34b"] },
  { id: "blackgold", name: "مشکی / طلایی",     dots: ["#232323", "#000000", "#c9a24b"] }
];
const TEMPLATES = { classic: "کلاسیک", modern: "مدرن", minimal: "مینیمال" };
const SECTION_DEFS = [
  { key: "services", label: "خدمات" },
  { key: "gallery",  label: "گالری" },
  { key: "steps",    label: "مراحل کار" },
  { key: "faq",      label: "پرسش‌های رایج" },
  { key: "booking",  label: "فرم رزرو" },
  { key: "contact",  label: "تماس" }
];

/* ============ State ============ */
const state = {
  handle: "doctor.jabbari",
  data: JSON.parse(JSON.stringify(SAMPLE)),
  template: "classic",
  palette: "wine",
  sections: { services: true, gallery: true, steps: true, faq: true, booking: true, contact: true }
};

const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const telHref = (p) => { const d = String(p || "").replace(/[^0-9+]/g, ""); return d.startsWith("0") ? "+98" + d.slice(1) : d; };
const slugify = (h) => String(h || "").toLowerCase().replace(/[^a-z0-9]/g, "") || "mysite";

/* ============ Generated-site renderer ============ */
function renderSite(frame) {
  const d = state.data, S = state.sections;
  const navItems = [];
  if (S.services) navItems.push(["#services", "خدمات"]);
  if (S.gallery) navItems.push(["#gallery", "گالری"]);
  if (S.steps) navItems.push(["#steps", "مراحل کار"]);
  if (S.faq) navItems.push(["#faq", "پرسش‌ها"]);
  if (S.booking) navItems.push(["#booking", "رزرو نوبت"]);
  if (S.contact) navItems.push(["#contact", "تماس"]);

  const header = `
  <header class="site-header">
    <a class="site-brand" href="#">
      <img src="${d.logo}" alt="لوگوی ${esc(d.name)}">
      <span><span class="sb-name">${esc(d.name)}</span><span class="sb-tag">${esc(d.tagline)}</span></span>
    </a>
    <nav class="site-nav">${navItems.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}</nav>
    <div class="site-head-actions"><a class="site-call" href="tel:${telHref(d.phone)}">📞 تماس</a></div>
  </header>`;

  const heroText = `
      <h1>${esc(d.name)}<br><em>${esc(d.tagline)}</em></h1>
      <p>برای مشاوره و رزرو نوبت، همین حالا از همین سایت اقدام کنید؛ بدون واسطه، مستقیم با مطب در ارتباطید.</p>
      <div class="site-cta-row">
        ${S.booking ? `<a class="site-btn" href="#booking">رزرو نوبت</a>` : ""}
        ${S.services ? `<a class="site-btn ghosty" href="#services">مشاهده خدمات</a>` : ""}
      </div>`;
  const heroCard = `
    <div class="site-hero-card">
      <img src="${d.logo}" alt="">
      <div><strong>${esc(d.name)}</strong><small dir="ltr">${esc(d.phone)}</small></div>
      <span class="hc-badge">پاسخگوی نوبت‌دهی</span>
    </div>`;
  let hero = "";
  if (state.template === "modern") {
    hero = `
    <section class="site-hero">
      <div class="site-hero-img">
        <img src="${d.hero}" alt="${esc(d.name)}">
        <div class="hero-overlay">${heroText}</div>
      </div>
      <div class="site-hero-card-wrap">${heroCard}</div>
    </section>`;
  } else if (state.template === "minimal") {
    hero = `
    <section class="site-hero">
      <div class="hero-text">
        <img class="hero-logo-big" src="${d.logo}" alt="">
        ${heroText}
      </div>
      <div class="site-hero-img"><img src="${d.hero}" alt="${esc(d.name)}"></div>
      ${heroCard}
    </section>`;
  } else {
    hero = `
    <section class="site-hero">
      <div class="hero-text">${heroText}</div>
      <div class="hero-media">
        <div class="site-hero-img"><img src="${d.hero}" alt="${esc(d.name)}"></div>
        ${heroCard}
      </div>
    </section>`;
  }

  const sec = [];
  if (S.services) sec.push(`
    <section class="site-sec" id="services">
      <h2 class="site-sec-title">خدمات ما</h2>
      <p class="site-sec-sub">خدمات تخصصی ${esc(d.name)}</p>
      <div class="svc-grid">
        ${d.services.map((s) => `<article class="svc-card"><img src="${s.img}" alt="${esc(s.t)}"><div class="svc-txt"><h4>${esc(s.t)}</h4><p>${esc(s.d)}</p></div></article>`).join("")}
      </div>
    </section>`);
  if (S.gallery) sec.push(`
    <section class="site-sec" id="gallery">
      <h2 class="site-sec-title">گالری</h2>
      <p class="site-sec-sub">از فضای مطب و نمونه‌کارها</p>
      <div class="gal-grid">${d.gallery.map((g) => `<img src="${g}" alt="گالری ${esc(d.name)}" loading="lazy">`).join("")}</div>
    </section>`);
  if (S.steps) sec.push(`
    <section class="site-sec" id="steps">
      <h2 class="site-sec-title">مراحل کار</h2>
      <p class="site-sec-sub">از مشاوره تا نتیجه، قدم‌به‌قدم کنارتانیم</p>
      <div class="steps-list">
        ${d.steps.map((s) => `<div class="step-item"><span class="st-num"></span><div><h4>${esc(s.t)}</h4><p>${esc(s.d)}</p></div></div>`).join("")}
      </div>
    </section>`);
  if (S.faq) sec.push(`
    <section class="site-sec" id="faq">
      <h2 class="site-sec-title">پرسش‌های رایج</h2>
      <p class="site-sec-sub">پاسخ سوال‌هایی که بیشتر پرسیده می‌شود</p>
      ${d.faq.map((f) => `<details class="faq-item"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("")}
    </section>`);
  if (S.booking) sec.push(`
    <section class="site-sec" id="booking">
      <h2 class="site-sec-title">رزرو نوبت</h2>
      <p class="site-sec-sub">فرم را پر کنید؛ برای هماهنگی باهاتان تماس می‌گیریم</p>
      <form class="book-form" data-book-form>
        <input type="text" name="n" placeholder="نام و نام خانوادگی" required>
        <input type="tel" name="m" placeholder="شماره موبایل" required>
        <select name="s">${d.services.map((s) => `<option>${esc(s.t)}</option>`).join("")}</select>
        <button type="submit" class="site-btn" style="justify-content:center">ثبت درخواست نوبت</button>
        <p class="book-done" hidden>درخواست شما ثبت شد ✅ به‌زودی برای هماهنگی تماس می‌گیریم.</p>
      </form>
    </section>`);
  if (S.contact) sec.push(`
    <section class="site-sec" id="contact">
      <div class="contact-card">
        <h3>تماس و آدرس</h3>
        ${d.addresses.map((a) => `<p>📍 ${esc(a)}</p>`).join("")}
        <p>📞 <span dir="ltr">${esc(d.phone)}</span>${d.phone2 ? ` — <span dir="ltr">${esc(d.phone2)}</span>` : ""}</p>
        <div class="site-cta-row">
          <a class="site-btn" href="tel:${telHref(d.phone)}">تماس مستقیم</a>
          <a class="site-btn ghosty" href="https://wa.me/${d.whatsapp}" target="_blank" rel="noopener">واتساپ</a>
        </div>
      </div>
    </section>`);

  frame.innerHTML = `
  <div class="site" data-tpl="${state.template}" data-palette="${state.palette}">
    ${header}
    <div class="site-body">
      ${hero}
      ${sec.join("")}
      <footer class="site-footer">ساخته‌شده با <b>اینستاسایت</b> — محصول اپ‌وبینو</footer>
    </div>
  </div>`;

  const form = frame.querySelector("[data-book-form]");
  if (form) form.addEventListener("submit", (e) => {
    e.preventDefault();
    const done = form.querySelector(".book-done");
    if (done) done.hidden = false;
  });
}

function renderStudio() { renderSite($("#previewFrame")); }

/* ============ Step flow ============ */
function goStep(n) {
  [1, 2, 3, 4].forEach((i) => {
    const el = $("#step" + i);
    if (el) el.hidden = i !== n;
    if (el && i === n) { el.classList.remove("active"); void el.offsetWidth; el.classList.add("active"); }
  });
  $$("#stepsNav li").forEach((li) => {
    const s = Number(li.dataset.step);
    li.classList.toggle("active", s === n);
    li.classList.toggle("done", s < n);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startFetch(handle) {
  state.handle = handle;
  $("#fetchHandle").textContent = "@" + handle;
  goStep(2);
  const items = $$("#fetchSteps li");
  items.forEach((li) => li.classList.remove("doing", "done"));
  $("#fetchBar").style.width = "0%";
  const total = items.length;
  items.forEach((li, i) => {
    setTimeout(() => { li.classList.add("doing"); $("#fetchBar").style.width = Math.round(((i + 0.6) / total) * 100) + "%"; }, 350 + i * 640);
    setTimeout(() => { li.classList.remove("doing"); li.classList.add("done"); $("#fetchBar").style.width = Math.round(((i + 1) / total) * 100) + "%"; }, 350 + (i + 1) * 640);
  });
  setTimeout(() => { initStudio(); goStep(3); }, 350 + total * 640 + 450);
}

/* ============ Landing ============ */
$("#handleForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const raw = $("#handleInput").value.trim().replace(/^@+/, "").replace(/\s+/g, "");
  if (!/^[a-zA-Z0-9._]{2,30}$/.test(raw)) { $("#formError").hidden = false; return; }
  $("#formError").hidden = true;
  startFetch(raw.toLowerCase());
});
$("#sampleBtn").addEventListener("click", () => { $("#handleInput").value = SAMPLE.handle; startFetch(SAMPLE.handle); });

/* ============ Studio init ============ */
let studioReady = false;
function initStudio() {
  if (studioReady) { renderStudio(); return; }
  studioReady = true;

  const pg = $("#paletteGrid");
  pg.innerHTML = PALETTES.map((p) => `
    <button type="button" class="palette-btn ${p.id === state.palette ? "active" : ""}" data-palette="${p.id}">
      <span class="palette-dots">${p.dots.map((c) => `<i style="background:${c}"></i>`).join("")}</span>${p.name}
    </button>`).join("");
  pg.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-palette]"); if (!btn) return;
    state.palette = btn.dataset.palette;
    $$(".palette-btn", pg).forEach((b) => b.classList.toggle("active", b === btn));
    renderStudio();
  });

  const tl = $("#toggleList");
  tl.innerHTML = SECTION_DEFS.map((s) => `
    <label class="toggle-row"><input type="checkbox" data-section="${s.key}" ${state.sections[s.key] ? "checked" : ""}><span class="toggle-ui"></span>${s.label}</label>`).join("");
  tl.addEventListener("change", (e) => {
    const k = e.target.dataset.section; if (!k) return;
    state.sections[k] = e.target.checked;
    renderStudio();
  });

  $("#tplGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-tpl]"); if (!btn) return;
    state.template = btn.dataset.tpl;
    $$("#tplGrid .tpl-card").forEach((b) => b.classList.toggle("active", b === btn));
    renderStudio();
  });

  $$(".dev-btn").forEach((b) => b.addEventListener("click", () => {
    $$(".dev-btn").forEach((x) => x.classList.toggle("active", x === b));
    $("#previewStage").classList.toggle("wide", b.dataset.dev === "wide");
  }));

  const bind = (id, fn) => $(id).addEventListener("input", (e) => { fn(e.target.value); renderStudio(); });
  $("#editName").value = state.data.name;
  $("#editTagline").value = state.data.tagline;
  $("#editPhone").value = state.data.phone;
  $("#editAddress").value = state.data.addresses[0];
  bind("#editName", (v) => state.data.name = v);
  bind("#editTagline", (v) => state.data.tagline = v);
  bind("#editPhone", (v) => state.data.phone = v);
  bind("#editAddress", (v) => state.data.addresses[0] = v);

  renderStudio();
}

/* ============ Delivery ============ */
$("#toDeliveryBtn").addEventListener("click", () => {
  renderSite($("#deliveryFrame"));
  $("#liveUrl").textContent = slugify(state.handle) + ".appwebino.ir";
  const pal = PALETTES.find((p) => p.id === state.palette);
  const onSections = SECTION_DEFS.filter((s) => state.sections[s.key]).map((s) => s.label);
  $("#siteSummary").innerHTML = `
    <strong>سایت من — ${esc(state.data.name)}</strong>
    <ul>
      <li>قالب: ${TEMPLATES[state.template]}</li>
      <li>تم رنگی: ${pal ? pal.name : ""}</li>
      <li>بخش‌های فعال: ${onSections.join("، ")}</li>
      <li>آدرس: <span dir="ltr">${slugify(state.handle)}.appwebino.ir</span></li>
    </ul>`;
  goStep(4);
});

$("#copyLinkBtn").addEventListener("click", async () => {
  const url = "https://" + $("#liveUrl").textContent.trim();
  try { await navigator.clipboard.writeText(url); }
  catch (err) {
    const ta = document.createElement("textarea");
    ta.value = url; document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); ta.remove();
  }
  $("#copyDone").hidden = false;
  setTimeout(() => { $("#copyDone").hidden = true; }, 2600);
});

$("#viewSiteBtn").addEventListener("click", () => {
  $(".delivery-preview").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#domainForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const ok = $("#domainInput").value.trim() && $("#domainName").value.trim() && $("#domainMobile").value.trim();
  if (!ok) { $("#domainError").hidden = false; return; }
  $("#domainError").hidden = true;
  $("#domainForm").hidden = true;
  $("#domainDone").hidden = false;
});

$("#restartBtn").addEventListener("click", () => { $("#handleInput").value = ""; goStep(1); });

/* ============ PWA ============ */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); deferredPrompt = e; $("#installBtn").hidden = false; });
$("#installBtn").addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  $("#installBtn").hidden = true;
});
