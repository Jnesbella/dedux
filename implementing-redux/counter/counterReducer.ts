import { DeduxAction } from '../dedux';

import { COUNTER_ACTION } from './counterActions';
import { CounterState } from './counterTypes';

const INITIAL_STATE: CounterState = 0;

function counterReducer(
  state: CounterState = INITIAL_STATE,
  action?: DeduxAction
) {
  switch (action?.type) {
    case COUNTER_ACTION.INCREMENT:
      return state + 1;

    case COUNTER_ACTION.DECREMENT:
      return state - 1;

    case COUNTER_ACTION.RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
}

export default counterReducer;
export { INITIAL_STATE };
