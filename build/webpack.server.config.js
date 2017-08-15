  var path = require('path');
  var webpack = require('webpack');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  var config = require('./webpack.base.config.js');

  var rootPaths = path.resolve('.');
  var srcPaths = path.resolve('.', 'src');


  var config = {
    context: srcPaths,
    entry: {
      server: srcPaths + '/server'
    },
    output: {
      path: rootPaths + '/dist',
      publicPath: '/',
      filename: '[name].js',
      libraryTarget: 'commonjs2',
      chunkFilename: '[name].chunk.js'
    },
    // devtool: 'source-map',
    target: 'node',
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              compact: true
            }
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
      new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
  }

module.exports = config;
