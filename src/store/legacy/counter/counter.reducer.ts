import { counterActionTypes } from './counter.types';

const initialState = {
  value: 0,
};

type CounterState = {
  value: number;
};

type CounterAction = {
  type: string;
};

export default function counterReducer(
  state: CounterState = initialState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case counterActionTypes.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    case counterActionTypes.RESET:
      return {
        ...state,
        value: 0,
      };

    default:
      return state;
  }
}
