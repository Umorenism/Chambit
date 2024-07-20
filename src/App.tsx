import { Outlet } from "react-router-dom";
import { Navbar } from "./component/navbar/navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
