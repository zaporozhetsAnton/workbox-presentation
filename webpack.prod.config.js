const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, 'public') }],
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
    // more information about momentjs optimization could be found here https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new workboxPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, 'src/service-worker.js'),
      swDest: 'service-worker.js',
      // exclude: [/\.(?:png|jpg|jpeg|svg)$/], // example of excluding from injected manifest
    }),
    // new workboxPlugin.GenerateSW({
    //   swDest: 'service-worker.js',
    //   // exclude: [/\.(?:png|jpg|jpeg|svg)$/], // example of excluding from injected manifest
    //   runtimeCaching: [
    //     {
    //       urlPattern: ({ request }) => request.destination === 'image',
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'images',
    //         expiration: {
    //           maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
    //           maxEntries: 60,
    //         },
    //       },
    //     },
    //   ],
    // }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // When app gets bigger check which defaultVendors configuration is better
        // defaultVendors: {
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/]/,
        //   name(module) {
        //     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
        //     return `npm.${packageName.replace('@', '')}`;
        //   },
        // },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all',
        },
      },
    },
  },
});
