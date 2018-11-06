var CACHE_STATIC_NAME = 'static-v15';
var CACHE_DYNAMIC_NAME = 'dynamic-v2';
var STATIC_FILES = [
  '/',
    '/index.html',
    '/js/app.js',
    '/js/promisse.js',
    '/js/fetch.js',
    '/js/my_script.js',
    '/css/styles.css',
    '/imagens/logo.png',
    '/imagens/star0.png',
    '/imagens/star1.png',
];

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function (cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll(STATIC_FILES);
      })
  )
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log('[Service Worker] Removing old cache.', key);
            return caches.delete(key);
          }
        }));
      })
  );
  return self.clients.claim();
});

function isInArray(string, array) {
  var cachePath;
  if (string.indexOf(self.origin) === 0) { // solicitar domínio de destino no qual exibimos a página (ou seja, NÃO é um CDN)
    console.log('matched ', string);
    cachePath = string.substring(self.origin.length); // tome a parte do URL APÓS o domínio (por exemplo, depois do localhost: 8080)
  } else {
    cachePath = string; // armazenar o pedido completo (para CDNs)
  }
  return array.indexOf(cachePath) > -1;
}

self.addEventListener('fetch', function (event) {

  var url = 'https://httpbin.org/get';
  if (event.request.url.indexOf(url) > -1) {
    event.respondWith(
      caches.open(CACHE_DYNAMIC_NAME)
        .then(function (cache) {
          return fetch(event.request)
            .then(function (res) {
              // trimCache(CACHE_DYNAMIC_NAME, 3);
              cache.put(event.request, res.clone());
              return res;
            });
        })
    );
  } else if (isInArray(event.request.url, STATIC_FILES)) {
    event.respondWith(
      caches.match(event.request)
    );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          if (response) {
            return response;
          } else {
            return fetch(event.request)
              .then(function (res) {
                return caches.open(CACHE_DYNAMIC_NAME)
                  .then(function (cache) {
                    // trimCache(CACHE_DYNAMIC_NAME, 3);
                    cache.put(event.request.url, res.clone());
                    return res;
                  })
              })
              .catch(function (err) {
                return caches.open(CACHE_STATIC_NAME)
                  .then(function (cache) {
                    if (event.request.headers.get('accept').includes('text/html')) {
                      return cache.match('/offline.html');
                    }
                  });
              });
          }
        })
    );
  }
});

//Trecho referente ao push notification
self.addEventListener('notificationclick', function(event) {
  var notification = event.notification;
  var action = event.action;

  console.log(notification);

  if (action === 'confirm') {
    console.log('Ok!');
    notification.close();
  } else {
    console.log('Cancelar!');
    notification.close();
  }
});

self.addEventListener('notificationclose', function(event) {
  console.log('A notificação foi fechada!', event);
});

//
self.addEventListener('push', function(event) {
  console.log('Notificação Push Recebida!', event);

  var data = {title: 'Novidade!', content: 'Nova Chácara cadastrada!', openUrl: '/'};

  if (event.data) {
    data = JSON.parse(event.data.text());
  }

  var options = {
    body: data.content,
    icon: '/imagens/icons/app-icon-96x96.png',
    badge: '/imagens/icons/app-icon-96x96.png',
    data: {
      url: data.openUrl
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});