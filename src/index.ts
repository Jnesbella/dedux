import Dedux from './dedux';
import Counter, { counterReducer } from './counter';

const { createStore } = Dedux;

const store = createStore(counterReducer);
new Counter(store);
