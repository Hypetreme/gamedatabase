const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  baseUrl: "https://boiling-fjord-77485.herokuapp.com:8080/",
  outputDir: './dist/',
  assetsDir: 'staticfiles',

  chainWebpack: config => {

    config.optimization
      .splitChunks(false)

    config
      .plugin('BundleTracker')
      .use(BundleTracker, [{ filename: '../frontend/webpack-stats.json' }])

    config.resolve.alias
      .set('__STATIC__', 'static')

    config.devServer
      .public('https://boiling-fjord-77485.herokuapp.com:8080')
      .host('https://boiling-fjord-77485.herokuapp.com')
      .port(8080)
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .headers({ "Access-Control-Allow-Origin": ["\*"] })
  }
};