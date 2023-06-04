const CACHE_NAME = "meu_cache";

const URLS_TO_CACHE = [
  "/",
  "index.html",
  "app/app.js",
  "app/model/consumo_agua.js",
  "app/store/store.js",
  "images/agua-128.png",
  "images/agua-512.png",
  "node_modules/bootstrap/dist/css/bootstrap.css",
  "node_modules/bootstrap/dist/js/bootstrap.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cacheResponse) => {
        return cacheResponse || fetch(event.request);
      });
    })
  );
});