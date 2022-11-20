import { createSlice } from "@reduxjs/toolkit";

import { CarouselState, ProductDocument } from "../types";
import { RootState } from "../../redux/store";

const initialState: CarouselState = {
  index: 0,
  newProducts: [],
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    previous: (state) => {
      state.index -= 1
    },
    auto: (state) => {
      const lastIndex = state.newProducts.length - 1
      console.log("Before", state.index)
      state.index == lastIndex ? state.index = initialState.index : state.index += 1
      console.log("After", state.index);
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

export const { previous, auto, end, next, current, getNewProducts } =
  carouselSlice.actions;

export default carouselSlice.reducer;
