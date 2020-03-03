import {
  SAVE_CREDENTIALS,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CLOSE_MODAL,
  CLEAR_AUTH_DATA
} from '../types';
import {loginUser} from '../services/authServices';

export const handleCredentialsChange = (code, value) => dispatch =>
  dispatch({
    type: SAVE_CREDENTIALS,
    payload: {code, value},
  });

export const loginUserAction = (user, pass) => dispatch => {
  dispatch({
    type: LOGIN_USER,
  });
  loginUser(user, pass)
    .then(res => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: e,
      });
    });
};

export const closeModalAction = () => dispatch => {
  dispatch({
    type:CLOSE_MODAL,
  })
}

export const clearAuthInfo = () => dispatch => {
  dispatch({
    type:CLEAR_AUTH_DATA
  })
}