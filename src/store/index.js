import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./authentication";

export const store = configureStore({
  reducer: {
    auth: authReducers,
  },
});
