import { motion, AnimatePresence } from "framer-motion";

import { selectCarousel } from "../../features/carousel/carouselSlice";
import { useAppSelector } from "../../redux/hooks";

const Images = () => {
  const { index, newProducts } = useAppSelector(selectCarousel);

  return (
    <>
      <div
        aria-label="overlay"
        className="absolute w-full h-full bg-gradient-to-b from-neutral-900/25 via-black/5 to-black/50 "
      ></div>
      <motion.figure className="relative w-full h-[750px] overflow-hidden cursor-grab">
        <AnimatePresence>
          <motion.img
            key={index}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 1.5 }}
            src={`${newProducts[index]?.image}`}
            alt="new product"
            className="h-full absolute object-cover w-[500px]"
          />
        </AnimatePresence>
      </motion.figure>
    </>
  );
};

const variants = {
  hidden: {
    opacity: 0,
    x: 400
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 400
  }
};

export default Images;
