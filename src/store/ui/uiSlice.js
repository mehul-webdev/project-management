import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    sidebar: false,
  },
  reducers: {
    toggleSidebar(state) {
      state.sidebar = !state.sidebar;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
