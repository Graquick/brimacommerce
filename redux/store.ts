import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import carouselSlice from "../features/carousel/carouselSlice";
import { productsApi } from "../features/products/productsApiSlice";

export const store = configureStore({
  reducer: {
    carousel: carouselSlice,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
