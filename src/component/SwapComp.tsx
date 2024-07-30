import { FaWallet, FaAngleRight } from "react-icons/fa6";
import {
  RiArrowDropDownLine,
  RiLoader4Fill,
  RiEqualFill,
} from "react-icons/ri";
import { LuArrowDownUp } from "react-icons/lu";
import { CgSwap } from "react-icons/cg";
import { useState } from "react";

export const SwapComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPop, setIsPop] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading for 2 seconds
  };

  return (
    <div className="min-h-screen bg-slate-950 py-16 text-white relative">
      <div className="text-center py-2">
        <h1 className="text-2xl">SWAP</h1>
      </div>
      <hr className="border-gray-600" />
      <div className="mt-10 px-4">
        <div className="bg-gray-700 p-6 text-white rounded-lg relative mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              From BNB Smart Chain{" "}
              <RiArrowDropDownLine
                size={30}
                onClick={toggleDropdown}
                className="cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-1">
              <FaWallet className="text-gray-100" />
              <span className="text-orange-500">0</span>
            </div>
          </div>
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white py-4 p-4 rounded-lg shadow-lg text-slate-500 z-20">
              <div className="flex flex-col gap-2">
                <div className="bg-slate-200 p-2 rounded-lg flex justify-between">
                  <h1 className="text-orange-500 font-bold">BNB</h1>
                  <p>0.00002</p>
                </div>
                <div className="bg-slate-400 p-2 rounded-lg flex justify-between">
                  <h1 className="text-orange-500 font-bold">DONS</h1>
                  <p>0.000</p>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center text-xl font-bold">
              BNB{" "}
              <FaAngleRight onClick={toggleShown} className="cursor-pointer" />
            </div>
            {isShown && (
              <div className="absolute top-16 left-0 right-0 bg-white py-4 p-4 rounded-lg shadow-lg text-slate-500 z-20">
                <div className="flex flex-col gap-2">
                  <div className="bg-slate-200 p-2 rounded-lg flex justify-between">
                    <h1 className="text-orange-500 font-bold">BNB</h1>
                    <p>0.00002</p>
                  </div>
                  <div className="bg-slate-400 p-2 rounded-lg flex justify-between">
                    <h1 className="text-orange-500 font-bold">DONS</h1>
                    <p>0.000</p>
                  </div>
                </div>
              </div>
            )}
            <p>
              0 <span className="text-orange-500 cursor-pointer">Max</span>
            </p>
          </div>
          <div className="absolute top-[260px] left-1/2 transform -translate-x-1/2 bg-orange-500 rounded-full h-10 w-10 flex items-center justify-center z-30">
            <LuArrowDownUp size={25} className="text-white" />
          </div>
        </div>

        <div className="bg-gray-700 p-6 text-white rounded-lg relative mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              To BNB Smart Chain{" "}
              <RiArrowDropDownLine
                size={30}
                onClick={togglePlay}
                className="cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-1">
              <FaWallet className="text-gray-100" />
              <span className="text-orange-500">0</span>
            </div>
          </div>
          {isPlay && (
            <div className="absolute top-16 left-0 right-0 bg-white py-4 p-4 rounded-lg shadow-lg text-slate-500 z-20">
              <div className="flex flex-col gap-2">
                <div className="bg-slate-200 p-2 rounded-lg flex justify-between">
                  <h1 className="text-orange-500 font-bold">BNB</h1>
                  <p>0.00002</p>
                </div>
                <div className="bg-slate-400 p-2 rounded-lg flex justify-between">
                  <h1 className="text-orange-500 font-bold">DONS</h1>
                  <p>0.000</p>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center text-xl font-bold">
              BNB{" "}
              <FaAngleRight
                onClick={togglePopdown}
                className="cursor-pointer"
              />
            </div>
            {isPop && (
              <div className="absolute top-16 left-0 right-0 bg-white py-4 p-4 rounded-lg shadow-lg text-slate-500 z-20">
                <div className="flex flex-col gap-2">
                  <div className="bg-slate-200 p-2 rounded-lg flex justify-between">
                    <h1 className="text-orange-500 font-bold">BNB</h1>
                    <p>0.00002</p>
                  </div>
                  <div className="bg-slate-400 p-2 rounded-lg flex justify-between">
                    <h1 className="text-orange-500 font-bold">DONS</h1>
                    <p>0.000</p>
                  </div>
                </div>
              </div>
            )}
            <p>
              0 <span className="text-orange-500 cursor-pointer">Max</span>
            </p>
          </div>
        </div>

        <div className="bg-gray-700 p-4 text-white rounded-lg mb-4">
          <div className="flex justify-center items-center text-xl">
            <RiLoader4Fill className="mr-2" />
            1BNB <RiEqualFill className="mx-2" />
            7.227.055.535427 DONS
            <CgSwap className="ml-2" />
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="w-full py-4 rounded-xl text-white bg-orange-500 text-xl transition-transform transform hover:scale-105"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex justify-center items-center">
              <span className="animate-spin mr-2">
                <RiLoader4Fill />
              </span>
              Loading...
            </div>
          ) : (
            "Continue"
          )}
        </button>

        <div className="text-white mt-6 px-4">
          <div className="flex justify-between">
            <div className="w-1/2 py-6 p-2">
              <ul>
                <li>Provider</li>
                <li>Provider fee</li>
                <li>Slippage tolerance</li>
              </ul>
            </div>
            <div className="w-1/2 py-6 p-2 text-right">
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
  );
};
