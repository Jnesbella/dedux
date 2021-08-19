import {
  DeduxState,
  DeduxReducer,
  DeduxAction,
  DeduxStoreSubscriber,
  DeduxStoreUnsubscriber,
} from './deduxTypes';

class Store {
  state: DeduxState;
  reducer: DeduxReducer;
  subscribers: DeduxStoreSubscriber[] = [];

  constructor(reducer: DeduxReducer, initialState?: DeduxState) {
    this.reducer = reducer;
    this.state = this.reducer(initialState);
  }

  getState(): DeduxState {
    return this.state;
  }

  dispatch(action: DeduxAction) {
    if (!action.type)
      throw new Error('{ type: string } is required for dispatch');
    this.state = this.reducer(this.state, action);
    this.subscribers.map(subscriber => subscriber(this.state));

    return this.state;
  }

  subscribe(subscriber: DeduxStoreSubscriber): DeduxStoreUnsubscriber {
    this.subscribers = [...this.subscribers, subscriber];

    return () => {
      this.subscribers = this.subscribers.filter(s => s !== subscriber);
    };
  }
}

export default Store;
