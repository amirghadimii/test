import type { Lang } from "@/lib/utils";

const fa = {
  brand: {
    name: "آرک",
    latin: "ARK",
    tagline: "گروه معماری، تجربه و توسعه کسب‌وکار",
    showroom: "شوی‌روم دیجیتال",
  },
  nav: {
    home: "خانه",
    projects: "پروژه‌ها",
    approach: "رویکرد ما",
    services: "خدمات",
    about: "درباره ما",
    contact: "تماس",
    admin: "مدیریت",
    menu: "منو",
    close: "بستن",
    language: "زبان",
    switchToFa: "فا",
    switchToEn: "EN",
  },
  common: {
    all: "همه",
    viewProject: "مشاهده پروژه",
    viewAll: "مشاهده همه",
    readMore: "ادامه",
    back: "بازگشت",
    year: "سال",
    area: "متراژ",
    location: "موقعیت",
    status: "وضعیت",
    client: "کارفرما",
    role: "نقش گروه",
    gallery: "گالری",
    scroll: "اسکرول",
    next: "پروژه بعدی",
    prev: "پروژه قبلی",
    loading: "در حال بارگذاری",
    empty: "موردی برای نمایش وجود ندارد.",
    langNote: "زبان نمایش",
  },
  home: {
    hero: {
      eyebrow: "شوی‌روم دیجیتال",
      line1: "از ایده",
      line2: "تا تجربه",
      text: "ما ساختمان، نمایشگاه و برند را در یک زبان طراحی می‌کنیم؛ جایی که معماری به یادماندنی و کسب‌وکار به رشد واقعی می‌رسد.",
      cta: "دیدن پروژه‌ها",
      ctaSecondary: "شروع گفت‌وگو",
      featureLabel: "پروژه شاخص",
      scrollHint: "برای دیدن ادامه، پایین بروید",
    },
    intro: {
      label: "آرک چیست",
      title: "یک گروه، سه تخصص، یک زبان مشترک",
      text: "آرک از سال ۱۳۹۱ روی پروژه‌هایی کار می‌کند که هم‌زمان باید معماری باشند، تجربه بسازند و به رشد کسب‌وکار کمک کنند. تیم ما از معماری، طراحی تجربه و استراتژی تشکیل شده و همه پروژه‌ها با یک متدولوژی واحد پیش می‌روند.",
      stats: [
        { value: "۱۲۸", label: "پروژه تحویل‌شده" },
        { value: "۱۴", label: "سال سابقه" },
        { value: "۹", label: "استان" },
        { value: "۹۶٪", label: "بازگشت کارفرما" },
      ],
    },
    featured: {
      label: "منتخب کارنامه",
      title: "پروژه‌هایی که حرف می‌زنند",
      text: "هر پروژه یک روایت دارد: از اولین جلسه تا روز افتتاح.",
    },
    approach: {
      label: "رویکرد",
      title: "چهار مرحله، از شناخت تا رشد",
      text: "هر پروژه با یک مسیر روشن شروع می‌شود و با سنجش نتیجه بسته می‌شود.",
      steps: [
        { n: "۰۱", title: "شناخت", text: "شنیدن، تحلیل و تعریف دقیق مسئله." },
        { n: "۰۲", title: "ایده و سناریو", text: "روایت کانسپت و معماری تجربه." },
        { n: "۰۳", title: "طراحی و اجرا", text: "توسعه طراحی، مدیریت پروژه و اجرا." },
        { n: "۰۴", title: "راه‌اندازی و رشد", text: "افتتاح، ارزیابی و توسعه کسب‌وکار." },
      ],
    },
    services: {
      label: "خدمات",
      title: "آنچه انجام می‌دهیم",
      text: "از یک غرفه نمایشگاهی تا یک مجموعه اداری و یک برند کامل.",
      items: [
        "معماری و ساختمان",
        "طراحی داخلی",
        "نمایشگاه و تجربه‌محور",
        "هویت فضا و برندسازی",
        "توسعه کسب‌وکار",
        "مدیریت پروژه و مشاوره فنی",
      ],
    },
    cta: {
      label: "شروع همکاری",
      title: "بیایید پروژه بعدی را با هم بسازیم",
      text: "یک تماس کوتاه کافی است تا بفهمیم چطور می‌توانیم کمک کنیم.",
      primary: "تماس با ما",
      secondary: "مطالعه رویکرد ما",
    },
  },
  projects: {
    label: "کارنامه",
    title: "پروژه‌ها",
    intro:
      "مجموعه‌ای از پروژه‌های معماری، تجربه‌محور، داخلی و توسعه کسب‌وکار؛ هر کدام با روایت، مشخصات و نقش روشن گروه.",
    filters: {
      all: "همه پروژه‌ها",
      arch: "معماری",
      exp: "تجربه و نمایشگاهی",
      biz: "توسعه کسب‌وکار",
      inter: "داخلی",
    },
    count: "پروژه",
    newest: "تازه‌ترین",
    noResult: "پروژه‌ای در این دسته یافت نشد. دسته دیگری را انتخاب کنید.",
  },
  project: {
    specsLabel: "مشخصات پروژه",
    narrativeLabel: "روایت پروژه",
    galleryLabel: "گالری تصاویر",
    roleLabel: "نقش گروه در این پروژه",
    roleText:
      "از تدوین استراتژی و کانسپت تا مدیریت اجرا و تحویل نهایی؛ تیم آرک مسئول هماهنگی همه‌ی ذی‌نفعان پروژه بود.",
    statusLabels: {
      completed: "تکمیل‌شده",
      inProgress: "در حال اجرا",
      concept: "مطالعه و کانسپت",
    },
    notFound: "پروژه مورد نظر پیدا نشد.",
    backToAll: "بازگشت به پروژه‌ها",
    adminBadge: "پروژه افزوده‌شده در پنل",
  },
  approach: {
    label: "رویکرد ما",
    title: "متدولوژی آرک",
    intro:
      "ما باور داریم کیفیت نتیجه‌ی یک فرایند منظم است، نه یک جرقه الهام. چهار مرحله زیر، چارچوب ثابت کار ماست.",
    steps: [
      {
        n: "۰۱",
        title: "شناخت و تحلیل",
        text: "در نخستین جلسه، سازمان شما، بازار و محدودیت‌های پروژه را در کنار هم می‌گذاریم و به یک تعریف روشن از مسئله می‌رسیم.",
        points: [
          "مصاحبه با ذی‌نفعان و تیم کارفرما",
          "تحلیل بازار، رقبا و تجربه کاربر",
          "تدوین سند نیازمندی و شاخص‌های موفقیت",
        ],
      },
      {
        n: "۰۲",
        title: "ایده و سناریو",
        text: "پیش از طراحی، روایت پروژه را می‌نویسیم: اینکه مخاطب باید چه چیزی را حس کند و پیام برند چگونه در فضا تجسم می‌شود.",
        points: [
          "تعریف ایده مرکزی و پیام کلیدی",
          "ساخت سناریوی بازدید و تجربه",
          "کانسپت اولیه و تست با نمونه اولیه",
        ],
      },
      {
        n: "۰۳",
        title: "طراحی و اجرا",
        text: "کانسپت به نقشه اجرایی تبدیل می‌شود؛ از جزئیات معماری و متریال تا برنامه‌ریزی، تدارکات و مدیریت پیمانکاران.",
        points: [
          "توسعه طراحی و جزئیات اجرایی",
          "برآورد، زمان‌بندی و برنامه تدارکات",
          "مدیریت اجرا، کنترل کیفیت و نصب",
        ],
      },
      {
        n: "۰۴",
        title: "راه‌اندازی و رشد",
        text: "پایان پروژه، آغاز سنجش است. پس از افتتاح، عملکرد را اندازه می‌گیریم و مسیر توسعه کسب‌وکار را پیشنهاد می‌دهیم.",
        points: [
          "برنامه راه‌اندازی و رویداد افتتاح",
          "سنجش بازخورد و شاخص‌های عملکرد",
          "برنامه توسعه و پشتیبانی پس از تحویل",
        ],
      },
    ],
    ctaTitle: "می‌خواهید بدانید پروژه شما در کدام مرحله است؟",
    ctaText: "یک جلسه ۴۵ دقیقه‌ای، تصویر روشنی از مسیر پیش رو می‌دهد.",
    ctaButton: "رزرو جلسه",
  },
  services: {
    label: "خدمات",
    title: "خدمات آرک",
    intro:
      "شش حوزه کاری که در آن‌ها تجربه داریم و تیم اختصاصی برای هر پروژه تشکیل می‌دهیم.",
    items: [
      {
        n: "۰۱",
        title: "معماری و ساختمان",
        text: "طراحی معماری از مطالعه سایت تا نقشه اجرایی، برای مجموعه‌های اداری، فرهنگی، صنعتی و مسکونی.",
        points: [
          "مطالعه سایت و تحلیل محدودیت‌ها",
          "طراحی معماری و فازبندی",
          "هماهنگی با مشاوران سازه و تأسیسات",
        ],
      },
      {
        n: "۰۲",
        title: "طراحی داخلی",
        text: "طراحی داخلی بر پایه رفتار واقعی کاربر؛ متریال، نور، آکوستیک و جزئیات اجرایی یکپارچه طراحی می‌شوند.",
        points: [
          "طراحی پلان، نورپردازی و مبلمان",
          "انتخاب متریال و جزئیات اجرایی",
          "اجرا و تحویل کلید",
        ],
      },
      {
        n: "۰۳",
        title: "نمایشگاه و تجربه‌محور",
        text: "طراحی غرفه، موزه و فضای نمایشگاهی؛ از ایده و پروتوتایپ تا ساخت، حمل و مونتاژ در محل.",
        points: [
          "کانسپت روایی و پلان بازدید",
          "پروتوتایپ و تولید محتوا",
          "ساخت، حمل و اجرای در محل",
        ],
      },
      {
        n: "۰۴",
        title: "هویت فضا و برندسازی",
        text: "ترجمه هویت برند به زبان فضا؛ از طراحی لوگوتایپ و رنگ تا طراحی محیط و تجربه مراجعه.",
        points: [
          "استخراج DNA برند و پیام کلیدی",
          "طراحی لوگوتایپ، رنگ و متریال",
          "تدوین دفترچه استاندارد فضا",
        ],
      },
      {
        n: "۰۵",
        title: "توسعه کسب‌وکار",
        text: "طراحی مدل کسب‌وکار، پیشنهاد ارزش و برنامه رشد برای برندهایی که می‌خواهند از یک محصول به یک پلتفرم برسند.",
        points: [
          "تحلیل بازار و جایگاه‌یابی",
          "طراحی مدل درآمدی و خدمات",
          "برنامه رشد و شاخص‌های عملکرد",
        ],
      },
      {
        n: "۰۶",
        title: "مدیریت پروژه و مشاوره فنی",
        text: "برنامه‌ریزی، کنترل هزینه و زمان و مدیریت پیمانکاران؛ تا پروژه دقیقاً مطابق طراحی تحویل شود.",
        points: [
          "زمان‌بندی و کنترل بودجه",
          "مدیریت پیمانکار و تدارکات",
          "کنترل کیفیت و تحویل نهایی",
        ],
      },
    ],
    ctaTitle: "پروژه‌ای در ذهن دارید؟",
    ctaText: "دامنه خدمات ما را با جزئیات بررسی کنید یا مستقیم با ما صحبت کنید.",
    ctaButton: "تماس با گروه",
  },
  about: {
    label: "درباره ما",
    title: "آرک، از یک اتاق کوچک در تهران",
    intro:
      "آرک یک گروه چندتخصصی است؛ تیمی از معماران، طراحان تجربه و مشاوران کسب‌وکار که کنار هم کار می‌کنند تا یک پروژه، یکپارچه و قابل دفاع باشد.",
    story: [
      "کار ما را از سال ۱۳۹۱ با یک اتاق کوچک و یک سؤال ساده شروع کرد: چرا یک ساختمان خوب، همیشه یک کسب‌وکار خوب هم نمی‌سازد؟ پاسخ ما، سه تخصص در یک تیم بود.",
      "امروز با تیمی از ۳۴ نفر در تهران، اصفهان و شیراز کار می‌کنیم و روی پروژه‌هایی تمرکز داریم که در آن‌ها کیفیت فضا و رشد کسب‌وکار به هم گره خورده‌اند. هر پروژه با یک تیم اختصاصی آغاز می‌شود و با سنجش نتیجه بسته می‌شود.",
    ],
    valuesLabel: "ارزش‌ها",
    values: [
      {
        title: "شفافیت",
        text: "ساختار هزینه، برنامه زمانی و تصمیم‌ها همیشه مکتوب و در دسترس است.",
      },
      {
        title: "دقت",
        text: "جزئیات اجرایی، جایی است که ایده زنده می‌شود؛ تا آخرین میلی‌متر پیگیری می‌کنیم.",
      },
      {
        title: "همکاری",
        text: "کارفرما، مشاور و تیم اجرا یک تیم هستند؛ تصمیم‌ها با گفت‌وگو گرفته می‌شوند.",
      },
      {
        title: "ماندگاری",
        text: "فضاهایی می‌سازیم که بعد از سال‌ها همچنان کار کنند و به‌روز بمانند.",
      },
    ],
    teamLabel: "تیم",
    team: [
      { name: "مهندس آرش نیک‌آیین", role: "مدیرعامل و بنیان‌گذار" },
      { name: "مهندس نگار هومن", role: "مدیر معماری" },
      { name: "سارا موحد", role: "مدیر طراحی تجربه" },
      { name: "کامران راد", role: "مدیر توسعه کسب‌وکار" },
      { name: "مهندس یاسر زمانی", role: "مدیر پروژه و اجرا" },
      { name: "هلیا فرهمند", role: "مدیر ارتباط با کارفرما" },
    ],
    numbersLabel: "در یک نگاه",
    numbers: [
      { value: "۳۴", label: "عضو تیم" },
      { value: "۱۲۸", label: "پروژه" },
      { value: "۱۴", label: "سال سابقه" },
      { value: "۲۲", label: "جایزه و تقدیر" },
    ],
    ctaTitle: "بیایید با هم آشنا شویم",
    ctaText: "یک جلسه آشنایی رایگان، بدون تعهد.",
    ctaButton: "درخواست جلسه",
  },
  contact: {
    label: "تماس",
    title: "با ما صحبت کنید",
    intro:
      "برای پروژه‌های معماری، نمایشگاهی، داخلی و توسعه کسب‌وکار، فرم زیر را پر کنید. در کمتر از یک روز کاری پاسخ می‌دهیم.",
    form: {
      name: "نام و نام خانوادگی",
      email: "ایمیل",
      phone: "شماره موبایل",
      subject: "نوع پروژه",
      message: "شرح پروژه",
      submit: "ارسال درخواست",
      sending: "در حال ارسال",
      successTitle: "درخواست شما ثبت شد",
      successText:
        "از تماس شما سپاسگزاریم. کارشناسان ما در اولین فرصت کاری با شما تماس می‌گیرند.",
      another: "ارسال درخواست دیگر",
      optional: "اختیاری",
      required: "الزامی",
      subjects: [
        "معماری و ساختمان",
        "طراحی داخلی",
        "نمایشگاه و تجربه‌محور",
        "هویت فضا و برندسازی",
        "توسعه کسب‌وکار",
        "سایر",
      ],
      errors: {
        name: "نام و نام خانوادگی را وارد کنید.",
        email: "یک ایمیل معتبر وارد کنید.",
        phone: "شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد.",
        message: "شرح پروژه را کمی کامل‌تر بنویسید.",
        general: "ارسال پیام انجام نشد. لطفاً دوباره تلاش کنید.",
      },
    },
    infoLabel: "اطلاعات استودیو",
    phoneLabel: "تلفن",
    emailLabel: "ایمیل",
    hoursLabel: "ساعات کاری",
    address: "تهران، خیابان کریم‌خان زند، پلاک ۱۲۴، طبقه سوم",
    phone: "۰۲۱ ۸۸۴۵ ۲۲۱۰",
    email: "studio@ark-group.ir",
    hours: "شنبه تا چهارشنبه، ۹ تا ۱۸",
    note: "برای بازدید از استودیو، لطفاً از یک روز کاری قبل هماهنگ کنید.",
  },
  admin: {
    label: "پنل مدیریت",
    title: "افزودن پروژه به شوی‌روم",
    intro:
      "پروژه‌ای که اینجا ثبت می‌کنید، بی‌درنگ در صفحه پروژه‌ها نمایش داده می‌شود. داده‌ها در مرورگر شما ذخیره می‌شوند.",
    form: {
      title: "عنوان پروژه",
      category: "دسته‌بندی",
      year: "سال اتمام",
      image: "نشانی تصویر (URL)",
      location: "موقعیت",
      area: "متراژ (متر مربع)",
      status: "وضعیت",
      description: "توضیح کوتاه",
      submit: "ثبت پروژه",
      success: "پروژه ثبت شد و در صفحه پروژه‌ها دیده می‌شود.",
      reset: "پاک‌سازی فرم",
    },
    errors: {
      title: "عنوان پروژه را بنویسید.",
      year: "سال باید بین ۱۳۸۰ تا ۱۴۱۰ باشد.",
      image: "یک نشانی معتبر تصویر وارد کنید (https://…).",
      general: "ثبت پروژه انجام نشد.",
    },
    listLabel: "پروژه‌های ثبت‌شده",
    empty: "هنوز پروژه‌ای ثبت نکرده‌اید.",
    remove: "حذف",
    preview: "مشاهده",
    messagesLabel: "پیام‌های دریافتی",
    messagesEmpty: "هنوز پیامی از فرم تماس ثبت نشده است.",
    refresh: "به‌روزرسانی",
    backToProjects: "مشاهده صفحه پروژه‌ها",
    clearAll: "حذف همه پروژه‌های افزوده‌شده",
  },
  footer: {
    tagline: "معماری، تجربه و توسعه کسب‌وکار در یک گروه.",
    navTitle: "دسترسی",
    servicesTitle: "خدمات",
    contactTitle: "تماس",
    rights: "تمامی حقوق محفوظ است.",
    madeIn: "طراحی و توسعه در تهران",
    backToTop: "بازگشت به بالا",
    newsTitle: "یادداشت‌های گروه",
    newsPlaceholder: "نشانی ایمیل خود را وارد کنید",
    newsButton: "عضویت",
    newsDone: "ایمیل شما ثبت شد.",
  },
  meta: {
    home: {
      title: "آرک | گروه معماری، تجربه و توسعه کسب‌وکار",
      description:
        "آرک یک گروه معماری و توسعه کسب‌وکار در تهران است؛ طراحی ساختمان، فضای داخلی، نمایشگاه و تجربه‌محور برای برندهایی که می‌خواهند دیده شوند.",
    },
    projects: {
      title: "پروژه‌ها | آرک",
      description:
        "نمونه‌کارهای گروه آرک در معماری، تجربه و نمایشگاهی، توسعه کسب‌وکار و طراحی داخلی؛ همراه با مشخصات و نقش گروه در هر پروژه.",
    },
    project: {
      title: "پروژه | آرک",
      description:
        "جزئیات کامل پروژه آرک: موقعیت، سال، متراژ، وضعیت، گالری تصاویر و نقش گروه در طراحی و اجرا.",
    },
    approach: {
      title: "رویکرد ما | آرک",
      description:
        "متدولوژی چهار مرحله‌ای آرک: شناخت و تحلیل، ایده و سناریو، طراحی و اجرا، راه‌اندازی و رشد کسب‌وکار.",
    },
    services: {
      title: "خدمات | آرک",
      description:
        "خدمات گروه آرک: معماری و ساختمان، طراحی داخلی، نمایشگاه و تجربه‌محور، هویت فضا، توسعه کسب‌وکار و مدیریت پروژه.",
    },
    about: {
      title: "درباره ما | آرک",
      description:
        "آرک گروهی چندتخصصی از معماران، طراحان تجربه و مشاوران کسب‌وکار است که از سال ۱۳۹۱ در تهران کار می‌کند.",
    },
    contact: {
      title: "تماس با ما | آرک",
      description:
        "برای پروژه‌های معماری، نمایشگاهی و توسعه کسب‌وکار با گروه آرک در تماس باشید؛ پاسخ در کمتر از یک روز کاری.",
    },
    admin: {
      title: "پنل مدیریت پروژه | آرک",
      description:
        "افزودن پروژه جدید به شوی‌روم دیجیتال آرک؛ پروژه بلافاصله در صفحه پروژه‌ها منتشر می‌شود.",
    },
  },
};

const en: typeof fa = {
  brand: {
    name: "ARK",
    latin: "ARK",
    tagline: "Architecture, Experience & Business Development Group",
    showroom: "Digital Showroom",
  },
  nav: {
    home: "Home",
    projects: "Projects",
    approach: "Approach",
    services: "Services",
    about: "About",
    contact: "Contact",
    admin: "Admin",
    menu: "Menu",
    close: "Close",
    language: "Language",
    switchToFa: "فا",
    switchToEn: "EN",
  },
  common: {
    all: "All",
    viewProject: "View project",
    viewAll: "View all",
    readMore: "Read more",
    back: "Back",
    year: "Year",
    area: "Area",
    location: "Location",
    status: "Status",
    client: "Client",
    role: "Our role",
    gallery: "Gallery",
    scroll: "Scroll",
    next: "Next project",
    prev: "Previous project",
    loading: "Loading",
    empty: "Nothing to show here.",
    langNote: "Display language",
  },
  home: {
    hero: {
      eyebrow: "Digital Showroom",
      line1: "From an idea",
      line2: "to an experience",
      text: "We design buildings, exhibitions and brands in one language — where architecture becomes memorable and business actually grows.",
      cta: "See the projects",
      ctaSecondary: "Start a conversation",
      featureLabel: "Featured project",
      scrollHint: "Scroll to explore",
    },
    intro: {
      label: "What ARK is",
      title: "One group, three disciplines, one shared language",
      text: "Since 2012 we have worked on projects that must be architecture, must build an experience, and must move a business forward. Our team mixes architecture, experience design and strategy, and every project runs on one methodology.",
      stats: [
        { value: "128", label: "Projects delivered" },
        { value: "14", label: "Years of practice" },
        { value: "9", label: "Provinces" },
        { value: "96%", label: "Client retention" },
      ],
    },
    featured: {
      label: "Selected work",
      title: "Projects that speak",
      text: "Every project has a narrative: from the first meeting to opening day.",
    },
    approach: {
      label: "Approach",
      title: "Four steps, from discovery to growth",
      text: "Every project starts with a clear route and ends with measured results.",
      steps: [
        { n: "01", title: "Discover", text: "Listening, analysis, defining the problem." },
        { n: "02", title: "Concept", text: "Narrative and experience architecture." },
        { n: "03", title: "Design & build", text: "Design development, delivery, execution." },
        { n: "04", title: "Launch & grow", text: "Opening, evaluation and business growth." },
      ],
    },
    services: {
      label: "Services",
      title: "What we do",
      text: "From a single exhibition stand to a full workplace and a complete brand.",
      items: [
        "Architecture & buildings",
        "Interior design",
        "Exhibitions & experience",
        "Spatial identity & branding",
        "Business development",
        "Project management & advisory",
      ],
    },
    cta: {
      label: "Start a project",
      title: "Let's build the next one together",
      text: "One short call is enough for us to understand where we can help.",
      primary: "Contact us",
      secondary: "Read our approach",
    },
  },
  projects: {
    label: "Portfolio",
    title: "Projects",
    intro:
      "A selection of architecture, experience, interior and business-development projects — each with a narrative, specs and a clearly stated role.",
    filters: {
      all: "All projects",
      arch: "Architecture",
      exp: "Experience & exhibition",
      biz: "Business development",
      inter: "Interior",
    },
    count: "projects",
    newest: "Newest",
    noResult: "No project in this category yet. Try another filter.",
  },
  project: {
    specsLabel: "Project specs",
    narrativeLabel: "Project narrative",
    galleryLabel: "Image gallery",
    roleLabel: "The group's role",
    roleText:
      "From strategy and concept to construction management and final handover, the ARK team coordinated every stakeholder of the project.",
    statusLabels: {
      completed: "Completed",
      inProgress: "In progress",
      concept: "Study & concept",
    },
    notFound: "We could not find that project.",
    backToAll: "Back to projects",
    adminBadge: "Project added from the panel",
  },
  approach: {
    label: "Our approach",
    title: "The ARK methodology",
    intro:
      "We believe quality is the outcome of a disciplined process, not a flash of inspiration. The four steps below are the fixed frame of our work.",
    steps: [
      {
        n: "01",
        title: "Discovery & analysis",
        text: "In the first session we put your organisation, the market and the project's constraints side by side, and arrive at a precise definition of the problem.",
        points: [
          "Interviews with stakeholders and the client team",
          "Market, competitor and user-experience analysis",
          "Requirements brief and success metrics",
        ],
      },
      {
        n: "02",
        title: "Idea & scenario",
        text: "Before designing, we write the project's narrative: what the audience must feel, and how the brand message becomes physical in space.",
        points: [
          "Defining the core idea and key message",
          "Building the visit and experience scenario",
          "Concept design and prototype testing",
        ],
      },
      {
        n: "03",
        title: "Design & build",
        text: "The concept becomes a set of construction documents — from architecture and materials to scheduling, procurement and contractor management.",
        points: [
          "Design development and construction detailing",
          "Cost plan, programme and procurement strategy",
          "Site management, quality control and installation",
        ],
      },
      {
        n: "04",
        title: "Launch & growth",
        text: "The end of the project is where measurement begins. After opening, we track performance and propose the road to business growth.",
        points: [
          "Launch plan and opening event",
          "Feedback and performance review",
          "Growth roadmap and post-handover support",
        ],
      },
    ],
    ctaTitle: "Want to know which stage your project is at?",
    ctaText: "A 45-minute session gives you a clear picture of the road ahead.",
    ctaButton: "Book a session",
  },
  services: {
    label: "Services",
    title: "ARK services",
    intro:
      "Six fields we know well, each with a dedicated team assembled for your project.",
    items: [
      {
        n: "01",
        title: "Architecture & buildings",
        text: "Architectural design from site study to construction documents, for administrative, cultural, industrial and residential programmes.",
        points: [
          "Site study and constraint analysis",
          "Architectural design and phasing",
          "Coordination with structural and MEP consultants",
        ],
      },
      {
        n: "02",
        title: "Interior design",
        text: "Interiors designed around real user behaviour; materials, light, acoustics and construction detail are designed as one system.",
        points: [
          "Plan, lighting and furniture design",
          "Material selection and construction detailing",
          "Execution and handover",
        ],
      },
      {
        n: "03",
        title: "Exhibitions & experience",
        text: "Stands, museums and exhibition spaces — from idea and prototype through fabrication, shipping and on-site assembly.",
        points: [
          "Narrative concept and visit plan",
          "Prototyping and content production",
          "Fabrication, logistics and on-site build",
        ],
      },
      {
        n: "04",
        title: "Spatial identity & branding",
        text: "Translating brand identity into spatial language — from logotype and colour to environment and visitor experience.",
        points: [
          "Brand DNA extraction and key message",
          "Logotype, colour and material design",
          "Spatial brand guidelines",
        ],
      },
      {
        n: "05",
        title: "Business development",
        text: "Business models, value propositions and growth plans for brands ready to move from a single product to a platform.",
        points: [
          "Market analysis and positioning",
          "Revenue and service model design",
          "Growth plan and performance metrics",
        ],
      },
      {
        n: "06",
        title: "Project management & advisory",
        text: "Planning, cost and time control and contractor management, so the project is delivered exactly as designed.",
        points: [
          "Programming and budget control",
          "Contractor and procurement management",
          "Quality control and final handover",
        ],
      },
    ],
    ctaTitle: "Have a project in mind?",
    ctaText: "Review the full scope of our services, or talk to us directly.",
    ctaButton: "Talk to the group",
  },
  about: {
    label: "About us",
    title: "ARK started in one small Tehran office",
    intro:
      "ARK is a multidisciplinary group: architects, experience designers and business advisors working side by side so that each project stays coherent and defensible.",
    story: [
      "We started in 2012 with one small office and one simple question: why does a good building never automatically create a good business? Our answer was three disciplines inside one team.",
      "Today we are 34 people based in Tehran, Isfahan and Shiraz, focused on projects where spatial quality and business growth are bound together. Every project starts with a dedicated team and closes with measured results.",
    ],
    valuesLabel: "Values",
    values: [
      {
        title: "Transparency",
        text: "Cost structure, programme and decisions are always written down and available.",
      },
      {
        title: "Precision",
        text: "Construction detail is where an idea comes alive; we follow it to the last millimetre.",
      },
      {
        title: "Collaboration",
        text: "Client, consultant and site team are one team; decisions are made by conversation.",
      },
      {
        title: "Longevity",
        text: "We make spaces that still work — and can still be updated — years later.",
      },
    ],
    teamLabel: "The team",
    team: [
      { name: "Arash Nikaein", role: "Managing Director & Founder" },
      { name: "Negar Homan", role: "Director of Architecture" },
      { name: "Sara Movahed", role: "Head of Experience Design" },
      { name: "Kamran Rad", role: "Head of Business Development" },
      { name: "Yaser Zamani", role: "Project & Delivery Director" },
      { name: "Helia Farahmand", role: "Client Relations" },
    ],
    numbersLabel: "At a glance",
    numbers: [
      { value: "34", label: "Team members" },
      { value: "128", label: "Projects" },
      { value: "14", label: "Years of practice" },
      { value: "22", label: "Awards & mentions" },
    ],
    ctaTitle: "Let's get to know each other",
    ctaText: "A free introductory session, with no obligation.",
    ctaButton: "Request a session",
  },
  contact: {
    label: "Contact",
    title: "Talk to us",
    intro:
      "For architecture, exhibition, interior and business-development projects, fill in the form below. We reply within one working day.",
    form: {
      name: "Full name",
      email: "Email",
      phone: "Mobile number",
      subject: "Project type",
      message: "Tell us about the project",
      submit: "Send request",
      sending: "Sending",
      successTitle: "Your request has been received",
      successText:
        "Thank you for reaching out. Our team will contact you at the first opportunity.",
      another: "Send another request",
      optional: "optional",
      required: "required",
      subjects: [
        "Architecture & buildings",
        "Interior design",
        "Exhibitions & experience",
        "Spatial identity & branding",
        "Business development",
        "Other",
      ],
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        phone: "The mobile number must start with 09 and be 11 digits.",
        message: "Please write a slightly longer description.",
        general: "The message could not be sent. Please try again.",
      },
    },
    infoLabel: "Studio information",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hoursLabel: "Office hours",
    address: "124 Karim Khan Zand St., 3rd Floor, Tehran, Iran",
    phone: "+98 21 8845 2210",
    email: "studio@ark-group.ir",
    hours: "Saturday to Wednesday, 9am – 6pm",
    note: "Please book a day ahead if you would like to visit the studio.",
  },
  admin: {
    label: "Admin panel",
    title: "Add a project to the showroom",
    intro:
      "A project registered here appears on the projects page instantly. Data is stored in your browser.",
    form: {
      title: "Project title",
      category: "Category",
      year: "Year of completion",
      image: "Image URL",
      location: "Location",
      area: "Area (m²)",
      status: "Status",
      description: "Short description",
      submit: "Publish project",
      success: "The project is published and now visible in the projects grid.",
      reset: "Reset form",
    },
    errors: {
      title: "Please enter a project title.",
      year: "The year must be between 1380 and 1410.",
      image: "Please enter a valid image URL (https://…).",
      general: "The project could not be saved.",
    },
    listLabel: "Registered projects",
    empty: "You have not registered any project yet.",
    remove: "Remove",
    preview: "Preview",
    messagesLabel: "Received messages",
    messagesEmpty: "No contact-form message has been recorded yet.",
    refresh: "Refresh",
    backToProjects: "View projects page",
    clearAll: "Remove all added projects",
  },
  footer: {
    tagline: "Architecture, experience and business development in one group.",
    navTitle: "Navigate",
    servicesTitle: "Services",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    madeIn: "Designed and built in Tehran",
    backToTop: "Back to top",
    newsTitle: "Group notes",
    newsPlaceholder: "Enter your email address",
    newsButton: "Subscribe",
    newsDone: "Your email has been recorded.",
  },
  meta: {
    home: {
      title: "ARK | Architecture, Experience & Business Development Group",
      description:
        "ARK is a Tehran-based architecture and business-development group designing buildings, interiors, exhibitions and experiences for brands that want to be seen.",
    },
    projects: {
      title: "Projects | ARK",
      description:
        "Selected ARK work in architecture, experience and exhibition design, business development and interior design — with specs and the group's role in each project.",
    },
    project: {
      title: "Project | ARK",
      description:
        "Full ARK project details: location, year, area, status, image gallery and the group's role in design and delivery.",
    },
    approach: {
      title: "Our approach | ARK",
      description:
        "The four-step ARK methodology: discovery and analysis, idea and scenario, design and build, launch and business growth.",
    },
    services: {
      title: "Services | ARK",
      description:
        "ARK services: architecture and buildings, interior design, exhibitions and experience, spatial identity, business development, and project management.",
    },
    about: {
      title: "About us | ARK",
      description:
        "ARK is a multidisciplinary group of architects, experience designers and business advisors, working from Tehran since 2012.",
    },
    contact: {
      title: "Contact | ARK",
      description:
        "Get in touch with the ARK group for architecture, exhibition and business-development projects — we reply within one working day.",
    },
    admin: {
      title: "Project admin panel | ARK",
      description:
        "Add a new project to the ARK digital showroom; it appears on the projects page immediately.",
    },
  },
};

export const dictionary: Record<Lang, typeof fa> = { fa, en };

export type Dict = typeof fa;

export const metaKeyForPath = (pathname: string): keyof Dict["meta"] => {
  if (pathname.startsWith("/projects/")) return "project";
  if (pathname.startsWith("/projects")) return "projects";
  if (pathname.startsWith("/approach")) return "approach";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/admin")) return "admin";
  return "home";
};
