import {
  GENERATE_GRADIENT_REQUEST,
  GENERATE_GRADIENT_SUCCESS
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
    default:
      return state;
  }
}
