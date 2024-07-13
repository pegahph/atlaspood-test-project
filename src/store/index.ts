import { configureStore } from "@reduxjs/toolkit";
import type { AuthState } from "./slices/authSlice"; // Explicitly import the type
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState> & {
  auth: AuthState; // Explicitly type the state
};
export type AppDispatch = typeof store.dispatch;

export default store;
