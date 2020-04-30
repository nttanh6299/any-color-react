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
  TOGGLE_PREFIX,
  TOGGLE_FALLBACK,
  DELETE_SELECTED_COLOR
} from '../constants/ActionTypes';
import { calculateStop } from '../utils';

const initialState = {
  loading: false,
  currentIndex: -1,
  list: [],
  isCopied: false,
  editAngle: false
};

const initialGradient = {
  colors: [],
  deg: 0,
  colorIndexEditing: -1,
  showSlider: false,
  showHub: false
};

function gradient(state = initialGradient, action) {
  switch (action.type) {
    case GENERATE_GRADIENT_SUCCESS:
      return {
        ...state,
        colors: state.colors
          .concat(action.colors)
          .map((color, index, colors) => ({
            color,
            stop: calculateStop(100, colors.length, index)
          })),
        deg: action.deg
      };
    case ADD_NEW_COLOR:
      return {
        ...state,
        colors: state.colors
          .concat({ color: action.color })
          .map((color, index, colors) => ({
            ...color,
            stop: calculateStop(100, colors.length, index)
          })),
        showHub: false
      };
    case CHANGE_GRADIENT_DIRECTION:
      return {
        ...state,
        deg: action.deg
      };
    case TOGGLE_EDIT_COLOR_OF_GRADIENT:
      return {
        ...state,
        colorIndexEditing: action.colorIndex,
        showHub:
          state.colorIndexEditing !== action.colorIndex ? true : !state.showHub
      };
    case EDIT_COLOR_OF_GRADIENT:
      return {
        ...state,
        colors: state.colors.map((color, index) => {
          return index === state.colorIndexEditing
            ? { ...color, color: action.color }
            : color;
        })
      };
    case TOGGLE_SLIDER:
      return {
        ...state,
        showSlider: !state.showSlider,
        showHub: false,
        colors: [].concat(
          state.colors.sort((left, right) => left.stop - right.stop)
        )
      };
    case START_UPDATE_COLOR_STOP:
      return {
        ...state,
        colorIndexEditing: action.colorIndex
      };
    case UPDATE_COLOR_STOP:
      return {
        ...state,
        colors: state.colors.map((color, index) => {
          return index === state.colorIndexEditing
            ? { ...color, stop: action.percent }
            : color;
        })
      };
    case DELETE_SELECTED_COLOR:
      return {
        ...state,
        colors: [
          ...state.colors.filter(
            (_, index) => index !== state.colorIndexEditing
          )
        ],
        colorIndexEditing: -1,
        showHub: false
      };
    default:
      return state;
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GENERATE_GRADIENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GENERATE_GRADIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isCopied: false,
        editAngle: false,
        currentIndex: state.list.length,
        list: [...state.list, gradient(undefined, action)]
      };
    case CHANGE_GRADIENT:
      return {
        ...state,
        currentIndex: action.index,
        isCopied: false,
        editAngle: false
      };
    case COPY_GRADIENT_TO_CLIPBOARD:
      return {
        ...state,
        isCopied: true,
        editAngle: false
      };
    case START_UPDATE_COLOR_STOP:
    case UPDATE_COLOR_STOP:
    case ADD_NEW_COLOR:
    case EDIT_COLOR_OF_GRADIENT:
    case TOGGLE_EDIT_COLOR_OF_GRADIENT:
    case CHANGE_GRADIENT_DIRECTION:
    case TOGGLE_SLIDER:
    case DELETE_SELECTED_COLOR:
      return {
        ...state,
        isCopied: false,
        list: state.list.map((item, index) => {
          return index === state.currentIndex
            ? gradient(state.list[state.currentIndex], action)
            : item;
        })
      };
    case EDIT_ANGLE:
      return {
        ...state,
        editAngle: !state.editAngle,
        isCopied: false
      };
    case TOGGLE_PREFIX:
    case TOGGLE_FALLBACK:
      return {
        ...state,
        isCopied: false
      };
    default:
      return state;
  }
}
