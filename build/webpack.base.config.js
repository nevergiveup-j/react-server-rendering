var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  // resolve: {
  //   // 后缀名
  //   extensions: ['.js', '.jsx', '.scss'],
  //   // 别名
  //   alias: {
  //     'layouts': srcPaths + '/layouts',
  //     'utils': srcPaths + '/utils',
  //     'config': srcPaths + '/config',
  //     'pages': srcPaths + '/pages',
  //     'component': srcPaths + '/component',
  //     'static': srcPaths + '/static'
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
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
  //   new webpack.optimize.OccurenceOrderPlugin()
  ]
}



module.exports = config;
