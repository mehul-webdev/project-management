import { createSlice } from "@reduxjs/toolkit";
import {
  handleSignInWithEmailAndPassword,
  handleSingUpWithEmailAndPassword,
} from "./authenticationHelper";

const authInitialState = {
  isLogin: false,
  user: {},
  error: null,
  loading: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      handleSignInWithEmailAndPassword.fulfilled,
      (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLogin = true;
      }
    );
    builder.addCase(
      handleSignInWithEmailAndPassword.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    );

    builder.addCase(
      handleSingUpWithEmailAndPassword.fulfilled,
      (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLogin = true;
      }
    );
    builder.addCase(
      handleSingUpWithEmailAndPassword.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export default authenticationSlice.reducer;

// https://www.youtube.com/watch?v=GE27BkUZbXk
