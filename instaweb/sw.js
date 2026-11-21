/* InstaSite service worker — cache-first app shell + assets */
const CACHE = "instasite-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/css/style.css",
  "./assets/js/app.js",
  "./assets/fonts/Vazirmatn-Regular.ttf",
  "./assets/fonts/Vazirmatn-Medium.ttf",
  "./assets/fonts/Vazirmatn-SemiBold.ttf",
  "./assets/fonts/Vazirmatn-Bold.ttf",
  "./assets/fonts/Vazirmatn-ExtraBold.ttf",
  "./assets/img/logo.jpg",
  "./assets/img/hero.jpg",
  "./assets/img/filler.jpg",
  "./assets/img/gel.jpg",
  "./assets/img/botox.jpg",
  "./assets/img/cheek.jpg",
  "./assets/img/profhilo.jpg",
  "./assets/img/mesogel.jpg",
  "./assets/img/jalupro.jpg",
  "./assets/img/consult.jpg",
  "./assets/img/gallery-interior.jpg",
  "./assets/img/gallery-lounge.jpg",
  "./assets/img/gallery-portrait.jpg",
  "./assets/img/gallery-reception.jpg",
  "./assets/img/gallery-room.jpg",
  "./assets/img/gallery-treatment.jpg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
