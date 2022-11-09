import { motion } from "framer-motion";
import Image from "next/image";

import { Git } from "../figures/Git";
import { Linkedin } from './../figures/Linkedin';
import { Mail } from "../figures/Mail";

const HomeLinks = () => {
  const links = [
    {
      id: 1,
      icon: <Git fill="none" width={24} height={24} />,
      href: "https://github.com/Graquick",
      target: "_blank",
    },
    {
      id: 2,
      icon: <Linkedin fill="none" width={24} height={24} />,
      href: "https://www.linkedin.com/in/brima-freeman-34aa05238",
      target: "_blank",
    },
    {
      id: 3,
      icon: <Mail fill="none" width={24} height={24} />,
      href: "mailto:bimu.freeman@outlook.com",
      target: "_self",
    },
  ];

  return (
    <ul className="fixed bottom-0 flex-col invisible hidden gap-8 my-auto top-12 h-fit w-fit mlg:visible mlg:flex left-8">
      {links.map((link) => {
        return (
          <li
            key={link.id}
            className="scale-75 active:scale-50 hover:scale-100 transition-[transform] duration-150 ease"
          >
            <motion.a href={link.href} target={link.target}>
              <figure className="w-fit h-fit">{link.icon}</figure>
            </motion.a>
          </li>
        );
      })}
    </ul>
  );
};

export default HomeLinks;
