import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "store/categoryHandle";
import themeSlice from "./themeHandle";
import productSlice from "./productHandle";
export const store = configureStore({
  reducer: {
    openCategory: categorySlice,
    activeTheme: themeSlice,
    products: productSlice,
  },
});
