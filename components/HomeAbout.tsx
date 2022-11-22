import React from "react";

const HomeAbout = () => {
  return (
    <section className="w-full mt-24 h-[1024px] bg-inherit text-[#383B45] flex flex-col justify-center items-center gap-20">
      <figcaption className="flex flex-col items-center gap-[31.5px]">
        <h2 className="text-3xl max-w-[300px] text-center ">Made only with Natural materials</h2>
        <p className="max-w-[300px] text-justify text-lg">
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
