// sw.js

// Import the Workbox library
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// Precache static assets
workbox.precaching.precacheAndRoute([
  { url: '/', revision: '1' },
  { url: '/index.html', revision: '1' },
  // Add more static assets to be precached
]);

// Define caching strategies for specific routes
workbox.routing.registerRoute(
  new RegExp('/api/'),
  new workbox.strategies.NetworkFirst()
);

// Handle offline fallback
workbox.routing.setCatchHandler(({ event }) => {
  switch (event.request.destination) {
    case 'document':
      return caches.match('/index.html');
    default:
      return Response.error();
  }
});
