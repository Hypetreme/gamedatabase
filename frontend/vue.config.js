const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  publicPath: 'http://localhost:8080/',
  outputDir: './dist/',

  chainWebpack: config => {
    config.resolve.alias.set('@', 'src');

    config.optimization.splitChunks(false);

    config
      .plugin('BundleTracker')
      .use(BundleTracker, [{ filename: '../frontend/webpack-stats.json' }]);

    config.devServer
      .public('http://localhost:8080')
      .host('localhost')
      .port(8080)
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .headers({ 'Access-Control-Allow-Origin': ['*'] });
  }
};
