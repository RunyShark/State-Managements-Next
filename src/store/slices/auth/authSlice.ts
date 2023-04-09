import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface authState {
  user: Isuer | null;
  isLogin: boolean;
}

interface Isuer {
  name: string;
  correo: string;
}

const initialState: authState = {
  user: null,
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, acc: PayloadAction<Isuer>) {
      state.isLogin = true;
      state.user = acc.payload;
    },
  },
});

export const { login } = authSlice.actions;
export const selectCount = (state: RootState) => state.auth;
