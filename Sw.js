self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // 네트워크 우선 연결 (오프라인 통신 에러 방지)
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
