import {
  FaEye,
  FaEyeSlash,
  FaTradeFederation,
  FaWallet,
} from "react-icons/fa6";
import { useState } from "react";

type VisibilityState = {
  totalEquity: boolean;
  walletBalance: boolean;
  usdt: boolean;
  usdc: boolean;
  kok: boolean;
};

const iconlist = [
  {
    name: "USDT",
    symbols: "$",
    subName: "Theater KOK",
  },
];
export const Asset = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({
    totalEquity: true,
    walletBalance: true,
    usdt: true,
    usdc: true,
    kok: true,
  });

  const toggleVisibility = (key: keyof VisibilityState) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen mt-20">
        <div className="py-4 bg-gray-800 rounded-lg flex justify-between items-center p-4 text-lg w-full">
          <div>
            <div>
              <h2 className="flex items-center gap-2 text-2xl">
                Total Equity
                {isVisible.totalEquity ? (
                  <FaEye
                    onClick={() => toggleVisibility("totalEquity")}
                    title="Hide"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => toggleVisibility("totalEquity")}
                    title="Show"
                  />
                )}
              </h2>
              {isVisible.totalEquity ? (
                <>
                  <h1>
                    45.21 <span>USD</span>
                  </h1>
                  <p>=--BTC</p>
                </>
              ) : (
                <h1>******</h1>
              )}
              <p>
                Today's P&L -2.41 <span>USD</span>
              </p>
            </div>
          </div>
          <div className="mb-16 text-sm text-green-700">0.00%</div>
        </div>
        {/* second card */}
        <div className="py-4 bg-gray-800 rounded-lg flex justify-between items-center p-2 text-lg w-full mt-2">
          <p>Wallet balance</p>
          {isVisible.walletBalance ? (
            <FaWallet
              onClick={() => toggleVisibility("walletBalance")}
              title="Hide"
            />
          ) : (
            <FaEye
              onClick={() => toggleVisibility("walletBalance")}
              title="Show"
            />
          )}
          {isVisible.walletBalance ? <p>0.00 USD</p> : <p>******</p>}
        </div>
        {/* third card */}
        <div className="py-4 rounded-lg flex justify-between items-center p-2 text-lg w-full mt-2 gap-4">
          <div className="w-full py-4 flex justify-center bg-gray-800 flex-col items-center rounded-md">
            <FaTradeFederation />
            <p className="p-1 text-sm">Deposit</p>
          </div>
          <div className="w-full py-4 flex justify-center bg-gray-800 flex-col items-center rounded-md">
            <FaTradeFederation />
            <p className="p-1 text-sm">Withdraw</p>
          </div>
          <div className="w-full py-4 flex justify-center bg-gray-800 flex-col items-center rounded-md">
            <FaTradeFederation />
            <p className="p-1 text-sm">Swap</p>
          </div>
          <div className="w-full py-4 flex justify-center bg-gray-800 flex-col items-center rounded-md">
            <FaTradeFederation />
            <p className="p-1 text-sm">Stack</p>
          </div>
        </div>
        {/* fourth card */}
        <div className="flex justify-between items-center p-2 text-lg w-full mt-2">
          <div className="flex flex-col w-full">
            <h1>Crypto</h1>
            <div className="flex py-4 items-center gap-2">
              <input type="checkbox" className="p-2" />
              <span className="text-sm">
                Hide zero balance customize collateral
              </span>
            </div>
            {iconlist.map((item, index) => (
              <div className="bg-gray-800 p-4 py-14 rounded-md" key={index}>
                <div className="flex justify-between p-2">
                  <div className="text-xl flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-green-500 flex justify-center items-center mb-5 mr-1 text-sm">
                      {item.symbols}
                    </div>
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      <span className="text-sm ml-1"> {item.subName}</span>
                    </div>
                  </div>
                  <div onClick={() => toggleVisibility("usdt")}>
                    {isVisible.usdt ? (
                      <>
                        <p>0.34457</p>
                        <h5>=3.49 {item.name}</h5>
                      </>
                    ) : (
                      <p>******</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between p-2">
                  <div className="text-xl flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-blue-500 flex justify-center items-center mb-5 mr-1 text-sm">
                      {item.symbols}
                    </div>
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      <span className="text-sm ml-1">{item.subName}</span>
                    </div>
                  </div>
                  <div onClick={() => toggleVisibility("usdc")}>
                    {isVisible.usdc ? (
                      <>
                        <p>0.34457</p>
                        <h5>=3.49 {item.name}</h5>
                      </>
                    ) : (
                      <p>******</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between p-2">
                  <div className="text-xl flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-green-500 flex justify-center items-center mb-5 mr-1 text-sm">
                      {item.symbols}
                    </div>
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      <span className="text-sm ml-1">{item.subName}</span>
                    </div>
                  </div>
                  <div onClick={() => toggleVisibility("kok")}>
                    {isVisible.kok ? (
                      <>
                        <p>0.34457</p>
                        <h5>=3.49 {item.name}</h5>
                      </>
                    ) : (
                      <p>******</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
