# Dedux

A simple clone of Redux with a basic counter app to demonstrate functionality.

## Install dependencies

```bash
> yarn
```

## Run the tests

Start the tests with:

```bash
> yarn test --watch
```

Read through the [dedux test cases](src/__tests__/tests.spec.js) for implemented logic in `src/dedux`.

Read through the [counter test cases](src/__tests__/counter.spec.js) for implemented logic in `src/counter`.

## Run the example

From the root of the project run

```bash
> yarn serve
```

The counter example will launch automatically in your default browser, but if it doesn't navigate to `http://localhost:8080` in your address bar. Observe the following:

- Dedux is hooked up to the elements in `counter.html`
- The counter reflects the value stored in your Dedux state
- Clicking the up button increases the counter (pressing the up arrow will have the same effect)
- Clicking the down button decreases the counter (pressing the down arrow will have the same effect)
- Clicking the reset button sets the counter to zero (pressing the escape key will have the same effect)
- **Bonus**: The counter value will persist between reloads thanks to a localstorage middleware
