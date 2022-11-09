import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4000/api/`,
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      providesTags: ["Products"],
    }),
  }),
});

export const {
    useGetProductsQuery
} = productsApi