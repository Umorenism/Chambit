import { FaBell, FaCircleUser } from "react-icons/fa6";
import { IoMdHeadset } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../../asset/chambit.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gray-950 text-white shadow-lg fixed top-0 z-10 left-0 w-full h-[60px]">
      <div className="flex justify-between items-center mb-4 p-4">
        <div className="relative ">
          <div>
            <FaCircleUser size={25} onClick={toggleDropdown} />
          </div>
        </div>
        {isOpen && (
          <div className="bg-white absolute top-[60px] left-0 text-slate-800 py-4 p-2 flex flex-col m-2 rounded-lg min-w-[80%]">
            <Link to="/login" className="py-2 font-bold">
              Login
            </Link>
            <hr />
            <Link to="/signup" className="py-2 font-bold">
              Sign up
            </Link>
          </div>
        )}
        <div>
          {/* <button className="bg-white px-5 py-2 rounded-lg hover:bg-orange-500 font-bold text-blue-500">
            CHAMBIT
          </button> */}
          <img src={logo} alt="logo" className="h-10 w-40" />
        </div>
        <div className="flex gap-4">
          <IoMdHeadset className="text-white" size={25} />
          <FaBell size={25} />
        </div>
      </div>
    </div>
  );
};
