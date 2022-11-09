import { createSlice } from "@reduxjs/toolkit";

import { CarouselState, ProductDocument } from "../types";
import { RootState } from "redux/store";

const initialState: CarouselState = {
  index: 0,
  newProducts: [],
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    previous: (state) => {
      state.index -= 1;
    },
    start: (state) => {
      state.index = initialState.index;
    },
    end: (state) => {
      const lastIndex = state.newProducts.length - 1;
      state.index = lastIndex;
    },
    next: (state) => {
      state.index += 1;
    },
    current: (state, action) => {
      state.index = action.payload;
    },
    getNewProducts: (state, action) => {
      const filteredArr = action.payload.filter((product: ProductDocument) => product.new === true);
      state.newProducts = filteredArr;
    },
  },
});

export const selectCarousel = (state: RootState) => state.carousel;

export const { previous, start, end, next, current, getNewProducts } =
  carouselSlice.actions;

export default carouselSlice.reducer;
