'use strict';

/* ==========================================================================
   NovaTrade — Five-Language Industrial & Commercial Platform Engine
   Languages: Persian (FA), English (EN), Arabic (AR), Turkish (TR), Russian (RU)
   ========================================================================== */

/* ---------- Language Definitions & Direction ---------- */
const LANGS = {
  fa: { name: 'فارسی', flag: '🇮🇷', dir: 'rtl', locale: 'fa-IR' },
  en: { name: 'English', flag: '🇬🇧', dir: 'ltr', locale: 'en-US' },
  ar: { name: 'العربية', flag: '🇸🇦', dir: 'rtl', locale: 'ar-SA' },
  tr: { name: 'Türkçe', flag: '🇹🇷', dir: 'ltr', locale: 'tr-TR' },
  ru: { name: 'Русский', flag: '🇷🇺', dir: 'ltr', locale: 'ru-RU' }
};

/* ---------- Master Localization Dictionary ---------- */
const T = {
  fa: {
    meta_title: 'NovaTrade — تجهیزات صنعتی و تجاری | سامانه پنج‌زبانه',
    meta_desc: 'تأمین، مشاوره تخصصی، گارانتی معتبر و خدمات پس از فروش تجهیزات صنعتی در ۵ زبان',
    nav_home: 'خانه',
    nav_products: 'محصولات',
    nav_articles: 'مقالات و دانش فنی',
    nav_club: 'باشگاه مشتریان',
    nav_warranty: 'گارانتی و خدمات',
    nav_about: 'درباره ما',
    nav_contact: 'تماس با ما',
    nav_quote: 'استعلام فوری',

    hero_badge: 'پلتفرم بازرگانی و صنعتی بین‌المللی',
    hero_title: 'تجهیزات صنعتی و تجاری، با پشتیبانی تخصصی پنج‌زبانه',
    hero_sub: 'فروش مستقیم، گارانتی طلایی ۱۸ ماهه و خدمات پس از فروش ده‌ساله در ایران و بازارهای منطقه‌ای',
    hero_cta_products: 'مشاهده کاتالوگ محصولات',
    hero_cta_contact: 'درخواست مشاوره فنی',

    stat_warranty: '۱۸ ماه گارانتی طلایی',
    hf_warranty_sub: 'تأمین قطعات ۱۰ سال',
    stat_langs: '۵ زبان پشتیبانی',
    hf_langs_sub: 'FA / EN / AR / TR / RU',
    stat_clients: '۱۲,۰۰۰+ مشتری سازمانی',
    hf_clients_sub: 'پروژه‌های کلان منطقه‌ای',
    stat_years: '۱۸+ سال سابقه درخشان',
    hf_years_sub: 'استاندارد ISO 9001:2015',
    stat_models: '۳۵۰+ محصول فعال',

    cats_badge: 'گروه‌بندی تخصصی',
    cats_title: 'دسته‌بندی‌های تخصصی تجهیزات',
    cats_sub: 'تأمین برترین تجهیزات صنعتی مطابق با استانداردهای بین‌المللی کیفیت',
    view_category: 'مشاهده زیردسته‌ها و محصولات',

    products_badge: 'کاتالوگ جامع',
    products_title: 'کاتالوگ و لیست محصولات',
    products_sub: 'فیلتر بر اساس دسته‌بندی، زیردسته یا جستجوی مستقیم کد محصول',
    search_placeholder: 'جستجوی نام کالا، مدل، توان یا مشخصات فنی...',
    filter_all: 'همه محصولات',
    filter_subcat_label: 'زیردسته‌ها:',
    filter_subcat_all: 'همه موارد',
    results_count: 'نمایش {n} محصول صنعتی',
    reset_filter: '↺ حذف فیلترها',
    no_products_found: 'محصولی با مشخصات انتخابی یافت نشد.',
    no_products_hint: 'لطفاً عبارت دیگری را جستجو کنید یا فیلترهای اعمال‌شده را بازنشانی نمایید.',

    featured_badge: 'محصولات برتر',
    featured_title: 'تجهیزات صنعتی منتخب و پرفروش',
    featured_sub: 'انتخاب مهندسان و واحدهای صنعتی برای راندمان بالا و کارکرد پیوسته در شرایط سخت',

    view_product: 'مشاهده مشخصات و دانلود کاتالوگ',
    currency: 'تومان',
    in_stock: 'موجود در انبار مرکزی',
    back: 'بازگشت به فهرست محصولات',
    specs_title: 'مشخصات فنی و مهندسی',
    download_catalog: 'دانلود کاتالوگ رسمی (PDF)',
    watch_video: 'ویدئوی معرفی محصول',
    order_inquiry: 'استعلام فوری در واتساپ',
    warranty_badge: '۱۸ ماه گارانتی طلایی شرکتی',
    warranty_highlight: 'دارای ۱۰ سال تضمین تأمین قطعات یدکی و خدمات پس از فروش رسمی در سراسر کشور',

    home_form_badge: 'مشاوره اختصاصی',
    home_form_title: 'درخواست استعلام قیمت و مشاوره فنی',
    home_form_sub: 'کارشناسان بازرگانی و فنی ما ظرف حداکثر ۲ ساعت کاری با شما تماس می‌گیرند.',
    home_form_btn: 'ثبت درخواست استعلام',
    home_form_ok: 'درخواست شما با موفقیت ثبت شد. کارشناسان ما به‌زودی با شما تماس خواهند گرفت.',

    articles_badge: 'مرکز دانش و آموزش',
    articles_title: 'دانشنامه و مقالات تخصصی مهندسی',
    articles_sub: 'راهنماهای انتخاب تجهیزات، چک‌لیست‌های نگهداری و استانداردهای صنعتی روز دنیا',
    read_more: 'مطالعه مقاله تخصصی',
    back_to_articles: 'بازگشت به مقالات',
    article_newsletter_title: 'اشتراک در بولتن فنی و مهندسی',
    article_newsletter_sub: 'جدیدترین مقالات تخصصی و استانداردهای روز صنعتی را در ایمیل یا پیام‌رسان دریافت کنید.',
    article_sub_btn: 'عضویت در خبرنامه فنی',
    article_sub_ok: 'با تشکر! اشتراک شما در خبرنامه فنی با موفقیت فعال شد.',

    club_badge: 'برنامه وفاداری و مشتریان برتر',
    club_title: 'باشگاه مشتریان و همکاران تجاری',
    club_sub: 'به شبکه شرکای NovaTrade بپیوندید و از مزایای طلایی اختصاصی بهره‌مند شوید',
    club_perk1_title: 'تخفیف‌های پله‌ای خرید',
    club_perk1_desc: '۵ تا ۱۵ درصد تخفیف ویژه برای خریدهای پروژه‌ای و تجاری اعضا',
    club_perk2_title: 'اولویت فوری تأمین قطعات',
    club_perk2_desc: 'ارسال فوری قطعات یدکی ضروری از انبارهای اختصاصی در کمتر از ۲۴ ساعت',
    club_perk3_title: 'کارشناسی فنی در محل رایگان',
    club_perk3_desc: 'اعزام مهندسان ارشد جهت بررسی خطوط، عیب‌یابی و بهینه‌سازی مصرف انرژی',
    club_tier: 'سطح طلایی (Gold Partner)',
    club_valid: 'پایان ۲۰۲۷',
    card_holder: 'نام دارنده:',
    card_valid: 'اعتبار:',
    card_notice: 'کارت عضویت دیجیتال پس از ثبت‌نام بلافاصله فعال می‌شود.',
    club_join_title: 'فرم ثبت‌نام و فعال‌سازی عضویت',
    join: 'فعال‌سازی عضویت طلایی',
    club_registered_msg: 'عضویت شما در سطح Gold Partner تأیید و کارت شما صادر شد!',

    warranty_badge_top: 'پشتیبانی و اصالت کالا',
    warranty_title: 'گارانتی طلایی و خدمات پس از فروش',
    warranty_sub: 'پشتیبانی فنی بی‌وقفه، تأمین قطعات فابریک و سامانه هوشمند پیگیری درخواست‌ها',
    warranty_lookup_title: 'استعلام اصالت و وضعیت گارانتی با شماره سریال',
    warranty_lookup_sub: 'شماره سریال درج‌شده روی پلاک دستگاه خود را وارد کنید (مثال: NT-88214 یا NT-PMP-240)',
    warranty_lookup_btn: 'استعلام وضعیت دستگاه',
    warranty_claim_title: 'ثبت درخواست خدمات و اعزام کارشناس فنی',
    warranty_form_sub: 'پس از ثبت درخواست، کارشناس پشتیبانی ظرف ۳۰ دقیقه برای هماهنگی با شما تماس خواهد گرفت.',
    send_request: 'ثبت رسمی درخواست گارانتی',
    warranty_terms_title: 'شرایط و تعهدات گارانتی طلایی NovaTrade',
    warranty_copy_code: 'کپی کد رهگیری',
    warranty_copied: 'کپی شد!',
    warranty_ok_prefix: 'درخواست خدمات شما با موفقیت ثبت گردید. کد پیگیری رسمی شما:',

    about_badge: 'پیشینه و دستاوردها',
    about_title: 'درباره گروه صنعتی و بازرگانی NovaTrade',
    about_lead: 'بیش از ۱۸ سال پیشتازی در مهندسی، تأمین ماشین‌آلات صنعتی و توسعه همکاری‌های بازرگانی در منطقه',
    about_desc: 'گروه صنعتی NovaTrade فعالیت خود را از سال ۱۳۸۵ با هدف تأمین تخصصی تجهیزات انتقال سیالات، برودتی، تهویه مطبوع، ژنراتور و تجهیزات کارگاهی آغاز نمود. امروز این مجموعه با شعب فعال در تهران، استانبول، دبی و مسکو و شبکه نمایندگی‌های منطقه‌ای، تأمین‌کننده قابل اعتماد هزاران کارخانه، بیمارستان، برج تجاری و پروژه عمرانی در پنج زبان زنده دنیاست.',
    regional_hubs_title: 'شبکه بین‌المللی و مراکز منطقه‌ای NovaTrade',
    about_partner_badge: 'همکاری‌های کلان',
    about_partner_title: 'درخواست اخذ نمایندگی و همکاری تجاری (B2B)',
    about_partner_sub: 'اگر تمایل دارید به شبکه توزیع و نمایندگی‌های استانی یا بین‌المللی ما بپیوندید، فرم زیر را ارسال فرمایید.',
    submit_partner_btn: 'ارسال درخواست نمایندگی',
    partner_registered_ok: 'درخواست همکاری شما ثبت شد. مدیریت توسعه بازار NovaTrade ظرف ۴۸ ساعت با شما ارتباط خواهد گرفت.',

    contact_badge: 'راه‌های ارتباطی',
    contact_title: 'ارتباط با دفاتر مرکزی و منطقه‌ای NovaTrade',
    contact_sub: 'کارشناسان ما در ۵ زبان رسمی آماده پاسخگویی و هماهنگی جلسات حضوری یا آنلاین هستند.',
    ci_address_title: 'آدرس دفتر مرکزی:',
    address: 'تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲۴۰، برج NovaTrade',
    ci_phone_title: 'تلفن و خطوط مستقیم:',
    ci_email_title: 'ایمیل‌های رسمی:',
    ci_hours_title: 'ساعات پاسخگویی:',
    ci_hours_val: 'شنبه تا چهارشنبه ۸:۳۰ الی ۱۷:۰۰ | پنجشنبه‌ها ۸:۳۰ الی ۱۳:۰۰',
    contact_form_title: 'ارسال پیام یا درخواست مشاوره',
    contact_tehran_title: 'دفتر مرکزی تهران',
    contact_istanbul_title: 'دفتر منطقه‌ای استانبول',
    contact_dubai_title: 'مرکز تجارت خاورمیانه (دبی)',
    contact_moscow_title: 'دفتر منطقه اوراسیا (مسکو)',

    footer_tagline: 'تأمین تجهیزات پیشرفته صنعتی و تجاری در خاورمیانه و اوراسیا با پشتیبانی رسمی در پنج کشور',
    footer_links_title: 'دسترسی سریع',
    footer_cats_title: 'دسته‌بندی‌ها',
    footer_contact_title: 'ارتباط مستقیم',
    footer_rights: 'تمامی حقوق برای گروه صنعتی NovaTrade محفوظ است — نسخه نمایشی پنج‌زبانه پیشنهادی پروژه',

    video_title: 'ویدئوی معرفی تجهیزات و خط تولید NovaTrade',
    video_hud: 'QC TEST & CAD SIMULATION',
    video_desc: 'شبیه‌سازی سه‌بعدی رفتار هیدرولیکی، تست فشار و تلورانس ارتعاشی استانداردهای ISO 9001 در آزمایشگاه مرکزی NovaTrade.',

    qc_phone: 'تماس تلفنی با دفتر مرکزی',
    qc_phone_tip: 'تماس مستقیم',
    qc_whatsapp: 'واتساپ پشتیبانی فنی',
    qc_bale: 'پیام‌رسان بله',
    qc_rubika: 'پیام‌رسان روبیکا',
    qc_eitaa: 'پیام‌رسان ایتا',

    f_name: 'نام و نام خانوادگی',
    f_mobile: 'شماره همراه / تماس',
    f_email: 'آدرس ایمیل',
    f_company: 'نام شرکت / سازمان',
    f_country: 'کشور و شهر فعالیت',
    f_department: 'واحد سازمانی مخاطب',
    f_dept_sales: 'واحد فروش و مهندسی فروش',
    f_dept_service: 'خدمات پس از فروش و گارانتی',
    f_dept_export: 'واحد بازرگانی خارجی و صادرات',
    f_serial: 'شماره سریال دستگاه',
    f_service_type: 'نوع خدمت درخواستی',
    srv_repair: 'تعمیرات تخصصی و تعویض قطعه',
    srv_pm: 'سرویس دوره‌ای پیشگیرانه (PM)',
    srv_parts: 'سفارش قطعات یدکی اصلی',
    srv_install: 'راه‌اندازی و کالیبراسیون دستگاه',
    f_issue: 'شرح مشکل یا عیب مشاهده‌شده',
    f_subject: 'موضوع پیام',
    f_message: 'متن پیام یا مشخصات پروژه',
    f_category_interest: 'دسته‌بندی مورد نظر شما',
    f_partnership_type: 'نوع همکاری مورد نظر',
    part_dealer: 'نمایندگی انحصاری فروش استانی / منطقه‌ای',
    part_distributor: 'عامل توزیع و پخش پروژه‌ای',
    part_service: 'مرکز مجاز خدمات پس از فروش و تعمیرات',
    f_email_or_phone: 'ایمیل یا شماره همراه',
    send: 'ارسال پیام مستقیم',
    success_msg: 'پیام شما با موفقیت دریافت گردید؛ کارشناسان NovaTrade در اسرع وقت پاسخ خواهند داد.',
    err_required: 'لطفاً تمامی فیلدهای الزامی ستاره‌دار را به درستی تکمیل فرمایید.',
    err_mobile: 'شماره موبایل واردشده معتبر نیست (حداقل ۱۰ رقم عددی).',
    err_email: 'فرمت آدرس ایمیل نامعتبر است.',

    cat_pumps: 'پمپ و سیستم‌های آبرسانی',
    cat_cold: 'سرمایش و تجهیزات برودتی',
    cat_hvac: 'تهویه مطبوع و تأسیسات هوارسان',
    cat_power: 'انرژی، ژنراتور و برق اضطراری',
    cat_tools: 'ابزار و تجهیزات کارگاهی'
  },

  en: {
    meta_title: 'NovaTrade — Industrial & Commercial Equipment | 5-Language Solutions',
    meta_desc: 'Supplying premier industrial machinery, technical consultation, certified 18-month warranty and after-sales service in 5 languages.',
    nav_home: 'Home',
    nav_products: 'Products',
    nav_articles: 'Articles & Tech Insights',
    nav_club: 'Customer Club',
    nav_warranty: 'Warranty & Service',
    nav_about: 'About Us',
    nav_contact: 'Contact Us',
    nav_quote: 'Quick Quote',

    hero_badge: 'International Industrial & B2B Trading Platform',
    hero_title: 'Industrial & Commercial Equipment, Supported in Five Languages',
    hero_sub: 'Direct supply, 18-month golden warranty, and 10-year after-sales support across Iran and regional markets',
    hero_cta_products: 'Browse Product Catalog',
    hero_cta_contact: 'Request Engineering Consultation',

    stat_warranty: '18-Month Golden Warranty',
    hf_warranty_sub: '10 Years Spare Parts',
    stat_langs: '5 Support Languages',
    hf_langs_sub: 'FA / EN / AR / TR / RU',
    stat_clients: '12,000+ Corporate Clients',
    hf_clients_sub: 'Major Infrastructure Projects',
    stat_years: '18+ Years Experience',
    hf_years_sub: 'ISO 9001:2015 Certified',
    stat_models: '350+ Active Models',

    cats_badge: 'Specialized Sectors',
    cats_title: 'Specialized Equipment Categories',
    cats_sub: 'Supplying premier industrial machinery adhering to international quality standards',
    view_category: 'View Subcategories & Products',

    products_badge: 'Full Inventory',
    products_title: 'Product Catalog & Inventory',
    products_sub: 'Filter by category, subcategory, or search directly by model number',
    search_placeholder: 'Search product name, model, power or specifications...',
    filter_all: 'All Products',
    filter_subcat_label: 'Subcategories:',
    filter_subcat_all: 'All Subcategories',
    results_count: 'Showing {n} industrial products',
    reset_filter: '↺ Reset Filters',
    no_products_found: 'No products matched your criteria.',
    no_products_hint: 'Please try different keywords or reset the applied filters.',

    featured_badge: 'Top Performers',
    featured_title: 'Featured & Top-Performing Equipment',
    featured_sub: 'Engineered for high efficiency, heavy duty continuous operation and extreme endurance',

    view_product: 'View Specs & Download Catalog',
    currency: 'Toman',
    in_stock: 'In Stock & Ready for Dispatch',
    back: 'Back to Product Catalog',
    specs_title: 'Technical & Engineering Specifications',
    download_catalog: 'Download Official Datasheet (PDF)',
    watch_video: 'Watch Product Demo Video',
    order_inquiry: 'Instant WhatsApp Inquiry',
    warranty_badge: '18-Month Corporate Golden Warranty',
    warranty_highlight: 'Backed by 10-year guaranteed spare parts supply and certified regional after-sales technicians',

    home_form_badge: 'Dedicated Consulting',
    home_form_title: 'Quick Quote & Engineering Consultation',
    home_form_sub: 'Our commercial and technical specialists will contact you within 2 business hours.',
    home_form_btn: 'Submit Quote Request',
    home_form_ok: 'Your request was successfully received. Our engineering team will contact you shortly.',

    articles_badge: 'Knowledge Hub',
    articles_title: 'Technical Encyclopedia & Articles',
    articles_sub: 'Equipment selection guides, preventive maintenance checklists, and current industry standards',
    read_more: 'Read Full Technical Article',
    back_to_articles: 'Back to Articles',
    article_newsletter_title: 'Subscribe to Engineering Digest',
    article_newsletter_sub: 'Receive the latest engineering articles, guides, and standards directly in your inbox.',
    article_sub_btn: 'Subscribe to Digest',
    article_sub_ok: 'Thank you! Your subscription to our engineering digest is confirmed.',

    club_badge: 'Loyalty & VIP Program',
    club_title: 'VIP Customer & Partner Club',
    club_sub: 'Join NovaTrade partner network to access exclusive tier benefits and corporate privileges',
    club_perk1_title: 'Tiered Purchase Discounts',
    club_perk1_desc: '5% to 15% VIP discounts for commercial projects and bulk orders',
    club_perk2_title: 'Priority Spare Parts Supply',
    club_perk2_desc: 'Express dispatch of critical spare parts from regional warehouses within 24 hours',
    club_perk3_title: 'Free On-Site Engineering Audit',
    club_perk3_desc: 'Complimentary site visits by senior engineers for diagnostics and energy optimization',
    club_tier: 'Tier: Gold Partner',
    club_valid: 'Valid Thru: End of 2027',
    card_holder: 'Card Holder:',
    card_valid: 'Valid Thru:',
    card_notice: 'Your digital membership card is generated instantly upon verification.',
    club_join_title: 'Membership Application Form',
    join: 'Activate Gold Membership',
    club_registered_msg: 'Your Gold Partner membership has been issued successfully!',

    warranty_badge_top: 'Service & Authenticity',
    warranty_title: 'Golden Warranty & After-Sales Services',
    warranty_sub: 'Continuous engineering support, genuine OEM components, and real-time RMA ticket tracking',
    warranty_lookup_title: 'Serial Number Warranty Lookup',
    warranty_lookup_sub: 'Enter the serial number from your equipment rating plate (e.g. NT-88214 or NT-PMP-240)',
    warranty_lookup_btn: 'Check Warranty Status',
    warranty_claim_title: 'Submit Service Request & Technician Dispatch',
    warranty_form_sub: 'Our maintenance dispatcher will contact you within 30 minutes of ticket submission.',
    send_request: 'Submit Official RMA Request',
    warranty_terms_title: 'NovaTrade Golden Warranty Commitments',
    warranty_copy_code: 'Copy Tracking Code',
    warranty_copied: 'Copied!',
    warranty_ok_prefix: 'Your service request has been logged. Official RMA ticket:',

    about_badge: 'History & Achievements',
    about_title: 'About NovaTrade Industrial Group',
    about_lead: 'Over 18 years of excellence in engineering, industrial machinery supply, and international B2B commerce',
    about_desc: 'Established in 2007, NovaTrade began with a focused mission: delivering specialized fluid transfer, refrigeration, HVAC, power generation, and precision workshop machinery. Today, operating through hubs in Tehran, Istanbul, Dubai, and Moscow alongside an extensive distribution network, we proudly serve thousands of industrial plants, healthcare complexes, and infrastructure projects across five languages.',
    regional_hubs_title: 'International Network & Regional Hubs',
    about_partner_badge: 'Enterprise Partnerships',
    about_partner_title: 'Dealership & B2B Partnership Application',
    about_partner_sub: 'To join our provincial or international distributor network, please submit your corporate profile.',
    submit_partner_btn: 'Submit Partnership Request',
    partner_registered_ok: 'Your application has been received. Our business development team will contact you within 48 hours.',

    contact_badge: 'Communication Channels',
    contact_title: 'Contact NovaTrade Global & Regional Offices',
    contact_sub: 'Our multilingual specialists are ready to assist you via phone, messaging, or scheduled meeting.',
    ci_address_title: 'Headquarters Address:',
    address: 'No. 1240, NovaTrade Tower, Valiasr St., Tehran, Iran',
    ci_phone_title: 'Direct Telephones:',
    ci_email_title: 'Official Emails:',
    ci_hours_title: 'Operating Hours:',
    ci_hours_val: 'Saturday – Wednesday 8:30 to 17:00 | Thursday 8:30 to 13:00 (GMT+3:30)',
    contact_form_title: 'Send a Message or Consultation Inquiry',
    contact_tehran_title: 'Tehran Headquarters',
    contact_istanbul_title: 'Istanbul Regional Office',
    contact_dubai_title: 'Middle East Hub (Dubai)',
    contact_moscow_title: 'Eurasia Rep Office (Moscow)',

    footer_tagline: 'Supplying advanced industrial & commercial machinery across the Middle East & Eurasia with certified support in five countries',
    footer_links_title: 'Quick Links',
    footer_cats_title: 'Categories',
    footer_contact_title: 'Direct Contact',
    footer_rights: 'All rights reserved © 2026 NovaTrade Industrial Group — Multilingual Project Proposal Demo',

    video_title: 'NovaTrade Equipment & Engineering Demo Video',
    video_hud: 'QC TEST & CAD SIMULATION',
    video_desc: '3D simulation of hydraulic behavior, pressure testing, and vibration tolerance conforming to ISO 9001 standards at NovaTrade Central Labs.',

    qc_phone: 'Telephone Call to HQ',
    qc_phone_tip: 'Direct Call',
    qc_whatsapp: 'WhatsApp Technical Support',
    qc_bale: 'Bale Messenger Channel',
    qc_rubika: 'Rubika Support',
    qc_eitaa: 'Eitaa Official Channel',

    f_name: 'Full Name',
    f_mobile: 'Mobile / Phone Number',
    f_email: 'Email Address',
    f_company: 'Company / Organization',
    f_country: 'Country & City',
    f_department: 'Target Department',
    f_dept_sales: 'Sales & Engineering Support',
    f_dept_service: 'After-Sales & Warranty Support',
    f_dept_export: 'Export & International Trade',
    f_serial: 'Equipment Serial Number',
    f_service_type: 'Required Service Type',
    srv_repair: 'Component Overhaul & Replacement',
    srv_pm: 'Preventive Maintenance (PM)',
    srv_parts: 'Original Spare Parts Order',
    srv_install: 'Commissioning & Calibration',
    f_issue: 'Problem Description / Symptoms',
    f_subject: 'Subject',
    f_message: 'Message / Project Specifications',
    f_category_interest: 'Category of Interest',
    f_partnership_type: 'Collaboration Type',
    part_dealer: 'Exclusive Provincial / Regional Dealership',
    part_distributor: 'Project Distributor & Wholesale Agent',
    part_service: 'Authorized Regional Service Center',
    f_email_or_phone: 'Email or Mobile Number',
    send: 'Send Direct Message',
    success_msg: 'Your message has been received. Our specialists will respond promptly.',
    err_required: 'Please complete all required fields correctly.',
    err_mobile: 'Please enter a valid phone number (at least 10 digits).',
    err_email: 'Please enter a valid email address format.',

    cat_pumps: 'Pumps & Water Systems',
    cat_cold: 'Cooling & Refrigeration',
    cat_hvac: 'HVAC & Climate Control',
    cat_power: 'Power & Generators',
    cat_tools: 'Workshop Tools & Machinery'
  },

  ar: {
    meta_title: 'NovaTrade — المعدات الصناعية والتجارية | حلول هندسية بخمس لغات',
    meta_desc: 'توريد أحدث الآلات الصناعية، استشارات هندسية متخصصة، ضمان ذهبي معتمد لمدة ١٨ شهرًا وخدمات ما بعد البيع بخمس لغات.',
    nav_home: 'الرئيسية',
    nav_products: 'المنتجات',
    nav_articles: 'المقالات والأبحاث',
    nav_club: 'نادي العملاء',
    nav_warranty: 'الضمان والخدمات',
    nav_about: 'من نحن',
    nav_contact: 'اتصل بنا',
    nav_quote: 'طلب تسعيرة',

    hero_badge: 'منصة التوريدات الصناعية والتجارية الدولية',
    hero_title: 'معدات صناعية وتجارية متطورة مع دعم هندسي بخمس لغات',
    hero_sub: 'توريد مباشر وضمان ذهبي ١٨ شهرًا وخدمات ما بعد البيع لمدة ١٠ سنوات في إيران وأسواق المنطقة',
    hero_cta_products: 'تصفح كتالوج المنتجات',
    hero_cta_contact: 'طلب استشارة هندسية',

    stat_warranty: 'ضمان ذهبي ١٨ شهرًا',
    hf_warranty_sub: 'توفير قطع الغيار ١٠ سنوات',
    stat_langs: '٥ لغات معتمدة',
    hf_langs_sub: 'FA / EN / AR / TR / RU',
    stat_clients: '١٢,٠٠٠+ عميل مؤسسي',
    hf_clients_sub: 'مشاريع بنية تحتية كبرى',
    stat_years: '١٨+ عامًا من الخبرة',
    hf_years_sub: 'شهادة الجودة ISO 9001:2015',
    stat_models: '٣٥٠+ موديل معتمد',

    cats_badge: 'القطاعات المتخصصة',
    cats_title: 'فئات المعدات المتخصصة',
    cats_sub: 'توريد أفضل الآلات الصناعية المطابقة لأعلى المعايير العالمية في الجودة والكفاءة',
    view_category: 'عرض الفئات الفرعية والمنتجات',

    products_badge: 'الكتالوج الشامل',
    products_title: 'كتالوج وقائمة المنتجات',
    products_sub: 'تصفية حسب الفئة الرئيسية أو الفرعية أو البحث المباشر برمز الموديل',
    search_placeholder: 'ابحث عن اسم المنتج، الموديل، القدرة أو المواصفات الفنية...',
    filter_all: 'جميع المنتجات',
    filter_subcat_label: 'الفئات الفرعية:',
    filter_subcat_all: 'كافة الفئات الفرعية',
    results_count: 'عرض {n} منتج صناعي',
    reset_filter: '↺ إعادة ضبط الفلاتر',
    no_products_found: 'لم يتم العثور على منتجات مطابقة للمواصفات.',
    no_products_hint: 'يرجى تجربة كلمات بحث أخرى أو إعادة ضبط الفلاتر المحددة.',

    featured_badge: 'المنتجات المختارة',
    featured_title: 'المعدات الصناعية المختارة والأكثر طلبًا',
    featured_sub: 'مختارة من قبل المهندسين لكفاءتها العالية وتشغيلها الشاق المستمر في أصعب الظروف',

    view_product: 'عرض المواصفات وتنزيل الكتالوج',
    currency: 'تومان',
    in_stock: 'متوفر وجاهز للشحن الفوري',
    back: 'العودة إلى قائمة المنتجات',
    specs_title: 'المواصفات الفنية والهندسية',
    download_catalog: 'تنزيل الكتالوج الرسمي (PDF)',
    watch_video: 'فيديو استعراض المنتج',
    order_inquiry: 'استفسار فوري عبر واتساب',
    warranty_badge: 'ضمان ذهبي معتمد لمدة ١٨ شهرًا',
    warranty_highlight: 'يشمل توفير قطع الغيار الأصلية لمدة ١٠ سنوات مع دعم ميداني من مهندسين معتمدين',

    home_form_badge: 'استشارة متخصصة',
    home_form_title: 'طلب عرض أسعار واستشارة فنية سريعة',
    home_form_sub: 'سيتصل بك خبراؤنا التجاريون والفنيون خلال ساعتي عمل كحد أقصى.',
    home_form_btn: 'إرسال طلب الاستعلام',
    home_form_ok: 'تم استلام طلبك بنجاح. سيتواصل معك فريقنا الهندسي قريبًا.',

    articles_badge: 'مركز المعرفة',
    articles_title: 'المقالات والأبحاث الفنية المتخصصة',
    articles_sub: 'أدلة اختيار المعدات، قوائم الفحص الدوري للصيانة وأحدث المعايير الصناعية العالمية',
    read_more: 'قراءة المقال الفني الكامل',
    back_to_articles: 'العودة للمقالات',
    article_newsletter_title: 'الاشتراك في النشرة الفنية والهندسية',
    article_newsletter_sub: 'احصل على أحدث المقالات الفنية والإرشادات والمعايير الصناعية مباشرة في بريدك.',
    article_sub_btn: 'الاشتراك في النشرة',
    article_sub_ok: 'شكرًا لك! تم تفعيل اشتراكك في النشرة الفنية بنجاح.',

    club_badge: 'برنامج الولاء والعملاء الكبار',
    club_title: 'نادي العملاء والشركاء التجاريين',
    club_sub: 'انضم إلى شبكة شركاء NovaTrade واستفد من مزايا الفئات الذهبية والامتيازات الحصرية',
    club_perk1_title: 'خصومات شراء متدرجة',
    club_perk1_desc: 'خصومات حصرية من ٥٪ إلى ١٥٪ للمشاريع والطلبيات الكبيرة للأعضاء',
    club_perk2_title: 'أولوية فورية لقطع الغيار',
    club_perk2_desc: 'شحن فوري لقطع الغيار الأساسية من المستودعات الإقليمية خلال ٢٤ ساعة',
    club_perk3_title: 'فحص هندسي مجاني بالموقع',
    club_perk3_desc: 'زيارات ميدانية مجانية من كبار المهندسين للتشخيص وتحسين استهلاك الطاقة',
    club_tier: 'المستوى: شريك ذهبي (Gold Partner)',
    club_valid: 'صالحة حتى: نهاية ٢٠٢٧',
    card_holder: 'اسم حامل البطاقة:',
    card_valid: 'الصلاحية:',
    card_notice: 'يتم تفعيل بطاقة العضوية الرقمية فور تسجيل البيانات.',
    club_join_title: 'نموذج طلب وتفعيل العضوية',
    join: 'تفعيل العضوية الذهبية',
    club_registered_msg: 'تم تأكيد عضويتك بمستوى الشريك الذهبي وإصدار بطاقتك بنجاح!',

    warranty_badge_top: 'الخدمة والأصالة',
    warranty_title: 'الضمان الذهبي وخدمات ما بعد البيع',
    warranty_sub: 'دعم فني متواصل وتوفير قطع الغيار الأصلية ونظام ذكي لتتبع طلبات الصيانة',
    warranty_lookup_title: 'استعلام صحة وحالة الضمان بالرقم التسلسلي',
    warranty_lookup_sub: 'أدخل الرقم التسلسلي الموجود على لوحة بيانات الجهاز (مثال: NT-88214 أو NT-PMP-240)',
    warranty_lookup_btn: 'التحقق من حالة الجهاز',
    warranty_claim_title: 'تسجيل طلب صيانة وإيفاد فني',
    warranty_form_sub: 'سيتواصل معك منسق الصيانة خلال ٣٠ دقيقة من تقديم الطلب.',
    send_request: 'تسجيل طلب الضمان رسميًا',
    warranty_terms_title: 'شروط والتزامات الضمان الذهبي من NovaTrade',
    warranty_copy_code: 'نسخ رمز التتبع',
    warranty_copied: 'تم النسخ!',
    warranty_ok_prefix: 'تم تسجيل طلب الصيانة الخاص بك بنجاح. رمز التتبع الرسمي:',

    about_badge: 'المسيرة والإنجازات',
    about_title: 'عن مجموعة NovaTrade الصناعية والتجارية',
    about_lead: 'أكثر من ١٨ عامًا من الريادة في الهندسة وتوريد الآلات الصناعية وتطوير الشراكات التجارية بالمنطقة',
    about_desc: 'تأسست مجموعة NovaTrade في عام ٢٠٠٧ بهدف تقديم حلول متخصصة في نقل السوائل، والتبريد، والتكييف، وتوليد الطاقة، ومعدات الورش الصناعية. اليوم، من خلال مكاتبنا في طهران وإسطنبول ودبي وموسكو وشبكة موزعينا، نقدم خدماتنا لآلاف المصانع والمجمعات الطبية والمشاريع الإنشائية بخمس لغات عالمية.',
    regional_hubs_title: 'الشبكة الدولية والمراكز الإقليمية لـ NovaTrade',
    about_partner_badge: 'الشراكات الكبرى',
    about_partner_title: 'طلب الحصول على وكالة وشراكة تجارية (B2B)',
    about_partner_sub: 'إذا كنت ترغب بالانضمام إلى شبكة وكلائنا وموزعينا المعتمدين، يرجى ملء النموذج أدناه.',
    submit_partner_btn: 'إرسال طلب الوكالة',
    partner_registered_ok: 'تم تسجيل طلب الشراكة. ستتواصل معك إدارة تطوير الأعمال خلال ٤٨ ساعة.',

    contact_badge: 'قنوات الاتصال',
    contact_title: 'التواصل مع المكاتب المركزية والإقليمية لـ NovaTrade',
    contact_sub: 'فريقنا المتحدث بخمس لغات مستعد للإجابة على استفساراتكم وترتيب الاجتماعات الحضورية والافتراضية.',
    ci_address_title: 'عنوان المقر الرئيسي:',
    address: 'طهران، شارع ولي عصر، أعلى ميدان ونك، رقم ١٢٤٠، برج NovaTrade',
    ci_phone_title: 'أرقام الهواتف المباشرة:',
    ci_email_title: 'البريد الإلكتروني الرسمي:',
    ci_hours_title: 'ساعات العمل الرسمية:',
    ci_hours_val: 'من السبت إلى الأربعاء ٨:٣٠ حتى ١٧:٠٠ | الخميس ٨:٣٠ حتى ١٣:٠٠',
    contact_form_title: 'إرسال رسالة أو طلب استشارة',
    contact_tehran_title: 'المقر الرئيسي — طهران',
    contact_istanbul_title: 'المكتب الإقليمي — إسطنبول',
    contact_dubai_title: 'مركز الشرق الأوسط التجاري — دبي',
    contact_moscow_title: 'مكتب منطقة أوراسيا — موسكو',

    footer_tagline: 'توريد الآلات والمعدات الصناعية المتقدمة في الشرق الأوسط وأوراسيا مع دعم رسمي في خمس دول',
    footer_links_title: 'روابط سريعة',
    footer_cats_title: 'الفئات الرئيسية',
    footer_contact_title: 'الاتصال المباشر',
    footer_rights: 'جميع الحقوق محفوظة © ٢٠٢٦ لمجموعة NovaTrade الصناعية — نموذج عرض المشروع بخمس لغات',

    video_title: 'فيديو استعراض المعدات والخطوط الإنتاجية لـ NovaTrade',
    video_hud: 'QC TEST & CAD SIMULATION',
    video_desc: 'محاكاة ثلاثية الأبعاد للأداء الهيدروليكي، اختبارات الضغط والاهتزاز وفق معايير ISO 9001 في مختبرات NovaTrade المركزية.',

    qc_phone: 'اتصال هاتفي بالمقر',
    qc_phone_tip: 'اتصال مباشر',
    qc_whatsapp: 'الدعم الفني عبر واتساب',
    qc_bale: 'قناة تطبيق بله',
    qc_rubika: 'الدعم عبر روبيكا',
    qc_eitaa: 'القناة الرسمية على إيتا',

    f_name: 'الاسم الكامل',
    f_mobile: 'رقم الهاتف / الجوال',
    f_email: 'البريد الإلكتروني',
    f_company: 'اسم الشركة / المؤسسة',
    f_country: 'الدولة والمدينة',
    f_department: 'القسم المعني',
    f_dept_sales: 'المبيعات والاستشارات الهندسية',
    f_dept_service: 'خدمات ما بعد البيع والضمان',
    f_dept_export: 'التجارة الدولية والتصدير',
    f_serial: 'الرقم التسلسلي للجهاز',
    f_service_type: 'نوع الخدمة المطلوبة',
    srv_repair: 'صيانة شاملة واستبدال قطع',
    srv_pm: 'صيانة دورية وقائية (PM)',
    srv_parts: 'طلب قطع غيار أصلية',
    srv_install: 'تشغيل ومعايرة الجهاز',
    f_issue: 'وصف العطل أو الأعراض الملاحظة',
    f_subject: 'موضوع الرسالة',
    f_message: 'نص الرسالة أو المواصفات',
    f_category_interest: 'فئة المعدات المطلوبة',
    f_partnership_type: 'نوع الشراكة المطلوبة',
    part_dealer: 'وكالة حصرية للمبيعات في المنطقة / المحافظة',
    part_distributor: 'موزع معتمد ووكيل مشاريع',
    part_service: 'مركز صيانة وخدمات معتمد',
    f_email_or_phone: 'البريد الإلكتروني أو الهاتف',
    send: 'إرسال الرسالة المباشرة',
    success_msg: 'تم استلام رسالتك بنجاح؛ سيرد متخصصو NovaTrade في أقرب وقت.',
    err_required: 'يرجى إكمال جميع الحقول الإلزامية المطلوبة بشكل صحيح.',
    err_mobile: 'رقم الهاتف أو الجوال المدخل غير صحيح (١٠ أرقام على الأقل).',
    err_email: 'صيغة البريد الإلكتروني غير صحيحة.',

    cat_pumps: 'المضخات وأنظمة معالجة المياه',
    cat_cold: 'التبريد والتجميد التجاري',
    cat_hvac: 'التكييف والتهوية والتحكم المناخي',
    cat_power: 'توليد الطاقة وأنظمة الطوارئ',
    cat_tools: 'الأدوات ومعدات الورش الصناعية'
  },

  tr: {
    meta_title: 'NovaTrade — Endüstriyel ve Ticari Ekipmanlar | Beş Dilli Çözümler',
    meta_desc: '5 dilde endüstriyel makine tedariği, mühendislik danışmanlığı, 18 ay altın garanti ve satış sonrası teknik servis.',
    nav_home: 'Ana Sayfa',
    nav_products: 'Ürünler',
    nav_articles: 'Makaleler ve Bilgi Merkezi',
    nav_club: 'Müşteri Kulübü',
    nav_warranty: 'Garanti ve Servis',
    nav_about: 'Hakkımızda',
    nav_contact: 'İletişim',
    nav_quote: 'Hızlı Teklif',

    hero_badge: 'Uluslararası Endüstriyel ve B2B Ticaret Platformu',
    hero_title: 'Beş Dilde Uzman Destekli Endüstriyel ve Ticari Ekipmanlar',
    hero_sub: 'İran ve bölge pazarlarında doğrudan tedarik, 18 ay altın garanti ve 10 yıl teknik servis desteği',
    hero_cta_products: 'Ürün Kataloğuna Göz At',
    hero_cta_contact: 'Teknik Danışmanlık İste',

    stat_warranty: '18 Ay Altın Garanti',
    hf_warranty_sub: '10 Yıl Yedek Parça',
    stat_langs: '5 Destek Dili',
    hf_langs_sub: 'FA / EN / AR / TR / RU',
    stat_clients: '12.000+ Kurumsal Müşteri',
    hf_clients_sub: 'Büyük Altyapı Projeleri',
    stat_years: '18+ Yıllık Tecrübe',
    hf_years_sub: 'ISO 9001:2015 Sertifikalı',
    stat_models: '350+ Aktif Model',

    cats_badge: 'Uzman Sektörler',
    cats_title: 'Uzman Ekipman Kategorileri',
    cats_sub: 'Uluslararası kalite standartlarına uygun birinci sınıf endüstriyel makine ve donanım tedariği',
    view_category: 'Alt Kategorileri ve Ürünleri Gör',

    products_badge: 'Geniş Envanter',
    products_title: 'Ürün Kataloğu ve Envanteri',
    products_sub: 'Kategori, alt kategori veya doğrudan model koduna göre filtreleyin',
    search_placeholder: 'Ürün adı, model, güç veya teknik özellik ara...',
    filter_all: 'Tüm Ürünler',
    filter_subcat_label: 'Alt Kategoriler:',
    filter_subcat_all: 'Tüm Alt Kategoriler',
    results_count: '{n} endüstriyel ürün gösteriliyor',
    reset_filter: '↺ Filtreleri Sıfırla',
    no_products_found: 'Seçilen kriterlere uygun ürün bulunamadı.',
    no_products_hint: 'Lütfen farklı anahtar kelimeler deneyin veya filtreleri temizleyin.',

    featured_badge: 'Öne Çıkanlar',
    featured_title: 'Öne Çıkan ve Çok Satan Sanayi Ekipmanları',
    featured_sub: 'Yüksek verimlilik, ağır hizmet tipi sürekli çalışma ve uzun ömür için mühendislerin tercihi',

    view_product: 'Özellikleri Gör ve Kataloğu İndir',
    currency: 'Tümen',
    in_stock: 'Stokta ve Sevkiyata Hazır',
    back: 'Ürün Listesine Dön',
    specs_title: 'Teknik ve Mühendislik Özellikleri',
    download_catalog: 'Resmi Kataloğu İndir (PDF)',
    watch_video: 'Tanıtım Videosunu İzle',
    order_inquiry: 'WhatsApp ile Hızlı Danışma',
    warranty_badge: '18 Ay Kurumsal Altın Garanti',
    warranty_highlight: '10 yıl garantili yedek parça temini ve yetkili bölge servis mühendisleri ile desteklenmektedir',

    home_form_badge: 'Özel Danışmanlık',
    home_form_title: 'Hızlı Fiyat Teklifi ve Teknik Danışmanlık',
    home_form_sub: 'Ticari ve teknik uzmanlarımız en geç 2 çalışma saati içinde sizinle iletişime geçecektir.',
    home_form_btn: 'Teklif Talebini Gönder',
    home_form_ok: 'Talebiniz başarıyla alındı. Mühendislik ekibimiz kısa süre içinde sizinle iletişime geçecektir.',

    articles_badge: 'Bilgi Merkezi',
    articles_title: 'Teknik Makaleler ve Bilgi Merkezi',
    articles_sub: 'Ekipman seçim rehberleri, önleyici bakım kontrol listeleri ve güncel endüstriyel standartlar',
    read_more: 'Teknik Makaleyi Oku',
    back_to_articles: 'Makalelere Dön',
    article_newsletter_title: 'Mühendislik Bültenine Abone Olun',
    article_newsletter_sub: 'En son teknik makaleleri, rehberleri ve standartları doğrudan e-postanıza alın.',
    article_sub_btn: 'Bültene Kaydol',
    article_sub_ok: 'Teşekkürler! Mühendislik bültenimize aboneliğiniz onaylandı.',

    club_badge: 'Sadakat ve VIP Programı',
    club_title: 'VIP Müşteri ve İş Ortakları Kulübü',
    club_sub: 'NovaTrade iş ortağı ağına katılın, kademeli avantajlara ve kurumsal ayrıcalıklara erişin',
    club_perk1_title: 'Kademeli Satın Alma İndirimleri',
    club_perk1_desc: 'Kurumsal projeler ve toplu siparişler için üyelere %5 ila %15 özel indirim',
    club_perk2_title: 'Öncelikli Yedek Parça Temini',
    club_perk2_desc: 'Kritik yedek parçaların 24 saat içinde bölge depolarından hızlı sevkiyatı',
    club_perk3_title: 'Ücretsiz Yerinde Teknik Keşif',
    club_perk3_desc: 'Kıdemli mühendisler tarafından teşhis ve enerji optimizasyonu için ücretsiz saha ziyareti',
    club_tier: 'Kategori: Altın Ortak (Gold Partner)',
    club_valid: 'Geçerlilik: 2027 Sonu',
    card_holder: 'Kart Sahibi:',
    card_valid: 'Geçerlilik:',
    card_notice: 'Dijital üyelik kartınız başvuru onaylandığında anında oluşturulur.',
    club_join_title: 'Üyelik Başvuru ve Aktivasyon Formu',
    join: 'Altın Üyeliği Aktifleştir',
    club_registered_msg: 'Altın Ortak üyeliğiniz başarıyla onaylandı ve kartınız oluşturuldu!',

    warranty_badge_top: 'Hizmet ve Orijinallik',
    warranty_title: 'Altın Garanti ve Satış Sonrası Hizmetler',
    warranty_sub: 'Kesintisiz teknik destek, orijinal yedek parça temini ve akıllı servis takip sistemi',
    warranty_lookup_title: 'Seri Numarası ile Garanti Sorgulama',
    warranty_lookup_sub: 'Cihaz bilgi etiketindeki seri numarasını girin (Örn: NT-88214 veya NT-PMP-240)',
    warranty_lookup_btn: 'Garanti Durumunu Sorgula',
    warranty_claim_title: 'Teknik Servis Talebi ve Uzman Yönlendirme',
    warranty_form_sub: 'Talep oluşturulduktan sonra servis koordinatörümüz 30 dakika içinde sizinle iletişime geçecektir.',
    send_request: 'Resmi Servis Talebini Gönder',
    warranty_terms_title: 'NovaTrade Altın Garanti Şartları ve Taahhütleri',
    warranty_copy_code: 'Takip Kodunu Kopyala',
    warranty_copied: 'Kopyalandı!',
    warranty_ok_prefix: 'Servis talebiniz sisteme kaydedildi. Resmi takip kodunuz:',

    about_badge: 'Geçmiş ve Başarılar',
    about_title: 'NovaTrade Sanayi ve Ticaret Grubu Hakkında',
    about_lead: 'Mühendislik, sanayi makineleri tedariği ve bölgesel B2B ticaretinde 18 yılı aşkın liderlik',
    about_desc: '2007 yılında kurulan NovaTrade Sanayi Grubu, akışkan transferi, soğutma sistemleri, HVAC, enerji jeneratörleri ve atölye ekipmanları alanında uzmanlaşmıştır. Bugün Tahran, İstanbul, Dubai ve Moskova ofisleri ve geniş bayi ağıyla beş farklı dilde binlerce sanayi tesisi, hastane ve altyapı projesine güvenilir hizmet sunmaktadır.',
    regional_hubs_title: 'NovaTrade Uluslararası Ağı ve Bölge Merkezleri',
    about_partner_badge: 'Kurumsal Ortaklıklar',
    about_partner_title: 'Bayilik ve B2B İş Ortaklığı Başvurusu',
    about_partner_sub: 'Bölgesel veya uluslararası distribütör ağımıza katılmak için lütfen kurumsal bilgilerinizi iletin.',
    submit_partner_btn: 'Bayilik Talebini Gönder',
    partner_registered_ok: 'İş ortaklığı başvurunuz alındı. İş geliştirme departmanımız 48 saat içinde sizinle iletişime geçecektir.',

    contact_badge: 'İletişim Kanalları',
    contact_title: 'NovaTrade Genel Merkez ve Bölge Ofisleri İletişim',
    contact_sub: 'Beş dilde hizmet veren uzmanlarımız telefon, mesajlaşma veya toplantı için hazırdır.',
    ci_address_title: 'Genel Merkez Adresi:',
    address: 'Valiasr Cad., Vanak Meydanı Üstü, No: 1240, NovaTrade Kulesi, Tahran',
    ci_phone_title: 'Doğrudan Telefon Hatları:',
    ci_email_title: 'Resmi E-posta Adresleri:',
    ci_hours_title: 'Çalışma Saatleri:',
    ci_hours_val: 'Cumartesi – Çarşamba 08:30 – 17:00 | Perşembe 08:30 – 13:00',
    contact_form_title: 'Mesaj Gönderin veya Danışmanlık İsteyin',
    contact_tehran_title: 'Tahran Genel Merkez',
    contact_istanbul_title: 'İstanbul Bölge Ofisi',
    contact_dubai_title: 'Orta Doğu Ticaret Merkezi (Dubai)',
    contact_moscow_title: 'Avrasya Temsilciliği (Moskova)',

    footer_tagline: 'Orta Doğu ve Avrasya genelinde beş ülkede resmi destekle gelişmiş endüstriyel makineler tedariği',
    footer_links_title: 'Hızlı Erişim',
    footer_cats_title: 'Kategoriler',
    footer_contact_title: 'Doğrudan İletişim',
    footer_rights: 'Tüm hakları saklıdır © 2026 NovaTrade Sanayi Grubu — Beş Dilli Proje Teklif Demosu',

    video_title: 'NovaTrade Ekipman ve Üretim Hattı Tanıtım Videosu',
    video_hud: 'QC TEST & CAD SIMULATION',
    video_desc: 'NovaTrade Merkez Laboratuvarlarında ISO 9001 standartlarına uygun hidrolik performans, basınç ve titreşim toleransı 3D simülasyonu.',

    qc_phone: 'Merkezi Ara',
    qc_phone_tip: 'Doğrudan Arama',
    qc_whatsapp: 'WhatsApp Teknik Destek',
    qc_bale: 'Bale Kanalı',
    qc_rubika: 'Rubika İletişim',
    qc_eitaa: 'Eitaa Resmi Kanalı',

    f_name: 'Ad Soyad',
    f_mobile: 'Cep Telefonu / İletişim',
    f_email: 'E-posta Adresi',
    f_company: 'Şirket / Kuruluş Adı',
    f_country: 'Ülke ve Şehir',
    f_department: 'İlgili Departman',
    f_dept_sales: 'Satış ve Mühendislik Desteği',
    f_dept_service: 'Satış Sonrası Servis ve Garanti',
    f_dept_export: 'Dış Ticaret ve İhracat',
    f_serial: 'Cihaz Seri Numarası',
    f_service_type: 'Talep Edilen Hizmet Türü',
    srv_repair: 'Uzman Onarım ve Parça Değişimi',
    srv_pm: 'Periyodik Önleyici Bakım (PM)',
    srv_parts: 'Orijinal Yedek Parça Siparişi',
    srv_install: 'Devreye Alma ve Kalibrasyon',
    f_issue: 'Sorun Açıklaması veya Belirtiler',
    f_subject: 'Konu',
    f_message: 'Mesajınız veya Proje Özellikleri',
    f_category_interest: 'İlgilendiğiniz Kategori',
    f_partnership_type: 'İş Birliği Türü',
    part_dealer: 'Bölgesel / İl Bazında Yetkili Satıcılık',
    part_distributor: 'Proje Distribütörü ve Toptancı Bayi',
    part_service: 'Yetkili Bölge Servis Merkezi',
    f_email_or_phone: 'E-posta veya Telefon',
    send: 'Mesajı Gönder',
    success_msg: 'Mesajınız başarıyla alındı; uzmanlarımız en kısa sürede yanıt verecektir.',
    err_required: 'Lütfen tüm zorunlu alanları eksiksiz ve doğru doldurunuz.',
    err_mobile: 'Lütfen geçerli bir telefon numarası giriniz (en az 10 rakam).',
    err_email: 'Lütfen geçerli bir e-posta adresi giriniz.',

    cat_pumps: 'Pompa ve Su Teknolojileri',
    cat_cold: 'Endüstriyel Soğutma Sistemleri',
    cat_hvac: 'İklimlendirme ve Havalandırma (HVAC)',
    cat_power: 'Güç Sistemleri ve Jeneratörler',
    cat_tools: 'Atölye ve Sanayi Ekipmanları'
  },

  ru: {
    meta_title: 'NovaTrade — Промышленное и торговое оборудование | Пятиязычные решения',
    meta_desc: 'Поставки промышленного оборудования, технический консалтинг, сертифицированная гарантия 18 месяцев и сервис на 5 языках.',
    nav_home: 'Главная',
    nav_products: 'Продукция',
    nav_articles: 'Статьи и база знаний',
    nav_club: 'Клуб клиентов',
    nav_warranty: 'Гарантия и сервис',
    nav_about: 'О компании',
    nav_contact: 'Контакты',
    nav_quote: 'Запрос КП',

    hero_badge: 'Международная торгово-промышленная платформа B2B',
    hero_title: 'Промышленное и коммерческое оборудование с поддержкой на пяти языках',
    hero_sub: 'Прямые поставки, 18 месяцев золотой гарантии и 10 лет сервисной поддержки в Иране и странах региона',
    hero_cta_products: 'Каталог продукции',
    hero_cta_contact: 'Запросить инженерную консультацию',

    stat_warranty: '18 месяцев гарантии',
    hf_warranty_sub: 'Поставка запчастей 10 лет',
    stat_langs: '5 рабочих языков',
    hf_langs_sub: 'FA / EN / AR / TR / RU',
    stat_clients: '12 000+ корпоративных клиентов',
    hf_clients_sub: 'Крупные инфраструктурные объекты',
    stat_years: '18+ лет опыта',
    hf_years_sub: 'Сертификат ISO 9001:2015',
    stat_models: '350+ позиций в каталоге',

    cats_badge: 'Отраслевые направления',
    cats_title: 'Специализированные категории оборудования',
    cats_sub: 'Поставка первоклассного промышленного оборудования по международным стандартам качества',
    view_category: 'Смотреть подкатегории и товары',

    products_badge: 'Полный каталог',
    products_title: 'Каталог и перечень продукции',
    products_sub: 'Фильтр по категориям, подкатегориям или прямой поиск по коду модели',
    search_placeholder: 'Поиск по названию, модели, мощности или параметрам...',
    filter_all: 'Все товары',
    filter_subcat_label: 'Подкатегории:',
    filter_subcat_all: 'Все подкатегории',
    results_count: 'Показано {n} промышленных товаров',
    reset_filter: '↺ Сбросить фильтры',
    no_products_found: 'По выбранным критериям товары не найдены.',
    no_products_hint: 'Попробуйте изменить поисковый запрос или сбросить фильтры.',

    featured_badge: 'Лидеры продаж',
    featured_title: 'Избранное промышленное оборудование',
    featured_sub: 'Выбор инженеров для непрерывной эксплуатации с высоким КПД и надежностью в тяжелых условиях',

    view_product: 'Характеристики и каталог',
    currency: 'томанов',
    in_stock: 'В наличии на центральном складе',
    back: 'Назад к списку товаров',
    specs_title: 'Технические характеристики',
    download_catalog: 'Скачать официальный каталог (PDF)',
    watch_video: 'Смотреть видеообзор продукта',
    order_inquiry: 'Быстрый запрос в WhatsApp',
    warranty_badge: '18 месяцев заводской золотой гарантии',
    warranty_highlight: '10 лет гарантированной поставки запчастей и авторизованная сервисная служба в странах региона',

    home_form_badge: 'Консультация инженера',
    home_form_title: 'Запрос коммерческого предложения и консультация',
    home_form_sub: 'Наши технические специалисты свяжутся с вами в течение 2 рабочих часов.',
    home_form_btn: 'Отправить запрос КП',
    home_form_ok: 'Ваш запрос успешно принят. Наш инженер свяжется с вами в ближайшее время.',

    articles_badge: 'База знаний',
    articles_title: 'Технические статьи и база знаний',
    articles_sub: 'Руководства по выбору оборудования, чек-листы ТО и современные промышленные нормативы',
    read_more: 'Читать статью полностью',
    back_to_articles: 'Назад к статьям',
    article_newsletter_title: 'Подписка на инженерный дайджест',
    article_newsletter_sub: 'Получайте свежие технические статьи, каталоги и нормативы на вашу электронную почту.',
    article_sub_btn: 'Подписаться на дайджест',
    article_sub_ok: 'Спасибо! Ваша подписка на технический дайджест успешно оформлена.',

    club_badge: 'Программа лояльности',
    club_title: 'Клуб корпоративных клиентов и партнёров',
    club_sub: 'Вступайте в клуб партнёров NovaTrade и получайте эксклюзивные корпоративные привилегии',
    club_perk1_title: 'Прогрессивные скидки на закупку',
    club_perk1_desc: 'Специальные скидки от 5% до 15% на проектные и оптовые поставки для участников клуба',
    club_perk2_title: 'Приоритетная поставка запчастей',
    club_perk2_desc: 'Экспресс-отгрузка критических запасных частей с региональных складов за 24 часа',
    club_perk3_title: 'Бесплатный выездной энергоаудит',
    club_perk3_desc: 'Выезд ведущих инженеров для диагностики технологических линий и энергооптимизации',
    club_tier: 'Уровень: Золотой партнёр (Gold Partner)',
    club_valid: 'Действительно до: конца 2027',
    card_holder: 'Держатель карты:',
    card_valid: 'Срок действия:',
    card_notice: 'Цифровая карта участника активируется сразу после проверки данных.',
    club_join_title: 'Форма регистрации и активации карты',
    join: 'Активировать золотое членство',
    club_registered_msg: 'Ваше членство уровня Gold Partner подтверждено, карта выпущена!',

    warranty_badge_top: 'Сервис и подлинность',
    warranty_title: 'Золотая гарантия и сервисное обслуживание',
    warranty_sub: 'Непрерывная инженерная поддержка, оригинальные комплектующие и отслеживание заявок онлайн',
    warranty_lookup_title: 'Проверка гарантии по серийному номеру',
    warranty_lookup_sub: 'Введите серийный номер с шильдика оборудования (например, NT-88214 или NT-PMP-240)',
    warranty_lookup_btn: 'Проверить статус гарантии',
    warranty_claim_title: 'Заявка на сервисное обслуживание и выезд инженера',
    warranty_form_sub: 'После отправки заявки диспетчер свяжется с вами в течение 30 минут.',
    send_request: 'Зарегистрировать сервисную заявку',
    warranty_terms_title: 'Условия и обязательства гарантии NovaTrade',
    warranty_copy_code: 'Скопировать код',
    warranty_copied: 'Скопировано!',
    warranty_ok_prefix: 'Ваша заявка зарегистрирована. Номер сервисного тикета:',

    about_badge: 'История и масштаб',
    about_title: 'О торгово-промышленной группе NovaTrade',
    about_lead: 'Более 18 лет лидерства в инжиниринге, поставках промышленного оборудования и международной торговле',
    about_desc: 'Группа компаний NovaTrade основана в 2007 году с целью профессиональных поставок насосного, холодильного, климатического, энергетического и цехового оборудования. Сегодня через офисы в Тегеране, Стамбуле, Дубае и Москве и сеть дистрибуции мы обеспечиваем надежную работу тысяч заводов, медицинских центров и инфраструктурных объектов на 5 языках.',
    regional_hubs_title: 'Международная сеть и представительства NovaTrade',
    about_partner_badge: 'Корпоративное партнерство',
    about_partner_title: 'Заявка на дилерство и партнёрство B2B',
    about_partner_sub: 'Если вы заинтересованы стать региональным дилером или партнером, отправьте заявку.',
    submit_partner_btn: 'Отправить заявку на дилерство',
    partner_registered_ok: 'Ваша заявка принята. Департамент развития бизнеса свяжется с вами в течение 48 часов.',

    contact_badge: 'Контакты',
    contact_title: 'Контакты головного и региональных офисов NovaTrade',
    contact_sub: 'Наши специалисты на 5 языках готовы ответить на любые вопросы и организовать встречу.',
    ci_address_title: 'Адрес головного офиса:',
    address: 'Тегеран, ул. Валиаср, выше пл. Ванак, д. 1240, башня NovaTrade',
    ci_phone_title: 'Прямые телефонные линии:',
    ci_email_title: 'Официальные адреса эл. почты:',
    ci_hours_title: 'График работы:',
    ci_hours_val: 'Суббота – Среда с 08:30 до 17:00 | Четверг с 08:30 до 13:00',
    contact_form_title: 'Отправить сообщение или запрос',
    contact_tehran_title: 'Головной офис в Тегеране',
    contact_istanbul_title: 'Региональный офис в Стамбуле',
    contact_dubai_title: 'Торговый хаб в Дубае',
    contact_moscow_title: 'Представительство в Москве',

    footer_tagline: 'Поставка передового промышленного оборудования в странах Ближнего Востока и ЕАЭС с официальной поддержкой в пяти странах',
    footer_links_title: 'Быстрые ссылки',
    footer_cats_title: 'Категории',
    footer_contact_title: 'Прямая связь',
    footer_rights: 'Все права защищены © 2026 NovaTrade Industrial Group — Пятиязычная демо-версия для проекта',

    video_title: 'Видеопрезентация оборудования и производства NovaTrade',
    video_hud: 'QC TEST & CAD SIMULATION',
    video_desc: '3D-моделирование гидродинамики, испытания под давлением и контроль вибрации по ISO 9001 в лаборатории NovaTrade.',

    qc_phone: 'Позвонить в офис',
    qc_phone_tip: 'Прямой звонок',
    qc_whatsapp: 'Консультация в WhatsApp',
    qc_bale: 'Канал в мессенджере Bale',
    qc_rubika: 'Поддержка в Rubika',
    qc_eitaa: 'Официальный канал в Eitaa',

    f_name: 'ФИО',
    f_mobile: 'Номер телефона',
    f_email: 'Электронная почта',
    f_company: 'Компания / Организация',
    f_country: 'Страна и город',
    f_department: 'Отдел компании',
    f_dept_sales: 'Отдел продаж и поставок',
    f_dept_service: 'Гарантийный сервис и ТО',
    f_dept_export: 'Экспорт и ВЭД',
    f_serial: 'Серийный номер устройства',
    f_service_type: 'Требуемый вид сервиса',
    srv_repair: 'Капитальный ремонт и замена узлов',
    srv_pm: 'Плановое техническое обслуживание (ТО)',
    srv_parts: 'Заказ оригинальных запчастей',
    srv_install: 'Шеф-монтаж и калибровка',
    f_issue: 'Описание неисправности или симптомы',
    f_subject: 'Тема обращения',
    f_message: 'Текст сообщения или ТЗ',
    f_category_interest: 'Интересующая категория',
    f_partnership_type: 'Форма сотрудничества',
    part_dealer: 'Эксклюзивное региональное дилерство',
    part_distributor: 'Проектный дистрибьютор и оптовик',
    part_service: 'Авторизованный сервисный центр',
    f_email_or_phone: 'Email или номер телефона',
    send: 'Отправить сообщение',
    success_msg: 'Ваше сообщение принято; специалисты NovaTrade ответят в ближайшее время.',
    err_required: 'Пожалуйста, корректно заполните все обязательные поля.',
    err_mobile: 'Укажите корректный номер телефона (не менее 10 цифр).',
    err_email: 'Укажите корректный адрес электронной почты.',

    cat_pumps: 'Насосные системы и водоснабжение',
    cat_cold: 'Холодильное и морозильное оборудование',
    cat_hvac: 'Вентиляция и кондиционирование (HVAC)',
    cat_power: 'Энергетика и резервное питание',
    cat_tools: 'Инструменты и цеховое оснащение'
  }
};

/* ---------- Current Language State with Persistence ---------- */
let lang = 'fa';
try {
  const saved = localStorage.getItem('novatrade_preferred_lang');
  if (saved && LANGS[saved]) {
    lang = saved;
  }
} catch (e) {
  // localStorage disabled or private mode
}

const t = k => (T[lang] && T[lang][k]) || T.en[k] || k;
const $ = id => document.getElementById(id);

/* ---------- Dynamic SVG Fallback Illustrations ---------- */
function getCategorySvgFallback(catId, title) {
  const safeTitle = (title || 'NovaTrade Industrial').replace(/</g, '').replace(/>/g, '');
  const colors = {
    pumps: { g1: '#0284c7', g2: '#0369a1', icon: 'M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83' },
    cold: { g1: '#0284c7', g2: '#1e3a8a', icon: 'M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93' },
    hvac: { g1: '#0d9488', g2: '#115e59', icon: 'M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm0 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10z' },
    power: { g1: '#b45309', g2: '#78350f', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
    tools: { g1: '#475569', g2: '#1e293b', icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6-8.5 8.5a2 2 0 0 1-1.4.6H4v-2.4c0-.5.2-1 .6-1.4l8.5-8.5 1.6 1.6z' }
  };
  const c = colors[catId] || colors.tools;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${c.g1}"/>
        <stop offset="100%" stop-color="${c.g2}"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#bg)"/>
    <circle cx="300" cy="180" r="90" fill="rgba(255,255,255,0.08)"/>
    <g transform="translate(260, 140) scale(1.6)" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="${c.icon}"/>
    </g>
    <text x="300" y="320" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">${safeTitle}</text>
    <text x="300" y="350" font-family="system-ui, sans-serif" font-size="13" fill="rgba(255,255,255,0.75)" text-anchor="middle">NovaTrade Industrial Certified Equipment</text>
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

/* ---------- Curated Product Imagery ---------- */
const IMG = {
  pump1: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80',
  pump2: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80',
  pump3: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80',
  cold1: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=900&q=80',
  cold2: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=900&q=80',
  cold3: 'https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=900&q=80',
  hvac1: 'https://images.unsplash.com/photo-1631545806609-24040d63f8f7?w=900&q=80',
  hvac2: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=900&q=80',
  hvac3: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80',
  gen1: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&q=80',
  gen2: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=900&q=80',
  gen3: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=900&q=80',
  tool1: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=900&q=80',
  tool2: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=900&q=80',
  scale1: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80',
  article1: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80',
  article2: 'https://images.unsplash.com/photo-1631545806609-24040d63f8f7?w=900&q=80',
  article3: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&q=80'
};

/* ---------- Categories Database (5 Categories with Subcategories) ---------- */
const CATEGORIES = [
  {
    id: 'pumps',
    icon: '💧',
    name: {
      fa: 'پمپ و سیستم‌های آبرسانی',
      en: 'Pumps & Water Systems',
      ar: 'المضخات وأنظمة معالجة المياه',
      tr: 'Pompa ve Su Teknolojileri',
      ru: 'Насосные системы и водоснабжение'
    },
    subs: [
      { id: 'ind_pump', name: { fa: 'پمپ سانتریفیوژ صنعتی', en: 'Industrial Centrifugal Pumps', ar: 'مضخات صناعية طاردة', tr: 'Endüstriyel Santrifüj Pompa', ru: 'Промышленные центробежные насосы' } },
      { id: 'booster', name: { fa: 'بوستر پمپ دور متغیر', en: 'Variable Speed Booster Sets', ar: 'معززات ضغط ذكية', tr: 'Frekans Kontrollü Hidrofor', ru: 'Насосные станции с ЧРП' } },
      { id: 'pool_pump', name: { fa: 'پمپ تصفیه و استخر', en: 'Pool & Filtration Pumps', ar: 'مضخات المسابح والفلترة', tr: 'Havuz ve Arıtma Pompaları', ru: 'Насосы для бассейнов' } }
    ]
  },
  {
    id: 'cold',
    icon: '❄️',
    name: {
      fa: 'سرمایش و تجهیزات برودتی',
      en: 'Cooling & Refrigeration',
      ar: 'التبريد والتجميد التجاري',
      tr: 'Endüstriyel Soğutma Sistemleri',
      ru: 'Холодильное и морозильное оборудование'
    },
    subs: [
      { id: 'fridges', name: { fa: 'یخچال صنعتی استیل', en: 'Industrial Stainless Fridges', ar: 'ثلاجات صناعية ستانلس', tr: 'Sanayi Tipi Buzdolapları', ru: 'Промышленные холодильные шкафы' } },
      { id: 'freezers', name: { fa: 'فریزر صندوقی صنعتی', en: 'Commercial Chest Freezers', ar: 'مجمدات صندوقية', tr: 'Derin Dondurucular', ru: 'Морозильные лари' } },
      { id: 'coldrooms', name: { fa: 'سردخانه و رک برودتی', en: 'Modular Cold Rooms', ar: 'غرف تبريد وتجميد', tr: 'Soğuk Hava Depoları', ru: 'Модульные холодильные камеры' } }
    ]
  },
  {
    id: 'hvac',
    icon: '🌀',
    name: {
      fa: 'تهویه مطبوع و تأسیسات هوارسان',
      en: 'HVAC & Climate Control',
      ar: 'التكييف والتهوية والتحكم المناخي',
      tr: 'İklimlendirme ve Havalandırma (HVAC)',
      ru: 'Вентиляция и кондиционирование (HVAC)'
    },
    subs: [
      { id: 'chillers', name: { fa: 'چیلر تراکمی اسکرال', en: 'Modular Scroll Chillers', ar: 'مبردات شيلر صناعية', tr: 'Modüler Scroll Chillerlar', ru: 'Чиллеры с воздушным охлаждением' } },
      { id: 'splits', name: { fa: 'داکت اسپلیت اینورتر', en: 'Inverter Ducted Splits', ar: 'سبليت دكت إنفرتر', tr: 'İnvertörlü Kanallı Splitler', ru: 'Инверторные канальные сплиты' } },
      { id: 'fancoils', name: { fa: 'فن‌کویل سقفی و کانالی', en: 'Ceiling Concealed Fan Coils', ar: 'وحدات ملف مروحة سقفية', tr: 'Tavan Tipi Fan Coiller', ru: 'Потолочные фанкойлы' } }
    ]
  },
  {
    id: 'power',
    icon: '⚡',
    name: {
      fa: 'انرژی، ژنراتور و برق اضطراری',
      en: 'Power & Generators',
      ar: 'توليد الطاقة وأنظمة الطوارئ',
      tr: 'Güç Sistemleri ve Jeneratörler',
      ru: 'Энергетика и резервное питание'
    },
    subs: [
      { id: 'gensets', name: { fa: 'دیزل ژنراتور سایلنت', en: 'Soundproof Diesel Gensets', ar: 'مولدات ديزل كاتمة للصوت', tr: 'Sessiz Kabinli Dizel Jeneratör', ru: 'Дизельные электростанции в кожухе' } },
      { id: 'ups', name: { fa: 'یوپی‌اس صنعتی آنلاین', en: 'Online Industrial UPS', ar: 'أنظمة UPS صناعية', tr: 'Endüstriyel Online UPS', ru: 'Промышленные ИБП (UPS)' } },
      { id: 'panels', name: { fa: 'تابلو برق اتوماتیک ATS', en: 'ATS Synchronizing Panels', ar: 'لوحات تحويل أوتوماتيكية ATS', tr: 'Otomatik Transfer Panoları (ATS)', ru: 'Щиты АВР и автоматики' } }
    ]
  },
  {
    id: 'tools',
    icon: '🛠️',
    name: {
      fa: 'ابزار و تجهیزات کارگاهی',
      en: 'Workshop Tools & Machinery',
      ar: 'الأدوات ومعدات الورش الصناعية',
      tr: 'Atölye ve Sanayi Ekipmanları',
      ru: 'Инструменты и цеховое оснащение'
    },
    subs: [
      { id: 'compressors', name: { fa: 'کمپرسور اسکرو صنعتی', en: 'Rotary Screw Compressors', ar: 'ضواغط لولبية صناعية', tr: 'Vidalı Hava Kompresörleri', ru: 'Винтовые воздушные компрессоры' } },
      { id: 'powertools', name: { fa: 'ابزارآلات سنگین صنعتی', en: 'Heavy Duty Power Tools', ar: 'أدوات كهربائية وصناعية', tr: 'Ağır Hizmet El Aletleri', ru: 'Промышленный электроинструмент' } },
      { id: 'scales', name: { fa: 'باسکول و توزین دیجیتال', en: 'Industrial Digital Scales', ar: 'موازين ومنصات وزن صناعية', tr: 'Endüstriyel Tartı ve Basküller', ru: 'Промышленные весовые платформы' } }
    ]
  }
];

/* ---------- Products Database (10 Diverse Industrial Products) ---------- */
const PRODUCTS = [
  {
    id: 1,
    sku: 'NT-PMP-240',
    cat: 'pumps',
    subcat: 'ind_pump',
    price: '۴۸۵,۰۰۰,۰۰۰',
    featured: true,
    name: {
      fa: 'پمپ سانتریفیوژ طبقاتی فشارقوی P-240',
      en: 'High-Pressure Multistage Centrifugal Pump P-240',
      ar: 'مضخة طرد مركزي متعددة المراحل عالية الضغط P-240',
      tr: 'Yüksek Basınçlı Kademeli Santrifüj Pompa P-240',
      ru: 'Многоступенчатый насос высокого давления P-240'
    },
    desc: {
      fa: 'پمپ سانتریفیوژ طبقاتی تمام استیل با پروانه‌های استنلس‌استیل ۳۱۶، طراحی‌شده برای بوستر پمپ‌های آبرسانی برج‌های مرتفع، خطوط فرآیندی تصفیه آب RO و انتقال مایعات صنعتی.',
      en: 'High-pressure multistage centrifugal pump crafted with AISI 316 stainless steel impellers, engineered for high-rise commercial water booster systems, RO filtration, and demanding industrial fluid transfer.',
      ar: 'مضخة طرد مركزي متعددة المراحل مصنوعة بالكامل من الفولاذ المقاوم للصدأ AISI 316، مصممة لمعززات مياه الأبراج الشاهقة ومحطات التناضح العكسي RO والخطوط الصناعية.',
      tr: 'Yüksek katlı binaların hidrofor sistemleri, ters ozmoz (RO) arıtma tesisleri ve endüstriyel sıvı transfer hatları için tasarlanmış AISI 316 paslanmaz çelik kademeli santrifüj pompa.',
      ru: 'Высоконапорный многоступенчатый центробежный насос из нержавеющей стали AISI 316 для высотных насосных станций, установок обратного осмоса и химических производств.'
    },
    images: [IMG.pump1, IMG.pump2, IMG.pump3],
    specs: [
      ['Rated Power / توان نامی', '15.0 kW (20 HP) / 380V 3-Phase 50Hz'],
      ['Flow Rate / دبی خروجی', '240 Liters/min (14.4 m³/h)'],
      ['Max Head / حداکثر هد', '85 Meters (8.5 Bar pressure)'],
      ['Material / متریال قطعات', 'AISI 316 Stainless Steel (Acid Resistant)'],
      ['Liquid Temp / دمای سیال', '-15 °C to +120 °C continuous'],
      ['Protection / درجه حفاظت', 'IP55 / Insulation Class F']
    ]
  },
  {
    id: 2,
    sku: 'NT-BST-500',
    cat: 'pumps',
    subcat: 'booster',
    price: '۸۹۰,۰۰۰,۰۰۰',
    featured: true,
    name: {
      fa: 'بوستر پمپ هوشمند آبرسانی دور متغیر BS-500',
      en: 'Variable-Speed Intelligent Booster System BS-500',
      ar: 'محطة تعزيز ضغط ذكية متغيرة السرعة BS-500',
      tr: 'Frekans Kontrollü Akıllı Hidrofor İstasyonu BS-500',
      ru: 'Интеллектуальная станция повышения давления с ЧРП BS-500'
    },
    desc: {
      fa: 'پکیج بوستر پمپ دوبل مجهز به اینورتر هوشمند مستقل بر روی هر پمپ، سنسورهای فشار ترانسمیتر صنعتی و کلکتورهای یکپارچه استیل جهت مصرف بهینه انرژی و فشار پایدار.',
      en: 'Twin-pump commercial booster set equipped with dedicated frequency inverters on each motor, industrial pressure transmitters, and stainless steel manifolds for optimal energy savings.',
      ar: 'نظام معزز ضغط مزدوج مزود بإنفرتر ذكي لكل مضخة، وحساسات ضغط صناعية ومجمع ستانلس ستيل لتوفير الطاقة وثبات الضغط.',
      tr: 'Her pompa için bağımsız frekans invertörü, endüstriyel basınç transmiterleri ve paslanmaz çelik manifoldlarla donatılmış çift pompalı enerji tasarruflu hidrofor sistemi.',
      ru: 'Двухнасосная станция повышения давления с индивидуальными частотными преобразователями, датчиками давления 4-20 мА и нержавеющими коллекторами.'
    },
    images: [IMG.pump2, IMG.pump1, IMG.pump3],
    specs: [
      ['Configuration / پیکربندی', '2 x 7.5 kW Pumps (1 Duty + 1 Standby)'],
      ['Total Flow / مجموع دبی', '500 Liters/min (30 m³/h)'],
      ['Working Head / هد کاری', '110 Meters (11 Bar)'],
      ['Controller / سیستم کنترل', 'PLC Touchscreen with Modbus RTU'],
      ['Manifold / کلکتورها', 'AISI 304 Seamless Stainless Steel'],
      ['Warranty / گارانتی', '18 Months Golden Warranty']
    ]
  },
  {
    id: 3,
    sku: 'NT-REF-900',
    cat: 'cold',
    subcat: 'fridges',
    price: '۶۲۰,۰۰۰,۰۰۰',
    featured: true,
    name: {
      fa: 'یخچال صنعتی دو درب استیل ضدزنگ R-900',
      en: 'Double-Door Stainless Industrial Refrigerator R-900',
      ar: 'ثلاجة صناعية ببابين من الفولاذ المقاوم للصدأ R-900',
      tr: 'Çift Kapılı Paslanmaz Sanayi Buzdolabı R-900',
      ru: 'Двухдверный промышленный холодильный шкаф R-900'
    },
    desc: {
      fa: 'یخچال صنعتی ۹۰۰ لیتری تمام استیل مجهز به کمپرسور کم‌مصرف Embraco، عایق‌بندی پلی‌یورتان تزریقی ۷۰ میلی‌متری و ترموستات دیجیتال هوشمند با سیستم دیفراست اتوماتیک.',
      en: 'Heavy-duty 900-litre stainless commercial refrigerator powered by high-efficiency Embraco compressor, 70mm high-density polyurethane insulation, and digital defrost controller.',
      ar: 'ثلاجة صناعية سعة ٩٠٠ لتر مصنوعة بالكامل من الستانلس ستيل ومزودة بضاغط Embraco عالي الكفاءة وعزل بولي يوريثان ٧٠ مم ونظام إذابة ثلج أوتوماتيكي.',
      tr: 'Yüksek verimli Embraco kompresör, 70 mm yüksek yoğunluklu poliüretan yalıtım ve otomatik defrost özellikli mikroişlemcili kontrol paneline sahip 900 litrelik paslanmaz buzdolabı.',
      ru: 'Промышленный холодильный шкаф на 900 л из нержавеющей стали с компрессором Embraco, пенополиуретановой изоляцией 70 мм и автоматической оттайкой.'
    },
    images: [IMG.cold1, IMG.cold2, IMG.cold3],
    specs: [
      ['Gross Volume / حجم ناخالص', '900 Liters (Double Solid Doors)'],
      ['Temp Range / دامنه دما', '-2 °C to +8 °C (Digital Control)'],
      ['Refrigerant / مبرد سازگار', 'Eco-Friendly R290 (Zero ODP)'],
      ['Compressor / نوع کمپرسور', 'Embraco Heavy-Duty Hermetic'],
      ['Body Structure / جنس بدنه', 'AISI 304 Food-Grade Stainless Steel'],
      ['Energy Class / گرید انرژی', 'European Grade A+']
    ]
  },
  {
    id: 4,
    sku: 'NT-FRZ-600',
    cat: 'cold',
    subcat: 'freezers',
    price: '۳۹۰,۰۰۰,۰۰۰',
    featured: false,
    name: {
      fa: 'فریزر صنعتی صندوقی ۶۰۰ لیتری منفی ۲۴ درجه F-600',
      en: 'Heavy-Duty Commercial Deep Chest Freezer F-600',
      ar: 'مجمد صناعي أفقي ٦٠٠ لتر فائق التبريد F-600',
      tr: 'Sandık Tipi Derin Dondurucu 600L F-600',
      ru: 'Низкотемпературный морозильный ларь 600 л F-600'
    },
    desc: {
      fa: 'فریزر صندوقی صنعتی ۶۰۰ لیتری مجهز به کندانسور هوایی مخفی، سبدهای مفتولی مقاوم با پوشش الکترواستاتیک و سامانه انجماد سریع توربو برای نگهداری فرآورده‌های پروتئینی و لبنی.',
      en: 'Commercial 600-litre deep chest freezer with skin condenser, heavy-duty wire baskets, and turbo fast-freeze function engineered for bulk meat, seafood, and dairy storage.',
      ar: 'مجمد أفقي سعة ٦٠٠ لتر بمكثف مدمج وسلال فولاذية متينة وخاصية التجميد السريع لتخزين اللحوم والمأكولات البحرية والمجمدات الغذائية.',
      tr: 'Et, deniz ürünleri ve dondurulmuş gıdaların uzun süreli muhafazası için gizli kondansatörlü, turbo hızlı dondurma fonksiyonlu 600 litrelik sandık tipi dondurucu.',
      ru: 'Морозильный ларь на 600 л с усиленными корзинами, режимом быстрой заморозки и толстостенной изоляцией для мясных, рыбных и молочных продуктов.'
    },
    images: [IMG.cold2, IMG.cold1, IMG.cold3],
    specs: [
      ['Storage Capacity / ظرفیت', '600 Liters Net'],
      ['Temp Range / دمای انجماد', '-18 °C to -25 °C Ultra-Cold'],
      ['Insulation / ضخامت عایق', '80 mm Cyclopentane High Density'],
      ['Power Rating / توان مصرفی', '450 Watts / 220V 50Hz'],
      ['Baskets / سبدهای همراه', '4 Heavy-Duty Reinforced Baskets'],
      ['Lock & Key / قفل امنیتی', 'Included with Counterbalanced Lid']
    ]
  },
  {
    id: 5,
    sku: 'NT-SPL-036',
    cat: 'hvac',
    subcat: 'splits',
    price: '۹۸۰,۰۰۰,۰۰۰',
    featured: true,
    name: {
      fa: 'داکت اسپلیت تمام اینورتر ۳۶۰۰۰ حاره‌ای D-36',
      en: 'Full DC Inverter Ducted Split Unit 36000 D-36',
      ar: 'سبليت دكت إنفرتر استوائي ٣٦٠٠٠ وحدة D-36',
      tr: 'Tropikal DC İnvertörlü Kanallı Split 36000 D-36',
      ru: 'Инверторная канальная сплит-система 36000 BTU D-36'
    },
    desc: {
      fa: 'داکت اسپلیت اینورتر ۳۶۰۰۰ با کمپرسور تویین روتاری T3 مناسب اقلیم‌های حاره‌ای تا ۵۵ درجه، فن موتور BLDC فوق‌کم‌صدا و قابلیت اتصال به ترموستات هوشمند وای‌فای.',
      en: 'Tropical T3 full DC inverter ducted split unit capable of continuous cooling up to 55°C ambient, paired with an ultra-quiet BLDC blower motor and smart Wi-Fi thermostat control.',
      ar: 'وحدة تكييف سبليت دكت إنفرتر ٣٦٠٠٠ بضاغط توأم استوائي T3 يعمل حتى ٥٥ درجة مئوية، ومحرك مروحة BLDC صامت مع تحكم ذكي عبر واي فاي.',
      tr: '55°C ortam sıcaklığına kadar kesintisiz soğutma sağlayan tropikal T3 ikiz rotary DC invertör kompresörlü, sessiz BLDC fan motorlu kanallı split klima sistemi.',
      ru: 'Канальная инверторная сплит-система 36000 BTU с тропическим компрессором T3 (до +55°C), тихим бесщеточным вентилятором BLDC и поддержкой Wi-Fi.'
    },
    images: [IMG.hvac1, IMG.hvac2, IMG.hvac3],
    specs: [
      ['Cooling Capacity / سرمایش', '36,000 BTU/h (3.0 Tons of Ref)'],
      ['Heating Capacity / گرمایش', '38,500 BTU/h (Heat Pump Mode)'],
      ['Compressor / کمپرسور', 'Twin-Rotary DC Inverter (Tropical T3)'],
      ['SEER Rating / رده انرژی', 'SEER 4.25 (Class A++)'],
      ['Noise Level / سطح صدا', '38 dB(A) Whisper Quiet'],
      ['Static Pressure / فشار استاتیکی', '0 – 160 Pa Adjustable External ESP']
    ]
  },
  {
    id: 6,
    sku: 'NT-CHL-050',
    cat: 'hvac',
    subcat: 'chillers',
    price: '۲,۴۰۰,۰۰۰,۰۰۰',
    featured: false,
    name: {
      fa: 'چیلر تراکمی هواخنک اسکرال ۵۰ کیلووات CH-50',
      en: 'Air-Cooled Modular Scroll Water Chiller CH-50',
      ar: 'شيلر مبرد بالهواء بضاغط حلزوني ٥٠ كيلوواط CH-50',
      tr: 'Hava Soğutmalı Modüler Scroll Su Soğutma Grubu CH-50',
      ru: 'Чиллер с воздушным охлаждением и спиральными компрессорами 50 кВт CH-50'
    },
    desc: {
      fa: 'چیلر ماژولار هواخنک با دو دستگاه کمپرسور اسکرال Danfoss در مدارهای مستقل برودتی، مبدل حرارتی صفحه‌ای استیل و فن‌های آکسیال کم‌صدا مجهز به اینورتر دور متغیر.',
      en: 'Modular air-cooled chiller featuring dual independent Danfoss scroll compressor circuits, high-efficiency brazed plate evaporator, and EC variable-speed low-noise fans.',
      ar: 'شيلر مبرد بالهواء بدائرتي تبريد مستقلتين بضواغط Danfoss اللولبية ومبخر ألواح ستانلس ستيل ومراوح محورية صامتة موفرة للطاقة.',
      tr: 'Bağımsız çift Danfoss scroll kompresör devresi, lehimli paslanmaz plakalı evaporatör ve değişken hızlı EC fanlara sahip modüler hava soğutmalı chiller.',
      ru: 'Модульный чиллер с воздушным охлаждением, двумя независимыми контурами на компрессорах Danfoss, паяным пластинчатым теплообменником и ЕС-вентиляторами.'
    },
    images: [IMG.hvac2, IMG.hvac1, IMG.hvac3],
    specs: [
      ['Cooling Output / توان سرمایشی', '50.0 kW (14.2 Nominal Tons)'],
      ['Compressor Type / نوع کمپرسور', 'Dual Hermetic Scroll (Danfoss)'],
      ['Evaporator / اواپراتور', 'Brazed AISI 316 Stainless Plate'],
      ['Fans / فن‌های کندانسور', '2 x Aerodynamic Inverter Axial Fans'],
      ['Operating Ambient / دمای محیط', 'Up to +52 °C Extreme Ambient'],
      ['Refrigerant / مبرد', 'R410A Environmentally Compliant']
    ]
  },
  {
    id: 7,
    sku: 'NT-GEN-100',
    cat: 'power',
    subcat: 'gensets',
    price: '۱,۴۵۰,۰۰۰,۰۰۰',
    featured: true,
    name: {
      fa: 'دیزل ژنراتور ۱۰۰ کاوا سایلنت با تابلو اتوماتیک G-100',
      en: 'Heavy-Duty Soundproof Diesel Generator 100 kVA G-100',
      ar: 'مولد ديزل صناعي كاتم للصوت ١٠٠ ك.ف.أ G-100',
      tr: 'Sessiz Kabinli Ağır Hizmet Dizel Jeneratör 100 kVA G-100',
      ru: 'Дизель-генератор 100 кВА в шумозащитном кожухе с АВР G-100'
    },
    desc: {
      fa: 'دیزل ژنراتور ۱۰۰ کاوا مجهز به موتور ۴ سیلندر توربوشارژ پرکینز، آلترناتور براشلس استمفورد، کانوپی سایلنت سوپرآکوستیک ۶۸ دسی‌بل و تابلو چنج‌اور اتوماتیک ATS.',
      en: 'Prime-rated 100 kVA diesel generator driven by turbocharged Perkins industrial diesel engine, brushless Stamford alternator, 68 dB acoustic canopy, and built-in automatic transfer switch.',
      ar: 'مولد ديزل صناعي بقدرة ١٠٠ ك.ف.أ بمحرك بيركنز توربو ٤ أسطوانات، ومولد ستامفورد بدون فرش، وكابينة كاتمة للصوت ٦٨ ديسيبل ولوحة تحويل أوتوماتيكية ATS.',
      tr: 'Perkins tipi 4 silindirli turbo dizel motor, Stamford fırçasız alternatör, 68 dB süper sessiz kabin ve entegre ATS otomatik transfer panosuna sahip 100 kVA jeneratör seti.',
      ru: 'Дизель-генераторная установка 100 кВА с 4-цилиндровым турбодизелем, бесщеточным генератором Stamford, шумозащитным кожухом (68 дБ) и щитом АВР.'
    },
    images: [IMG.gen1, IMG.gen2, IMG.gen3],
    specs: [
      ['Prime Power / توان دائم', '100 kVA (80 kW) / 400V 3-Phase 50Hz'],
      ['Standby Power / توان اضطراری', '110 kVA (88 kW) Peak'],
      ['Engine / مشخصات موتور', 'Perkins-Design 4-Cylinder Turbocharged'],
      ['Alternator / ژنراتور برق', 'Stamford Type Brushless with AVR'],
      ['Canopy / کانوپی سایلنت', 'Super Silent Acoustic Enclosure (68 dB @ 7m)'],
      ['Fuel Tank / باک گازوئیل', '240 Liters (12 Hours Continuous Autonomy)']
    ]
  },
  {
    id: 8,
    sku: 'NT-UPS-040',
    cat: 'power',
    subcat: 'ups',
    price: '۵۸۰,۰۰۰,۰۰۰',
    featured: false,
    name: {
      fa: 'یوپی‌اس آنلاین سه فاز صنعتی ۴۰ کاوا U-40',
      en: 'Online Double-Conversion 3-Phase Industrial UPS U-40',
      ar: 'مزود طاقة غير منقطع ثلاثي الأطوار ٤٠ ك.ف.أ U-40',
      tr: 'Endüstriyel 3 Fazlı Online Kesintisiz Güç Kaynağı 40 kVA U-40',
      ru: 'Промышленный трехфазный онлайн ИБП двойного преобразования 40 кВА U-40'
    },
    desc: {
      fa: 'یوپی‌اس ماژولار آنلاین تبدیل دوگانه با ضریب توان خروجی ۰.۹۹، مدار محافظت در برابر نوسانات هارمونیک، ترانسفورماتور ایزولاسیون گالوانیک و شارژر باتری پیشرفته چندمرحله‌ای.',
      en: 'True online double-conversion industrial UPS featuring unity output power factor, galvanic isolation transformer, and intelligent 3-stage battery management system for data centers and hospitals.',
      ar: 'نظام UPS صناعي أونلاين مزدوج التحويل بعامل قدرة ٠.٩٩ ومحول عزل جلفاني ونظام إدارة شحن البطاريات الذكي للمستشفيات ومراكز البيانات.',
      tr: 'Veri merkezleri ve endüstriyel tesisler için galvanik izolasyon trafolu, %99 verimli ve 3 aşamalı akıllı akü şarj sistemine sahip gerçek online çift dönüşümlü UPS.',
      ru: 'Промышленный ИБП двойного преобразования с гальванической изоляцией, коэффициентом мощности 0.99 и многоступенчатым зарядом батарей для ЦОД и больниц.'
    },
    images: [IMG.gen2, IMG.gen3, IMG.gen1],
    specs: [
      ['Rated Capacity / ظرفیت', '40 kVA / 36 kW (0.9 Output Power Factor)'],
      ['Topology / ساختار مدار', 'True Online Double Conversion (VFI-SS-111)'],
      ['Input Voltage / ولتاژ ورودی', '380/400/415 VAC 3-Phase (Wide Window)'],
      ['Efficiency / راندمان کاری', 'Up to 96% Online / 99% ECO Mode'],
      ['Transfer Time / زمان سوئیچ', '0 ms (Zero Interruption Inverter)'],
      ['Communication / درگاه‌ها', 'RS485, SNMP Web Card, Dry Contacts']
    ]
  },
  {
    id: 9,
    sku: 'NT-CMP-075',
    cat: 'tools',
    subcat: 'compressors',
    price: '۲۸۵,۰۰۰,۰۰۰',
    featured: false,
    name: {
      fa: 'کمپرسور اسکرو هوای فشرده صنعتی ۷.۵ کیلووات C-75',
      en: 'Industrial Variable-Speed Rotary Screw Compressor C-75',
      ar: 'ضاغط هواء لولبي صناعي ٧.٥ كيلوواط بخزان مدمج C-75',
      tr: 'Endüstriyel Vidalı Hava Kompresörü 7.5 kW C-75',
      ru: 'Винтовой воздушный компрессор с ресивером 7.5 кВт C-75'
    },
    desc: {
      fa: 'کمپرسور اسکرو کارگاهی مجهز به واحد هواساز اروپایی، مخزن ۵۰۰ لیتری استاندارد تحت فشار، خشک‌کن تبریدی هوا و کنترلر میکروپروسسوری دیجیتال با پایش خودکار فشار و دما.',
      en: 'Compact industrial rotary screw compressor with European air-end, 500-litre receiver tank, integrated refrigerated air dryer, and microprocessor monitoring system.',
      ar: 'ضاغط هواء لولبي مدمج بوحدة ضغط أوروبية، وخزان ضغط سعة ٥٠٠ لتر ومجفف هواء تبريدي ولوحة تحكم رقمية للمصانع والورش.',
      tr: 'Avrupa vidalı hava ünitesi, 500 litrelik hava tankı, entegre gazlı kurutucu ve mikroişlemcili kontrol paneline sahip kompakt sanayi tipi vidalı kompresör.',
      ru: 'Винтовой компрессорный агрегат с европейским винтовым блоком, ресивером на 500 л, встроенным осушителем и микропроцессорной панелью управления.'
    },
    images: [IMG.tool1, IMG.tool2, IMG.scale1],
    specs: [
      ['Motor Power / توان الکتروموتور', '7.5 kW (10 HP) High-Efficiency IE3'],
      ['Free Air Delivery / حجم هوادهی', '1.15 m³/min (40.6 CFM at 8 Bar)'],
      ['Working Pressure / فشار کاری', '8.0 – 10.0 Bar Adjustable'],
      ['Air Receiver / مخزن ذخیره', '500 Liters (Hydrostatically Tested to 16 Bar)'],
      ['Noise Level / میزان صدا', '64 dB(A) Workshop Quiet'],
      ['Dryer / درایر همراه', 'Built-in Refrigerated Air Dryer (+3 °C Dew Point)']
    ]
  },
  {
    id: 10,
    sku: 'NT-SCL-200',
    cat: 'tools',
    subcat: 'scales',
    price: '۱۶۵,۰۰۰,۰۰۰',
    featured: false,
    name: {
      fa: 'باسکول صنعتی ۲ تنی دیجیتال کالیبره‌شده PS-2000',
      en: 'Heavy-Duty Digital Industrial Platform Scale PS-2000',
      ar: 'منصة وزن وباسكول صناعي رقمي حمولة ٢ طن PS-2000',
      tr: '2 Tonluk Ağır Hizmet Dijital Platform Baskül PS-2000',
      ru: 'Промышленные платформенные весы 2000 кг PS-2000'
    },
    desc: {
      fa: 'باسکول صنعتی سنگین ۲ تنی با ۴ لودسل فولادی کلاس OIML ضدآب IP67، کفی آجدار ضدلغزش فولادی و نمایشگر استیل دیجیتال مجهز به پورت خروجی RS232 جهت اتصال به رایانه و پرینتر.',
      en: 'Heavy-duty 2-ton industrial floor scale featuring 4 water-resistant IP67 alloy steel load cells, checkered diamond steel platform, and IP65 stainless indicator with RS232 output.',
      ar: 'منصة وزن صناعية سعة ٢ طن بأربع خلايا وزن IP67 عالية الدقة، وسطح فولاذي مانع للانزلاق وشاشة ستانلس رقمية مع منفذ RS232 للربط بالحاسب.',
      tr: '4 adet IP67 su geçirmez alaşımlı çelik yük hücresi, baklavalı kaymaz çelik platform ve RS232 seri portlu IP65 paslanmaz gösterge paneline sahip 2 tonluk zemin baskülü.',
      ru: 'Платформенные электронные весы на 2 т с 4 тензодатчиками IP67 (класс OIML), рифленой настильной платформой и терминалом из нержавеющей стали с RS232.'
    },
    images: [IMG.scale1, IMG.tool1, IMG.tool2],
    specs: [
      ['Max Capacity / حداکثر ظرفیت', '2,000 kg (2 Metric Tons)'],
      ['Resolution / دقت اندازه‌گیری', '500 grams (Verified Legal for Trade)'],
      ['Platform Size / ابعاد کفی', '1500 x 1500 mm Heavy Checkered Steel'],
      ['Load Cells / لودسل‌ها', '4 x OIML Certified Alloy Steel IP67'],
      ['Indicator / نمایشگر', 'Stainless Steel IP65 with Backlit LCD'],
      ['Connectivity / ارتباطات', 'RS232 Serial Port for PC & Barcode Printer']
    ]
  }
];

/* ---------- Articles Database ---------- */
const ARTICLES = [
  {
    id: 1,
    img: IMG.article1,
    author: 'Eng. Mohammad Rad (Senior Fluid Dynamics Engineer)',
    date: '2026-10-15',
    readTime: '6 min read / ۶ دقیقه مطالعه',
    tag: 'Hydraulics & Water Supply',
    title: {
      fa: 'راهنمای جامع مهندسی: انتخاب بهینه پمپ‌های صنعتی و بوستر پمپ‌های آبرسانی',
      en: 'Engineering Guide: Selecting Industrial Pumps and High-Rise Booster Systems',
      ar: 'دليل هندسي شامل: الاختيار الأمثل للمضخات الصناعية ومحطات الضغط للأبراج',
      tr: 'Mühendislik Rehberi: Endüstriyel Pompa ve Hidrofor Seçim Kriterleri',
      ru: 'Инженерное руководство: подбор промышленных насосов и насосных станций'
    },
    excerpt: {
      fa: 'بررسی فرمول‌های محاسبه هد دینامیکی کل (TDH)، افت فشار اتصالات و تکنیک‌های کاهش پدیده کاویتاسیون در تأسیسات بزرگ تجاری و صنعتی.',
      en: 'Key engineering formulas for Total Dynamic Head (TDH), pipeline friction loss calculation, and cavitation prevention in large-scale commercial facilities.',
      ar: 'حسابات الرفع الديناميكي الكلي (TDH) وفواقد الاحتكاك في الأنابيب وتقنيات تجنب التكهف في المنشآت الصناعية والتجارية الكبرى.',
      tr: 'Büyük ölçekli tesislerde Toplam Dinamik Basma Yüksekliği (TDH), boru sürtünme kayıpları ve kavitasyon önleme teknikleri.',
      ru: 'Расчет полного динамического напора (TDH), гидравлических потерь в трубопроводах и методы предотвращения кавитации.'
    },
    body: {
      fa: `<p>انتخاب یک پمپ صنعتی یا سیستم بوستر آبرسانی، هسته اصلی پایداری تأسیسات در هر پروژه عمرانی و کارخانه است. اشتباه در محاسبه دبی و هد می‌تواند منجر به خرابی زودهنگام سیل مکانیکی، افزایش شدید مصرف انرژی یا افت فشار نامطلوب در طبقات فوقانی گردد.</p>
      <h3>۱. محاسبه دقیق هد دینامیکی کل (TDH)</h3>
      <p>هد کل حاصل‌جمع اختلاف ارتفاع فیزیکی، افت فشار ناشی از اصطکاک در لوله‌ها و اتصالات (Friction Loss) و فشار کاری مورد نیاز در دورترین مصرف‌کننده است. توصیه اکید مهندسان NovaTrade محاسبه افت با در نظر گرفتن ضریب زبری لوله پس از چند سال کارکرد است.</p>
      <h3>۲. نقش درایوهای دور متغیر (VFD)</h3>
      <p>تجهیز پمپ‌ها به اینورتر نه تنها ضربه قوچ هیدرولیکی (Water Hammer) را به صفر می‌رساند، بلکه تا ۴۰ درصد از هزینه‌های قبض برق سالیانه مجموعه را کاهش می‌دهد.</p>`,
      en: `<p>Choosing an industrial pump or booster set represents the backbone of infrastructure reliability in commercial and industrial complexes. Under-sizing causes water starvation during peak hours, while over-sizing leads to continuous cycling, mechanical seal erosion, and excessive electric power consumption.</p>
      <h3>1. Calculating Total Dynamic Head (TDH)</h3>
      <p>Total Dynamic Head comprises static elevation difference, pipe friction losses across all bends and valves, and the residual pressure required at the terminal fixtures. NovaTrade engineers recommend calculating friction coefficients considering aged pipe roughness.</p>
      <h3>2. The Role of Variable Frequency Drives (VFD)</h3>
      <p>Implementing variable speed frequency inverters on booster pumps eliminates hydraulic water hammer transients, guarantees constant terminal pressure, and yields up to 40% lifecycle electricity savings.</p>`,
      ar: `<p>يعد اختيار المضخة الصناعية المناسبة ومحطة تعزيز الضغط الركيزة الأساسية لاعتمادية المباني الشاهقة والمنشآت الصناعية. يترتب على الخطأ في التقدير تلف سريع في موانع التسرب الميكانيكية أو هبوط غير مقبول في الضغط.</p>
      <h3>١. حساب الرفع الديناميكي الكلي (TDH)</h3>
      <p>يشمل الرفع الديناميكي الكلي فرق الارتفاع الاستاتيكي وفواقد الاحتكاك في شبكة الأنابيب والصمامات والضغط المتبقي المطلوب عند أبعد نقطة استهلاك.</p>
      <h3>٢. أهمية محولات التردد المتغيرة (VFD)</h3>
      <p>القضاء التام على ظاهرة المطرقة المائية (Water Hammer) وضمان ثبات الضغط وتقليل استهلاك الطاقة الكهربائية بنسبة تصل إلى ٤٠٪.</p>`,
      tr: `<p>Endüstriyel pompa veya hidrofor seçimi, ticari ve sanayi tesislerinin kesintisiz çalışması için kritik önem taşır. Hatalı boyutlandırma mekanik salmastra aşınmasına ve yüksek enerji giderlerine yol açar.</p>
      <h3>1. Toplam Dinamik Basma Yüksekliği (TDH) Hesabı</h3>
      <p>Statik yükseklik farkı, boru sürtünme kayıpları ve uç noktadaki gerekli işletme basıncının doğru toplanması esastır.</p>
      <h3>2. Değişken Hızlı Sürücülerin (VFD) Önemi</h3>
      <p>Frekans invertörleri koç darbesini ortadan kaldırır, sabit basınç sağlar ve elektrik tüketimini %40’a varan oranda düşürür.</p>`,
      ru: `<p>Правильный подбор промышленного насоса или повысительной станции — основа безаварийной работы высотных зданий и предприятий. Ошибки в расчетах приводят к преждевременному выходу из строя торцевых уплотнений и перерасходу электроэнергии.</p>
      <h3>1. Расчет полного динамического напора (TDH)</h3>
      <p>Напор складывается из геометрической высоты подъема, потерь на трение в трубах и арматуре, а также требуемого свободного напора в диктующей точке.</p>
      <h3>2. Преимущества частотного регулирования (ЧРП)</h3>
      <p>Инверторы исключают гидроудары в сети, поддерживают стабильное давление и экономят до 40% электроэнергии.</p>`
    }
  },
  {
    id: 2,
    img: IMG.article2,
    author: 'Dr. Samer Al-Mansoor (Senior HVAC & Energy Specialist)',
    date: '2026-10-28',
    readTime: '8 min read / ۸ دقیقه مطالعه',
    tag: 'Energy Efficiency & HVAC',
    title: {
      fa: 'کاهش ۲۵ درصدی مصرف برق در سیستم‌های سرمایشی و تهویه مطبوع تجاری',
      en: 'Cutting Commercial Cooling & HVAC Power Consumption by up to 25%',
      ar: 'خفض استهلاك الكهرباء بنسبة ٢٥٪ في أنظمة التبريد والتكييف التجاري',
      tr: 'Ticari Soğutma ve Havalandırma Sistemlerinde %25 Enerji Tasarrufu',
      ru: 'Снижение энергопотребления систем охлаждения и вентиляции до 25%'
    },
    excerpt: {
      fa: 'راهکارهای عملی بهینه‌سازی چیلرها، داکت اسپلیت‌ها و سیستم‌های برودتی با استفاده از مبردهای سازگار با محیط زیست و کنترلرهای هوشمند.',
      en: 'Practical engineering strategies for optimizing chillers, ducted splits, and cold storage via eco-friendly refrigerants and smart thermal zoning.',
      ar: 'استراتيجيات عملية لتحسين كفاءة الشيلرات وأنظمة التكييف المركزي والمستودعات المبردة عبر العوازل الذكية والمبردات الصديقة للبيئة.',
      tr: 'Akıllı termal bölgeleme, çevre dostu soğutucu akışkanlar ve chiller optimizasyonu ile enerji maliyetlerini düşürme yöntemleri.',
      ru: 'Инженерные решения для оптимизации чиллеров, канальных сплит-систем и холодильных камер с помощью интеллектуального управления.'
    },
    body: {
      fa: `<p>در اقلیم‌های گرم و خشک خاورمیانه، بیش از ۶۰ درصد هزینه برق ساختمان‌های تجاری مربوط به تجهیزات برودتی و تهویه مطبوع است. با اجرای ۵ گام فنی اثبات‌شده می‌توان بدون افت رفاه، این هزینه را حداقل ۲۵ درصد مهار کرد.</p>
      <h3>۱. تنظیم نقطه شبنم و دمای سیال خروجی چیلر (Chilled Water Reset)</h3>
      <p>افزایش تنها ۱ درجه سانتی‌گراد در دمای آب چروجی چیلر در فصول معتدل‌تر، مصرف کمپرسور را ۳ تا ۴ درصد کاهش می‌دهد.</p>
      <h3>۲. نگهداری پیشگیرانه فین‌های کندانسور</h3>
      <p>شستشوی منظم کویل‌ها و جلوگیری از رسوب‌گیری، راندمان تبادل حرارتی را تا ۱۵ درصد بهبود می‌بخشد.</p>`,
      en: `<p>In Middle Eastern and regional commercial buildings, cooling accounts for more than 60% of total electrical expenditure. Through targeted engineering interventions, plant managers can recover up to 25% of operational costs with minimal capital payback periods.</p>
      <h3>1. Chilled Water Reset Logic</h3>
      <p>Modulating the chilled water supply setpoint upward by just 1°C during partial load hours reduces compressor lift and cuts power demand by 3% to 4%.</p>
      <h3>2. Condenser Coil Cleanliness</h3>
      <p>Bi-weekly maintenance of air-cooled condenser microchannels ensures design heat rejection and prevents dangerous high-head-pressure trip conditions.</p>`,
      ar: `<p>يشكل استهلاك التكييف والتبريد أكثر من ٦٠٪ من فاتورة الكهرباء في المباني التجارية بالمنطقة. يمكن خفض هذه التكلفة بنسبة ٢٥٪ عبر خطوات هندسية مدروسة.</p>
      <h3>١. إعادة ضبط حرارة مياه التبريد (Chilled Water Reset)</h3>
      <p>رفع درجة حرارة المياه المبردة بدرجة مئوية واحدة في الأوقات المعتدلة يوفر بين ٣٪ إلى ٤٪ من استهلاك الضواغط.</p>
      <h3>٢. نظافة مكثفات الهواء</h3>
      <p>الغسيل الدوري لملفات المكثفات الهوائية يحافظ على الكفاءة الحرارية ويمنع ارتفاع ضغط الغاز المفرط.</p>`,
      tr: `<p>Bölgedeki ticari binalarda elektrik maliyetinin %60’ından fazlası soğutma ve iklimlendirme sistemlerinden kaynaklanır. 5 pratik adımla %25 tasarruf sağlanabilir.</p>
      <h3>1. Çıkış Suyu Sıcaklığı Optimizasyonu</h3>
      <p>Kısmi yük saatlerinde su sıcaklığını 1°C artırmak kompresör yükünü %3 ila %4 oranında azaltır.</p>
      <h3>2. Kondenser Temizliği</h3>
      <p>Kondenser bataryalarının düzenli temizlenmesi ısı transfer verimini korur ve arıza riskini önler.</p>`,
      ru: `<p>В коммерческих зданиях на охлаждение и кондиционирование приходится свыше 60% электроэнергии. Внедрение регламентных мер позволяет снизить расходы на 25%.</p>
      <h3>1. Плавающее задание температуры теплоносителя</h3>
      <p>Повышение температуры воды на выходе из чиллера на 1°C снижает энергопотребление компрессоров на 3-4%.</p>
      <h3>2. Чистота теплообменных поверхностей</h3>
      <p>Регулярная очистка конденсаторов предотвращает аварийные отключения по высокому давлению и сохраняет паспортный КПД.</p>`
    }
  },
  {
    id: 3,
    img: IMG.article3,
    author: 'Eng. Kerem Demir (Lead Power & Generation Engineer)',
    date: '2026-11-05',
    readTime: '7 min read / ۷ دقیقه مطالعه',
    tag: 'Electrical Infrastructure',
    title: {
      fa: 'ژنراتورهای دیزلی و سیستم‌های برق اضطراری: از محاسبه توان تا راه‌اندازی تابلو ATS',
      en: 'Diesel Generators & Emergency Power: Sizing, Synchronizing, and ATS Integration',
      ar: 'مولدات الديزل وأنظمة الطوارئ: من حساب الأحمال إلى لوحات التحويل ATS',
      tr: 'Dizel Jeneratörler ve Yedek Güç: Boyutlandırma, Senkronizasyon ve ATS Panoları',
      ru: 'Дизельные электростанции и резервное электроснабжение: от расчета мощности до АВР'
    },
    excerpt: {
      fa: 'محاسبه بارهای سلفی، ضریب همزمانی و مدیریت جریان راه‌اندازی موتورهای الکتریکی بدون آسیب به ژنراتور اضطراری.',
      en: 'Motor starting inrush management, inductive power factor compensation, and seamless automatic transfer switch (ATS) design guidelines.',
      ar: 'إدارة تيارات بدء المحركات الحثية، وحساب معاملات التزامن، وتصميم لوحات التحويل التلقائي الآمنة في حالات الطوارئ.',
      tr: 'Motor kalkış demeraj akımlarının yönetimi, güç faktörü kompanzasyonu ve kesintisiz transfer panoları (ATS) tasarım kriterleri.',
      ru: 'Расчет пусковых токов электродвигателей, учет коэффициента одновременности и проектирование надежных щитов АВР.'
    },
    body: {
      fa: `<p>برق اضطراری در دیتاسنترها، بیمارستان‌ها و کارخانه‌های پیوسته مرز میان امنیت مالی و خسارت‌های جبران‌ناپذیر است. خطای شایع در خرید ژنراتور، در نظر نگرفتن جریان استارت الکتروموتورهاست که می‌تواند تا ۶ برابر جریان نامی باشد.</p>
      <h3>۱. ضریب ذخیره توان و جریان استارت (Step Loading)</h3>
      <p>استفاده از سیستم پله‌ای وارد مدار کردن مصرف‌کننده‌ها مانع از خاموش شدن ژنراتور تحت بار اولیه سنگین می‌گردد.</p>
      <h3>۲. نگهداری و تست دوره‌ای تحت بار (Load Bank Testing)</h3>
      <p>حداقل ماهی یک‌بار روشن کردن دیزل به مدت ۳۰ دقیقه تحت بار واقعی، از پدیده Wet Stacking و خرابی انژکتورها پیشگیری می‌کند.</p>`,
      en: `<p>Standby power represents the primary safeguard preventing catastrophic financial and operational losses during grid failures. Sizing must account for transient step-loading and high inductive motor inrush currents.</p>
      <h3>1. Motor Inrush and Step-Loading Control</h3>
      <p>Sequencing large motor starts with soft starters or VFDs minimizes transient voltage dips below 15% and protects sensitive controls.</p>
      <h3>2. Monthly Load Bank Verification</h3>
      <p>Operating diesel gensets under at least 50% rated load for 30 minutes monthly prevents unburnt fuel accumulation (wet stacking) in exhaust manifolds.</p>`,
      ar: `<p>تمثل الطاقة الاحتياطية صمام الأمان لمنع الخسائر التشغيلية في المستشفيات ومراكز البيانات والمصانع الحيوية. يجب مراعاة تيارات البدء العالية للمحركات.</p>
      <h3>١. التحكم في أحمال البدء المفاجئة (Step Loading)</h3>
      <p>إدخال الأحمال تدريجيًا يحمي محرك الديزل والمولد من الهبوط الحاد في الجهد والتردد.</p>
      <h3>٢. الاختبار الدوري تحت الحمل (Load Bank)</h3>
      <p>تشغيل المولد شهريًا لمدة ٣٠ دقيقة بحمل حقيقي يحمي نظام الحقن والعادم من تراكم الوقود غير المحترق.</p>`,
      tr: `<p>Hastaneler ve veri merkezlerinde kesintisiz enerji hayati önem taşır. Jeneratör seçiminde motorların kalkış anındaki anlık akımları mutlaka hesaplanmalıdır.</p>
      <h3>1. Kademeli Yükleme ve Gerilim Düşümü</h3>
      <p>Büyük motorları yumuşak yol vericilerle kademeli olarak devreye almak jeneratörün bayılmasını engeller.</p>
      <h3>2. Periyodik Yüklü Testler</h3>
      <p>Ayda en az bir kez 30 dakika boyunca yüklü test yapmak motorun ömrünü uzatır ve enjektörleri temiz tutar.</p>`,
      ru: `<p>Резервное электроснабжение — ключевой элемент надежности ЦОД, клиник и непрерывных производств. Частая ошибка — пренебрежение пусковыми токами двигателей.</p>
      <h3>1. Ступенчатый ввод нагрузки и плавный пуск</h3>
      <p>Использование УПП и ЧРП снижает просадки напряжения на шинах генератора ниже 15%.</p>
      <h3>2. Регулярные испытания под нагрузкой</h3>
      <p>Ежемесячный прогон ДГУ под нагрузкой не менее 50% предотвращает закоксовывание выхлопного тракта и форсунок.</p>`
    }
  }
];

/* ---------- Helper Functions ---------- */
const catName = id => {
  const c = CATEGORIES.find(x => x.id === id);
  return c ? c.name[lang] : id;
};

const subcatName = (catId, subId) => {
  const c = CATEGORIES.find(x => x.id === catId);
  if (!c || !c.subs) return subId;
  const s = c.subs.find(x => x.id === subId);
  return s ? s.name[lang] : subId;
};

/* ---------- Filtering & State Management ---------- */
let activeFilter = 'all';
let activeSubFilter = 'all';
let searchQuery = '';
let currentProduct = null;
let currentArticle = null;
let currentView = 'home';

/* ---------- Rendering Engine ---------- */

function renderCats() {
  const grid = $('catsGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card" data-cat="${c.id}" role="button" tabindex="0">
      <div class="cat-card-icon">${c.icon}</div>
      <h3>${c.name[lang]}</h3>
      <ul>
        ${c.subs.map(s => `<li>• ${s.name[lang]}</li>`).join('')}
      </ul>
      <span class="cat-card-action">
        ${t('view_category')} <span class="flip-rtl">→</span>
      </span>
    </div>
  `).join('');

  grid.querySelectorAll('.cat-card').forEach(el => {
    el.addEventListener('click', () => {
      setFilter(el.dataset.cat);
      const target = $('products');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderFilters() {
  const wrap = $('filters');
  if (!wrap) return;
  const btns = [
    { id: 'all', label: t('filter_all') },
    ...CATEGORIES.map(c => ({ id: c.id, label: c.name[lang] }))
  ];
  wrap.innerHTML = btns.map(b => `
    <button data-f="${b.id}" class="${b.id === activeFilter ? 'active' : ''}">${b.label}</button>
  `).join('');

  wrap.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => setFilter(b.dataset.f));
  });
}

function renderSubFilters() {
  const wrap = $('subfilterWrap');
  const pills = $('subFilters');
  if (!wrap || !pills) return;

  if (activeFilter === 'all') {
    wrap.style.display = 'none';
    return;
  }

  const category = CATEGORIES.find(c => c.id === activeFilter);
  if (!category || !category.subs || category.subs.length === 0) {
    wrap.style.display = 'none';
    return;
  }

  wrap.style.display = 'flex';
  const subBtns = [
    { id: 'all', label: t('filter_subcat_all') },
    ...category.subs.map(s => ({ id: s.id, label: s.name[lang] }))
  ];

  pills.innerHTML = subBtns.map(s => `
    <button data-sub="${s.id}" class="${s.id === activeSubFilter ? 'active' : ''}">${s.label}</button>
  `).join('');

  pills.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSubFilter = btn.dataset.sub;
      renderSubFilters();
      renderProducts();
    });
  });
}

function setFilter(f) {
  activeFilter = f;
  activeSubFilter = 'all';
  renderFilters();
  renderSubFilters();
  renderProducts();
}

function cardHTML(p) {
  const mainImage = (p.images && p.images[0]) || '';
  const specPills = p.specs ? p.specs.slice(0, 2).map(s => `<span class="card-spec-tag">${s[0].split('/')[0].trim()}: ${s[1]}</span>`).join('') : '';
  return `
    <div class="card product-card" data-open="${p.id}" tabindex="0" role="button">
      <div class="card-img-wrap">
        <img src="${mainImage}" alt="${p.name[lang]}" loading="lazy" id="cardImg_${p.id}">
        <span class="card-badge">${catName(p.cat)}</span>
      </div>
      <div class="card-body">
        <div class="card-cat-line">
          <span class="card-sku">${p.sku}</span>
          <span class="card-subcat">${subcatName(p.cat, p.subcat)}</span>
        </div>
        <h3 class="card-title">${p.name[lang]}</h3>
        <div class="card-spec-tags">${specPills}</div>
        <div class="card-footer">
          <div class="card-price">${p.price} <small>${t('currency')}</small></div>
          <span class="card-btn btn-link">${t('view_product')} <span class="flip-rtl">→</span></span>
        </div>
      </div>
    </div>
  `;
}

function renderProducts() {
  const grid = $('productGrid');
  const countEl = $('resultsCount');
  const resetBtn = $('resetFiltersBtn');
  const emptyBox = $('noProducts');
  if (!grid) return;

  let list = PRODUCTS;

  // Filter Category
  if (activeFilter !== 'all') {
    list = list.filter(p => p.cat === activeFilter);
  }

  // Filter Subcategory
  if (activeSubFilter !== 'all') {
    list = list.filter(p => p.subcat === activeSubFilter);
  }

  // Search Filter
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(p => {
      const matchName = p.name[lang].toLowerCase().includes(q) || (p.name.en && p.name.en.toLowerCase().includes(q));
      const matchSku = p.sku.toLowerCase().includes(q);
      const matchCat = catName(p.cat).toLowerCase().includes(q);
      const matchDesc = p.desc[lang].toLowerCase().includes(q);
      const matchSpecs = p.specs && p.specs.some(s => s[0].toLowerCase().includes(q) || s[1].toLowerCase().includes(q));
      return matchName || matchSku || matchCat || matchDesc || matchSpecs;
    });
  }

  // Render Count
  if (countEl) {
    countEl.textContent = t('results_count').replace('{n}', list.length);
  }

  const isFiltered = activeFilter !== 'all' || activeSubFilter !== 'all' || searchQuery.trim() !== '';
  if (resetBtn) resetBtn.hidden = !isFiltered;

  if (list.length === 0) {
    grid.innerHTML = '';
    if (emptyBox) emptyBox.hidden = false;
  } else {
    if (emptyBox) emptyBox.hidden = true;
    grid.innerHTML = list.map(cardHTML).join('');
    bindCards(grid);

    // Attach SVG fallbacks to rendered cards
    list.forEach(p => {
      const el = $(`cardImg_${p.id}`);
      if (el) attachImgFallback(el, p.cat, p.name[lang]);
    });
  }
}

function renderFeatured() {
  const grid = $('featuredGrid');
  if (!grid) return;
  const list = PRODUCTS.filter(p => p.featured);
  grid.innerHTML = list.map(cardHTML).join('');
  bindCards(grid);
  list.forEach(p => {
    const el = $(`cardImg_${p.id}`);
    if (el) attachImgFallback(el, p.cat, p.name[lang]);
  });
}

function bindCards(scope) {
  scope.querySelectorAll('[data-open]').forEach(el => {
    const clickHandler = () => openProduct(+el.dataset.open);
    el.addEventListener('click', clickHandler);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        clickHandler();
      }
    });
  });
}

function renderArticles() {
  const grid = $('articleGrid');
  if (!grid) return;
  grid.innerHTML = ARTICLES.map(a => `
    <div class="card article-card" data-article="${a.id}" tabindex="0" role="button">
      <div class="article-img-wrap">
        <img src="${a.img}" alt="${a.title[lang]}" loading="lazy" id="artImg_${a.id}">
      </div>
      <div class="card-body">
        <div class="article-meta">
          <span>${a.date}</span> · <span>${a.readTime.split('/')[0]}</span>
        </div>
        <h3>${a.title[lang]}</h3>
        <p class="article-excerpt">${a.excerpt[lang]}</p>
        <span class="btn-link mt-auto">${t('read_more')} <span class="flip-rtl">→</span></span>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('[data-article]').forEach(el => {
    el.addEventListener('click', () => openArticle(+el.dataset.article));
  });

  ARTICLES.forEach(a => {
    const el = $(`artImg_${a.id}`);
    if (el) attachImgFallback(el, 'tools', a.title[lang]);
  });
}

function openArticle(id) {
  const a = ARTICLES.find(x => x.id === id);
  if (!a) return;
  currentArticle = a;
  $('articleTitle').textContent = a.title[lang];
  $('articleAuthor').textContent = a.author;
  $('articleDate').textContent = a.date;
  $('articleReadTime').textContent = a.readTime;
  $('articleText').innerHTML = a.body[lang];
  $('articleMainImg').src = a.img;
  attachImgFallback($('articleMainImg'), 'tools', a.title[lang]);
  $('articleMeta').innerHTML = `<span class="section-badge">${a.tag}</span>`;
  $('articleBody').hidden = false;
  $('articleBody').scrollIntoView({ behavior: 'smooth' });
}

/* ---------- Product Detail View & Gallery ---------- */
let currentImageIndex = 0;

function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  currentImageIndex = 0;
  updateProductDetailView();
  showView('product');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProductDetailView() {
  const p = currentProduct;
  if (!p) return;

  $('pName').textContent = p.name[lang];
  $('pPrice').textContent = p.price;
  $('pDesc').textContent = p.desc[lang];
  $('pCatTag').textContent = catName(p.cat);
  $('pSubcatTag').textContent = subcatName(p.cat, p.subcat);
  $('pSku').textContent = 'SKU: ' + p.sku;

  $('pBreadcrumbs').innerHTML = `
    <a href="#" data-nav="home">${t('nav_home')}</a> / 
    <a href="#" data-f="${p.cat}">${catName(p.cat)}</a> / 
    <span>${p.name[lang]}</span>
  `;

  $('pBreadcrumbs').querySelectorAll('a[data-f]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      setFilter(p.cat);
      showView('home');
      $('products').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Specs Table
  $('pSpecs').innerHTML = p.specs.map(s => `
    <tr>
      <td>${s[0]}</td>
      <td><strong>${s[1]}</strong></td>
    </tr>
  `).join('');

  // Gallery
  setGalleryImage(currentImageIndex);
  $('galThumbs').innerHTML = p.images.map((src, i) => `
    <div class="gal-thumb ${i === currentImageIndex ? 'active' : ''}" data-i="${i}">
      <img src="${src}" alt="Thumb ${i + 1}" id="thumbImg_${i}">
    </div>
  `).join('');

  p.images.forEach((src, i) => {
    const th = $(`thumbImg_${i}`);
    if (th) attachImgFallback(th, p.cat, p.name[lang]);
  });

  document.querySelectorAll('#galThumbs .gal-thumb').forEach(th => {
    th.addEventListener('click', () => {
      setGalleryImage(+th.dataset.i);
    });
  });

  // WhatsApp Button Link with localized message
  const waMsg = encodeURIComponent(`Hello NovaTrade, I would like to inquire about ${p.name.en} (SKU: ${p.sku})`);
  $('pWhatsAppBtn').href = `https://wa.me/989121234567?text=${waMsg}`;
}

function setGalleryImage(idx) {
  if (!currentProduct || !currentProduct.images || !currentProduct.images[idx]) return;
  currentImageIndex = idx;
  const main = $('galMain');
  main.style.opacity = '0.4';
  main.src = currentProduct.images[idx];
  attachImgFallback(main, currentProduct.cat, currentProduct.name[lang]);
  setTimeout(() => { main.style.opacity = '1'; }, 120);

  document.querySelectorAll('#galThumbs .gal-thumb').forEach((th, i) => {
    th.classList.toggle('active', i === idx);
  });
}

$('galPrev').addEventListener('click', () => {
  if (!currentProduct) return;
  const nextIdx = (currentImageIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
  setGalleryImage(nextIdx);
});

$('galNext').addEventListener('click', () => {
  if (!currentProduct) return;
  const nextIdx = (currentImageIndex + 1) % currentProduct.images.length;
  setGalleryImage(nextIdx);
});

/* ---------- Real PDF Catalog Generator ---------- */
function downloadCatalog() {
  const p = currentProduct || PRODUCTS[0];
  const esc = s => (s || '').replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  
  let stream = '';
  // Navy Header Box
  stream += 'q\n0.05 0.25 0.55 rg 0 760 595 82 re f\nQ\n';
  // Header Text
  stream += 'BT\n/F2 18 Tf\n1 1 1 rg\n50 812 Td\n(' + esc('NOVATRADE INDUSTRIAL GROUP') + ') Tj\nET\n';
  stream += 'BT\n/F1 10 Tf\n0.85 0.92 1 rg\n50 794 Td\n(' + esc('GLOBAL INDUSTRIAL & COMMERCIAL EQUIPMENT SOLUTIONS | FIVE-LANGUAGE B2B DEMO') + ') Tj\nET\n';
  stream += 'BT\n/F1 9 Tf\n0.8 0.88 0.98 rg\n50 778 Td\n(' + esc('ISO 9001:2015 CERTIFIED | CE COMPLIANT | 18 MONTHS GOLDEN WARRANTY') + ') Tj\nET\n';

  // Document Info Box
  stream += 'q\n0.95 0.96 0.98 rg 50 680 495 65 re f\n0.8 0.85 0.9 RG 1 w 50 680 495 65 re s\nQ\n';
  stream += 'BT\n/F2 11 Tf\n0.1 0.15 0.25 rg\n65 725 Td\n(' + esc('OFFICIAL TECHNICAL DATASHEET & SPECIFICATION SHEET') + ') Tj\nET\n';
  stream += 'BT\n/F1 9 Tf\n0.3 0.35 0.4 rg\n65 708 Td\n(' + esc('Model SKU: ' + p.sku + ' | Category: ' + p.name.en) + ') Tj\nET\n';
  stream += 'BT\n/F1 9 Tf\n0.3 0.35 0.4 rg\n65 692 Td\n(' + esc('Doc Reference: NT-DS-' + p.id + ' | Date: 2026-11-19 | Status: ACTIVE & CERTIFIED') + ') Tj\nET\n';

  // Product Name
  stream += 'BT\n/F2 14 Tf\n0.06 0.2 0.45 rg\n50 645 Td\n(' + esc(p.name.en) + ') Tj\nET\n';
  // Commercial Status
  stream += 'BT\n/F2 10.5 Tf\n0.05 0.5 0.25 rg\n50 626 Td\n(' + esc('Commercial Status: Ready for Dispatch | Export Price: ' + p.price + ' Toman') + ') Tj\nET\n';
  // Description
  stream += 'BT\n/F1 9.5 Tf\n0.2 0.25 0.3 rg\n50 600 Td\n(' + esc(p.desc.en) + ') Tj\nET\n';

  // Table Header
  stream += 'q\n0.1 0.3 0.6 rg 50 560 495 22 re f\nQ\n';
  stream += 'BT\n/F2 10 Tf\n1 1 1 rg\n65 567 Td\n(' + esc('TECHNICAL SPECIFICATION') + ') Tj\n350 0 Td\n(' + esc('ENGINEERING VALUE / STANDARD') + ') Tj\nET\n';

  // Specs Rows
  let y = 538;
  p.specs.forEach((s, idx) => {
    if (idx % 2 === 0) {
      stream += 'q\n0.96 0.97 0.99 rg 50 ' + y + ' 495 20 re f\nQ\n';
    }
    stream += 'q\n0.88 0.9 0.94 RG 0.5 w 50 ' + y + ' 495 20 re s\nQ\n';
    stream += 'BT\n/F2 9 Tf\n0.15 0.2 0.3 rg\n65 ' + (y + 5) + ' Td\n(' + esc(s[0].split('/')[0].trim()) + ') Tj\nET\n';
    stream += 'BT\n/F1 9 Tf\n0.2 0.25 0.35 rg\n365 ' + (y + 5) + ' Td\n(' + esc(s[1]) + ') Tj\nET\n';
    y -= 20;
  });

  // Warranty Banner
  y -= 15;
  stream += 'q\n0.94 0.98 0.95 rg 50 ' + (y - 45) + ' 495 50 re f\n0.2 0.65 0.35 RG 1 w 50 ' + (y - 45) + ' 495 50 re s\nQ\n';
  stream += 'BT\n/F2 10.5 Tf\n0.1 0.5 0.2 rg\n65 ' + (y - 12) + ' Td\n(' + esc('GUARANTEE & AFTER-SALES SERVICE COMMITMENT') + ') Tj\nET\n';
  stream += 'BT\n/F1 8.5 Tf\n0.2 0.3 0.25 rg\n65 ' + (y - 28) + ' Td\n(' + esc('All equipment is backed by an 18-month comprehensive parts warranty and 10-year guaranteed') + ') Tj\nET\n';
  stream += 'BT\n/F1 8.5 Tf\n0.2 0.3 0.25 rg\n65 ' + (y - 40) + ' Td\n(' + esc('after-sales spare parts support across Iran, UAE, Turkey, Iraq, Russia, and Central Asia.') + ') Tj\nET\n';

  // Footer
  stream += 'q\n0.8 0.85 0.9 RG 0.75 w 50 70 495 0 m 545 70 l S\nQ\n';
  stream += 'BT\n/F2 8.5 Tf\n0.2 0.25 0.3 rg\n50 55 Td\n(' + esc('NovaTrade Head Office: Valiasr St., Tehran | Hotline: +98 21 8877 6655 | WhatsApp: +98 912 123 4567') + ') Tj\nET\n';
  stream += 'BT\n/F1 8 Tf\n0.4 0.45 0.5 rg\n50 42 Td\n(' + esc('Regional Hubs: Istanbul, Turkey | Dubai, UAE | Moscow, Russia | Web: www.novatrade.example') + ') Tj\nET\n';
  stream += 'BT\n/F1 7.5 Tf\n0.5 0.55 0.6 rg\n50 30 Td\n(' + esc('Official Multilingual Product Datasheet (FA / EN / AR / TR / RU) - Generated Nov 2026') + ') Tj\nET\n';

  const objs = [
    '1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj',
    '2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj',
    '3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 595 842]/Contents 4 0 R/Resources<</Font<</F1 5 0 R/F2 6 0 R>>>>>>endobj',
    `4 0 obj<</Length ${stream.length}>>stream\n${stream}\nendstream endobj`,
    '5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj',
    '6 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica-Bold>>endobj'
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objs.forEach(o => { offsets.push(pdf.length); pdf += o + '\n'; });
  const xrefPos = pdf.length;
  pdf += 'xref\n0 7\n0000000000 65535 f \n' + offsets.map(o => String(o).padStart(10, '0') + ' 00000 n ').join('\n') + `\ntrailer<</Size 7/Root 1 0 R>>\nstartxref\n${xrefPos}\n%%EOF`;

  const blob = new Blob([pdf], { type: 'application/pdf' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `novatrade-datasheet-${p.sku}.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

/* ---------- Interactive Video Modal with CAD Simulation ---------- */
let isVideoPlaying = false;
let videoProgress = 0; // 0 to 90 seconds
let videoAnimId = null;
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

  function drawFrame() {
    ctx.fillStyle = '#090e17';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Background Grid
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 32) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 32) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Draw Rotating Turbine / Impeller CAD Schematic
    ctx.save();
    ctx.translate(cx, cy);
    if (isVideoPlaying) angle += 0.03;
    ctx.rotate(angle);

    // Center Hub
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.arc(0, 0, 32, 0, Math.PI * 2);
    ctx.fill();

    // Impeller Blades
    const blades = 6;
    for (let i = 0; i < blades; i++) {
      ctx.save();
      ctx.rotate((Math.PI * 2 / blades) * i);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(30, 0);
      ctx.quadraticCurveTo(80, 25, 95, -15);
      ctx.stroke();

      ctx.fillStyle = 'rgba(14, 165, 233, 0.25)';
      ctx.beginPath();
      ctx.moveTo(30, 0);
      ctx.quadraticCurveTo(80, 25, 95, -15);
      ctx.lineTo(85, -25);
      ctx.quadraticCurveTo(70, 10, 28, -8);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Outer Shroud Ring
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 105, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();

    // Telemetry Gauges Overlay
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px monospace';
    ctx.fillText('RPM: 2950 [VFD ACTIVE]', 30, 50);
    ctx.fillText('PRESSURE: 8.5 BAR [STABLE]', 30, 70);
    ctx.fillText('TEMP: 42.4 °C [NORMAL]', 30, 90);
    ctx.fillText('VIBRATION: 0.8 mm/s [ISO 10816]', 30, 110);
    ctx.fillText('EFFICIENCY: 94.2% [IE3]', 30, 130);

    // Progress Update if playing
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
  $('videoHudModel').textContent = `${p.sku} — ${p.name.en.toUpperCase()}`;
  isVideoPlaying = true;
  $('videoPlayBtn').textContent = '⏸';
  initVideoCanvas();
}

function closeVideoModal() {
  const modal = $('videoModal');
  if (!modal) return;
  modal.hidden = true;
  isVideoPlaying = false;
}

$('videoPlayBtn').addEventListener('click', () => {
  if (videoProgress >= VIDEO_DURATION) videoProgress = 0;
  isVideoPlaying = !isVideoPlaying;
  $('videoPlayBtn').textContent = isVideoPlaying ? '⏸' : '▶';
});

$('videoProgressWrap').addEventListener('click', e => {
  const rect = $('videoProgressWrap').getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const pct = Math.max(0, Math.min(1, clickX / rect.width));
  videoProgress = pct * VIDEO_DURATION;
  $('videoProgressBar').style.width = (pct * 100) + '%';
  $('videoTime').textContent = `${formatTime(videoProgress)} / ${formatTime(VIDEO_DURATION)}`;
});

let isMuted = false;
$('videoMuteBtn').addEventListener('click', () => {
  isMuted = !isMuted;
  $('videoMuteBtn').textContent = isMuted ? '🔇' : '🔊';
});

$('videoBtn').addEventListener('click', openVideoModal);
$('videoClose').addEventListener('click', closeVideoModal);
$('videoBackdrop').addEventListener('click', closeVideoModal);
$('catalogBtn').addEventListener('click', downloadCatalog);
$('modalDownloadPdf').addEventListener('click', () => { closeVideoModal(); downloadCatalog(); });
$('modalConsultBtn').addEventListener('click', () => { closeVideoModal(); showView('contact'); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !$('videoModal').hidden) closeVideoModal();
});

/* ---------- Serial Number Warranty Lookup ---------- */
const KNOWN_SERIALS = {
  'NT-88214': { model: 'High-Pressure Centrifugal Pump P-240', status: 'Active', validUntil: '2028-05-14', owner: 'PetroChemical Corp', daysLeft: 540 },
  'NT-PMP-240': { model: 'High-Pressure Centrifugal Pump P-240', status: 'Active', validUntil: '2028-04-10', owner: 'Tehran Waterworks', daysLeft: 505 },
  'NT-REF-900': { model: 'Industrial Double-Door Refrigerator R-900', status: 'Active', validUntil: '2028-08-20', owner: 'Horeca Grand Hotel', daysLeft: 638 },
  'NT-GEN-100': { model: 'Diesel Generator 100 kVA G-100', status: 'Active', validUntil: '2028-09-01', owner: 'Central Healthcare Hospital', daysLeft: 650 }
};

$('serialCheckForm').addEventListener('submit', e => {
  e.preventDefault();
  const input = $('serialInput').value.trim().toUpperCase();
  const res = $('serialResult');
  if (!input) return;

  const data = KNOWN_SERIALS[input] || {
    model: 'NovaTrade Certified Equipment (' + input + ')',
    status: 'Active',
    validUntil: '2028-06-30',
    owner: 'Verified Industrial Partner',
    daysLeft: 580
  };

  res.hidden = false;
  res.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
      <span style="font-weight:800; font-size:16px; color:var(--success);">✓ ${t('warranty_badge')}</span>
      <span style="font-family:monospace; background:var(--brand-subtle); color:var(--brand); font-weight:700; padding:2px 8px; border-radius:4px;">SN: ${input}</span>
    </div>
    <p><strong>${t('f_serial')}:</strong> ${data.model}</p>
    <p><strong>${t('card_valid')}:</strong> ${data.validUntil} (${data.daysLeft} days remaining)</p>
    <p><strong>Coverage:</strong> Comprehensive 18-month parts & labor guarantee with 10-year OEM spare parts commitment.</p>
  `;
});

/* ---------- Universal Form Validation Engine ---------- */
function validMobile(v) {
  return /^[0-9+\s\-]{10,18}$/.test(v.trim());
}

function validEmail(v) {
  if (!v.trim()) return true; // Optional if empty unless required
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
      const errEl = $(f.errId);
      if (!el) return;

      let msg = '';
      if (f.required && !el.value.trim()) {
        msg = t('err_required');
      } else if (f.type === 'mobile' && !validMobile(el.value)) {
        msg = t('err_mobile');
      } else if (f.type === 'email' && !validEmail(el.value)) {
        msg = t('err_email');
      }

      if (msg) {
        hasError = true;
        el.classList.add('invalid');
        if (errEl) errEl.textContent = msg;
      } else {
        el.classList.remove('invalid');
        if (errEl) errEl.textContent = '';
      }
    });

    const generalErr = $(cfg.generalErrId);
    const okBox = $(cfg.okBoxId);

    if (hasError) {
      if (generalErr) {
        generalErr.hidden = false;
        generalErr.textContent = t('err_required');
      }
      if (okBox) okBox.hidden = true;
      return;
    }

    if (generalErr) generalErr.hidden = true;
    if (cfg.onSuccess) cfg.onSuccess(form);
    if (okBox) okBox.hidden = false;
    form.reset();
  });
}

// 1. Home Quote Form
setupForm({
  formId: 'homeQuoteForm',
  generalErrId: 'hqErr',
  okBoxId: 'hqOk',
  fields: [
    { id: 'hqName', errId: 'hqNameErr', required: true },
    { id: 'hqMobile', errId: 'hqMobileErr', required: true, type: 'mobile' },
    { id: 'hqEmail', errId: 'hqEmailErr', required: false, type: 'email' },
    { id: 'hqMsg', errId: 'hqMsgErr', required: true }
  ],
  onSuccess: () => {
    const code = 'NT-QUOTE-' + Math.floor(100000 + Math.random() * 900000);
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
  onSuccess: form => {
    const name = $('clubName').value || 'VIP Partner';
    const num = 'NT-VIP-' + Math.floor(100000 + Math.random() * 900000);
    $('cardMemberName').textContent = name;
    $('cardMemberNumber').textContent = num;
    $('clubSuccessMeta').textContent = `Member ID: ${num}`;
    $('clubCardDisplay').scrollIntoView({ behavior: 'smooth' });
  }
});

// 3. Warranty Service Form
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
    const code = 'NT-WAR-' + Math.floor(100000 + Math.random() * 900000);
    $('wOkMsg').textContent = t('warranty_ok_prefix');
    $('wTicketCode').textContent = code;
  }
});

$('copyTicketBtn').addEventListener('click', () => {
  const code = $('wTicketCode').textContent;
  if (!code) return;
  navigator.clipboard.writeText(code).then(() => {
    $('copyTicketBtn').textContent = t('warranty_copied');
    setTimeout(() => { $('copyTicketBtn').textContent = t('warranty_copy_code'); }, 2000);
  });
});

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
    const code = 'NT-MSG-' + Math.floor(100000 + Math.random() * 900000);
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

/* ---------- Router & Navigation ---------- */
function showView(name) {
  currentView = name;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = $('view-' + name);
  if (el) el.classList.add('active');

  // Update nav links active status
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.nav === name && !link.dataset.scroll);
  });

  $('mainNav').classList.remove('open');
  $('burger').setAttribute('aria-expanded', 'false');
}

document.querySelectorAll('[data-nav]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const navTarget = a.dataset.nav;
    showView(navTarget);

    if (a.dataset.scroll) {
      setTimeout(() => {
        const s = $(a.dataset.scroll);
        if (s) s.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('[data-scroll]:not([data-nav])').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const s = $(a.dataset.scroll);
    if (s) s.scrollIntoView({ behavior: 'smooth' });
  });
});

$('backBtn').addEventListener('click', () => showView('home'));
$('articleBack').addEventListener('click', () => { $('articleBody').hidden = true; });

/* ---------- Language Switcher & Persistence ---------- */
function setLang(l) {
  if (!LANGS[l]) return;
  lang = l;

  try {
    localStorage.setItem('novatrade_preferred_lang', l);
  } catch (e) {
    // ignore
  }

  // Update HTML tag attributes
  document.documentElement.lang = l;
  document.documentElement.dir = LANGS[l].dir;

  // Update Header Button
  $('langCurrent').textContent = LANGS[l].name;

  // Update Active Menu State
  document.querySelectorAll('#langMenu button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });

  // Update all [data-i18n] text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key && T[lang][key]) {
      el.textContent = T[lang][key];
    }
  });

  // Update all [data-i18n-placeholder] attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (key && T[lang][key]) {
      el.placeholder = T[lang][key];
    }
  });

  // Update all [data-i18n-title] attributes
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (key && T[lang][key]) {
      el.title = T[lang][key];
    }
  });

  // Document Title & Meta Description
  document.title = t('meta_title');
  const metaDesc = $('metaDesc');
  if (metaDesc) metaDesc.setAttribute('content', t('meta_desc'));

  // Re-render components with translated content
  renderCats();
  renderFilters();
  renderSubFilters();
  renderProducts();
  renderFeatured();
  renderArticles();

  // If in Product detail view, re-render product details without leaving the view!
  if (currentView === 'product' && currentProduct) {
    updateProductDetailView();
  }

  // If in Article reader view, update open article
  if (currentArticle && !$('articleBody').hidden) {
    openArticle(currentArticle.id);
  }

  $('langMenu').classList.remove('open');
  $('langBtn').setAttribute('aria-expanded', 'false');
}

$('langBtn').addEventListener('click', e => {
  e.stopPropagation();
  const menu = $('langMenu');
  const isOpen = menu.classList.toggle('open');
  $('langBtn').setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('click', () => {
  $('langMenu').classList.remove('open');
  $('langBtn').setAttribute('aria-expanded', 'false');
});

document.querySelectorAll('#langMenu button').forEach(b => {
  b.addEventListener('click', () => setLang(b.dataset.lang));
});

/* ---------- Mobile Menu & Search Events ---------- */
$('burger').addEventListener('click', () => {
  const isOpen = $('mainNav').classList.toggle('open');
  $('burger').setAttribute('aria-expanded', String(isOpen));
});

const searchInput = $('productSearch');
const clearSearch = $('searchClear');

if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    clearSearch.hidden = !searchQuery;
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

$('resetFiltersBtn').addEventListener('click', () => {
  activeFilter = 'all';
  activeSubFilter = 'all';
  searchQuery = '';
  if (searchInput) searchInput.value = '';
  if (clearSearch) clearSearch.hidden = true;
  renderFilters();
  renderSubFilters();
  renderProducts();
});

$('resetEmptyBtn').addEventListener('click', () => {
  activeFilter = 'all';
  activeSubFilter = 'all';
  searchQuery = '';
  if (searchInput) searchInput.value = '';
  if (clearSearch) clearSearch.hidden = true;
  renderFilters();
  renderSubFilters();
  renderProducts();
});

/* ---------- Floating Quick Contact (Scroll Detection) ---------- */
window.addEventListener('scroll', () => {
  const qc = $('quickContact');
  if (!qc) return;
  qc.classList.toggle('visible', window.scrollY > 250);
}, { passive: true });

$('qcMain').addEventListener('click', () => {
  const qc = $('quickContact');
  const isOpen = qc.classList.toggle('open');
  $('qcMain').setAttribute('aria-expanded', String(isOpen));
});

// Close quick contact when clicking outside
document.addEventListener('click', e => {
  const qc = $('quickContact');
  if (qc && !qc.contains(e.target)) {
    qc.classList.remove('open');
    $('qcMain').setAttribute('aria-expanded', 'false');
  }
});

/* ---------- Initial Startup ---------- */
setLang(lang);
