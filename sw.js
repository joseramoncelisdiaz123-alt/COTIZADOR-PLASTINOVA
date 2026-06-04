// Este archivo es OBLIGATORIO para que Android deje instalar la App
self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});