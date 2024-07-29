import { FaRegEyeSlash } from "react-icons/fa6";

export const TotalBal = () => {
  return (
    <div className="bg-gray-950 py-11 text-gray-100">
      <div className="max-w-sm overflow-y-auto bg-slate-950">
        <div className=" py-14 rounded-lg  flex justify-between items-center mt-4  p-5 text-lg w-full mb-2">
          <div className="">
            <div>
              <h2 className="flex items-center  gap-2">
                Total Assets <FaRegEyeSlash />
              </h2>
              <h1>
                45.21 <span>USD</span>
              </h1>
              <p>=0.00000784 BTC</p>
            </div>
          </div>
          <div className="mb-10 text-sm text-green-700">
            <button className="px-5 py-3 rounded-sm text-white bg-orange-500 font-semibold hover:bg-blue-600 duration-300 ease-in transition cursor-pointer">
              Deposite
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between items-center px-4 mt-10 overflow-y-auto max-w-sm">
        <div className="w-1/2 py-2 items-start flex">
          <div className="flex justify-center items-start gap-1 outline-none text-right border-none bg-none text-xl text-white flex-col p-2">
            <span className="flex items-center justify-center gap-2">
              Total Assets <FaRegEyeSlash />
            </span>
            <p>
              46.68 <span>USD</span>
            </p>
            <p>=0.00000784 BTC</p>
          </div>
          <p className="p-1"></p>
        </div>
        <div className="w-1/2  px-4 flex items-end">
          <button className="px-5 py-3 rounded-sm text-white bg-orange-500 font-semibold hover:bg-blue-600 duration-300 ease-in transition cursor-pointer">
            Deposite
          </button>
        </div>
      </div> */}
    </div>
  );
};
