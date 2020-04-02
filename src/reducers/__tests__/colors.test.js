import reducer from '../ColorsReducer';
import * as types from '../../constants/ActionTypes';

describe('Colors Reducer', () => {
  it('Should return the initial state', () => {
    const expectedState = {
      loading: false,
      currentIndex: -1,
      list: [],
      isCopied: false
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('Should add new color to the list', () => {
    const color = '#FFFFFF';
    const expectedState = {
      loading: false,
      currentIndex: 0,
      list: [color],
      isCopied: false
    };

    expect(
      reducer(undefined, { type: types.GENERATE_COLOR_SUCCESS, color })
    ).toEqual(expectedState);
  });

  it('Should change the index of the list', () => {
    const indexChanged = 1;
    const currentState = {
      loading: false,
      currentIndex: 0,
      list: ['#FFFFFF', '#000000'],
      isCopied: false
    };

    expect(
      reducer(currentState, { type: types.CHANGE_COLOR, index: indexChanged })
    ).toEqual({ ...currentState, currentIndex: indexChanged });
  });
});
