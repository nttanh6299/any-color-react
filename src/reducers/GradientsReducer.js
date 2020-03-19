import {
  GENERATE_GRADIENT_REQUEST,
  GENERATE_GRADIENT_SUCCESS,
  CHANGE_GRADIENT,
  COPY_GRADIENT_TO_CLIPBOARD,
  ADD_NEW_COLOR,
  EDIT_ANGLE,
  CHANGE_GRADIENT_DIRECTION,
  TOGGLE_EDIT_COLOR_OF_GRADIENT,
  EDIT_COLOR_OF_GRADIENT
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
  colorEditing: { showHub: false, color: '', index: -1 }
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
          }))
      };
    case CHANGE_GRADIENT_DIRECTION:
      return {
        ...state,
        deg: action.deg
      };
    case TOGGLE_EDIT_COLOR_OF_GRADIENT:
      return {
        ...state,
        colorEditing: {
          color: state.colors[action.colorIndex].color,
          index: action.colorIndex,
          showHub:
            state.colorEditing.index !== action.colorIndex
              ? true
              : !state.colorEditing.showHub
        }
      };
    case EDIT_COLOR_OF_GRADIENT:
      return {
        ...state,
        colorEditing: {
          ...state.colorEditing,
          color: action.color
        },
        colors: state.colors.map((color, index) => {
          return index === state.colorEditing.index
            ? { color: action.color, stop: color.stop }
            : color;
        })
      };
    default:
      return state;
  }
}

export default function(state = initialState, action) {
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
    case ADD_NEW_COLOR:
    case EDIT_COLOR_OF_GRADIENT:
    case TOGGLE_EDIT_COLOR_OF_GRADIENT:
    case CHANGE_GRADIENT_DIRECTION:
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
    default:
      return state;
  }
}
