import {
  GENERATE_COLOR_REQUEST,
  GENERATE_COLOR_SUCCESS,
  CHANGE_COLOR,
  COPY_COLOR_TO_CLIPBOARD
} from '../constants/ActionTypes';

const initialState = {
  loading: false,
  currentIndex: -1,
  list: [],
  isCopied: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GENERATE_COLOR_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GENERATE_COLOR_SUCCESS:
      return {
        ...state,
        loading: false,
        isCopied: false,
        currentIndex: state.list.length,
        list: [...state.list, action.color]
      };
    case CHANGE_COLOR:
      return {
        ...state,
        currentIndex: action.index,
        isCopied: false
      };
    case COPY_COLOR_TO_CLIPBOARD:
      return {
        ...state,
        isCopied: action.successful
      };
    default:
      return state;
  }
}
