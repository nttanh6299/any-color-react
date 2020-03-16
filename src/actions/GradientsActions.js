import {
  GENERATE_GRADIENT_REQUEST,
  GENERATE_GRADIENT_SUCCESS,
  CHANGE_GRADIENT,
  COPY_GRADIENT_TO_CLIPBOARD
} from '../constants/ActionTypes';
import { getRandomColor } from '../utils';
import {
  getPrevGradientIndex,
  getNextGradientIndex
} from '../selectors/GradientsSelectors';

const generateGradientRequest = () => ({ type: GENERATE_GRADIENT_REQUEST });

const generateGradientSuccess = (colors, deg) => ({
  type: GENERATE_GRADIENT_SUCCESS,
  colors,
  deg
});

const changeGradientIndex = index => ({ type: CHANGE_GRADIENT, index });

const copyGradientToClipboard = successful => ({
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
