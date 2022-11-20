import React from "react";

const HomeAbout = () => {
  return (
    <section className="w-full h-[1024px] bg-white text-[#383B45] flex flex-col justify-center items-center gap-20">
      <figcaption className="flex flex-col items-center gap-[42px] text-justify">
        <h2 className="text-2xl">Made only with Natural materials</h2>
        <p className="w-4/5">
          Feel good about yourself with our 100% vegan formulas free from
          phthalates, parabens, triclosan, triclocarban, and hydroquinone.
        </p>
        <button className="bg-[#d9d9d9] w-[207.75px] h-[58.5px]">
          Browse products
        </button>
      </figcaption>
      <figure className="bg-sky-200 w-[356px] h-[534px]"></figure>
    </section>
  );
};

export default HomeAbout;
