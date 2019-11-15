importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.core.skipWaiting();
workbox.core.clientsClaim();

if (workbox) {

    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.precaching.precacheAndRoute([
        {
            "url": "/",
            "revision": "1"
        }
    ]);

    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'static-resources',
        }),
    );

    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg)$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'images',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                }),
            ],
        }),
    );

    workbox.routing.registerRoute(
        new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
        new workbox.strategies.CacheFirst({
            cacheName: 'googleapis',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 30,
                }),
            ],
        }),
    );
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.googleAnalytics.initialize();