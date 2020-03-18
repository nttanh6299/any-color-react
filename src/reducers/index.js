import { combineReducers } from 'redux';
import ColorsReducer from './ColorsReducer';
import GradientsReducer from './GradientsReducer';
import SettingsReducer from './SettingsReducer';

export default combineReducers({
  colors: ColorsReducer,
  gradients: GradientsReducer,
  settings: SettingsReducer
});
