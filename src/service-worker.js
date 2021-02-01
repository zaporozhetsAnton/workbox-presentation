// In this file will be injected self.__WB_MANIFEST - an array of application assets eg scripts, images, html files, fonts etc.

// We can write here clean service worker using self.addEventListener or other self. methods
// or we can use workbox modules that provides convenient api for writing service workers
// or we can combine both

// precaching === app shell model
import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

// example of image requests caching
// import { registerRoute } from 'workbox-routing';
// import { CacheFirst } from 'workbox-strategies';
// import { CacheableResponsePlugin } from 'workbox-cacheable-response';
// import { ExpirationPlugin } from 'workbox-expiration';
//
// const cacheName = 'images';
// const matchCallback = ({ request }) => request.destination === 'image';
// const maxAgeSeconds = 30 * 24 * 60 * 60; // 30 days
// const maxEntries = 60;
//
// registerRoute(
//   matchCallback,
//   new CacheFirst({
//     cacheName,
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//       new ExpirationPlugin({
//         maxEntries,
//         maxAgeSeconds,
//       }),
//     ],
//   }),
// );

// example of workbox recipe, it does the same as upper image requests caching example
// import { imageCache } from 'workbox-recipes';
//
// imageCache();

// workbox strategies https://developers.google.com/web/tools/workbox/modules/workbox-strategies
// workbox recipes https://developers.google.com/web/tools/workbox/modules/workbox-recipes
// workbox documentation https://developers.google.com/web/tools/workbox/guides/get-started
