import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import rootReducers from './reducers'

export default (initialState) => {
    const middleware = [thunkMiddleware, routerMiddleware(browserHistory)]

    const store = createStore(rootReducers, initialState, applyMiddleware(...middleware))

    return store
}