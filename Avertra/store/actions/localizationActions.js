import {
    CHANGE_LANGUAGE
  } from '../types';
  
export const changeLanguageAction = (value) => dispatch => {
    dispatch({
        type:CHANGE_LANGUAGE,
        payload:value
    })
}