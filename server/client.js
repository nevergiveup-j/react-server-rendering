import express from 'express'
import path from 'path'

const history = require('connect-history-api-fallback');


const app = express()
const PORT = process.env.PORT || 9001
const src = path.resolve('src')

app.use(history());

(function() {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfig = require('../build/webpack.base.config')
  const compiler = webpack(webpackConfig)
  //
  console.log(webpack)
  console.log(compiler)


  // app.use(webpackDevMiddleware(compiler, {
  //   publicPath: webpackConfig.output.publicPath,
  //   // lazy: false,
  //   noInfo: true
  //   // quiet: false,
  //   // hot: true,
  //   // stats: {
  //   //   chunks: false,
  //   //   chunkModules: false,
  //   //   colors: true,
  //   // }
  // }))

  // app.use(webpackHotMiddleware(compiler));
})();

app.listen(PORT, () => {
    console.log(`Listening at http://127.0.0.1:${PORT}`);
})
