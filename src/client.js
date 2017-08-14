import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
// import ReactHot from 'react-hot-loader'

import routes from './routes/index'

const rootEl = document.getElementById('App')

// console.log(ReactHot)

const render = () => {
  ReactDOM.render(
    (
      // <AppContainer>
        <Router history={browserHistory} routes={routes} />
      // </AppContainer>
    ),
    rootEl
  );
}

render()
