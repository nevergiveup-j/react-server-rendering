import express from 'express'
import path from 'path'

import React from 'react'
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'

import routes from '../src/routes'
import webpackConfig from '../build/webpack.base.config'

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const compiler = webpack(webpackConfig)
const PORT = process.env.PORT || 9000
const src = path.resolve('src')

const renderPage = (html, preloadedState = {}) => {
  return `
    <!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>React SSR</title>
    </head>

    <body>
        <div id="root">
          ${html}
        </div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
    </body>

    </html>
  `
}

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  lazy: false,
  noInfo: true,
  quiet: false,
  hot: true,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true,
  }
}))

app.use(webpackHotMiddleware(compiler));

app.use((req, res) => {
    match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
        if(err) {
            res.status(500).end(`Internal Server Error ${err}`);
        } else if (redirectLocation) {
            res.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            const html = renderToString(<RouterContext {...renderProps} />)
            res.end(renderPage(html))
        } else {
            res.status(404).end('Not found');
        }
    })
})

app.listen(PORT, () => {
    console.log({ PORT, env: process.env.NODE_ENV, pid: process.pid }, 'Server is listening');
})
