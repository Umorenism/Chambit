import { FaRegEyeSlash } from "react-icons/fa6";

export const TotalBal = () => {
  return (
    <div className="bg-gray-950 py-11 text-gray-100">
      <div className="flex justify-between items-center px-4 gap-4 text-start">
        <div className="w-1/2 py-2">
          <h1 className="flex justify-center items-center gap-1">
            Total Assets <FaRegEyeSlash />
          </h1>
          <h2 className="flex justify-center items-center gap-1 outline-none border-none bg-none text-xl text-white">
            46.68 <span>USD</span>
          </h2>
          <p className="p-1">= 0.00000000784 BTC</p>
        </div>
        <div className="w-1/2  px-4">
          <button className="px-4 py-1 rounded-sm bg-orange-500 ">
            Deposite
          </button>
        </div>
      </div>
    </div>
  );
};
