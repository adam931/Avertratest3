import {
  FETCHING_USERS,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAILURE,
} from '../types';

const INITIAL_STATE = {
  users: [],
  loading:false,
  fetchingUsers: false,
  fetchingError: false,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case FETCHING_USERS:
      return {...state, loading: true};

    case FETCHING_USERS_SUCCESS:
      return {...state, users: payload, fetchingError: false, loading: false};

    case FETCHING_USERS_FAILURE:
      return {...state, fetchingError: true, loading: false};

    default:
      return state;
  }
};
