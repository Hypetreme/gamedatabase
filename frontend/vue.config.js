const BundleTracker = require("webpack-bundle-tracker");
const path = require('path');
module.exports = {
  publicPath: "https://boiling-fjord-77485.herokuapp.com/",
  // publicPath: "http://localhost:8080",
  outputDir: './dist/',
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