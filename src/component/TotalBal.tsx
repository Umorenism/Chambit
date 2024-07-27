import { FaRegEyeSlash } from "react-icons/fa6";

export const TotalBal = () => {
  return (
    <div className="bg-gray-950 py-11 text-gray-100">
      <div className="flex justify-between items-center px-4 gap-4 text-start mt-10">
        <div className="w-1/2 py-2">
          <h1 className="flex justify-center items-center gap-1">
            Total Assets <FaRegEyeSlash />
          </h1>
          <h2 className="flex justify-center items-center gap-1 outline-none border-none bg-none text-xl text-white">
            46.68 <span>USD</span>
          </h2>
          <p className="p-1">= 0.00000784 BTC</p>
        </div>
        <div className="w-1/2  px-4">
          <button className="px-5 py-3 rounded-sm text-white bg-orange-500 font-semibold hover:bg-blue-600 duration-300 ease-in transition cursor-pointer">
            Deposite
          </button>
        </div>
      </div>
    </div>
  );
};
