import express from 'express'
import path from 'path'

const history = require('connect-history-api-fallback');
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../build/webpack.dev.config')

const app = express()
const compiler = webpack(webpackConfig)
const src = path.resolve('src')
const PORT = process.env.PORT || 9001

app.use(history());

app.use('/static', express.static(src + '/static'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  lazy: false,
  noInfo: true,
  quiet: false,
  hot: true,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true
  }
}))

app.use(webpackHotMiddleware(compiler));

app.listen(PORT, () => {
    console.log(`Listening at http://127.0.0.1:${PORT}`);
})
