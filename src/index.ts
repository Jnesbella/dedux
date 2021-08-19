import Dedux from './dedux';
import Counter, { counterReducer } from './counter';
import {
  makeLocalStorageMiddleware,
  getLocalStorageItem,
} from './localStorageMiddleware';

import './styles.css';

const { createStore, applyMiddleware } = Dedux;

const COUNTER_LOCAL_STORAGE_KEY = 'counter';

const store = createStore(
  counterReducer,
  getLocalStorageItem(COUNTER_LOCAL_STORAGE_KEY)
);
applyMiddleware(store, [makeLocalStorageMiddleware(COUNTER_LOCAL_STORAGE_KEY)]);
new Counter(store);
