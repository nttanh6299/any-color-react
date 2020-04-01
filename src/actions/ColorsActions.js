import {
  GENERATE_COLOR_REQUEST,
  GENERATE_COLOR_SUCCESS,
  CHANGE_COLOR,
  COPY_COLOR_TO_CLIPBOARD
} from '../constants/ActionTypes';
import { getRandomColor, copyTextToClipboard } from '../utils';
import {
  getColors,
  getPrevColorIndex,
  getNextColorIndex
} from '../selectors/ColorsSelectors';

export const generateColorRequest = () => ({ type: GENERATE_COLOR_REQUEST });

export const generateColorSuccess = color => ({
  type: GENERATE_COLOR_SUCCESS,
  color
});

export const changeColorIndex = index => ({ type: CHANGE_COLOR, index });

export const copyToClipboard = successful => ({
  type: COPY_COLOR_TO_CLIPBOARD,
  successful
});

export const onGenerateColor = () => async (dispatch, getState) => {
  try {
    dispatch(generateColorRequest());
    const color = await getRandomColor();
    dispatch(generateColorSuccess(color));
  } catch (err) {
    console.log('generate color error:', err);
  }
};

export const prevColor = () => (dispatch, getState) => {
  const state = getState();
  const prevIndex = getPrevColorIndex(state);
  if (prevIndex !== -1) {
    dispatch(changeColorIndex(prevIndex));
  }
};

export const nextColor = () => (dispatch, getState) => {
  const state = getState();
  const nextIndex = getNextColorIndex(state);
  if (nextIndex !== -1) {
    dispatch(changeColorIndex(nextIndex));
  }
};

export const copyColorToClipboard = () => async (dispatch, getState) => {
  const state = getState();
  const colors = getColors(state);
  const hasItems = colors.list.length > 0;
  const currentIndex = colors.currentIndex;

  if (hasItems && currentIndex >= 0) {
    const successful = await copyTextToClipboard(colors.list[currentIndex]);
    dispatch(copyToClipboard(successful));
  }
};

export const generateColorIfNeeded = () => async (dispatch, getState) => {
  const state = getState();
  const colors = getColors(state);
  if (colors.list.length === 0) {
    dispatch(onGenerateColor());
  }
};
