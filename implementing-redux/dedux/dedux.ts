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

  const dispatchWithMiddleware = (
    middlewareArr: DeduxMiddleware[] | undefined
  ) => (action: DeduxAction) => {
    if (!middlewareArr || middlewareArr.length === 0) return dispatch(action);

    const middlewareFunc = middlewareArr.shift();
    if (!middlewareFunc) return dispatch(action);

    const next = dispatchWithMiddleware(middlewareArr);
    middlewareFunc(store)(next)(action);
  };

  store.dispatch = dispatchWithMiddleware(allMiddleware);
}

export default {
  createStore,
  applyMiddleware,
};
