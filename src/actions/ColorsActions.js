import {
  GENERATE_COLOR_REQUEST,
  GENERATE_COLOR_SUCCESS,
  CHANGE_COLOR
} from '../constants/ActionTypes';
import { getRandomColor } from '../utils';
import {
  getColors,
  getPrevColorIndex,
  getNextColorIndex
} from '../selectors/ColorsSelectors';

const generateColorRequest = () => ({ type: GENERATE_COLOR_REQUEST });

const generateColorSuccess = color => ({ type: GENERATE_COLOR_SUCCESS, color });

const changeColorIndex = index => ({ type: CHANGE_COLOR, index });

export const onGenerate = () => async (dispatch, getState) => {
  const state = getState();
  const colors = getColors(state);
  if (!colors.loading) {
    dispatch(generateColorRequest());
    const color = await getRandomColor();
    dispatch(generateColorSuccess(color));
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
