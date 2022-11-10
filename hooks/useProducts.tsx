/* eslint-disable react-hooks/exhaustive-deps */
import { getNewProducts } from "../features/carousel/carouselSlice";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";

const useProducts = () => {
  const dispatch = useAppDispatch();

    useEffect(() => {
      (async () => {
        const results = await fetch("/api/products/all");
        const resultsJson = await results.json();
        dispatch(getNewProducts(resultsJson))
      })();
    }, []);  
};

export default useProducts;
