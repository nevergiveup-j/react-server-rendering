import { combineReducers } from 'redux'
import { TOGGLE_LOGIN_MODE, ADD_USER_INFO, DELETE_USER_INFO } from '../actions/users'

const isLogin = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_MODE:
      return !state
    default:
      return state
  }
}

const userInfo = (state = ADD_USER_INFO, action) => {
  switch (action.type) {
    case ADD_USER_INFO:
      return action.item
    case DELETE_USER_INFO:
      return state
    default:
      return {}
  }
}

const userReducer = combineReducers({
  isLogin,
  userInfo
})

export default userReducer
