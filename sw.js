const CACHE_VERSION = 'roster-hub-v1'
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', event => {
  const req = event.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return // let cross-origin (Firebase, fonts, CDN) hit the network normally

  // Navigations: network-first so users get the latest app, fall back to cached shell offline
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => {
          caches.open(CACHE_VERSION).then(cache => cache.put('./index.html', res.clone()))
          return res
        })
        .catch(() => caches.match('./index.html'))
    )
    return
  }

  // Static same-origin assets: cache-first, refresh in background
  event.respondWith(
    caches.match(req).then(cached => {
      const fetchPromise = fetch(req).then(res => {
        if (res && res.ok) caches.open(CACHE_VERSION).then(cache => cache.put(req, res.clone()))
        return res
      }).catch(() => cached)
      return cached || fetchPromise
    })
  )
})

self.addEventListener('notificationclick', event => {
  event.notification.close()
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
      for (const client of clients) { if ('focus' in client) return client.focus() }
      if (self.clients.openWindow) return self.clients.openWindow('./index.html')
    })
  )
})
