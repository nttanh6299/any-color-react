import {
  GENERATE_GRADIENT_REQUEST,
  GENERATE_GRADIENT_SUCCESS,
  CHANGE_GRADIENT,
  COPY_GRADIENT_TO_CLIPBOARD
} from '../constants/ActionTypes';
import { getRandomColor } from '../utils';

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

export const onGenerateGradient = () => async (dispatch, getState) => {
  dispatch(generateGradientRequest());
  Promise.all([getRandomColor(), getRandomColor()])
    .then(values => {
      const deg = Math.floor(Math.random() * 360);
      dispatch(generateGradientSuccess(values, deg));
    })
    .catch(err => console.log(err));
};
