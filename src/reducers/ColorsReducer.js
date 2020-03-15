import {
  GENERATE_COLOR_REQUEST,
  GENERATE_COLOR_SUCCESS,
  CHANGE_COLOR
} from '../constants/ActionTypes';

const initialState = {
  loading: false,
  currentIndex: -1,
  list: []
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
        currentIndex: state.list.length,
        list: [...state.list, action.color]
      };
    case CHANGE_COLOR:
      return {
        ...state,
        currentIndex: action.index
      };
    default:
      return state;
  }
}
