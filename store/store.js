import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "store/categoryHandle";
export const store = configureStore({
  reducer: {
    openCategory: categorySlice,
  },
});
