import Dedux from '../dedux';
import {
  makeLocalStorageMiddleware,
  getLocalStorageItem,
} from '../localStorageMiddleware';

import './localStorageMock';

const { createStore, applyMiddleware } = Dedux;

/*======================================================
                          TESTS
======================================================*/
const TEST_LOCAL_STORAGE_KEY = 'test';

const sut = (reducer, defaultState = '') => {
  const store = createStore(
    reducer,
    getLocalStorageItem(TEST_LOCAL_STORAGE_KEY, defaultState)
  );
  applyMiddleware(store, [makeLocalStorageMiddleware(TEST_LOCAL_STORAGE_KEY)]);

  return store;
};

describe('localStorageMiddleware', () => {
  it('supports default values', () => {
    const reducer = () => {};
    const defaultValue = { foo: 'bar' };
    const store = sut(reducer, defaultValue);

    expect(store.getState().foo).toBe('bar');
  });

  it('stores state revisions in localStorage', () => {
    const reducer = (state, action) => {
      if (!action) return state;

      switch (action.type) {
        case 'whiz':
          return { foo: 'bang' };

        default:
          return state;
      }
    };
    const defaultValue = { foo: 'bar' };
    const store = sut(reducer, defaultValue);
    store.dispatch({ type: 'whiz' });

    expect(store.getState().foo).toBe('bang');
    expect(getLocalStorageItem(TEST_LOCAL_STORAGE_KEY).foo).toBe('bang');
  });
});
