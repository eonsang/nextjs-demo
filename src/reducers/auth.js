import { createSlice } from '@reduxjs/toolkit';

export const name = '@Auth';
const initialState = {
  accessToken: '',
  expiresIn: '',
  userId: '',
  loggedIn: false,
  loading: false,
  authError: null,
  me: null,
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
  },
  extraReducers: {
  },
});

export default slice.reducer;
