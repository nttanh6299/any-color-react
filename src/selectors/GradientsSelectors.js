import { createSelector } from 'reselect';

export const getGradients = state => state.gradients;

export const gradientsSelector = createSelector(getGradients, gradients => ({
  isCopied: gradients.isCopied,
  gradient: gradients.list[gradients.currentIndex]
}));
