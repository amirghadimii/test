'use strict';
/* ================= DATA ================= */
const CATS = {women:'زنانه', men:'مردانه', kids:'بچگانه', acc:'کیف و اکسسوری'};
const PRODUCTS = [
 {id:1, name:'مانتو بلند کرم کمربنددار', cat:'women', sub:'مانتو و پالتو', price:2480000, old:3100000, rating:4.9, reviews:214, pop:99, isNew:false,
  colors:[['کرم','#C8A97E'],['مشکی','#232323']], img:'p1.jpg', gallery:['p1.jpg','p1-d1.jpg','p1-d2.jpg'],
  sizes:{'S':4,'M':7,'L':2,'XL':0}, desc:'مانتوی بلند پاییزه با پارچه کرپ مازراتی، کمربند هم‌رنگ و آستین پاکتی. برش آزاد و قد مناسب برای استایل روزمره و مهمانی؛ دوخت تمیز و آستر داخلی نرم.',
  specs:[['جنس','کرپ مازراتی'],['قد','۱۱۵ سانتی‌متر'],['آستر','دارد'],['نحوه شستشو','خشکشویی یا آب سرد']]},
 {id:2, name:'پیراهن مجلسی قرمز ماکسی', cat:'women', sub:'پیراهن و لباس مجلسی', price:3250000, old:3900000, rating:4.8, reviews:96, pop:88, isNew:true,
  colors:[['قرمز','#A31621']], img:'p2.jpg', gallery:['p2.jpg','p2-d1.jpg','p2-d2.jpg'],
  sizes:{'S':3,'M':5,'L':6,'XL':2}, desc:'پیراهن مجلسی ماکسی با دامن کلوش و بالاتنه جذب؛ انتخابی چشمگیر برای مهمانی و مراسم. زیپ مخفی پشت و پارچه‌ای با ایستایی عالی.',
  specs:[['جنس','کرپ حریر'],['قد','۱۵۰ سانتی‌متر'],['آستر','دارد'],['رنگ','قرمز']]},
 {id:3, name:'پیراهن سفید ماکسی آستین حریر', cat:'women', sub:'پیراهن و لباس مجلسی', price:1890000, old:null, rating:4.7, reviews:58, pop:71, isNew:true,
  colors:[['سفید','#F4F1EA']], img:'p3.jpg', gallery:['p3.jpg','p3-d1.jpg','p3-d2.jpg'],
  sizes:{'S':0,'M':4,'L':5,'XL':3}, desc:'پیراهن سفید ماکسی با آستین‌های حریر شفاف و یقه گرد؛ لطیف، خنک و مناسب مهمانی‌های تابستانی و عکاسی.',
  specs:[['جنس','حریر و کرپ'],['قد','۱۴۵ سانتی‌متر'],['آستر','دارد'],['رنگ','سفید']]},
 {id:4, name:'بلوز سفید آستین پفی', cat:'women', sub:'بلوز و شومیز', price:980000, old:1250000, rating:4.6, reviews:143, pop:83, isNew:false,
  colors:[['سفید','#F4F1EA'],['کرم','#E4D3B0']], img:'p4.jpg', gallery:['p4.jpg','p4-d1.jpg','p4b.jpg'],
  sizes:{'S':8,'M':9,'L':1,'XL':4}, desc:'بلوز سفید با آستین پفی و یقه ایستاده؛ پارچه نخی تنفس‌پذیر که با دامن و شلوار به‌راحتی ست می‌شود.',
  specs:[['جنس','نخ پنبه'],['مدل آستین','پفی'],['رنگ','سفید'],['نحوه شستشو','ماشینی، آب سرد']]},
 {id:5, name:'دامن میدی پلیسه کرم', cat:'women', sub:'دامن', price:1140000, old:null, rating:4.7, reviews:77, pop:66, isNew:false,
  colors:[['کرم','#D9C39A'],['مشکی','#232323']], img:'p5.jpg', gallery:['p5.jpg','p5-d1.jpg','p5b.jpg'],
  sizes:{'S':5,'M':2,'L':7,'XL':6}, desc:'دامن میدی پلیسه با کمر کش پهن؛ سبک و خوش‌ایست، مناسب استایل خیابانی و مهمانی دوستانه.',
  specs:[['جنس','کرپ پلیسه'],['قد','۸۵ سانتی‌متر'],['کمر','کش پهن'],['آستر','نیم‌آستر']]},
 {id:6, name:'کفش پاشنه‌دار قرمز ورنی', cat:'women', sub:'کفش', price:1760000, old:2200000, rating:4.5, reviews:189, pop:91, isNew:false,
  colors:[['قرمز','#B01E28']], img:'p6.jpg', gallery:['p6.jpg','p6-d1.jpg','p6b.jpg'],
  sizes:{'37':2,'38':5,'39':0,'40':3,'41':1}, desc:'کفش مجلسی ورنی قرمز با پاشنه ۷ سانتی و زیره نرم ضدلغزش؛ درخشش خاص برای کامل‌کردن استایل مجلسی.',
  specs:[['جنس رویه','ورنی'],['ارتفاع پاشنه','۷ سانتی‌متر'],['زیره','ضدلغزش'],['رنگ','قرمز']]},
 {id:7, name:'پالتو بلند طوسی پشمی', cat:'women', sub:'مانتو و پالتو', price:2980000, old:null, rating:4.8, reviews:64, pop:74, isNew:true,
  colors:[['طوسی','#6E6E6E']], img:'p7.jpg', gallery:['p7.jpg','p7-d1.jpg','p7-d2.jpg'],
  sizes:{'S':2,'M':3,'L':0,'XL':2}, desc:'پالتوی بلند پشمی با برش کلاسیک و دکمه‌های مخفی؛ گرم، خوش‌دوخت و ماندگار برای زمستان‌های سرد.',
  specs:[['جنس','پشم و پلی‌استر'],['قد','۱۲۰ سانتی‌متر'],['آستر','کامل'],['جیب','دو جیب مخفی']]},
 {id:8, name:'پیراهن مردانه سفید کلاسیک', cat:'men', sub:'پیراهن', price:1240000, old:null, rating:4.7, reviews:231, pop:90, isNew:false,
  colors:[['سفید','#F4F1EA'],['آبی روشن','#B9CFE4']], img:'p8.jpg', gallery:['p8.jpg','p8-d1.jpg','p8-d2.jpg'],
  sizes:{'M':6,'L':8,'XL':5,'XXL':3}, desc:'پیراهن مردانه سفید با برش اسلیم‌فیت و پارچه ضدچروک؛ پایه ثابت کمد هر آقای خوش‌پوشی، از اداره تا مهمانی.',
  specs:[['جنس','پنبه و پلی‌استر'],['برش','اسلیم‌فیت'],['یقه','کلاسیک دکمه‌دار'],['اتو‌پذیری','آسان']]},
 {id:9, name:'تیشرت نخی سفید یقه گرد', cat:'men', sub:'تیشرت', price:540000, old:690000, rating:4.6, reviews:412, pop:95, isNew:false,
  colors:[['سفید','#F4F1EA'],['مشکی','#232323'],['زیتونی','#5A6248']], img:'p9.jpg', gallery:['p9.jpg','p9-d1.jpg','p9-d2.jpg'],
  sizes:{'S':12,'M':15,'L':9,'XL':4}, desc:'تیشرت نخی ضخیم با دوخت تقویت‌شده؛ نه نازک می‌شود نه فرم از دست می‌دهد. انتخاب روزمره برای تمام فصل‌ها.',
  specs:[['جنس','۱۰۰٪ نخ پنبه'],['گرماژ','۲۲۰ گرم'],['یقه','گرد کشباف'],['برش','رگولار']]},
 {id:10, name:'کت چرم مردانه موتورسواری', cat:'men', sub:'کت و کاپشن', price:4650000, old:5800000, rating:4.9, reviews:87, pop:86, isNew:false,
  colors:[['مشکی','#232323']], img:'p10.jpg', gallery:['p10.jpg','p10b.jpg','p10-d1.jpg'],
  sizes:{'M':2,'L':3,'XL':1}, desc:'کت چرم طبیعی با زیپ‌های فلزی و آستر گرم؛ استایل موتورسواری اصیل که با گذر زمان زیباتر می‌شود.',
  specs:[['جنس','چرم طبیعی گاوی'],['آستر','ویسکوز گرم'],['جیب','۴ جیب زیپ‌دار'],['نگهداری','واکس مخصوص چرم']]},
 {id:11, name:'شلوار جین اسکینی آبی روشن', cat:'men', sub:'شلوار', price:1380000, old:null, rating:4.5, reviews:168, pop:79, isNew:false,
  colors:[['آبی روشن','#7E9BBD']], img:'p11.jpg', gallery:['p11.jpg','p11-d1.jpg','p11-d2.jpg'],
  sizes:{'30':4,'31':6,'32':2,'33':5,'34':0}, desc:'شلوار جین اسکینی با کشسانی ملایم و رنگ ثابت؛ فیت جذب و راحت برای استفاده روزمره.',
  specs:[['جنس','دنیم کشی'],['برش','اسکینی'],['فاق','متوسط'],['رنگ','آبی روشن']]},
 {id:12, name:'کت تک طوسی مردانه', cat:'men', sub:'کت و کاپشن', price:2740000, old:null, rating:4.7, reviews:73, pop:68, isNew:true,
  colors:[['طوسی','#7A7A76']], img:'p12.jpg', gallery:['p12.jpg','p12-d1.jpg','p12-d2.jpg'],
  sizes:{'M':3,'L':4,'XL':2}, desc:'کت تک طوسی با برش مدرن و دکمه چوبی؛ هم با جین ست می‌شود هم با شلوار پارچه‌ای، برای قرارهای کاری و مهمانی.',
  specs:[['جنس','فاستونی'],['آستر','نیم‌آستر'],['جیب','۳ جیب'],['برش','رگولار']]},
 {id:13, name:'کت‌وشلوار مشکی مجلسی', cat:'men', sub:'کت‌وشلوار', price:5900000, old:6900000, rating:4.8, reviews:52, pop:77, isNew:false,
  colors:[['مشکی','#1D1D1D']], img:'p13.jpg', gallery:['p13.jpg','p13-d1.jpg','p13-d2.jpg'],
  sizes:{'48':2,'50':3,'52':1,'54':0}, desc:'کت‌وشلوار مشکی با پارچه فاستونی اعلا و دوخت صنعتی تمیز؛ انتخاب مطمئن برای مراسم رسمی و دامادی.',
  specs:[['جنس','فاستونی پشمی'],['شلوار','هم‌رنگ، راسته'],['آستر','کامل'],['برش','کلاسیک']]},
 {id:14, name:'ست بچگانه استریت (تیشرت و شلوار)', cat:'kids', sub:'ست بچگانه', price:860000, old:null, rating:4.8, reviews:129, pop:84, isNew:true,
  colors:[['چندرنگ','#C97B4A']], img:'p14.jpg', gallery:['p14.jpg','p14-d1.jpg','p14-d2.jpg'],
  sizes:{'۴-۵ سال':5,'۶-۷ سال':3,'۸-۹ سال':0,'۱۰-۱۱ سال':4}, desc:'ست راحت و بادوام بچگانه با پارچه نخی ضدحساسیت؛ مناسب بازی، مدرسه و مهمانی. رنگ ثابت در شستشو.',
  specs:[['جنس','نخ پنبه ضدحساسیت'],['شلوار','کمر کش'],['چاپ','ثابت، بدون ترک'],['رده سنی','۴ تا ۱۱ سال']]},
 {id:15, name:'ست بچگانه پاییزه خواهر و برادری', cat:'kids', sub:'ست بچگانه', price:940000, old:1180000, rating:4.9, reviews:94, pop:81, isNew:false,
  colors:[['کرم و جین','#C9B18C']], img:'p15.jpg', gallery:['p15.jpg','p15-d1.jpg','p15-d2.jpg'],
  sizes:{'۴-۵ سال':6,'۶-۷ سال':2,'۸-۹ سال':5,'۱۰-۱۱ سال':3}, desc:'ست پاییزه گرم و لطیف برای خواهر و برادرها؛ دوخت محکم و پارچه‌ای که پرز نمی‌دهد.',
  specs:[['جنس','دورس پنبه‌ای'],['آستر','نرم و گرم'],['رده سنی','۴ تا ۱۱ سال'],['شستشو','ماشینی']]},
 {id:16, name:'کیف دستی چرم مشکی زنانه', cat:'acc', sub:'کیف', price:2130000, old:2650000, rating:4.8, reviews:176, pop:93, isNew:false,
  colors:[['مشکی','#232323'],['قهوه‌ای','#6B4232']], img:'p16.jpg', gallery:['p16.jpg','p16b.jpg','p16-d1.jpg'],
  sizes:{'فری‌سایز':6}, desc:'کیف دستی چرم با یراق طلایی و فضای داخلی سه‌بخشی؛ هم برای روزمره شیک است هم برای مهمانی.',
  specs:[['جنس','چرم مصنوعی درجه‌یک'],['بند','دستی و دوشی'],['ابعاد','۳۰×۲۲×۱۲'],['جیب داخلی','۳ بخش + زیپ']]},
 {id:17, name:'عینک آفتابی UV400', cat:'acc', sub:'عینک', price:720000, old:null, rating:4.4, reviews:203, pop:63, isNew:false,
  colors:[['مشکی','#232323']], img:'p17.jpg', gallery:['p17.jpg','p17-d1.jpg','p17-d2.jpg'],
  sizes:{'فری‌سایز':0}, desc:'عینک آفتابی با لنز UV400 و فریم سبک؛ محافظت کامل چشم با طراحی به‌روز. — این کالا در حال حاضر ناموجود است و به‌زودی شارژ می‌شود.',
  specs:[['لنز','UV400 پلاریزه'],['فریم','استات سبک'],['همراه','کیف و دستمال'],['مناسب','خانم‌ها و آقایان']]},
 {id:18, name:'کتانی سفید روزمره', cat:'men', sub:'کفش', price:1890000, old:null, rating:4.6, reviews:268, pop:89, isNew:true,
  colors:[['سفید','#F4F1EA']], img:'p18.jpg', gallery:['p18.jpg','p18-d1.jpg','p18-d2.jpg'],
  sizes:{'40':3,'41':6,'42':2,'43':5,'44':0}, desc:'کتانی سفید مینیمال با زیره نرم و رویه تنفس‌پذیر؛ با همه‌چیز ست می‌شود و برای پیاده‌روی روزانه عالی است.',
  specs:[['رویه','چرم مصنوعی و مش'],['زیره','EVA نرم'],['وزن','سبک'],['مناسب','روزمره']]},
 {id:19, name:'کتانی رانینگ رنگی', cat:'women', sub:'کفش', price:1980000, old:2450000, rating:4.7, reviews:141, pop:85, isNew:false,
  colors:[['چندرنگ','#C2506B']], img:'p19.jpg', gallery:['p19.jpg','p19-d1.jpg','p19-d2.jpg'],
  sizes:{'37':4,'38':1,'39':6,'40':3,'41':2}, desc:'کتانی رانینگ سبک با زیره انعطاف‌پذیر و رنگ‌بندی پرانرژی؛ برای دویدن و استایل اسپرت روزانه.',
  specs:[['رویه','مش تنفس‌پذیر'],['زیره','فوم انرژی‌برگردان'],['وزن','۲۴۰ گرم'],['مناسب','دویدن و روزمره']]},
];
/* ================= HELPERS ================= */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const FA='۰۱۲۳۴۵۶۷۸۹';
const faNum=n=>String(n).replace(/\d/g,d=>FA[d]);
const faPrice=n=>faNum(Math.round(n).toLocaleString('en-US')).replace(/,/g,'٬');
const faPriceT=n=>faPrice(n)+' تومان';
const totalStock=p=>Object.values(p.sizes).reduce((a,b)=>a+b,0);
const discPct=p=>p.old?Math.round((1-p.price/p.old)*100):0;
function toast(msg,icon='✓'){
  const t=document.createElement('div');t.className='toast';t.innerHTML=`<span>${icon}</span> ${msg}`;
  $('#toasts').appendChild(t);setTimeout(()=>{t.style.opacity='0';t.style.transition='.3s';setTimeout(()=>t.remove(),320)},2600);
}

/* ================= STATE ================= */
let cart=[];            // {pid,size,color,qty}
let wishlist=new Set();
let shopState={cat:'all', subs:new Set(), sizes:new Set(), maxPrice:6000000, onlyStock:false, onlySale:false, sort:'pop', query:'', saleOnly:false};
let pdState={pid:null,size:null,color:null,qty:1,img:null};
let spotState={size:null,color:null,qty:1};

/* ================= PRODUCT CARD ================= */
function cardHTML(p){
  const stock=totalStock(p);
  const off=discPct(p);
  const sizeList=Object.keys(p.sizes).join(' ، ');
  return `<article class="pcard">
    <div class="ph" data-open="${p.id}">
      <img src="assets/img/${p.img}" alt="${p.name}" loading="lazy">
      ${off?`<span class="disc">٪${faNum(off)} تخفیف</span>`:p.isNew?`<span class="newb">جدید</span>`:''}
      <button class="wish ${wishlist.has(p.id)?'on':''}" data-wish="${p.id}" aria-label="علاقه‌مندی">${wishlist.has(p.id)?'♥':'♡'}</button>
      ${stock===0?`<div class="oos"><span>ناموجود</span></div>`:stock<=3?`<span class="low">تنها ${faNum(stock)} عدد مانده</span>`:''}
    </div>
    <div class="bd">
      <div class="sub">${CATS[p.cat]} · ${p.sub}</div>
      <h3 data-open="${p.id}">${p.name}</h3>
      <div class="sizes">سایز: ${faNum(sizeList)}</div>
      <div class="rate">★ ${faNum(p.rating)} <small>(${faNum(p.reviews)} دیدگاه)</small></div>
      <div class="pr">
        <div>${p.old?`<span class="old">${faPrice(p.old)}</span>`:''}<span class="now">${faPrice(p.price)} <small>تومان</small></span></div>
        <button class="add" data-add="${p.id}" ${stock===0?'disabled':''} aria-label="افزودن به سبد">+</button>
      </div>
    </div>
  </article>`;
}
function renderGrid(el,list){el.innerHTML=list.map(cardHTML).join('');}

/* ================= HOME ================= */
function renderHome(){
  const cats=[['women','مانتو و پالتو','p1.jpg'],['women','پیراهن مجلسی','p2.jpg'],['men','کت و کاپشن','p10.jpg'],['men','پیراهن','p8.jpg'],['kids','ست بچگانه','p14.jpg'],['acc','کیف','p16.jpg'],['women','کفش زنانه','p6.jpg'],['men','کفش مردانه','p18.jpg']];
  $('#catsRow').innerHTML=cats.map(c=>`<div class="cat-circ" data-nav="shop" data-cat="${c[0]}"><div class="ring"><img src="assets/img/${c[2]}" alt="${c[1]}"></div><span>${c[1]}</span></div>`).join('');
  renderGrid($('#flashRail'),PRODUCTS.filter(p=>p.old&&totalStock(p)>0).slice(0,4));
  renderGrid($('#newGrid'),[...PRODUCTS].sort((a,b)=>b.pop-a.pop).slice(0,8));
  renderSpotlight();
}
function renderSpotlight(){
  const p=PRODUCTS[0];
  if(!spotState.size){const s=Object.entries(p.sizes).find(([,v])=>v>0);spotState.size=s?s[0]:null;spotState.color=p.colors[0][0];}
  const stock=p.sizes[spotState.size]||0;
  $('#spotlight').innerHTML=`
    <div class="ph"><img src="assets/img/${p.img}" alt="${p.name}"></div>
    <div>
      <div class="kicker">پیشنهاد منتخب هفته</div>
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="rate">★ ${faNum(p.rating)} <small>از ${faNum(p.reviews)} دیدگاه خریداران</small></div>
      <div class="opt-label">رنگ: <span>${spotState.color}</span></div>
      <div class="swatches">${p.colors.map(c=>`<button class="swatch ${c[0]===spotState.color?'on':''}" data-spot-color="${c[0]}" style="background:${c[1]}" aria-label="${c[0]}"></button>`).join('')}</div>
      <div class="opt-label">سایز: <span>راهنمای سایز در صفحه محصول</span></div>
      <div class="sizes">${Object.entries(p.sizes).map(([s,n])=>`<button class="size ${s===spotState.size?'on':''} ${n===0?'off':''}" data-spot-size="${s}" ${n===0?'disabled':''}>${faNum(s)}<span class="stk">${n>0?faNum(n)+' عدد':'ناموجود'}</span></button>`).join('')}</div>
      <div class="stock-note ${stock<=3?'low':'ok'}">${stock<=3?'⚠ تنها '+faNum(stock)+' عدد از این سایز باقی مانده':'✓ موجود در انبار مانا'}</div>
      <div class="buy">
        <div class="qty"><button data-spot-q="-1">−</button><b>${faNum(spotState.qty)}</b><button data-spot-q="1">+</button></div>
        <button class="btn btn-accent" id="spotAdd">افزودن به سبد خرید</button>
        <div class="pricebox">${p.old?`<div class="old">${faPriceT(p.old)}</div>`:''}<div class="now">${faPriceT(p.price)}</div></div>
      </div>
      <button class="more" data-open="${p.id}" style="margin-top:14px;color:var(--accent-d);font-weight:700">مشاهده جزئیات و نظرات ←</button>
    </div>`;
}

/* ================= SHOP ================= */
function allSubs(){return [...new Set(PRODUCTS.map(p=>p.sub))];}
function allSizes(){const s=new Set();PRODUCTS.forEach(p=>Object.keys(p.sizes).forEach(x=>s.add(x)));return [...s];}
function renderFilterControls(){
  $('#subFilters').innerHTML=allSubs().map(s=>`<label class="f-check"><input type="checkbox" data-sub="${s}" ${shopState.subs.has(s)?'checked':''}> ${s}</label>`).join('');
  const order=['S','M','L','XL','XXL','فری‌سایز'];
  const sizes=allSizes().sort((a,b)=>{const ia=order.indexOf(a),ib=order.indexOf(b);if(ia>-1||ib>-1)return (ia<0?99:ia)-(ib<0?99:ib);return parseInt(a)-parseInt(b)||String(a).localeCompare(String(b),'fa');});
  $('#sizeFilters').innerHTML=sizes.map(s=>`<button class="f-size ${shopState.sizes.has(s)?'on':''}" data-fsize="${s}">${faNum(s)}</button>`).join('');
}
function filteredProducts(){
  let list=PRODUCTS.filter(p=>{
    if(shopState.cat!=='all'&&p.cat!==shopState.cat)return false;
    if(shopState.saleOnly&&!p.old)return false;
    if(shopState.onlySale&&!p.old)return false;
    if(shopState.subs.size&&!shopState.subs.has(p.sub))return false;
    if(shopState.sizes.size&&![...shopState.sizes].some(s=>s in p.sizes))return false;
    if(p.price>shopState.maxPrice)return false;
    if(shopState.onlyStock&&totalStock(p)===0)return false;
    if(shopState.query&&!p.name.includes(shopState.query)&&!p.sub.includes(shopState.query))return false;
    return true;
  });
  const by={pop:(a,b)=>b.pop-a.pop,new:(a,b)=>(b.isNew-a.isNew)||b.pop-a.pop,cheap:(a,b)=>a.price-b.price,exp:(a,b)=>b.price-a.price,off:(a,b)=>discPct(b)-discPct(a)};
  return list.sort(by[shopState.sort]||by.pop);
}
function renderShop(){
  $$('#catTabs .tab').forEach(t=>t.classList.toggle('on',t.dataset.tab===shopState.cat));
  const titles={all:'فروشگاه مانا',women:'پوشاک زنانه',men:'پوشاک مردانه',kids:'پوشاک بچگانه',acc:'کیف و اکسسوری'};
  $('#shopTitle').textContent=shopState.saleOnly?'حراج پاییزه مانا':(shopState.query?`نتایج جستجو برای «${shopState.query}»`:titles[shopState.cat]);
  const list=filteredProducts();
  $('#shopCount').textContent=`${faNum(list.length)} کالا`;
  renderGrid($('#shopGrid'),list);
  $('#shopEmpty').classList.toggle('hidden',list.length>0);
  $('#shopGrid').classList.toggle('hidden',list.length===0);
}
function goShop(opts={}){
  Object.assign(shopState,{subs:new Set(),sizes:new Set(),query:'',saleOnly:false},opts);
  renderFilterControls();renderShop();showView('shop');
}

/* ================= PRODUCT VIEW ================= */
function openProduct(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  const firstAvail=Object.entries(p.sizes).find(([,v])=>v>0);
  pdState={pid:id,size:firstAvail?firstAvail[0]:null,color:p.colors[0][0],qty:1,img:p.gallery[0]};
  $('#pdCrumb').textContent=p.name;
  renderProduct();
  const rel=PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==id).slice(0,4);
  renderGrid($('#relatedGrid'),rel.length?rel:PRODUCTS.slice(0,4));
  showView('product');
}
function renderProduct(){
  const p=PRODUCTS.find(x=>x.id===pdState.pid);
  const stock=pdState.size?p.sizes[pdState.size]:0;
  const off=discPct(p);
  $('#pdBox').innerHTML=`
   <div>
     <div class="main-img"><img id="pdMain" src="assets/img/${pdState.img}" alt="${p.name}"></div>
     <div class="thumbs">${p.gallery.map(g=>`<button data-thumb="${g}" class="${g===pdState.img?'on':''}"><img src="assets/img/${g}" alt=""></button>`).join('')}</div>
   </div>
   <div>
     <div class="sub">${CATS[p.cat]} · ${p.sub}</div>
     <h1>${p.name}</h1>
     <div class="rate" style="color:var(--amber);font-weight:700;margin-top:6px">★ ${faNum(p.rating)} <small style="color:var(--muted)">(${faNum(p.reviews)} دیدگاه) · کد کالا: ${faNum(1000+p.id)}</small></div>
     <p class="desc">${p.desc}</p>
     <div class="opt-label">رنگ: <span>${pdState.color}</span></div>
     <div class="swatches">${p.colors.map(c=>`<button class="swatch ${c[0]===pdState.color?'on':''}" data-pd-color="${c[0]}" style="background:${c[1]}" aria-label="${c[0]}"></button>`).join('')}</div>
     <div class="opt-label">سایز: <span>${pdState.size?'سایز '+faNum(pdState.size):'یک سایز را انتخاب کن'}</span></div>
     <div class="sizes">${Object.entries(p.sizes).map(([s,n])=>`<button class="size ${s===pdState.size?'on':''} ${n===0?'off':''}" data-pd-size="${s}" ${n===0?'disabled':''}>${faNum(s)}<span class="stk">${n>0?faNum(n)+' عدد':'ناموجود'}</span></button>`).join('')}</div>
     <div class="stock-note ${stock===0?'low':stock<=3?'low':'ok'}">${totalStock(p)===0?'✕ این کالا در حال حاضر ناموجود است':stock<=3?'⚠ تنها '+faNum(stock)+' عدد از این سایز باقی مانده — سفارشت را زودتر ثبت کن':'✓ موجود در انبار؛ آماده ارسال'}</div>
     <div class="buy" style="display:flex;gap:12px;align-items:center;margin-top:20px;flex-wrap:wrap">
       <div class="qty"><button data-pd-q="-1">−</button><b>${faNum(pdState.qty)}</b><button data-pd-q="1">+</button></div>
       <button class="btn btn-accent" id="pdAdd" ${totalStock(p)===0?'disabled':''}>🛍 افزودن به سبد خرید</button>
       <button class="btn btn-ghost" id="pdWish">${wishlist.has(p.id)?'♥ در علاقه‌مندی‌ها':'♡ افزودن به علاقه‌مندی‌ها'}</button>
       <div class="pricebox">${p.old?`<div class="old" style="color:var(--muted);text-decoration:line-through;font-size:13.5px">${faPriceT(p.old)} <span style="color:var(--red);font-weight:800;text-decoration:none">٪${faNum(off)}</span></div>`:''}<div class="now" style="font-size:24px;font-weight:900">${faPriceT(p.price)}</div></div>
     </div>
     <div class="pd services"><span>🚚 ارسال از انبار مانا</span><span>↩ ۷ روز ضمانت بازگشت</span><span>🛡 ضمانت اصالت کالا</span></div>
     <div class="specs"><table>${p.specs.map(s=>`<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join('')}</table></div>
   </div>`;
}

/* ================= CART ================= */
function addToCart(pid,size,color,qty){
  qty=qty||1;
  const p=PRODUCTS.find(x=>x.id===pid);
  if(!size){const f=Object.entries(p.sizes).find(([,v])=>v>0);size=f?f[0]:Object.keys(p.sizes)[0];}
  color=color||p.colors[0][0];
  const stock=p.sizes[size]||0;
  const ex=cart.find(c=>c.pid===pid&&c.size===size&&c.color===color);
  const cur=ex?ex.qty:0;
  if(cur+qty>stock){toast(`تنها ${faNum(stock)} عدد از این سایز موجود است`,'⚠');qty=stock-cur;if(qty<=0)return;}
  if(ex)ex.qty+=qty;else cart.push({pid,size,color,qty});
  updateBadges();renderCart();
  toast(`${p.name} به سبد اضافه شد`,'🛍');
}
function cartTotals(){
  let sub=0,off=0,count=0;
  cart.forEach(c=>{const p=PRODUCTS.find(x=>x.id===c.pid);sub+=p.price*c.qty;if(p.old)off+=(p.old-p.price)*c.qty;count+=c.qty;});
  return{sub,off,grand:sub,count};
}
function updateBadges(){
  const{count}=cartTotals();
  const cc=$('#cartCount');cc.textContent=faNum(count);cc.classList.toggle('hidden',count===0);
  const wc=$('#wishCount');wc.textContent=faNum(wishlist.size);wc.classList.toggle('hidden',wishlist.size===0);
}
function renderCart(){
  const box=$('#cartItems');
  if(!cart.length){box.innerHTML=`<div class="cart-empty"><div class="big">🧺</div>سبد خریدت خالی است.<br><button class="btn btn-dark" data-nav="shop" data-cat="all" style="margin-top:14px">شروع خرید ←</button></div>`;$('#cartFooter').style.display='none';}
  else{
    $('#cartFooter').style.display='';
    box.innerHTML=cart.map((c,i)=>{const p=PRODUCTS.find(x=>x.id===c.pid);return `<div class="citem">
      <img src="assets/img/${p.img}" alt="">
      <div class="inf"><h5>${p.name}</h5><div class="meta">سایز ${faNum(c.size)} · رنگ ${c.color}</div>
      <div class="row"><div class="qty"><button data-cq="${i}|-1">−</button><b>${faNum(c.qty)}</b><button data-cq="${i}|1">+</button></div><span class="pr">${faPriceT(p.price*c.qty)}</span></div>
      <button class="rm" data-rm="${i}">حذف از سبد ✕</button></div></div>`;}).join('');
  }
  const t=cartTotals();
  $('#ctSub').textContent=faPriceT(t.sub+t.off);
  $('#ctOff').textContent='− '+faPriceT(t.off);
  $('#ctGrand').textContent=faPriceT(t.grand);
  $('#freeNote').textContent=t.grand>=1000000?'🎉 ارسال سفارشت رایگان شد!':(t.grand>0?`برای ارسال رایگان، ${faPriceT(1000000-t.grand)} دیگر خرید کن`:'');
}
function openCart(){renderCart();$('#cartDrawer').classList.add('show');$('#overlay').classList.add('show');}
function closeAll(){$('#cartDrawer').classList.remove('show');$('#mmenu').classList.remove('show');$('#overlay').classList.remove('show');$('#gwModal').classList.remove('show');}

/* ================= VIEWS ================= */
function showView(v){
  ['home','shop','product','checkout','success'].forEach(x=>$('#view-'+x).classList.toggle('hidden',x!==v));
  closeAll();window.scrollTo({top:0,behavior:'instant'});
}

/* ================= CHECKOUT ================= */
let shipMethod='post';
function shipFee(){const t=cartTotals();if(shipMethod==='pickup')return 0;if(shipMethod==='tipax')return 89000;return t.grand>=1000000?0:49000;}
function renderSummary(){
  $('#sumItems').innerHTML=cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.pid);return `<div class="sum-item"><img src="assets/img/${p.img}"><div><div class="n">${p.name}</div><div class="m">سایز ${faNum(c.size)} · ${c.color} · ${faNum(c.qty)} عدد</div></div><span class="p">${faPriceT(p.price*c.qty)}</span></div>`;}).join('');
  const t=cartTotals(),fee=shipFee();
  $('#sumSub').textContent=faPriceT(t.sub+t.off);
  $('#sumOff').textContent='− '+faPriceT(t.off);
  $('#sumShip').textContent=fee===0?'رایگان':faPriceT(fee);
  $('#sumGrand').textContent=faPriceT(t.grand+fee);
  $('#feePost').textContent=t.grand>=1000000?'رایگان':'۴۹٬۰۰۰ تومان';
}
function goCheckout(){
  if(!cart.length){toast('سبد خریدت خالی است','🧺');return;}
  renderSummary();showView('checkout');
}
function validateCheckout(){
  let ok=true;
  const check=(id,fn)=>{const el=$(id),g=el.closest('.f-group');const good=fn(el.value.trim());g.classList.toggle('invalid',!good);if(!good)ok=false;};
  const digits=s=>s.replace(/[۰-۹]/g,d=>FA.indexOf(d));
  check('#fName',v=>v.length>=5&&v.includes(' '));
  check('#fMobile',v=>/^09\d{9}$/.test(digits(v)));
  check('#fProv',v=>v.length>0);
  check('#fCity',v=>v.length>=2);
  check('#fAddr',v=>v.length>=15);
  check('#fZip',v=>/^\d{10}$/.test(digits(v)));
  return ok;
}
function completeOrder(){
  // decrement in-session stock
  cart.forEach(c=>{const p=PRODUCTS.find(x=>x.id===c.pid);p.sizes[c.size]=Math.max(0,(p.sizes[c.size]||0)-c.qty);});
  const code='MANA-'+faNum(String(Math.floor(100000+Math.random()*899999)));
  $('#ordCode').textContent=code;
  $('#ordDate').textContent='تاریخ ثبت: جمعه ۳۰ آبان ۱۴۰۵';
  const t=cartTotals();
  $('#ordMsg').innerHTML=`مبلغ <b>${faPriceT(t.grand+shipFee())}</b> با موفقیت پرداخت شد. سفارش با روش ارسال انتخابی تو آماده‌سازی و ارسال می‌شود.`;
  cart=[];updateBadges();renderCart();renderHome();
  showView('success');
}
'use strict';
/* ================= EVENTS ================= */
document.addEventListener('click',e=>{
  const nav=e.target.closest('[data-nav]');
  if(nav){e.preventDefault();
    if(nav.dataset.nav==='home')showView('home');
    else if(nav.dataset.nav==='shop')goShop({cat:nav.dataset.cat||'all',saleOnly:nav.dataset.sale==='1'});
    closeAll();return;}
  const open=e.target.closest('[data-open]');
  if(open&&!e.target.closest('[data-wish]')&&!e.target.closest('[data-add]')){openProduct(+open.dataset.open);return;}
  const wish=e.target.closest('[data-wish]');
  if(wish){const id=+wish.dataset.wish;
    if(wishlist.has(id)){wishlist.delete(id);toast('از علاقه‌مندی‌ها حذف شد','♡');}
    else{wishlist.add(id);toast('به علاقه‌مندی‌ها اضافه شد','♥');}
    updateBadges();renderHome();renderShop();if(pdState.pid)renderProduct();return;}
  const add=e.target.closest('[data-add]');
  if(add){addToCart(+add.dataset.add);return;}
  /* spotlight */
  const sc=e.target.closest('[data-spot-color]');if(sc){spotState.color=sc.dataset.spotColor;renderSpotlight();return;}
  const ss=e.target.closest('[data-spot-size]');if(ss){spotState.size=ss.dataset.spotSize;spotState.qty=1;renderSpotlight();return;}
  const sq=e.target.closest('[data-spot-q]');if(sq){const p=PRODUCTS[0];const st=p.sizes[spotState.size]||0;spotState.qty=Math.min(Math.max(1,spotState.qty+ +sq.dataset.spotQ),Math.max(1,st));renderSpotlight();return;}
  if(e.target.id==='spotAdd'){addToCart(1,spotState.size,spotState.color,spotState.qty);openCart();return;}
  /* product view */
  const pc=e.target.closest('[data-pd-color]');if(pc){pdState.color=pc.dataset.pdColor;renderProduct();return;}
  const ps=e.target.closest('[data-pd-size]');if(ps){pdState.size=ps.dataset.pdSize;pdState.qty=1;renderProduct();return;}
  const pq=e.target.closest('[data-pd-q]');if(pq){const p=PRODUCTS.find(x=>x.id===pdState.pid);const st=p.sizes[pdState.size]||0;pdState.qty=Math.min(Math.max(1,pdState.qty+ +pq.dataset.pdQ),Math.max(1,st));renderProduct();return;}
  const th=e.target.closest('[data-thumb]');if(th){pdState.img=th.dataset.thumb;renderProduct();return;}
  if(e.target.id==='pdAdd'){addToCart(pdState.pid,pdState.size,pdState.color,pdState.qty);openCart();return;}
  if(e.target.id==='pdWish'){const id=pdState.pid;wishlist.has(id)?wishlist.delete(id):wishlist.add(id);updateBadges();renderProduct();toast(wishlist.has(id)?'به علاقه‌مندی‌ها اضافه شد':'از علاقه‌مندی‌ها حذف شد','♥');return;}
  /* cart */
  const cq=e.target.closest('[data-cq]');
  if(cq){const[i,d]=cq.dataset.cq.split('|');const c=cart[+i];const p=PRODUCTS.find(x=>x.id===c.pid);const st=p.sizes[c.size]||0;
    c.qty+=+d;if(c.qty>st){c.qty=st;toast(`تنها ${faNum(st)} عدد از این سایز موجود است`,'⚠');}
    if(c.qty<=0)cart.splice(+i,1);updateBadges();renderCart();return;}
  const rm=e.target.closest('[data-rm]');if(rm){cart.splice(+rm.dataset.rm,1);updateBadges();renderCart();toast('از سبد حذف شد','🗑');return;}
  /* filter size chips */
  const fs=e.target.closest('[data-fsize]');
  if(fs){const s=fs.dataset.fsize;shopState.sizes.has(s)?shopState.sizes.delete(s):shopState.sizes.add(s);renderFilterControls();renderShop();return;}
});

/* header + drawers */
$('#cartBtn').addEventListener('click',openCart);
$('#cartClose').addEventListener('click',closeAll);
$('#overlay').addEventListener('click',closeAll);
$('#burgerBtn').addEventListener('click',()=>{$('#mmenu').classList.add('show');$('#overlay').classList.add('show');});
$('#mmenuClose').addEventListener('click',closeAll);
$('#mmCart').addEventListener('click',e=>{e.preventDefault();openCart();});
$('#wishBtn').addEventListener('click',()=>{
  if(!wishlist.size){toast('هنوز چیزی به علاقه‌مندی‌ها اضافه نکرده‌ای','♡');return;}
  shopState.query='';goShop({cat:'all'});
  const list=PRODUCTS.filter(p=>wishlist.has(p.id));renderGrid($('#shopGrid'),list);
  $('#shopTitle').textContent='علاقه‌مندی‌های من';$('#shopCount').textContent=`${faNum(list.length)} کالا`;
});
$('#accountBtn').addEventListener('click',()=>toast('در نسخه نهایی، ورود با پیامک (OTP) فعال می‌شود','👤'));
$('#clubBtn').addEventListener('click',()=>{$('#newsInput').focus();toast('شماره موبایلت را در خبرنامه فوتر وارد کن تا عضو باشگاه شوی','✦');window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});});
$$('.foot-link').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();toast('این صفحه در نسخه نهایی فروشگاه فعال است','ℹ');}));

/* search */
$('#searchForm').addEventListener('submit',e=>{e.preventDefault();const q=$('#searchInput').value.trim();goShop({cat:'all',query:q});});

/* shop controls */
$('#catTabs').addEventListener('click',e=>{const t=e.target.closest('[data-tab]');if(!t)return;shopState.cat=t.dataset.tab;shopState.saleOnly=false;renderShop();});
$('#subFilters').addEventListener('change',e=>{const s=e.target.dataset.sub;if(!s)return;e.target.checked?shopState.subs.add(s):shopState.subs.delete(s);renderShop();});
$('#priceRange').addEventListener('input',e=>{shopState.maxPrice=+e.target.value;$('#priceVal').textContent=faPrice(shopState.maxPrice);renderShop();});
$('#onlyStock').addEventListener('change',e=>{shopState.onlyStock=e.target.checked;renderShop();});
$('#onlySale').addEventListener('change',e=>{shopState.onlySale=e.target.checked;renderShop();});
$('#sortSel').addEventListener('change',e=>{shopState.sort=e.target.value;renderShop();});
$('#clearFilters').addEventListener('click',()=>goShop({cat:shopState.cat}));

/* checkout */
$('#goCheckout').addEventListener('click',goCheckout);
$$('input[name=ship]').forEach(r=>r.addEventListener('change',()=>{shipMethod=r.value;renderSummary();}));
$('#payBtn').addEventListener('click',()=>{
  if(!validateCheckout()){toast('لطفاً خطاهای فرم را اصلاح کن','⚠');window.scrollTo({top:0,behavior:'smooth'});return;}
  $('#gwAmt').textContent=faPriceT(cartTotals().grand+shipFee());
  $('#gwModal').classList.add('show');
});
$('#gwCancel').addEventListener('click',()=>{$('#gwModal').classList.remove('show');toast('پرداخت لغو شد؛ سفارشت در سبد باقی ماند','ℹ');});
$('#gwCard').addEventListener('input',e=>{let v=e.target.value.replace(/\D/g,'').slice(0,16);e.target.value=v.replace(/(.{4})/g,'$1 ').trim();});
$('#gwExp').addEventListener('input',e=>{let v=e.target.value.replace(/\D/g,'').slice(0,4);e.target.value=v.length>2?v.slice(0,2)+' / '+v.slice(2):v;});
$('#gwCvv').addEventListener('input',e=>{e.target.value=e.target.value.replace(/\D/g,'').slice(0,4);});
$('#gwOtp').addEventListener('input',e=>{e.target.value=e.target.value.replace(/\D/g,'').slice(0,6);});
$('#gwPay').addEventListener('click',()=>{
  const card=$('#gwCard').value.replace(/\s/g,'');
  if(card.length<16){toast('شماره کارت را کامل وارد کن (۱۶ رقم نمایشی)','⚠');return;}
  if($('#gwCvv').value.length<3){toast('CVV2 را وارد کن','⚠');return;}
  const btn=$('#gwPay');btn.textContent='در حال اتصال به بانک…';btn.disabled=true;
  setTimeout(()=>{btn.textContent='پرداخت';btn.disabled=false;$('#gwModal').classList.remove('show');completeOrder();},1400);
});

/* newsletter */
$('#newsForm').addEventListener('submit',e=>{e.preventDefault();const v=$('#newsInput').value.trim();
  const isMail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), isMob=/^09\d{9}$/.test(v.replace(/[۰-۹]/g,d=>FA.indexOf(d)));
  if(isMail||isMob){toast('عضویتت در خبرنامه و باشگاه مانا ثبت شد 🎉','✉');$('#newsInput').value='';}
  else toast('شماره موبایل (۰۹…) یا ایمیل معتبر وارد کن','⚠');});

/* countdowns — festival ends at midnight; flash ends in ~9h from first visit */
function tick(){
  const now=new Date();
  const mid=new Date(now);mid.setHours(24,0,0,0);
  let d=Math.max(0,Math.floor((mid-now)/1000));
  const pad=n=>faNum(String(n).padStart(2,'0'));
  $('#cdH').textContent=pad(Math.floor(d/3600));$('#cdM').textContent=pad(Math.floor(d%3600/60));$('#cdS').textContent=pad(d%60);
  const fEnd=Date.now()+ (9*3600+24*60+30)*1000 - (Date.now()%1000);
  let f=Math.max(0,Math.floor((fEnd-Date.now())/1000))%(24*3600);
  $('#fH').textContent=pad(Math.floor(f/3600));$('#fM').textContent=pad(Math.floor(f%3600/60));$('#fS').textContent=pad(f%60);
}
setInterval(tick,1000);

/* ================= INIT ================= */
renderFilterControls();
renderHome();
renderCart();
updateBadges();
tick();
