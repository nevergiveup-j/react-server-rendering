import React from 'react'
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'

import routes from '../src/server'

const renderPage = (html, preloadedState = {}) => {
  return `
    <!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>React SSR</title>
        <link rel="stylesheet" type="text/css" href="/static/server.css">
    </head>

    <body>
        <div id="App">
          ${html}
        </div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/client.js"></script>
    </body>

    </html>
  `
}


export function renderServer(req, res) {
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
}