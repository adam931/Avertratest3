import {
  SAVE_CREDENTIALS,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CLOSE_MODAL,
  CLEAR_AUTH_DATA,
} from '../types';

const INITIAL_STATE = {
  user: {
    username: '',
    password: '',
    token: null,
  },
  loading: false,
  loginError: false,
  loginSuccess: false,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SAVE_CREDENTIALS: {
      return {
        ...state,
        user: {...state.user, [payload.code]: payload.value},
      };
    }

    case LOGIN_USER: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        user: {...state.user, token: payload},
        loginSuccess: true,
        loading: false,
        loginError: false,
      };
    }

    case LOGIN_USER_FAILURE: {
      return {
        ...state,
        loginError: true,
        loading: false,
      };
    }

    case CLOSE_MODAL: {
      return {...state, loginError: false};
    }

    case CLEAR_AUTH_DATA: {
      return {
        ...state,
        user: {...state.user, username: '', password: ''},
        loginSuccess: false,
      };
    }
    default:
      return state;
  }
};
