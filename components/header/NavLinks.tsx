import Link from "next/link";

import { Bag } from "../../figures/Bag";
import { Login } from "../../figures/Login";

const navLinks = [
  { id: 1, content: <Link href="/shop">shop</Link>, action: "/" },
  {
    id: 2,
    content: (
      <button className="flex items-center gap-4">
        <Bag />
      </button>
    ),
    action: "/",
  },
  {
    id: 3,
    content: (
      <button className="flex items-center gap-4">
        <Login />
      </button>
    ),
    action: "/",
  },
];

const NavLinks = () => {
  return (
    <ul className="invisible hidden gap-[45px] items-center mlg:visible mlg:flex">
      {navLinks.map((link) => {
        return <li key={link.id}>{link.content}</li>;
      })}
    </ul>
  );
};

export default NavLinks;
