/*
 * action 类型
 */

export const ADD_USER_INFO = 'ADD_USER_INFO';
export const DELETE_USER_INFO = 'DELETE_USER_INFO';
export const TOGGLE_LOGIN_MODE = 'TOGGLE_LOGIN_MODE';

/*
 * action 创建函数
 */

const addUserInfo = item => {
  return {
    type: ADD_USER_INFO,
    item
  }
}

const deleteUserInfo = item => {
  return {
    type: DELETE_USER_INFO,
    item
  }
}


export const getUserInfo = (params) => {
  return (dispatch) => {
    const datas = {

    }
    dispatch(addUserInfo({userName: 'test name', userID: '122112'}))
    console.log(dispatch)
  }
}