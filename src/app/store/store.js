import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice';
import authSlice from '../reducer/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});