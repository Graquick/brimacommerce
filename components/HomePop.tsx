import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectCarousel } from "../features/carousel/carouselSlice";
import { useEffect, useRef, useState } from "react";

const HomePop = () => {
  const { popularProducts } = useSelector(selectCarousel);
  const [width, setWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState()
  const carousel = useRef()

  useEffect(() => {
    // @ts-ignore
    const leftConstraint = carousel.current.scrollWidth - carousel.current.offsetWidth;
    setWidth(leftConstraint);
    // @ts-ignore
    setScrollWidth(carousel.current.scrollWidth);
  }, [])

  const products = [
    {
      id: 1,
      url: `${popularProducts[0]?.image}`,
      name: `${popularProducts[0]?.name}`,
      price: `${popularProducts[0]?.price}`,
    },
    {
      id: 2,
      url: `${popularProducts[1]?.image}`,
      name: `${popularProducts[1]?.name}`,
      price: `${popularProducts[1]?.price}`,
    },
    {
      id: 3,
      url: `${popularProducts[2]?.image}`,
      name: `${popularProducts[2]?.name}`,
      price: `${popularProducts[2]?.price}`,
    },
  ];

  return (
    <section className="mb-24">
      <ul
        // @ts-ignore
        ref={carousel}
        className={` relative whitespace-nowrap text-[0] overflow-hidden cursor-pointer w-[325px] left-0 right-0 mx-auto `}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          style={{
            width: `${scrollWidth}px`
          }}
          className={`flex gap-12`}
        >
          {products.map((pro) => (
            <li key={pro.id}>
              <div
                style={{
                  backgroundImage: `url(${pro.url})`,
                  backgroundSize: "cover"
                }}
                className="w-[250px] h-[375px] rounded-sm"
              ></div>
            </li>
          ))}
        </motion.div>
      </ul>
    </section>
  );
};

export default HomePop;
