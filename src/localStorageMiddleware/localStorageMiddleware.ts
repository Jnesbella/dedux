import {
  DeduxAction,
  DeduxStoreDispatch,
  DeduxState,
  DeduxMiddlewareOptions,
} from '../dedux';

const setLocalStorageItem = (
  localStorageKey: string,
  nextValue: DeduxState
) => {
  localStorage.setItem(localStorageKey, JSON.stringify(nextValue));
};

const getLocalStorageItem = (
  localStorageKey: string,
  defaultValue: any = ''
) => {
  return JSON.parse(localStorage.getItem(localStorageKey) ?? defaultValue);
};

const localStorageMiddleware = (
  localStorageKey: string,
  { getState }: DeduxMiddlewareOptions
) => {
  return (next: DeduxStoreDispatch) => (action: DeduxAction) => {
    const result = next(action);

    setLocalStorageItem(localStorageKey, getState());

    return result;
  };
};

const makeLocalStorageMiddleware = (localStorageKey: string) => {
  return (options: DeduxMiddlewareOptions) =>
    localStorageMiddleware(localStorageKey, options);
};

export {
  makeLocalStorageMiddleware,
  localStorageMiddleware,
  getLocalStorageItem,
};
