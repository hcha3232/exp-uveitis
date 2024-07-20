// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page-v1";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = [
  "/offline.html",
  "/css/style.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css",
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
];

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
    event.waitUntil(
      caches.open(CACHE)
        .then((cache) => cache.addAll(offlineFallbackPage))
    );

    if (workbox.navigationPreload.isSupported()) {
      workbox.navigationPreload.enable();
    }
  });

  self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
      event.respondWith((async () => {
        try {
          const preloadResp = await event.preloadResponse;
  
          if (preloadResp) {
            return preloadResp;
          }
  
          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
  
          const cache = await caches.open(CACHE);
          const cachedResp = await cache.match("/offline.html");
          return cachedResp;
        }
        })());
      } else {
        event.respondWith((async () => {
          const cache = await caches.open(CACHE);
          const cachedResp = await cache.match(event.request);
          if (event.request.url.includes('gtm.js')) {
            // Always fetch the latest GTM script
            return fetch(event.request);
          }
          return cachedResp || fetch(event.request);
        })());
    }
  });