import { DeduxAction, DeduxStore } from '../dedux';

import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from './counterActions';
import { CounterState } from './counterTypes';

class Counter {
  constructor(store: DeduxStore) {
    const handleClick = (element: HTMLElement | null, action: DeduxAction) => {
      element?.addEventListener('click', () => store.dispatch(action));
    };

    handleClick(this.getUpButton(), incrementCounter);
    handleClick(this.getDownButton(), decrementCounter);
    handleClick(this.getResetButton(), resetCounter);

    store.subscribe((state: CounterState) => this.render(state));
  }

  getUpButton() {
    return document.getElementById('up');
  }

  getDownButton() {
    return document.getElementById('down');
  }

  getResetButton() {
    return document.getElementById('reset');
  }

  getCountElement() {
    return document.getElementById('count');
  }

  render(state: CounterState) {
    const element = this.getCountElement();
    if (element) {
      element.innerHTML = '';
      const textNode = document.createTextNode(`${state}`);
      element.appendChild(textNode);
    }
  }
}

export default Counter;
