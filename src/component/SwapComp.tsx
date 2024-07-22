import { FaWallet } from "react-icons/fa6";

import { RiArrowDropDownLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { LuArrowDownUp } from "react-icons/lu";
import { RiBankLine } from "react-icons/ri";

export const SwapComp = () => {
  return (
    <div className=" h-screen  bg-slate-950 py-16 text-white ">
      <div className="text-center py-2 ">
        <h1 className="text-2xl">SWAP</h1>
      </div>
      <hr />
      <div className="mt-10">
        <div className=" px-4 mb-4 ">
          <div className="bg-slate-500 py-5 text-orange-500 rounded-lg relative">
            <div className="flex justify-between p-2 text-lg">
              <p className="flex justify-center items-center">
                From BNB SSmart Chain <RiArrowDropDownLine size={30} />
              </p>
              <p className="flex justify-center items-center gap-1">
                <FaWallet />0
              </p>
            </div>
            <div className="flex justify-between p-2 text-lg">
              <p className="flex justify-center items-center text-xl font-bold">
                BNB <FaAngleRight />
              </p>
              <p>0</p>
            </div>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-200 flex justify-center items-center absolute top-[260px] left-44">
            <LuArrowDownUp size={25} className="text-gray-950" />
          </div>
          {/* card2 */}
          <div className="bg-slate-500 py-5 mt-2 text-orange-500 rounded-lg">
            <div className="flex justify-between p-2 text-lg">
              <p className="flex justify-center items-center">
                From BNB SSmart Chain <RiArrowDropDownLine size={30} />
              </p>
              <p className="flex justify-center items-center gap-1">
                <FaWallet />0
              </p>
            </div>
            <div className="flex justify-between p-2 text-lg">
              <p className="flex justify-center items-center text-xl font-bold">
                BNB <FaAngleRight />
              </p>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
      <div>hello</div>
    </div>
  );
};
