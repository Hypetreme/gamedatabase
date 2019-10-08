const BundleTracker = require("webpack-bundle-tracker");
const path = require('path');
module.exports = {
  publicPath: "/",
  // assetsRoot: path.resolve(__dirname, '../dist/'),
  // assetsSubDirectory: '',
  // assetsPublicPath: '/static/',
  // devServer: {
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: 'http://localhost:8080/',
  // },
  assetsDir: 'static',

  chainWebpack: config => {

    config.optimization
      .splitChunks(false)

    config
      .plugin('BundleTracker')
      .use(BundleTracker, [{ filename: '../frontend/webpack-stats.json' }])

    config.resolve.alias
      .set('__STATIC__', 'static')

    config.devServer
      .public('http://localhost:8080')
      .host('localhost')
      .port(8080)
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .headers({ "Access-Control-Allow-Origin": ["\*"] })
  }
};