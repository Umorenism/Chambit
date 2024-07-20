import { FaCircleUser } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <div className="bg-gray-950 text-white py-4 md:px-14 px-4 fixed top-0 left-0 w-full">
      <div className="flex justify-between items-center p-4">
        <div>
          <FaCircleUser />
        </div>
        <div>
          <button>Exchange</button>
        </div>
        <div>icos</div>
      </div>
    </div>
  );
};
