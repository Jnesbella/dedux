import fp from 'lodash/fp';

import Store from './store';
import {
  DeduxReducer,
  DeduxStore,
  DeduxMiddleware,
  DeduxState,
  DeduxAction,
} from './deduxTypes';

function createStore(
  reducer: DeduxReducer,
  initialState?: DeduxState
): DeduxStore {
  return new Store(reducer, initialState);
}

function applyMiddleware(store: DeduxStore, allMiddleware: DeduxMiddleware[]) {
  const dispatch = store.dispatch.bind(store);
  const getState = store.getState.bind(store);

  const dispatchWithMiddleware = (
    middlewareArr: DeduxMiddleware[] | undefined
  ) => (action: DeduxAction) => {
    const middlewareFunc = fp.first(middlewareArr);
    if (!middlewareArr || !middlewareFunc) return dispatch(action);

    const next = dispatchWithMiddleware(
      fp.slice(1, middlewareArr.length)(middlewareArr)
    );
    middlewareFunc({ getState, dispatch })(next)(action);
  };

  store.dispatch = dispatchWithMiddleware([...allMiddleware]).bind(store);
}

export default {
  createStore,
  applyMiddleware,
};
