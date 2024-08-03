import { useState } from "react";
import { FaRegEyeSlash, FaRegEye, FaSearchengin } from "react-icons/fa6";

export const TotalBal = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="bg-gray-950 py-5 text-gray-100">
      <div className="max-w-sm overflow-y-auto bg-slate-950">
        <div className="text-white px-4 ml-5 bg-transparent border rounded-lg py-1 mt-6 flex items-center gap-2">
          <FaSearchengin size={20} />
          <input
            type=""
            className="w-full h-full outline-none bg-transparent text-slate-200 font-bold text-sm mb-2 mt-2"
          />
        </div>
        <div className="py-4 rounded-lg flex justify-between items-center mt-4 p-5 text-lg w-full mb-2">
          <div>
            <div>
              <h2 className="flex items-center gap-2 ">
                Total Assets{" "}
                <span onClick={toggleVisibility} className="cursor-pointer">
                  {isHidden ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </h2>
              <h1>
                {isHidden ? "****" : "45.21"} <span>USD</span>
              </h1>
              {/* <p>{isHidden ? "****" : "=0.00000784 BTC"}</p> */}
            </div>
          </div>
          <div className=" text-sm text-green-700">
            <button className="px-5 py-3 rounded-sm text-white bg-orange-500 font-semibold hover:bg-blue-600 duration-300 ease-in transition cursor-pointer">
              Deposite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
