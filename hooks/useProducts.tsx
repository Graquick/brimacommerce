/* eslint-disable react-hooks/exhaustive-deps */
import { useGetProductsQuery } from "../features/products/productsApiSlice";
import { getNewProducts } from "../features/carousel/carouselSlice";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";

const useProducts = () => {
  const dispatch = useAppDispatch();

  const { data, isError, error, isLoading, isSuccess } =
    useGetProductsQuery("");

  useEffect(() => {
    if (isError) {
      const errorMsg = (error as any).error;
      console.log(errorMsg)
    }
  }, [isError, error]);

  useEffect(() => {
    if (isLoading) {
      console.log("Loading...")
    }
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getNewProducts(data));
      console.log(data)
    }
  }, [isSuccess, data, dispatch]);
};

export default useProducts;
