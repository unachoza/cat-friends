import { combineReducers } from 'redux';
import { searchCats, requestCats } from 'redux/reducers/reducers';

const rootReducer = combineReducers({ searchCats, requestCats });

export default rootReducer;
