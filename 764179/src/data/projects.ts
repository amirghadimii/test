import type { Localized } from "@/lib/utils";

export type CategoryKey = "arch" | "exp" | "biz" | "inter";

export type StatusKey = "completed" | "inProgress" | "concept";

export type Project = {
  slug: string;
  title: Localized;
  category: CategoryKey;
  year: number;
  jalali: number;
  location: Localized;
  area: number;
  status: StatusKey;
  client: Localized;
  role: Localized;
  summary: Localized;
  body: Localized[];
  cover: string;
  gallery: string[];
  featured?: boolean;
};

export const CATEGORY_ORDER: CategoryKey[] = ["arch", "exp", "biz", "inter"];

export const projects: Project[] = [
  {
    slug: "sepehr-tower",
    title: { fa: "برج سپهر", en: "Sepehr Tower" },
    category: "arch",
    year: 2023,
    jalali: 1402,
    location: { fa: "تهران، میدان ونک", en: "Tehran, Vanak Square" },
    area: 48000,
    status: "completed",
    client: { fa: "شرکت سپهر صنعت", en: "Sepehr Industry Co." },
    role: {
      fa: "طراحی معماری، مدیریت پروژه و نظارت بر اجرا",
      en: "Architectural design, project management and site supervision",
    },
    summary: {
      fa: "یک برج اداری-تجاری ۲۴ طبقه با رویه‌ای یکپارچه از شیشه و بتن روشن؛ جایی که شهر بتواند از فاصله‌ی چند صد متری هم با آن رابطه داشته باشد.",
      en: "A 24-storey office and retail tower with a unified skin of glass and pale concrete — a building the city can still relate to from several hundred metres away.",
    },
    body: [
      {
        fa: "کارفرما یک برج نمادین می‌خواست، اما نه یک حجم بی‌روح. تیم آرک پروژه را از مقیاس شهری آغاز کرد و با شکستن ارتفاع به سه حجم متصل، افق را باز کرد تا آسمان از لابه‌لای ساختمان دیده شود.",
        en: "The client wanted a landmark, but not a soulless mass. ARK started at the scale of the city, splitting the height into three linked volumes so that the sky stays visible between them.",
      },
      {
        fa: "در داخل، ساختار ستون‌های پیش‌ساخته بتنی امکان پلان‌های آزاد و انعطاف در تقسیم‌بندی را فراهم کرد. نور طبیعی از شکاف‌های عمودی نما به عمق طبقات نفوذ می‌کند و فضاهای کار را در طول روز تغییر می‌دهد.",
        en: "Inside, a precast concrete frame allows free-plan layouts and flexible partitioning. Natural light penetrates deep through the vertical cuts of the facade, changing the workplaces over the course of the day.",
      },
      {
        fa: "طراحی در مرحله اول با مدل‌سازی انرژی و شبیه‌سازی آسایش صوتی راستی‌آزمایی شد؛ نتیجه، کاهش چشمگیر مصرف انرژی در مقایسه با برج‌های مشابه و کاهش محسوس صدای ترافیک در طبقات پایین بود.",
        en: "The scheme was verified through energy modelling and acoustic simulation, resulting in a significant drop in energy use against comparable towers and a measurable reduction of traffic noise on the lower floors.",
      },
    ],
    cover: "photo-1486406146926-c627a92ad1ab",
    gallery: [
      "photo-1481253127861-534498168948",
      "photo-1479839672679-a46483c0e7c8",
      "photo-1487958449943-2429e8be8625",
      "photo-1449157291145-7efd050a4d0e",
      "photo-1502005229762-cf1b2da7c5d6",
    ],
    featured: true,
  },
  {
    slug: "kavir-music-house",
    title: { fa: "خانه موسیقی کویر", en: "Kavir Music House" },
    category: "arch",
    year: 2022,
    jalali: 1401,
    location: { fa: "اصفهان، خیابان چهارباغ بالا", en: "Isfahan, Chaharbagh Ave." },
    area: 3200,
    status: "completed",
    client: { fa: "بنیاد هنر کویر", en: "Kavir Arts Foundation" },
    role: {
      fa: "معماری، داخلی و طراحی صحنه",
      en: "Architecture, interiors and stage design",
    },
    summary: {
      fa: "سالن ۲۵۰ نفره با پوسته‌ی آجری و نور طبیعی کنترل‌شده؛ جایی برای شنیدن موسیقی در ساعت غروب.",
      en: "A 250-seat hall wrapped in brick with controlled daylight — a place made for listening to music at sunset.",
    },
    body: [
      {
        fa: "این پروژه با یک پرسش ساده آغاز شد: چگونه می‌توان صدا را در یک فضای خشک و گرم ایرانی به یک تجربه‌ی شنیدنی تبدیل کرد؟ پاسخ، ترکیب آجر مشکی با شکاف‌های عمودی نور بود.",
        en: "The project began with a simple question: how do you turn sound into a listening experience inside a hot, dry Iranian climate? The answer was black brick paired with vertical slots of daylight.",
      },
      {
        fa: "دیوارهای آجری با هندسه‌ی دقیق، هم‌زمان نقش آکوستیک و نمایشی دارند؛ سالن برای موسیقی آکوستیک، رواق برای گفت‌وگو و نمایش طراحی شده است.",
        en: "The precisely folded brick walls act as both acoustic surface and facade: the hall is tuned for acoustic music, the ambulatory for conversation and display.",
      },
    ],
    cover: "photo-1586023492125-27b2c045efd7",
    gallery: [
      "photo-1600607686527-6fb886090705",
      "photo-1600607688969-a5bfcd646154",
      "photo-1600566753190-17f0baa2a6c3",
      "photo-1598928506311-c55ded91a20c",
      "photo-1449844908441-8829872d2607",
    ],
    featured: true,
  },
  {
    slug: "future-exhibition",
    title: { fa: "نمایشگاه «آینده»", en: "The Future Exhibition" },
    category: "exp",
    year: 2024,
    jalali: 1403,
    location: { fa: "تهران، مرکز نمایشگاهی بین‌المللی", en: "Tehran, International Exhibition Centre" },
    area: 2400,
    status: "completed",
    client: { fa: "مؤسسه فناوری آینده‌نگر", en: "Futurist Technology Institute" },
    role: {
      fa: "طراحی تجربه، محتوا، ساخت و اجرای غرفه",
      en: "Experience design, content, fabrication and stand build",
    },
    summary: {
      fa: "یک نمایشگاه ۱۲۰۰ متری درباره‌ی هوش مصنوعی و آینده‌ی کار؛ طراحی‌شده به‌عنوان یک مسیر، نه مجموعه‌ای از غرفه‌ها.",
      en: "A 1,200 m² exhibition about artificial intelligence and the future of work — designed as a journey, not a set of booths.",
    },
    body: [
      {
        fa: "به‌جای چیدمان غرفه‌ها در کنار هم، مسیر بازدید به شش ایستگاه متوالی تقسیم شد که هر کدام بخشی از روایت را روایت می‌کنند: از داده تا تصمیم.",
        en: "Instead of booths placed side by side, the visit route was divided into six sequential stations, each telling part of the narrative: from data to decision.",
      },
      {
        fa: "سقف سبک متحرک، نورپردازی نمایشی و پروژکتورهای تعاملی امکان تغییر کامل صحنه در فاصله‌ی کوتاه را فراهم کرد؛ برنامه‌ی اجرایی ۹۰ روزه و بدون تغییر در سازه‌ی غرفه بود.",
        en: "A lightweight moving ceiling, theatrical lighting and interactive projectors allowed complete scene changes in a short window; the 90-day run required no structural change to the stand.",
      },
    ],
    cover: "photo-1554907984-15263bfd63bd",
    gallery: [
      "photo-1518005020951-eccb494ad742",
      "photo-1561214115-f2f134cc4912",
      "photo-1593697821252-0c9137d9fc45",
      "photo-1553877522-43269d4ea984",
      "photo-1522202176988-66273c2fd55f",
    ],
    featured: true,
  },
  {
    slug: "university-innovation-center",
    title: { fa: "مرکز نوآوری دانشگاه", en: "University Innovation Center" },
    category: "exp",
    year: 2023,
    jalali: 1402,
    location: { fa: "شیراز، پردیس دانشگاه", en: "Shiraz, University Campus" },
    area: 5600,
    status: "completed",
    client: { fa: "دانشگاه صنعتی شیراز", en: "Shiraz University of Technology" },
    role: {
      fa: "طراحی معماری داخلی و تجربه کاربری",
      en: "Interior architecture and user experience design",
    },
    summary: {
      fa: "بازطراحی یک ساختمان قدیمی به فضای کار مشترک، آزمایشگاه و کافه؛ جایی که ایده‌ها به هم برخورد می‌کنند.",
      en: "An old building reborn as a co-working space, labs and café — a place where ideas collide.",
    },
    body: [
      {
        fa: "ساختمان موجود یک پوسته‌ی بارگذاری‌شده و پلان‌های غیرقابل استفاده داشت. تیم آرک با حذف پیشاپیش دیوارها، پلان را به یک فضای پیوسته‌ی چندنقطه‌ای تبدیل کرد.",
        en: "The existing building had a loaded facade and unusable plans. By removing walls in advance, the team turned the floor plate into one continuous, multi-point space.",
      },
      {
        fa: "نظام روشنایی از سقف چتری عبور می‌کند و فضا را در طول روز تغییر می‌دهد؛ اتاق‌های جلسه در حاشیه و فضاهای کار باز در مرکز قرار گرفته‌اند.",
        en: "A lighting system passes through the sawtooth roof and transforms the space through the day; meeting rooms sit at the edge, open work in the centre.",
      },
    ],
    cover: "photo-1553877522-43269d4ea984",
    gallery: [
      "photo-1544027993-37dbfe43562a",
      "photo-1555617981-dac3880eac6e",
      "photo-1531973576160-7125cd663d86",
      "photo-1541888946425-d81bb19240f5",
      "photo-1508615039623-a25605d2b022",
    ],
  },
  {
    slug: "avand-market-growth",
    title: { fa: "توسعه بازار «آوند»", en: "Avand Market Growth" },
    category: "biz",
    year: 2024,
    jalali: 1403,
    location: { fa: "تهران و اصفهان", en: "Tehran & Isfahan" },
    area: 1800,
    status: "completed",
    client: { fa: "گروه بازرگانی آوند", en: "Avand Trading Group" },
    role: {
      fa: "استراتژی برند، مدل کسب‌وکار و طراحی فروشگاه شاخص",
      en: "Brand strategy, business model and flagship store design",
    },
    summary: {
      fa: "بازطراحی یک برند خرده‌فروشی قدیمی به یک پلتفرم چندشاخه‌ای با فروشگاه شاخص در دو شهر.",
      en: "Turning an old retail chain into a multi-format platform, anchored by a flagship store in two cities.",
    },
    body: [
      {
        fa: "تحلیل فروش نشان داد که مشتری به دنبال «فروشگاه» نیست، بلکه به دنبال مرجعی برای انتخاب است. بنابراین فضا به‌جای ویترین، یک اتاق مشاوره‌ی باز طراحی شد.",
        en: "Sales analysis showed customers were not looking for a shop but for a reference point to decide. So instead of a display window, the space became an open advisory room.",
      },
      {
        fa: "مدل درآمدی جدید، فروش آنلاین را با شبکه فروشگاه‌های کوچک‌تر ترکیب کرد؛ درآمد خرده‌فروشی ظرف هجده ماه ۶۰ درصد رشد کرد.",
        en: "The new revenue model combined online sales with a network of smaller stores; retail revenue grew 60% within eighteen months.",
      },
    ],
    cover: "photo-1560518883-ce09059eeffa",
    gallery: [
      "photo-1517705008128-361805f42e86",
      "photo-1524758631624-e2822e304c36",
      "photo-1551818255-e6e10975bc17",
      "photo-1568605114967-8130f3a36994",
      "photo-1517245386807-bb43f82c33c4",
    ],
    featured: true,
  },
  {
    slug: "sepehr-industry-hq",
    title: { fa: "دفتر مرکزی «سپهر صنعت»", en: "Sepehr Industry Headquarters" },
    category: "inter",
    year: 2023,
    jalali: 1402,
    location: { fa: "تهران، خیابان ولیعصر", en: "Tehran, Valiasar St." },
    area: 2100,
    status: "completed",
    client: { fa: "سپهر صنعت", en: "Sepehr Industry" },
    role: {
      fa: "طراحی داخلی، نورپردازی و نظارت بر اجرا",
      en: "Interior design, lighting and site supervision",
    },
    summary: {
      fa: "دفتر مرکزی با پلان آزاد، هسته‌ی ارتباطی و اتاق‌های جلسه‌ی شیشه‌ای؛ محیطی که بتواند تغییر سازمان را بپذیرد.",
      en: "A headquarters with free plan, a central communication core and glazed meeting rooms — a place that can absorb organisational change.",
    },
    body: [
      {
        fa: "طراحی از یک قاعده‌ی ساده شروع شد: صدا و دید، هرگز مانع کار نشود. همه‌ی اتاق‌های جلسه شیشه‌ای و همه‌ی سطوح تیمی در محیطی یکپارچه تعریف شدند.",
        en: "The design started from one rule: sound and sightlines should never block work. Every meeting room is glazed and every team surface is defined inside one coherent whole.",
      },
      {
        fa: "نورپردازی روی گردش کار متمرکز شد؛ شدت نور در طول روز و در فصل‌های مختلف تنظیم می‌شود و مصرف برق روشنایی ۴۰ درصد کمتر از طرح اولیه است.",
        en: "Lighting follows the working day: intensity shifts through the day and across seasons, delivering 40% lower lighting energy than the first design.",
      },
    ],
    cover: "photo-1497366216548-37526070297c",
    gallery: [
      "photo-1497366754035-f200968a6e72",
      "photo-1497366811353-6870744d04b2",
      "photo-1545987796-200677ee1011",
      "photo-1524758870432-af57e54afa26",
      "photo-1541746972996-4e0b0f43e02a",
    ],
    featured: true,
  },
  {
    slug: "mehr-brand-store",
    title: { fa: "فروشگاه برند «مُهر»", en: "Mehr Brand Store" },
    category: "inter",
    year: 2022,
    jalali: 1401,
    location: { fa: "اصفهان، بازار هنر", en: "Isfahan, Art Market" },
    area: 640,
    status: "completed",
    client: { fa: "برند مُهر", en: "Mehr Brand" },
    role: {
      fa: "هویت فضا، طراحی داخلی و اجرا",
      en: "Spatial identity, interior design and execution",
    },
    summary: {
      fa: "یک فروشگاه ۶۴۰ متری با مینیمالیسم گرم؛ ویترینی که به‌جای نمایش کالا، حال‌وهوای برند را روایت می‌کند.",
      en: "A 640 m² store with warm minimalism — a window that tells the brand's mood rather than stacking products.",
    },
    body: [
      {
        fa: "برای یک برند پوشاک، مسیر خرید باید از لمس آغاز شود. قفسه‌های چوبی با فاصله‌های غیریکسان ساخته شدند تا کاوش و مکث در مسیر ممکن باشد.",
        en: "For an apparel brand, the purchase journey has to begin with touch. Timber shelving was set at uneven intervals so that browsing and pausing become possible.",
      },
      {
        fa: "نور گرم و بافت طبیعی، حس یک خانه‌ی مدرن را می‌سازد؛ فروش بیشتر و زمان حضور در فروشگاه ۲٫۴ برابر شد.",
        en: "Warm light and natural texture create the feeling of a modern home; sales rose and average time in store more than doubled.",
      },
    ],
    cover: "photo-1519671482749-fd09be7ccebf",
    gallery: [
      "photo-1522444195799-478538b28823",
      "photo-1531482615713-2afd69097998",
      "photo-1577720580479-7d839d829c73",
      "photo-1617806118233-18e1de247200",
      "photo-1503387762-592deb58ef4e",
    ],
  },
  {
    slug: "marine-industry-innovation-hub",
    title: { fa: "هاب نوآوری صنایع دریایی", en: "Marine Industry Innovation Hub" },
    category: "biz",
    year: 2025,
    jalali: 1404,
    location: { fa: "بندرعباس، منطقه آزاد", en: "Bandar Abbas, Free Zone" },
    area: 12000,
    status: "inProgress",
    client: { fa: "منطقه آزاد بندرعباس", en: "Bandar Abbas Free Zone" },
    role: {
      fa: "برنامه‌ریزی، طراحی مفهومی و مدیریت پروژه",
      en: "Programming, concept design and project management",
    },
    summary: {
      fa: "یک هاب چندبرنامه‌ای برای شرکت‌های دریایی: آزمایشگاه، کارگاه ساخت و فضای کار مشترک در یک سایت.",
      en: "A multi-programme hub for marine companies: labs, a fabrication workshop and co-working on one site.",
    },
    body: [
      {
        fa: "مطالعه‌ی بازار نشان داد که نبودِ فضای ساخت و آزمایش، مهم‌ترین مانع رشد شرکت‌های دریایی منطقه است. برنامه‌ی هاب بر همین اساس نوشته شد.",
        en: "Market study showed that the lack of fabrication and test space is the main growth barrier for regional marine firms. The hub programme was written around that finding.",
      },
      {
        fa: "ساختار سبک و مدولار، امکان توسعه‌ی مرحله‌ای را می‌دهد؛ فاز نخست با ۳٬۲۰۰ مترمربع آغاز شده و ساخت تا ۱۴۰۵ ادامه دارد.",
        en: "A light, modular structure allows phased growth: the first phase of 3,200 m² has started, with construction running until 2026.",
      },
    ],
    cover: "photo-1517457373958-b7bdd4587205",
    gallery: [
      "photo-1517705008128-361805f42e86",
      "photo-1544027993-37dbfe43562a",
      "photo-1560518883-ce09059eeffa",
      "photo-1561214115-f2f134cc4912",
      "photo-1600585154526-990dced4db0d",
    ],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const featuredProjects = projects.filter((project) => project.featured);
