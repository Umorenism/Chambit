import { FaBell, FaCircleUser } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <div className="bg-gray-950 text-white shadow-lg fixed top-0 z-10 left-0 w-full h-[60px]">
      <div className="flex justify-between items-center mb-4 p-4">
        <div>
          <FaCircleUser />
        </div>
        <div>
          <button className="bg-gray-500 px-5 py-2 rounded-lg hover:bg-orange-500">
            Chambit
          </button>
        </div>
        <div>
          <FaBell />
        </div>
      </div>
    </div>
  );
};
