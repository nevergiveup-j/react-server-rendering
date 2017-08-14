var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var rootPaths = path.resolve('.');
var srcPaths = path.resolve('.', 'src');

var config = {
  entry: {
    app: srcPaths + '/client'
  },
  output: {
    path: rootPaths + '/dist',
    publicPath: '/static',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    // 后缀名
    extensions: ['', '.js', '.jsx', '.scss'],
    // 别名
    alias: {
      'layouts': srcPaths + '/layouts',
      'utils': srcPaths + '/utils',
      'config': srcPaths + '/config',
      'pages': srcPaths + '/pages',
      'component': srcPaths + '/component',
      'static': srcPaths + '/static'
    },
  },
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.js|jsx$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url?limit=10000&name=images/[name].[hash:6].[ext]'
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)$/,
        loader: 'file?&name=fonts/[name].[hash:6].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'style?module&localIdentName=[name]-[local]-[hash:6]&-url?sourceMap!css?name=css/[name].[hash:6].[ext]&sourceMap')
      }
    ]
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin()
  ]
}

module.exports = config;
