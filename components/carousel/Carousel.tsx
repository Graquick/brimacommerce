/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectCarousel, next, start } from "../../features/carousel/carouselSlice";
import Images from "./Images";

const Carousel = () => {
  const { index, newProducts } = useAppSelector(selectCarousel);
  const dispatch = useAppDispatch();

  const lastIndex = newProducts.length - 1

  const [prevCount, setPrevCount] = useState(index);

  useEffect(() => {
        const interval = setInterval(() => {
          dispatch(start())
    }, 3500);
    return () => clearInterval(interval);
  }, [index]);
  
  return (
    <section className="w-full">
      <Images />
    </section>
  );
};

export default Carousel;
