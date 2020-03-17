import {
  GENERATE_GRADIENT_REQUEST,
  GENERATE_GRADIENT_SUCCESS,
  CHANGE_GRADIENT,
  COPY_GRADIENT_TO_CLIPBOARD,
  ADD_NEW_COLOR
} from '../constants/ActionTypes';

const initialState = {
  loading: false,
  currentIndex: -1,
  list: [],
  isCopied: false
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
        currentIndex: state.list.length,
        list: [...state.list, gradient({}, action)]
      };
    case CHANGE_GRADIENT:
      return {
        ...state,
        currentIndex: action.index,
        isCopied: false
      };
    case COPY_GRADIENT_TO_CLIPBOARD:
      return {
        ...state,
        isCopied: true
      };
    case ADD_NEW_COLOR:
      return {
        ...state,
        list: state.list.map((item, index) => {
          return index === state.currentIndex
            ? gradient(state.list[state.currentIndex], action)
            : item;
        })
      };
    default:
      return state;
  }
}
