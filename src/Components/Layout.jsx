import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/admin" ||
    location.pathname.startsWith("/admin/dashboard");

  return (
    <>
      {!hideLayout && <Navbar />}

      <Outlet />

      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;