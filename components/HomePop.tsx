import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { selectCarousel } from "../features/carousel/carouselSlice";

const HomePop = () => {
    const {popularProducts} = useSelector(selectCarousel)

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
    <section className="mlg:max-w-[1024px] mb-32 mlg:h-fit w-full mx-auto h-[1024px] bg-inherit gap-0 text-[#383B45] grid grid-cols-1 mlg:grid-cols-3 grid-rows-1 place-items-center">
        {products.map(product => {
            return (
              <div key={product.id} className="relative flex flex-col items-center gap-4">
                <figure className="bg-sky-200 peer cursor-pointer w-[225px] h-[337.5px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <div
                    style={{
                      backgroundImage: `url(${product.url})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="w-full h-full"
                  />
                </figure>
                <motion.figcaption className="absolute items-center hidden gap-2 text-center transition-all duration-300 cursor-default ease peer-hover:block w-fit -bottom-16">
                  <h2 className="text-lg uppercase">
                    {product.name}
                  </h2>
                  <span className="text-xl">{product.price}&euro;</span>
                </motion.figcaption>
              </div>
            );
        })}
    </section>
  );
};

export default HomePop;
