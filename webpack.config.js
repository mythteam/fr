var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")

module.exports = {
  entry: {
    build: './src/main.js',
    profile: './src/profile.js',
    users: './src/users.js',
    vendor: ['vue', 'vue-router']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/vue/dist/',
    filename: '[name].js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
    fallback: [path.join(__dirname, '/node_modules')]
  },
  resolve: {
    //查找module的话从这里开始查找
    // root: 'src', //绝对路径
    // require时省略的扩展名，如：require('module') 不需要module.js
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '/node_modules')],
    //别名
    alias: {
      filter: path.join(__dirname, 'src/filters'),
      'vux': path.join(__dirname, '/src/components/vux/src/components') //alias for vux
    }
  },
  plugins: [
    //new webpack.ProvidePlugin({
    //  vue: 'vue'
    //}),
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    // new ExtractTextPlugin('all.css', {
    //   allChunks: true,
    //   disable: false
    // }),
    new webpack.optimize.DedupePlugin()
  ],
  //externals: {
  //  vue: 'vue'
  //},
  vue: {
    loaders: {
      //css: ExtractTextPlugin.extract("css"),
      //sass: ExtractTextPlugin.extract("css"),
      js: 'babel'
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        //loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!cssnext-loader")
        loader: 'style-loader!css-loader?sourceMap!cssnext-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map'
  // http://vuejs.github.io/vue-loader/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
