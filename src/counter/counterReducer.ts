import { DeduxAction } from '../dedux';

import { COUNTER_ACTION } from './counterActions';
import { CounterState } from './counterTypes';

const initialState: CounterState = 0;

function counterReducer(
  state: CounterState = initialState,
  action?: DeduxAction
) {
  switch (action?.type) {
    case COUNTER_ACTION.INCREMENT:
      return state + 1;

    case COUNTER_ACTION.DECREMENT:
      return state - 1;

    case COUNTER_ACTION.RESET:
      return initialState;

    default:
      return state;
  }
}

export default counterReducer;
