import { FaWallet } from "react-icons/fa6";

import { RiArrowDropDownLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { LuArrowDownUp } from "react-icons/lu";
import { RiLoader4Fill } from "react-icons/ri";
import { RiEqualFill } from "react-icons/ri";
import { CgSwap } from "react-icons/cg";
import { useState } from "react";

export const SwapComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPop, setIsPop] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isPlay, setIsPlay] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const togglePopdown = () => {
    setIsPop(!isPop);
  };
  const toggleShown = () => {
    setIsShown(!isShown);
  };
  const togglePlay = () => {
    setIsPlay(!isPlay);
  };
  return (
    <div className=" min-h-screen  bg-slate-950 py-16 text-white ">
      <div className="text-center py-2 ">
        <h1 className="text-2xl">SWAP</h1>
      </div>
      <hr />
      <div className="mt-10">
        <div className=" px-4 mb-4 ">
          <div className="bg-gray-600 py-5 text-white rounded-lg relative">
            <div className="flex justify-between p-2 text-lg">
              <p className="flex justify-center items-center relative">
                From BNB SSmart Chain{" "}
                <RiArrowDropDownLine size={30} onClick={toggleDropdown} />
                {/* bnb Dropdown */}
                {isOpen && (
                  <div className="bg-white absolute top-[120px]  py-4 p-4 flex flex-col m-2 rounded-lg left-0 right-0 min-w-full min-h-[400px] items-center text-slate-500">
                    <div className="flex justify-between  w-full flex-col gap-2">
                      <div className="bg-slate-200 w-full flex justify-between p-2 rounded-lg">
                        <h1 className="text-orange-500 font-bold">BNB</h1>
                        <p>0.00002</p>
                      </div>
                      <div className="bg-slate-400 w-full flex justify-between p-2 rounded-lg">
                        <h1 className="text-orange-500 font-bold">DONS</h1>
                        <p>0.000</p>
                      </div>
                    </div>
                  </div>
                )}
              </p>
              <p className="flex justify-center items-center gap-1">
                <FaWallet className="text-gray-100" />
                <span className=" text-orange-500">0</span>
              </p>
            </div>
            <div className="flex  justify-between p-2 text-lg">
              <p className="flex justify-center items-center text-xl font-bold">
                BNB <FaAngleRight onClick={toggleShown} />
              </p>
              {/* bnb Dropdown */}
              {isShown && (
                <div className="bg-white absolute top-[120px]  py-4 p-4 flex flex-col m-2 rounded-lg left-0 right-0 min-w-full min-h-[400px] items-center text-slate-500">
                  <div className="flex justify-between  w-full flex-col gap-2">
                    <div className="bg-slate-200 w-full flex justify-between p-2 rounded-lg">
                      <h1 className="text-orange-500 font-bold">BNB</h1>
                      <p>0.00002</p>
                    </div>
                    <div className="bg-slate-400 w-full flex justify-between p-2 rounded-lg">
                      <h1 className="text-orange-500 font-bold">DONS</h1>
                      <p>0.000</p>
                    </div>
                  </div>
                </div>
              )}
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
                From BNB SSmart Chain{" "}
                <RiArrowDropDownLine size={30} onClick={togglePlay} />
                {/* bnb Dropdown */}
                {isPlay && (
                  <div className="bg-white absolute top-[400px]  py-4 p-4 flex flex-col m-2 rounded-lg left-0 right-0 min-w-full min-h-[400px] items-center text-slate-500">
                    <div className="flex justify-between  w-full flex-col gap-2">
                      <div className="bg-slate-200 w-full flex justify-between p-2 rounded-lg">
                        <h1 className="text-orange-500 font-bold">BNB</h1>
                        <p>0.00002</p>
                      </div>
                      <div className="bg-slate-400 w-full flex justify-between p-2 rounded-lg">
                        <h1 className="text-orange-500 font-bold">DONS</h1>
                        <p>0.000</p>
                      </div>
                    </div>
                  </div>
                )}
              </p>
              <p className="flex justify-center items-center gap-1">
                <FaWallet />
                <span className="text-orange-500">0</span>
              </p>
            </div>
            <div className="flex justify-between p-2 text-lg">
              <p className="flex justify-center items-center text-xl font-bold">
                BNB <FaAngleRight onClick={togglePopdown} />
              </p>
              {/* bnb Dropdown */}
              {isPop && (
                <div className="bg-white absolute top-[400px]  py-4 p-4 flex flex-col m-2 rounded-lg left-0 right-0 min-w-full min-h-[400px] items-center text-slate-500">
                  <div className="flex justify-between  w-full flex-col gap-2">
                    <div className="bg-slate-200 w-full flex justify-between p-2 rounded-lg">
                      <h1 className="text-orange-500 font-bold">BNB</h1>
                      <p>0.00002</p>
                    </div>
                    <div className="bg-slate-400 w-full flex justify-between p-2 rounded-lg">
                      <h1 className="text-orange-500 font-bold">DONS</h1>
                      <p>0.000</p>
                    </div>
                  </div>
                </div>
              )}
              <p>
                0 <span className="text-orange-500">Max</span>
              </p>
            </div>
          </div>
          {/* mini card */}
          <div className=" bg-gray-600 text-white py-2 mt-2  rounded-lg">
            <div className="px-2 py-4 flex rounded-lg bg-slate-600 justify-center items-center text-xl">
              <span className="flex items-center ">
                <RiLoader4Fill />
                1BNB
                <RiEqualFill />
              </span>
              7.227.055.535427 DONS
              <CgSwap />
            </div>
          </div>
          <button className=" w-full mt-5 py-4 rounded-xl text-white bg-gray-600 text-xl ">
            Continue
          </button>
          <div className="text-white mt-3 py-4 h-auto px-4">
            <div className="flex justify-between gap-14">
              <div className="w-1/2 py-6 p-2 items-start flex">
                <ul>
                  <li>Provider</li>
                  <li>Provider fee</li>
                  <li>Slippage tolerance</li>
                </ul>
              </div>
              <div className="w-1/2 py-6 p-2 i items-end flex">
                <ul>
                  <li>0x</li>
                  <li>47356 DONS (=$3.59)</li>
                  <li>7.0%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// import { FaWallet, FaAngleRight } from "react-icons/fa6";
// import {
//   RiArrowDropDownLine,
//   RiLoader4Fill,
//   RiEqualFill,
// } from "react-icons/ri";
// import { LuArrowDownUp } from "react-icons/lu";
// import { CgSwap } from "react-icons/cg";
// import { useState } from "react";

// export const SwapComp = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isPop, setIsPop] = useState(false);
//   const [isShown, setIsShown] = useState(false);
//   const [isPlay, setIsPlay] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   const togglePopdown = () => {
//     setIsPop(!isPop);
//   };
//   const toggleShown = () => {
//     setIsShown(!isShown);
//   };
//   const togglePlay = () => {
//     setIsPlay(!isPlay);
//   };

//   return (
//     <div className="min-h-screen bg-slate-950 py-16 text-white md:hidden">
//       <div className="text-center py-2">
//         <h1 className="text-2xl">SWAP</h1>
//       </div>
//       <hr />
//       <div className="mt-10">
//         <div className="px-4 mb-4">
//           <div className="bg-gray-600 py-5 text-white rounded-lg relative">
//             <div className="flex justify-between p-2 text-lg">
//               <p className="flex justify-center items-center relative">
//                 From BNB Smart Chain{" "}
//                 <RiArrowDropDownLine size={30} onClick={toggleDropdown} />
//                 {isOpen && (
//                   <div className="bg-white absolute top-16 py-4 p-4 flex flex-col m-2 rounded-lg left-0 right-0 min-w-full min-h-[400px] items-center text-slate-500 z-10">
//                     <div className="flex justify-between w-full flex-col gap-2">
//                       <div className="bg-slate-200 w-full flex justify-between p-2 rounded-lg">
//                         <h1 className="text-orange-500 font-bold">BNB</h1>
//                         <p>0.00002</p>
//                       </div>
//                       <div className="bg-slate-400 w-full flex justify-between p-2 rounded-lg">
//                         <h1 className="text-orange-500 font-bold">DONS</h1>
//                         <p>0.000</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </p>
//               <p className="flex justify-center items-center gap-1">
//                 <FaWallet className="text-gray-100" />
//                 <span className="text-orange-500">0</span>
//               </p>
//             </div>
//             <div className="flex justify-between p-2 text-lg">
//               <p className="flex justify-center items-center text-xl font-bold">
//                 BNB <FaAngleRight onClick={toggleShown} />
//               </p>
//               {isShown && (
//                 <div className="bg-white absolute top-16 py-4 p-4 flex flex-col m-2 rounded-lg left-0 right-0 min-w-full min-h-[400px] items-center text-slate-500 z-10">
//                   <div className="flex justify-between w-full flex-col gap-2">
//                     <div className="bg-slate-200 w-full flex justify-between p-2 rounded-lg">
//                       <h1 className="text-orange-500 font-bold">BNB</h1>
//                       <p>0.00002</p>
//                     </div>
//                     <div className="bg-slate-400 w-full flex justify-between p-2 rounded-lg">
//                       <h1 className="text-orange-500 font-bold">DONS</h1>
//                       <p>0.000</p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <p>
//                 0 <span className="text-orange-500">Max</span>
//               </p>
//             </div>
//           </div>
//           <div className="h-10 w-10 rounded-full bg-orange-500 flex justify-center items-center absolute top-64 left-1/2 transform -translate-x-1/2">
//             <LuArrowDownUp size={25} className="text-white" />
//           </div>
//           <div className="bg-gray-600 text-white py-5 mt-2 rounded-lg relative">
//             <div className="flex justify-between p-2 text-lg">
//               <p className="flex justify-center items-center">
//                 To BNB Smart Chain{" "}
//                 <RiArrowDropDownLine size={30} onClick={togglePlay} />
//                 {isPlay && (
//                   <div className="bg-white absolute top-16 py-4 p-4 flex flex-col m-2 rounded-lg left-0 right-0 min-w-full min-h-[400px] items-center text-slate-500 z-10">
//                     <div className="flex justify-between w-full flex-col gap-2">
//                       <div className="bg-slate-200 w-full flex justify-between p-2 rounded-lg">
//                         <h1 className="text-orange-500 font-bold">BNB</h1>
//                         <p>0.00002</p>
//                       </div>
//                       <div className="bg-slate-400 w-full flex justify-between p-2 rounded-lg">
//                         <h1 className="text-orange-500 font-bold">DONS</h1>
//                         <p>0.000</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </p>
//               <p className="flex justify-center items-center gap-1">
//                 <FaWallet />
//                 <span className="text-orange-500">0</span>
//               </p>
//             </div>
//             <div className="flex justify-between p-2 text-lg">
//               <p className="flex justify-center items-center text-xl font-bold">
//                 BNB <FaAngleRight onClick={togglePopdown} />
//               </p>
//               {isPop && (
//                 <div className="bg-white absolute top-16 py-4 p-4 flex flex-col m-2 rounded-lg left-0 right-0 min-w-full min-h-[400px] items-center text-slate-500 z-10">
//                   <div className="flex justify-between w-full flex-col gap-2">
//                     <div className="bg-slate-200 w-full flex justify-between p-2 rounded-lg">
//                       <h1 className="text-orange-500 font-bold">BNB</h1>
//                       <p>0.00002</p>
//                     </div>
//                     <div className="bg-slate-400 w-full flex justify-between p-2 rounded-lg">
//                       <h1 className="text-orange-500 font-bold">DONS</h1>
//                       <p>0.000</p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <p>
//                 0 <span className="text-orange-500">Max</span>
//               </p>
//             </div>
//           </div>
//           <div className="bg-gray-600 text-white py-2 mt-2 rounded-lg">
//             <div className="px-2 py-4 flex rounded-lg bg-slate-600 justify-center items-center text-xl">
//               <span className="flex items-center">
//                 <RiLoader4Fill />
//                 1BNB
//                 <RiEqualFill />
//               </span>
//               7.227.055.535427 DONS
//               <CgSwap />
//             </div>
//           </div>
//           <button className="w-full mt-5 py-4 rounded-xl text-white bg-gray-600 text-xl">
//             Continue
//           </button>
//           <div className="text-white mt-3 py-4 h-auto px-4">
//             <div className="flex justify-between gap-14">
//               <div className="w-1/2 py-6 p-2 items-start flex">
//                 <ul>
//                   <li>Provider</li>
//                   <li>Provider fee</li>
//                   <li>Slippage tolerance</li>
//                 </ul>
//               </div>
//               <div className="w-1/2 py-6 p-2 items-end flex">
//                 <ul>
//                   <li>0x</li>
//                   <li>47356 DONS (=$3.59)</li>
//                   <li>7.0%</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
