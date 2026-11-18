/* ==========================================================================
   SabzNegar — Industrial Print & Packaging House | Application Engine
   Five-Language Multilingual Corporate & Shop Architecture (FA, EN, AR, TR, RU)
   ========================================================================== */

/* ---------- Language Definitions & Active State ---------- */
const LANGS = {
  fa: { dir: 'rtl', label: 'فارسی', flag: '🇮🇷' },
  en: { dir: 'ltr', label: 'English', flag: '🇬🇧' },
  ar: { dir: 'rtl', label: 'العربية', flag: '🇸🇦' },
  tr: { dir: 'ltr', label: 'Türkçe', flag: '🇹🇷' },
  ru: { dir: 'ltr', label: 'Русский', flag: '🇷🇺' }
};

let lang = 'fa';
try {
  const saved = localStorage.getItem('sabznegar_lang');
  if (saved && LANGS[saved]) lang = saved;
} catch (e) {
  /* localStorage disabled or unavailable in sandbox */
}

/* ---------- 5-Language Complete Translation Dictionary ---------- */
const T = {
  "fa": {
    "meta_title": "سبزنگار — مجتمع چاپ صنعتی و بسته‌بندی | سامانه بین‌المللی پنج‌زبانه",
    "meta_desc": "مجتمع چاپ و بسته‌بندی سبزنگار؛ چاپ افست ۵ رنگ، جعبه و هاردباکس، کاتالوگ و مجله، ساک دستی و هدایای تبلیغاتی با گارانتی ۱۰۰٪ کیفیت و بازچاپ.",
    "nav_home": "خانه",
    "nav_products": "محصولات و سفارش چاپ",
    "nav_articles": "راهنمای تخصصی چاپ",
    "nav_club": "باشگاه مشتریان",
    "nav_warranty": "پیگیری سفارش و گارانتی",
    "nav_about": "درباره مجتمع",
    "nav_contact": "تماس با ما",
    "nav_quote": "استعلام سریع قیمت",
    "hero_badge": "مجتمع تخصصی چاپ افست و بسته‌بندی صادراتی",
    "hero_title": "چاپ و بسته‌بندی مدرن برای برترین برندهای تجاری و صنعتی",
    "hero_sub": "از طراحی ساختاری و قالب‌سازی تا چاپ افست ۵ رنگ هایدلبرگ، سلفون مخملی، طلاکوب و دایکات تمام‌اتوماتیک با پشتیبانی پنج‌زبانه در ایران و بازارهای منطقه‌ای.",
    "hero_cta_products": "مشاهده کاتالوگ و محصولات",
    "hero_cta_contact": "درخواست استعلام و مشاوره",
    "stat_warranty": "۱۰۰٪ گارانتی کیفیت بازچاپ",
    "hf_warranty_sub": "تطابق کامل رنگ و خط تا",
    "stat_langs": "۵ زبان میز صادرات",
    "hf_langs_sub": "FA / EN / AR / TR / RU",
    "stat_clients": "۳,۵۰۰+ مشتری سازمانی",
    "hf_clients_sub": "برندهای معتبر و صنایع غذایی",
    "stat_years": "۳۰+ سال سابقه صنعتی",
    "hf_years_sub": "تأسیس ۱۳۷۳ · استاندارد ISO 12647-2",
    "stat_models": "۱۸,۰۰۰ شیت در ساعت",
    "cats_badge": "خطوط تخصصی تولید",
    "cats_title": "دسته‌بندی‌های چاپ و بسته‌بندی",
    "cats_sub": "تولید انواع اقلام چاپی، بسته‌بندی صنعتی و هدایای تبلیغاتی با پیشرفته‌ترین ماشین‌آلات روز دنیا",
    "view_category": "مشاهده نمونه‌ها و ثبت سفارش",
    "products_badge": "نمونه‌کارها و خدمات",
    "products_title": "کاتالوگ محصولات و خدمات چاپی",
    "products_sub": "فیلتر بر اساس دسته‌بندی، متریال یا جستجوی مستقیم کد محصول و مشخصات فنی",
    "search_placeholder": "جستجوی محصول، گرماژ، نوع چاپ یا کد کالا...",
    "filter_all": "همه محصولات",
    "filter_subcat_label": "زیردسته‌ها:",
    "filter_subcat_all": "همه زیردسته‌ها",
    "results_count": "نمایش {n} محصول چاپی",
    "reset_filter": "↺ بازنشانی فیلترها",
    "no_products_found": "محصولی با مشخصات انتخابی یافت نشد.",
    "no_products_hint": "لطفاً عبارت دیگری را جستجو فرمایید یا فیلترهای اعمال‌شده را بازنشانی نمایید.",
    "featured_badge": "پرفروش‌ترین‌های سازمانی",
    "featured_title": "محصولات و پروژه‌های چاپی برتر",
    "featured_sub": "انتخاب اول مدیران مارکتینگ و برندهای صادراتی برای درخشش بسته‌بندی در قفسه بازار",
    "order_inquiry": "استعلام قیمت تیراژ",
    "download_catalog": "دانلود شناسنامه فنی (PDF)",
    "view_gallery": "مشاهده گالری تصاویر",
    "specs_title": "مشخصات فنی و استانداردهای تولید",
    "spec_paper_weight": "گرماژ و نوع کاغذ / مقوا",
    "spec_dimensions": "ابعاد و گرایش قالب",
    "spec_print_type": "تکنولوژی چاپ و جلوه‌های ویژه",
    "spec_min_order": "حداقل تیراژ سفارش (MOQ)",
    "moq_badge": "تیراژ اقتصادی",
    "home_quote_badge": "محاسبه سریع هزینه",
    "home_quote_title": "استعلام آنی و مشاوره رایگان چاپ",
    "home_quote_sub": "مشخصات پروژه چاپی خود را وارد نمایید؛ کارشناسان فنی سبزنگار حداکثر ظرف ۲ ساعت پیش‌فاکتور دقیق را ارسال خواهند نمود.",
    "about_badge": "اصالت، دقت و هنر چاپ",
    "about_title": "درباره مجتمع چاپ و بسته‌بندی سبزنگار",
    "about_p1": "مجتمع چاپ و بسته‌بندی سبزنگار از سال ۱۳۷۳ با تکیه بر دانش فنی روز و سرمایه‌گذاری پیوسته در ناوگان مدرن چاپ افست، لترپرس، جعبه‌چسبانی و صحافی سخت، به عنوان یکی از پیشگامان صنعت چاپ و بسته‌بندی کشور شناخته می‌شود.",
    "about_p2": "ما با وسعت کارگاهی بالغ بر ۱۵,۰۰۰ مترمربع و خطوط تمام‌اتوماتیک هایدلبرگ و بوبست، زنجیره کامل تولید از طراحی گرافیک و ساختار بسته‌بندی، لیتوگرافی CTP، چاپ چندرنگ، سلفون‌کشی، طلاکوب و برجسته‌سازی تا دایکات و بسته‌بندی صادراتی را در یک مجموعه متمرکز ساخته‌ایم.",
    "stat_ab_exp": "۳۰ سال",
    "stat_ab_clients": "۳,۵۰۰+",
    "stat_ab_products": "۵۰+ مدل قالب",
    "stat_ab_countries": "۶ کشور صادراتی",
    "tech_fleet_title": "ناوگان ماشین‌آلات و خطوط تولید پیشرفته",
    "fleet_1_title": "ماشین‌آلات چاپ افست هایدلبرگ Speedmaster",
    "fleet_1_desc": "مجهز به سیستم کنترل رنگ اسپکتروفتومتری آنلاین با ظرفیت چاپ ۱۸,۰۰۰ شیت در ساعت و پشتیبانی از مرکب‌های یووی و پایه‌گیاهی.",
    "fleet_2_title": "خطوط دایکات و جعبه‌چسبانی اتوماتیک بوبست (Bobst)",
    "fleet_2_desc": "دایکات دقیق با سرعت ۹,۰۰۰ برگ در ساعت، تفکیک پوشال اتوماتیک و خطوط چسب ۶ گوشه برای جعبه‌های پیچیده دارویی و بهداشتی.",
    "fleet_3_title": "واحد جلوه‌های ویژه: طلاکوب، یووی موضعی و سلفون مخملی",
    "fleet_3_desc": "تجهیزات مدرن لترپرس طلاکوب حرارتی، برجسته‌سازی سه‌بعدی و دستگاه‌های سلفون‌کشی حرارتی پرسرعت با قابلیت اجرای روکش Soft-Touch.",
    "export_network_title": "شبکه صادراتی و دفاتر منطقه‌ای سبزنگار",
    "export_network_desc": "صادرات گسترده انواع جعبه‌های لمینتی، هاردباکس و کاتالوگ‌های تجاری به کشورهای امارات، عراق، روسیه، ترکیه و عمان همراه با ترخیص و لجستیک اختصاصی.",
    "contact_badge": "دفتر مرکزی و کارخانه",
    "contact_title": "تماس با مجتمع چاپ سبزنگار",
    "contact_sub": "جهت بازدید از سالن تولید، هماهنگی نظارت بر چاپ و ثبت سفارشات سازمانی با ما در ارتباط باشید.",
    "contact_tehran_title": "کارخانه و مجتمع مرکزی تهران",
    "contact_tehran_addr": "تهران، کیلومتر ۱۴ جاده مخصوص کرج، شهرک صنعتی چیتگر، بلوار پژوهش، مجتمع چاپ سبزنگار",
    "contact_istanbul_title": "میز صادرات ترکیه (استانبول)",
    "contact_istanbul_addr": "İkitelli OSB, Triko Center S-Block No: 42, Başakşehir, Istanbul, Turkey",
    "contact_dubai_title": "دفتر امارات متحده عربی (دبی)",
    "contact_dubai_addr": "Office 804, Business Bay Tower, Marasi Drive, Dubai, UAE",
    "contact_moscow_title": "میز صادرات فدراسیون روسیه (مسکو)",
    "contact_moscow_addr": "Presnenskaya Naberezhnaya 12, Federation Tower, Moscow, Russia",
    "articles_badge": "مرکز آموزش و دانش چاپ",
    "articles_title": "مقالات و راهنماهای تخصصی چاپ و بسته‌بندی",
    "articles_sub": "نکات کلیدی برای انتخاب متریال، کاهش هزینه تیراژ، استانداردهای مدیریت رنگ و تکنیک‌های بسته‌بندی لوکس",
    "articles_sub_title": "عضویت در خبرنامه تخصصی صنعت چاپ",
    "articles_sub_desc": "ماهانه جدیدترین تحلیل‌ها و کاتالوگ ایده‌های خلاقانه بسته‌بندی را دریافت کنید.",
    "articles_sub_btn": "عضویت در خبرنامه",
    "club_badge": "باشگاه شرکای سازمانی",
    "club_title": "باشگاه مشتریان و اعتبارات B2B سبزنگار",
    "club_sub": "به جمع خریداران دائمی و برندهای معتبر بپیوندید و از تخفیف‌های تیراژ بالا، اولویت چاپ و شرایط پرداخت اعتباری بهره‌مند شوید.",
    "club_tier_1_title": "عضویت برنز (سفارش‌های اول)",
    "club_tier_1_desc": "مشاوره رایگان ساختار بسته‌بندی، نمونه‌گیری اولیه ماکت دیجیتال و ثبت نام کاربری اختصاصی سازمانی.",
    "club_tier_2_title": "عضویت نقره‌ای (سفارش دوره‌ای)",
    "club_tier_2_desc": "۵٪ تخفیف تیراژ در کلیه خطوط چاپی، اولویت زمان‌بندی در نوبت چاپخانه و تهیه رایگان زینک‌های تجدید چاپ.",
    "club_tier_3_title": "عضویت طلایی (برندهای همکار)",
    "club_tier_3_desc": "۱۰٪ تخفیف قرارداد سالیانه، ساخت قالب تیغ اختصاصی رایگان، ناظر چاپ حضوری و شرایط پرداخت اعتباری ۴۵ روزه.",
    "club_tier_4_title": "عضویت الماس (شرکای کلان و صادراتی)",
    "club_tier_4_desc": "۱۵٪ تخفیف سازمانی، انبارداری اختصاصی محصولات چاپی و ارسال مرحله‌ای، خط تولید اضطراری ۲۴/۷ و ترخیص صادراتی.",
    "club_card_title": "کارت هوشمند VIP مشتریان سبزنگار",
    "club_card_sub": "کارت هوشمند شناسایی مشتری و فعال‌سازی تخفیفات اعتباری سازمانی",
    "club_form_title": "درخواست عضویت در باشگاه شرکای سبزنگار",
    "warranty_badge": "تضمین ۱۰۰٪ کیفیت و بازچاپ",
    "warranty_title": "پیگیری سفارش و گارانتی بازچاپ سبزنگار",
    "warranty_sub": "سامانه رهگیری لحظه‌ای مراحل چاپ و ثبت درخواست بازچاپ در صورت هرگونه عدم تطابق با تاییدیه نهایی چاپی",
    "warranty_flow_title": "تعهدنامه کنترل کیفیت و گارانتی بازچاپ سبزنگار",
    "warranty_flow_p1": "کلیه سفارش‌های چاپی تحت استانداردهای بین‌المللی کالیبراسیون رنگ ISO 12647-2 و با تفکیک دانسیته اسپکتروفتومتری تولید می‌شوند.",
    "warranty_flow_p2": "در صورت هرگونه انحراف رنگی بیش از حد مجاز استاندارد، خطای ابعاد قالب تیغ، ایراد صحافی یا نقص سلفون، هزینه سفارش عودت داده شده یا بدون هزینه مجدداً بازچاپ خواهد شد.",
    "warranty_flow_p3": "پشتیبانی پس از تحویل شامل تامین و نگهداری قالب‌های اختصاصی تا ۳ سال در انبار قالب و نگهداری فایل‌های لیتوگرافی CTP در آرشیو امن ابری می‌باشد.",
    "warranty_serial_title": "استعلام وضعیت سفارش یا پارت چاپی",
    "warranty_serial_sub": "کد پیگیری یا شماره پارت سفارش (مانند SN-2024-8841) را وارد فرمایید تا وضعیت فعلی در خط تولید نمایش داده شود.",
    "warranty_serial_btn": "رهگیری مرحله تولید",
    "warranty_form_title": "ثبت درخواست بازچاپ یا ارزیابی کنترل کیفیت",
    "warranty_copy_code": "کپی کد رهگیری",
    "footer_desc": "مجتمع چاپ و بسته‌بندی سبزنگار؛ ارائه راهکارهای نوین چاپ افست، بسته‌بندی دارویی و صنعتی، کاتالوگ‌های نفیس و ساک‌های دستی با استانداردهای بین‌المللی صادرات.",
    "footer_links_title": "دسترسی سریع",
    "footer_cats_title": "خطوط تولید",
    "footer_contact_title": "دفتر مرکزی و کارخانه",
    "footer_rights": "تمامی حقوق برای مجتمع چاپ و بسته‌بندی سبزنگار محفوظ است — سامانه پنج‌زبانه پیشنهادی پروژه",
    "video_title": "ویدئوی معرفی خطوط چاپ افست و جعبه‌سازی سبزنگار",
    "video_hud": "QC SPECTRO & PRINT PRESS SIMULATION",
    "video_desc": "شبیه‌سازی فرآیند چاپ افست ۵ رنگ هایدلبرگ Speedmaster XL، کالیبراسیون اسپکتروفتومتری زنده CMYK و دایکات تمام‌اتوماتیک بوبست در سالن تولید سبزنگار.",
    "qc_phone": "تماس با دفتر مرکزی و کارخانه",
    "qc_phone_tip": "تماس با کارخانه",
    "qc_whatsapp": "واتساپ واحد فنی و استعلام",
    "qc_bale": "پیام‌رسان بله سبزنگار",
    "qc_rubika": "پیام‌رسان روبیکا سبزنگار",
    "qc_eitaa": "کانال رسمی ایتا سبزنگار",
    "f_name": "نام و نام خانوادگی",
    "f_mobile": "شماره همراه / تماس مستقیم",
    "f_email": "آدرس ایمیل سازمانی",
    "f_company": "نام شرکت / برند تجاری",
    "f_country": "کشور و شهر مقصد",
    "f_department": "واحد سازمانی مخاطب",
    "f_dept_sales": "واحد فروش و سفارشات چاپ",
    "f_dept_service": "واحد کنترل کیفیت و بازچاپ",
    "f_dept_export": "میز بازرگانی خارجی و صادرات",
    "f_serial": "شماره پارت / کد رهگیری سفارش",
    "f_service_type": "نوع درخواست یا موضوع بررسی",
    "srv_repair": "درخواست بازچاپ یا اصلاح رنگ",
    "srv_pm": "استعلام پارت دوم و تجدید سفارش",
    "srv_parts": "سفارش ساخت قالب تیغ جدید",
    "srv_install": "درخواست نمونه‌گیری و ماکت فیزیکی",
    "f_issue": "شرح درخواست یا جزئیات پروژه چاپی",
    "f_subject": "موضوع استعلام یا پروژه",
    "f_message": "مشخصات پروژه (تیراژ، گرماژ، ابعاد و نوع چاپ)",
    "f_category_interest": "دسته‌بندی مورد نظر شما",
    "f_partnership_type": "نوع همکاری مورد نظر",
    "part_dealer": "نمایندگی رسمی و عاملیت سفارشات استانی",
    "part_distributor": "همکاری آژانس‌های تبلیغاتی و طراحان بسته‌بندی",
    "part_service": "قرارداد تامین سالیانه شرکت‌های تولیدی و دارویی",
    "f_email_or_phone": "ایمیل یا شماره همراه",
    "send": "ارسال فرم و دریافت کد رهگیری",
    "success_msg": "درخواست شما با موفقیت در سامانه ثبت گردید؛ کارشناسان واحد فنی سبزنگار به زودی با شما تماس خواهند گرفت.",
    "err_required": "لطفاً تمامی فیلدهای الزامی ستاره‌دار را به درستی تکمیل فرمایید.",
    "err_mobile": "شماره موبایل واردشده معتبر نیست (حداقل ۱۰ رقم عددی).",
    "err_email": "فرمت آدرس ایمیل نامعتبر است.",
    "cat_catalogs": "چاپ کاتالوگ و مجله",
    "cat_boxes": "بسته‌بندی و جعبه",
    "cat_bags": "ساک دستی و بسته‌بندی فروشگاهی",
    "cat_commercial": "چاپ افست و دیجیتال",
    "cat_promo": "هدایای تبلیغاتی و چاپ نمایشگاهی",
    "cat_pumps": "چاپ کاتالوگ و مجله",
    "cat_cold": "بسته‌بندی و جعبه",
    "cat_hvac": "ساک دستی و بسته‌بندی فروشگاهی",
    "cat_power": "چاپ افست و دیجیتال",
    "cat_tools": "هدایای تبلیغاتی و چاپ نمایشگاهی"
  },
  "en": {
    "meta_title": "SabzNegar — Industrial Print & Packaging House | 5-Language Platform",
    "meta_desc": "SabzNegar Print & Packaging Complex: 5-color offset printing, luxury folding cartons, rigid boxes, catalogs, shopping bags & promo print with 100% reprint guarantee.",
    "nav_home": "Home",
    "nav_products": "Products & Print Orders",
    "nav_articles": "Print Guides & Insights",
    "nav_club": "Customer Club",
    "nav_warranty": "Order Tracking & Guarantee",
    "nav_about": "About Complex",
    "nav_contact": "Contact Us",
    "nav_quote": "Instant Quote",
    "hero_badge": "Industrial Offset Printing & Export Packaging House",
    "hero_title": "Precision Print & Packaging for Premier Commercial Brands",
    "hero_sub": "From structural packaging engineering and die-making to Heidelberg 5-color offset printing, velvet soft-touch coating, hot stamping, and automated die-cutting with multilingual export support.",
    "hero_cta_products": "Browse Catalog & Products",
    "hero_cta_contact": "Request Quote & Consultation",
    "stat_warranty": "100% Quality & Reprint Guarantee",
    "hf_warranty_sub": "Strict Color Match & Die Accuracy",
    "stat_langs": "5 Export Desk Languages",
    "hf_langs_sub": "FA / EN / AR / TR / RU",
    "stat_clients": "3,500+ Corporate Clients",
    "hf_clients_sub": "Leading FMCG & Export Brands",
    "stat_years": "30+ Years Industry Heritage",
    "hf_years_sub": "Est. 1994 · ISO 12647-2 Certified",
    "stat_models": "18,000 Sheets/hr Capacity",
    "cats_badge": "Production Divisions",
    "cats_title": "Printing & Packaging Categories",
    "cats_sub": "Manufacturing high-grade commercial print, industrial packaging, and promotional products with world-class machinery.",
    "view_category": "View Samples & Order",
    "products_badge": "Portfolio & Services",
    "products_title": "Print Portfolio & Catalog",
    "products_sub": "Filter by product category, material substrate, or search directly by SKU and technical specifications.",
    "search_placeholder": "Search product, paper grammage, print process or SKU...",
    "filter_all": "All Products",
    "filter_subcat_label": "Subcategories:",
    "filter_subcat_all": "All Subcategories",
    "results_count": "Showing {n} print products",
    "reset_filter": "↺ Reset Filters",
    "no_products_found": "No products matched your criteria.",
    "no_products_hint": "Please try different keywords or reset the applied filters.",
    "featured_badge": "Corporate Bestsellers",
    "featured_title": "Featured Print & Packaging Projects",
    "featured_sub": "Preferred by marketing executives and export brand leaders for standout retail shelf appeal.",
    "order_inquiry": "Inquire Run Price",
    "download_catalog": "Download Technical Datasheet (PDF)",
    "view_gallery": "View Image Gallery",
    "specs_title": "Technical Specifications & Production Standards",
    "spec_paper_weight": "Grammage & Substrate Type",
    "spec_dimensions": "Dimensions & Format",
    "spec_print_type": "Print Technology & Embellishments",
    "spec_min_order": "Minimum Order Quantity (MOQ)",
    "moq_badge": "Economic Run",
    "home_quote_badge": "Instant Cost Estimation",
    "home_quote_title": "Instant Quote & Free Technical Consultation",
    "home_quote_sub": "Submit your print project specifications; our print engineers will deliver a detailed quotation within 2 business hours.",
    "about_badge": "Heritage, Precision & Craftsmanship",
    "about_title": "About SabzNegar Print & Packaging Complex",
    "about_p1": "Founded in 1994, SabzNegar Print & Packaging Complex has grown through continuous investment in state-of-the-art offset presses, letterpress machinery, automated folder-gluers, and case-binding systems into one of the region's premier printing and packaging houses.",
    "about_p2": "Spanning over 15,000 square meters of specialized production floor with automated Heidelberg and Bobst lines, we deliver a seamless end-to-end workflow: structural packaging design, high-resolution CTP prepress, multi-color offset, thermal lamination, hot foil embossing, precision die-cutting, and secure export packing.",
    "stat_ab_exp": "30 Years",
    "stat_ab_clients": "3,500+",
    "stat_ab_products": "50+ Die Lines",
    "stat_ab_countries": "6 Export Markets",
    "tech_fleet_title": "Advanced Machinery Fleet & Production Lines",
    "fleet_1_title": "Heidelberg Speedmaster Multi-Color Offset Presses",
    "fleet_1_desc": "Equipped with online spectrophotometric color control delivering up to 18,000 sheets per hour with UV and eco-friendly vegetable-based inks.",
    "fleet_2_title": "Bobst Automatic Die-Cutters & Folder-Gluers",
    "fleet_2_desc": "High-precision flatbed die-cutting at 9,000 sheets per hour with automatic blank stripping and 6-corner gluing for complex pharmaceutical and cosmetic cartons.",
    "fleet_3_title": "Embellishment Unit: Hot Foil, Spot UV & Soft-Touch Velvet",
    "fleet_3_desc": "Precision thermal letterpress stamping, 3D multi-level embossing, and high-speed thermal laminators capable of luxurious soft-touch velvet finishes.",
    "export_network_title": "Export Network & Regional Desks",
    "export_network_desc": "Supplying premium cartons, luxury rigid gift boxes, and corporate catalogues to the UAE, Iraq, Russia, Turkey, and Oman with dedicated customs clearance and logistics.",
    "contact_badge": "Headquarters & Manufacturing Plant",
    "contact_title": "Contact SabzNegar Printing Complex",
    "contact_sub": "Get in touch for production facility tours, on-site press proofing, and volume B2B print orders.",
    "contact_tehran_title": "Tehran Central Complex & Plant",
    "contact_tehran_addr": "SabzNegar Printing Complex, Pajoohesh Blvd, Chitgar Industrial Park, 14th km Karaj Special Road, Tehran, Iran",
    "contact_istanbul_title": "Turkey Export Desk (Istanbul)",
    "contact_istanbul_addr": "İkitelli OSB, Triko Center S-Block No: 42, Başakşehir, Istanbul, Turkey",
    "contact_dubai_title": "UAE Regional Office (Dubai)",
    "contact_dubai_addr": "Office 804, Business Bay Tower, Marasi Drive, Dubai, UAE",
    "contact_moscow_title": "Russian Federation Desk (Moscow)",
    "contact_moscow_addr": "Presnenskaya Naberezhnaya 12, Federation Tower, Moscow, Russia",
    "articles_badge": "Print Knowledge & Education Center",
    "articles_title": "Technical Articles & Print Packaging Guides",
    "articles_sub": "Expert guides on substrate selection, run cost optimization, ISO color management, and luxury finishing techniques.",
    "articles_sub_title": "Subscribe to Print Industry Insights",
    "articles_sub_desc": "Receive monthly technical whitepapers and trend analyses on innovative packaging designs.",
    "articles_sub_btn": "Subscribe to Newsletter",
    "club_badge": "Corporate Partners Circle",
    "club_title": "SabzNegar B2B Customer Club & Credit Tiers",
    "club_sub": "Join our network of repeat corporate buyers and leading brands to access high-volume discounts, press priority, and flexible credit terms.",
    "club_tier_1_title": "Bronze Tier (Initial Orders)",
    "club_tier_1_desc": "Free structural packaging consulting, initial digital 3D mockups, and a dedicated corporate account.",
    "club_tier_2_title": "Silver Tier (Recurring Orders)",
    "club_tier_2_desc": "5% volume discount across all print runs, priority scheduling in press queue, and complimentary reprint CTP plates.",
    "club_tier_3_title": "Gold Tier (Partner Brands)",
    "club_tier_3_desc": "10% annual contract discount, free custom cutting die manufacturing, dedicated press inspection, and 45-day payment credit.",
    "club_tier_4_title": "Diamond Tier (Enterprise & Export)",
    "club_tier_4_desc": "15% enterprise discount, dedicated warehouse storage with phased dispatch, 24/7 emergency press runs, and export logistics.",
    "club_card_title": "SabzNegar VIP Smart Member Card",
    "club_card_sub": "Digital VIP partner card for verified corporate credit and volume discounts",
    "club_form_title": "Apply for SabzNegar Customer Club Membership",
    "warranty_badge": "100% Quality & Reprint Guarantee",
    "warranty_title": "Order Tracking & Reprint Quality Guarantee",
    "warranty_sub": "Real-time production stage tracking and streamlined reprint claims in the event of any deviation from signed press proofs.",
    "warranty_flow_title": "SabzNegar Quality Assurance & Reprint Policy",
    "warranty_flow_p1": "All print and packaging jobs are produced under ISO 12647-2 international color calibration with spectrophotometric density verification.",
    "warranty_flow_p2": "In the unlikely event of color deviation exceeding standard tolerances, dimensional die-cutting error, binding fault, or lamination defect, SabzNegar will reprint without charge or provide a full refund.",
    "warranty_flow_p3": "Post-production support includes secure storage of custom dies for up to 3 years and digital CTP archive retention in our secure cloud repository.",
    "warranty_serial_title": "Track Order Status or Batch Serial",
    "warranty_serial_sub": "Enter your job tracking number or batch serial (e.g. SN-2024-8841) to view real-time progress on our manufacturing floor.",
    "warranty_serial_btn": "Track Production Stage",
    "warranty_form_title": "Submit Reprint Claim or QC Review",
    "warranty_copy_code": "Copy Tracking Code",
    "footer_desc": "SabzNegar Industrial Print & Packaging House: delivering modern offset printing, pharmaceutical and commercial folding cartons, fine catalogs, and shopping bags built to global export standards.",
    "footer_links_title": "Quick Navigation",
    "footer_cats_title": "Production Lines",
    "footer_contact_title": "Headquarters & Plant",
    "footer_rights": "All rights reserved © 2026 SabzNegar Print & Packaging Complex — Multilingual Project Proposal Demo",
    "video_title": "SabzNegar Offset Press & Packaging Lines Video",
    "video_hud": "QC SPECTRO & PRINT PRESS SIMULATION",
    "video_desc": "Live simulation of Heidelberg Speedmaster XL 5-color offset press, online CMYK spectrophotometer density calibration, and Bobst automatic die-cutter at SabzNegar production plant.",
    "qc_phone": "Telephone Call to Plant & HQ",
    "qc_phone_tip": "Call Plant",
    "qc_whatsapp": "WhatsApp Technical Support & Quote",
    "qc_bale": "Bale Messenger Channel",
    "qc_rubika": "Rubika Channel",
    "qc_eitaa": "Eitaa Official Channel",
    "f_name": "Full Name",
    "f_mobile": "Mobile / Phone Number",
    "f_email": "Corporate Email Address",
    "f_company": "Company / Brand Name",
    "f_country": "Destination Country & City",
    "f_department": "Target Department",
    "f_dept_sales": "Print Sales & Orders",
    "f_dept_service": "Quality Control & Reprint Guarantee",
    "f_dept_export": "International Trade & Export Desk",
    "f_serial": "Order Tracking / Batch Serial Number",
    "f_service_type": "Request / Inquiry Type",
    "srv_repair": "Reprint Request or Color Adjustment",
    "srv_pm": "Second Run / Repeat Order Inquiry",
    "srv_parts": "New Cutting Die Manufacturing",
    "srv_install": "Physical Sample & Dummy Mockup Request",
    "f_issue": "Project Description / Technical Details",
    "f_subject": "Subject / Project Name",
    "f_message": "Project Specifications (Run size, grammage, dimensions, finishing)",
    "f_category_interest": "Category of Interest",
    "f_partnership_type": "Collaboration Type",
    "part_dealer": "Official Regional Print Representative / Agent",
    "part_distributor": "Design Agency & Packaging Consultant Partnership",
    "part_service": "Annual Supply Contract for Manufacturing / Pharma",
    "f_email_or_phone": "Email or Mobile Number",
    "send": "Submit Form & Receive Tracking Code",
    "success_msg": "Your request has been successfully registered. SabzNegar print specialists will contact you shortly.",
    "err_required": "Please complete all required fields correctly.",
    "err_mobile": "Please enter a valid phone number (at least 10 digits).",
    "err_email": "Please enter a valid email address format.",
    "cat_catalogs": "Catalog & Magazine Printing",
    "cat_boxes": "Packaging & Folding Cartons",
    "cat_bags": "Shopping Bags & Retail Packaging",
    "cat_commercial": "Offset & Digital Printing",
    "cat_promo": "Promotional Gifts & Exhibition Graphics",
    "cat_pumps": "Catalog & Magazine Printing",
    "cat_cold": "Packaging & Folding Cartons",
    "cat_hvac": "Shopping Bags & Retail Packaging",
    "cat_power": "Offset & Digital Printing",
    "cat_tools": "Promotional Gifts & Exhibition Graphics"
  },
  "ar": {
    "meta_title": "سبزنگار — مجمّع الطباعة الصناعية والتغليف | منصة دولية بخمس لغات",
    "meta_desc": "مجمّع سبزنگار للطباعة والتغليف: طباعة أوفست ٥ ألوان، علب كرتونية فاخرة، هاردبوكس، كتالوجات، أكياس تسوق وهدايا دعائية مع ضمان إعادة الطباعة ١٠٠٪.",
    "nav_home": "الرئيسية",
    "nav_products": "المنتجات وطلبات الطباعة",
    "nav_articles": "دليل الطباعة الفني",
    "nav_club": "نادي العملاء",
    "nav_warranty": "تتبع الطلب والضمان",
    "nav_about": "عن المجمّع",
    "nav_contact": "اتصل بنا",
    "nav_quote": "طلب عرض سعر فوري",
    "hero_badge": "مجمّع متخصص في طباعة الأوفست والتغليف التصديري",
    "hero_title": "طباعة وتغليف متطور لأرقى العلامات التجارية والصناعية",
    "hero_sub": "من التصميم الهيكلي وصناعة القوالب إلى طباعة الأوفست ٥ ألوان من هايدلبرغ، السلوفان المخملي، الختم الحراري بالذهب والتقطيع الآلي مع دعم تصديري بخمس لغات.",
    "hero_cta_products": "استعراض الكتالوج والمنتجات",
    "hero_cta_contact": "طلب تسعير واستشارة فنية",
    "stat_warranty": "ضمان جودة وإعادة طباعة ١٠٠٪",
    "hf_warranty_sub": "تطابق تام للألوان وخطوط الطي",
    "stat_langs": "٥ لغات لمكاتب التصدير",
    "hf_langs_sub": "FA / EN / AR / TR / RU",
    "stat_clients": "٣,٥٠٠+ عميل ومؤسسة",
    "hf_clients_sub": "كبرى العلامات التصديرية والغذائية",
    "stat_years": "٣٠+ عاماً من الخبرة الصناعية",
    "hf_years_sub": "تأسس ١٩٩٤ · معيار ISO 12647-2",
    "stat_models": "١٨,٠٠٠ شيت في الساعة",
    "cats_badge": "خطوط الإنتاج المتخصصة",
    "cats_title": "أقسام الطباعة والتغليف",
    "cats_sub": "إنتاج كافة المطبوعات التجارية، العلب الكرتونية والهدايا الترويجية بأحدث المعدات العالمية.",
    "view_category": "مشاهدة النماذج والطلب",
    "products_badge": "الأعمال والخدمات",
    "products_title": "كتالوج المنتجات وخدمات الطباعة",
    "products_sub": "فلترة حسب القسم أو نوع الورق أو البحث المباشر برمز المنتج والمواصفات الفنية.",
    "search_placeholder": "ابحث عن المنتج، وزن الورق، نوع الطباعة أو الكود...",
    "filter_all": "جميع المنتجات",
    "filter_subcat_label": "الأقسام الفرعية:",
    "filter_subcat_all": "كافة الأقسام الفرعية",
    "results_count": "عرض {n} منتج طباعي",
    "reset_filter": "↺ إعادة ضبط الفلاتر",
    "no_products_found": "لم يتم العثور على منتجات مطابقة للمواصفات.",
    "no_products_hint": "يرجى البحث بكلمات أخرى أو إعادة ضبط الفلاتر المطبقة.",
    "featured_badge": "الأكثر طلباً للشركات",
    "featured_title": "منتجات ومشاريع طباعية مميزة",
    "featured_sub": "الخيار الأول لمديري التسويق والعلامات المصدرة لضمان تميز التغليف على أرفف المتاجر.",
    "order_inquiry": "استعلام سعر التيراج",
    "download_catalog": "تحميل البطاقة الفنية (PDF)",
    "view_gallery": "معرض الصور",
    "specs_title": "المواصفات الفنية ومعايير الإنتاج",
    "spec_paper_weight": "وزن ونوع الورق / المقوى",
    "spec_dimensions": "الأبعاد ومقاس القالب",
    "spec_print_type": "تقنية الطباعة والمؤثرات الخاصة",
    "spec_min_order": "الحد الأدنى للطلب (MOQ)",
    "moq_badge": "تيراج اقتصادي",
    "home_quote_badge": "حساب فوري للتكلفة",
    "home_quote_title": "تسعير فوري واستشارة طباعية مجانية",
    "home_quote_sub": "أدخل مواصفات مشروعك الطباعي؛ وسيرسل مهندسو سبزنگار عرض سعر تفصيلي خلال ساعتي عمل.",
    "about_badge": "الأصالة والدقة وفن الطباعة",
    "about_title": "عن مجمّع سبزنگار للطباعة والتغليف",
    "about_p1": "تأسس مجمّع سبزنگار للطباعة والتغليف عام ١٩٩٤، واستطاع عبر الاستثمار المستمر في خطوط طباعة الأوفست الحديثة وماكينات الليتربرس واللصق الآلي والتجليد الفاخر، أن يصبح أحد رواد صناعة الطباعة في المنطقة.",
    "about_p2": "على مساحة تتجاوز ١٥,٠٠٠ متر مربع وخطوط هايدلبرغ وبوبست المتطورة، نوفر حلقة إنتاجية متكاملة تشمل: التصميم الهيكلي، فرز الألوان CTP، طباعة متعددة الألوان، السلوفان، الختم الذهبي، التكسير الدقيق والتغليف المخصص للتصدير.",
    "stat_ab_exp": "٣٠ عاماً",
    "stat_ab_clients": "٣,٥٠٠+",
    "stat_ab_products": "٥٠+ قالب جاهز",
    "stat_ab_countries": "٦ دول تصدير",
    "tech_fleet_title": "أسطول الماكينات وخطوط الإنتاج المتقدمة",
    "fleet_1_title": "ماكينات طباعة الأوفست Heidelberg Speedmaster",
    "fleet_1_desc": "مزودة بنظام قياس الألوان الطيفي الآلي وبطاقة إنتاجية تصل إلى ١٨,٠٠٠ فرخ بالساعة مع أحبار نباتية وأحبار UV.",
    "fleet_2_title": "خطوط التكسير ولصق العلب الآلية من Bobst",
    "fleet_2_desc": "تكسير دقيق بسرعة ٩,٠٠٠ فرخ بالساعة مع تفريغ آلي للزوائد ولصق لعلب الأدوية ومستحضرات التجميل.",
    "fleet_3_title": "قسم المؤثرات الخاصة: البصمة الذهبية، UV الموضعي والسلوفان المخملي",
    "fleet_3_desc": "معدات ليتربرس حرارية للذهب، نقش ثلاثي الأبعاد وماكينات تغليف حراري بطبقة مخملية Soft-Touch.",
    "export_network_title": "شبكة التصدير والمكاتب الإقليمية لسبزنگار",
    "export_network_desc": "تصدير واسع للعلب الكرتونية الفاخرة، الهاردبوكس والكتالوجات إلى الإمارات، العراق، روسيا، تركيا وعمان مع خدمات التخليص والشحن.",
    "contact_badge": "المقر الرئيسي والمصنع",
    "contact_title": "الاتصال بمجمّع طباعة سبزنگار",
    "contact_sub": "تواصل معنا لزيارة خطوط الإنتاج، حضور تجارب فحص الطباعة وتسجيل الطلبات المؤسسية.",
    "contact_tehran_title": "المصنع والمجمّع المركزي في طهران",
    "contact_tehran_addr": "طهران، الكيلو ١٤ طريق كرج القديم، مدينة شيتغر الصناعية، مجمّع سبزنگار للطباعة",
    "contact_istanbul_title": "مكتب تصدير تركيا (إسطنبول)",
    "contact_istanbul_addr": "İkitelli OSB, Triko Center S-Block No: 42, Başakşehir, Istanbul, Turkey",
    "contact_dubai_title": "مكتب الإمارات العربية المتحدة (دبي)",
    "contact_dubai_addr": "Office 804, Business Bay Tower, Marasi Drive, Dubai, UAE",
    "contact_moscow_title": "مكتب روسيا الاتحادية (موسكو)",
    "contact_moscow_addr": "Presnenskaya Naberezhnaya 12, Federation Tower, Moscow, Russia",
    "articles_badge": "مركز المعرفة والتعليم الطباعي",
    "articles_title": "مقالات وأدلة فنية في الطباعة والتغليف",
    "articles_sub": "إرشادات لاختيار خامات الورق، تقليل التكاليف، معايير إدارة الألوان وتقنيات التشطيب الفاخر.",
    "articles_sub_title": "الاشتراك في النشرة التخصصية لصناعة الطباعة",
    "articles_sub_desc": "احصل شهرياً على تحليلات وأفكار مبتكرة لتصميم وتطوير التغليف.",
    "articles_sub_btn": "الاشتراك في النشرة",
    "club_badge": "نادي الشركاء المؤسسيين",
    "club_title": "نادي عملاء B2B والتسهيلات الائتمانية",
    "club_sub": "انضم إلى شبكة عملائنا الدائمين للاستفادة من خصومات الكميات، أولوية الحجز في المطبعة والدفع الآجل.",
    "club_tier_1_title": "العضوية البرونزية (الطلبات الأولى)",
    "club_tier_1_desc": "استشارة مجانية للتصميم الهيكلي، ماكيت رقمي مبدئي وحساب شركة مخصص.",
    "club_tier_2_title": "العضوية الفضية (الطلبات الدورية)",
    "club_tier_2_desc": "خصم ٥٪ على كافة خطوط الطباعة، أولوية في جدول التشغيل وزينكات CTP مجانية لإعادة الطباعة.",
    "club_tier_3_title": "العضوية الذهبية (العلامات الشريكة)",
    "club_tier_3_desc": "خصم ١٠٪ على العقود السنوية، صناعة قوالب تقطيع مجانية، مشرف طباعة مخصص والدفع خلال ٤٥ يوماً.",
    "club_tier_4_title": "العضوية الماسية (الشركاء الكبار والتصدير)",
    "club_tier_4_desc": "خصم ١٥٪، مستودع مجاني وشحن على مراحل، تشغيل طوارئ ٢٤/٧ وتخليص جمركي تصديري.",
    "club_card_title": "بطاقة VIP الذكية لعملاء سبزنگار",
    "club_card_sub": "بطاقة رقمية للتحقق من هوية الشريك وتفعيل الخصومات الائتمانية",
    "club_form_title": "طلب الانضمام لنادي عملاء سبزنگار",
    "warranty_badge": "ضمان جودة وإعادة طباعة ١٠٠٪",
    "warranty_title": "تتبع مسار الطلب وضمان إعادة الطباعة",
    "warranty_sub": "نظام مباشر لتتبع مراحل التصنيع وتقديم طلبات إعادة الطباعة في حال وجود أي اختلاف عن العينة المعتمدة.",
    "warranty_flow_title": "سياسة مراقبة الجودة وإعادة الطباعة",
    "warranty_flow_p1": "يتم تصنيع كافة المطبوعات وفق معيار مطابقة الألوان الدولي ISO 12647-2 مع قياس كثافة الألوان إلكترونياً.",
    "warranty_flow_p2": "في حال حدوث أي انحراف في الألوان أو خطأ في أبعاد التكسير أو التجليد، تتكفل سبزنگار بإعادة الطباعة مجاناً أو استرداد القيمة.",
    "warranty_flow_p3": "تشمل خدمات ما بعد التسليم حفظ قوالب التقطيع حتى ٣ سنوات وأرشفة ملفات الطباعة في سحابة آمنة.",
    "warranty_serial_title": "استعلام عن حالة الطلب أو رقم التشغيلة",
    "warranty_serial_sub": "أدخل كود المتابعة أو رقم التشغيلة (مثل SN-2024-8841) لعرض المرحلة الحالية في صالة الإنتاج.",
    "warranty_serial_btn": "تتبع خط الإنتاج",
    "warranty_form_title": "تسجيل طلب إعادة طباعة أو فحص جودة",
    "warranty_copy_code": "نسخ رمز التتبع",
    "footer_desc": "مجمّع سبزنگار للطباعة الصناعية والتغليف: حلول متطورة لطباعة الأوفست، العلب الدوائية، الكتالوجات الفاخرة وأكياس المتاجر بمعايير تصديرية.",
    "footer_links_title": "روابط سريعة",
    "footer_cats_title": "خطوط الإنتاج",
    "footer_contact_title": "المقر والمصنع",
    "footer_rights": "جميع الحقوق محفوظة © ٢٠٢٦ مجمّع سبزنگار للطباعة والتغليف — العرض التجريبي بخمس لغات",
    "video_title": "فيديو تعريفي بخطوط أوفست وتغليف سبزنگار",
    "video_hud": "QC SPECTRO & PRINT PRESS SIMULATION",
    "video_desc": "محاكاة لخط طباعة هايدلبرغ Speedmaster XL 5 ألوان، نظام القياس الطيفي للألوان CMYK وماكينة التكسير الآلية في مصنع سبزنگار.",
    "qc_phone": "اتصال هاتفي بالمقر والمصنع",
    "qc_phone_tip": "اتصال بالمصنع",
    "qc_whatsapp": "واتساب الاستفسارات والتسعير",
    "qc_bale": "قناة بله سبزنگار",
    "qc_rubika": "قناة روبيكا سبزنگار",
    "qc_eitaa": "قناة إيتا الرسمية سبزنگار",
    "f_name": "الاسم الكامل",
    "f_mobile": "رقم الهاتف المحمول",
    "f_email": "البريد الإلكتروني للشركة",
    "f_company": "اسم الشركة / العلامة التجارية",
    "f_country": "بلد ومدينة الوجهة",
    "f_department": "القسم المطلوب",
    "f_dept_sales": "قسم المبيعات وطلبات الطباعة",
    "f_dept_service": "قسم مراقبة الجودة وإعادة الطباعة",
    "f_dept_export": "مكتب التجارة الدولية والتصدير",
    "f_serial": "كود المتابعة / رقم التشغيلة",
    "f_service_type": "نوع الطلب أو الخدمة",
    "srv_repair": "طلب إعادة طباعة أو تعديل ألوان",
    "srv_pm": "استعلام عن تكرار الطلبية السابقة",
    "srv_parts": "طلب صناعة قالب تقطيع جديد",
    "srv_install": "طلب عينة وماكيت مجسم",
    "f_issue": "تفاصيل الطلب أو المشروع الطباعي",
    "f_subject": "الموضوع أو اسم المشروع",
    "f_message": "مواصفات المشروع (الكمية، وزن الورق، الأبعاد ونوع الطباعة)",
    "f_category_interest": "القسم المطلوب",
    "f_partnership_type": "نوع التعاون المقترح",
    "part_dealer": "وكيل معتمد وموزع للطلبيات",
    "part_distributor": "شراكة وكالات الدعاية ومصممي التغليف",
    "part_service": "عقد توريد سنوي للشركات الصناعية والدوائية",
    "f_email_or_phone": "البريد الإلكتروني أو رقم الهاتف",
    "send": "إرسال واستلام كود المتابعة",
    "success_msg": "تم تسجيل طلبك بنجاح. سيتواصل معك خبراء الطباعة في سبزنگار قريباً.",
    "err_required": "يرجى ملء جميع الحقول الإلزامية المطلوبة بشكل صحيح.",
    "err_mobile": "رقم الهاتف غير صالح (يجب أن يحتوي على ١٠ أرقام على الأقل).",
    "err_email": "صيغة البريد الإلكتروني غير صحيحة.",
    "cat_catalogs": "طباعة الكتالوجات والمجلات",
    "cat_boxes": "التغليف والعلب الكرتونية",
    "cat_bags": "أكياس التسوق والتغليف المكتبي",
    "cat_commercial": "الطباعة التجارية والرقمية",
    "cat_promo": "الهدايا الدعائية والطباعة المعرضية",
    "cat_pumps": "طباعة الكتالوجات والمجلات",
    "cat_cold": "التغليف والعلب الكرتونية",
    "cat_hvac": "أكياس التسوق والتغليف المكتبي",
    "cat_power": "الطباعة التجارية والرقمية",
    "cat_tools": "الهدايا الدعائية والطباعة المعرضية"
  },
  "tr": {
    "meta_title": "SabzNegar — Endüstriyel Baskı ve Ambalaj Kompleksi | 5 Dilli Platform",
    "meta_desc": "SabzNegar Baskı ve Ambalaj Kompleksi: 5 renkli ofset baskı, lüks kutu ve hardbox, katalog ve dergi, kağıt çanta ve promosyon ürünleri. %100 yeniden basım garantisi.",
    "nav_home": "Ana Sayfa",
    "nav_products": "Ürünler & Baskı Siparişi",
    "nav_articles": "Matbaa Rehberi & Makaleler",
    "nav_club": "Müşteri Kulübü",
    "nav_warranty": "Sipariş Takibi & Garanti",
    "nav_about": "Hakkımızda",
    "nav_contact": "İletişim",
    "nav_quote": "Hızlı Fiyat Teklifi",
    "hero_badge": "Endüstriyel Ofset Baskı ve İhracat Ambalaj Kompleksi",
    "hero_title": "Lider Markalar İçin Yüksek Teknolojili Baskı ve Ambalaj",
    "hero_sub": "Yapısal ambalaj tasarımı ve bıçak imalatından Heidelberg 5 renk ofset baskıya, kadife selefon, varak yaldız ve otomatik kesime kadar 5 dilli ihracat desteği.",
    "hero_cta_products": "Katalog ve Ürünleri İncele",
    "hero_cta_contact": "Fiyat Teklifi ve Danışmanlık Al",
    "stat_warranty": "%100 Kalite ve Yeniden Baskı Garantisi",
    "hf_warranty_sub": "Tam Renk Uyumu ve Kesim Hassasiyeti",
    "stat_langs": "5 İhracat Masası Dili",
    "hf_langs_sub": "FA / EN / AR / TR / RU",
    "stat_clients": "3.500+ Kurumsal Müşteri",
    "hf_clients_sub": "Büyük Markalar ve İhracatçılar",
    "stat_years": "30+ Yıllık Sanayi Deneyimi",
    "hf_years_sub": "Kuruluş 1994 · ISO 12647-2 Standardı",
    "stat_models": "18.000 Tabaka/Saat Kapasite",
    "cats_badge": "Uzman Üretim Hatları",
    "cats_title": "Baskı ve Ambalaj Kategorileri",
    "cats_sub": "Dünya standartlarında son teknoloji makinelerle ticari baskı, endüstriyel ambalaj ve promosyon ürünleri üretimi.",
    "view_category": "Örnekleri Gör ve Sipariş Ver",
    "products_badge": "Portföy ve Hizmetler",
    "products_title": "Baskı ve Ürün Kataloğu",
    "products_sub": "Kategoriye, kağıt türüne göre filtreleyin veya ürün kodu ve teknik özelliklerle doğrudan arayın.",
    "search_placeholder": "Ürün adı, gramaj, baskı türü veya kod arayın...",
    "filter_all": "Tüm Ürünler",
    "filter_subcat_label": "Alt Kategoriler:",
    "filter_subcat_all": "Tüm Alt Kategoriler",
    "results_count": "{n} baskı ürünü gösteriliyor",
    "reset_filter": "↺ Filtreleri Temizle",
    "no_products_found": "Kriterlerinize uygun ürün bulunamadı.",
    "no_products_hint": "Lütfen farklı anahtar kelimeler deneyin veya filtreleri sıfırlayın.",
    "featured_badge": "Kurumsal Çok Satanlar",
    "featured_title": "Öne Çıkan Baskı ve Ambalaj Projeleri",
    "featured_sub": "Ürünlerinizin raflarda parlaması için pazarlama yöneticileri ve ihracat markalarının öncelikli tercihi.",
    "order_inquiry": "Tiraj Fiyatı Al",
    "download_catalog": "Teknik Bilgi Föyü İndir (PDF)",
    "view_gallery": "Görsel Galerisi",
    "specs_title": "Teknik Özellikler ve Üretim Standartları",
    "spec_paper_weight": "Gramaj ve Kağıt / Karton Cinsi",
    "spec_dimensions": "Boyutlar ve Ebat",
    "spec_print_type": "Baskı Teknolojisi ve Özel Efektler",
    "spec_min_order": "Minimum Sipariş Miktarı (MOQ)",
    "moq_badge": "Ekonomik Tiraj",
    "home_quote_badge": "Hızlı Maliyet Hesabı",
    "home_quote_title": "Anında Fiyat Teklifi ve Ücretsiz Danışmanlık",
    "home_quote_sub": "Baskı projenizin detaylarını girin; uzmanlarımız 2 saat içinde detaylı proforma faturanızı hazırlasın.",
    "about_badge": "Gelenek, Hassasiyet ve Baskı Sanatı",
    "about_title": "SabzNegar Baskı ve Ambalaj Kompleksi Hakkında",
    "about_p1": "1994 yılında kurulan SabzNegar Baskı ve Ambalaj Kompleksi; çok renkli ofset baskı makineleri, tipo varak yaldız, otomatik kutu yapıştırma ve sert kapak ciltleme yatırımlarıyla bölgenin önde gelen matbaa tesislerinden biri haline gelmiştir.",
    "about_p2": "15.000 metrekarelik entegre üretim tesisimiz ve otomatik Heidelberg ile Bobst hatlarımızla: yapısal ambalaj tasarımı, CTP kalıp, çok renkli baskı, selefon, sıcak varak, kabartma, hassas kesim ve ihracat ambalajına kadar uçtan uca hizmet veriyoruz.",
    "stat_ab_exp": "30 Yıl",
    "stat_ab_clients": "3.500+",
    "stat_ab_products": "50+ Bıçak Kalıbı",
    "stat_ab_countries": "6 İhracat Pazarı",
    "tech_fleet_title": "İleri Teknoloji Makine Parkuru",
    "fleet_1_title": "Heidelberg Speedmaster Çok Renkli Ofset Baskı",
    "fleet_1_desc": "Online spektrofotometrik renk kontrolü, saatte 18.000 tabaka hız ve çevre dostu bitkisel ve UV mürekkepler.",
    "fleet_2_title": "Bobst Otomatik Kesim ve Kutu Yapıştırma Hatları",
    "fleet_2_desc": "Saatte 9.000 tabaka hassas kesim, otomatik ayıklama ve ilaç/kozmetik kutuları için 6 noktalı otomatik yapıştırma.",
    "fleet_3_title": "Özel Efektler: Sıcak Varak, Lokal Lak ve Soft-Touch Kadife",
    "fleet_3_desc": "Tipo varak yaldız, 3D kabartma ve lüks kadife Soft-Touch selefon kaplama teknolojileri.",
    "export_network_title": "İhracat Ağı ve Bölge Temsilcilikleri",
    "export_network_desc": "BAE, Irak, Rusya, Türkiye ve Umman'a sert mukavva kutu, lamine ambalaj ve kurumsal katalog ihracatı.",
    "contact_badge": "Genel Merkez ve Üretim Fabrikası",
    "contact_title": "SabzNegar Baskı Kompleksi ile İletişime Geçin",
    "contact_sub": "Tesis ziyareti, baskı provası kontrolü ve kurumsal siparişleriniz için bize ulaşın.",
    "contact_tehran_title": "Tahran Merkez Fabrika ve Kompleks",
    "contact_tehran_addr": "SabzNegar Matbaa Kompleksi, Pajoohesh Bulvarı, Chitgar Sanayi Bölgesi, Karaj Yolu 14. km, Tahran, İran",
    "contact_istanbul_title": "Türkiye İhracat Masası (İstanbul)",
    "contact_istanbul_addr": "İkitelli OSB, Triko Center S-Blok No: 42, Başakşehir, İstanbul, Türkiye",
    "contact_dubai_title": "BAE Bölge Ofisi (Dubai)",
    "contact_dubai_addr": "Office 804, Business Bay Tower, Marasi Drive, Dubai, BAE",
    "contact_moscow_title": "Rusya Federasyonu Masası (Moskova)",
    "contact_moscow_addr": "Presnenskaya Naberezhnaya 12, Federation Tower, Moskova, Rusya",
    "articles_badge": "Baskı Bilgi ve Eğitim Merkezi",
    "articles_title": "Matbaa ve Ambalaj Teknik Makaleleri",
    "articles_sub": "Kağıt seçimi, tiraj maliyeti düşürme, ISO renk yönetimi ve lüks ambalaj teknikleri hakkında uzman rehberler.",
    "articles_sub_title": "Matbaa Sektörü Bültenine Abone Olun",
    "articles_sub_desc": "Aylık sektörel analizleri ve yenilikçi ambalaj fikirleri kataloğunu e-postanıza alın.",
    "articles_sub_btn": "Bültene Abone Ol",
    "club_badge": "Kurumsal İş Ortakları Kulübü",
    "club_title": "SabzNegar B2B Müşteri Kulübü ve Kredi Avantajları",
    "club_sub": "Sürekli kurumsal müşterilerimiz arasına katılarak yüksek tiraj indirimleri, baskı önceliği ve vadeli ödeme kolaylıklarından yararlanın.",
    "club_tier_1_title": "Bronz Üyelik (İlk Siparişler)",
    "club_tier_1_desc": "Ücretsiz yapısal ambalaj danışmanlığı, dijital maket ve kurumsal kullanıcı hesabı.",
    "club_tier_2_title": "Gümüş Üyelik (Düzenli Siparişler)",
    "club_tier_2_desc": "Tüm baskı hatlarında %5 indirim, makinede öncelikli planlama ve ücretsiz yeniden basım CTP kalıpları.",
    "club_tier_3_title": "Altın Üyelik (Partner Markalar)",
    "club_tier_3_desc": "Yıllık sözleşmelerde %10 indirim, ücretsiz özel kesim bıçağı, makine başında kontrol ve 45 gün vadeli ödeme.",
    "club_tier_4_title": "Elmas Üyelik (Büyük İhracatçılar)",
    "club_tier_4_desc": "%15 kurumsal indirim, ücretsiz depolama ve etaplı sevkiyat, 7/24 acil baskı hattı ve ihracat gümrükleme.",
    "club_card_title": "SabzNegar Akıllı VIP Üye Kartı",
    "club_card_sub": "Doğrulanmış kurumsal kredi ve indirim hakları tanımlı dijital partner kartı",
    "club_form_title": "SabzNegar Müşteri Kulübüne Başvurun",
    "warranty_badge": "%100 Kalite ve Yeniden Basım Garantisi",
    "warranty_title": "Sipariş Takibi ve Yeniden Basım Garantisi",
    "warranty_sub": "Canlı üretim aşaması takibi ve onaylanan baskı provasıyla uyumsuzluk durumunda hızlı yeniden basım talebi.",
    "warranty_flow_title": "Kalite Kontrol ve Yeniden Basım Taahhüdü",
    "warranty_flow_p1": "Tüm işler uluslararası ISO 12647-2 renk standartlarına göre spektrofotometrik yoğunluk kontrolüyle üretilir.",
    "warranty_flow_p2": "Kabul edilebilir toleransları aşan renk sapması, kesim hatası veya selefon kusurunda bedelsiz yeniden basım veya iade yapılır.",
    "warranty_flow_p3": "Özel kesim bıçakları 3 yıl boyunca güvenli depomuzda saklanır ve CTP dijital arşivleri bulutta muhafaza edilir.",
    "warranty_serial_title": "Sipariş Durumu veya Parti Numarası Sorgulama",
    "warranty_serial_sub": "Üretim hattındaki anlık durumu görmek için sipariş takip kodunuzu (örn. SN-2024-8841) girin.",
    "warranty_serial_btn": "Üretim Aşamasını Takip Et",
    "warranty_form_title": "Yeniden Basım veya Kalite Değerlendirme Talebi",
    "warranty_copy_code": "Takip Kodunu Kopyala",
    "footer_desc": "SabzNegar Endüstriyel Baskı ve Ambalaj: modern ofset baskı, ilaç ve gıda kutuları, lüks kataloglar ve taşıma çantaları ile küresel standartlarda üretim.",
    "footer_links_title": "Hızlı Erişim",
    "footer_cats_title": "Üretim Hatları",
    "footer_contact_title": "Merkez ve Fabrika",
    "footer_rights": "Tüm hakları saklıdır © 2026 SabzNegar Baskı ve Ambalaj Kompleksi — 5 Dilli Proje Teklif Demosu",
    "video_title": "SabzNegar Ofset ve Ambalaj Hatları Tanıtım Videosu",
    "video_hud": "QC SPECTRO & PRINT PRESS SIMULATION",
    "video_desc": "Heidelberg Speedmaster XL 5 renk ofset baskı, online CMYK spektrofotometre kalibrasyonu ve Bobst otomatik kesim simülasyonu.",
    "qc_phone": "Fabrika ve Merkez Telefonu",
    "qc_phone_tip": "Fabrikayı Ara",
    "qc_whatsapp": "WhatsApp Teknik Destek ve Teklif",
    "qc_bale": "Bale Kanalı",
    "qc_rubika": "Rubika Kanalı",
    "qc_eitaa": "Eitaa Resmi Kanalı",
    "f_name": "Ad Soyad",
    "f_mobile": "Cep / Telefon Numarası",
    "f_email": "Kurumsal E-posta Adresi",
    "f_company": "Firma / Marka Adı",
    "f_country": "Hedef Ülke ve Şehir",
    "f_department": "İlgili Departman",
    "f_dept_sales": "Baskı Satış ve Siparişler",
    "f_dept_service": "Kalite Kontrol ve Yeniden Basım",
    "f_dept_export": "Dış Ticaret ve İhracat Masası",
    "f_serial": "Sipariş Takip / Parti Numarası",
    "f_service_type": "Talep Türü",
    "srv_repair": "Yeniden Basım veya Renk Düzeltme",
    "srv_pm": "Tekrar Sipariş ve Ek Tiraj Fiyatı",
    "srv_parts": "Yeni Bıçak Kalıbı Üretimi",
    "srv_install": "Fiziksel Maket ve Numune Talebi",
    "f_issue": "Talep Açıklaması veya Proje Detayları",
    "f_subject": "Proje Konusu",
    "f_message": "Proje Özellikleri (Tiraj, gramaj, ebat ve baskı türü)",
    "f_category_interest": "İlgilendiğiniz Kategori",
    "f_partnership_type": "İş Birliği Türü",
    "part_dealer": "Bölgesel Yetkili Temsilcilik",
    "part_distributor": "Tasarım Ajansı ve Ambalaj Danışmanlığı",
    "part_service": "Üretici ve İlaç Firmaları Yıllık Tedarik Sözleşmesi",
    "f_email_or_phone": "E-posta veya Cep Telefonu",
    "send": "Formu Gönder ve Takip Kodu Al",
    "success_msg": "Talebiniz başarıyla kaydedildi. SabzNegar matbaa uzmanları en kısa sürede sizinle iletişime geçecektir.",
    "err_required": "Lütfen gerekli tüm alanları eksiksiz doldurunuz.",
    "err_mobile": "Geçersiz telefon numarası (en az 10 basamak).",
    "err_email": "Geçersiz e-posta formatı.",
    "cat_catalogs": "Katalog ve Dergi Baskısı",
    "cat_boxes": "Kutu ve Karton Ambalaj",
    "cat_bags": "Alışveriş Çantaları & Mağaza Ambalajı",
    "cat_commercial": "Ofset ve Dijital Ticari Baskı",
    "cat_promo": "Promosyon ve Fuar Baskıları",
    "cat_pumps": "Katalog ve Dergi Baskısı",
    "cat_cold": "Kutu ve Karton Ambalaj",
    "cat_hvac": "Alışveriş Çantaları & Mağaza Ambalajı",
    "cat_power": "Ofset ve Dijital Ticari Baskı",
    "cat_tools": "Promosyon ve Fuar Baskıları"
  },
  "ru": {
    "meta_title": "SabzNegar — Полиграфический и упаковочный комплекс | 5-язычная платформа",
    "meta_desc": "Полиграфический комплекс SabzNegar: 5-красочная офсетная печать, коробки, хардбоксы, каталоги, журналы, бумажные пакеты и сувенирная продукция. 100% гарантия перепечати.",
    "nav_home": "Главная",
    "nav_products": "Продукция и заказ печати",
    "nav_articles": "Руководства по полиграфии",
    "nav_club": "Клуб клиентов",
    "nav_warranty": "Отслеживание заказа и гарантия",
    "nav_about": "О комплексе",
    "nav_contact": "Контакты",
    "nav_quote": "Быстрый расчет стоимости",
    "hero_badge": "Индустриальный офсетный и упаковочный экспортный комплекс",
    "hero_title": "Высокотехнологичная полиграфия и упаковка для ведущих брендов",
    "hero_sub": "От разработки конструкции и изготовления штампов до 5-красочной печати Heidelberg, бархатной ламинации, тиснения фольгой и автоматической высечки с поддержкой на 5 языках.",
    "hero_cta_products": "Смотреть каталог продукции",
    "hero_cta_contact": "Запросить расчет и консультацию",
    "stat_warranty": "100% гарантия качества и перепечати",
    "hf_warranty_sub": "Точное цветосовмещение и линии биговки",
    "stat_langs": "5 языков экспортного отдела",
    "hf_langs_sub": "FA / EN / AR / TR / RU",
    "stat_clients": "3 500+ корпоративных клиентов",
    "hf_clients_sub": "Крупные бренды и экспортеры",
    "stat_years": "30+ лет производственного опыта",
    "hf_years_sub": "Основан в 1994 г. · Стандарт ISO 12647-2",
    "stat_models": "18 000 листов/час мощность",
    "cats_badge": "Производственные направления",
    "cats_title": "Категории полиграфии и упаковки",
    "cats_sub": "Производство коммерческой полиграфии, промышленной упаковки и сувенирной продукции на передовом европейском оборудовании.",
    "view_category": "Смотреть образцы и заказать",
    "products_badge": "Портфолио и услуги",
    "products_title": "Каталог продукции и полиграфических услуг",
    "products_sub": "Фильтрация по категориям, материалам или прямой поиск по артикулу и техническим параметрам.",
    "search_placeholder": "Поиск по названию, плотности, виду печати или коду...",
    "filter_all": "Вся продукция",
    "filter_subcat_label": "Подкатегории:",
    "filter_subcat_all": "Все подкатегории",
    "results_count": "Показано {n} видов полиграфической продукции",
    "reset_filter": "↺ Сбросить фильтры",
    "no_products_found": "По выбранным критериям продукция не найдена.",
    "no_products_hint": "Попробуйте изменить поисковый запрос или сбросить фильтры.",
    "featured_badge": "Хиты продаж для бизнеса",
    "featured_title": "Популярные полиграфические проекты",
    "featured_sub": "Выбор директоров по маркетингу и экспортеров для эффектного выделения продукции на полках.",
    "order_inquiry": "Запросить цену тиража",
    "download_catalog": "Скачать техпаспорт (PDF)",
    "view_gallery": "Галерея изображений",
    "specs_title": "Технические характеристики и стандарты",
    "spec_paper_weight": "Плотность и тип бумаги / картона",
    "spec_dimensions": "Размеры и формат штампа",
    "spec_print_type": "Технология печати и спецэффекты",
    "spec_min_order": "Минимальный тираж (MOQ)",
    "moq_badge": "Экономичный тираж",
    "home_quote_badge": "Быстрый расчет сметы",
    "home_quote_title": "Мгновенный расчет и бесплатная консультация",
    "home_quote_sub": "Укажите параметры вашего тиража; наши технологи подготовят подробную смету в течение 2 рабочих часов.",
    "about_badge": "Традиции, точность и мастерство печати",
    "about_title": "О полиграфическом комплексе SabzNegar",
    "about_p1": "Основанный в 1994 году, полиграфический комплекс SabzNegar благодаря инвестициям в новейшие печатные машины, тигельные прессы горячего тиснения, автоматические фальцевально-склеивающие линии и твердый переплет стал признанным лидером отрасли.",
    "about_p2": "На площади более 15 000 кв. м на линиях Heidelberg и Bobst мы обеспечиваем полный производственный цикл: конструкторское бюро, CTP-вывод пластин, многокрасочная печать, ламинация, тиснение, конгрев, высечка и экспортная упаковка.",
    "stat_ab_exp": "30 лет",
    "stat_ab_clients": "3 500+",
    "stat_ab_products": "50+ готовых штампов",
    "stat_ab_countries": "6 стран экспорта",
    "tech_fleet_title": "Парк высокотехнологичного оборудования",
    "fleet_1_title": "Офсетные печатные машины Heidelberg Speedmaster",
    "fleet_1_desc": "Онлайн-спектрофотометрический контроль цвета, производительность до 18 000 листов в час, работа с УФ- и экологичными растительными красками.",
    "fleet_2_title": "Автоматические линии высечки и склейки Bobst",
    "fleet_2_desc": "Высечка со скоростью 9 000 листов в час с автоматическим удалением облоя и 6-точечной склейкой сложных фармацевтических пачек.",
    "fleet_3_title": "Отделочные процессы: тиснение фольгой, УФ-лак и Soft-Touch",
    "fleet_3_desc": "Прецизионное горячее тиснение, 3D-конгрев и скоростная термоламинация с эффектом бархата Soft-Touch.",
    "export_network_title": "Экспортная сеть и региональные офисы",
    "export_network_desc": "Поставки кашированных коробок, премиальных хардбоксов и каталогов в ОАЭ, Ирак, Россию, Турцию и Оман с таможенным оформлением.",
    "contact_badge": "Главный офис и производство",
    "contact_title": "Свяжитесь с полиграфическим комплексом SabzNegar",
    "contact_sub": "Свяжитесь с нами для организации визита на фабрику, приладки тиража в цехе и оформления заказов.",
    "contact_tehran_title": "Центральное производство в Тегеране",
    "contact_tehran_addr": "Иран, Тегеран, 14-й км специального шоссе Кередж, технопарк Читгар, комплекс SabzNegar",
    "contact_istanbul_title": "Экспортный отдел в Турции (Стамбул)",
    "contact_istanbul_addr": "İkitelli OSB, Triko Center S-Block No: 42, Başakşehir, Istanbul, Turkey",
    "contact_dubai_title": "Представительство в ОАЭ (Дубай)",
    "contact_dubai_addr": "Office 804, Business Bay Tower, Marasi Drive, Dubai, UAE",
    "contact_moscow_title": "Представительство в России (Москва)",
    "contact_moscow_addr": "Москва, Пресненская набережная 12, Башня Федерация",
    "articles_badge": "Центр полиграфических знаний",
    "articles_title": "Технические статьи и руководства по упаковке",
    "articles_sub": "Экспертные рекомендации по выбору картона, оптимизации затрат на тираж, стандарту ISO 12647-2 и элитной отделке.",
    "articles_sub_title": "Подписка на полиграфический дайджест",
    "articles_sub_desc": "Ежемесячно получайте технические обзоры и каталог креативных упаковочных решений.",
    "articles_sub_btn": "Подписаться на рассылку",
    "club_badge": "Клуб корпоративных партнеров",
    "club_title": "Клуб клиентов B2B и кредитные линии SabzNegar",
    "club_sub": "Присоединяйтесь к кругу постоянных партнеров: скидки на объемные тиражи, приоритет в печатном графике и отсрочка платежа.",
    "club_tier_1_title": "Бронзовый уровень (первые заказы)",
    "club_tier_1_desc": "Бесплатная консультация по конструкции упаковки, изготовление цифрового макета и личный менеджер.",
    "club_tier_2_title": "Серебряный уровень (регулярные заказы)",
    "club_tier_2_desc": "Скидка 5% на все виды печати, приоритетное планирование на печатных машинах и бесплатные CTP-формы при повторе.",
    "club_tier_3_title": "Золотой уровень (партнерские бренды)",
    "club_tier_3_desc": "Скидка 10% на годовые контракты, бесплатное изготовление вырубного штампа, присутствие на приладке и отсрочка 45 дней.",
    "club_tier_4_title": "Платиновый уровень (крупный экспорт)",
    "club_tier_4_desc": "Скидка 15%, ответственное складское хранение готовой упаковки с поэтапной отгрузкой, круглосуточная печать 24/7.",
    "club_card_title": "Умная VIP-карта партнера SabzNegar",
    "club_card_sub": "Электронная карта партнера с подтвержденным кредитным лимитом и скидками",
    "club_form_title": "Заявка на вступление в клуб SabzNegar",
    "warranty_badge": "100% гарантия качества и перепечати",
    "warranty_title": "Отслеживание заказа и гарантия перепечати",
    "warranty_sub": "Онлайн-контроль этапов производства и гарантированная бесплатная перепечать при малейшем расхождении с утвержденной пробой.",
    "warranty_flow_title": "Политика контроля качества и гарантия перепечати",
    "warranty_flow_p1": "Вся продукция выпускается в соответствии с международным полиграфическим стандартом ISO 12647-2 со спектрофотометрическим контролем.",
    "warranty_flow_p2": "При выявлении цветового отклонения сверх нормы, погрешности высечки, брака ламинации или сборки мы оперативно и бесплатно перепечатываем тираж или возвращаем средства.",
    "warranty_flow_p3": "Индивидуальные вырубные штампы хранятся на складе до 3 лет, а электронные спуски полос архивируются в защищенном облаке.",
    "warranty_serial_title": "Проверка статуса заказа или номера партии",
    "warranty_serial_sub": "Введите трек-номер или номер партии заказа (например, SN-2024-8841) для отображения текущего этапа на производстве.",
    "warranty_serial_btn": "Отследить этап производства",
    "warranty_form_title": "Заявка на перепечать или контроль качества",
    "warranty_copy_code": "Скопировать трек-номер",
    "footer_desc": "Полиграфический комплекс SabzNegar: передовая офсетная печать, фармацевтическая упаковка, подарочные коробки, элитные каталоги и пакеты мирового уровня.",
    "footer_links_title": "Навигация",
    "footer_cats_title": "Производство",
    "footer_contact_title": "Главный офис и завод",
    "footer_rights": "Все права защищены © 2026 Полиграфический комплекс SabzNegar — Демонстрационный проект на 5 языках",
    "video_title": "Видео офсетных и упаковочных линий SabzNegar",
    "video_hud": "QC SPECTRO & PRINT PRESS SIMULATION",
    "video_desc": "Интерактивная симуляция 5-красочной офсетной машины Heidelberg Speedmaster XL, спектрофотометрии CMYK и автоматической высечки Bobst.",
    "qc_phone": "Телефон завода и офиса",
    "qc_phone_tip": "Позвонить на завод",
    "qc_whatsapp": "WhatsApp техподдержки и расчета",
    "qc_bale": "Канал в мессенджере Bale",
    "qc_rubika": "Канал в Rubika",
    "qc_eitaa": "Официальный канал в Eitaa",
    "f_name": "Имя и фамилия",
    "f_mobile": "Мобильный / контактный телефон",
    "f_email": "Корпоративная эл. почта",
    "f_company": "Компания / бренд",
    "f_country": "Страна и город доставки",
    "f_department": "Целевой отдел",
    "f_dept_sales": "Отдел продаж и заказов полиграфии",
    "f_dept_service": "Контроль качества и рекламации",
    "f_dept_export": "ВЭД и экспортный отдел",
    "f_serial": "Трек-номер / номер партии заказа",
    "f_service_type": "Тип запроса или услуги",
    "srv_repair": "Запрос на перепечать или коррекцию цвета",
    "srv_pm": "Повторный тираж и допечатка",
    "srv_parts": "Изготовление нового вырубного штампа",
    "srv_install": "Заказ физического макета и образцов",
    "f_issue": "Описание заказа или проекта",
    "f_subject": "Тема или название проекта",
    "f_message": "Характеристики заказа (тираж, плотность, формат, отделка)",
    "f_category_interest": "Интересующая категория",
    "f_partnership_type": "Формат сотрудничества",
    "part_dealer": "Официальное региональное представительство",
    "part_distributor": "Партнерство с рекламными агентствами и дизайнерами",
    "part_service": "Годовой контракт на поставку упаковки для производств",
    "f_email_or_phone": "Эл. почта или телефон",
    "send": "Отправить форму и получить код",
    "success_msg": "Ваш запрос успешно зарегистрирован. Технологи SabzNegar свяжутся с вами в ближайшее время.",
    "err_required": "Пожалуйста, заполните все обязательные поля.",
    "err_mobile": "Неверный формат номера телефона (не менее 10 цифр).",
    "err_email": "Неверный формат адреса электронной почты.",
    "cat_catalogs": "Печать каталогов и журналов",
    "cat_boxes": "Упаковка и картонные коробки",
    "cat_bags": "Пакеты и розничная упаковка",
    "cat_commercial": "Офсетная и цифровая печать",
    "cat_promo": "Сувениры и выставочная полиграфия",
    "cat_pumps": "Печать каталогов и журналов",
    "cat_cold": "Упаковка и картонные коробки",
    "cat_hvac": "Пакеты и розничная упаковка",
    "cat_power": "Офсетная и цифровая печать",
    "cat_tools": "Сувениры и выставочная полиграфия"
  }
};

const t = k => (T[lang] && T[lang][k]) || (T.en && T.en[k]) || k;
const $ = id => document.getElementById(id);

/* ---------- Dynamic Vector Category SVG Fallback ---------- */
function getCategorySvgFallback(catId, title) {
  const safeTitle = (title || 'SabzNegar Print').replace(/</g, '').replace(/>/g, '');
  const colors = {
    catalogs: { g1: '#0d3829', g2: '#164e3f', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z' },
    boxes: { g1: '#072218', g2: '#0e382b', icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' },
    bags: { g1: '#114634', g2: '#1c634c', icon: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0' },
    commercial: { g1: '#183c2e', g2: '#0a261c', icon: 'M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zm4 4h4m-4 4h8' },
    promo: { g1: '#134030', g2: '#1a543f', icon: 'M20 12v10H4V12M2 7h20v5H2zm10 15V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zm0 0h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z' }
  };
  const c = colors[catId] || colors.boxes;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${c.g1}"/>
        <stop offset="100%" stop-color="${c.g2}"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#bg)"/>
    <circle cx="300" cy="180" r="90" fill="rgba(255,255,255,0.06)"/>
    <g transform="translate(260, 140) scale(1.6)" stroke="#bfa15f" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="${c.icon}"/>
    </g>
    <!-- CMYK proof dots -->
    <circle cx="270" cy="275" r="5" fill="#009fe3"/>
    <circle cx="290" cy="275" r="5" fill="#e6007e"/>
    <circle cx="310" cy="275" r="5" fill="#ffed00"/>
    <circle cx="330" cy="275" r="5" fill="#ffffff"/>
    <text x="300" y="325" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">${safeTitle}</text>
    <text x="300" y="355" font-family="system-ui, sans-serif" font-size="13" fill="rgba(255,255,255,0.7)" text-anchor="middle">مجتمع چاپ و بسته‌بندی سبزنگار · SabzNegar</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function attachImgFallback(imgEl, catId, title) {
  if (!imgEl) return;
  imgEl.onerror = function() {
    this.onerror = null;
    this.src = getCategorySvgFallback(catId, title);
  };
}

/* ---------- Master Categories Database (5 Bound Categories) ---------- */
const CATEGORIES = [
  {
    "id": "catalogs",
    "icon": "📖",
    "name": {
      "fa": "چاپ کاتالوگ و مجله",
      "en": "Catalog & Magazine Printing",
      "ar": "طباعة الكتالوجات والمجلات",
      "tr": "Katalog ve Dergi Baskısı",
      "ru": "Печать каталогов и журналов"
    },
    "subs": [
      {
        "id": "hardcover",
        "name": {
          "fa": "کاتالوگ جلد سخت و سیمی لوکس",
          "en": "Luxury Hardcover & Wire-O Catalogs",
          "ar": "كتالوجات فاخرة بغلاف مقوى وسلك",
          "tr": "Sert Kapak ve Spiralli Lüks Katalog",
          "ru": "Элитные каталоги в твердом переплете"
        }
      },
      {
        "id": "magazines",
        "name": {
          "fa": "مجلات و بولتن‌های دوره‌ای",
          "en": "Periodical Magazines & Bulletins",
          "ar": "مجلات ونشرات دورية",
          "tr": "Süreli Dergi ve Bültenler",
          "ru": "Периодические журналы и бюллетени"
        }
      },
      {
        "id": "lookbooks",
        "name": {
          "fa": "لوک‌بوک و بروشورهای چندلت",
          "en": "Lookbooks & Multi-Fold Gatefolds",
          "ar": "كتيبات أزياء وبروشورات مطوية",
          "tr": "Lookbook ve Katlamalı Broşürler",
          "ru": "Лукбуки и складные буклеты"
        }
      }
    ]
  },
  {
    "id": "boxes",
    "icon": "📦",
    "name": {
      "fa": "بسته‌بندی و جعبه مقوایی",
      "en": "Packaging & Folding Cartons",
      "ar": "التغليف والعلب الكرتونية",
      "tr": "Kutu ve Karton Ambalaj",
      "ru": "Упаковка и картонные коробки"
    },
    "subs": [
      {
        "id": "pharma",
        "name": {
          "fa": "جعبه‌های دارویی و بهداشتی",
          "en": "Pharma & Cosmetic Folding Cartons",
          "ar": "علب أدوية ومستحضرات تجميل",
          "tr": "İlaç ve Kozmetik Kutuları",
          "ru": "Фармацевтическая и косметическая пачка"
        }
      },
      {
        "id": "rigid",
        "name": {
          "fa": "هاردباکس و جعبه هدیه مگنتی",
          "en": "Luxury Magnetic Rigid Gift Boxes",
          "ar": "هاردبوكس فاخر بعلب مغناطيسية",
          "tr": "Mıknatıslı Lüks Sert Mukavva Kutu",
          "ru": "Премиальные хардбоксы на магнитах"
        }
      },
      {
        "id": "cartons",
        "name": {
          "fa": "کارتن لمینتی سه‌لایه فلوتینگ",
          "en": "Laminated Micro-Flute Cartons",
          "ar": "كرتون مصفح ميكروفلوت",
          "tr": "Lamine E-Flute Oluklu Kutular",
          "ru": "Кашированные микрогофрокороба"
        }
      }
    ]
  },
  {
    "id": "bags",
    "icon": "🛍️",
    "name": {
      "fa": "ساک دستی و بسته‌بندی فروشگاهی",
      "en": "Shopping Bags & Retail Packaging",
      "ar": "أكياس التسوق والتغليف المكتبي",
      "tr": "Alışveriş Çantaları & Mağaza Ambalajı",
      "ru": "Пакеты и розничная упаковка"
    },
    "subs": [
      {
        "id": "kraft",
        "name": {
          "fa": "ساک دستی کرافت دوستدار طبیعت",
          "en": "Eco-Friendly Kraft Paper Bags",
          "ar": "أكياس ورق كرافت صديقة للبيئة",
          "tr": "Çevre Dostu Kraft Kağıt Çantalar",
          "ru": "Экологичные крафт-пакеты"
        }
      },
      {
        "id": "boutique",
        "name": {
          "fa": "ساک گلاسه لوکس با بند روبان",
          "en": "Luxury Satin Ribbon Art Bags",
          "ar": "أكياس كوشيه فاخرة بشرائط ساتان",
          "tr": "Kuşe Kağıt Lüks Kurdeleli Çantalar",
          "ru": "Элитные ламинированные пакеты с лентами"
        }
      },
      {
        "id": "takeaway",
        "name": {
          "fa": "بسته‌بندی غذا و پاکت بیرون‌بر",
          "en": "Takeaway & Food-Grade Packaging",
          "ar": "تغليف أغذية ووجبات سريعة",
          "tr": "Gıda ve Paket Servis Ambalajları",
          "ru": "Пищевая упаковка и пакеты навынос"
        }
      }
    ]
  },
  {
    "id": "commercial",
    "icon": "📇",
    "name": {
      "fa": "چاپ افست و دیجیتال تجاری",
      "en": "Offset & Digital Commercial Print",
      "ar": "الطباعة التجارية والرقمية",
      "tr": "Ofset ve Dijital Ticari Baskı",
      "ru": "Офсетная и цифровая печать"
    },
    "subs": [
      {
        "id": "cards",
        "name": {
          "fa": "کارت ویزیت مخملی و طلاکوب",
          "en": "Velvet Soft-Touch Foil Business Cards",
          "ar": "بطاقات عمل مخملية ببصمة ذهبية",
          "tr": "Kadife Selefonlu Varak Yaldızlı Kartvizit",
          "ru": "Визитки Soft-Touch с фольгированием"
        }
      },
      {
        "id": "stationery",
        "name": {
          "fa": "ست اداری و سربرگ کتان",
          "en": "Corporate Stationery & Linen Letterheads",
          "ar": "مطبوعات وهوية بصرية وورق مروس",
          "tr": "Kurumsal Kimlik ve Antetli Kağıtlar",
          "ru": "Фирменные бланки и деловая полиграфия"
        }
      },
      {
        "id": "folders",
        "name": {
          "fa": "فولدر جیب‌دار و کاتالوگ لت‌دار",
          "en": "Pocket Presentation Folders & Folders",
          "ar": "فولدرات بجيوب ومطويات تعريفية",
          "tr": "Cepli Sunum Dosyaları ve Broşürler",
          "ru": "Папки с карманами и презентационные фолдеры"
        }
      }
    ]
  },
  {
    "id": "promo",
    "icon": "🎁",
    "name": {
      "fa": "هدایای تبلیغاتی و چاپ نمایشگاهی",
      "en": "Promotional Gifts & Exhibition Graphics",
      "ar": "الهدايا الدعائية والطباعة المعرضية",
      "tr": "Promosyon ve Fuar Baskıları",
      "ru": "Сувениры и выставочная полиграфия"
    },
    "subs": [
      {
        "id": "agenda",
        "name": {
          "fa": "سررسید و سالنامه چرمی اختصاصی",
          "en": "Custom Executive Leather Agendas",
          "ar": "مفكرات وأجندات جلدية سنوية فاخرة",
          "tr": "Özel Deri Ajanda ve Tarihli Defterler",
          "ru": "Ежедневники в коже с тиснением"
        }
      },
      {
        "id": "exhibition",
        "name": {
          "fa": "استند رول‌آپ، بنر و پاپ‌آپ",
          "en": "Roll-up Banners & Exhibition Pop-ups",
          "ar": "رول أب وبنرات ومنصات معارض",
          "tr": "Roll-up Banner ve Fuar Standları",
          "ru": "Ролл-апы, баннеры и мобильные стенды"
        }
      },
      {
        "id": "giveaways",
        "name": {
          "fa": "پک اختصاصی رویداد و همایش",
          "en": "VIP Corporate Event Merchandising",
          "ar": "أطقم هدايا خاصة للمؤتمرات",
          "tr": "VIP Etkinlik ve Kongre Hediye Setleri",
          "ru": "Подарочные наборы для конференций"
        }
      }
    ]
  }
];

/* ---------- Products Database (10 Production Items) ---------- */
const PRODUCTS = [
  {
    "id": 1,
    "sku": "SN-CAT-501",
    "cat": "catalogs",
    "subcat": "hardcover",
    "price": "۵۰۰ جلد (حداقل تیراژ)",
    "featured": true,
    "name": {
      "fa": "کاتالوگ نفیس جلد سخت سلفون مات و طلاکوب",
      "en": "Luxury Hardcover Corporate Catalog with Gold Foil",
      "ar": "كتالوج نفيس بغلاف مقوى فاخر وبصمة ذهبية وسلوفان مات",
      "tr": "Lüks Sert Kapak Mat Selefon ve Varak Yaldızlı Katalog",
      "ru": "Элитный корпоративный каталог в твердом переплете с тиснением"
    },
    "desc": {
      "fa": "کاتالوگ سازمانی نفیس با صحافی دوخت و جلد سخت گالینگور، چاپ ۵ رنگ هایدلبرگ، صفحات گلاسه مات ۱۷۰ گرم، یووی موضعی برجسته و روبان نشانه‌گذار اختصاصی.",
      "en": "Executive case-bound hardcover catalog featuring Heidelberg 5-color offset printing, 170gsm matt art paper inner pages, raised spot UV embellishments, and custom silk ribbon marker.",
      "ar": "كتالوج مؤسسي فاخر بتجليد مقوى وخياطة سويدية، طباعة ٥ ألوان هايدلبرغ، ورق كوشيه مطفأ ١٧٠ جم، ورنيش UV موضعي بارز وشريط علامة مخصص.",
      "tr": "İplik dikişli sert kapak prestij kataloğu, Heidelberg 5 renk ofset baskı, 170 gr mat kuşe iç sayfalar, kabartma lokal lak ve özel kurdele ayraç.",
      "ru": "Премиальный корпоративный каталог в твердом переплете с ниткошвейным скреплением, 5-красочная печать Heidelberg, мелованная бумага 170 г/м², выборочный УФ-лак и шелковое ляссе."
    },
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900&q=80",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80"
    ],
    "specs": [
      [
        "گرماژ کاغذ / Paper Weight",
        "جلد مقوای ۲ میلی‌متر + صفحات داخلی گلاسه مات ۱۷۰ گرم"
      ],
      [
        "ابعاد / Dimensions",
        "A4 عمودی (۲۱۰×۲۹۷ میلی‌متر) یا خشتی ۲۲×۲۲ سانتی‌متر"
      ],
      [
        "نوع چاپ / Print Process",
        "افست ۵ رنگ هایدلبرگ اسپیدمستر + سلفون مات حرارتی + طلاکوب"
      ],
      [
        "حداقل سفارش / MOQ",
        "۵۰۰ جلد (تولید اقتصادی ۱,۰۰۰ به بالا)"
      ],
      [
        "نوع صحافی / Binding",
        "صحافی جلد سخت (Case Bound) با دوخت تمام‌اتوماتیک و شیرازه"
      ],
      [
        "زمان تحویل / Turnaround",
        "۷ الی ۱۰ روز کاری"
      ]
    ]
  },
  {
    "id": 2,
    "sku": "SN-MAG-202",
    "cat": "catalogs",
    "subcat": "magazines",
    "price": "۱,۰۰۰ جلد (حداقل تیراژ)",
    "featured": true,
    "name": {
      "fa": "مجله و بولتن اختصاصی دوره‌ای با صحافی چسب گرم PUR",
      "en": "Quarterly Corporate Magazine with PUR Perfect Binding",
      "ar": "مجلة وبولتن دوري متخصص مع تجليد بالغراء الساخن PUR",
      "tr": "Süreli Kurumsal Dergi ve Bülten (PUR Tutkallı Cilt)",
      "ru": "Периодический корпоративный журнал с PUR-склейкой"
    },
    "desc": {
      "fa": "چاپ مجلات دوره‌ای و گزارش سالیانه سازمانی با چاپ افست ۴ رنگ کالیبره‌شده، جلد گلاسه ۲۵۰ گرم سلفون مات و صحافی خطی چسب گرم اتوماتیک مقاوم در برابر ورق‌زدن مداوم.",
      "en": "High-speed quarterly periodical and corporate annual report production featuring calibrated 4-color offset, 250gsm matt-laminated cover, and flexible PUR spine binding.",
      "ar": "طباعة مجلات دورية وتقارير سنوية للشركات بأوفست ٤ ألوان، غلاف كوشيه ٢٥٠ جم بسلوفان مات وتجليد حراري PUR متين.",
      "tr": "Kalibre 4 renk ofset baskı, 250 gr mat selefonlu kapak ve sayfa kopmasını önleyen PUR tutkallı ciltleme ile kurumsal süreli dergi basımı.",
      "ru": "Печать периодических журналов и годовых отчетов с калиброванной 4-красочной печатью, обложкой 250 г/м² с матовой ламинацией и прочным полиуретановым PUR-переплетом."
    },
    "images": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80"
    ],
    "specs": [
      [
        "گرماژ کاغذ / Paper Weight",
        "جلد گلاسه ۲۵۰ گرم + متن تحریر ۸۰ گرم یا گلاسه ۱۳۵ گرم"
      ],
      [
        "ابعاد / Dimensions",
        "رحلی استاندارد (۲۱۰×۲۸۰ میلی‌متر)"
      ],
      [
        "نوع چاپ / Print Process",
        "افست ۴ رنگ با سیستم کنترل ترام و رنگ اتوماتیک"
      ],
      [
        "حداقل سفارش / MOQ",
        "۱,۰۰۰ جلد"
      ],
      [
        "نوع صحافی / Binding",
        "صحافی چسب گرم پلی‌اورتان PUR یا منگنه لوپ"
      ],
      [
        "زمان تحویل / Turnaround",
        "۵ الی ۷ روز کاری"
      ]
    ]
  },
  {
    "id": 3,
    "sku": "SN-BOX-801",
    "cat": "boxes",
    "subcat": "pharma",
    "price": "۳,۰۰۰ عدد (حداقل تیراژ)",
    "featured": true,
    "name": {
      "fa": "جعبه مقوایی بهداشتی و دارویی با خط بریل و لترپرس",
      "en": "Pharma & Cosmetic Folding Carton with Embossed Braille",
      "ar": "علبة كرتونية صيدلانية وصحية مع خط برايل ونقش لتربرس",
      "tr": "Braille Kabartmalı İlaç ve Medikal Karton Kutu",
      "ru": "Фармацевтическая и косметическая упаковка с шрифтом Брайля"
    },
    "desc": {
      "fa": "تولید جعبه‌های مقوایی استاندارد صنایع دارویی و آرایشی با مقوای ایندربرد بهداشتی ۳۰۰ گرم دارای گواهینامه FDA، چاپ ۵ رنگ گیاهی، خط بریل نابینایان و خطوط چسب تمام‌اتوماتیک.",
      "en": "Precision folding cartons engineered for pharmaceutical and healthcare packaging, utilizing FDA-certified 300gsm SBS virgin ivory board, embossed Braille, and high-speed multi-point gluing.",
      "ar": "علب كرتونية دوائية مطابقة للمعايير الصحية العالمية بمقوى إيندربرد ٣٠٠ جم معتمد من FDA، طباعة نباتية، خط برايل للمكفوفين ولصق آلي متقدم.",
      "tr": "FDA onaylı 300 gr Amerikan Bristol / SBS kartondan üretilen, bitkisel mürekkepli, Braille alfabeli ve tam otomatik yapıştırmalı ilaç kutusu.",
      "ru": "Фармацевтические пачки из чистоцеллюлозного картона 300 г/м² с сертификатом FDA, печать красками на растительной основе, тиснение шрифтом Брайля и автоматическая склейка."
    },
    "images": [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=900&q=80",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&q=80",
      "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=900&q=80"
    ],
    "specs": [
      [
        "گرماژ کاغذ / Paper Weight",
        "ایندربرد بهداشتی ۳۰۰ الی ۳۵۰ گرم با گرید غذایی و دارویی"
      ],
      [
        "ابعاد / Dimensions",
        "اختصاصی مطابق با قالب تیغ و نقشه تیغ بسته‌بندی"
      ],
      [
        "نوع چاپ / Print Process",
        "چاپ ۵ رنگ هایدلبرگ + وارنیش پایه آب ضدسایش + لترپرس بریل"
      ],
      [
        "حداقل سفارش / MOQ",
        "۳,۰۰۰ عدد"
      ],
      [
        "نوع صحافی و چسب / Gluing",
        "دایکات مسطح بوبست + چسب اتوماتیک خطی / لاک باتم"
      ],
      [
        "زمان تحویل / Turnaround",
        "۷ الی ۱۰ روز کاری"
      ]
    ]
  },
  {
    "id": 4,
    "sku": "SN-BOX-905",
    "cat": "boxes",
    "subcat": "rigid",
    "price": "۵۰۰ عدد (حداقل تیراژ)",
    "featured": true,
    "name": {
      "fa": "هاردباکس مغناطیسی لوکس محصولات صادراتی و هدایا",
      "en": "Luxury Magnetic Rigid Gift & Export Packaging Box",
      "ar": "هاردبوكس فاخر بإغلاق مغناطيسي للمنتجات التصديرية والهدايا",
      "tr": "Lüks Mıknatıslı Sert Mukavva İhracat ve Hediye Kutusu",
      "ru": "Премиальный магнитный хардбокс для подарков и экспорта"
    },
    "desc": {
      "fa": "جعبه سخت هاردباکس صادراتی تولیدشده از مقوای فشرده ۲ میلی‌متر با روکش کاغذ بافت‌دار فانتزی، طلاکوب داغ، مگنت‌های نئودیمیوم مخفی و فوم داخلی EVA برش‌خورده با لیزر.",
      "en": "Bespoke rigid presentation box constructed from 2.0mm dense greyboard wrapped in luxury textured specialty paper, hot stamped foil debossing, hidden neodymium magnets, and custom velvet EVA insert.",
      "ar": "صندوق صلب فاخر هاردبوكس مصنوع من مقوى مضغوط ٢ مم ومغلف بورق ملمسي فاخر مع طلاء ذهبي ومغناطيس مخفي وفوم EVA مقصوص بالليزر.",
      "tr": "2 mm mukavva üzerine özel dokulu kağıt kaplama, sıcak varak yaldız baskı, gizli neodyum mıknatıs ve CNC kesimli kadife EVA süngerli lüks sert kutu.",
      "ru": "Жесткая подарочная коробка из переплетного картона 2 мм с кашировкой фактурной дизайнерской бумагой, тиснением золотом, скрытыми магнитами и бархатным ложементом EVA."
    },
    "images": [
      "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=900&q=80",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&q=80",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=900&q=80"
    ],
    "specs": [
      [
        "گرماژ کاغذ / Paper Weight",
        "مقوای فشرده کرجی ۲ میلی‌متر + روکش کاغذ بافت‌دار ۱۲۰ گرم"
      ],
      [
        "ابعاد / Dimensions",
        "سفارشی (ابعاد نمونه: ۲۵۰×۱۸۰×۸۰ میلی‌متر)"
      ],
      [
        "نوع چاپ / Print Process",
        "طلاکوب حرارتی برجسته + سلفون مخملی Soft-Touch"
      ],
      [
        "حداقل سفارش / MOQ",
        "۵۰۰ عدد"
      ],
      [
        "قفل و نگهدارنده / Feature",
        "درب مگنتی دوبل با قفل آهنربایی مخفی و فوم نگهدارنده"
      ],
      [
        "زمان تحویل / Turnaround",
        "۱۲ الی ۱۵ روز کاری"
      ]
    ]
  },
  {
    "id": 5,
    "sku": "SN-BOX-402",
    "cat": "boxes",
    "subcat": "cartons",
    "price": "۱,۰۰۰ عدد (حداقل تیراژ)",
    "featured": false,
    "name": {
      "fa": "کارتن لمینتی سه‌لایه E-Flute با سلفون مات ضد رطوبت",
      "en": "Laminated Micro-Flute E-Flute Shipping & Retail Carton",
      "ar": "كرتون مصفح ثلاثي الطبقات E-Flute مقاوم للرطوبة بسلوفان مات",
      "tr": "Lamine E-Flute Neme Dayanıklı Oluklu Koli ve Kutu",
      "ru": "Кашированная влагостойкая микрогофрокоробка E-Flute"
    },
    "desc": {
      "fa": "کارتن مقاوم لمینتی جهت حمل و نمایش قفسه‌ای کالا در بازارهای صادراتی، لمینت گلاسه ۲۵۰ گرم بر روی فلوتینگ متراکم، چاپ افست رزولوشن بالا و دایکات دقیق بوبست.",
      "en": "High-strength laminated corrugated packaging combining 250gsm printed art paper with E-flute backing, delivering structural stackability and sharp offset retail graphic reproduction.",
      "ar": "كرتون متين مصفح يجمع بين ورق كوشيه مطبوع ٢٥٠ جم وطبقة ميكروفلوت E، يتحمل النقل ويمنح مظهراً تسويقياً جذاباً.",
      "tr": "250 gr baskılı kuşe kağıdın E-Dalga oluklu mukavvaya laminasyonu ile üretilen, yüksek taşıma kapasiteli ve nem bariyerli ambalaj kolisi.",
      "ru": "Прочный гофрокороб из микрогофрокартона профиля E с кашировкой мелованной бумагой 250 г/м², матовой влагостойкой ламинацией и точной плоской высечкой Bobst."
    },
    "images": [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&q=80",
      "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=900&q=80"
    ],
    "specs": [
      [
        "گرماژ کاغذ / Paper Weight",
        "گلاسه ۲۵۰ گرم لمینت‌شده روی ورق سه لایه فلوت E"
      ],
      [
        "ابعاد / Dimensions",
        "۳۵۰×۲۵۰×۱۵۰ میلی‌متر (قابل تولید در کلیه ابعاد سفارشی)"
      ],
      [
        "نوع چاپ / Print Process",
        "افست ۴ رنگ با پوشش سلفون مات مقاوم در برابر رطوبت"
      ],
      [
        "حداقل سفارش / MOQ",
        "۱,۰۰۰ عدد"
      ],
      [
        "ساختار قفل / Lock Style",
        "کفی قفل‌شو اتوماتیک (Crash Lock Bottom) و دستگیره پلاستیکی"
      ],
      [
        "زمان تحویل / Turnaround",
        "۷ الی ۱۰ روز کاری"
      ]
    ]
  },
  {
    "id": 6,
    "sku": "SN-BAG-101",
    "cat": "bags",
    "subcat": "kraft",
    "price": "۱,۰۰۰ عدد (حداقل تیراژ)",
    "featured": true,
    "name": {
      "fa": "ساک دستی کاغذی کرافت سوئدی دوستدار محیط‌زیست",
      "en": "Eco-Friendly Swedish Virgin Kraft Paper Shopping Bag",
      "ar": "أكياس تسوق ورقية كرافت سويدية صديقة للبيئة",
      "tr": "Doğa Dostu İthal Kraft Kağıt Alışveriş Çantası",
      "ru": "Экологичные бумажные пакеты из шведского крафта"
    },
    "desc": {
      "fa": "ساک دستی پاکتی بازیافت‌پذیر تولیدشده از کرافت خالص سوئدی ۱۳۰ گرم، دسته پیچ کاغذی محکم، مناسب برندهای پایدار، پوشاک و زنجیره فروشگاه‌های خرده‌فروشی.",
      "en": "FSC-certified sustainable retail bags made from 130gsm Swedish virgin kraft paper with reinforced twisted paper handles, designed for eco-conscious retail and apparel brands.",
      "ar": "أكياس تسوق ورقية مستدامة قابلة للتحلل مصنوعة من كرافت سويدي نقي ١٣٠ جم بمقابض ورقية مجدولة متينة.",
      "tr": "FSC sertifikalı 130 gr İsveç menşeili saf kraft kağıttan üretilen, büküm saplı, geri dönüştürülebilir perakende ve mağaza çantası.",
      "ru": "Экологичные пакеты из первичного шведского крафта 130 г/м² с кручеными ручками, выдерживающие вес до 6 кг. Сертификация FSC."
    },
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=900&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80"
    ],
    "specs": [
      [
        "گرماژ کاغذ / Paper Weight",
        "کاغذ کرافت قهوه‌ای یا سفید وارداتی ۱۳۰ گرم بازیافت‌پذیر"
      ],
      [
        "ابعاد / Dimensions",
        "۳۲۰×۲۴۰×۱۰۰ میلی‌متر (سایز استاندارد بوتیک)"
      ],
      [
        "نوع چاپ / Print Process",
        "فلکسو دوستدار محیط‌زیست با مرکب پایه‌آب تا ۴ رنگ اختصاصی"
      ],
      [
        "حداقل سفارش / MOQ",
        "۱,۰۰۰ عدد"
      ],
      [
        "نوع دسته / Handle",
        "دسته پیچ کاغذی تقویت‌شده با نوار تقویتی زیر لبه برگردان"
      ],
      [
        "تحمل بار / Load Capacity",
        "تحمل بار تضمینی تا ۶ کیلوگرم"
      ]
    ]
  },
  {
    "id": 7,
    "sku": "SN-BAG-304",
    "cat": "bags",
    "subcat": "boutique",
    "price": "۵۰۰ عدد (حداقل تیراژ)",
    "featured": false,
    "name": {
      "fa": "ساک دستی گلاسه لوکس با سلفون مات مخملی و بند روبانی",
      "en": "Luxury Satin Ribbon Art Paper Boutique Shopping Bag",
      "ar": "أكياس تسوق بوتيك كوشيه فاخرة مع سلوفان مخملي وشريط ساتان",
      "tr": "Kuşe Kağıt Kadife Selefonlu ve Saten Kurdeleli Lüks Çanta",
      "ru": "Элитный ламинированный пакет с бархатным покрытием и лентами"
    },
    "desc": {
      "fa": "ساک خرید تبلیغاتی پرستیژ با مقوای گلاسه ۲۰۰ گرم، روکش سلفون مات مخملی Soft-Touch، طلاکوب متالایز، کفی تقویت‌شده ۴۰۰ گرم و بند روبان ساتن ۲.۵ سانتی‌متری.",
      "en": "High-end retail shopping bag crafted from 200gsm coated art paper, treated with soft-touch velvet lamination, metallic foil deboss, 400gsm base reinforcement, and lush satin grosgrain ribbon handles.",
      "ar": "حقيبة تسوق دعائية راقية بمقوى كوشيه ٢٠٠ جم بسلوفان ناعم الملمس، ختم ذهبي بارز ومقابض شرائط ساتان حريرية عريضة.",
      "tr": "200 gr kuşe karton, kadife dokulu Soft-Touch selefon, sıcak altın yaldız baskı, 400 gr dip karton desteği ve 25 mm saten kurdele saplı lüks mağaza çantası.",
      "ru": "Престижный фирменный пакет из мелованного картона 200 г/м² с шелковистой ламинацией Soft-Touch, тиснением фольгой, усиленным дном и ручками из атласной ленты."
    },
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=900&q=80",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80"
    ],
    "specs": [
      [
        "گرماژ کاغذ / Paper Weight",
        "گلاسه ۲۰۰ گرم + مقوای تقویت کفی و عطف دسته ۴۰۰ گرم"
      ],
      [
        "ابعاد / Dimensions",
        "۴۰۰×۳۰۰×۱۲۰ میلی‌متر (مناسب پوشاک لوکس و جعبه کادو)"
      ],
      [
        "نوع چاپ / Print Process",
        "افست تمام‌رنگی هایدلبرگ + سلفون مخملی Soft-Touch + طلاکوب"
      ],
      [
        "حداقل سفارش / MOQ",
        "۵۰۰ عدد"
      ],
      [
        "نوع دسته / Handle",
        "بند روبان ساتن ابریشمی یا گروبن ۲۵ میلی‌متری با پانچ مخفی"
      ],
      [
        "زمان تحویل / Turnaround",
        "۸ الی ۱۰ روز کاری"
      ]
    ]
  },
  {
    "id": 8,
    "sku": "SN-CRD-108",
    "cat": "commercial",
    "subcat": "cards",
    "price": "۵۰۰ عدد (حداقل تیراژ)",
    "featured": true,
    "name": {
      "fa": "کارت ویزیت مغز رنگی دولایه با لمینت مخملی و طلاکوب لبه",
      "en": "Velvet Soft-Touch Color-Core Business Cards with Gilded Edges",
      "ar": "بطاقات عمل فاخرة بطبقتين ولمس مخملي وتذهيب الحواف",
      "tr": "Çift Katmanlı Renkli Gövdeli ve Kenar Varaklı Lüks Kartvizit",
      "ru": "Многослойные визитки с цветным срезом и фольгированием"
    },
    "desc": {
      "fa": "کارت ویزیت خاص مدیریتی با مقوای فشرده دولایه ۶۰۰ گرم، مغزی رنگی مشکی یا سبز، روکش سلفون مات مخملی، طلاکوب دو رو و رنگ‌آمیزی متالیک لبه‌های کارت.",
      "en": "Exclusive executive business cards pressed from duplexed 600gsm stock with embedded color core, soft-touch velvet laminate, dual-sided hot stamping, and gleaming metallic edge foil gilding.",
      "ar": "بطاقات عمل تنفيذية خاصة بمقوى مضغوط ٦٠٠ جم مزدوج بلب ملون، طبقة مخملية، ختم حراري على الوجهين وحواف مذهبة ببريق معدني.",
      "tr": "600 gr ekstra kalın renkli çekirdekli karton, çift taraflı kadife selefon kaplama, çift yön sıcak varak yaldız ve yaldızlı lüks kenar boyama.",
      "ru": "Эксклюзивные визитные карточки плотностью 600 г/м² с цветной сердцевиной, бархатной ламинацией Soft-Touch, двусторонним горячим тиснением и металлизированным фольгированием среза."
    },
    "images": [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80",
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=900&q=80"
    ],
    "specs": [
      [
        "گرماژ کاغذ / Paper Weight",
        "مقوای گلاسه دولایه مغز رنگی ۶۰۰ گرم (Color-Core Duplex)"
      ],
      [
        "ابعاد / Dimensions",
        "۸۵×۵۵ میلی‌متر استاندارد مدیریتی با گوشه‌های تیز یا دورگرد"
      ],
      [
        "نوع چاپ / Print Process",
        "دیجیتال صنعتی ایندیگو یا افست هیبرید با یووی موضعی برجسته"
      ],
      [
        "حداقل سفارش / MOQ",
        "۵۰۰ عدد"
      ],
      [
        "جلوه‌های تکمیلی / Embellishments",
        "طلاکوب یا نقره‌کوب حرارتی دو رو + فویل‌کوبی براق لبه‌های کارت"
      ],
      [
        "زمان تحویل / Turnaround",
        "۳ الی ۵ روز کاری"
      ]
    ]
  },
  {
    "id": 9,
    "sku": "SN-OFF-602",
    "cat": "commercial",
    "subcat": "folders",
    "price": "۱,۰۰۰ ست (حداقل تیراژ)",
    "featured": false,
    "name": {
      "fa": "فولدر مدیریتی جیب‌دار دایکاتی و ست اداری هویت بصری",
      "en": "Corporate Presentation Pocket Folder & Stationery Suite",
      "ar": "فولدر عرض بجيوب دایکات مع هوية مؤسسية وورق مروس",
      "tr": "Cepli Sunum Dosyası ve Kurumsal Kimlik Kırtasiye Seti",
      "ru": "Фирменная папка с карманом и корпоративный деловой сет"
    },
    "desc": {
      "fa": "فولدر نمایشگاهی و اداری گلاسه ۳۵۰ گرم با قفل قالب تیغ یکپارچه، شیار کارت ویزیت و جای سی‌دی/فلش، به همراه سربرگ ۱۰۰ گرم کتان با چاپ مرکب پنتون ساختگی.",
      "en": "Complete brand stationery solution: 350gsm die-cut presentation folder with business card slots, matched with 100gsm premium linen letterheads printed in custom Pantone spot inks.",
      "ar": "طقم متكامل للهوية الإدارية: فولدر عرض ٣٥٠ جم بجيوب مقصوصة آلياً ومكان لبطاقة العمل، مع ورق مروس ١٠٠ جم مطبوع بألوان بانتون دقيقة.",
      "tr": "350 gr kuşe kartondan cepli sunum dosyası, kartvizit yuvası ve özel Pantone spot renklerle basılmış 100 gr keten dokulu antetli kağıt içeren kurumsal kimlik seti.",
      "ru": "Корпоративный комплект деловой документации: папка-фолдер 350 г/м² с вырубным карманом и прорезями для визитки плюс бланки на бумаге с тиснением «лен» 100 г/м² с печатью смесевыми пантонами."
    },
    "images": [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=900&q=80",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80"
    ],
    "specs": [
      [
        "گرماژ کاغذ / Paper Weight",
        "فولدر گلاسه مات ۳۵۰ گرم + سربرگ کتان وارداتی ۱۰۰ گرم"
      ],
      [
        "ابعاد / Dimensions",
        "فولدر ۲۳۰×۳۱۰ میلی‌متر (گنجایش کامل اسناد استاندارد A4)"
      ],
      [
        "نوع چاپ / Print Process",
        "افست هایدلبرگ با مرکب‌های ساختگی پنتون و یووی موضعی"
      ],
      [
        "حداقل سفارش / MOQ",
        "۱,۰۰۰ ست"
      ],
      [
        "ویژگی ساختار / Pocket",
        "جیب یکپارچه قالبی با چفت خودکار و شکاف قرارگیری کارت ویزیت"
      ],
      [
        "زمان تحویل / Turnaround",
        "۶ الی ۸ روز کاری"
      ]
    ]
  },
  {
    "id": 10,
    "sku": "SN-PRM-701",
    "cat": "promo",
    "subcat": "agenda",
    "price": "۳۰۰ جلد (حداقل تیراژ)",
    "featured": false,
    "name": {
      "fa": "سررسید و سالنامه چرمی اختصاصی با کاغذ کرم چاموآ",
      "en": "Custom Executive Leather Agenda with Chamois Cream Paper",
      "ar": "أجندة ومفكرة جلدية سنوية فاخرة مع ورق شامي عاجي",
      "tr": "Özel İthal Termo Deri Ajanda ve Şamoa Kağıtlı Defter",
      "ru": "Индивидуальный кожаный ежедневник на кремовой бумаге"
    },
    "desc": {
      "fa": "سررسید اختصاصی شرکت‌ها با جلد چرم ترمو اروپایی، داغ‌کوب دقیق لوگو، روبان بافت اختصاصی، کاغذ کرم چاموآ ۷۰ گرم اندونزی و ۸ صفحه لت تبلیغاتی تمام‌رنگی معرفی کارخانه.",
      "en": "Executive leather-bound corporate planner featuring European thermo-PU cover with heat debossed logo, 70gsm glare-free Indonesian chamois paper, woven ribbon, and custom 8-page color insert section.",
      "ar": "أجندة إدارية سنوية بجلد حراري أوروبي بنقش دقيق للشعار، ورق عاجي مريح للعين ٧٠ جم، شريط قماشي فاخر و٨ صفحات تعريفية ملونة بالشركة.",
      "tr": "Isı ile renk değiştiren Avrupa termo deri kapak, lazer ve sıcak gofre logo baskı, 70 gr gözü yormayan şamoa kağıt ve 8 sayfa kuşe tanıtım fasiküllü kurumsal ajanda.",
      "ru": "Корпоративный ежедневник в переплете из европейской термополиуретановой кожи с глубоким блинтовым тиснением, 70 г/м² тонированная бумага цвета слоновой кости, ляссе и 8-страничная цветная рекламная вклейка."
    },
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=900&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80",
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=900&q=80"
    ],
    "specs": [
      [
        "گرماژ کاغذ / Paper Weight",
        "کاغذ کرم چاموآ ۷۰ گرم اندونزی بدون بازتاب نور + جلد چرم ترمو"
      ],
      [
        "ابعاد / Dimensions",
        "قطع وزیری (۱۷۰×۲۴۰ میلی‌متر) یا اروپایی رقعی (۱۴۰×۲۱۰ میلی‌متر)"
      ],
      [
        "نوع چاپ / Print Process",
        "ترام دورنگ داخلی + لت‌های گلاسه ۴ رنگ تبلیغاتی اختصاصی"
      ],
      [
        "حداقل سفارش / MOQ",
        "۳۰۰ جلد"
      ],
      [
        "تکنیک جلد / Cover Tech",
        "داغ‌کوب چرم با تغییر رنگ حرارتی و پلاک فلزی لیزرخورده"
      ],
      [
        "زمان تحویل / Turnaround",
        "۱۵ روز کاری"
      ]
    ]
  }
];

/* ---------- Technical Articles Database (4 Comprehensive Guides) ---------- */
const ARTICLES = [
  {
    "id": 1,
    "img": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=900&q=80",
    "author": "مهندس حمید رضایی (مدیر ارشد تکنولوژی چاپ و بسته‌بندی)",
    "date": "2026-11-05",
    "readTime": "6 min read / ۶ دقیقه مطالعه",
    "tag": "بسته‌بندی و مقوا",
    "title": {
      "fa": "راهنمای جامع مهندسی: انتخاب بهینه گرماژ کاغذ و مقوا در بسته‌بندی‌های صادراتی",
      "en": "Engineering Guide: Selecting Paper & Board Grammage for Export Packaging",
      "ar": "دليل هندسي شامل: الاختيار الأمثل لوزن الورق والمقوى في التغليف التصديري",
      "tr": "Mühendislik Rehberi: İhracat Ambalajında Kağıt ve Karton Gramajı Seçimi",
      "ru": "Инженерное руководство: подбор плотности бумаги и картона для экспортной упаковки"
    },
    "excerpt": {
      "fa": "بررسی مقایسه‌ای مقواهای ایندربرد (SBS)، پشت‌طوسی و کرافت سوئدی در آزمون‌های فشردگی لبه (ECT)، مقاومت ترکیدگی و استانداردهای بهداشتی FDA.",
      "en": "A technical evaluation of SBS Ivory Board, Duplex, and Swedish Kraft substrates across Edge Crush Tests (ECT), burst resistance, and FDA compliance for global supply chains.",
      "ar": "تقييم فني شامل لمقوى إيندربرد SBS والكرتون الرمادي وكرافت السويدي في اختبارات ضغط الحواف والمقاومة ومعايير FDA الغذائية.",
      "tr": "SBS Amerikan Bristol, kırma mukavva ve İsveç kraft kartonlarının Kenar Ezilme Testi (ECT), patlama direnci ve FDA gıda uyumluluğu açısından karşılaştırması.",
      "ru": "Сравнительный анализ картона SBS, макулатурного дуплекса и шведского крафта в тестах на торцевое сжатие (ECT), сопротивление продавливанию и соответствие нормам FDA."
    },
    "body": {
      "fa": "<p>انتخاب گرماژ و ساختار فیبری مقوا، تعیین‌کننده‌ترین متغیر در پایداری جعبه حین حمل دریایی، هوایی و چیدمان پالت‌های صادراتی است. انتخاب مقوای نامناسب نه تنها موجب دفرمگی محصول و آسیب فیزیکی در طول زنجیره تامین می‌گردد، بلکه هزینه‌های بسته‌بندی را بی‌دلیل افزایش می‌دهد.</p>\n      <h3>۱. تفاوت‌های مقوای ایندربرد بهداشتی (SBS) و پشت‌طوسی (Duplex)</h3>\n      <p>مقوای ایندربرد (Solid Bleached Sulfate) تماماً از خمیر چوب خالص و بهداشتی تهیه شده و لایه‌های بیرونی آن با پوشش گچی مرغوب پوشانده شده است. این مقوا به دلیل استحکام بالا، سفیدی ۹۰٪ و عدم انتقال بو، انتخاب شماره یک صنایع دارویی، بهداشتی و غذایی است. در مقابل، مقوای پشت‌طوسی حاصل الیاف بازیافتی بوده و به دلایل بهداشتی صرفاً در اقلام غیرغذایی و صنعتی کاربرد دارد.</p>\n      <h3>۲. آزمون مقاومت فشردگی لبه (ECT) و مقاومت ترکیدگی (Mullen Burst)</h3>\n      <p>در مجتمع چاپ سبزنگار، کلیه مقواهای ورودی تحت آزمون‌های استاندارد دینامیکی قرار می‌گیرند تا تضمین شود کارتن‌های لمینتی در انبارش تا ۶ طبقه پالت بدون افت مقاومت باقی می‌مانند.</p>",
      "en": "<p>Selecting the correct paperboard grammage and fiber matrix is the single most critical factor determining carton integrity during transcontinental maritime transit, air freight, and warehouse pallet stacking. An inappropriate substrate selection causes structural crushing and product damage.</p>\n      <h3>1. Solid Bleached Sulfate (SBS) vs. Duplex Board</h3>\n      <p>SBS virgin ivory board is manufactured entirely from bleached virgin chemical pulp with premium mineral coating. Providing 90%+ brightness, zero odor migration, and high tear resistance, it is mandated for FDA-grade pharmaceutical and premium food packaging. Duplex board, composed largely of recycled fibers, is strictly limited to non-food industrial goods.</p>\n      <h3>2. Edge Crush Resistance (ECT) & Burst Strength</h3>\n      <p>At SabzNegar laboratory, incoming board lots undergo rigorous Mullen Burst and Edge Crush testing to guarantee vertical stacking integrity up to 6 pallet tiers under humid transit conditions.</p>",
      "ar": "<p>يعد اختيار وزن ونوع الورق المقوى الركيزة الأساسية لسلامة المنتجات خلال الشحن والتصدير البحري والجوي. يضمن الاختيار الصحيح حماية البضائع وتقليل تكلفة الشحن الإجمالية.</p>\n      <h3>١. مقارنة بين مقوى إيندربرد الصحي (SBS) والمقوى المعاد تدويره</h3>\n      <p>يصنع مقوى SBS من ألياف السليلوز النقية بنسبة ١٠٠٪ مع طلاء أبيض ناصع، وهو خالي تماماً من الروائح ومعتمد للأدوية والأغذية الفاخرة.</p>\n      <h3>٢. اختبارات التحمل والضغط الرأسي</h3>\n      <p>تخضع كافة شحنات الورق في سبزنگار لاختبارات ضغط الحواف لضمان تحمل الصناديق لتكديس البالتات حتى ٦ طبقات دون أي انبعاج.</p>",
      "tr": "<p>Doğru karton gramajı ve lif yapısının seçimi, ürünlerin konteyner ve palet taşımacılığında hasar görmemesi için en kritik aşamadır.</p>\n      <h3>1. SBS Amerikan Bristol ile Kırma Mukavva Farkı</h3>\n      <p>SBS saf selüloz karton, yüksek beyazlığı ve koku yapmayan yapısıyla ilaç ve gıda ambalajında zorunludur.</p>\n      <h3>2. Kenar Ezilme Direnci (ECT)</h3>\n      <p>SabzNegar laboratuvarında tüm kartonlar dikey istifleme testinden geçirilerek 6 kat palet yüküne dayanıklılığı belgelenir.</p>",
      "ru": "<p>Правильный подбор плотности и структуры картона — основа сохранности товаров при мультимодальных экспортных перевозках.</p>\n      <h3>1. Чистоцеллюлозный картон SBS против дуплекса</h3>\n      <p>Картон SBS из первичной беленой целлюлозы сертифицирован FDA, не имеет запаха и обеспечивает безупречную печать для фармы и косметики.</p>\n      <h3>2. Тесты на торцевое сжатие (ECT)</h3>\n      <p>В лаборатории SabzNegar картон тестируется на многоярусное штабелирование до 6 ярусов паллет.</p>"
    }
  },
  {
    "id": 2,
    "img": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80",
    "author": "مهندس نیما پاکزاد (سرپرست خطوط چاپ افست هایدلبرگ)",
    "date": "2026-10-22",
    "readTime": "5 min read / ۵ دقیقه مطالعه",
    "tag": "تکنولوژی چاپ",
    "title": {
      "fa": "تفاوت چاپ افست و چاپ دیجیتال صنعتی در تیراژهای تجاری و تطابق رنگ",
      "en": "Offset vs Industrial Digital Printing: Run Economics & Color Gamut",
      "ar": "مقارنة بين طباعة الأوفست والطباعة الرقمية الصناعية في الكميات والتكلفة",
      "tr": "Ofset ile Endüstriyel Dijital Baskı Arasındaki Tiraj ve Maliyet Farkları",
      "ru": "Офсетная и промышленная цифровая печать: тиражи, экономика и цветовой охват"
    },
    "excerpt": {
      "fa": "تحلیل نقطه سربه‌سر اقتصادی، هزینه لیتوگرافی زینک CTP، سیستم‌های اندازه‌گیری ترام و دقت چاپ مرکب‌های اختصاصی پنتون در هایدلبرگ Speedmaster.",
      "en": "Break-even volume analysis, CTP plate costs, dot gain curve compensation, and Pantone spot fidelity across modern Heidelberg Speedmaster offset presses vs digital systems.",
      "ar": "تحليل نقطة التعادل للتكلفة، تكاليف زنكات CTP ودقة مطابقة ألوان بانتون في ماكينات هايدلبرغ مقارنة بالطباعة الرقمية.",
      "tr": "Baskıda başabaş noktası analizi, CTP kalıp maliyetleri ve Heidelberg Speedmaster makinelerinde Pantone spot renk doğruluğu.",
      "ru": "Анализ точки безубыточности тиража, стоимость CTP-форм, компенсация растискивания точки и точность смесевых пантонов."
    },
    "body": {
      "fa": "<p>در تصمیم‌گیری‌های بازاریابی و تامین اقلام چاپی، سوال بنیادین مدیران همواره انتخاب بین تکنولوژی دیجیتال و افست است. اگرچه چاپ دیجیتال برای نمونه‌گیری یا تیراژهای بسیار اندک گزینه‌ای چابک است، اما در تیراژهای بالای ۵۰۰ عدد، چاپ افست از نظر اقتصادی و کیفی برتری بی‌چون‌وچرا دارد.</p>\n      <h3>۱. نقطه سربه‌سر هزینه و تیراژ اقتصادی</h3>\n      <p>در چاپ افست، عمده هزینه در مرحله لیتوگرافی و ساخت زینک CTP و تنظیمات اولیه ماشین (Make-ready) متمرکز است. پس از آماده‌سازی، با سرعت ۱۸,۰۰۰ شیت در ساعت هایدلبرگ، هزینه هر نسخه چاپی با افزایش تیراژ به صورت نمایی افت می‌کند.</p>\n      <h3>۲. دقت رنگ‌های ساختگی پنتون (Spot Color)</h3>\n      <p>ماشین‌های افست ۵ رنگ سبزنگار امکان تزریق مستقیم مرکب‌های پنتون اختصاصی را دارند، امری که تطابق ۱۰۰٪ هویت بصری برندها را بدون تلورانس ترام دیجیتال میسر می‌سازد.</p>",
      "en": "<p>Marketing and procurement directors regularly evaluate the threshold between industrial digital and multi-color offset processes. While digital printing excels in ultra-short print-on-demand runs under 300 units, industrial offset dominates high-volume production in cost-efficiency and optical density.</p>\n      <h3>1. Break-Even Run Length</h3>\n      <p>Offset fixed costs reside primarily in CTP prepress imaging and press make-ready. Once inking reaches equilibrium at 18,000 sheets per hour, marginal cost per unit drops rapidly.</p>\n      <h3>2. True Pantone Spot Inks</h3>\n      <p>SabzNegar's 5-color Heidelberg presses incorporate dedicated fifth units for authentic premixed Pantone inks, achieving ΔE &lt; 1.0 brand fidelity that four-color process digital toners cannot match.</p>",
      "ar": "<p>يعد تحديد التكنولوجيا المناسبة بين الأوفست والرقمي ركيزة إدارة الميزانيات التسويقية للشركات.</p>\n      <h3>١. نقطة التعادل الاقتصادية للتيراج</h3>\n      <p>تنخفض تكلفة النسخة الواحدة في الأوفست بشكل هائل مع زيادة الكمية بفضل سرعة ماكينات هايدلبرغ التي تصل إلى ١٨,٠٠٠ فرخ بالساعة.</p>\n      <h3>٢. مطابقة ألوان بانتون الخاصة</h3>\n      <p>تتيح وحدات الألوان الخامسة في سبزنگار طباعة ألوان بانتون الأصلية بدون أي انحراف عن الهوية المعتمدة.</p>",
      "tr": "<p>Matbaa üretiminde dijital ile ofset arasındaki doğru tercihi belirlemek maliyet verimliliği sağlar.</p>\n      <h3>1. Maliyet ve Tiraj Eğrisi</h3>\n      <p>500 adet üzerindeki tirajlarda ofset baskı, birim maliyeti minimuma indirerek en yüksek kaliteyi sunar.</p>\n      <h3>2. Orijinal Pantone Spot Renkler</h3>\n      <p>Heidelberg 5 renk ofset makinelerimizde kurumsal Pantone renkleriniz birebir orijinal mürekkeple basılır.</p>",
      "ru": "<p>Выбор между офсетом и цифрой определяет рентабельность упаковки и полиграфии.</p>\n      <h3>1. Точка безубыточности тиража</h3>\n      <p>При тиражах от 500 экземпляров офсетная печать со скоростью 18 000 листов/час снижает себестоимость каждого экземпляра.</p>\n      <h3>2. Чистые цвета Pantone</h3>\n      <p>Пятая секция Heidelberg позволяет наносить смесевые краски Pantone с точностью ΔE &lt; 1,0.</p>"
    }
  },
  {
    "id": 3,
    "img": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80",
    "author": "مهندس آرش شایگان (مدیر واحد خدمات تکمیلی و جلوه‌های ویژه)",
    "date": "2026-10-10",
    "readTime": "7 min read / ۷ دقیقه مطالعه",
    "tag": "خدمات تکمیلی و پوشش",
    "title": {
      "fa": "تکنیک‌های جلوه‌های ویژه چاپی: یووی موضعی، طلاکوب حرارتی و سلفون مخملی Soft-Touch",
      "en": "Luxury Print Finishing: Spot UV, Hot Foil Stamping & Soft-Touch Velvet",
      "ar": "تقنيات المؤثرات الخاصة: ورنيش UV الموضعي، الختم الحراري بالذهب والسلوفان المخملي",
      "tr": "Lüks Baskı Sonrası Efektler: Lokal UV Lak, Sıcak Varak ve Soft-Touch Kadife Selefon",
      "ru": "Премиальная отделка: выборочный УФ-лак, горячее тиснение фольгой и бархат Soft-Touch"
    },
    "excerpt": {
      "fa": "راهنمای عملی ایجاد حس لامسه لوکس در بسته‌بندی، تکنیک‌های ساخت کلیشه برنجی CNC، لترپرس حرارتی و جلوگیری از ترک‌خوردگی خط تا در سلفون‌کشی.",
      "en": "Practical implementation of multi-sensory luxury packaging: CNC brass foil dies, micro-embossing, soft-touch polymer lamination, and creasing fissure prevention.",
      "ar": "دليل تطبيقي لإضفاء لمسة فاخرة على العلب والكتالوجات عبر القوالب النحاسية والختم الحراري وحماية خطوط الطي من التلف.",
      "tr": "Ambalajda dokunsal lüks hissi yaratma rehberi: pirinç klişe ile sıcak varak yaldız, 3D kabartma ve kırım çatlamalarını önleme yöntemleri.",
      "ru": "Практическое руководство по созданию тактильной премиальной упаковки: латунные штампы, микроконгрев, ламинация Soft-Touch и защита биговки."
    },
    "body": {
      "fa": "<p>در بازار رقابتی امروز، اولین تعامل مشتری با محصول از طریق حس لامسه و درخشش بصری بسته‌بندی رقم می‌خورد. استفاده هدفمند از تکنیک‌های پس از چاپ، ارزش ادراک‌شده کالا را تا چندین برابر ارتقا می‌دهد.</p>\n      <h3>۱. سلفون حرارتی مخملی (Soft-Touch)</h3>\n      <p>روکش نانوپلیمری Soft-Touch بر خلاف سلفون‌های مات معمولی، بافتی شبیه به پوست هلو یا مخمل جیر ایجاد می‌کند که در برابر اثر انگشت و خط و خش بسیار مقاوم است.</p>\n      <h3>۲. طلاکوب حرارتی میکروامباس و یووی موضعی برجسته</h3>\n      <p>ترکیب کلیشه‌های برنجی با دقت سه‌بعدی و فویل‌های متالیک حرارتی کورز آلمان (Kurz) همراه با لایه‌های یووی برجسته سیلک‌اسکرین، درخششی عمیق بر روی سطوح تیره و روشن ایجاد می‌کند.</p>",
      "en": "<p>In modern luxury retail, tactile feedback is the defining factor in brand perception. Implementing high-end post-press embellishments elevates brand equity on the shelf.</p>\n      <h3>1. Soft-Touch Velvet Polymer Film</h3>\n      <p>Engineered with micro-textured matte coatings, soft-touch films provide a tactile peach-skin velvet feel while dramatically resisting fingerprint oil transfer and scuffing.</p>\n      <h3>2. Precision Brass Die Hot Stamping</h3>\n      <p>Utilizing German Kurz metallic foils coupled with micro-embossed CNC brass dies creates sharp, multi-level reflections and crisp micro-details on cartons and catalogs.</p>",
      "ar": "<p>يعزز التشطيب الفاخر من القيمة السوقية للعلامات التجارية على رفوف المتاجر.</p>\n      <h3>١. السلوفان المخملي Soft-Touch</h3>\n      <p>يمنح ملمساً حريرياً ناعماً ويحمي العلبة من الخدوش وبصمات الأصابع.</p>\n      <h3>٢. الختم الحراري بالذهب والقوالب النحاسية</h3>\n      <p>استخدام رقائق كورتز الألمانية مع القوالب المنحوتة بالكمبيوتر يعطي لمعاناً فائق النقاء وتفاصيل متناهية الدقة.</p>",
      "tr": "<p>Baskı sonrası özel efektler ambalajın raftaki albenisini ve marka değerini katlar.</p>\n      <h3>1. Soft-Touch Kadife Selefon</h3>\n      <p>Özel polimer yapısıyla kadifemsi ipeksi bir dokunuş hissi ve çizilme direnci sağlar.</p>\n      <h3>2. Sıcak Varak Yaldız ve Lokal Lak</h3>\n      <p>Hassas pirinç klişeler ve kaliteli varak filmleriyle logo ve detaylar mükemmel şekilde parlar.</p>",
      "ru": "<p>Тактильные эффекты в премиальной упаковке создают доверие и подчеркивают статус продукта.</p>\n      <h3>1. Бархатная пленка Soft-Touch</h3>\n      <p>Создает ощущение прикосновения к бархату, защищая поверхность от отпечатков пальцев и царапин.</p>\n      <h3>2. Горячее тиснение фольгой Kurz</h3>\n      <p>Немецкая фольга Kurz в сочетании с латунными штампами создает ювелирный блеск и тончайшие контуры.</p>"
    }
  },
  {
    "id": 4,
    "img": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80",
    "author": "مهندس سهراب مهدوی (سرممیز کنترل کیفیت و استانداردهای ایزو)",
    "date": "2026-09-28",
    "readTime": "6 min read / ۶ دقیقه مطالعه",
    "tag": "استاندارد و مدیریت رنگ",
    "title": {
      "fa": "استانداردهای بین‌المللی کالیبراسیون رنگ و مدیریت کیفیت ISO 12647-2 در چاپ افست",
      "en": "ISO 12647-2 International Color Calibration & Quality Control Standards",
      "ar": "المعايير الدولية لمعايرة الألوان وضبط الجودة ISO 12647-2 في طباعة الأوفست",
      "tr": "Ofset Baskıda ISO 12647-2 Uluslararası Renk Kalibrasyonu ve Kalite Yönetimi",
      "ru": "Международный стандарт калибровки цвета и контроля качества ISO 12647-2 в офсете"
    },
    "excerpt": {
      "fa": "نحوه اندازه‌گیری شاخص انحراف رنگی Delta E، پروفایل‌های رنگی Fogra 39/51، جبران چاقی ترام (TVI) و تضمین ۱۰۰٪ تطابق رنگ در پارت‌های بازچاپ.",
      "en": "Measuring Delta E chromatic variance, Fogra 39/51 ICC characterization, Tone Value Increase (TVI) compensation, and guaranteeing 100% color consistency across reprints.",
      "ar": "كيفية قياس انحراف الألوان Delta E، ملفات Fogra القياسية وتثبيت درجات الألوان بين طلبيات إعادة الطباعة.",
      "tr": "Delta E renk sapması ölçümü, Fogra 39/51 profilleri, nokta kazancı telafisi ve tekrar baskılarda %100 renk tutarlılığı garantisi.",
      "ru": "Измерение цветового различия Delta E, цветовые профили Fogra 39/51, компенсация TVI и гарантия 100% повторяемости тиража."
    },
    "body": {
      "fa": "<p>بزرگترین دغدغه صاحبان برندهای معتبر در سفارشات دوره‌ای، مغایرت رنگی پارت جدید با جعبه‌های قبلی در قفسه فروشگاه است. مجتمع چاپ سبزنگار با پیاده‌سازی کامل استاندارد بین‌المللی ISO 12647-2 این ریسک را به صفر رسانده است.</p>\n      <h3>۱. شاخص خطای رنگی Delta E کمتر از ۱.۵</h3>\n      <p>با استقرار اسپکتروفتومترهای اسکنینگ هایدلبرگ بر روی ماشین‌های چاپ، دانسیته هر ۴ رنگ اصلی و مرکب‌های ساختگی به صورت لحظه‌ای سنجیده شده و انحراف رنگی همواره زیر آستانه تشخیص چشم انسان (Delta E &lt; 1.5) حفظ می‌شود.</p>\n      <h3>۲. آرشیو دیجیتال زینک‌ها و گارانتی بازچاپ</h3>\n      <p>منحنی چاقی ترام (TVI) برای هر نوع کاغذ و مقوا کالیبره و در RIP لیتوگرافی ذخیره می‌شود تا در سفارش‌های سال‌های آتی، رنگ حاصل دقیقاً منطبق بر نسخه نخست باشد.</p>",
      "en": "<p>The paramount concern for multinational brand managers in recurring packaging orders is batch-to-batch color drift. SabzNegar eliminates this variance through strict adherence to ISO 12647-2 standardization.</p>\n      <h3>1. Delta E &lt; 1.5 Color Tolerance</h3>\n      <p>Integrated Heidelberg inline spectrophotometers continuously verify solid ink densities and dot gains across every press sheet, maintaining ΔE well beneath the threshold of human visual perception.</p>\n      <h3>2. Digital CTP Archiving & Reprint Guarantee</h3>\n      <p>Custom Tone Value Increase (TVI) curves for each qualified substrate are locked into our prepress workflow, ensuring that reprint batches years apart remain visually indistinguishable.</p>",
      "ar": "<p>أكبر تحدٍ يواجه مديري العلامات التجارية هو اختلاف ألوان العلبة بين طلبيات الشهور المختلفة.</p>\n      <h3>١. هامش خطأ Delta E أقل من ١.٥</h3>\n      <p>تقوم أجهزة القياس الطيفي بفحص كثافة الحبر باستمرار لضمان تطابق لوني لا تدركه العين المجردة.</p>\n      <h3>٢. أرشفة ملفات الزنك الرقمية</h3>\n      <p>نحفظ معايير اللون الخاصة بكل عميل لإعادة إنتاجها بذات الدقة لسنوات قادمة.</p>",
      "tr": "<p>Büyük markaların en büyük endişesi, yeni baskı partisinin eski partiden farklı renkte çıkmasıdır.</p>\n      <h3>1. Delta E &lt; 1.5 Renk Toleransı</h3>\n      <p>Heidelberg spektrofotometreleri tabaka tabaka kontrol yaparak insan gözünün algılayamayacağı hassasiyet sağlar.</p>\n      <h3>2. Dijital Kalıp Arşivi ve Tekrar Baskı Güvencesi</h3>\n      <p>Her kağıt türüne özel nokta kazancı eğrisi kaydedilerek yıllar sonraki baskıda bile tam uyum sağlanır.</p>",
      "ru": "<p>Главная проблема бренд-менеджеров — разнотон между партиями упаковки на одной витрине.</p>\n      <h3>1. Допуск Delta E &lt; 1,5</h3>\n      <p>Спектрофотометры Heidelberg непрерывно сканируют оттиски, удерживая отклонение цвета в пределах, незаметных глазу.</p>\n      <h3>2. Архивация CTP и повторяемость</h3>\n      <p>Профили компенсации растискивания сохраняются в RIP, гарантируя точное совпадение повторного тиража с первым.</p>"
    }
  }
];

/* ---------- Helper Lookup Accessors ---------- */
const catName = id => {
  const c = CATEGORIES.find(x => x.id === id);
  return (c && c.name && (c.name[lang] || c.name.en)) || id;
};

const subcatName = (catId, subId) => {
  const c = CATEGORIES.find(x => x.id === catId);
  if (!c || !c.subs) return subId;
  const s = c.subs.find(x => x.id === subId);
  return (s && s.name && (s.name[lang] || s.name.en)) || subId;
};

/* ---------- State Variables ---------- */
let currentCategory = 'all';
let currentSubcategory = 'all';
let searchQuery = '';
let currentProduct = PRODUCTS[0];
let currentView = 'home';
let isVideoPlaying = false;
let videoProgress = 0;
let videoAnimId = null;

/* ---------- Render Categories Grid ---------- */
function renderCats() {
  const grid = $('categoryGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map((c, idx) => {
    const subsHtml = c.subs.map(s => `<li>${s.name[lang] || s.name.en}</li>`).join('');
    return `
      <div class="category-card" data-cat-id="${c.id}">
        <span class="cat-num">0${idx + 1}</span>
        <div class="cat-icon-wrap">${c.icon}</div>
        <h3 class="cat-card-title">${c.name[lang] || c.name.en}</h3>
        <ul class="cat-subs-list">
          ${subsHtml}
        </ul>
        <div class="cat-action-link">
          <span>${t('view_category')}</span>
          <span>→</span>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const catId = card.getAttribute('data-cat-id');
      setFilter(catId);
      const target = $('products');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ---------- Category Filter Tabs & Subcategory Pills ---------- */
function renderFilters() {
  const tabs = $('categoryFilterTabs');
  if (!tabs) return;

  const allActive = currentCategory === 'all' ? 'active' : '';
  let html = `<button class="filter-tab ${allActive}" data-f="all">${t('filter_all')}</button>`;

  CATEGORIES.forEach(c => {
    const active = currentCategory === c.id ? 'active' : '';
    html += `<button class="filter-tab ${active}" data-f="${c.id}">${c.icon} ${c.name[lang] || c.name.en}</button>`;
  });

  tabs.innerHTML = html;
  tabs.querySelectorAll('.filter-tab').forEach(b => {
    b.addEventListener('click', () => setFilter(b.getAttribute('data-f')));
  });

  renderSubFilters();
}

function renderSubFilters() {
  const container = $('subFilterContainer');
  const pills = $('subFilterPills');
  if (!container || !pills) return;

  if (currentCategory === 'all') {
    container.style.display = 'none';
    currentSubcategory = 'all';
    return;
  }

  const catObj = CATEGORIES.find(c => c.id === currentCategory);
  if (!catObj || !catObj.subs || catObj.subs.length === 0) {
    container.style.display = 'none';
    currentSubcategory = 'all';
    return;
  }

  container.style.display = 'flex';
  const allSubActive = currentSubcategory === 'all' ? 'active' : '';
  let html = `<button class="subfilter-pill ${allSubActive}" data-sub="all">${t('filter_subcat_all')}</button>`;

  catObj.subs.forEach(s => {
    const active = currentSubcategory === s.id ? 'active' : '';
    html += `<button class="subfilter-pill ${active}" data-sub="${s.id}">${s.name[lang] || s.name.en}</button>`;
  });

  pills.innerHTML = html;
  pills.querySelectorAll('.subfilter-pill').forEach(b => {
    b.addEventListener('click', () => {
      currentSubcategory = b.getAttribute('data-sub');
      renderSubFilters();
      renderProducts();
    });
  });
}

function setFilter(f) {
  currentCategory = f;
  currentSubcategory = 'all';
  renderFilters();
  renderProducts();
}

/* ---------- Card HTML Renderer ---------- */
function cardHTML(p) {
  const name = p.name[lang] || p.name.en;
  const desc = p.desc[lang] || p.desc.en;
  const firstSpec = p.specs[0] ? p.specs[0][1] : '';
  const secondSpec = p.specs[2] ? p.specs[2][1] : '';

  return `
    <div class="product-card" data-id="${p.id}">
      <div class="card-img-wrap">
        <img src="${p.images[0]}" alt="${name}" loading="lazy">
        <span class="card-cat-tag">${catName(p.cat)}</span>
      </div>
      <div class="card-body">
        <div class="card-sku-row">
          <span class="card-sku">${p.sku}</span>
          <span class="card-moq-chip">${p.price}</span>
        </div>
        <h3 class="card-title">${name}</h3>
        <p class="card-desc">${desc}</p>
        <div class="card-specs-summary">
          <div><strong>${t('spec_paper_weight')}:</strong> ${firstSpec}</div>
          <div><strong>${t('spec_print_type')}:</strong> ${secondSpec}</div>
        </div>
        <div class="card-foot">
          <button class="btn btn-sm btn-outline btn-card-details" data-id="${p.id}">${t('view_gallery')}</button>
          <button class="btn btn-sm btn-primary btn-card-order" data-id="${p.id}">${t('order_inquiry')}</button>
        </div>
      </div>
    </div>
  `;
}

/* ---------- Render Products Grid ---------- */
function renderProducts() {
  const grid = $('productGrid');
  const notice = $('noProductsNotice');
  const count = $('resultsCount');
  const resetBtn = $('resetFilterBtn');
  if (!grid) return;

  const q = searchQuery.toLowerCase().trim();
  const filtered = PRODUCTS.filter(p => {
    if (currentCategory !== 'all' && p.cat !== currentCategory) return false;
    if (currentSubcategory !== 'all' && p.subcat !== currentSubcategory) return false;
    if (!q) return true;

    const n = (p.name[lang] || p.name.en).toLowerCase();
    const d = (p.desc[lang] || p.desc.en).toLowerCase();
    const s = p.sku.toLowerCase();
    const specsMatch = p.specs.some(sp => sp[0].toLowerCase().includes(q) || sp[1].toLowerCase().includes(q));
    return n.includes(q) || d.includes(q) || s.includes(q) || specsMatch;
  });

  if (count) {
    count.textContent = t('results_count').replace('{n}', filtered.length);
  }

  if (resetBtn) {
    resetBtn.hidden = (currentCategory === 'all' && currentSubcategory === 'all' && !searchQuery);
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (notice) notice.hidden = false;
  } else {
    if (notice) notice.hidden = true;
    grid.innerHTML = filtered.map(cardHTML).join('');
    grid.querySelectorAll('.product-card img').forEach((img, i) => {
      attachImgFallback(img, filtered[i].cat, filtered[i].name[lang] || filtered[i].name.en);
    });
    bindCards(grid);
  }
}

function renderFeatured() {
  const grid = $('featuredProducts');
  if (!grid) return;
  const feats = PRODUCTS.filter(p => p.featured);
  grid.innerHTML = feats.map(cardHTML).join('');
  grid.querySelectorAll('.product-card img').forEach((img, i) => {
    attachImgFallback(img, feats[i].cat, feats[i].name[lang] || feats[i].name.en);
  });
  bindCards(grid);
}

function bindCards(scope) {
  scope.querySelectorAll('.btn-card-details, .card-title, .card-img-wrap').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const card = el.closest('.product-card');
      const id = parseInt(card.getAttribute('data-id'), 10);
      openProduct(id);
    });
  });

  scope.querySelectorAll('.btn-card-order').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const card = btn.closest('.product-card');
      const id = parseInt(card.getAttribute('data-id'), 10);
      const p = PRODUCTS.find(x => x.id === id);
      showView('contact');
      if ($('cMsg') && p) {
        $('cMsg').value = `استعلام قیمت تیراژ برای ${p.name[lang] || p.name.en} (${p.sku}):\n`;
        $('cMsg').focus();
      }
    });
  });
}

/* ---------- Articles Grid & Modal ---------- */
function renderArticles() {
  const grid = $('articlesGrid');
  if (!grid) return;

  grid.innerHTML = ARTICLES.map(a => `
    <div class="article-card" data-id="${a.id}">
      <div class="article-img-wrap">
        <img src="${a.img}" alt="${a.title[lang] || a.title.en}" loading="lazy">
      </div>
      <div class="article-body">
        <div class="article-meta">
          <span class="article-tag">${a.tag}</span>
          <span>${a.date}</span>
        </div>
        <h3 class="article-title">${a.title[lang] || a.title.en}</h3>
        <p class="article-excerpt">${a.excerpt[lang] || a.excerpt.en}</p>
        <div class="article-read-more">
          <span>${t('read_more') || 'مطالعه کامل مقاله'}</span>
          <span>→</span>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'), 10);
      openArticle(id);
    });
  });
}

function openArticle(id) {
  const a = ARTICLES.find(x => x.id === id);
  if (!a) return;

  const modal = $('articleModal');
  if (!modal) return;

  $('modalArticleTitle').textContent = a.title[lang] || a.title.en;
  $('modalArticleMeta').innerHTML = `
    <strong>${a.author}</strong> · <span>${a.date}</span> · <span>${a.readTime}</span>
  `;
  $('modalArticleBody').innerHTML = a.body[lang] || a.body.en;
  modal.hidden = false;
}

if ($('articleModalClose')) {
  $('articleModalClose').addEventListener('click', () => { $('articleModal').hidden = true; });
}
if ($('articleBackdrop')) {
  $('articleBackdrop').addEventListener('click', () => { $('articleModal').hidden = true; });
}

/* ---------- Product Detail View & Gallery ---------- */
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  updateProductDetailView();
  showView('product');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProductDetailView() {
  const p = currentProduct;
  if (!p) return;

  $('detailSku').textContent = 'SKU: ' + p.sku;
  $('detailTitle').textContent = p.name[lang] || p.name.en;
  $('detailDesc').textContent = p.desc[lang] || p.desc.en;
  $('detailPrice').textContent = p.price;
  $('detailCatBadge').textContent = catName(p.cat) + ' · ' + subcatName(p.cat, p.subcat);

  const mainImg = $('mainGalleryImg');
  mainImg.src = p.images[0];
  attachImgFallback(mainImg, p.cat, p.name[lang] || p.name.en);

  const thumbs = $('galleryThumbs');
  thumbs.innerHTML = p.images.map((url, i) => `
    <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}">
      <img src="${url}" alt="${p.name[lang] || p.name.en}">
    </div>
  `).join('');

  thumbs.querySelectorAll('.gallery-thumb').forEach(th => {
    th.addEventListener('click', () => {
      const idx = parseInt(th.getAttribute('data-idx'), 10);
      setGalleryImage(idx);
    });
  });

  const specsEl = $('detailSpecs');
  specsEl.innerHTML = p.specs.map(s => `
    <div class="spec-row">
      <span class="spec-key">${s[0]}</span>
      <span class="spec-val">${s[1]}</span>
    </div>
  `).join('');
}

function setGalleryImage(idx) {
  const p = currentProduct;
  if (!p || !p.images[idx]) return;
  const mainImg = $('mainGalleryImg');
  mainImg.src = p.images[idx];
  attachImgFallback(mainImg, p.cat, p.name[lang] || p.name.en);

  document.querySelectorAll('.gallery-thumb').forEach((th, i) => {
    th.classList.toggle('active', i === idx);
  });
}

if ($('detailBackBtn')) {
  $('detailBackBtn').addEventListener('click', () => {
    showView('home');
    const target = $('products');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

if ($('detailQuoteBtn')) {
  $('detailQuoteBtn').addEventListener('click', () => {
    showView('contact');
    if ($('cMsg') && currentProduct) {
      $('cMsg').value = `استعلام قیمت برای ${currentProduct.name[lang] || currentProduct.name.en} (${currentProduct.sku})\n`;
      $('cMsg').focus();
    }
  });
}

/* ---------- Client-Side Vector PDF 1.4 Datasheet Builder ---------- */
function downloadCatalog() {
  const p = currentProduct || PRODUCTS[0];
  const esc = s => (s || '').replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  
  let stream = '';
  // Forest Green Header Box
  stream += 'q\n0.05 0.22 0.16 rg 0 760 595 82 re f\nQ\n';
  // Gold Accent Line
  stream += 'q\n0.75 0.63 0.37 rg 0 756 595 4 re f\nQ\n';

  // Header Typography
  stream += 'BT\n/F2 17 Tf\n1 1 1 rg\n50 812 Td\n(' + esc('SABZNEGAR PRINT & PACKAGING COMPLEX') + ') Tj\nET\n';
  stream += 'BT\n/F1 9.5 Tf\n0.88 0.94 0.91 rg\n50 794 Td\n(' + esc('INDUSTRIAL OFFSET & DIGITAL PRINTING | FIVE-LANGUAGE B2B TECHNICAL DATASHEET') + ') Tj\nET\n';
  stream += 'BT\n/F1 8.5 Tf\n0.82 0.88 0.85 rg\n50 778 Td\n(' + esc('ISO 12647-2 COLOR MANAGEMENT CERTIFIED | FSC COMPLIANT | 100% REPRINT GUARANTEE') + ') Tj\nET\n';

  // Document Info Box
  stream += 'q\n0.97 0.96 0.94 rg 50 680 495 65 re f\n0.78 0.73 0.65 RG 1 w 50 680 495 65 re s\nQ\n';
  stream += 'BT\n/F2 11 Tf\n0.08 0.25 0.18 rg\n65 725 Td\n(' + esc('OFFICIAL TECHNICAL DATASHEET & PRINT SPECIFICATION') + ') Tj\nET\n';
  stream += 'BT\n/F1 9 Tf\n0.2 0.25 0.22 rg\n65 708 Td\n(' + esc('Model SKU: ' + p.sku + ' | Category: ' + p.name.en) + ') Tj\nET\n';
  stream += 'BT\n/F1 9 Tf\n0.2 0.25 0.22 rg\n65 692 Td\n(' + esc('Doc Reference: SN-SPEC-' + p.sku + ' | Date: 2026-11-19 | Status: ACTIVE PRODUCTION LINE') + ') Tj\nET\n';

  // Product Name
  stream += 'BT\n/F2 13 Tf\n0.05 0.22 0.16 rg\n50 645 Td\n(' + esc(p.name.en) + ') Tj\nET\n';
  // Commercial Status
  stream += 'BT\n/F2 10 Tf\n0.55 0.45 0.2 rg\n50 626 Td\n(' + esc('Commercial Status: Ready for Production | MOQ: ' + p.price) + ') Tj\nET\n';
  // Description
  stream += 'BT\n/F1 9 Tf\n0.18 0.22 0.2 rg\n50 600 Td\n(' + esc(p.desc.en) + ') Tj\nET\n';

  // Table Header
  stream += 'q\n0.08 0.3 0.22 rg 50 560 495 22 re f\nQ\n';
  stream += 'BT\n/F2 9.5 Tf\n1 1 1 rg\n65 567 Td\n(' + esc('PRODUCTION PARAMETER / STANDARD') + ') Tj\n350 0 Td\n(' + esc('TECHNICAL SPECIFICATION / VALUE') + ') Tj\nET\n';

  // Specs Rows
  let y = 538;
  p.specs.forEach((s, idx) => {
    if (idx % 2 === 0) {
      stream += 'q\n0.97 0.98 0.97 rg 50 ' + y + ' 495 20 re f\nQ\n';
    }
    stream += 'q\n0.85 0.88 0.85 RG 0.5 w 50 ' + y + ' 495 20 re s\nQ\n';
    stream += 'BT\n/F2 8.5 Tf\n0.1 0.2 0.15 rg\n65 ' + (y + 5) + ' Td\n(' + esc(s[0].split('/')[0].trim()) + ') Tj\nET\n';
    stream += 'BT\n/F1 8.5 Tf\n0.15 0.25 0.2 rg\n365 ' + (y + 5) + ' Td\n(' + esc(s[1]) + ') Tj\nET\n';
    y -= 20;
  });

  // Quality Guarantee Banner
  y -= 15;
  stream += 'q\n0.93 0.97 0.94 rg 50 ' + y + ' 495 50 re f\n0.5 0.75 0.6 RG 1 w 50 ' + y + ' 495 50 re s\nQ\n';
  stream += 'BT\n/F2 10.5 Tf\n0.05 0.35 0.2 rg\n65 ' + (y + 32) + ' Td\n(' + esc('100% REPRINT & QUALITY GUARANTEE (ZERO-DEFECT POLICY)') + ') Tj\nET\n';
  stream += 'BT\n/F1 8.5 Tf\n0.15 0.3 0.2 rg\n65 ' + (y + 16) + ' Td\n(' + esc('Color fidelity guaranteed under ISO 12647-2 spectrophotometer calibration. Zero-defect tolerance on die-cuts.') + ') Tj\nET\n';

  // CMYK Color Patch Strip
  y -= 25;
  stream += 'q\n0 0.62 0.89 rg 50 ' + y + ' 25 12 re f\nQ\n';
  stream += 'q\n0.9 0 0.49 rg 80 ' + y + ' 25 12 re f\nQ\n';
  stream += 'q\n1 0.93 0 rg 110 ' + y + ' 25 12 re f\nQ\n';
  stream += 'q\n0.08 0.08 0.08 rg 140 ' + y + ' 25 12 re f\nQ\n';
  stream += 'BT\n/F1 8 Tf\n0.4 0.45 0.4 rg\n175 ' + (y + 2) + ' Td\n(' + esc('FOGRA 39 / 51 CALIBRATION VERIFIED') + ') Tj\nET\n';

  // Regional Export Desks
  y -= 45;
  stream += 'q\n0.97 0.96 0.94 rg 50 ' + y + ' 495 38 re f\n0.82 0.78 0.7 RG 1 w 50 ' + y + ' 495 38 re s\nQ\n';
  stream += 'BT\n/F2 8.5 Tf\n0.1 0.25 0.18 rg\n65 ' + (y + 22) + ' Td\n(' + esc('REGIONAL EXPORT DESKS & COMMERCIAL ORDER INQUIRY') + ') Tj\nET\n';
  stream += 'BT\n/F1 8 Tf\n0.25 0.3 0.28 rg\n65 ' + (y + 8) + ' Td\n(' + esc('Tehran Plant: +98 21 4455 6677 | Istanbul: +90 212 549 8812 | Dubai: +971 4 392 4110 | Moscow: +7 495 721 8490') + ') Tj\nET\n';

  // Footer
  stream += 'BT\n/F1 8 Tf\n0.5 0.5 0.5 rg\n50 30 Td\n(' + esc('Generated by SabzNegar Print & Packaging Multilingual Platform. Confidential commercial document.') + ') Tj\nET\n';

  // Assembly PDF Objects
  let pdf = '%PDF-1.4\n';
  const offsets = [];

  function addObj(content) {
    offsets.push(pdf.length);
    pdf += offsets.length + ' 0 obj\n' + content + '\nendobj\n';
  }

  addObj('<< /Type /Catalog /Pages 2 0 R >>');
  addObj('<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  addObj('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>');
  addObj('<< /Length ' + stream.length + ' >>\nstream\n' + stream + '\nendstream');
  addObj('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
  addObj('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');

  const xrefOffset = pdf.length;
  pdf += 'xref\n0 ' + (offsets.length + 1) + '\n0000000000 65535 f \n';
  offsets.forEach(off => {
    pdf += String(off).padStart(10, '0') + ' 00000 n \n';
  });
  pdf += 'trailer\n<< /Size ' + (offsets.length + 1) + ' /Root 1 0 R >>\nstartxref\n' + xrefOffset + '\n%%EOF';

  // Trigger Client-Side Download
  const blob = new Blob([pdf], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SabzNegar-${p.sku}-Catalog.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

if ($('downloadCatalogBtn')) $('downloadCatalogBtn').addEventListener('click', downloadCatalog);
if ($('modalDownloadPdf')) $('modalDownloadPdf').addEventListener('click', downloadCatalog);

/* ---------- Interactive Heidelberg Speedmaster Video Simulation ---------- */
const VIDEO_DURATION = 90; // 1 min 30 sec

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function initVideoCanvas() {
  const canvas = $('videoCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let angle = 0;
  let sheetX = 20;
  let sheetsCount = 4280;

  function drawFrame() {
    ctx.fillStyle = '#091c14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Pressroom Console Background Grid
    ctx.strokeStyle = 'rgba(191, 161, 95, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 32) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 32) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    if (isVideoPlaying) {
      angle += 0.05;
      sheetX += 3.5;
      if (sheetX > canvas.width - 60) {
        sheetX = 30;
        sheetsCount++;
      }
    }

    // Draw 5 Heidelberg Offset Print Towers
    const towers = [
      { name: 'C', color: '#009fe3', label: 'CYAN' },
      { name: 'M', color: '#e6007e', label: 'MAGENTA' },
      { name: 'Y', color: '#ffed00', label: 'YELLOW' },
      { name: 'K', color: '#1a1a1a', label: 'BLACK' },
      { name: 'V', color: '#bfa15f', label: 'COATER' }
    ];

    const towerW = 74;
    const startX = 65;
    const gap = 34;

    towers.forEach((tw, idx) => {
      const tx = startX + idx * (towerW + gap);
      const ty = 140;

      // Tower Frame
      ctx.fillStyle = '#071610';
      ctx.fillRect(tx, ty - 60, towerW, 160);
      ctx.strokeStyle = 'rgba(191, 161, 95, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(tx, ty - 60, towerW, 160);

      // Rotating Print Cylinder
      const cyX = tx + towerW / 2;
      const cyY = ty + 10;
      ctx.save();
      ctx.translate(cyX, cyY);
      ctx.rotate(angle);

      ctx.beginPath();
      ctx.arc(0, 0, 24, 0, Math.PI * 2);
      ctx.fillStyle = '#143828';
      ctx.fill();
      ctx.strokeStyle = tw.color;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Gear Spokes
      for (let s = 0; s < 4; s++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(24 * Math.cos(s * Math.PI / 2), 24 * Math.sin(s * Math.PI / 2));
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      ctx.restore();

      // Ink Reservoir Glow
      ctx.fillStyle = tw.color;
      ctx.fillRect(tx + 8, ty - 50, towerW - 16, 10);

      // Unit Label
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px monospace';
      ctx.fillText(tw.label, tx + 10, ty + 70);
    });

    // Paper Transport Bed Line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(20, 215);
    ctx.lineTo(canvas.width - 20, 215);
    ctx.stroke();

    // Animated Running Paper Sheet
    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 6;
    ctx.fillRect(sheetX, 206, 60, 16);

    // Color layers on running sheet
    if (sheetX > 65) {
      ctx.fillStyle = 'rgba(0, 159, 227, 0.5)';
      ctx.fillRect(sheetX + 2, 208, 12, 12);
    }
    if (sheetX > 170) {
      ctx.fillStyle = 'rgba(230, 0, 126, 0.5)';
      ctx.fillRect(sheetX + 16, 208, 12, 12);
    }
    if (sheetX > 280) {
      ctx.fillStyle = 'rgba(255, 237, 0, 0.6)';
      ctx.fillRect(sheetX + 30, 208, 12, 12);
    }
    if (sheetX > 390) {
      ctx.fillStyle = 'rgba(20, 20, 20, 0.8)';
      ctx.fillRect(sheetX + 44, 208, 12, 12);
    }
    ctx.restore();

    // Telemetry Teletext Readouts
    ctx.fillStyle = '#bfa15f';
    ctx.font = '11px monospace';
    ctx.fillText('PRESS SPEED: 18,000 SHEETS/HR [FULL SPEED]', 30, 40);
    ctx.fillText('COLOR ACCURACY: ΔE = 0.82 [ISO 12647-2]', 30, 56);
    ctx.fillText('TOTAL SHEETS PRINTED: ' + sheetsCount, 30, 72);

    ctx.fillStyle = '#ffffff';
    ctx.font = '10px monospace';
    ctx.fillText('CMYK DENSITY: C:1.45 | M:1.50 | Y:1.05 | K:1.80', 340, 40);
    ctx.fillText('REGISTRATION: ±0.01 mm | SUBSTRATE: 300 GSM', 340, 56);
    ctx.fillText('BOBST MASTERCUT: 9,000 SPH DIECUTTER ONLINE', 340, 72);

    // Video Progress Tracker
    if (isVideoPlaying) {
      videoProgress += 0.04;
      if (videoProgress >= VIDEO_DURATION) {
        videoProgress = VIDEO_DURATION;
        isVideoPlaying = false;
        $('videoPlayBtn').textContent = '↺';
      }
      $('videoProgressBar').style.width = (videoProgress / VIDEO_DURATION * 100) + '%';
      $('videoTime').textContent = `${formatTime(videoProgress)} / ${formatTime(VIDEO_DURATION)}`;
    }

    videoAnimId = requestAnimationFrame(drawFrame);
  }

  if (videoAnimId) cancelAnimationFrame(videoAnimId);
  drawFrame();
}

function openVideoModal() {
  const modal = $('videoModal');
  if (!modal) return;
  modal.hidden = false;
  const p = currentProduct || PRODUCTS[0];
  $('videoHudModel').textContent = `HEIDELBERG SPEEDMASTER XL 106 · ${p.sku}`;
  isVideoPlaying = true;
  $('videoPlayBtn').textContent = '⏸';
  initVideoCanvas();
}

function closeVideoModal() {
  const modal = $('videoModal');
  if (!modal) return;
  modal.hidden = true;
  isVideoPlaying = false;
  if (videoAnimId) cancelAnimationFrame(videoAnimId);
}

if ($('videoModalBtn')) $('videoModalBtn').addEventListener('click', openVideoModal);
if ($('videoClose')) $('videoClose').addEventListener('click', closeVideoModal);
if ($('videoBackdrop')) $('videoBackdrop').addEventListener('click', closeVideoModal);

if ($('videoPlayBtn')) {
  $('videoPlayBtn').addEventListener('click', () => {
    if (videoProgress >= VIDEO_DURATION) {
      videoProgress = 0;
      isVideoPlaying = true;
      $('videoPlayBtn').textContent = '⏸';
      return;
    }
    isVideoPlaying = !isVideoPlaying;
    $('videoPlayBtn').textContent = isVideoPlaying ? '⏸' : '▶';
  });
}

if ($('videoProgressWrap')) {
  $('videoProgressWrap').addEventListener('click', e => {
    const rect = $('videoProgressWrap').getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    videoProgress = ratio * VIDEO_DURATION;
    $('videoProgressBar').style.width = (ratio * 100) + '%';
    $('videoTime').textContent = `${formatTime(videoProgress)} / ${formatTime(VIDEO_DURATION)}`;
  });
}

if ($('videoMuteBtn')) {
  let isMuted = false;
  $('videoMuteBtn').addEventListener('click', () => {
    isMuted = !isMuted;
    $('videoMuteBtn').textContent = isMuted ? '🔇' : '🔊';
  });
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !$('videoModal').hidden) closeVideoModal();
});

/* ---------- Serial / Order Tracking Lookup ---------- */
const KNOWN_SERIALS = {
  "SN-2024-8841": {
    "model": "چاپ ۱۰,۰۰۰ جعبه دارویی ایندربرد ۳۰۰ گرم با خط بریل (Pharma Folding Carton)",
    "status": "مرحله ۴ از ۵ — سلفون‌کشی و دایکات بوبست (Finishing & Bobst Die-Cutting)",
    "validUntil": "تحویل ظرف ۴۸ ساعت آینده",
    "owner": "شرکت داروسازی کیمیا فارمد (Kimia Pharmed Corp)",
    "daysLeft": "تطابق رنگ با Delta E < 1.1"
  },
  "SN-2024-9102": {
    "model": "چاپ ۵,۰۰۰ جلد کاتالوگ سخت نفیس A4 طلاکوب (Luxury Hardcover Catalog)",
    "status": "مرحله ۵ از ۵ — تکمیل و تحویل به انبار باربری صادراتی (Export Logistics)",
    "validUntil": "تحویل‌شده با ضمانت ۱۰۰٪ بازچاپ",
    "owner": "صنایع فولاد گستر آسیا (Asia Steel Corp)",
    "daysLeft": "کیفیت ۱۰۰٪ تاییدشده"
  },
  "SN-2024-7733": {
    "model": "تولید ۲۰,۰۰۰ عدد ساک دستی کرافت سوئدی دوستدار محیط‌زیست (Eco Kraft Bag)",
    "status": "مرحله ۳ از ۵ — چاپ فلکسو و خط اتوماتیک پاکت‌سازی (Flexo & Assembly)",
    "validUntil": "تحویل ۵ روز کاری آینده",
    "owner": "مجموعه فروشگاه‌های زنجیره‌ای روژان (Rojhan Stores)",
    "daysLeft": "تست مقاومت دسته تا ۶ کیلوگرم پاس شد"
  },
  "SN-2024-6510": {
    "model": "تولید ۱,۵۰۰ عدد هاردباکس مغناطیسی لوکس زعفران صادراتی (Magnetic Rigid Box)",
    "status": "مرحله ۴ از ۵ — برش لیزر فوم مخملی EVA و مونتاژ مگنت‌ها",
    "validUntil": "آماده بسته‌بندی جهت ارسال به دبی",
    "owner": "شرکت صادرات زعفران زرین (Zarrin Saffron Export)",
    "daysLeft": "کنترل چفت مگنت تایید شد"
  }
};

if ($('serialCheckForm')) {
  $('serialCheckForm').addEventListener('submit', e => {
    e.preventDefault();
    const input = $('serialInput').value.trim().toUpperCase();
    const res = $('serialResult');
    if (!input) return;

    const data = KNOWN_SERIALS[input] || {
      model: 'سفارش سازمانی فعال سبزنگار (' + input + ')',
      status: 'در حال تولید — تحت کنترل مدیریت رنگ ISO 12647-2',
      validUntil: 'آماده‌سازی جهت بسته‌بندی و ارسال',
      owner: 'مشتری سازمانی معتبر',
      daysLeft: 'تطابق کامل استاندارد کیفیت'
    };

    res.hidden = false;
    res.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
        <span style="font-weight:800; font-size:16px; color:var(--success);">✓ ${t('warranty_badge')}</span>
        <span style="font-family:monospace; background:var(--brand-subtle); color:var(--brand); font-weight:700; padding:2px 8px; border-radius:4px;">SN: ${input}</span>
      </div>
      <p><strong>${t('f_serial')}:</strong> ${data.model}</p>
      <p><strong>وضعیت مرحله تولید:</strong> ${data.status}</p>
      <p><strong>زمان‌بندی تحویل:</strong> ${data.validUntil}</p>
      <p><strong>مشتری / برند:</strong> ${data.owner} (${data.daysLeft})</p>
      <p style="margin-top:8px; font-size:12.5px; color:var(--muted);">تضمین ۱۰۰٪ کیفیت: کلیه پارت‌های سفارش تحت آزمون‌های اسپکتروفتومتری و آزمون دایکات دقیق تولید می‌گردند.</p>
    `;
  });
}

/* ---------- Universal Form Validation Engine ---------- */
function validMobile(v) {
  return /^[0-9+\s\-]{10,18}$/.test(v.trim());
}

function validEmail(v) {
  if (!v.trim()) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function setupForm(cfg) {
  const form = $(cfg.formId);
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let hasError = false;

    cfg.fields.forEach(f => {
      const el = $(f.id);
      const err = f.errId ? $(f.errId) : null;
      if (!el) return;

      const val = el.value.trim();
      let msg = '';

      if (f.required && !val) {
        msg = t('err_required');
      } else if (f.type === 'mobile' && !validMobile(val)) {
        msg = t('err_mobile');
      } else if (f.type === 'email' && !validEmail(val)) {
        msg = t('err_email');
      }

      if (msg) {
        hasError = true;
        el.classList.add('error');
        if (err) {
          err.textContent = msg;
          err.hidden = false;
        }
      } else {
        el.classList.remove('error');
        if (err) err.hidden = true;
      }
    });

    const genErr = $(cfg.generalErrId);
    const okBox = $(cfg.okBoxId);

    if (hasError) {
      if (genErr) genErr.hidden = false;
      if (okBox) okBox.hidden = true;
    } else {
      if (genErr) genErr.hidden = true;
      if (okBox) okBox.hidden = false;
      if (cfg.onSuccess) cfg.onSuccess(form);
      form.reset();
    }
  });
}

// 1. Home Quick Quote Form
setupForm({
  formId: 'homeQuoteForm',
  generalErrId: 'hqErr',
  okBoxId: 'hqOk',
  fields: [
    { id: 'hqName', errId: 'hqNameErr', required: true },
    { id: 'hqMobile', errId: 'hqMobileErr', required: true, type: 'mobile' },
    { id: 'hqQuantity', errId: 'hqQuantityErr', required: true }
  ],
  onSuccess: () => {
    const code = 'SN-QUOTE-' + Math.floor(100000 + Math.random() * 900000);
    $('hqTracking').textContent = `Tracking Code: ${code}`;
  }
});

// 2. Customer Club Form
setupForm({
  formId: 'clubForm',
  generalErrId: 'clubErr',
  okBoxId: 'clubOk',
  fields: [
    { id: 'clubName', errId: 'clubNameErr', required: true },
    { id: 'clubMobile', errId: 'clubMobileErr', required: true, type: 'mobile' },
    { id: 'clubEmail', errId: 'clubEmailErr', required: false, type: 'email' }
  ],
  onSuccess: () => {
    const name = $('clubName').value || 'VIP Partner';
    const num = 'SN-VIP-' + Math.floor(100000 + Math.random() * 900000);
    $('cardMemberName').textContent = name;
    $('cardMemberNumber').textContent = num;
    $('clubSuccessMeta').textContent = `Member ID: ${num}`;
    $('clubCardDisplay').scrollIntoView({ behavior: 'smooth' });
  }
});

// 3. Warranty & Reprint Form
setupForm({
  formId: 'warrantyForm',
  generalErrId: 'wErr',
  okBoxId: 'wOk',
  fields: [
    { id: 'wName', errId: 'wNameErr', required: true },
    { id: 'wMobile', errId: 'wMobileErr', required: true, type: 'mobile' },
    { id: 'wSerial', errId: 'wSerialErr', required: true },
    { id: 'wIssue', errId: 'wIssueErr', required: true }
  ],
  onSuccess: () => {
    const code = 'SN-REP-' + Math.floor(100000 + Math.random() * 900000);
    $('wOkMsg').textContent = t('warranty_ok_prefix') || t('success_msg');
    $('wTicketCode').textContent = code;
  }
});

if ($('copyTicketBtn')) {
  $('copyTicketBtn').addEventListener('click', () => {
    const code = $('wTicketCode').textContent;
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      $('copyTicketBtn').textContent = t('warranty_copied') || '✓ کپی شد';
      setTimeout(() => {
        $('copyTicketBtn').textContent = t('warranty_copy_code');
      }, 2000);
    });
  });
}

// 4. About Us Partnership Form
setupForm({
  formId: 'aboutPartnerForm',
  generalErrId: 'apErr',
  okBoxId: 'apOk',
  fields: [
    { id: 'apCompany', errId: 'apCompanyErr', required: true },
    { id: 'apName', errId: 'apNameErr', required: true },
    { id: 'apMobile', errId: 'apMobileErr', required: true, type: 'mobile' },
    { id: 'apLocation', errId: 'apLocationErr', required: true },
    { id: 'apMsg', errId: 'apMsgErr', required: true }
  ]
});

// 5. Contact Form
setupForm({
  formId: 'contactForm',
  generalErrId: 'cErr',
  okBoxId: 'cOk',
  fields: [
    { id: 'cName', errId: 'cNameErr', required: true },
    { id: 'cMobile', errId: 'cMobileErr', required: true, type: 'mobile' },
    { id: 'cEmail', errId: 'cEmailErr', required: false, type: 'email' },
    { id: 'cMsg', errId: 'cMsgErr', required: true }
  ],
  onSuccess: () => {
    const code = 'SN-MSG-' + Math.floor(100000 + Math.random() * 900000);
    $('cTracking').textContent = `Inquiry Reference: ${code}`;
  }
});

// 6. Article Newsletter Form
setupForm({
  formId: 'articleSubscribeForm',
  generalErrId: 'asErr',
  okBoxId: 'asOk',
  fields: [
    { id: 'asName', errId: '', required: true },
    { id: 'asContact', errId: '', required: true }
  ]
});

/* ---------- Router & Navigation Controller ---------- */
function showView(name) {
  currentView = name;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = $('view-' + name);
  if (el) el.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.getAttribute('data-nav') === name && !l.hasAttribute('data-scroll')) {
      l.classList.add('active');
    } else if (!l.hasAttribute('data-scroll') || name !== 'home') {
      l.classList.remove('active');
    }
  });

  if ($('mainNav')) $('mainNav').classList.remove('open');
}

document.querySelectorAll('[data-nav]').forEach(el => {
  el.addEventListener('click', e => {
    const targetView = el.getAttribute('data-nav');
    const scrollTarget = el.getAttribute('data-scroll');

    if (targetView) {
      e.preventDefault();
      showView(targetView);

      if (scrollTarget) {
        setTimeout(() => {
          const s = $(scrollTarget);
          if (s) s.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  });
});

/* Category Links in Footer */
document.querySelectorAll('[data-f]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const cat = el.getAttribute('data-f');
    showView('home');
    setFilter(cat);
    const target = $('products');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

/* Mobile Burger Menu */
if ($('burger')) {
  $('burger').addEventListener('click', () => {
    $('mainNav').classList.toggle('open');
  });
}

/* ---------- Language Switcher Controller ---------- */
function setLang(l) {
  if (!LANGS[l]) return;
  lang = l;
  try {
    localStorage.setItem('sabznegar_lang', l);
  } catch (e) {}

  document.documentElement.lang = l;
  document.documentElement.dir = LANGS[l].dir;

  // Update i18n Text Nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    el.textContent = t(k);
  });

  // Update Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph');
    el.setAttribute('placeholder', t(k));
  });

  // Update Titles
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const k = el.getAttribute('data-i18n-title');
    el.setAttribute('title', t(k));
  });

  // Update Meta
  if ($('metaDesc')) $('metaDesc').setAttribute('content', t('meta_desc'));

  // Update Lang Menu UI
  if ($('langCurrent')) $('langCurrent').textContent = LANGS[l].label;
  document.querySelectorAll('.lang-menu button').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === l);
  });

  // Re-render Data-Driven Sections
  renderCats();
  renderFilters();
  renderProducts();
  renderFeatured();
  renderArticles();

  if (currentView === 'product') {
    updateProductDetailView();
  }
}

if ($('langBtn')) {
  $('langBtn').addEventListener('click', e => {
    e.stopPropagation();
    $('langMenu').classList.toggle('open');
  });

  document.addEventListener('click', () => {
    $('langMenu').classList.remove('open');
  });

  document.querySelectorAll('.lang-menu button').forEach(b => {
    b.addEventListener('click', () => {
      setLang(b.getAttribute('data-lang'));
      $('langMenu').classList.remove('open');
    });
  });
}

/* ---------- Instant Search Controller ---------- */
const searchInput = $('productSearch');
const clearSearch = $('searchClear');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value;
    if (clearSearch) clearSearch.hidden = !searchQuery;
    renderProducts();
  });
}

if (clearSearch) {
  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearch.hidden = true;
    renderProducts();
    searchInput.focus();
  });
}

if ($('resetFilterBtn')) {
  $('resetFilterBtn').addEventListener('click', () => {
    currentCategory = 'all';
    currentSubcategory = 'all';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    if (clearSearch) clearSearch.hidden = true;
    renderFilters();
    renderProducts();
  });
}

/* ---------- Floating Quick Contact Controller ---------- */
const quickContact = $('quickContact');
const qcMain = $('qcMain');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    quickContact.classList.add('visible');
  } else {
    quickContact.classList.remove('visible');
    quickContact.classList.remove('open');
  }
}, { passive: true });

if (qcMain) {
  qcMain.addEventListener('click', e => {
    e.stopPropagation();
    quickContact.classList.toggle('open');
  });

  document.addEventListener('click', e => {
    if (!quickContact.contains(e.target)) {
      quickContact.classList.remove('open');
    }
  });
}

/* ---------- Application Bootstrap ---------- */
document.addEventListener('DOMContentLoaded', () => {
  setLang(lang);
  showView('home');
});
