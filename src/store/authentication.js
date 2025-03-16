import { createSlice } from "@reduxjs/toolkit";
import {
  handleSignInWithEmailAndPassword,
  handleSignUpWithGoogle,
  handleSingUpWithEmailAndPassword,
} from "./authenticationHelper";

const authInitialState = {
  user: {},
  error: null,
  loading: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    handleUpdateUser(state, action) {
      state.user = action.payload;
      state.error = null;
      state.loading = false;
    },
    clearUser(state) {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      handleSignInWithEmailAndPassword.fulfilled,
      (state, action) => {
        state.loading = false;
        state.user = action.payload;
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
      }
    );
    builder.addCase(
      handleSingUpWithEmailAndPassword.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
    builder.addCase(handleSignUpWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
  },
});

export const authAction = authenticationSlice.actions;

export default authenticationSlice.reducer;

// https://www.youtube.com/watch?v=GE27BkUZbXk
