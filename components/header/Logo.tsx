import Link  from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-xl font-light cursor-pointer text-slate-500">apparell.</h1>
    </Link>
  );
};

export default Logo;
