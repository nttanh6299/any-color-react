import { combineReducers } from 'redux';
import ColorsReducer from './ColorsReducer';

export default combineReducers({ colors: ColorsReducer });
