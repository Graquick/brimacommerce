import { motion } from "framer-motion";

const HomeAbout = () => {

  return (
    <section className="mlg:max-w-[1024px] mlg:h-[768px] w-full mx-auto h-[1024px] bg-inherit gap-0 text-[#383B45] grid grid-cols-1 mlg:grid-cols-2 grid-rows-1 place-items-center">
      <figcaption className="flex flex-col items-center gap-[31.5px] w-fit">
        <h2 className="text-3xl max-w-[300px] text-center">
          Made only with Natural materials
        </h2>
        <p className="max-w-[300px] text-justify text-lg">
          Feel good about yourself with our 100% vegan formulas free from
          phthalates, parabens, triclosan, triclocarban, and hydroquinone.
        </p>
        <motion.button
          whileTap={{ scale: .75, y: 0 }}
          className="bg-zinc-100 rounded-md w-[207.75px] group h-[58.5px] relative before:block before:absolute before:-inset-0 before:w-0 hover:before:w-full before:rounded-md before:transition-[width] before:duration-150 before:ease-in-out before:bg-white/80 before:backdrop-blur-lg "
        >
          <span className="relative text-[#383B45] group-hover:text-black transition-[color] duration-300 ease-in-out">
            Browse products
          </span>
        </motion.button>
      </figcaption>
      <figure className="bg-sky-200 w-[325px] h-[487.5px]">
        <div
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/6311678/pexels-photo-6311678.jpeg?auto=compress&cs=tinysrgb&w=1600)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
          className="w-full h-full"
        />
      </figure>
    </section>
  );
};

export default HomeAbout;
