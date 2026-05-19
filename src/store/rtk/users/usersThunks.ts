import { createAsyncThunk } from '@reduxjs/toolkit';

export type User = {
  id: number;
  name: string;
  email: string;
};

export const fetchUsers = createAsyncThunk<
  User[],
  { forceFail?: boolean } | void,
  {
    rejectValue: string;
  }
>('users/fetchUsers', async (arg, thunkApi) => {
  try {
    if (arg && (arg as { forceFail?: boolean }).forceFail) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return thunkApi.rejectWithValue('Forced failure');
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      return thunkApi.rejectWithValue('Errore HTTP');
    }

    const data = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 1500));

    return data;
  } catch (error) {
    console.error('Errore durante il recupero utenti:', error);
    return thunkApi.rejectWithValue('Errore durante il recupero utenti');
  }
});
