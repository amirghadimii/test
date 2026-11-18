'use strict';
/* ---------- i18n ---------- */
const LANGS = {
  fa:{name:'فارسی', dir:'rtl'},
  en:{name:'English', dir:'ltr'},
  ar:{name:'العربية', dir:'rtl'},
  tr:{name:'Türkçe', dir:'ltr'},
  ru:{name:'Русский', dir:'ltr'}
};
const T = {
fa:{nav_home:'خانه',nav_products:'محصولات',nav_articles:'مقالات',nav_club:'باشگاه مشتریان',nav_warranty:'گارانتی و خدمات',nav_about:'درباره ما',nav_contact:'تماس',hero_title:'تجهیزات صنعتی و تجاری، با پشتیبانی پنج‌زبانه',hero_sub:'فروش، گارانتی و خدمات پس از فروش در ایران و بازارهای منطقه',hero_cta_products:'مشاهده محصولات',hero_cta_contact:'درخواست مشاوره',cats_title:'دسته‌بندی محصولات',products_title:'محصولات',featured_title:'محصولات منتخب',all:'همه',back:'← بازگشت',specs:'مشخصات فنی',download_catalog:'دانلود کاتالوگ (PDF)',watch_video:'🎬 ویدئوی معرفی',articles_title:'مقالات و اخبار',club_title:'باشگاه مشتریان',club_text:'با عضویت در باشگاه مشتریان از تخفیف‌های دوره‌ای، اولویت خدمات و امتیاز خرید بهره‌مند شوید.',warranty_title:'گارانتی و خدمات پس از فروش',warranty_text:'همه محصولات دارای ۱۸ ماه گارانتی و ۱۰ سال خدمات پس از فروش هستند. برای ثبت درخواست خدمات فرم زیر را تکمیل کنید.',about_title:'درباره ما',about_text:'گروه صنعتی و بازرگانی NovaTrade از سال ۱۳۸۵ در زمینه تأمین و فروش تجهیزات صنعتی و تجاری فعالیت می‌کند و امروز با شبکه فروش و خدمات در پنج کشور منطقه، به مشتریان فارسی، انگلیسی، عربی، ترکی و روسی‌زبان خدمت می‌دهد.',stat_years:'سال تجربه',stat_langs:'زبان پشتیبانی',stat_clients:'مشتری سازمانی',contact_title:'تماس با ما',address:'تهران، خیابان ولیعصر، پلاک ۱۲۴۰',f_name:'نام و نام خانوادگی',f_mobile:'موبایل',f_email:'ایمیل',f_serial:'شماره سریال دستگاه',f_issue:'شرح مشکل',f_subject:'موضوع',f_message:'پیام',join:'عضویت',send_request:'ثبت درخواست',send:'ارسال پیام',success:'ثبت شد! خوش آمدید.',success_msg:'پیام شما ثبت شد؛ به‌زودی پاسخ می‌دهیم.',warranty_ok:'درخواست شما ثبت شد. کد پیگیری: ',footer_text:'© ۲۰۲۶ NovaTrade — نسخه نمایشی پنج‌زبانه برای پیشنهاد پروژه',video_title:'ویدئوی معرفی محصول',video_soon:'ویدئوی معرفی محصول به‌زودی در این بخش قرار می‌گیرد.',err_required:'لطفاً همه فیلدهای الزامی را درست تکمیل کنید.',view_product:'مشاهده محصول',read_more:'ادامه مطلب'},
en:{nav_home:'Home',nav_products:'Products',nav_articles:'Articles',nav_club:'Customer Club',nav_warranty:'Warranty & Service',nav_about:'About Us',nav_contact:'Contact',hero_title:'Industrial & commercial equipment, supported in five languages',hero_sub:'Sales, warranty and after-sales service across Iran and regional markets',hero_cta_products:'Browse Products',hero_cta_contact:'Request a Consultation',cats_title:'Product Categories',products_title:'Products',featured_title:'Featured Products',all:'All',back:'← Back',specs:'Technical Specifications',download_catalog:'Download Catalog (PDF)',watch_video:'🎬 Intro Video',articles_title:'Articles & News',club_title:'Customer Club',club_text:'Join the customer club for periodic discounts, service priority and purchase points.',warranty_title:'Warranty & After-Sales Service',warranty_text:'All products include an 18-month warranty and 10 years of after-sales service. Submit the form below for a service request.',about_title:'About Us',about_text:'NovaTrade Industrial & Trading Group has supplied industrial and commercial equipment since 2007, and today serves Persian, English, Arabic, Turkish and Russian-speaking customers through sales and service networks in five regional countries.',stat_years:'Years of experience',stat_langs:'Support languages',stat_clients:'Corporate clients',contact_title:'Contact Us',address:'No. 1240, Valiasr St., Tehran',f_name:'Full name',f_mobile:'Mobile',f_email:'Email',f_serial:'Device serial number',f_issue:'Describe the problem',f_subject:'Subject',f_message:'Message',join:'Join',send_request:'Submit Request',send:'Send Message',success:'Done! Welcome aboard.',success_msg:'Your message was received; we will reply soon.',warranty_ok:'Your request was registered. Tracking code: ',footer_text:'© 2026 NovaTrade — Five-language demo for a project proposal',video_title:'Product Intro Video',video_soon:'The product intro video will be placed here soon.',err_required:'Please complete all required fields correctly.',view_product:'View Product',read_more:'Read more'},
ar:{nav_home:'الرئيسية',nav_products:'المنتجات',nav_articles:'المقالات',nav_club:'نادي العملاء',nav_warranty:'الضمان والخدمات',nav_about:'من نحن',nav_contact:'اتصل بنا',hero_title:'معدات صناعية وتجارية بدعم بخمس لغات',hero_sub:'البيع والضمان وخدمات ما بعد البيع في إيران وأسواق المنطقة',hero_cta_products:'تصفح المنتجات',hero_cta_contact:'طلب استشارة',cats_title:'فئات المنتجات',products_title:'المنتجات',featured_title:'منتجات مختارة',all:'الكل',back:'→ رجوع',specs:'المواصفات الفنية',download_catalog:'تنزيل الكتالوج (PDF)',watch_video:'🎬 فيديو تعريفي',articles_title:'المقالات والأخبار',club_title:'نادي العملاء',club_text:'انضم إلى نادي العملاء للاستفادة من الخصومات الدورية وأولوية الخدمة ونقاط الشراء.',warranty_title:'الضمان وخدمات ما بعد البيع',warranty_text:'تشمل جميع المنتجات ضمانًا لمدة ١٨ شهرًا وخدمات ما بعد البيع لمدة ١٠ سنوات. املأ النموذج أدناه لطلب الخدمة.',about_title:'من نحن',about_text:'تعمل مجموعة NovaTrade الصناعية والتجارية في توريد المعدات الصناعية والتجارية منذ عام ٢٠٠٧، وتخدم اليوم العملاء الناطقين بالفارسية والإنجليزية والعربية والتركية والروسية عبر شبكات بيع وخدمة في خمس دول بالمنطقة.',stat_years:'سنوات الخبرة',stat_langs:'لغات الدعم',stat_clients:'عميل مؤسسي',contact_title:'اتصل بنا',address:'طهران، شارع ولي عصر، رقم ١٢٤٠',f_name:'الاسم الكامل',f_mobile:'الجوال',f_email:'البريد الإلكتروني',f_serial:'الرقم التسلسلي للجهاز',f_issue:'وصف المشكلة',f_subject:'الموضوع',f_message:'الرسالة',join:'انضمام',send_request:'إرسال الطلب',send:'إرسال الرسالة',success:'تم! مرحبًا بك.',success_msg:'تم استلام رسالتك؛ سنرد قريبًا.',warranty_ok:'تم تسجيل طلبك. رمز التتبع: ',footer_text:'© 2026 NovaTrade — نموذج بخمس لغات لعرض مشروع',video_title:'فيديو تعريف المنتج',video_soon:'سيتم وضع الفيديو التعريفي بالمنتج هنا قريبًا.',err_required:'يرجى إكمال جميع الحقول المطلوبة بشكل صحيح.',view_product:'عرض المنتج',read_more:'اقرأ المزيد'},
tr:{nav_home:'Ana Sayfa',nav_products:'Ürünler',nav_articles:'Makaleler',nav_club:'Müşteri Kulübü',nav_warranty:'Garanti ve Servis',nav_about:'Hakkımızda',nav_contact:'İletişim',hero_title:'Beş dilde destekle endüstriyel ve ticari ekipman',hero_sub:'İran ve bölge pazarlarında satış, garanti ve satış sonrası servis',hero_cta_products:'Ürünlere Göz At',hero_cta_contact:'Danışmanlık İste',cats_title:'Ürün Kategorileri',products_title:'Ürünler',featured_title:'Öne Çıkan Ürünler',all:'Tümü',back:'← Geri',specs:'Teknik Özellikler',download_catalog:'Kataloğu İndir (PDF)',watch_video:'🎬 Tanıtım Videosu',articles_title:'Makaleler ve Haberler',club_title:'Müşteri Kulübü',club_text:'Periyodik indirimler, servis önceliği ve alışveriş puanları için müşteri kulübüne katılın.',warranty_title:'Garanti ve Satış Sonrası Servis',warranty_text:'Tüm ürünlerde 18 ay garanti ve 10 yıl satış sonrası servis vardır. Servis talebi için aşağıdaki formu doldurun.',about_title:'Hakkımızda',about_text:'NovaTrade Sanayi ve Ticaret Grubu 2007’den beri endüstriyel ve ticari ekipman tedarik etmektedir; bugün beş bölge ülkesindeki satış ve servis ağıyla Farsça, İngilizce, Arapça, Türkçe ve Rusça konuşan müşterilere hizmet verir.',stat_years:'Yıllık deneyim',stat_langs:'Destek dili',stat_clients:'Kurumsal müşteri',contact_title:'İletişim',address:'Valiasr Cad. No:1240, Tahran',f_name:'Ad Soyad',f_mobile:'Cep telefonu',f_email:'E-posta',f_serial:'Cihaz seri numarası',f_issue:'Sorunu açıklayın',f_subject:'Konu',f_message:'Mesaj',join:'Katıl',send_request:'Talebi Gönder',send:'Mesajı Gönder',success:'Tamam! Hoş geldiniz.',success_msg:'Mesajınız alındı; yakında yanıt vereceğiz.',warranty_ok:'Talebiniz kaydedildi. Takip kodu: ',footer_text:'© 2026 NovaTrade — Proje teklifi için beş dilli demo',video_title:'Ürün Tanıtım Videosu',video_soon:'Ürün tanıtım videosu yakında buraya eklenecek.',err_required:'Lütfen tüm zorunlu alanları doğru doldurun.',view_product:'Ürünü Gör',read_more:'Devamını oku'},
ru:{nav_home:'Главная',nav_products:'Продукция',nav_articles:'Статьи',nav_club:'Клуб клиентов',nav_warranty:'Гарантия и сервис',nav_about:'О нас',nav_contact:'Контакты',hero_title:'Промышленное и торговое оборудование с поддержкой на пяти языках',hero_sub:'Продажи, гарантия и послепродажное обслуживание в Иране и странах региона',hero_cta_products:'Смотреть продукцию',hero_cta_contact:'Запросить консультацию',cats_title:'Категории продукции',products_title:'Продукция',featured_title:'Избранные товары',all:'Все',back:'← Назад',specs:'Технические характеристики',download_catalog:'Скачать каталог (PDF)',watch_video:'🎬 Видеообзор',articles_title:'Статьи и новости',club_title:'Клуб клиентов',club_text:'Вступайте в клуб клиентов ради периодических скидок, приоритетного сервиса и бонусных баллов.',warranty_title:'Гарантия и послепродажное обслуживание',warranty_text:'На всю продукцию действует гарантия 18 месяцев и 10 лет послепродажного обслуживания. Заполните форму ниже для заявки на сервис.',about_title:'О нас',about_text:'Промышленно-торговая группа NovaTrade поставляет промышленное и торговое оборудование с 2007 года и сегодня обслуживает клиентов на персидском, английском, арабском, турецком и русском языках через сети продаж и сервиса в пяти странах региона.',stat_years:'Лет опыта',stat_langs:'Языков поддержки',stat_clients:'Корпоративных клиентов',contact_title:'Контакты',address:'Тегеран, ул. Валиаср, д. 1240',f_name:'ФИО',f_mobile:'Мобильный телефон',f_email:'Эл. почта',f_serial:'Серийный номер устройства',f_issue:'Описание проблемы',f_subject:'Тема',f_message:'Сообщение',join:'Вступить',send_request:'Отправить заявку',send:'Отправить сообщение',success:'Готово! Добро пожаловать.',success_msg:'Ваше сообщение получено; мы скоро ответим.',warranty_ok:'Ваша заявка зарегистрирована. Код отслеживания: ',footer_text:'© 2026 NovaTrade — Пятиязычная демо-версия для предложения проекта',video_title:'Видеообзор продукта',video_soon:'Видеообзор продукта скоро появится здесь.',err_required:'Пожалуйста, корректно заполните все обязательные поля.',view_product:'Смотреть товар',read_more:'Читать далее'}
};
let lang = 'fa';
const t = k => (T[lang] && T[lang][k]) || T.en[k] || k;

/* ---------- Data ---------- */
const IMG = {
  pump:'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  pump2:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
  pump3:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
  fridge:'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
  fridge2:'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80',
  oven:'https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=800&q=80',
  ac:'https://images.unsplash.com/photo-1631545806609-24040d63f8f7?w=800&q=80',
  ac2:'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80',
  gen:'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
  tool:'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80',
  tool2:'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80',
  scale:'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80'
};
const CATEGORIES = [
  {id:'pumps', name:{fa:'پمپ و آبرسانی',en:'Pumps & Water',ar:'المضخات والمياه',tr:'Pompa ve Su',ru:'Насосы и вода'}, subs:{fa:['پمپ صنعتی','بوستر پمپ','پمپ استخر'],en:['Industrial pumps','Booster sets','Pool pumps'],ar:['مضخات صناعية','معززات ضغط','مضخات مسابح'],tr:['Endüstriyel pompalar','Hidroforlar','Havuz pompaları'],ru:['Промышленные насосы','Бустерные установки','Насосы для бассейнов']}},
  {id:'cold', name:{fa:'سرمایش و برودتی',en:'Cooling & Refrigeration',ar:'التبريد والتجميد',tr:'Soğutma',ru:'Охлаждение'}, subs:{fa:['یخچال صنعتی','فریزر صندوقی','سردخانه'],en:['Industrial fridges','Chest freezers','Cold rooms'],ar:['ثلاجات صناعية','مجمدات','غرف تبريد'],tr:['Endüstriyel buzdolapları','Derin dondurucular','Soğuk odalar'],ru:['Промышленные холодильники','Морозильные лари','Холодильные камеры']}},
  {id:'hvac', name:{fa:'تهویه مطبوع',en:'HVAC',ar:'التكييف والتهوية',tr:'İklimlendirme',ru:'Вентиляция и климат'}, subs:{fa:['چیلر','داکت اسپلیت','فن‌کویل'],en:['Chillers','Ducted splits','Fan coils'],ar:['مبردات','سبليت مخفي','وحدات ملف مروحة'],tr:['Chiller','Kanallı split','Fan coil'],ru:['Чиллеры','Канальные сплиты','Фанкойлы']}},
  {id:'power', name:{fa:'برق و ژنراتور',en:'Power & Generators',ar:'الطاقة والمولدات',tr:'Güç ve Jeneratör',ru:'Энергия и генераторы'}, subs:{fa:['دیزل ژنراتور','UPS','تابلو برق'],en:['Diesel generators','UPS','Panels'],ar:['مولدات ديزل','مزودات طاقة','لوحات كهرباء'],tr:['Dizel jeneratörler','UPS','Panolar'],ru:['Дизель-генераторы','ИБП','Щиты']}},
  {id:'tools', name:{fa:'ابزار و تجهیزات کارگاهی',en:'Tools & Workshop',ar:'الأدوات والمعدات',tr:'Alet ve Atölye',ru:'Инструменты и цех'}, subs:{fa:['ابزار برقی','کمپرسور','ترازو صنعتی'],en:['Power tools','Compressors','Industrial scales'],ar:['أدوات كهربائية','ضواغط','موازين صناعية'],tr:['Elektrikli aletler','Kompresörler','Endüstriyel teraziler'],ru:['Электроинструменты','Компрессоры','Промышленные весы']}}
];
const PRODUCTS = [
  {id:1, cat:'pumps', price:'۴۸۵,۰۰۰,۰۰۰', name:{fa:'پمپ صنعتی فشارقوی P-240',en:'High-Pressure Industrial Pump P-240',ar:'مضخة صناعية عالية الضغط P-240',tr:'Yüksek Basınçlı Endüstriyel Pompa P-240',ru:'Промышленный насос высокого давления P-240'}, desc:{fa:'پمپ سانتریفیوژ فشارقوی برای خطوط تولید و بوستر آبرسانی ساختمان‌های بلند.',en:'High-pressure centrifugal pump for production lines and high-rise water boosting.',ar:'مضخة طرد مركزي عالية الضغط لخطوط الإنتاج وتعزيز مياه الأبراج.',tr:'Üretim hatları ve yüksek binalar için yüksek basınçlı santrifüj pompa.',ru:'Центробежный насос высокого давления для производственных линий и высотных зданий.'}, images:[IMG.pump,IMG.pump2,IMG.pump3], specs:[['Power / توان','15 kW'],['Flow / دبی','240 L/min'],['Head / هد','85 m'],['Warranty / گارانتی','18 months']], featured:true},
  {id:2, cat:'cold', price:'۶۲۰,۰۰۰,۰۰۰', name:{fa:'یخچال صنعتی دو درب R-900',en:'Double-Door Industrial Fridge R-900',ar:'ثلاجة صناعية ببابين R-900',tr:'Çift Kapılı Endüstriyel Buzdolabı R-900',ru:'Промышленный холодильник R-900'}, desc:{fa:'یخچال صنعتی استیل ۹۰۰ لیتری، کم‌مصرف و مناسب رستوران و فروشگاه.',en:'900-litre stainless industrial fridge, energy-efficient, ideal for restaurants and stores.',ar:'ثلاجة صناعية ستانلس ٩٠٠ لتر موفرة للطاقة للمطاعم والمتاجر.',tr:'Restoran ve mağazalar için 900 litrelik paslanmaz endüstriyel buzdolabı.',ru:'Промышленный холодильник из нержавеющей стали на 900 литров для ресторанов и магазинов.'}, images:[IMG.fridge,IMG.fridge2,IMG.pump3], specs:[['Capacity / ظرفیت','900 L'],['Temp / دما','-2..+8 °C'],['Energy / مصرف','A+'],['Warranty / گارانتی','18 months']], featured:true},
  {id:3, cat:'hvac', price:'۹۸۰,۰۰۰,۰۰۰', name:{fa:'داکت اسپلیت ۳۶۰۰۰ D-36',en:'Ducted Split 36000 D-36',ar:'سبليت مخفي ٣٦٠٠٠ D-36',tr:'Kanallı Split 36000 D-36',ru:'Канальный сплит 36000 D-36'}, desc:{fa:'داکت اسپلیت اینورتر ۳۶۰۰۰ با کمپرسور روتاری و صدای کم برای فضاهای اداری.',en:'36000 inverter ducted split with rotary compressor and low noise for offices.',ar:'سبليت مخفي إنفرتر ٣٦٠٠٠ بضاغط دوار وهادئ للمكاتب.',tr:'Ofisler için rotary kompresörlü, sessiz 36000 inverter kanallı split.',ru:'Инверторный канальный сплит 36000 с роторным компрессором для офисов.'}, images:[IMG.ac,IMG.ac2,IMG.pump2], specs:[['Capacity / ظرفیت','36000 BTU'],['Compressor / کمپرسور','Rotary Inverter'],['Noise / صدا','38 dB'],['Warranty / گارانتی','18 months']], featured:true},
  {id:4, cat:'power', price:'۱,۴۵۰,۰۰۰,۰۰۰', name:{fa:'دیزل ژنراتور ۱۰۰ کاوا G-100',en:'Diesel Generator 100 kVA G-100',ar:'مولد ديزل ١٠٠ ك.ف.أ G-100',tr:'Dizel Jeneratör 100 kVA G-100',ru:'Дизель-генератор 100 кВА G-100'}, desc:{fa:'دیزل ژنراتور ۱۰۰ کاوا با تابلو اتوماتیک، مناسب بیمارستان، کارخانه و دیتاسنتر.',en:'100 kVA diesel generator with automatic panel for hospitals, factories and data centers.',ar:'مولد ديزل ١٠٠ ك.ف.أ بلوحة أوتوماتيكية للمستشفيات والمصانع ومراكز البيانات.',tr:'Hastane, fabrika ve veri merkezleri için otomatik panolu 100 kVA dizel jeneratör.',ru:'Дизель-генератор 100 кВА с автоматической панелью для больниц, заводов и ЦОД.'}, images:[IMG.gen,IMG.pump,IMG.tool], specs:[['Power / توان','100 kVA'],['Engine / موتور','Perkins-type'],['Panel / تابلو','ATS Automatic'],['Warranty / گارانتی','18 months']], featured:false},
  {id:5, cat:'tools', price:'۱۸۵,۰۰۰,۰۰۰', name:{fa:'کمپرسور اسکرو ۷.۵ کیلووات C-75',en:'Screw Compressor 7.5 kW C-75',ar:'ضاغط لولبي ٧.٥ كيلوواط C-75',tr:'Vidalı Kompresör 7.5 kW C-75',ru:'Винтовой компрессор 7.5 кВт C-75'}, desc:{fa:'کمپرسور اسکرو کم‌صدا با مخزن ۵۰۰ لیتری برای کارگاه‌ها و خطوط تولید.',en:'Low-noise screw compressor with 500-litre tank for workshops and production lines.',ar:'ضاغط لولبي منخفض الضوضاء بخزان ٥٠٠ لتر للورش وخطوط الإنتاج.',tr:'Atölye ve üretim hatları için 500 litrelik tanklı sessiz vidalı kompresör.',ru:'Тихий винтовой компрессор с ресивером 500 л для цехов и производств.'}, images:[IMG.tool,IMG.tool2,IMG.scale], specs:[['Power / توان','7.5 kW'],['Tank / مخزن','500 L'],['Pressure / فشار','8 bar'],['Warranty / گارانتی','18 months']], featured:false},
  {id:6, cat:'cold', price:'۳۹۰,۰۰۰,۰۰۰', name:{fa:'فریزر صندوقی ۶۰۰ لیتری F-600',en:'Chest Freezer 600L F-600',ar:'مجمد صندوقي ٦٠٠ لتر F-600',tr:'Sandık Tipi Derin Dondurucu 600L F-600',ru:'Морозильный ларь 600 л F-600'}, desc:{fa:'فریزر صندوقی ۶۰۰ لیتری با سرمایش سریع برای فروشگاه‌های مواد غذایی.',en:'600-litre chest freezer with fast cooling for grocery stores.',ar:'مجمد صندوقي ٦٠٠ لتر بتبريد سريع لمتاجر البقالة.',tr:'Marketler için hızlı soğutmalı 600 litrelik sandık tipi dondurucu.',ru:'Морозильный ларь на 600 литров с быстрым охлаждением для продуктовых магазинов.'}, images:[IMG.fridge2,IMG.fridge,IMG.ac2], specs:[['Capacity / ظرفیت','600 L'],['Temp / دما','-18..-24 °C'],['Energy / مصرف','A'],['Warranty / گارانتی','18 months']], featured:false}
];
const ARTICLES = [
  {id:1, img:IMG.pump2, title:{fa:'راهنمای انتخاب پمپ صنعتی مناسب',en:'How to Choose the Right Industrial Pump',ar:'دليل اختيار المضخة الصناعية المناسبة',tr:'Doğru Endüstriyel Pompa Nasıl Seçilir',ru:'Как выбрать промышленный насос'}, text:{fa:'انتخاب پمپ به سه عامل بستگی دارد: دبی موردنیاز، هد یا ارتفاع پمپاژ و نوع سیال. در این راهنما با مثال‌های واقعی از پروژه‌های اجراشده، روش محاسبه هر سه عامل و اشتباهات رایج خریداران را مرور می‌کنیم.',en:'Choosing a pump depends on three factors: required flow, head, and fluid type. This guide reviews how to calculate each with real project examples and the most common buyer mistakes.',ar:'يعتمد اختيار المضخة على ثلاثة عوامل: التدفق المطلوب والرفع ونوع السائل. يستعرض هذا الدليل كيفية حساب كل عامل بأمثلة من مشاريع حقيقية وأخطاء المشترين الشائعة.',tr:'Pompa seçimi üç faktöre bağlıdır: gerekli debi, basma yüksekliği ve akışkan tipi. Bu rehber, gerçek proje örnekleriyle hesap yöntemlerini ve yaygın alıcı hatalarını inceler.',ru:'Выбор насоса зависит от трёх факторов: требуемой подачи, напора и типа жидкости. В этом руководстве — расчёты на реальных примерах и частые ошибки покупателей.'}},
  {id:2, img:IMG.ac, title:{fa:'کاهش مصرف برق سیستم‌های سرمایشی',en:'Cutting Cooling Energy Costs',ar:'تقليل استهلاک طاقة أنظمة التبريد',tr:'Soğutma Enerji Maliyetlerini Azaltma',ru:'Снижение затрат на охлаждение'}, text:{fa:'با سرویس دوره‌ای، تعویض فیلتر و تنظیم درست ترموستات می‌توان مصرف برق سیستم‌های سرمایشی را تا ۲۵ درصد کاهش داد. چک‌لیست کامل نگهداری فصلی را در این مقاله ببینید.',en:'Regular servicing, filter replacement and correct thermostat settings can cut cooling electricity use by up to 25%. See the full seasonal maintenance checklist in this article.',ar:'يمكن للصيانة الدورية واستبدال المرشحات وضبط الثرموستات تقليل استهلاك كهرباء التبريد بنسبة تصل إلى ٢٥٪. اطلع على قائمة الصيانة الموسمية الكاملة في هذه المقالة.',tr:'Düzenli bakım, filtre değişimi ve doğru termostat ayarı soğutma elektriğini %25’e kadar azaltabilir. Mevsimsel bakım listesinin tamamı bu makalede.',ru:'Регулярное обслуживание, замена фильтров и правильная настройка термостата снижают расход электроэнергии на охлаждение до 25%. Полный сезонный чек-лист — в этой статье.'}},
  {id:3, img:IMG.gen, title:{fa:'ژنراتور اضطراری؛ از محاسبه توان تا نصب',en:'Backup Generators: Sizing to Installation',ar:'المولدات الاحتياطية: من حساب القدرة إلى التركيب',tr:'Yedek Jeneratör: Boyutlandırmadan Kuruluma',ru:'Резервные генераторы: от расчёта до монтажа'}, text:{fa:'برای انتخاب ژنراتور ابتدا بارهای حیاتی را فهرست کنید، جریان راه‌اندازی موتورها را در نظر بگیرید و ۲۰ درصد ظرفیت ذخیره بگذارید. مراحل نصب و تست دوره‌ای را گام‌به‌گام شرح داده‌ایم.',en:'List your critical loads first, account for motor starting currents, and keep 20% reserve capacity. We walk through installation and periodic testing step by step.',ar:'ابدأ بحصر الأحمال الحرجة، واحسب تيارات بدء المحركات، واترك ٢٠٪ قدرة احتياطية. نشرح خطوات التركيب والاختبار الدوري بالتفصيل.',tr:'Önce kritik yükleri listeleyin, motor kalkış akımlarını hesaba katın ve %20 yedek kapasite bırakın. Kurulum ve periyodik test adımlarını anlatıyoruz.',ru:'Сначала составьте список критических нагрузок, учтите пусковые токи двигателей и оставьте 20% запаса мощности. Монтаж и периодические испытания — пошагово.'}}
];
const catName = id => { const c = CATEGORIES.find(x=>x.id===id); return c ? c.name[lang] : id; };

/* ---------- Rendering ---------- */
const $ = id => document.getElementById(id);
function renderCats(){
  $('catsGrid').innerHTML = CATEGORIES.map(c =>
    `<div class="cat-card" data-cat="${c.id}"><h3>${c.name[lang]}</h3><ul>${c.subs[lang].map(s=>`<li>• ${s}</li>`).join('')}</ul></div>`).join('');
  document.querySelectorAll('.cat-card').forEach(el => el.addEventListener('click', () => { setFilter(el.dataset.cat); document.getElementById('products').scrollIntoView({behavior:'smooth'}); }));
}
let activeFilter = 'all';
function renderFilters(){
  const btns = [{id:'all', label:t('all')}, ...CATEGORIES.map(c=>({id:c.id, label:c.name[lang]}))];
  $('filters').innerHTML = btns.map(b => `<button data-f="${b.id}" class="${b.id===activeFilter?'active':''}">${b.label}</button>`).join('');
  document.querySelectorAll('#filters button').forEach(b => b.addEventListener('click', () => setFilter(b.dataset.f)));
}
function setFilter(f){ activeFilter = f; renderFilters(); renderProducts(); }
function cardHTML(p){
  return `<div class="card" data-open="${p.id}"><img src="${p.images[0]}" alt=""><div class="c-in"><div class="cat">${catName(p.cat)}</div><h3>${p.name[lang]}</h3><div class="price">${p.price} تومان</div></div></div>`;
}
function renderProducts(){
  const list = activeFilter==='all' ? PRODUCTS : PRODUCTS.filter(p=>p.cat===activeFilter);
  $('productGrid').innerHTML = list.map(cardHTML).join('');
  bindCards($('productGrid'));
}
function renderFeatured(){
  $('featuredGrid').innerHTML = PRODUCTS.filter(p=>p.featured).map(cardHTML).join('');
  bindCards($('featuredGrid'));
}
function bindCards(scope){
  scope.querySelectorAll('[data-open]').forEach(el => el.addEventListener('click', () => openProduct(+el.dataset.open)));
}
function renderArticles(){
  $('articleGrid').innerHTML = ARTICLES.map(a =>
    `<div class="card" data-article="${a.id}"><img src="${a.img}" alt=""><div class="c-in"><h3>${a.title[lang]}</h3><div class="cat">${t('read_more')} ←</div></div></div>`).join('');
  document.querySelectorAll('[data-article]').forEach(el => el.addEventListener('click', () => {
    const a = ARTICLES.find(x=>x.id===+el.dataset.article);
    $('articleTitle').textContent = a.title[lang];
    $('articleText').textContent = a.text[lang];
    $('articleBody').hidden = false;
    $('articleBody').scrollIntoView({behavior:'smooth'});
  }));
}

/* ---------- Product detail ---------- */
let currentProduct = null;
function openProduct(id){
  currentProduct = PRODUCTS.find(p=>p.id===id);
  const p = currentProduct;
  $('pName').textContent = p.name[lang];
  $('pPrice').textContent = p.price + ' تومان';
  $('pDesc').textContent = p.desc[lang];
  $('pSpecs').innerHTML = p.specs.map(s=>`<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join('');
  $('galMain').src = p.images[0];
  $('galThumbs').innerHTML = p.images.map((src,i)=>`<img src="${src}" data-i="${i}" class="${i===0?'active':''}" alt="">`).join('');
  document.querySelectorAll('#galThumbs img').forEach(th => th.addEventListener('click', () => {
    $('galMain').src = p.images[+th.dataset.i];
    document.querySelectorAll('#galThumbs img').forEach(x=>x.classList.remove('active'));
    th.classList.add('active');
  }));
  showView('product');
  window.scrollTo({top:0});
}
function downloadCatalog(){
  const p = currentProduct || PRODUCTS[0];
  const lines = ['NovaTrade Product Catalog', 'Product: ' + p.name.en, 'Category: ' + (CATEGORIES.find(c=>c.id===p.cat)||{}).name.en, 'Price (Toman): ' + p.price, '', 'Specifications:'];
  p.specs.forEach(s => lines.push(' - ' + s[0] + ': ' + s[1]));
  lines.push('', 'Warranty: 18 months | After-sales service: 10 years', 'Contact: +98 21 8877 6655 | sales@novatrade.example');
  const text = lines.join('\n');
  // Build a minimal valid one-page PDF with the catalog text
  const esc = s => s.replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');
  const stream = 'BT /F1 13 Tf 50 800 Td ' + text.split('\n').map((l,i)=> (i? '0 -20 Td ' : '') + `(${esc(l)}) Tj`).join(' ') + ' ET';
  const objs = [
    '1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj',
    '2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj',
    '3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 595 842]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj',
    `4 0 obj<</Length ${stream.length}>>stream\n${stream}\nendstream endobj`,
    '5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj'
  ];
  let pdf = '%PDF-1.4\n'; const offsets = [];
  objs.forEach(o => { offsets.push(pdf.length); pdf += o + '\n'; });
  const xrefPos = pdf.length;
  pdf += `xref\n0 6\n0000000000 65535 f \n` + offsets.map(o => String(o).padStart(10,'0') + ' 00000 n ').join('\n') + `\ntrailer<</Size 6/Root 1 0 R>>\nstartxref\n${xrefPos}\n%%EOF`;
  const blob = new Blob([pdf], {type:'application/pdf'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'novatrade-catalog-' + p.id + '.pdf';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href), 4000);
}

/* ---------- Router ---------- */
function showView(name){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = $('view-' + name);
  if (el) el.classList.add('active');
  $('mainNav').classList.remove('open');
}
document.querySelectorAll('[data-nav]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  showView(a.dataset.nav);
  if (a.dataset.scroll) setTimeout(()=>{ const s=$(a.dataset.scroll); if(s) s.scrollIntoView({behavior:'smooth'}); }, 60);
  else window.scrollTo({top:0});
}));
document.querySelectorAll('[data-scroll]:not([data-nav])').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  const s = $(a.dataset.scroll); if (s) s.scrollIntoView({behavior:'smooth'});
}));
$('backBtn').addEventListener('click', () => showView('home'));
$('articleBack').addEventListener('click', () => { $('articleBody').hidden = true; });

/* ---------- Language ---------- */
function setLang(l){
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = LANGS[l].dir;
  $('langCurrent').textContent = LANGS[l].name;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  renderCats(); renderFilters(); renderProducts(); renderFeatured(); renderArticles();
  $('langMenu').classList.remove('open');
}
$('langBtn').addEventListener('click', e => { e.stopPropagation(); $('langMenu').classList.toggle('open'); });
document.addEventListener('click', () => $('langMenu').classList.remove('open'));
document.querySelectorAll('#langMenu button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ---------- Mobile menu ---------- */
$('burger').addEventListener('click', () => $('mainNav').classList.toggle('open'));

/* ---------- Forms ---------- */
function validMobile(v){ return /^[0-9+\s]{10,15}$/.test(v.trim()); }
function handleForm(formId, errId, okId, fields, onOk){
  $(formId).addEventListener('submit', e => {
    e.preventDefault();
    const bad = fields.some(id => { const el = $(id); return !el.value.trim() || (id.toLowerCase().includes('mobile') && !validMobile(el.value)); });
    if (bad) { $(errId).textContent = t('err_required'); $(okId).hidden = true; return; }
    $(errId).textContent = '';
    if (onOk) onOk();
    $(okId).hidden = false;
    e.target.reset();
  });
}
handleForm('contactForm','cErr','cOk', ['cName','cMobile','cMsg']);
handleForm('clubForm','clubErr','clubOk', ['clubName','clubMobile']);
handleForm('warrantyForm','wErr','wOk', ['wName','wMobile','wSerial','wIssue'], () => {
  $('wOk').textContent = t('warranty_ok') + 'NT-' + Math.random().toString(36).slice(2,8).toUpperCase();
});

/* ---------- Product actions & video modal ---------- */
$('catalogBtn').addEventListener('click', downloadCatalog);
$('videoBtn').addEventListener('click', () => { $('videoModal').hidden = false; });
$('videoClose').addEventListener('click', () => { $('videoModal').hidden = true; });
$('videoModal').addEventListener('click', e => { if (e.target === $('videoModal')) $('videoModal').hidden = true; });

/* ---------- Quick contact ---------- */
window.addEventListener('scroll', () => {
  $('quickContact').classList.toggle('visible', window.scrollY > 300);
}, {passive:true});
$('qcMain').addEventListener('click', () => $('quickContact').classList.toggle('open'));

/* ---------- Init ---------- */
renderCats(); renderFilters(); renderProducts(); renderFeatured(); renderArticles();
