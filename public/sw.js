self.addEventListener("install", (event) => {
  self.skipWaiting();
  console.log("Service Worker Installed");
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
  console.log("Service Worker Activated");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
