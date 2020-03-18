import { TOGGLE_PREFIX, TOGGLE_FALLBACK } from '../constants/ActionTypes';

const initialState = {
  prefix: false,
  fallback: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_PREFIX:
      return {
        ...state,
        prefix: !state.prefix
      };
    case TOGGLE_FALLBACK:
      return {
        ...state,
        fallback: !state.fallback
      };
    default:
      return state;
  }
}
