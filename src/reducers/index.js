import { combineReducers } from 'redux';
import ColorsReducer from './ColorsReducer';
import GradientsReducer from './GradientsReducer';

export default combineReducers({
  colors: ColorsReducer,
  gradients: GradientsReducer
});
