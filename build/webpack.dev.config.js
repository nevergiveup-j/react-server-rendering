  var path = require('path');
  var webpack = require('webpack');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  var HtmlWebpackPlugin = require('html-webpack-plugin');
  var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
  var config = require('./webpack.base.config.js');

  var rootPaths = path.resolve('.');
  var srcPaths = path.resolve('.', 'src');

  // config.entry = [
  //   'webpack-hot-middleware/client',
  //   config.entry
  // ]

  config.output.publicPath = '/';

  config.devtool = 'eval-source-map';

  config.plugins.push(
  //   new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin('[name].css'),
    new BrowserSyncPlugin(
      {
        host: '127.0.0.1',
        port: 9000,
        proxy: 'http://127.0.0.1:9001/',
        logConnections: false,
        notify: false
      },
      {
        reload: true
      }
    ),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: srcPaths + '/views/index.html',
      chunks: ['app'],
      inject: 'body'
    })
  )



module.exports = config;
