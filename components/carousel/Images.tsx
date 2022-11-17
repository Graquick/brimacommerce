import { motion, AnimatePresence } from "framer-motion";

import { selectCarousel } from "../../features/carousel/carouselSlice";
import { useAppSelector } from "../../redux/hooks";

const Images = () => {
  const { index, newProducts } = useAppSelector(selectCarousel);
  const url = newProducts[index]?.image

  return (
    <AnimatePresence>
      <motion.figure
        key={index}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ backgroundImage: `url(${url})`, backgroundSize: "cover" }}
        className="relative w-full h-[650px]"
      >
        <motion.div
          aria-label="image content"
          style={{
            background:
              "linear-gradient(hsl(0 0% 0% / 0.2), hsl(20 0% 0% / 0.1) 50%, hsl(0 0% 0% / .05))",
          }}
          className="absolute w-full h-full"
        ></motion.div>
      </motion.figure>
    </AnimatePresence>
  );
};

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default Images;
