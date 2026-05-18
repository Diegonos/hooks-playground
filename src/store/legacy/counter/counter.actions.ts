import { counterActionTypes } from './counter.types';

export const increment = () => ({
  type: counterActionTypes.INCREMENT,
});

export const decrement = () => ({
  type: counterActionTypes.DECREMENT,
});

export const reset = () => ({
  type: counterActionTypes.RESET,
});
