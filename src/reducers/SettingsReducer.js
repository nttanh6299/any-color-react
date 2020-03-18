import { TOGGLE_PREFIX } from '../constants/ActionTypes';

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
    default:
      return state;
  }
}
