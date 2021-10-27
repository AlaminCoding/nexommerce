import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "store/categoryHandle";
import themeSlice from "./themeHandle";
export const store = configureStore({
  reducer: {
    openCategory: categorySlice,
    activeTheme: themeSlice,
  },
});
