

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPages = [
  '/',
  '/index.html',
  '/html/au-exp.html',
  '/html/iu-exp.html',
  '/html/pu-exp.html',
  '/html/classification.html',
  '/css/style.css',
  '/scripts/accor.js',
  '/scripts/app-au.js',
  '/scripts/app-iu.js',
  '/scripts/app-pu.js',
  '/scripts/nav.js',
  '/scripts/new-decision.js',
  '/scripts/phenotype.js',
  '/scripts/phenotypeCriteria.js',
  '/scripts/questions-pu.js',
  '/scripts/questions.js'

]

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
    event.waitUntil(
      caches.open(CACHE)
        .then((cache) => cache.addAll(offlineFallbackPages))
    );
  });
  
  if (workbox.navigationPreload.isSupported()) {
    workbox.navigationPreload.enable();
  }

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
          const cachedResp = await cache.match(offlineFallbackPages);
          return cachedResp;
        }
      })());
    }
  });