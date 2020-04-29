import {
  GENERATE_GRADIENT_REQUEST,
  GENERATE_GRADIENT_SUCCESS,
  CHANGE_GRADIENT,
  COPY_GRADIENT_TO_CLIPBOARD,
  ADD_NEW_COLOR,
  EDIT_ANGLE,
  CHANGE_GRADIENT_DIRECTION,
  TOGGLE_EDIT_COLOR_OF_GRADIENT,
  EDIT_COLOR_OF_GRADIENT,
  TOGGLE_SLIDER,
  START_UPDATE_COLOR_STOP,
  UPDATE_COLOR_STOP,
  DELETE_SELECTED_COLOR
} from '../constants/ActionTypes';
import { getRandomColor, copyTextToClipboard, setGradient } from '../utils';
import {
  getPrevGradientIndex,
  getNextGradientIndex,
  getGradients
} from '../selectors/GradientsSelectors';
import { getSettings } from '../selectors/SettingsSelectors';

const generateGradientRequest = () => ({ type: GENERATE_GRADIENT_REQUEST });

const generateGradientSuccess = (colors, deg) => ({
  type: GENERATE_GRADIENT_SUCCESS,
  colors,
  deg
});

const changeGradientIndex = index => ({ type: CHANGE_GRADIENT, index });

const copyToClipboard = successful => ({
  type: COPY_GRADIENT_TO_CLIPBOARD,
  successful
});

export const switchEditAngle = () => ({ type: EDIT_ANGLE });

export const changeGradientDirection = deg => ({
  type: CHANGE_GRADIENT_DIRECTION,
  deg
});

export const onGenerateGradient = () => async dispatch => {
  dispatch(generateGradientRequest());
  Promise.all([getRandomColor(), getRandomColor()])
    .then(values => {
      const deg = Math.floor(Math.random() * 360);
      dispatch(generateGradientSuccess(values, deg));
    })
    .catch(err => console.log(err));
};

export const prevGradient = () => (dispatch, getState) => {
  const state = getState();
  const prevIndex = getPrevGradientIndex(state);
  if (prevIndex !== -1) {
    dispatch(changeGradientIndex(prevIndex));
  }
};

export const nextGradient = () => (dispatch, getState) => {
  const state = getState();
  const nextIndex = getNextGradientIndex(state);
  if (nextIndex !== -1) {
    dispatch(changeGradientIndex(nextIndex));
  }
};

export const copyGradientToClipboard = () => async (dispatch, getState) => {
  const state = getState();
  const gradients = getGradients(state);
  const { prefix, fallback } = getSettings(state);

  const hasItems = gradients.list.length > 0;
  const currentIndex = gradients.currentIndex;
  const colorsFromGradient = gradients.list[currentIndex];

  if (hasItems && currentIndex >= 0 && !!colorsFromGradient) {
    const successful = await copyTextToClipboard(
      setGradient(colorsFromGradient, prefix, fallback, true, true)
    );
    dispatch(copyToClipboard(successful));
  }
};

export const generateGradientIfNeeded = () => async (dispatch, getState) => {
  const state = getState();
  const gradients = getGradients(state);
  if (gradients.list.length === 0) {
    dispatch(onGenerateGradient());
  }
};

export const addNewColor = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const gradients = getGradients(state);
    const currentIndex = gradients.currentIndex;
    const colorsFromGradient = gradients.list[currentIndex];

    if (colorsFromGradient && colorsFromGradient.colors.length < 5) {
      const color = await getRandomColor();
      dispatch({ type: ADD_NEW_COLOR, color });
    }
  } catch (err) {
    console.log('add new color error:', err);
  }
};

export const toggleEditColorOfGradient = colorIndex => ({
  type: TOGGLE_EDIT_COLOR_OF_GRADIENT,
  colorIndex
});

export const editColorOfGradient = color => ({
  type: EDIT_COLOR_OF_GRADIENT,
  color
});

export const toggleSlider = () => ({ type: TOGGLE_SLIDER });

export const startUpdateColorStop = colorIndex => ({
  type: START_UPDATE_COLOR_STOP,
  colorIndex
});

export const updateColorStop = percent => ({
  type: UPDATE_COLOR_STOP,
  percent
});

export const deleteSelectedColor = () => ({ type: DELETE_SELECTED_COLOR });
