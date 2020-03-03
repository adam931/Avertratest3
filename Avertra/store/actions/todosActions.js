import {
  FETCHING_USERS,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAILURE,
} from '../types';
import { fetchTodosApi } from '../services/todosServices'


  export const fetchTodosApiAction = () => dispatch => {
    dispatch({
      type: FETCHING_USERS,
    });
    fetchTodosApi()
      .then(res => {
        dispatch({
          type: FETCHING_USERS_SUCCESS,
          payload: res,
        });
      })
      .catch(e => {
        dispatch({
          type: FETCHING_USERS_FAILURE,
          payload: e,
        });
      });
  };
