// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page-v1";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = [
  //html 
  "/offline.html",
  //css
  "/css/style.css",
  //cdns
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css",
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      // Add offline fallback page to cache
      await cache.addAll(offlineFallbackPage);
      
      // Enable navigation preload if supported
      if (workbox.navigationPreload.isSupported()) {
        workbox.navigationPreload.enable();
      }

      self.skipWaiting(); // Forces activation immediately
    })()
  );
});

// Activate event - delete old caches (previous versions)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE) // Delete old caches
          .map((cacheName) => caches.delete(cacheName))
      );

      await clients.claim(); // Immediately take control of pages
    })()
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // Try to fetch from network first
          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
          // If network fails, return cached fallback page
          const cache = await caches.open(CACHE);
          const cachedResp = await cache.match("/offline.html");
          return cachedResp || fetch(event.request); // Fallback to network if cache is also missing
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