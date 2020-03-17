import {
  GENERATE_GRADIENT_REQUEST,
  GENERATE_GRADIENT_SUCCESS,
  CHANGE_GRADIENT,
  COPY_GRADIENT_TO_CLIPBOARD,
  ADD_NEW_COLOR,
  EDIT_ANGLE
} from '../constants/ActionTypes';

const initialState = {
  loading: false,
  currentIndex: -1,
  list: [],
  isCopied: false,
  editAngle: false
};

function gradient(state = {}, action) {
  switch (action.type) {
    case GENERATE_GRADIENT_SUCCESS:
      return {
        ...state,
        colors: [...action.colors],
        deg: action.deg
      };
    case ADD_NEW_COLOR:
      return {
        ...state,
        colors: [...state.colors, action.color]
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
        list: [...state.list, gradient({}, action)]
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
      return {
        ...state,
        isCopied: false,
        editAngle: false,
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
