import * as actions from '../ColorsActions';
import * as types from '../../constants/ActionTypes';
import mockStore from '../../store/mockStore';
import '@babel/polyfill';

describe('Plain actions', () => {
  it('Should create an action to request to generate a color', () => {
    const expectedAction = { type: types.GENERATE_COLOR_REQUEST };
    expect(actions.generateColorRequest()).toEqual(expectedAction);
  });

  it('Should create an action for a color is generated successfully', () => {
    const expectedAction = {
      type: types.GENERATE_COLOR_SUCCESS,
      color: '#FFFFFF'
    };
    expect(actions.generateColorSuccess('#FFFFFF')).toEqual(expectedAction);
  });

  it('Should create an action to change the index of colors', () => {
    const expectedAction = {
      type: types.CHANGE_COLOR,
      index: 1
    };
    expect(actions.changeColorIndex(1)).toEqual(expectedAction);
  });

  it('Should create an action when the color is copied to clipboard', () => {
    const expectedAction = {
      type: types.COPY_COLOR_TO_CLIPBOARD,
      successful: true
    };
    expect(actions.copyToClipboard(true)).toEqual(expectedAction);
  });
});

describe('Async actions', () => {
  it('Should create GENERATE_COLOR_SUCCESS when generating a color has been done', () => {
    const initialState = {
      colors: {
        currentIndex: -1,
        list: []
      }
    };
    const store = mockStore(initialState);
    return store.dispatch(actions.onGenerateColor()).then(() => {
      expect(store.getActions().length).toEqual(2);
    });
  });

  it('Should go prev color when the current index is greater than -1', done => {
    const initialState = {
      colors: {
        currentIndex: 2,
        list: ['#FFFFFF', '#000000', '#00FF00']
      }
    };
    const store = mockStore(initialState);

    const expectedAction = { type: types.CHANGE_COLOR, index: 1 };

    store.dispatch(actions.prevColor());
    expect(store.getActions()).toEqual([expectedAction]);
    done();
  });

  it('Should not go prev color when the current index is equals to -1', done => {
    const initialState = {
      colors: {
        currentIndex: -1,
        list: []
      }
    };
    const store = mockStore(initialState);

    store.dispatch(actions.prevColor());
    expect(store.getActions()).toEqual([]);
    done();
  });

  it('Should go next color when the current index is less than the list length', done => {
    const initialState = {
      colors: {
        currentIndex: 0,
        list: ['#FFFFFF', '#000000']
      }
    };
    const store = mockStore(initialState);

    const expectedAction = { type: types.CHANGE_COLOR, index: 1 };

    store.dispatch(actions.nextColor());
    expect(store.getActions()).toEqual([expectedAction]);
    done();
  });

  it('Should not go next color when the current index is equals to the list length', done => {
    const initialState = {
      colors: {
        currentIndex: 1,
        list: ['#FFFFFF', '#000000']
      }
    };
    const store = mockStore(initialState);

    store.dispatch(actions.nextColor());
    expect(store.getActions()).toEqual([]);
    done();
  });

  it('Should generate new color when list is empty', done => {
    const initialState = {
      colors: {
        currentIndex: -1,
        list: []
      }
    };
    const store = mockStore(initialState);

    store.dispatch(actions.generateColorIfNeeded()).then(() => {
      expect(store.getActions().length).toEqual(2);
      done();
    });
  });

  it('Should not generate new color when list is not empty', done => {
    const initialState = {
      colors: {
        currentIndex: 0,
        list: ['#FFFFFF']
      }
    };
    const store = mockStore(initialState);

    store.dispatch(actions.generateColorIfNeeded());
    expect(store.getActions().length).toEqual(0);
    done();
  });
});
