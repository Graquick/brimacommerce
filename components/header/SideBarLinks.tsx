import { motion } from "framer-motion";

import { Git } from "../../figures/Git";
import { Linkedin } from "../../figures/Linkedin";
import { Mail } from "../../figures/Mail";

const SideBarLinks = () => {
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
    <li className="flex items-center gap-12 mt-8">
      {links.map((link) => {
        return (
          <motion.a
            key={link.id}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.75 }}
            href={link.href}
            target={link.target}
          >
            <figure className="hover:text-black transition-[color] duration-300 ease">
              {link.icon}
            </figure>
          </motion.a>
        );
      })}
    </li>
  );
};

export default SideBarLinks;
