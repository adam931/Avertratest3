import {combineReducers} from 'redux';
import authReducer from './authReducer'
import todosReducer from './todosReducer'
import localization from './localizationReducer'

export default combineReducers({
    auth:authReducer,
    todos:todosReducer,
    localization:localization

});
