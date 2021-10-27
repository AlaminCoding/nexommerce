import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    activeLight: (state) => {
      state.value = "light";
    },
    activeDark: (state) => {
      state.value = "dark";
    },
  },
});

export const { activeLight, activeDark } = themeSlice.actions;

export default themeSlice.reducer;
