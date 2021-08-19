type DeduxState = any;

type DeduxAction = Record<string, any> & {
  type: string;
};

type DeduxReducer = (state?: DeduxState, action?: DeduxAction) => DeduxState;

type DeduxStoreSubscriber = (state: DeduxState) => void;

type DeduxStoreUnsubscriber = () => void;

type DeduxStoreDispatch = (action: DeduxAction) => void;

interface DeduxStore {
  getState: () => DeduxState;
  subscribe: (subscriber: DeduxStoreSubscriber) => DeduxStoreUnsubscriber;
  dispatch: DeduxStoreDispatch;
}

interface DeduxMiddlewareOptions {
  getState: () => DeduxState;
  dispatch: DeduxStoreDispatch;
}

type DeduxMiddleware = (
  options: DeduxMiddlewareOptions
) => (next: DeduxStoreDispatch) => DeduxStoreDispatch;

export {
  DeduxState,
  DeduxAction,
  DeduxReducer,
  DeduxStore,
  DeduxStoreSubscriber,
  DeduxStoreUnsubscriber,
  DeduxMiddleware,
  DeduxStoreDispatch,
  DeduxMiddlewareOptions,
};
