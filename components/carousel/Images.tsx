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
  let [ref, { width }] = useMeasure();

  let url = newProducts[index]?.image;
  let direction = index > prev ? 1 : -1;

  return (
    <div className="w-full h-fit">
      <figure
        ref={ref}
        className="relative flex items-center justify-center h-[650px] overflow-hidden bg-gray-700"
      >
        <AnimatePresence custom={{ direction, width }}>
          <motion.div
            key={index}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
            }}
            custom={{ direction, width }}
            className={`absolute flex flex-col w-full h-full justify-end text-3xl font-bold`}
          >
            <div
              aria-label="image overlay"
              style={{
                background:
                  "linear-gradient(hsl(0 0% 0% / .3),hsl(20 0% 0% / .1) 35%,hsl(0 0% 0% / .05))",
              }}
              className="absolute w-full h-full"
            ></div>
            <motion.figcaption
              initial={{ opacity: 0, y: 100, scale: 0 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1.5 }, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0 }}
              className="flex absolute self-center gap-2 p-4 text-center text-black "
            >
              <h2 className="p-2 text-xl font-light bg-white">
                {newProducts[index]?.name}
              </h2>
              <p className="p-2 text-xl font-light bg-white font-didot w-fit">
                {newProducts[index]?.price}{" "}
                <span className="text-[1.5rem]">€‎</span>{" "}
              </p>
            </motion.figcaption>
          </motion.div>
        </AnimatePresence>
      </figure>
    </div>
  );
}

let variants = {
  enter: ({ direction, width }: { direction: number; width: number }) => ({
    opacity: 0,
  }),
  center: { opacity: 1 },
  exit: ({ direction, width }: { direction: number; width: number }) => ({
    opacity: 0,
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
