import express from 'express'
import path from 'path'

import React from 'react'
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'

import routes from '../src/routes'

const app = express()
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
        <div id="App">
          ${html}
        </div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
    </body>

    </html>
  `
}

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
    console.log(`Listening at http://127.0.0.1:${PORT}`);
})
