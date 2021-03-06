var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')

// add hot-reload related code to entry chunks
// Object.keys(baseConfig.entry).forEach(function (name) {
//   baseConfig.entry[name] = ['./build/dev-client'].concat(baseConfig.entry[name])
// })

module.exports = merge(baseConfig, {
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
})
