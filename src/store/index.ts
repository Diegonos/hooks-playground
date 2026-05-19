import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './legacy/counter/counter.reducer';
import rtkCounterSlice from './rtk/counter/rtkCounterSlice';
import usersReducer from './rtk/users/usersSlice';

import { loggerMiddleware } from './middleware/loggerMiddleware';

const rootReducer = combineReducers({
  counter: counterReducer,
  rtkCounter: rtkCounterSlice,
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
