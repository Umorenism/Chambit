import { FaWallet } from "react-icons/fa6";

import { RiArrowDropDownLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { LuArrowDownUp } from "react-icons/lu";

export const SwapComp = () => {
  return (
    <div className=" h-screen  bg-slate-950 py-16 text-white ">
      <div className="text-center py-2 ">
        <h1 className="text-2xl">SWAP</h1>
      </div>
      <hr />
      <div className="mt-10">
        <div className=" px-4 mb-4 ">
          <div className="bg-gray-600 py-5 text-white rounded-lg relative">
            <div className="flex justify-between p-2 text-lg">
              <p className="flex justify-center items-center">
                From BNB SSmart Chain <RiArrowDropDownLine size={30} />
              </p>
              <p className="flex justify-center items-center gap-1">
                <FaWallet className="text-gray-100" />
                <span className=" text-orange-500">0</span>
              </p>
            </div>
            <div className="flex justify-between p-2 text-lg">
              <p className="flex justify-center items-center text-xl font-bold">
                BNB <FaAngleRight />
              </p>
              <p>
                0 <span className="text-orange-500">Max</span>
              </p>
            </div>
          </div>
          <div className="h-10 w-10 rounded-full bg-orange-500 flex justify-center items-center absolute top-[260px] left-44">
            <LuArrowDownUp size={25} className="text-white  " />
          </div>
          {/* card2 */}
          <div className="bg-gray-600 text-white py-5 mt-2  rounded-lg">
            <div className="flex justify-between p-2 text-lg">
              <p className="flex justify-center items-center">
                From BNB SSmart Chain <RiArrowDropDownLine size={30} />
              </p>
              <p className="flex justify-center items-center gap-1">
                <FaWallet />
                <span className="text-orange-500">0</span>
              </p>
            </div>
            <div className="flex justify-between p-2 text-lg">
              <p className="flex justify-center items-center text-xl font-bold">
                BNB <FaAngleRight />
              </p>
              <p>
                0 <span className="text-orange-500">Max</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>hello</div>
    </div>
  );
};
