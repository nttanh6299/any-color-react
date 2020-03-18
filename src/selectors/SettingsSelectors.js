import { createSelector } from 'reselect';

export const getSettings = state => state.settings;

export const settingsSelector = createSelector(getSettings, settings => ({
  prefix: settings.prefix,
  fallback: settings.fallback
}));
