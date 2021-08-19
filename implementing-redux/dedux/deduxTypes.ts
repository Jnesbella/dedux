type DeduxState = any;

interface DeduxAction {
  type: string;
}

type DeduxReducer = (state?: DeduxState, action?: DeduxAction) => DeduxState;

type DeduxStoreSubscriber = (state: DeduxState) => void;

type DeduxStoreUnsubscriber = () => void;

interface DeduxStore {
  getState: () => DeduxState;
  subscribe: (subscriber: DeduxStoreSubscriber) => DeduxStoreUnsubscriber;
  dispatch: (action: DeduxAction) => void;
}

export {
  DeduxState,
  DeduxAction,
  DeduxReducer,
  DeduxStore,
  DeduxStoreSubscriber,
  DeduxStoreUnsubscriber,
};
