const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  publicPath: "https://boiling-fjord-77485.herokuapp.com:8080/",
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
      .host('http://localhost')
      .port(8080)
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(true)
      .headers({ "Access-Control-Allow-Origin": ["\*"] })
  }
};