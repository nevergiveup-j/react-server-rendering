import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import routes from './routes/index'
import createStore from './redux/createStore'

const rootEl = document.getElementById('App')
const initialState = window.__INITIAL_STATE__

const render = () => {

  const store = createStore(initialState)

  ReactDOM.render(
    (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    ),
    rootEl
  );
}

render()
