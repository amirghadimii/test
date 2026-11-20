"use strict";

/* ==========================================================================
   NOKAM Specialty Coffee — Application Logic
   Persian RTL Interactive Prototype (Redesigned Editorial Experience)
   ========================================================================== */

/* ---------- Product Catalog Data ---------- */
const PRODUCTS = [
  {
    id: 1,
    name: "دانه قهوه اتیوپی یرگاچف",
    cat: "beans",
    roast: "light",
    roastDots: 2,
    price: 685000,
    origin: "اتیوپی، یرگاچف (۱۹۵۰متر)",
    process: "شسته‌شده (Washed)",
    cupping: "۸۸.۵",
    tasting: ["یاس", "هلو", "چای سیاه", "مرکبات"],
    notes: "نت‌های یاس، هلو و چای سیاه — اسیدیته روشن میوه‌ای و پایان تمیز با برشت روشن تخصصی",
    brewRatio: "۱:۱۶ (۱۵g به ۲۴۰ml)",
    brewTemp: "۹۳ درجه سانتی‌گراد",
    img: "assets/u-1514432324607-a09d9b4aefdd.jpg",
    featured: true
  },
  {
    id: 2,
    name: "دانه قهوه کلمبیا سوپریمو",
    cat: "beans",
    roast: "medium",
    roastDots: 3,
    price: 590000,
    origin: "کلمبیا، اویلا (۱۷۵۰متر)",
    process: "نچرال (Natural)",
    cupping: "۸۷.۰",
    tasting: ["کارامل", "فندق", "پرتقال"],
    notes: "کارامل، فندق و پرتقال — متعادل، همه‌پسند با بادی مخملی و شیرینی طبیعی عسل",
    brewRatio: "۱:۱۵ (۱۶g به ۲۴۰ml)",
    brewTemp: "۹۲ درجه سانتی‌گراد",
    img: "assets/u-1447933601403-0c6688de566e.jpg",
    featured: true
  },
  {
    id: 3,
    name: "دانه قهوه برزیل سرادو",
    cat: "beans",
    roast: "medium",
    roastDots: 3,
    price: 520000,
    origin: "برزیل، سرادو میناس (۱۲۰۰متر)",
    process: "پالپد نچرال (Pulped)",
    cupping: "۸۵.۵",
    tasting: ["شکلات تلخ", "بادام برشته", "شکر قهوه‌ای"],
    notes: "شکلات تلخ، بادام برشته و شکر قهوه‌ای — بدنه سنگین، کرمای غنی و اسیدیته کم",
    brewRatio: "۱:۱۴ (۱۷g به ۲۴۰ml)",
    brewTemp: "۹۱ درجه سانتی‌گراد",
    img: "assets/u-1512568400610-62da28bc8a13.jpg",
    featured: false
  },
  {
    id: 4,
    name: "دانه قهوه کنیا AA",
    cat: "beans",
    roast: "light",
    roastDots: 2,
    price: 720000,
    origin: "کنیا، نیری (۲۰۰۰متر)",
    process: "دابل واش (Double Washed)",
    cupping: "۸۹.۲",
    tasting: ["انگور سیاه", "گریپ‌فروت", "توت‌فرنگی"],
    notes: "انگور سیاه، گریپ‌فروت و شکر سوخته — پرجنب‌وجوش با اسیدیته میوه‌ای درخشان و پایان غنی",
    brewRatio: "۱:۱۶ (۱۵g به ۲۴۰ml)",
    brewTemp: "۹۴ درجه سانتی‌گراد",
    img: "assets/u-1509042239860-f550ce710b93.jpg",
    featured: true
  },
  {
    id: 5,
    name: "اسپرسو بلِند نو‌کام (آسیاب‌شده)",
    cat: "ground",
    roast: "dark",
    roastDots: 5,
    price: 540000,
    origin: "بلند اختصاصی آمریکای لاتین و آفریقا",
    process: "بلِند تخصصی ۷۰/۳۰",
    cupping: "۸۶.۰",
    tasting: ["شکلات تلخ", "کارامل سوخته", "ادویه‌ای"],
    notes: "ترکیب ۷۰٪ عربیکا / ۳۰٪ روبوستا — کرمای بسیار غلیظ، شکلات و دود ملایم برای موکاپات و اسپرسو",
    brewRatio: "۱:۲ (۱۸g پودر به ۳۶g عصاره)",
    brewTemp: "۹۰ درجه سانتی‌گراد",
    img: "assets/u-1510707577719-ae7c14805e3a.jpg",
    featured: true
  },
  {
    id: 6,
    name: "قهوه ترک سنتی نو‌کام (آسیاب‌شده)",
    cat: "ground",
    roast: "medium",
    roastDots: 3,
    price: 380000,
    origin: "یمن و برزیل سنتی",
    process: "آسیاب فوق‌العاده ریز سنگی",
    cupping: "۸۴.۵",
    tasting: ["هل سبز", "کاکائو", "وانیل"],
    notes: "آسیاب بسیار ریز و یکدست مخصوص جذوه و ایبریک سنتی — رایحه هل سبز طبیعی و کاکائوی اصیل",
    brewRatio: "۱:۱۰ (۷g پودر به ۷۰ml آب سرد)",
    brewTemp: "دم‌آوری آرام روی شعله ملایم",
    img: "assets/u-1541167760496-1628856ab772.jpg",
    featured: false
  },
  {
    id: 7,
    name: "دکاف کلمبیا بدون کافئین (آسیاب‌شده)",
    cat: "ground",
    roast: "medium",
    roastDots: 3,
    price: 610000,
    origin: "کلمبیا، کالداس (۱۶۰۰متر)",
    process: "آب سوئیسی (Swiss Water 100%)",
    cupping: "۸۵.۰",
    tasting: ["سیب سرخ", "عسل", "فندق"],
    notes: "کافئین‌زدایی ۱۰۰٪ طبیعی بدون مواد شیمیایی — طعم کامل قهوه تخصصی، مناسب عصرگاه و خواب آرام",
    brewRatio: "۱:۱۵ (۱۶g به ۲۴۰ml)",
    brewTemp: "۹۲ درجه سانتی‌گراد",
    img: "assets/u-1495474472287-4d71bcdd2085.jpg",
    featured: false
  },
  {
    id: 8,
    name: "موکاپات استیل ۶ کاپ",
    cat: "equipment",
    roast: null,
    roastDots: 0,
    price: 1850000,
    origin: "طراحی ایتالیا — استیل ۱۸/۱۰",
    process: "فولاد ضدزنگ مقاوم حرارتی",
    cupping: "گرید A",
    tasting: ["اسپرسوساز روگازی", "دسته نسوز ارگونومیک"],
    notes: "استیل ضدزنگ ۱۸/۱۰ ضخیم، سازگار با اجاق‌های القایی، گازی و المنتی، سوپاپ اطمینان برنجی",
    brewRatio: "ظرفیت ۳۰۰ میلی‌لیتر (۶ فنجان)",
    brewTemp: "شعله ملایم تا متوسط",
    img: "assets/u-1520970014086-2208d157c9e2.jpg",
    featured: true
  },
  {
    id: 9,
    name: "فرنچ‌پرس شیشه‌ای ۸۰۰ میلی‌لیتر",
    cat: "equipment",
    roast: null,
    roastDots: 0,
    price: 940000,
    origin: "شیشه بوروسیلیکات و چوب گردو",
    process: "فیلتر ۴ لایه استیل ریزبافت",
    cupping: "گرید A",
    tasting: ["دم‌آوری دمی و فوم‌شیر", "دسته چوب طبیعی"],
    notes: "شیشه بوروسیلیکات نشکن ضدشوک حرارتی، فیلتر استیل ضدزنگ با واشر سیلیکونی، بدنه چوب گردو",
    brewRatio: "مناسب دم‌آوری ۳ تا ۴ فنجان قهوه",
    brewTemp: "۹۴ درجه سانتی‌گراد (۴ دقیقه دم)",
    img: "assets/u-1572119865084-43c285814d63.jpg",
    featured: false
  },
  {
    id: 10,
    name: "آسیاب دستی استیل با تیغه سرامیکی",
    cat: "equipment",
    roast: null,
    roastDots: 0,
    price: 1290000,
    origin: "مکانیزم فولاد و سرامیک سخت",
    process: "تنظیم پله‌ای درجات آسیاب",
    cupping: "گرید A",
    tasting: ["تنظیم درجه آسیاب", "کم‌صدا و سفری"],
    notes: "قابلیت تنظیم میکرومتری از اسپرسو ریز تا فرنچ‌پرس درشت، تیغه مخروطی سرامیکی بدون حرارت‌دهی به دانه",
    brewRatio: "ظرفیت مخزن: ۳۵ گرم دانه قهوه",
    brewTemp: "تیغه مخروطی ضدسایش",
    img: "assets/u-1611854779393-1b2da9d400fe.jpg",
    featured: false
  }
];

/* ---------- Lookup Dictionaries & Factors ---------- */
const CAT_NAMES = {
  beans: "دانه قهوه تخصصی",
  ground: "قهوه آسیاب‌شده",
  equipment: "تجهیزات دم‌آوری"
};

const ROAST_NAMES = {
  light: "روشن (Light)",
  medium: "متوسط (Medium)",
  dark: "تیره (Dark)"
};

const ROAST_LEVEL = {
  light: 33,
  medium: 66,
  dark: 100
};

const WEIGHT_MULT = {
  250: 1,
  500: 1.9,
  1000: 3.6
};

// Rates relative to Toman (IRR = 1 Toman)
const RATES = {
  IRR: 1,
  USD: 62000,
  AED: 17000
};

const FREE_SHIP = 500000;
const SHIP_COST = 45000;

/* ---------- Persistent Application State ---------- */
const STORAGE_KEY = "nokam_coffee_state_v2";

function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        currency: parsed.currency || "IRR",
        cart: Array.isArray(parsed.cart) ? parsed.cart : [],
        wallet: typeof parsed.wallet === "number" ? parsed.wallet : 350000,
        points: typeof parsed.points === "number" ? parsed.points : 2450,
        modalPid: null,
        modalQty: 1,
        history: Array.isArray(parsed.history) ? parsed.history : null
      };
    }
  } catch (e) {
    console.warn("Storage load error:", e);
  }
  return {
    currency: "IRR",
    cart: [],
    wallet: 350000,
    points: 2450,
    modalPid: null,
    modalQty: 1,
    history: null
  };
}

const state = loadSavedState();

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      currency: state.currency,
      cart: state.cart,
      wallet: state.wallet,
      points: state.points,
      history: state.history
    }));
  } catch (e) {
    console.warn("Storage save error:", e);
  }
}

/* ---------- Utility Helpers ---------- */
const $ = (id) => document.getElementById(id);

function faDigits(s) {
  return String(s).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

// Normalize Persian/Arabic digits to Latin (card inputs use Persian digits)
function toEnDigits(s) {
  return String(s)
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));
}

function group(n) {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "٬");
}

function fmt(toman) {
  if (state.currency === "IRR") {
    return faDigits(group(toman)) + " تومان";
  }
  const val = toman / RATES[state.currency];
  const s = val >= 100 ? val.toFixed(0) : val.toFixed(2);
  const formattedNum = val >= 1000 ? group(Math.round(val)) : s;
  return (state.currency === "USD" ? "$" : "د.إ ") + formattedNum;
}

// Jalali (Persian calendar) date for a Date, e.g. ۱۴۰۵/۰۹/۱۹ — used for instalment due dates & wallet history
function jalaliDate(date) {
  try {
    return new Intl.DateTimeFormat("fa-IR", { year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
  } catch (e) {
    return faDigits(date.toLocaleDateString("fa-IR"));
  }
}
function jalaliAfter(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return jalaliDate(d);
}

let toastTimer = null;
function toast(msg) {
  const t = $("toast");
  if (!t) return;
  t.textContent = msg;
  t.hidden = false;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.hidden = true;
  }, 2800);
}

// Helper to render 5-segment roast dots (like authentic specialty coffee bag labels)
function renderRoastDots(dots) {
  let html = `<div class="card-roast-meter" title="درجه برشتگی ${dots} از ۵">`;
  html += `<span class="roast-meter-label">برشت:</span>`;
  html += `<div class="roast-dots-track">`;
  for (let i = 1; i <= 5; i++) {
    html += `<span class="roast-dot ${i <= dots ? 'active' : ''}"></span>`;
  }
  html += `</div></div>`;
  return html;
}

/* ---------- Product Grid & Filter System ---------- */
function renderProducts() {
  const q = ($("searchInput")?.value || "").trim().toLowerCase();
  const cat = $("catFilter")?.value || "all";
  const roast = $("roastFilter")?.value || "all";
  const sort = $("sortFilter")?.value || "featured";
  const maxPrice = Number($("priceRange")?.value || 2500000);

  if ($("priceLabel")) {
    $("priceLabel").textContent = fmt(maxPrice);
  }

  // Update clear button visibility
  const clearBtn = $("clearSearch");
  if (clearBtn) {
    clearBtn.hidden = q.length === 0;
  }

  // Sync category tabs active state
  document.querySelectorAll(".cat-tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === cat);
  });

  // Filter products
  let list = PRODUCTS.filter((p) => {
    const matchCat = cat === "all" || p.cat === cat;
    const matchRoast = roast === "all" || p.roast === roast;
    const matchPrice = p.price <= maxPrice;
    const matchQuery =
      q === "" ||
      p.name.toLowerCase().includes(q) ||
      p.notes.toLowerCase().includes(q) ||
      p.origin.toLowerCase().includes(q) ||
      (p.tasting && p.tasting.some((t) => t.toLowerCase().includes(q)));
    return matchCat && matchRoast && matchPrice && matchQuery;
  });

  // Sort products
  if (sort === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (sort === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name, "fa"));
  } else {
    // featured: featured first, then original order
    list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  const grid = $("productGrid");
  if (!grid) return;

  grid.innerHTML = list.map((p) => {
    const isEq = p.cat === "equipment";
    const roastLabel = p.roast ? ROAST_NAMES[p.roast] : null;
    const installmentPrice = Math.ceil(p.price / 4);

    const tastingChips = p.tasting
      ? p.tasting.slice(0, 3).map((t) => `<span class="tasting-chip">${t}</span>`).join("")
      : "";

    const roastDisplay = isEq
      ? `<span class="card-equip-spec">استاندارد باریستا · گارانتی سلامت فیزیکی</span>`
      : renderRoastDots(p.roastDots || (p.roast === "light" ? 2 : p.roast === "medium" ? 3 : 5));

    // ref-1 card anatomy: option-selector row on the card itself (weight chips open the modal preset, with per-weight price per SECTION-MAP §5)
    const weightChips = isEq
      ? `<span class="card-equip-note">تجهیزات تخصصی دم‌آوری</span>`
      : [250, 500, 1000].map((w) =>
          `<button type="button" class="weight-chip" data-view="${p.id}" data-weight="${w}"><span>${w === 1000 ? "۱ کیلوگرم" : faDigits(w) + " گرم"}</span><small>${fmt(Math.round(p.price * (WEIGHT_MULT[w] || 1)))}</small></button>`
        ).join("");

    return `
      <article class="card">
        <div class="card-media tint-${p.cat}">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='assets/u-1514432324607-a09d9b4aefdd.jpg';">
          ${p.featured ? `<span class="card-featured-pill">پیشنهاد برشت‌کار</span>` : ""}
          <span class="card-origin-stamp">${p.origin}</span>
        </div>
        <div class="card-main">
          <div class="card-name-row">
            <h3 class="card-title">${p.name}</h3>
            <span class="card-price-wrap">${isEq ? "" : "<small>از</small>"}<strong class="card-price-main">${fmt(p.price)}</strong></span>
          </div>
          <div class="card-meta-row">
            <span class="card-cat">${CAT_NAMES[p.cat]}</span>
            <span class="card-score">کاپینگ SCA: ${faDigits(p.cupping)}</span>
            ${roastLabel ? `<span class="card-roast-name">${roastLabel}</span>` : ""}
          </div>
          <div class="card-specs-row">${roastDisplay}</div>
          <div class="card-tasting-chips">${tastingChips}</div>
          <div class="card-weights">${weightChips}</div>
          <div class="card-foot">
            <span class="card-installment-sub">یا ۴ قسط ماهانه ${fmt(installmentPrice)}</span>
            <button class="btn btn-small btn-pill" data-view="${p.id}" type="button">مشاهده و خرید</button>
          </div>
        </div>
      </article>`;
  }).join("");

  if ($("resultCount")) {
    $("resultCount").textContent = faDigits(list.length) + " محصول در حال نمایش است";
  }

  const emptyMsg = $("emptyMsg");
  if (emptyMsg) {
    emptyMsg.hidden = list.length > 0;
  }

  // Attach modal view listeners (weight chips pass a preset weight)
  document.querySelectorAll("[data-view]").forEach((b) => {
    if (b.dataset.bound) return;
    b.dataset.bound = "1";
    b.addEventListener("click", () =>
      openModal(Number(b.dataset.view), b.dataset.weight ? Number(b.dataset.weight) : undefined)
    );
  });
}

/* ---------- Product Detail Modal System ---------- */
function openModal(pid, presetWeight) {
  state.modalPid = pid;
  state.modalQty = 1;
  const p = PRODUCTS.find((x) => x.id === pid);
  if (!p) return;

  const mImg = $("mImg");
  if (mImg) {
    mImg.src = p.img;
    mImg.alt = p.name;
  }

  if ($("mName")) $("mName").textContent = p.name;
  if ($("mNotes")) $("mNotes").textContent = p.notes;
  if ($("mCategoryTag")) $("mCategoryTag").textContent = CAT_NAMES[p.cat];

  // Specifications
  if ($("mOrigin")) $("mOrigin").textContent = p.origin || "تک‌خاستگاه ویژه";
  if ($("mProcess")) $("mProcess").textContent = p.process || "استاندارد";
  if ($("mCupping")) $("mCupping").textContent = faDigits(p.cupping || "۸۷.۰");

  // Brew Guide Parameters (Bonmano Reference)
  if ($("mBrewRatio")) $("mBrewRatio").textContent = p.brewRatio || "۱:۱۶ (۱۵g به ۲۴۰ml)";
  if ($("mBrewTemp")) $("mBrewTemp").textContent = p.brewTemp || "۹۳ درجه سانتی‌گراد";

  const isEq = p.cat === "equipment";

  // Roast display
  if ($("mRoast")) $("mRoast").textContent = isEq ? "تجهیزات (فاقد برشت)" : ROAST_NAMES[p.roast];
  if ($("mRoastFill")) $("mRoastFill").style.width = isEq ? "0%" : ROAST_LEVEL[p.roast] + "%";

  // Weight block & select sync (preset comes from the card's weight chips)
  const weightSelect = $("mWeight");
  if (weightSelect) {
    weightSelect.disabled = isEq;
    weightSelect.value = (!isEq && presetWeight && WEIGHT_MULT[presetWeight]) ? String(presetWeight) : "250";
  }
  const weightBlock = $("weightBlock");
  if (weightBlock) weightBlock.style.display = isEq ? "none" : "";

  // Reset weight pills to the effective weight
  const effectiveWeight = weightSelect ? weightSelect.value : "250";
  document.querySelectorAll(".pill-btn").forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.weight === effectiveWeight);
  });

  // Grind option
  const grindWrap = $("grindWrap");
  if (grindWrap) grindWrap.style.display = isEq ? "none" : "";
  if ($("mGrind")) $("mGrind").value = "دانه کامل";

  // Subscription checkbox
  const subCard = $("subscriptionCard");
  if (subCard) subCard.style.display = isEq ? "none" : "";
  if ($("mSub")) $("mSub").checked = false;

  // Quantity stepper reset
  if ($("mQtyVal")) $("mQtyVal").textContent = faDigits(state.modalQty);

  updateModalPrice();

  const modal = $("productModal");
  if (modal) {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  const modal = $("productModal");
  if (modal) {
    modal.hidden = true;
    document.body.style.overflow = "";
  }
}

function modalUnitPrice() {
  const p = PRODUCTS.find((x) => x.id === state.modalPid);
  if (!p) return 0;
  const isEq = p.cat === "equipment";
  const wVal = $("mWeight") ? $("mWeight").value : "250";
  let price = isEq ? p.price : p.price * (WEIGHT_MULT[wVal] || 1);
  if ($("mSub") && $("mSub").checked) {
    price *= 0.9; // 10% subscription discount
  }
  return Math.round(price);
}

function updateModalPrice() {
  const unitPrice = modalUnitPrice();
  const totalPrice = unitPrice * state.modalQty;
  if ($("mPrice")) {
    $("mPrice").textContent = fmt(totalPrice);
  }
}

function addFromModal() {
  const p = PRODUCTS.find((x) => x.id === state.modalPid);
  if (!p) return;
  const isEq = p.cat === "equipment";
  const weight = $("mWeight") ? $("mWeight").value : "250";
  const grind = $("mGrind") ? $("mGrind").value : "دانه کامل";
  const isSub = $("mSub") ? $("mSub").checked : false;

  const variant = isEq
    ? "تجهیزات تخصصی دم‌آوری"
    : faDigits(weight) + " گرم · " + grind + (isSub ? " · اشتراک ماهانه (۱۰٪ تخفیف)" : "");

  const key = p.id + "|" + variant;
  const existing = state.cart.find((i) => i.key === key);

  if (existing) {
    existing.qty += state.modalQty;
  } else {
    state.cart.push({
      key,
      pid: p.id,
      name: p.name,
      variant,
      unitPrice: modalUnitPrice(),
      qty: state.modalQty,
      isSub
    });
  }

  closeModal();
  persistState();
  renderCart();
  toast("«" + p.name + "» به سبد خرید اضافه شد");

  // Animate cart badge
  const cartCountEl = $("cartCount");
  if (cartCountEl) {
    cartCountEl.classList.add("bounce");
    setTimeout(() => cartCountEl.classList.remove("bounce"), 300);
  }
}

/* ---------- Cart Drawer System ---------- */
function cartTotals() {
  const sub = state.cart.reduce((s, i) => s + i.unitPrice * i.qty, 0);
  const ship = state.cart.length === 0 || sub >= FREE_SHIP ? 0 : SHIP_COST;
  return { sub, ship, total: sub + ship };
}

function renderCart() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  if ($("cartCount")) {
    $("cartCount").textContent = faDigits(count);
  }

  const itemsContainer = $("cartItems");
  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart-view">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p class="empty-cart-title">سبد خرید شما در حال حاضر خالی است.</p>
        <p class="empty-cart-sub">قهوه دلخواه خود را از بخش ویترین فروشگاه انتخاب کنید.</p>
      </div>`;
  } else {
    itemsContainer.innerHTML = state.cart.map((i) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <strong>${i.name}</strong>
          <small>${i.variant}</small>
          <span class="cart-item-price">${fmt(i.unitPrice * i.qty)}</span>
        </div>
        <div class="qty">
          <div class="qty-controls">
            <button data-dec="${i.key}" type="button" aria-label="کاهش">−</button>
            <span>${faDigits(i.qty)}</span>
            <button data-inc="${i.key}" type="button" aria-label="افزایش">+</button>
          </div>
          <button class="rm" data-rm="${i.key}" type="button">حذف</button>
        </div>
      </div>`).join("");

    document.querySelectorAll("[data-inc]").forEach((b) =>
      b.addEventListener("click", () => changeQty(b.dataset.inc, 1))
    );
    document.querySelectorAll("[data-dec]").forEach((b) =>
      b.addEventListener("click", () => changeQty(b.dataset.dec, -1))
    );
    document.querySelectorAll("[data-rm]").forEach((b) =>
      b.addEventListener("click", () => removeItem(b.dataset.rm))
    );
  }

  const t = cartTotals();
  if ($("cartSubtotal")) $("cartSubtotal").textContent = fmt(t.sub);
  if ($("cartShipping")) $("cartShipping").textContent = t.ship === 0 ? "رایگان (شامل ارسال ویژه)" : fmt(t.ship);
  if ($("cartTotal")) $("cartTotal").textContent = fmt(t.total);

  // Free shipping progress bar update
  const freeShipFill = $("freeShippingFill");
  const freeShipText = $("freeShippingText");
  if (freeShipFill && freeShipText) {
    const percent = Math.min(100, Math.round((t.sub / FREE_SHIP) * 100));
    freeShipFill.style.width = percent + "%";
    if (t.sub >= FREE_SHIP && state.cart.length > 0) {
      freeShipText.innerHTML = "<span>تبریک! سفارش شما شامل <strong>ارسال کاملاً رایگان</strong> شد.</span>";
    } else {
      const remaining = Math.max(0, FREE_SHIP - t.sub);
      freeShipText.innerHTML = `<span>تنها <strong>${fmt(remaining)}</strong> دیگر تا ارسال رایگان!</span>`;
    }
  }

  // Update checkout amounts if checkout view is open
  if ($("chkPayAmount")) {
    $("chkPayAmount").textContent = fmt(t.total);
  }
}

function changeQty(key, d) {
  const i = state.cart.find((x) => x.key === key);
  if (!i) return;
  i.qty += d;
  if (i.qty <= 0) {
    state.cart = state.cart.filter((x) => x.key !== key);
  }
  persistState();
  renderCart();
  if (!$("checkoutView")?.hidden) {
    updatePayUI();
  }
}

function removeItem(key) {
  state.cart = state.cart.filter((x) => x.key !== key);
  persistState();
  renderCart();
  if (!$("checkoutView")?.hidden) {
    updatePayUI();
  }
}

function openDrawer() {
  const drawer = $("cartDrawer");
  const backdrop = $("drawerBackdrop");
  if (!drawer) return;

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  if (backdrop) backdrop.hidden = false;

  // Ensure cart view is shown first (also restore checkout state left over from a previous visit)
  resetCheckout();
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  const drawer = $("cartDrawer");
  const backdrop = $("drawerBackdrop");
  if (!drawer) return;

  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  if (backdrop) backdrop.hidden = true;
  document.body.style.overflow = "";
}

/* ---------- Checkout & Payment Process ---------- */
function openCheckout() {
  if (state.cart.length === 0) {
    toast("سبد خرید شما خالی است.");
    return;
  }
  if ($("cartItems")) $("cartItems").style.display = "none";
  if ($("cartFoot")) $("cartFoot").style.display = "none";
  if ($("freeShippingBox")) $("freeShippingBox").style.display = "none";

  const checkoutView = $("checkoutView");
  if (checkoutView) checkoutView.hidden = false;
  if ($("paySuccess")) $("paySuccess").hidden = true;
  if ($("checkoutError")) $("checkoutError").textContent = "";

  updatePayUI();
}

function updatePayUI() {
  const m = $("payMethod")?.value || "gateway";
  const t = cartTotals();

  // Checkout order summary incl. shipping-cost calculation (free ≥ FREE_SHIP, else SHIP_COST)
  if ($("chkSubtotal")) $("chkSubtotal").textContent = fmt(t.sub);
  if ($("chkShipping")) $("chkShipping").textContent = t.ship === 0 ? "رایگان" : fmt(t.ship);
  if ($("chkTotal")) $("chkTotal").textContent = fmt(t.total);
  if ($("chkShipNote")) {
    $("chkShipNote").textContent = t.ship === 0
      ? "ارسال رایگان — خرید شما از سقف ۵۰۰٬۰۰۰ تومان گذشته است."
      : "ارسال: " + fmt(SHIP_COST) + " — با " + fmt(Math.max(0, FREE_SHIP - t.sub)) + " خرید بیشتر، ارسال رایگان می‌شود (سقف ۵۰۰٬۰۰۰ تومان).";
  }

  const gatewayFields = $("gatewayFields");
  const walletPayInfo = $("walletPayInfo");
  const installmentBlock = $("installmentScheduleBlock");

  if (gatewayFields) gatewayFields.style.display = m === "gateway" ? "flex" : "none";
  if (walletPayInfo) walletPayInfo.hidden = m !== "wallet";
  if (installmentBlock) installmentBlock.hidden = m !== "installment";

  // Wallet details
  if (m === "wallet") {
    if ($("chkWalletBalance")) $("chkWalletBalance").textContent = fmt(state.wallet);
    if ($("chkPayAmount")) $("chkPayAmount").textContent = fmt(t.total);
    const shortEl = $("chkWalletShort");
    if (shortEl) {
      shortEl.hidden = state.wallet >= t.total;
    }
  }

  // Installment schedule
  if (m === "installment") {
    const each = Math.ceil(t.total / 4);
    if ($("installmentInfo")) {
      $("installmentInfo").textContent =
        "۴ قسط ماهانه، هر قسط " + fmt(each) + " — قسط اول هم‌اکنون هنگام ثبت سفارش.";
    }

    const timeline = $("installmentTimeline");
    if (timeline) {
      timeline.innerHTML = `
        <div class="schedule-step now">
          <span class="step-num">قسط اول</span>
          <span class="step-amount">${fmt(each)}</span>
          <span class="step-date">هم‌اکنون — ${jalaliAfter(0)}</span>
        </div>
        <div class="schedule-step">
          <span class="step-num">قسط دوم</span>
          <span class="step-amount">${fmt(each)}</span>
          <span class="step-date">${jalaliAfter(30)}</span>
        </div>
        <div class="schedule-step">
          <span class="step-num">قسط سوم</span>
          <span class="step-amount">${fmt(each)}</span>
          <span class="step-date">${jalaliAfter(60)}</span>
        </div>
        <div class="schedule-step">
          <span class="step-num">قسط چهارم</span>
          <span class="step-amount">${fmt(each)}</span>
          <span class="step-date">${jalaliAfter(90)}</span>
        </div>
      `;
    }
  }

  // Pay button label
  const payBtn = $("payBtn");
  if (payBtn) {
    if (m === "wallet") {
      payBtn.textContent = "پرداخت از موجودی کیف پول (" + fmt(t.total) + ")";
    } else if (m === "installment") {
      const firstPart = Math.ceil(t.total / 4);
      payBtn.textContent = "پرداخت قسط اول اسنپ‌پی (" + fmt(firstPart) + ")";
    } else {
      payBtn.textContent = "پرداخت آنلاین شاپرک (" + fmt(t.total) + ")";
    }
  }
}

function doPay() {
  const m = $("payMethod")?.value || "gateway";
  const t = cartTotals();
  const errorEl = $("checkoutError");
  if (errorEl) errorEl.textContent = "";

  // Customer validation — required for every payment method (brief §10)
  const custName = ($("custName")?.value || "").trim();
  if (custName.length < 3) {
    if (errorEl) errorEl.textContent = "لطفاً نام و نام خانوادگی گیرنده را کامل وارد کنید.";
    $("custName")?.focus();
    return;
  }
  const phone = toEnDigits($("custPhone")?.value || "").replace(/\D/g, "");
  if (!/^09\d{9}$/.test(phone)) {
    if (errorEl) errorEl.textContent = "شماره موبایل معتبر نیست؛ باید ۱۱ رقم و با ۰۹ شروع شود (مثال: ۰۹۱۲۳۴۵۶۷۸۹).";
    $("custPhone")?.focus();
    return;
  }

  if (m === "gateway") {
    const rawNum = toEnDigits($("cardNum")?.value || "").replace(/\D/g, "");
    if (rawNum.length < 16) {
      if (errorEl) errorEl.textContent = "شماره کارت بانکی باید ۱۶ رقم کامل باشد.";
      return;
    }
    const cardName = ($("cardName")?.value || "").trim();
    if (cardName.length < 3) {
      if (errorEl) errorEl.textContent = "لطفاً نام و نام خانوادگی صاحب کارت را وارد کنید.";
      return;
    }
  }

  if (m === "wallet") {
    if (state.wallet < t.total) {
      if (errorEl) {
        errorEl.textContent =
          "موجودی کیف پول شما کافی نیست. لطفاً کیف پول را شارژ نموده یا درگاه شتاب را انتخاب نمایید.";
      }
      return;
    }
    state.wallet -= t.total;
    const cashback = Math.round(t.total * 0.02);
    state.wallet += cashback; // 2% instant cashback reward
  }

  // Calculate earned loyalty points (10 points per 10,000 Toman)
  const earned = Math.floor(t.total / 10000) * 10;
  state.points += earned;

  // Order Code
  const code = "NK-" + Math.floor(1000 + Math.random() * 9000);
  if ($("orderCode")) $("orderCode").textContent = code;
  if ($("successPoints")) {
    $("successPoints").textContent =
      "با این خرید " + faDigits(group(earned)) + " امتیاز وفاداری به حساب شما افزوده شد.";
  }

  // Add order to wallet history
  addHistoryEntry({
    title: "خرید موفق سفارش " + code,
    date: "هم‌اکنون",
    amount: "−" + fmt(t.total),
    type: "minus"
  });

  if (m === "wallet") {
    const cashback = Math.round(t.total * 0.02);
    addHistoryEntry({
      title: "۲٪ بازگشت وجه (Cashback) خرید " + code,
      date: "هم‌اکنون",
      amount: "+" + fmt(cashback),
      type: "plus"
    });
  }

  // Empty cart and show receipt
  state.cart = [];
  persistState();
  renderCart();
  renderClub();
  renderWallet();

  if ($("paySuccess")) $("paySuccess").hidden = false;
  if ($("payBtn")) $("payBtn").style.display = "none";
  if ($("backToCartBtn")) $("backToCartBtn").style.display = "none";
  if ($("gatewayFields")) $("gatewayFields").style.display = "none";
  if ($("walletPayInfo")) $("walletPayInfo").hidden = true;
  if ($("installmentScheduleBlock")) $("installmentScheduleBlock").hidden = true;
  if ($("payMethod")) $("payMethod").disabled = true;
}

function resetCheckout() {
  if ($("checkoutView")) $("checkoutView").hidden = true;
  if ($("cartItems")) $("cartItems").style.display = "";
  if ($("cartFoot")) $("cartFoot").style.display = "";
  if ($("freeShippingBox")) $("freeShippingBox").style.display = "";
  if ($("paySuccess")) $("paySuccess").hidden = true;
  if ($("payBtn")) $("payBtn").style.display = "";
  if ($("backToCartBtn")) $("backToCartBtn").style.display = "";
  if ($("payMethod")) $("payMethod").disabled = false;
}

/* ---------- Loyalty Club & Gamification System ---------- */
function tierOf(points) {
  if (points >= 5000) return "طلایی";
  if (points >= 1000) return "نقره‌ای";
  return "برنزی";
}

function renderClub() {
  const currentTier = tierOf(state.points);
  if ($("clubPoints")) $("clubPoints").textContent = faDigits(group(state.points));
  if ($("clubTier")) $("clubTier").textContent = currentTier;
  if ($("clubTierBadge")) $("clubTierBadge").textContent = "سطح " + currentTier;

  // Header quick info
  if ($("topTierName")) $("topTierName").textContent = currentTier;
  if ($("topPoints")) $("topPoints").textContent = faDigits(group(state.points)) + " پ";

  // Points to gold
  const toGold = Math.max(0, 5000 - state.points);
  if ($("pointsToGold")) $("pointsToGold").textContent = faDigits(group(toGold));

  // Cash equivalent
  if ($("pointsCashVal")) {
    const cashEquivalent = Math.floor(state.points / 10) * 1000;
    $("pointsCashVal").textContent = fmt(cashEquivalent);
  }

  // Progress bar
  if ($("tierProgress")) {
    const percent = Math.min(100, Math.round((state.points / 5000) * 100));
    $("tierProgress").style.width = percent + "%";
  }

  // Highlight active tier perks card
  const bronzeCard = $("tierCardBronze");
  const silverCard = $("tierCardSilver");
  const goldCard = $("tierCardGold");

  if (bronzeCard && silverCard && goldCard) {
    bronzeCard.classList.toggle("current-tier", currentTier === "برنزی");
    silverCard.classList.toggle("current-tier", currentTier === "نقره‌ای");
    goldCard.classList.toggle("current-tier", currentTier === "طلایی");
  }
}

function redeem() {
  const msgEl = $("redeemMsg");
  if (state.points < 500) {
    if (msgEl) {
      msgEl.textContent = "برای تبدیل، حداقل ۵۰۰ امتیاز باشگاه وفاداری لازم است.";
      msgEl.style.color = "var(--err)";
    }
    return;
  }

  state.points -= 500;
  state.wallet += 50000;

  addHistoryEntry({
    title: "تبدیل ۵۰۰ امتیاز وفاداری باشگاه به اعتبار",
    date: "هم‌اکنون",
    amount: "+۵۰٬۰۰۰ تومان",
    type: "plus"
  });

  persistState();
  renderClub();
  renderWallet();

  if (msgEl) {
    msgEl.textContent = "انجام شد: ۵۰۰ امتیاز به ۵۰٬۰۰۰ تومان اعتبار کیف پول تبدیل گردید.";
    msgEl.style.color = "var(--ok)";
  }
  toast("۵۰٬۰۰۰ تومان اعتبار به کیف پول اضافه شد");
}

/* ---------- User Wallet System ---------- */
function renderWallet() {
  if ($("walletBalance")) $("walletBalance").textContent = fmt(state.wallet);
}

function addHistoryEntry(entry) {
  const historyList = $("walletHistory");
  if (!historyList) return;
  const li = document.createElement("li");
  li.className = "history-item " + entry.type;
  li.innerHTML = `
    <div class="history-details">
      <strong>${entry.title}</strong>
      <small>${entry.date}</small>
    </div>
    <span class="amount-${entry.type}">${entry.amount}</span>
  `;
  historyList.insertBefore(li, historyList.firstChild);
}

/* ---------- Card Number Auto-formatting Helper (Zero Emojis) ---------- */
function setupCardFormatter() {
  const input = $("cardNum");
  if (!input) return;
  input.addEventListener("input", (e) => {
    let val = toEnDigits(e.target.value).replace(/\D/g, "");
    if (val.length > 16) val = val.substring(0, 16);
    const parts = [];
    for (let i = 0; i < val.length; i += 4) {
      parts.push(val.substring(i, i + 4));
    }
    e.target.value = parts.join(" ");

    // Bank preview text badge without emojis
    const icon = $("cardTypeIcon");
    if (icon) {
      if (val.startsWith("6037")) icon.innerHTML = '<span class="bank-pill">صادرات</span>';
      else if (val.startsWith("6104")) icon.innerHTML = '<span class="bank-pill">ملت</span>';
      else if (val.startsWith("6219")) icon.innerHTML = '<span class="bank-pill">سامان</span>';
      else if (val.startsWith("5892")) icon.innerHTML = '<span class="bank-pill">سپه</span>';
      else if (val.startsWith("603799")) icon.innerHTML = '<span class="bank-pill">ملی</span>';
      else if (val.startsWith("5022")) icon.innerHTML = '<span class="bank-pill">پاسارگاد</span>';
      else {
        icon.innerHTML = `
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="5" width="20" height="14" rx="2"></rect>
            <line x1="2" y1="10" x2="22" y2="10"></line>
          </svg>`;
      }
    }
  });
}

/* ---------- Update Product JSON-LD Offers on Currency Change ---------- */
function updateProductSchema() {
  const schemaEl = $("productSchema");
  if (!schemaEl) return;
  try {
    const schema = JSON.parse(schemaEl.textContent);
    const itemList = schema["@graph"] ? schema["@graph"].find((x) => x["@type"] === "ItemList") : null;
    if (itemList && itemList.itemListElement) {
      itemList.itemListElement.forEach((item, index) => {
        const prod = PRODUCTS[index];
        if (prod && item.offers) {
          if (state.currency === "IRR") {
            item.offers.priceCurrency = "IRR";
            item.offers.price = String(prod.price * 10); // IRR Rial = Toman * 10
          } else if (state.currency === "USD") {
            item.offers.priceCurrency = "USD";
            item.offers.price = (prod.price / RATES.USD).toFixed(2);
          } else if (state.currency === "AED") {
            item.offers.priceCurrency = "AED";
            item.offers.price = (prod.price / RATES.AED).toFixed(2);
          }
        }
      });
      schemaEl.textContent = JSON.stringify(schema, null, 2);
    }
  } catch (e) {
    console.warn("JSON-LD update error:", e);
  }
}

/* ---------- Setup Event Listeners ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize UI
  renderProducts();
  renderCart();
  renderClub();
  renderWallet();
  setupCardFormatter();

  // Static [data-view] triggers outside the grid (hero mini-card, featured product CTA)
  document.querySelectorAll("[data-view]").forEach((b) => {
    if (b.dataset.bound) return;
    b.dataset.bound = "1";
    b.addEventListener("click", () =>
      openModal(Number(b.dataset.view), b.dataset.weight ? Number(b.dataset.weight) : undefined)
    );
  });

  // Search & Filter Listeners
  ["searchInput", "catFilter", "roastFilter", "sortFilter", "priceRange"].forEach((id) => {
    const el = $(id);
    if (el) el.addEventListener("input", renderProducts);
  });

  // Clear search button
  const clearBtn = $("clearSearch");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      const search = $("searchInput");
      if (search) {
        search.value = "";
        search.focus();
      }
      renderProducts();
    });
  }

  // Category Quick Tabs
  document.querySelectorAll(".cat-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const catVal = btn.dataset.tab;
      const catSelect = $("catFilter");
      if (catSelect) {
        catSelect.value = catVal;
      }
      renderProducts();
    });
  });

  // Roast Guide Cards interactive jump to filter
  document.querySelectorAll("[data-roast-target]").forEach((card) => {
    card.addEventListener("click", () => {
      const roastVal = card.dataset.roastTarget;
      const roastSelect = $("roastFilter");
      if (roastSelect) {
        roastSelect.value = roastVal;
      }
      renderProducts();
      const shopSec = $("shop");
      if (shopSec) shopSec.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Reset Filters
  const resetBtn = $("resetFilters");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if ($("searchInput")) $("searchInput").value = "";
      if ($("catFilter")) $("catFilter").value = "all";
      if ($("roastFilter")) $("roastFilter").value = "all";
      if ($("sortFilter")) $("sortFilter").value = "featured";
      if ($("priceRange")) $("priceRange").value = 2500000;
      renderProducts();
      toast("تمامی فیلترها بازنشانی شدند");
    });
  }

  // Empty state reset button
  const emptyResetBtn = $("emptyResetBtn");
  if (emptyResetBtn) {
    emptyResetBtn.addEventListener("click", () => {
      if ($("searchInput")) $("searchInput").value = "";
      if ($("catFilter")) $("catFilter").value = "all";
      if ($("roastFilter")) $("roastFilter").value = "all";
      if ($("priceRange")) $("priceRange").value = 2500000;
      renderProducts();
    });
  }

  // Category Jump Cards
  document.querySelectorAll("[data-cat-jump]").forEach((b) => {
    b.addEventListener("click", () => {
      const jumpCat = b.dataset.catJump;
      const catSelect = $("catFilter");
      if (catSelect) {
        catSelect.value = jumpCat;
      }
      renderProducts();
      const shopSec = document.getElementById("shop");
      if (shopSec) shopSec.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Currency Switcher
  document.querySelectorAll(".cur-btn").forEach((b) => {
    // Set initial active state based on persisted currency
    b.classList.toggle("active", b.dataset.cur === state.currency);

    b.addEventListener("click", () => {
      document.querySelectorAll(".cur-btn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      state.currency = b.dataset.cur;
      persistState();
      renderProducts();
      renderCart();
      renderWallet();
      renderClub();
      updateProductSchema();
      if (!$("productModal")?.hidden) updateModalPrice();
      toast("واحد پول به " + b.textContent + " تغییر یافت");
    });
  });

  // Mobile Navigation Drawer Toggle
  const burgerBtn = $("burgerBtn");
  const mainNav = $("mainNav");
  if (burgerBtn && mainNav) {
    burgerBtn.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      burgerBtn.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll("#mainNav a").forEach((a) => {
      a.addEventListener("click", () => {
        mainNav.classList.remove("open");
        burgerBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Product Modal Controls
  const modalClose = $("modalClose");
  const productModal = $("productModal");
  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeModal();
    });
  }

  // Weight Pill selection
  document.querySelectorAll(".pill-btn").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".pill-btn").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const weightSelect = $("mWeight");
      if (weightSelect) {
        weightSelect.value = pill.dataset.weight;
      }
      updateModalPrice();
    });
  });

  // Weight / Grind / Sub change listeners
  ["mWeight", "mGrind", "mSub"].forEach((id) => {
    const el = $(id);
    if (el) el.addEventListener("change", updateModalPrice);
  });

  // Modal Quantity Stepper
  const mQtyDec = $("mQtyDec");
  const mQtyInc = $("mQtyInc");
  if (mQtyDec) {
    mQtyDec.addEventListener("click", () => {
      if (state.modalQty > 1) {
        state.modalQty -= 1;
        if ($("mQtyVal")) $("mQtyVal").textContent = faDigits(state.modalQty);
        updateModalPrice();
      }
    });
  }
  if (mQtyInc) {
    mQtyInc.addEventListener("click", () => {
      state.modalQty += 1;
      if ($("mQtyVal")) $("mQtyVal").textContent = faDigits(state.modalQty);
      updateModalPrice();
    });
  }

  // Add to Cart from Modal
  const mAdd = $("mAdd");
  if (mAdd) mAdd.addEventListener("click", addFromModal);

  // Cart Drawer Open / Close
  const cartBtn = $("cartBtn");
  const drawerClose = $("drawerClose");
  const drawerBackdrop = $("drawerBackdrop");
  if (cartBtn) cartBtn.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

  // Checkout Actions
  const checkoutBtn = $("checkoutBtn");
  const backToCartBtn = $("backToCartBtn");
  const payMethodSelect = $("payMethod");
  const payBtn = $("payBtn");
  const newOrderBtn = $("newOrderBtn");

  if (checkoutBtn) checkoutBtn.addEventListener("click", openCheckout);
  if (backToCartBtn) backToCartBtn.addEventListener("click", resetCheckout);
  if (payMethodSelect) payMethodSelect.addEventListener("change", updatePayUI);
  if (payBtn) payBtn.addEventListener("click", doPay);
  if (newOrderBtn) {
    newOrderBtn.addEventListener("click", () => {
      resetCheckout();
      closeDrawer();
      const shopEl = $("shop");
      if (shopEl) shopEl.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Club & Loyalty Actions
  const redeemBtn = $("redeemBtn");
  if (redeemBtn) redeemBtn.addEventListener("click", redeem);

  // Wallet Actions
  const chargeBtn = $("chargeBtn");
  if (chargeBtn) {
    chargeBtn.addEventListener("click", () => {
      state.wallet += 200000;
      addHistoryEntry({
        title: "شارژ آنلاین کیف پول",
        date: "هم‌اکنون",
        amount: "+۲۰۰٬۰۰۰ تومان",
        type: "plus"
      });
      persistState();
      renderWallet();
      toast("کیف پول شما ۲۰۰٬۰۰۰ تومان شارژ شد");
    });
  }

  // Quick Charge Preset Buttons
  document.querySelectorAll(".btn-charge-preset").forEach((btn) => {
    btn.addEventListener("click", () => {
      const amt = Number(btn.dataset.amount || 100000);
      state.wallet += amt;
      addHistoryEntry({
        title: "شارژ سریع اعتباری کیف پول",
        date: "هم‌اکنون",
        amount: "+" + fmt(amt),
        type: "plus"
      });
      persistState();
      renderWallet();
      toast("کیف پول شما " + fmt(amt) + " شارژ شد");
    });
  });

  const walletHistoryBtn = $("walletHistoryBtn");
  if (walletHistoryBtn) {
    walletHistoryBtn.addEventListener("click", () => {
      const h = $("walletHistory");
      if (h) h.hidden = !h.hidden;
    });
  }

  // Global Keyboard Navigation (Escape key to dismiss dialogs)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!$("productModal")?.hidden) {
        closeModal();
      } else if ($("cartDrawer")?.classList.contains("open")) {
        closeDrawer();
      }
    }
  });
});
