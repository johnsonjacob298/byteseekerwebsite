const CACHE_NAME = 'byteseeker-cache-v1';
    const urlsToCache = [
      '/inject.js',
      '/style.css',
      '/script.js',
      '/index.html'
      '/aboutme.html'
      '/creations.html'
      '/quotes.html'
      '/shop.html'
      '/testprod.html'
      '/header.html'
      '/footer.html'
      // Add other assets to cache
    ];

    self.addEventListener('install', (event) => {
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then((cache) => {
            return cache.addAll(urlsToCache);
          })
      );
    });

    self.addEventListener('fetch', (event) => {
      event.respondWith(
        caches.match(event.request)
          .then((response) => {
            return response || fetch(event.request);
          })
      );
    });
