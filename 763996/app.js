"use strict";

/* ============ Static dictionary ============ */
const I18N = {
fa:{
  pageTitle:"تراز جهانی | بازرگانی بین‌المللی و لجستیک",
  pageDesc:"وب‌سایت شرکتی دوزبانه تراز جهانی — بازرگانی بین‌المللی، حمل‌ونقل، ترخیص، انبارداری و مدیریت زنجیره تأمین.",
  utilOffices:"دفتر مرکزی تهران · دفاتر رابط دبی و استانبول",
  brandName:"تراز جهانی", menuLabel:"منوی اصلی",
  navAbout:"درباره ما", navServices:"خدمات", navNetwork:"شبکه و مسیرها", navIndustries:"صنایع",
  navProjects:"پروژه‌ها", navInsights:"بینش‌ها", navContact:"تماس", ctaQuote:"درخواست استعلام",
  heroEyebrow:"بازرگانی بین‌المللی · حمل‌ونقل · زنجیره تأمین",
  heroTitleA:"تجارت، بدون مرز", heroTitleB:"تحویل، بدون حدس و گمان",
  heroLead:"از تأمین کالا و حمل بین‌المللی تا ترخیص و تحویل نهایی، یک تیم پاسخ‌گو کل مسیر بار شما را مدیریت می‌کند؛ با برنامه مشخص، سند کامل و گزارش شفاف در هر مرحله.",
  heroPrimary:"شروع درخواست همکاری", heroSecondary:"مشاهده خدمات",
  heroNote:"پاسخ اولیه به هر استعلام کامل، حداکثر تا یک روز کاری.",
  heroAlt:"نمای هوایی از کشتی کانتینری در ترمینال بندری",
  kpi1Label:"سال تجربه بازرگانی و لجستیک", kpi2Label:"کشور در شبکه فعال تجارت",
  kpi3Label:"محموله مدیریت‌شده تا امروز", kpi4Label:"تحویل مطابق برنامه توافق‌شده",
  qqTitle:"استعلام سریع مسیر", qqText:"مسیر و شیوه حمل را انتخاب کنید؛ جزئیات در فرم تماس برایتان آماده می‌شود.",
  qqFrom:"مبدأ", qqTo:"مقصد", qqMode:"شیوه حمل", qqCargo:"نوع بار", qqButton:"آماده‌سازی استعلام",
  cityTehran:"تهران", cityBandar:"بندرعباس", cityTabriz:"تبریز", cityMashhad:"مشهد",
  cityDubai:"دبی", cityIstanbul:"استانبول", cityGuangzhou:"گوانگژو", cityRotterdam:"روتردام", cityAlmaty:"آلماتی",
  modeOcean:"دریایی", modeAir:"هوایی", modeRail:"ریلی", modeRoad:"جاده‌ای", modeMulti:"ترکیبی",
  cargoGeneral:"بار عمومی", cargoMachinery:"ماشین‌آلات و تجهیزات", cargoFood:"مواد غذایی و کشاورزی",
  cargoConsumer:"کالای مصرفی", cargoChemical:"مواد شیمیایی", cargoPharma:"دارویی و حساس به دما",
  pctSign:"٪",
  qqDone:"مسیر {from} به {to} با حمل {mode} در فرم تماس آماده شد؛ فقط شرح بار را کامل کنید.",
  qqSame:"مبدأ و مقصد نمی‌توانند یکسان باشند؛ مسیر دیگری انتخاب کنید.",
  trustTitle:"شریک عملیاتی تیم‌های بازرگانی در صنایع مختلف",
  trust1:"تولیدکنندگان صنعتی", trust2:"گروه‌های خرده‌فروشی", trust3:"صادرکنندگان مواد غذایی", trust4:"تأمین‌کنندگان انرژی و پتروشیمی",
  aboutKicker:"درباره تراز جهانی", aboutTitle:"یک مسئول، برای کل مسیر تجارت شما",
  aboutLead:"بیشتر تأخیرها از خود حمل شروع نمی‌شود؛ از ناهماهنگی بین فروشنده، فورواردر، ترخیص‌کار و انبار شروع می‌شود.",
  aboutBody:"تراز جهانی از سال ۱۳۸۷ بازرگانی و لجستیک را زیر یک سقف مدیریت می‌کند: خرید و تأمین، حمل دریایی، هوایی و ریلی، امور گمرکی، انبارداری و توزیع. برای هر پروژه یک مدیر پرونده دارید که برنامه، اسناد و هزینه را از روز اول تا تحویل نهایی یکجا می‌بیند و گزارش می‌دهد.",
  aboutCta:"دیدن نمونه پروژه‌ها", aboutAlt:"جلسه تیم بازرگانی در دفتر شرکت",
  aboutCaption:"تیم بازرگانی خارجی تراز جهانی — تهران",
  pr1t:"برنامه قبل از حرکت", pr1d:"مسیر، زمان‌بندی و اسناد لازم پیش از بارگیری قطعی می‌شود، نه وسط راه.",
  pr2t:"هزینه شفاف، بدون غافلگیری", pr2d:"ریز هزینه‌ها از ابتدا مشخص است و هر تغییر، پیش از اجرا تأیید شما را می‌گیرد.",
  pr3t:"گزارش در هر نقطه کنترل", pr3d:"بارگیری، خروج، ورود و ترخیص؛ در هر نقطه کنترل، وضعیت مستند به شما می‌رسد.",
  servicesKicker:"خدمات", servicesTitle:"هر حلقه از زنجیره، با یک استاندارد",
  servicesLead:"خدمت را جداگانه هم می‌توانید بگیرید؛ اما طراحی ما برای وقتی است که همه حلقه‌ها باید با هم کار کنند.",
  filterAll:"همه خدمات", filterTransport:"حمل‌ونقل", filterTrade:"بازرگانی و گمرک", filterSupport:"انبار و پشتیبانی",
  serviceRequest:"درخواست این خدمت",
  networkKicker:"شبکه و مسیرها", networkTitle:"مسیرهایی که هر هفته روی آن‌ها کار می‌کنیم",
  networkLead:"زمان‌های زیر، بازه معمول مسیر در شرایط عادی است؛ برنامه دقیق هر محموله پس از بررسی اسناد و ظرفیت اعلام می‌شود.",
  regionAll:"همه مناطق", regionMe:"خاورمیانه", regionEu:"اروپا", regionAsia:"آسیای مرکزی و شرقی",
  networkNote:"مسیر خاصی مدنظر دارید؟ بیشتر محموله‌های ما روی مسیرهای سفارشی طراحی می‌شوند؛ از فرم تماس بپرسید.",
  routeMode:"شیوه حمل", routeTime:"زمان معمول", routeFreq:"دفعات حرکت",
  stat1Label:"شریک تجاری و مشتری سازمانی", stat2Label:"بندر و مرز فعال در شبکه",
  stat3Label:"فضای انبار تحت مدیریت", stat4Label:"پشتیبانی عملیاتی محموله‌های در مسیر",
  industriesKicker:"صنایع", industriesTitle:"هر صنعت، قاعده بار خودش را دارد",
  industriesLead:"صنعت خود را انتخاب کنید تا ببینید برنامه حمل و اسناد را چطور متفاوت می‌چینیم.",
  projectsKicker:"پروژه‌های منتخب", projectsTitle:"کارنامه، به زبان نتیجه",
  projectsLead:"چهار نمونه از برنامه‌هایی که برای مشتریان سازمانی طراحی و اجرا شده است.",
  testiKicker:"نظر مشتریان", testiTitle:"اعتماد، از جنس تجربه تکراری",
  prevLabel:"نظر قبلی", nextLabel:"نظر بعدی",
  insightsKicker:"بینش‌ها و اخبار", insightsTitle:"از بازار و مسیرها، زودتر بدانید",
  insightsLead:"یادداشت‌های کوتاه و کاربردی تیم بازرگانی ما برای تصمیم‌های روزمره تجارت.",
  readArticle:"خواندن یادداشت",
  contactKicker:"تماس", contactTitle:"از همین‌جا مسیر بعدی بارتان را طراحی کنیم",
  contactLead:"فرم را با هر اطلاعاتی که امروز دارید کامل کنید؛ مدیر پرونده برای تکمیل اسناد و اعلام برنامه با شما تماس می‌گیرد.",
  office1City:"تهران — دفتر مرکزی", office1Addr:"میدان آرژانتین، خیابان هفدهم، پلاک ۱۹",
  office2City:"دبی — دفتر رابط", office2Addr:"منطقه آزاد جبل‌علی، مرکز لجستیک، ساختمان ۴",
  office3City:"استانبول — دفتر رابط", office3Addr:"شیشلی، خیابان بویوک‌دره، مرکز تجاری اسنتپه",
  contactAlt:"رایانامه واحد بازرگانی خارجی:",
  fName:"نام و نام خانوادگی *", fCompany:"شرکت", fEmail:"رایانامه *", fPhone:"تلفن همراه",
  fService:"خدمت موردنیاز *", fOrigin:"مبدأ", fDestination:"مقصد", fMessage:"شرح بار و نیاز شما *",
  fConsent:"با تماس تیم بازرگانی تراز جهانی درباره این درخواست موافقم. *",
  phName:"نام شما", phCompany:"نام شرکت یا سازمان", phEmail:"name@company.com", phPhone:"+۹۸ ...",
  phOrigin:"شهر یا بندر مبدأ", phDest:"شهر یا بندر مقصد",
  phMessage:"نوع بار، مقدار تقریبی، زمان‌بندی و هر نکته‌ای که می‌دانید…",
  svcOpt0:"انتخاب کنید…", svc1:"حمل دریایی", svc2:"حمل هوایی", svc3:"حمل ریلی و زمینی",
  svc4:"بازرگانی و تأمین کالا", svc5:"ترخیص و امور گمرکی", svc6:"انبارداری و توزیع",
  sendBtn:"ارسال درخواست", formNote:"اطلاعات شما فقط برای پاسخ به همین درخواست استفاده می‌شود.",
  successTitle:"درخواست شما ثبت شد",
  successText:"مدیر پرونده حداکثر تا یک روز کاری آینده با شما تماس می‌گیرد. کد پیگیری:",
  errName:"نام را کامل وارد کنید.", errEmail:"رایانامه معتبر وارد کنید.", errPhone:"شماره تلفن معتبر نیست.",
  errService:"خدمت موردنیاز را انتخاب کنید.", errMessage:"شرح بار را دست‌کم در چند کلمه بنویسید.",
  errConsent:"برای ادامه، با تماس تیم بازرگانی موافقت کنید.",
  newsTitle:"گزارش مسیرها، ماهی یک‌بار", newsText:"تغییرات مهم مسیرها، بنادر و مقررات را خلاصه و بدون حاشیه می‌فرستیم.",
  newsPlaceholder:"رایانامه شما", newsButton:"عضویت",
  newsError:"رایانامه معتبر وارد کنید.", newsSuccess:"عضویت شما ثبت شد؛ اولین گزارش ماه آینده می‌رسد.",
  footAbout:"شرکت بازرگانی بین‌المللی و لجستیک؛ همراه تولیدکنندگان، صادرکنندگان و واردکنندگان از مبدأ تا مقصد.",
  footExplore:"دسترسی سریع", footServices:"خدمات", footOffices:"دفاتر",
  footRights:"تراز جهانی — همه حقوق محفوظ است.",
  footDemo:"این وب‌سایت یک دموی مفهومی برای نمایش ساختار سایت شرکتی دوزبانه است.",
  photoCredits:"عکس‌ها: Pexels — تام فیسک، آندریا موستو، اندرسون وی، ولفگانگ وایزر، تایگر لیلی، فابریتسیو زینی، پاول دانیلیوک.",
  devTitle:"این نمونه را اپ‌وبینو ساخته است", devSimilar:"نمونه‌کارهای مشابه ما:", devText:"این وب‌سایت یک نمونه زنده از کار ماست. ما سه نمونه‌کار واقعی و شبیه همین پروژه داریم که همین حالا می‌توانید ببینید:",
  devP1Name:"سارا لجستیک", devP1Desc:"وب‌سایت چهارزبانه برای یک شرکت لجستیک بین‌المللی",
  devP2Name:"سما مهر سعید", devP2Desc:"وب‌سایت شرکت بازرگانی و لجستیک بین‌المللی",
  devP3Name:"رهپاد تیر", devP3Desc:"وب‌سایت شرکتی لجستیک بین‌المللی",
  backTop:"بازگشت به بالا", closeLabel:"بستن"
},
en:{
  pageTitle:"TARAZ GLOBAL | International Trading & Logistics",
  pageDesc:"TARAZ GLOBAL bilingual corporate website — international trading, freight, customs clearance, warehousing and supply-chain management.",
  utilOffices:"Head office Tehran · Liaison offices in Dubai & Istanbul",
  brandName:"TARAZ GLOBAL", menuLabel:"Main menu",
  navAbout:"About", navServices:"Services", navNetwork:"Network & Routes", navIndustries:"Industries",
  navProjects:"Projects", navInsights:"Insights", navContact:"Contact", ctaQuote:"Request a Quote",
  heroEyebrow:"International Trading · Freight · Supply Chain",
  heroTitleA:"Trade without borders.", heroTitleB:"Delivery without guesswork.",
  heroLead:"From sourcing and international freight to customs and final delivery, one accountable team manages your cargo end to end — with a fixed plan, complete documents and a clear report at every checkpoint.",
  heroPrimary:"Start a Request", heroSecondary:"Explore Services",
  heroNote:"Every complete inquiry receives an initial response within one business day.",
  heroAlt:"Aerial view of a container ship at a port terminal",
  kpi1Label:"Years in trading & logistics", kpi2Label:"Countries in our active trade network",
  kpi3Label:"Shipments managed to date", kpi4Label:"Deliveries on the agreed schedule",
  qqTitle:"Quick Route Quote", qqText:"Pick a route and transport mode; the details are prepared for you in the contact form.",
  qqFrom:"Origin", qqTo:"Destination", qqMode:"Mode", qqCargo:"Cargo type", qqButton:"Prepare My Quote",
  cityTehran:"Tehran", cityBandar:"Bandar Abbas", cityTabriz:"Tabriz", cityMashhad:"Mashhad",
  cityDubai:"Dubai", cityIstanbul:"Istanbul", cityGuangzhou:"Guangzhou", cityRotterdam:"Rotterdam", cityAlmaty:"Almaty",
  modeOcean:"Ocean", modeAir:"Air", modeRail:"Rail", modeRoad:"Road", modeMulti:"Multimodal",
  cargoGeneral:"General cargo", cargoMachinery:"Machinery & equipment", cargoFood:"Food & agriculture",
  cargoConsumer:"Consumer goods", cargoChemical:"Chemicals", cargoPharma:"Pharma & temperature-sensitive",
  pctSign:"%",
  qqDone:"Your {mode} route from {from} to {to} is ready in the contact form — just add your cargo details.",
  qqSame:"Origin and destination cannot be the same. Please choose another route.",
  trustTitle:"The operations partner behind trading teams in many industries",
  trust1:"Industrial manufacturers", trust2:"Retail groups", trust3:"Food exporters", trust4:"Energy & petrochemical suppliers",
  aboutKicker:"About Taraz Global", aboutTitle:"One accountable owner for your entire trade route",
  aboutLead:"Most delays do not start with transport. They start with poor coordination between seller, forwarder, customs broker and warehouse.",
  aboutBody:"Since 2008, Taraz Global has run trading and logistics under one roof: sourcing and purchasing, ocean, air and rail freight, customs affairs, warehousing and distribution. Every project has one case manager who sees the plan, the documents and the costs together — from day one to final delivery — and reports them to you.",
  aboutCta:"See Selected Projects", aboutAlt:"Trade team meeting at the company office",
  aboutCaption:"Taraz Global foreign-trade team — Tehran",
  pr1t:"A plan before movement", pr1d:"Route, schedule and required documents are fixed before loading — not halfway through the journey.",
  pr2t:"Transparent cost, no surprises", pr2d:"Every cost line is clear from the start, and any change needs your approval before it happens.",
  pr3t:"A report at every checkpoint", pr3d:"Loading, departure, arrival and clearance — documented status reaches you at each control point.",
  servicesKicker:"Services", servicesTitle:"Every link of the chain, one standard",
  servicesLead:"You can take any service on its own — but we are built for the moments when every link has to work together.",
  filterAll:"All services", filterTransport:"Transport", filterTrade:"Trade & Customs", filterSupport:"Warehousing & Support",
  serviceRequest:"Request this service",
  networkKicker:"Network & Routes", networkTitle:"Lanes we operate every week",
  networkLead:"Times below are the usual range for each lane under normal conditions; the exact plan for your shipment follows a document and capacity check.",
  regionAll:"All regions", regionMe:"Middle East", regionEu:"Europe", regionAsia:"Central & East Asia",
  networkNote:"Looking for a specific lane? Most of our shipments run on custom-designed routes — ask us through the contact form.",
  routeMode:"Mode", routeTime:"Typical transit", routeFreq:"Departures",
  stat1Label:"Trade partners & corporate clients", stat2Label:"Active ports & border points",
  stat3Label:"Warehouse space under management", stat4Label:"Operations support for cargo on the move",
  industriesKicker:"Industries", industriesTitle:"Every industry ships by its own rules",
  industriesLead:"Select your industry to see how we change the transport plan and the paperwork.",
  projectsKicker:"Selected Projects", projectsTitle:"A track record, told in results",
  projectsLead:"Four examples of programmes designed and run for corporate clients.",
  testiKicker:"Client Voices", testiTitle:"Trust, built on repeat experience",
  prevLabel:"Previous testimonial", nextLabel:"Next testimonial",
  insightsKicker:"Insights & News", insightsTitle:"Know the market and the routes, earlier",
  insightsLead:"Short, practical notes from our trade team for everyday commercial decisions.",
  readArticle:"Read the note",
  contactKicker:"Contact", contactTitle:"Let us design your next cargo route, right here",
  contactLead:"Complete the form with whatever you know today; your case manager will call to complete the documents and confirm the plan.",
  office1City:"Tehran — Head Office", office1Addr:"Argentina Square, 17th Street, No. 19",
  office2City:"Dubai — Liaison Office", office2Addr:"Jebel Ali Free Zone, Logistics Centre, Building 4",
  office3City:"Istanbul — Liaison Office", office3Addr:"Şişli, Büyükdere Avenue, Esentepe Business Centre",
  contactAlt:"Foreign trade desk email:",
  fName:"Full name *", fCompany:"Company", fEmail:"Email *", fPhone:"Mobile phone",
  fService:"Service you need *", fOrigin:"Origin", fDestination:"Destination", fMessage:"Your cargo & requirements *",
  fConsent:"I agree to be contacted by the Taraz Global trade team about this request. *",
  phName:"Your name", phCompany:"Company or organisation name", phEmail:"name@company.com", phPhone:"+98 ...",
  phOrigin:"Origin city or port", phDest:"Destination city or port",
  phMessage:"Cargo type, approximate quantity, timing and anything else you know…",
  svcOpt0:"Please select…", svc1:"Ocean freight", svc2:"Air freight", svc3:"Rail & land freight",
  svc4:"Trading & sourcing", svc5:"Customs clearance", svc6:"Warehousing & distribution",
  sendBtn:"Send Request", formNote:"Your information is used only to answer this request.",
  successTitle:"Your request has been registered",
  successText:"Your case manager will contact you within one business day. Tracking code:",
  errName:"Please enter your full name.", errEmail:"Please enter a valid email address.", errPhone:"This phone number does not look valid.",
  errService:"Please select the service you need.", errMessage:"Please describe your cargo in at least a few words.",
  errConsent:"Please agree to be contacted so we can continue.",
  newsTitle:"The Route Report, once a month", newsText:"Key changes across routes, ports and regulations — summarised, without the noise.",
  newsPlaceholder:"Your email", newsButton:"Subscribe",
  newsError:"Please enter a valid email address.", newsSuccess:"You are subscribed. The first report arrives next month.",
  footAbout:"An international trading and logistics company, alongside manufacturers, exporters and importers from origin to destination.",
  footExplore:"Quick Access", footServices:"Services", footOffices:"Offices",
  footRights:"TARAZ GLOBAL — All rights reserved.",
  footDemo:"This website is a concept demo showing a bilingual corporate website structure.",
  photoCredits:"Photos: Pexels — Tom Fisk, Andrea Musto, Anderson Wei, Wolfgang Weiser, Tiger Lily, Fabrizio Zini, Pavel Danilyuk.",
  devTitle:"This demo was built by AppWebino", devSimilar:"Our similar work:", devText:"This website is a live sample of our work. We have three real projects similar to this one that you can visit right now:",
  devP1Name:"Sara Logistics", devP1Desc:"A four-language website for an international logistics company",
  devP2Name:"Sama Mehr Saeed", devP2Desc:"Website for an international trading & logistics company",
  devP3Name:"Rahpadtir", devP3Desc:"Corporate website for an international logistics company",
  backTop:"Back to top", closeLabel:"Close"
}};

/* ============ Dynamic data ============ */
const SERVICES=[
 {id:"ocean",cat:"transport",img:"assets/images/ocean-terminal.jpg",svc:"ocean",
  fa:{t:"حمل دریایی",d:"کانتینر کامل و خرده‌بار از بنادر جنوبی ایران به خلیج فارس، آسیا و اروپا؛ از رزرو فضا تا تحویل در مقصد.",pts:["FCL و LCL با برنامه هفتگی","تحویل بندر تا درب انبار","هماهنگی بیمه و اسناد حمل"],alt:"جرثقیل‌های بندری و کانتینرها در ترمینال دریایی"},
  en:{t:"Ocean Freight",d:"Full-container and consolidated cargo from Iran's southern ports to the Gulf, Asia and Europe — from booking to destination delivery.",pts:["FCL & LCL on weekly schedules","Port-to-door delivery","Insurance & shipping-document coordination"],alt:"Port cranes and containers at an ocean terminal"}},
 {id:"air",cat:"transport",img:"assets/images/air-cargo.jpg",svc:"air",
  fa:{t:"حمل هوایی",d:"برای بارهای زمان‌حساس و باارزش؛ تجمیع بار، پرواز مستقیم و چارتر جزئی از فرودگاه امام خمینی و هاب‌های منطقه.",pts:["بار سریع و اسناد حساس","زنجیره سرد برای بار دارویی","تحویل فرودگاه تا درب"],alt:"بارگیری هواپیمای باری در فرودگاه"},
  en:{t:"Air Freight",d:"For time-critical and high-value cargo: consolidation, direct flights and part-charters from Imam Khomeini Airport and regional hubs.",pts:["Express & document-sensitive cargo","Cold chain for pharma shipments","Airport-to-door delivery"],alt:"Cargo aircraft being loaded at an airport"}},
 {id:"rail",cat:"transport",img:"assets/images/rail-terminal.jpg",svc:"rail",
  fa:{t:"حمل ریلی و زمینی",d:"کریدورهای ریلی ایران به ترکیه، اروپا و آسیای مرکزی، همراه با حمل جاده‌ای مکمل و ترانشیپ مرزی کنترل‌شده.",pts:["قطار باری برنامه‌ای و واگن اختصاصی","ترانشیپ در مرزهای رازی و اینچه‌برون","حمل جاده‌ای درب تا درب"],alt:"قطارهای باری در ترمینال ریلی"},
  en:{t:"Rail & Land Freight",d:"Rail corridors from Iran to Türkiye, Europe and Central Asia, backed by complementary road transport and controlled border transshipment.",pts:["Scheduled block trains & private wagons","Transshipment at Razi & Incheh Borun borders","Door-to-door road freight"],alt:"Freight trains at a rail terminal"}},
 {id:"trade",cat:"trade",img:"assets/images/container-stacks.jpg",svc:"trade",
  fa:{t:"بازرگانی و تأمین کالا",d:"یافتن و راستی‌آزمایی تأمین‌کننده، مذاکره، بازرسی پیش از حمل و هماهنگی پرداخت؛ خرید خارجی بدون واسطه‌های گم‌شده.",pts:["اعتبارسنجی فروشنده و کارخانه","بازرسی کیفیت پیش از بارگیری","مدیریت پروفرما و اسناد خرید"],alt:"کانتینرهای رنگی روی هم در بندر"},
  en:{t:"Trading & Sourcing",d:"Supplier discovery and verification, negotiation, pre-shipment inspection and payment coordination — foreign purchasing without lost intermediaries.",pts:["Seller & factory verification","Pre-loading quality inspection","Proforma & purchase-document management"],alt:"Colourful stacked containers at a port"}},
 {id:"customs",cat:"trade",img:"assets/images/container-yard.jpg",svc:"customs",
  fa:{t:"ترخیص و امور گمرکی",d:"آماده‌سازی اظهارنامه، بررسی تعرفه و مجوزها و پیگیری ترخیص در گمرک‌های اصلی؛ قبل از رسیدن بار، نه بعد از آن.",pts:["بررسی کد تعرفه و مجوزهای لازم","ثبت سفارش و تخصیص ارز هماهنگ","گزارش روزانه وضعیت ترخیص"],alt:"نمای هوایی ردیف‌های کانتینر در محوطه بندری"},
  en:{t:"Customs & Compliance",d:"Declaration preparation, tariff and permit review and clearance follow-up at major customs houses — before your cargo arrives, not after.",pts:["HS-code & permit review","Coordinated order registration & currency allocation","Daily clearance-status reporting"],alt:"Aerial view of container rows in a port yard"}},
 {id:"warehouse",cat:"support",img:"assets/images/warehouse-team.jpg",svc:"warehouse",
  fa:{t:"انبارداری و توزیع",d:"انبار عمومی و اختصاصی در تهران و بندرعباس؛ دریافت، کنترل موجودی، بسته‌بندی و توزیع سراسری با گزارش آنلاین.",pts:["۴۸٬۰۰۰ مترمربع فضای مدیریت‌شده","چیدمان، برچسب و بسته‌بندی صادراتی","توزیع برنامه‌ای در سراسر کشور"],alt:"تیم انبار در حال جابه‌جایی پالت و بررسی موجودی"},
  en:{t:"Warehousing & Distribution",d:"General and dedicated warehousing in Tehran and Bandar Abbas: receiving, inventory control, packing and nationwide distribution with online reporting.",pts:["48,000 m² under management","Picking, labelling & export packing","Scheduled nationwide distribution"],alt:"Warehouse team moving a pallet and checking inventory"}}
];

const ROUTES=[
 {region:"middleeast",fa:{r:"بندرعباس ← جبل‌علی (دبی)",m:"دریایی",t:"۳ تا ۵ روز",f:"۴ حرکت در هفته"},en:{r:"Bandar Abbas → Jebel Ali (Dubai)",m:"Ocean",t:"3–5 days",f:"4 departures / week"}},
 {region:"middleeast",fa:{r:"تهران ← دبی",m:"جاده‌ای و دریایی",t:"۶ تا ۹ روز",f:"۳ حرکت در هفته"},en:{r:"Tehran → Dubai",m:"Road + Ocean",t:"6–9 days",f:"3 departures / week"}},
 {region:"europe",fa:{r:"تهران ← استانبول",m:"ریلی و جاده‌ای",t:"۸ تا ۱۲ روز",f:"۲ حرکت در هفته"},en:{r:"Tehran → Istanbul",m:"Rail + Road",t:"8–12 days",f:"2 departures / week"}},
 {region:"europe",fa:{r:"تبریز ← روتردام",m:"ریلی ترکیبی",t:"۱۶ تا ۲۲ روز",f:"۱ حرکت در هفته"},en:{r:"Tabriz → Rotterdam",m:"Intermodal rail",t:"16–22 days",f:"1 departure / week"}},
 {region:"asia",fa:{r:"تهران ← گوانگژو",m:"هوایی",t:"۳ تا ۵ روز",f:"پرواز روزانه با ترانزیت"},en:{r:"Tehran → Guangzhou",m:"Air",t:"3–5 days",f:"Daily flights via hub"}},
 {region:"asia",fa:{r:"مشهد ← آلماتی",m:"ریلی",t:"۷ تا ۱۰ روز",f:"۲ حرکت در هفته"},en:{r:"Mashhad → Almaty",m:"Rail",t:"7–10 days",f:"2 departures / week"}}
];

const INDUSTRIES=[
 {img:"assets/images/rail-terminal.jpg",
  fa:{t:"ماشین‌آلات و تجهیزات صنعتی",d:"بارهای سنگین و نامتعارف به برنامه مهندسی نیاز دارند: بررسی ابعاد و مرکز ثقل، مهاربندی داخل کانتینر یا روی واگن و هماهنگی تخلیه در مقصد.",pts:["نقشه بارگیری و مهاربندی پیش از حرکت","کانتینر فلت‌رک و اپن‌تاپ برای بار نامتعارف","بیمه باربری متناسب با ارزش تجهیزات"],alt:"ترمینال ریلی باربری"},
  en:{t:"Machinery & Industrial Equipment",d:"Heavy and out-of-gauge cargo needs engineering, not improvisation: dimension and centre-of-gravity checks, lashing inside containers or on wagons, and coordinated unloading at destination.",pts:["Loading & lashing plan before departure","Flat-rack & open-top containers for OOG cargo","Cargo insurance matched to equipment value"],alt:"Rail freight terminal"}},
 {img:"assets/images/container-stacks.jpg",
  fa:{t:"کالای مصرفی و خرده‌فروشی",d:"برای خرده‌فروشی، دیر رسیدن یعنی قفسه خالی. برنامه تجمیع هفتگی، اولویت ترخیص و توزیع مرحله‌ای به انبارهای شهری، ریتم تأمین شما را ثابت نگه می‌دارد.",pts:["تجمیع هفتگی از چین و امارات","ترخیص اولویت‌دار برای کالای فصلی","توزیع مرحله‌ای به مراکز استان‌ها"],alt:"کانتینرهای انباشته در بندر"},
  en:{t:"Consumer Goods & Retail",d:"In retail, late means an empty shelf. Weekly consolidation, priority clearance and staged distribution to city warehouses keep your replenishment rhythm steady.",pts:["Weekly consolidation from China & the UAE","Priority clearance for seasonal goods","Staged distribution to provincial hubs"],alt:"Stacked containers at a port"}},
 {img:"assets/images/warehouse-team.jpg",
  fa:{t:"مواد غذایی و محصولات کشاورزی",d:"زنجیره سرد و مدارک بهداشتی، قلب این صنعت است: کانتینر یخچالی با ثبت دما، گواهی‌های مبدأ و بهداشت و عبور سریع از قرنطینه.",pts:["کانتینر یخچالی با گزارش دمای مسیر","مدارک بهداشت و قرنطینه از مبدأ","برنامه حرکت هماهنگ با فصل برداشت"],alt:"انبار مواد غذایی و تیم عملیات"},
  en:{t:"Food & Agricultural Products",d:"Cold chain and health documentation are the heart of this sector: reefer containers with temperature logs, origin and health certificates, and fast quarantine passage.",pts:["Reefer containers with route temperature reports","Health & quarantine documents from origin","Departure planning aligned with harvest seasons"],alt:"Food warehouse and operations team"}},
 {img:"assets/images/container-yard.jpg",
  fa:{t:"انرژی، نفت و پتروشیمی",d:"بار شیمیایی و تجهیزات انرژی یعنی اسناد ایمنی دقیق و مسیرهای مجاز مشخص: برگه اطلاعات ایمنی، بسته‌بندی استاندارد و حامل‌های تأییدشده.",pts:["بررسی MSDS و کلاس خطر پیش از رزرو","بسته‌بندی و برچسب‌گذاری استاندارد IMDG","حامل‌های تأییدشده برای بار خطرناک"],alt:"محوطه کانتینری بندر"},
  en:{t:"Energy, Oil & Petrochemicals",d:"Chemical cargo and energy equipment demand precise safety documents and approved routings: safety data sheets, standard packing and certified carriers.",pts:["MSDS & hazard-class review before booking","IMDG-standard packing & labelling","Approved carriers for dangerous goods"],alt:"Container yard at a port"}},
 {img:"assets/images/ocean-terminal.jpg",
  fa:{t:"مواد اولیه و تولید",d:"تولید نباید منتظر بار بماند. قراردادهای ظرفیت فصلی، انبار میان‌راهی و هشدار زودهنگام تأخیر، خط تولید شما را از نوسان مسیرها جدا می‌کند.",pts:["رزرو ظرفیت فصلی برای مسیرهای ثابت","انبار میان‌راهی نزدیک کارخانه","هشدار تأخیر پیش از اثر بر تولید"],alt:"ترمینال دریایی و جرثقیل‌های بندری"},
  en:{t:"Raw Materials & Manufacturing",d:"Production must never wait for cargo. Seasonal capacity agreements, buffer warehousing and early delay warnings separate your line from route volatility.",pts:["Seasonal capacity booking on fixed lanes","Buffer warehousing near your plant","Delay warnings before production is affected"],alt:"Ocean terminal and port cranes"}},
 {img:"assets/images/air-cargo.jpg",
  fa:{t:"دارویی و حساس به دما",d:"برای بار دارویی، دما یک عدد نیست؛ یک تعهد مستند است. بسته‌بندی معتبر، ثبت پیوسته دما و تحویل اولویت‌دار در مقصد، زنجیره را کامل نگه می‌دارد.",pts:["ثبت پیوسته دما از تحویل تا تحویل","بسته‌بندی و یخ خشک معتبر","ترخیص و تحویل اولویت‌دار"],alt:"بارگیری هواپیمای باری"},
  en:{t:"Pharma & Temperature-Sensitive",d:"For pharma cargo, temperature is not a number — it is a documented commitment. Validated packing, continuous temperature logging and priority delivery keep the chain unbroken.",pts:["Continuous temperature logging, door to door","Validated packing & dry ice","Priority clearance and delivery"],alt:"Cargo aircraft being loaded"}}
];

const PROJECTS=[
 {img:"assets/images/rail-terminal.jpg",
  fa:{sector:"تولید صنعتی",t:"برنامه واردات خط تولید از چین",d:"یک تولیدکننده تجهیزات، قطعات سه خط تولید را با سه فروشنده چینی می‌خرید و هر بار با یک مسیر متفاوت می‌آورد. تأمین، تجمیع و حمل ریلی زیر یک برنامه آمد؛ خرید از هر سه فروشنده در یک محموله برنامه‌ریزی‌شده حرکت می‌کند.",m:[["۳۸ روز","درب تا درب"],["۱۸٪","کاهش هزینه تمام‌شده"]]},
  en:{sector:"Manufacturing",t:"Production-Line Import Programme from China",d:"An equipment manufacturer bought components for three production lines from three Chinese suppliers, each arriving by a different route. Sourcing, consolidation and rail freight came under one programme; all three suppliers now move in one scheduled shipment.",m:[["38 days","Door to door"],["18%","Lower landed cost"]]}},
 {img:"assets/images/ocean-terminal.jpg",
  fa:{sector:"خرده‌فروشی",t:"تأمین فصلی فروشگاه‌های زنجیره‌ای از دبی",d:"برای یک گروه خرده‌فروشی، هاب تجمیع در جبل‌علی ساخته شد: کالای ۱۴ تأمین‌کننده در یک برنامه هفتگی جمع می‌شود و پس از ترخیص اولویت‌دار، مستقیم به انبارهای تهران و اصفهان می‌رود.",m:[["۱۴","تأمین‌کننده در یک برنامه"],["۷ روز","چرخه تجمیع تا ترخیص"]]},
  en:{sector:"Retail",t:"Seasonal Replenishment for a Store Chain via Dubai",d:"A consolidation hub was built in Jebel Ali for a retail group: goods from 14 suppliers are collected on one weekly programme and, after priority clearance, move directly to warehouses in Tehran and Isfahan.",m:[["14","Suppliers in one programme"],["7 days","Consolidation to clearance"]]}},
 {img:"assets/images/container-yard.jpg",
  fa:{sector:"صادرات غذایی",t:"صادرات خشکبار به بازارهای خلیج فارس",d:"صادرکننده خشکبار با نوسان کیفیت بسته‌بندی و تأخیر اسناد بهداشتی، دو فصل بازار را از دست داده بود. بسته‌بندی صادراتی، مدارک مبدأ و برنامه دریایی ثابت، صادرات را به ریتم ماهانه برگرداند.",m:[["۱۲","محموله در سال اول"],["۰","توقیف اسنادی در گمرک مقصد"]]},
  en:{sector:"Food Export",t:"Dried-Fruit Exports to Gulf Markets",d:"A dried-fruit exporter had lost two market seasons to packing inconsistency and late health documents. Export packing, origin documentation and a fixed ocean schedule returned exports to a monthly rhythm.",m:[["12","Shipments in year one"],["0","Document holds at destination"]]}},
 {img:"assets/images/container-stacks.jpg",
  fa:{sector:"انرژی",t:"تجهیزات پروژه انرژی به آسیای مرکزی",d:"تجهیزات یک پروژه انرژی با ابعاد نامتعارف، از بندرعباس با ترکیب دریا، ریل و جاده به آسیای مرکزی رسید؛ نقشه مهاربندی و مجوزهای مسیر پیش از حرکت نهایی شد.",m:[["۹","محموله نامتعارف"],["۲۱ روز","بندرعباس تا مقصد"]]},
  en:{sector:"Energy",t:"Energy-Project Equipment to Central Asia",d:"Out-of-gauge equipment for an energy project travelled from Bandar Abbas to Central Asia by ocean, rail and road; lashing plans and route permits were finalised before anything moved.",m:[["9","Out-of-gauge shipments"],["21 days","Bandar Abbas to site"]]}}
];

const TESTIMONIALS=[
 {fa:{q:"«قبلاً وضعیت بار را از سه نفر مختلف می‌پرسیدیم. حالا یک نفر پاسخ‌گوست و گزارش هر مرحله خودش می‌رسد؛ حتی وقتی خبر، خبر خوبی نیست.»",n:"مدیر بازرگانی",r:"شرکت تولیدکننده تجهیزات صنعتی — تهران"},
  en:{q:"“We used to chase three different people for a status update. Now one person is accountable and every checkpoint report arrives on its own — even when the news is not good news.”",n:"Head of Procurement",r:"Industrial equipment manufacturer — Tehran"}},
 {fa:{q:"«برنامه تجمیع دبی، خرید ما از ۱۴ تأمین‌کننده را به یک ریتم هفتگی تبدیل کرد. قفسه خالی در فصل فروش، دیگر مسئله ما نیست.»",n:"مدیر زنجیره تأمین",r:"گروه خرده‌فروشی — تهران و اصفهان"},
  en:{q:"“The Dubai consolidation programme turned purchasing from 14 suppliers into one weekly rhythm. Empty shelves in peak season are no longer our problem.”",n:"Supply Chain Manager",r:"Retail group — Tehran & Isfahan"}},
 {fa:{q:"«در صادرات، سند دیررس یعنی بازار ازدست‌رفته. تراز جهانی مدارک را قبل از حرکت بار کامل می‌کند؛ همین یک تفاوت، دو فصل ما را نجات داد.»",n:"مدیرعامل",r:"شرکت صادرات مواد غذایی — تبریز"},
  en:{q:"“In exports, a late document means a lost market. Taraz completes the paperwork before the cargo moves — that single difference saved two of our seasons.”",n:"Managing Director",r:"Food export company — Tabriz"}}
];

const INSIGHTS=[
 {img:"assets/images/ocean-terminal.jpg",
  fa:{cat:"مسیرها و بنادر",date:"۲۷ آبان ۱۴۰۵",t:"ازدحام فصلی بنادر خلیج فارس؛ سه تصمیم پیش از رزرو",d:"پیش از فصل پرترافیک، این سه بررسی ساده از بیشتر تأخیرهای بندری جلوگیری می‌کند.",b:"ازدحام فصلی در بنادر خلیج فارس معمولاً از سه هفته قبل قابل پیش‌بینی است. تصمیم اول: رزرو فضا را به هفته بارگیری موکول نکنید؛ در فصل پرترافیک، ظرفیت کشتی‌های فیدر زودتر پر می‌شود. تصمیم دوم: اسناد حمل را پیش از ورود کانتینر به بندر کامل کنید، چون بیشتر توقف‌ها از نقص سند است نه از خود بندر. تصمیم سوم: برای بار زمان‌حساس، از ابتدا مسیر جایگزین (ترکیب جاده و دریا) را قیمت بگیرید تا در صورت جابه‌جایی برنامه کشتی، انتخاب آماده داشته باشید."},
  en:{cat:"Routes & Ports",date:"18 November 2026",t:"Seasonal Congestion at Gulf Ports: Three Decisions Before You Book",d:"Before peak season, these three simple checks prevent most port delays.",b:"Seasonal congestion at Gulf ports is usually predictable three weeks ahead. Decision one: do not leave space booking to the loading week — feeder capacity fills first in peak season. Decision two: complete shipping documents before the container reaches the port, because most holds come from paperwork, not the port itself. Decision three: for time-sensitive cargo, price the alternative routing (road + ocean) from the start, so a vessel schedule change never leaves you without an option."}},
 {img:"assets/images/rail-terminal.jpg",
  fa:{cat:"کریدورهای ریلی",date:"۲۰ آبان ۱۴۰۵",t:"ریل ایران به اروپا؛ کِی از دریا بهتر است؟",d:"ریل همیشه ارزان‌تر یا سریع‌تر نیست؛ اما در سه وضعیت مشخص، انتخاب درست‌تری است.",b:"حمل ریلی ایران به اروپا در سه وضعیت بر دریا برتری دارد: وقتی بار سنگین و کم‌ارزش حجمی است و هزینه کانتینر دریایی سهم بزرگی از قیمت تمام‌شده می‌سازد؛ وقتی مقصد در اروپای مرکزی است و حمل دریایی به بندر شمالی، یک پله جاده‌ای طولانی اضافه می‌کند؛ و وقتی برنامه تولید به ریتم ثابت هفتگی نیاز دارد، نه نوسان برنامه کشتی‌ها. در مقابل، برای بار سبک و فوری، هوا و برای بار ارزان و غیرفوری، دریا هنوز انتخاب اول است."},
  en:{cat:"Rail Corridors",date:"11 November 2026",t:"Rail from Iran to Europe: When Does It Beat Ocean?",d:"Rail is not always cheaper or faster — but in three specific situations, it is the better choice.",b:"Rail from Iran to Europe beats ocean in three situations: when cargo is heavy and low in volume value, so ocean container cost dominates the landed price; when the destination is in Central Europe and an ocean leg to a northern port adds a long road haul; and when production needs a fixed weekly rhythm rather than vessel-schedule swings. For light, urgent cargo air still wins — and for cheap, non-urgent cargo, ocean remains the first choice."}},
 {img:"assets/images/container-stacks.jpg",
  fa:{cat:"اسناد و گمرک",date:"۱۳ آبان ۱۴۰۵",t:"پنج خطای اینکوترمز که هزینه‌اش را واردکننده می‌دهد",d:"ترم تحویل، فقط یک کد سه‌حرفی در قرارداد نیست؛ مرز مسئولیت و هزینه است.",b:"رایج‌ترین خطاها: انتخاب FOB برای بار کانتینری (که ریسک را پیش از بارگیری کامل منتقل نمی‌کند)، ننوشتن محل دقیق تحویل کنار ترم، یکی دانستن بیمه با مسئولیت حمل، انتخاب DDP بدون بررسی امکان ترخیص فروشنده در مقصد، و ناهماهنگی ترم قرارداد با ترم اعتبار اسنادی. هر پنج خطا یک درمان دارد: ترم تحویل را با مدیر پرونده، پیش از امضای قرارداد و با نگاه به مسیر واقعی بار انتخاب کنید."},
  en:{cat:"Documents & Customs",date:"4 November 2026",t:"Five Incoterms Mistakes the Importer Ends Up Paying For",d:"A delivery term is not just a three-letter code in a contract; it is the border of cost and responsibility.",b:"The most common mistakes: choosing FOB for containerised cargo, which does not transfer risk cleanly before loading; omitting the exact named place next to the term; treating insurance as the same thing as carrier liability; choosing DDP without checking whether the seller can actually clear goods at destination; and letting the contract term conflict with the letter-of-credit term. All five share one cure: choose the delivery term with your case manager, before signing, against the real route of the cargo."}}
];

/* ============ Logic ============ */
let LANG = "fa";
try { const s = localStorage.getItem("taraz-lang"); if (s === "en" || s === "fa") LANG = s; } catch (e) {}
const t = (k) => (I18N[LANG][k] !== undefined ? I18N[LANG][k] : k);
const $ = (s, c) => (c || document).querySelector(s);
const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
const numFmt = () => new Intl.NumberFormat(LANG === "fa" ? "fa-IR" : "en-US");
const CITY_KEY = {tehran:"cityTehran",bandar:"cityBandar",tabriz:"cityTabriz",mashhad:"cityMashhad",dubai:"cityDubai",istanbul:"cityIstanbul",guangzhou:"cityGuangzhou",rotterdam:"cityRotterdam",almaty:"cityAlmaty"};
const MODE_KEY = {ocean:"modeOcean",air:"modeAir",rail:"modeRail",road:"modeRoad",multi:"modeMulti"};
const CARGO_KEY = {general:"cargoGeneral",machinery:"cargoMachinery",food:"cargoFood",consumer:"cargoConsumer",chemical:"cargoChemical",pharma:"cargoPharma"};

function formatCounts(scope){
  $$("[data-count]", scope || document).forEach(el=>{
    const target = parseInt(el.getAttribute("data-count"),10);
    el.textContent = numFmt().format(target);
  });
}

function renderServices(filter){
  const grid = $("#serviceGrid");
  grid.innerHTML = SERVICES.map((s,i)=>{
    const d = s[LANG];
    const hidden = filter && filter!=="all" && s.cat!==filter ? " is-hidden" : "";
    return `<article class="service-card${hidden}">
      <img src="${s.img}" alt="${d.alt}" loading="lazy">
      <div class="service-body">
        <div class="service-top"><span>${String(i+1).padStart(2,"0")}</span><span>${t(s.cat==="transport"?"filterTransport":s.cat==="trade"?"filterTrade":"filterSupport")}</span></div>
        <h3>${d.t}</h3><p>${d.d}</p>
        <ul class="service-points">${d.pts.map(p=>`<li>${p}</li>`).join("")}</ul>
        <button type="button" class="service-link" data-service="${s.svc}">${t("serviceRequest")} ←</button>
      </div></article>`;
  }).join("");
  $$(".service-link", grid).forEach(b=>b.addEventListener("click",()=>{
    $("#fService").value = b.getAttribute("data-service");
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }));
}

function renderRoutes(region){
  const list = $("#routeList");
  list.innerHTML = ROUTES.map(r=>{
    const d = r[LANG];
    const hidden = region && region!=="all" && r.region!==region ? " is-hidden" : "";
    const regionKey = {middleeast:"regionMe", europe:"regionEu", asia:"regionAsia"}[r.region];
    return `<div class="route-row${hidden}">
      <div class="route-name"><small>${t(regionKey)}</small>${d.r}</div>
      <div class="route-meta"><strong>${d.m}</strong>${t("routeMode")}</div>
      <div class="route-meta"><strong>${d.t}</strong>${t("routeTime")}</div>
      <div class="route-meta"><strong>${d.f}</strong>${t("routeFreq")}</div>
    </div>`;
  }).join("");
}

let indIndex = 0;
function renderIndustries(){
  const tabs = $("#indTabs");
  tabs.innerHTML = INDUSTRIES.map((ind,i)=>`<button type="button" role="tab" class="ind-tab${i===indIndex?" is-active":""}" data-ind="${i}" aria-selected="${i===indIndex}">${ind[LANG].t}</button>`).join("");
  $$(".ind-tab", tabs).forEach(b=>b.addEventListener("click",()=>{ indIndex = parseInt(b.getAttribute("data-ind"),10); renderIndustries(); }));
  const d = INDUSTRIES[indIndex][LANG];
  const img = $("#indImg"); img.src = INDUSTRIES[indIndex].img; img.alt = d.alt;
  $("#indTitle").textContent = d.t;
  $("#indDesc").textContent = d.d;
  $("#indPoints").innerHTML = d.pts.map(p=>`<li>${p}</li>`).join("");
}

function renderProjects(){
  $("#projectGrid").innerHTML = PROJECTS.map(p=>{
    const d = p[LANG];
    return `<article class="project-card">
      <img src="${p.img}" alt="${d.t}" loading="lazy">
      <div class="project-body">
        <span class="project-sector">${d.sector}</span>
        <h3>${d.t}</h3><p>${d.d}</p>
        <div class="project-metrics">${d.m.map(m=>`<div><strong>${m[0]}</strong><span>${m[1]}</span></div>`).join("")}</div>
      </div></article>`;
  }).join("");
}

let testiIndex = 0, testiTimer = null;
function renderTestimonials(){
  const d = TESTIMONIALS[testiIndex][LANG];
  $("#testiStage").innerHTML = `<blockquote class="testi-quote">${d.q}</blockquote>
    <div class="testi-person"><strong>${d.n}</strong><span>${d.r}</span></div>`;
  $("#testiDots").innerHTML = TESTIMONIALS.map((_,i)=>`<button type="button" class="t-dot${i===testiIndex?" is-active":""}" data-dot="${i}" aria-label="${i+1}"></button>`).join("");
  $$(".t-dot").forEach(b=>b.addEventListener("click",()=>{ testiIndex = parseInt(b.getAttribute("data-dot"),10); renderTestimonials(); restartTestiAuto(); }));
}
function testiStep(dir){ testiIndex = (testiIndex + dir + TESTIMONIALS.length) % TESTIMONIALS.length; renderTestimonials(); }
function restartTestiAuto(){ clearInterval(testiTimer); testiTimer = setInterval(()=>testiStep(1), 7000); }

function renderInsights(){
  $("#insightGrid").innerHTML = INSIGHTS.map((a,i)=>{
    const d = a[LANG];
    return `<article class="insight-card">
      <img src="${a.img}" alt="${d.t}" loading="lazy">
      <div class="insight-body">
        <span class="insight-cat">${d.cat}</span>
        <h3>${d.t}</h3>
        <span class="insight-date">${d.date}</span>
        <p>${d.d}</p>
        <button type="button" class="read-btn" data-article="${i}">${t("readArticle")} ←</button>
      </div></article>`;
  }).join("");
  $$(".read-btn").forEach(b=>b.addEventListener("click",()=>openArticle(parseInt(b.getAttribute("data-article"),10))));
}
function openArticle(i){
  const d = INSIGHTS[i][LANG];
  $("#modalCat").textContent = d.cat;
  $("#modalTitle").textContent = d.t;
  $("#modalDate").textContent = d.date;
  $("#modalBody").textContent = d.b;
  $("#insightModal").hidden = false;
  $("#modalClose").focus();
}
function closeArticle(){ $("#insightModal").hidden = true; }

function applyLang(lang){
  LANG = lang;
  try { localStorage.setItem("taraz-lang", lang); } catch (e) {}
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.title = t("pageTitle");
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("pageDesc"));
  $$("[data-i18n]").forEach(el=>{ el.textContent = t(el.getAttribute("data-i18n")); });
  $$("[data-i18n-ph]").forEach(el=>{ el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
  $$("[data-i18n-aria]").forEach(el=>{ el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
  $$("[data-i18n-alt]").forEach(el=>{ el.setAttribute("alt", t(el.getAttribute("data-i18n-alt"))); });
  $$(".lang-btn").forEach(b=>b.classList.toggle("is-active", b.getAttribute("data-lang")===lang));
  $("#year").textContent = lang === "fa" ? "۱۴۰۵" : "2026";
  formatCounts();
  /* Clear transient status/error texts set in the previous language */
  ["#newsOk","#newsErr"].forEach(s=>{ const el = $(s); if (el) el.textContent = ""; });
  $$("[data-err]").forEach(el=>{ el.textContent = ""; });
  if (!qqState){ const st = $("#qqStatus"); if (st) st.textContent = ""; }
  if (qqState){
    $("#fOrigin").value = t(CITY_KEY[qqState.from]);
    $("#fDestination").value = t(CITY_KEY[qqState.to]);
    const msg = $("#fMessage");
    if (msg.dataset.auto === "1") msg.value = qqSentence() + " — " + t(qqState.cargoKey) + ".";
    const st = $("#qqStatus");
    if (st.textContent.trim()){ st.style.color = "var(--ok)"; st.textContent = qqSentence(); }
  }
  renderServices(currentServiceFilter);
  renderRoutes(currentRegion);
  renderIndustries();
  renderProjects();
  renderTestimonials();
  renderInsights();
}

/* Language buttons */
$$(".lang-btn").forEach(b=>b.addEventListener("click",()=>applyLang(b.getAttribute("data-lang"))));

/* Mobile nav */
const burger = $("#burger"), mainNav = $("#mainNav");
burger.addEventListener("click",()=>{
  const open = mainNav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});
$$("a", mainNav).forEach(a=>a.addEventListener("click",()=>{ mainNav.classList.remove("open"); burger.setAttribute("aria-expanded","false"); }));

/* Filters */
let currentServiceFilter = "all", currentRegion = "all";
$$("[data-filter]").forEach(b=>b.addEventListener("click",()=>{
  currentServiceFilter = b.getAttribute("data-filter");
  $$("[data-filter]").forEach(x=>x.classList.toggle("is-active", x===b));
  renderServices(currentServiceFilter);
}));
$$("[data-region]").forEach(b=>b.addEventListener("click",()=>{
  currentRegion = b.getAttribute("data-region");
  $$("[data-region]").forEach(x=>x.classList.toggle("is-active", x===b));
  renderRoutes(currentRegion);
}));

/* Quick quote → contact form */
let qqState = null;
function qqSentence(){
  return t("qqDone").replace("{from}", t(CITY_KEY[qqState.from])).replace("{to}", t(CITY_KEY[qqState.to])).replace("{mode}", t(MODE_KEY[qqState.mode]));
}
$("#quickQuote").addEventListener("submit",(e)=>{
  e.preventDefault();
  const from = $("#qqFrom").value, to = $("#qqTo").value, mode = $("#qqMode").value;
  const status = $("#qqStatus");
  if (from === to){ status.textContent = t("qqSame"); status.style.color = "var(--error)"; return; }
  qqState = {from, to, mode, cargoKey: CARGO_KEY[$("#qqCargo").value] || "cargoGeneral"};
  const svcMap = {ocean:"ocean", air:"air", rail:"rail", road:"rail", multi:"rail"};
  $("#fService").value = svcMap[mode] || "";
  $("#fOrigin").value = t(CITY_KEY[from]);
  $("#fDestination").value = t(CITY_KEY[to]);
  const msg = $("#fMessage");
  if (!msg.value.trim() || msg.dataset.auto === "1"){
    msg.value = qqSentence() + " — " + t(qqState.cargoKey) + ".";
    msg.dataset.auto = "1";
  }
  status.style.color = "var(--ok)";
  status.textContent = qqSentence();
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
});

/* Testimonials controls */
$("#testiPrev").addEventListener("click",()=>{ testiStep(-1); restartTestiAuto(); });
$("#testiNext").addEventListener("click",()=>{ testiStep(1); restartTestiAuto(); });

/* Modal */
$("#modalClose").addEventListener("click", closeArticle);
$("#insightModal").addEventListener("click",(e)=>{ if (e.target.id === "insightModal") closeArticle(); });
document.addEventListener("keydown",(e)=>{ if (e.key === "Escape"){ closeArticle(); mainNav.classList.remove("open"); } });

/* Contact form validation */
function setErr(name,msg){ const el = document.querySelector(`[data-err="${name}"]`); if (el) el.textContent = msg || ""; }
$("#contactForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const name = $("#fName").value.trim(), email = $("#fEmail").value.trim(),
        phone = $("#fPhone").value.trim(), svc = $("#fService").value,
        message = $("#fMessage").value.trim(), consent = $("#fConsent").checked;
  let ok = true;
  setErr("name", name.length>=3 ? "" : (ok=false, t("errName")));
  setErr("email", /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? "" : (ok=false, t("errEmail")));
  setErr("phone", (!phone || /^[+\d][\d\s-]{8,}$/.test(phone)) ? "" : (ok=false, t("errPhone")));
  setErr("service", svc ? "" : (ok=false, t("errService")));
  setErr("message", message.length>=10 ? "" : (ok=false, t("errMessage")));
  setErr("consent", consent ? "" : (ok=false, t("errConsent")));
  if (!ok) return;
  const ref = "TG-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random()*9000);
  $("#refCode").textContent = ref;
  $("#formSuccess").hidden = false;
  $("#formSuccess").scrollIntoView({behavior:"smooth", block:"center"});
  e.target.querySelector('button[type="submit"]').disabled = true;
});
$$("#contactForm input, #contactForm select, #contactForm textarea").forEach(el=>{
  el.addEventListener("input",()=>{ const n = el.name; if (n) setErr(n,""); });
});

/* Newsletter */
$("#newsForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const v = $("#newsEmail").value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){ $("#newsErr").textContent = t("newsError"); $("#newsOk").textContent=""; return; }
  $("#newsErr").textContent = ""; $("#newsOk").textContent = t("newsSuccess");
  $("#newsEmail").value = "";
});

/* Counters */
const counterIO = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if (!en.isIntersecting) return;
    const el = en.target, target = parseInt(el.getAttribute("data-count"),10), t0 = performance.now(), dur = 1300;
    const tick = (now)=>{
      const p = Math.min(1,(now-t0)/dur), eased = 1-Math.pow(1-p,3);
      el.textContent = numFmt().format(Math.round(target*eased));
      if (p<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
},{threshold:.4});
$$("[data-count]").forEach(el=>counterIO.observe(el));

/* Reveal */
const revealIO = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if (en.isIntersecting){ en.target.classList.add("in"); revealIO.unobserve(en.target); } });
},{threshold:.12});
$$(".reveal").forEach(el=>revealIO.observe(el));

/* Back to top */
const toTop = $("#toTop");
window.addEventListener("scroll",()=>{ toTop.classList.toggle("show", window.scrollY > 700); },{passive:true});
toTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

/* Init */
applyLang(LANG);
restartTestiAuto();
