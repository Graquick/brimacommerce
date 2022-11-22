import React from "react";

const HomeAbout = () => {

  return (
    <section className="mlg:max-w-[1024px] mlg:h-[768px] w-full mx-auto h-[1024px] bg-inherit gap-0 text-[#383B45] grid grid-cols-1 mlg:grid-cols-2 grid-rows-1 place-items-center">
      <figcaption className="flex flex-col items-center gap-[31.5px] w-fit">
        <h2
          className="text-3xl max-w-[300px] text-center"
        >
          Made only with Natural materials
        </h2>
        <p className="max-w-[300px] text-justify text-lg">
          Feel good about yourself with our 100% vegan formulas free from
          phthalates, parabens, triclosan, triclocarban, and hydroquinone.
        </p>
        <button className="bg-zinc-100 rounded-md w-[207.75px] h-[58.5px]">
          Browse products
        </button>
      </figcaption>
      <figure className="bg-sky-200 w-[325px] h-[487.5px]">
        <div
          style={{
            background: "url(https://images.pexels.com/photos/6311678/pexels-photo-6311678.jpeg?auto=compress&cs=tinysrgb&w=1600)"
            ,backgroundSize: "contain"
          }}
          className="w-full h-full"
        />
      </figure>
    </section>
  );
};

export default HomeAbout;
