import { FaEye, FaTradeFederation, FaWallet } from "react-icons/fa6";

export const Asset = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen mt-20">
        <div className=" py-4 bg-black rounded-lg  flex justify-between items-center p-4 text-lg w-full">
          <div className="">
            <div>
              <h2 className="flex items-center  gap-2">
                Total Equity
                <FaEye />
              </h2>
              <h1>
                45.21 <span>USD</span>
              </h1>
              <p>=--BTC</p>
              <p>
                Todays P&L -2.41 <span>USD</span>
              </p>
            </div>
          </div>
          <div className="mb-16 text-sm text-green-700">0.00%</div>
        </div>
        {/* second card */}
        <div className=" py-4 bg-black rounded-lg  flex justify-between items-center p-2 text-lg w-full mt-2">
          <p>Wallet balance</p>
          <FaWallet />
        </div>
        {/* third card */}
        <div className=" py-4 rounded-lg  flex justify-between items-center p-2 text-lg w-full mt-2 gap-4">
          <div className="w-full py-4 flex justify-center bg-black flex-col items-center rounded-md">
            <FaTradeFederation />
            <p className="p-1  text-sm">Deposit</p>
          </div>
          <div className="w-full py-4 flex justify-center bg-black flex-col items-center rounded-md">
            <FaTradeFederation />
            <p className="p-1  text-sm">withdrew</p>
          </div>
          <div className="w-full py-4 flex justify-center bg-black flex-col items-center rounded-md">
            <FaTradeFederation />
            <p className="p-1  text-sm">Swap</p>
          </div>
          <div className="w-full py-4 flex justify-center bg-black flex-col items-center rounded-md">
            <FaTradeFederation />
            <p className="p-1 text-sm">Stack</p>
          </div>
        </div>
        {/* forth card */}
        <div className=" flex justify-between items-center p-2 text-lg w-full mt-2">
          <div className="flex flex-col w-full">
            <h1>Crypto</h1>
            <div className="flex py-4 items-center gap-2   ">
              <input type="checkbox" className="p-2" />
              <span>Hide zero balance customize collateral</span>
            </div>
            <div className="bg-black min-h-screen p-4 py-4 rounded-md">
              <div className="flex justify-between p-2">
                <div className="text-xl flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-green-500 flex justify-center items-center mb-5 mr-1 text-sm">
                    T
                  </div>
                  <div className="flex flex-col">
                    <span> USDT</span>
                    <span className="text-sm ml-1">Tether USDT</span>
                  </div>
                </div>
                <div>
                  <p>0.34457</p>
                  <h5>=3.49 USD</h5>
                </div>
              </div>

              <div className="flex justify-between p-2">
                <div className="text-xl flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-blue-500 flex justify-center items-center mb-5 mr-1 text-sm">
                    $
                  </div>
                  <div className="flex flex-col">
                    <span> USDC</span>
                    <span className="text-sm ml-1">USD Coins</span>
                  </div>
                </div>
                <div>
                  <p>0.34457</p>
                  <h5>=3.49 USD</h5>
                </div>
              </div>
              <div className="flex justify-between p-2">
                <div className="text-xl flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-green-500 flex justify-center items-center mb-5 mr-1 text-sm">
                    T
                  </div>
                  <div className="flex flex-col">
                    <span> KOK</span>
                    <span className="text-sm ml-1">KOK</span>
                  </div>
                </div>
                <div>
                  <p>0.34457</p>
                  <h5>=3.49 USD</h5>
                </div>
              </div>
              <div className="flex justify-between p-2">
                <div className="text-xl flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-green-500 flex justify-center items-center mb-5 mr-1 text-sm">
                    T
                  </div>
                  <div className="flex flex-col">
                    <span> USDT</span>
                    <span className="text-sm ml-1">Tether USDT</span>
                  </div>
                </div>
                <div>
                  <p>0.34457</p>
                  <h5>=3.49 USD</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
