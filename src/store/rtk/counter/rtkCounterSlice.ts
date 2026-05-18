import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rtkCounter: 0,
};

const rtkCounterSlice = createSlice({
  name: 'rtkCounter',
  initialState,
  reducers: {
    increment(state) {
      state.rtkCounter += 1;
    },
    decrement(state) {
      state.rtkCounter -= 1;
    },
    reset(state) {
      state.rtkCounter = 0;
    },
  },
});

export const { increment, decrement, reset } = rtkCounterSlice.actions;

export default rtkCounterSlice.reducer;
