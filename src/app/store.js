import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";

// Global store
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
