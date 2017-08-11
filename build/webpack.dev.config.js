  var path = require('path');
  var webpack = require('webpack');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  // var HtmlWebpackPlugin = require('html-webpack-plugin');
  var config = require('./webpack.base.config.js');

  var rootPaths = path.resolve('.');
  var srcPaths = path.resolve('.', 'src');

  config.entry = [
    'eventsource-polyfill', //兼容ie
    'webpack-hot-middleware/client',
    config.entry
  ]

  config.output.publicPath = '/';

  config.devtool = 'eval-source-map';

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css')
  )

module.exports = config;
