import { useState } from "react";
import {motion} from 'framer-motion'

import { Close } from "../../figures/Close";
import { Menu } from "../../figures/Menu";
import * as Icons from "@heroicons/react/solid";
import SideBar from "./SideBar";
import NavLinks from "./NavLinks";

const buttonVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 180,
  },
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-inherit">
      <motion.button
        variants={buttonVariants}
        animate={isOpen ? "animate" : "initial"}
        onClick={handleButton}
        className="absolute top-0 bottom-0 z-20 my-auto bg-inherit h-fit right-4 mlg:hidden mlg:invisible"
      >
        {isOpen ? (
          <Close stroke="#000" />
        ) : (
          <Menu width={24} height={24} />
        )}
      </motion.button>
      <SideBar isOpen={isOpen} />
      <NavLinks />
    </nav>
  );
}

export default Nav