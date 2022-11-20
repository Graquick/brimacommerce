/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectCarousel, auto } from "../../features/carousel/carouselSlice";
import Images from "./Images";

const Carousel = () => {
  const { index, newProducts } = useAppSelector(selectCarousel);
  const dispatch = useAppDispatch();

  const lastIndex = newProducts.length - 1

  const [prevCount, setPrevCount] = useState(index);

  useEffect(() => {
        const interval = setInterval(() => {
          dispatch(auto())
    }, 15000);
    return () => clearInterval(interval);
  }, [index]);
  
  return (
    <section className="w-full h-fit">
      <Images />
    </section>
  );
};

export default Carousel;
