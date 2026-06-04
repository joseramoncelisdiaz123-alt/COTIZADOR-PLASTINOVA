const CACHE_NAME = 'plastinova-v2';
const urlsToCache = [
  '/COTIZADOR-PLASTINOVA/',
  '/COTIZADOR-PLASTINOVA/index.html',
  '/COTIZADOR-PLASTINOVA/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Usamos catch para que si un archivo falla, no se muera toda la app
        return cache.addAll(urlsToCache).catch(err => console.log('Error en caché', err));
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
