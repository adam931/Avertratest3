import { CHANGE_LANGUAGE } from '../types'

const INITIAL_STATE = {
  language: {},
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case CHANGE_LANGUAGE: {
      return {...state, language: payload};
    }

    default:
      return state;
  }
};
