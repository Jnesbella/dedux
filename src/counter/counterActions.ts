const COUNTER_ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
};

const incrementCounter = {
  type: COUNTER_ACTION.INCREMENT,
};

const decrementCounter = {
  type: COUNTER_ACTION.DECREMENT,
};

const resetCounter = {
  type: COUNTER_ACTION.RESET,
};

export { COUNTER_ACTION, incrementCounter, decrementCounter, resetCounter };
