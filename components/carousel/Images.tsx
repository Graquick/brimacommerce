import { useState } from "react";
import * as Icons from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useAppDispatch } from "./../../redux/hooks";
import { useSelector } from "react-redux";
import { selectCarousel } from "../../features/carousel/carouselSlice";

export default function Home() {
  const { index, newProducts } = useSelector(selectCarousel);
  const dispatch = useAppDispatch();
  let prev = usePrevious(index);
  let [ref, { height }] = useMeasure();

  let url = newProducts[index]?.image;
  let direction = index > prev ? 1 : -1;

  return (
    <div className="w-full mlg:w-[375px] h-fit">
      <figure
        ref={ref}
        className="relative flex items-center justify-center h-[650px] overflow-hidden bg-white"
      >
        <AnimatePresence custom={{ direction, height }}>
          <motion.div
            key={index}
            variants={variants}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: .5 }}
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
            }}
            custom={{ direction, height }}
            className={`absolute flex flex-col w-full h-full justify-end text-3xl font-bold`}
          >
            <motion.div
            key={index}
              aria-label="image overlay"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={{ direction, height }}
              className="absolute w-full top-0 bg-white/80 backdrop-blur-xl"
            ></motion.div>
          </motion.div>
        </AnimatePresence>
      </figure>
    </div>
  );
}

let variants = {
  enter: ({ direction, height }: { direction: number; height: number }) => ({
    height: height,
  }),
  center: {
    height: 0,
    transition: {
      delay: 1,
    },
  },
  exit: ({ direction, height }: { direction: number; height: number }) => ({
    height: height,
    // transition: {
    //   duration: 0.5,
    // },
  }),
};

let colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

function usePrevious(state: number) {
  let [tuple, setTuple] = useState([0, state]);

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}
