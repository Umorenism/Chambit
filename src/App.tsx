import { Outlet } from "react-router-dom";
import { Navbar } from "./component/navbar/navbar/Navbar";
import { Footer } from "./component/footer/Footer";

export const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
