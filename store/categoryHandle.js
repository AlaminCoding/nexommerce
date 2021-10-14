import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const categorySlice = createSlice({
  name: "categoryHandle",
  initialState,
  reducers: {
    openCategory: (state) => {
      state.value = true;
    },
    closeCategory: (state) => {
      state.value = false;
    },
  },
});

export const { openCategory, closeCategory } = categorySlice.actions;

export default categorySlice.reducer;
