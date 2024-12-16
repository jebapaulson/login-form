import { configureStore } from '@reduxjs/toolkit';
import  { fetchUsers } from "../slice/TableSlice"

export const store = configureStore({
  reducer: {
    users: fetchUsers,
  },
});
