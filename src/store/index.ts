import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './legacy/counter/counter.reducer';
import rtkCounterSlice from './rtk/counter/rtkCounterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  rtkCounter: rtkCounterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
