import Store from './store';
import { DeduxReducer, DeduxStore } from './deduxTypes';

function createStore(reducer: DeduxReducer): DeduxStore {
  return new Store(reducer);
}

function applyMiddleware() {}

export default {
  createStore,
  applyMiddleware,
};
