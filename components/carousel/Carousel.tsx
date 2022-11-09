/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useAppSelector } from "../../redux/hooks";
import { selectCarousel, next, start } from "../../features/carousel/carouselSlice";
import Images from "./Images";
import { useAppDispatch } from "../../redux/hooks";

const Carousel = () => {
  const { index, newProducts } = useAppSelector(selectCarousel);
  const dispatch = useAppDispatch();

  const lastIndex = newProducts.length - 1

  const [prevCount, setPrevCount] = useState(index);
  const [trend, setTrend] = useState(null);
  if (prevCount !== index) {
    setPrevCount(index);
    // setTrend(index > prevCount ? 1 : -1);
  }

  // 1st try MongoDB connection

  let colors = [
    "bg-red-400",
    "bg-sky-400",
    "bg-orange-400",
    "bg-green-400",
    "bg-purple-400",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      index < lastIndex ? dispatch(next()) : dispatch(start());
    }, 3500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="">
      <Images />
    </section>
  );
};

export default Carousel;
