# workbox-presentation

Presentation of basic workbox functionality.

Two examples:
 - workboxPlugin.GenerateSW - generates service worker that does precaching of dist folder and includes runtime caching logic for image requests. Example written in webpack.prod.config.js file.
 - workboxPlugin.InjectManifest - generate service worker by template, also does precaching of dist folder and includes runtime caching logic for image requests. Example written in webpack.prod.config.j and src/service-worker.js files.

You should use one of these examples, workboxPlugin.GenerateSW for something simple and workboxPlugin.InjectManifest for complex service workers.

webpack/typescript/eslint configuration copied from [zaporozhetsAnton/react-webpack-typescript](https://github.com/zaporozhetsAnton/react-webpack-typescript)
