const CACHE_NAME = 'plastinova-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logo.jpeg'
];

// Instalar el Service Worker y guardar en caché los archivos base
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar las peticiones para que funcione sin conexión
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
