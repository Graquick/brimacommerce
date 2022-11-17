import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {

  return (
    <header className="fixed top-0 z-20 flex items-center justify-between w-full h-16 px-4">
      <Logo/>
      <Nav />
    </header>
  );
};

export default Header;
