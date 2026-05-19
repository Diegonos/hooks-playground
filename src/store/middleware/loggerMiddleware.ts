import type { Middleware } from '@reduxjs/toolkit';

export const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  const actionType = (action as { type: string }).type;
  console.group(`ACTION -> ${actionType}`);

  console.log('Previous state:', store.getState());

  const result = next(action);

  console.log('Next state:', store.getState());

  console.groupEnd();

  return result;
};
