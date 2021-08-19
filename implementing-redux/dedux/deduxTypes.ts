type DeduxState = any;

interface DeduxAction {
  type: string;
}

type DeduxReducer = (state?: DeduxState, action?: DeduxAction) => DeduxState;

type DeduxStoreSubscriber = (state: DeduxState) => void;

type DeduxStoreUnsubscriber = () => void;

type DeduxStoreDispatch = (action: DeduxAction) => void;

interface DeduxStore {
  getState: () => DeduxState;
  subscribe: (subscriber: DeduxStoreSubscriber) => DeduxStoreUnsubscriber;
  dispatch: DeduxStoreDispatch;
}

type DeduxMiddleware = (
  store: DeduxStore
) => (next: DeduxStoreDispatch) => DeduxStoreDispatch;

export {
  DeduxState,
  DeduxAction,
  DeduxReducer,
  DeduxStore,
  DeduxStoreSubscriber,
  DeduxStoreUnsubscriber,
  DeduxMiddleware,
};
