import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import { penderReducer } from 'redux-pender';

//리듀서들을 합치기 위함 
export default combineReducers({
    auth,
    pender : penderReducer,
    user
});