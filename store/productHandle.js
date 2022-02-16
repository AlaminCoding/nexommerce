import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const productSlice = createSlice({
  name: "productHandle",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let products = [...state.value];
      let newProduct = action.payload;
      let exist = products.filter((element) => element.id === newProduct.id);
      if (exist.length === 1) {
        let index = products.findIndex(
          (element) => element.id === newProduct.id
        );
        products[index].count++;
        state.value = [...products];
      } else {
        state.value.push(newProduct);
      }
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
