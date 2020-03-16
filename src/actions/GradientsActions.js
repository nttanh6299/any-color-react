import {
  GENERATE_GRADIENT_REQUEST,
  GENERATE_GRADIENT_SUCCESS,
  CHANGE_GRADIENT,
  COPY_GRADIENT_TO_CLIPBOARD
} from '../constants/ActionTypes';
import { getRandomColor, copyTextToClipboard, setGradient } from '../utils';
import {
  getPrevGradientIndex,
  getNextGradientIndex,
  getGradients
} from '../selectors/GradientsSelectors';

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
  const hasItems = gradients.list.length > 0;
  const currentIndex = gradients.currentIndex;
  const colorsFromGradient = gradients.list[currentIndex];

  if (hasItems && currentIndex >= 0 && !!colorsFromGradient) {
    const successful = await copyTextToClipboard(
      setGradient(colorsFromGradient)
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
