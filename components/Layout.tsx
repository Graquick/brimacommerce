import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from './header';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}
