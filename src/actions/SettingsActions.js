import { TOGGLE_PREFIX, TOGGLE_FALLBACK } from '../constants/ActionTypes';
import { settingsSelector } from '../selectors/SettingsSelectors';
import { setLocalStorage } from '../utils/localStorage';

export const togglePrefix = () => (dispatch, getState) => {
  const state = getState();
  const settings = settingsSelector(state);
  const prefix = !settings.prefix;

  dispatch({ type: TOGGLE_PREFIX });

  setLocalStorage({ ...settings, prefix });
};

export const toggleFallback = () => (dispatch, getState) => {
  const state = getState();
  const settings = settingsSelector(state);
  const fallback = !settings.fallback;

  dispatch({ type: TOGGLE_FALLBACK });

  setLocalStorage({ ...settings, fallback });
};
