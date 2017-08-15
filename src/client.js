import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './routes/index'

const rootEl = document.getElementById('App')

const render = () => {
  ReactDOM.render(
    (
      <Router history={browserHistory} routes={routes} />
    ),
    rootEl
  );
}

render()
