// Minimal service worker so the browser recognizes this as a real,
// installable app (this is what removes the small browser badge from
// the home screen icon on Android). It doesn't cache anything or
// change how the app works offline.
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
