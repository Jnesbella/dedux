import Dedux from '../dedux';
import {
  counterReducer,
  incrementCounter,
  decrementCounter,
  resetCounter,
  INITIAL_STATE,
} from '../counter';

const { createStore } = Dedux;

/*======================================================
                          TESTS
======================================================*/

const sut = () => createStore(counterReducer);

describe('counter', () => {
  it('initializes to the initial state', () => {
    const store = sut();

    expect(store.getState()).toBe(INITIAL_STATE);
  });

  describe('incrementCounter', () => {
    it('increments the state', () => {
      const store = sut();
      store.dispatch(incrementCounter());

      expect(store.getState()).toBe(1);
    });
  });

  describe('decrementCounter', () => {
    it('decrements the state', () => {
      const store = sut();
      store.dispatch(decrementCounter());

      expect(store.getState()).toBe(-1);
    });
  });

  describe('resetCounter', () => {
    it('resets the state', () => {
      const store = sut();
      store.dispatch(incrementCounter());
      store.dispatch(resetCounter());

      expect(store.getState()).toBe(0);
    });
  });
});
