import React from 'react'
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import routes from '../dist/server'
import createStore from '../src/redux/createStore'

const renderPage = (html, preloadedState = {}) => {
  return `
    <!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>React SSR</title>
        <link rel="stylesheet" type="text/css" href="/server.css">
    </head>

    <body>
        <div id="App">
          ${html}
        </div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/client.js"></script>
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
            const store = createStore()

            const html = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            )
          res.end(renderPage(html))
      } else {
          res.status(404).end('Not found');
      }
  })
}