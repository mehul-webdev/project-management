import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./authentication";
import uiReducers from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    ui: uiReducers,
  },
});
