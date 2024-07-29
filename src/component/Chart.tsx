import { FaArrowDown91, FaBatteryEmpty, FaCircle } from "react-icons/fa6";
import { useState } from "react";

export const Chart = () => {
  const [value, setValue] = useState(0.00823);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 0.00001);
  };

  const handleDecrement = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 0.00001 : 0));
  };

  return (
    <div className="flex justify-center items-center bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen h-auto mt-20">
        <div className="flex justify-between">
          <button className="bg-gray-500 w-1/2 py-2">Chart</button>
          <button className="bg-gray-800 w-1/2 py-2">Trade</button>
        </div>

        <div className="flex justify-between mt-6 py-4">
          <div>
            <h1>
              RPK/USDT{" "}
              <span className="bg-green-300 rounded-md py-1 px-4">
                +197.11%
              </span>
            </h1>
          </div>
          <div>
            <h1 className="flex gap-4 justify-center items-center">
              <p className="text-green-600">0.00%</p>
              <h2>📅</h2>
              <p>...</p>
            </h1>
          </div>
        </div>

        <div className="flex justify-between mt-5 gap-2">
          <div className="w-1/2 py-4 p-2">
            <div className="flex justify-between">
              <button className="bg-green-500 w-1/2 py-2">BUY</button>
              <button className="bg-red-600 w-1/2 py-2">SELL</button>
            </div>

            <div className="text-white mt-3">
              <div className="flex justify-between p-1 gap-2">
                <h1>Available</h1>
                <p>0.0052USDT</p>
              </div>
              <div className="bg-gray-700 rounded-md py-2 flex justify-between p-2">
                <h1>Limit</h1>
                <p>v</p>
              </div>

              <div className="bg-gray-500 rounded-md mt-3">
                <div className="flex justify-between p-2">
                  <h1>{value.toFixed(5)}</h1>
                  <div className="flex gap-2">
                    <button onClick={handleDecrement}>-</button>
                    <button onClick={handleIncrement}>+</button>
                  </div>
                </div>
              </div>

              <p className="py-2">= {value.toFixed(5)} USD</p>
              <div className="bg-gray-500 rounded-md mt-3">
                <div className="flex justify-between p-2">
                  <h1>QTY</h1>
                  <p>RPK</p>
                </div>
              </div>

              <div className="flex items-center mt-2">
                <h1 className="h-4 rounded-full bg-orange-500 w-4 mt-4"></h1>
                <p className="h-1 w-12 bg-slate-500 mt-4"></p>
                <h1 className="h-4 rounded-full bg-gray-300 w-4 mt-4"></h1>
                <p className="h-1 w-12 bg-slate-500 mt-4"></p>
                <h1 className="h-4 rounded-full bg-gray-300 w-4 mt-4"></h1>
                <p className="h-1 w-10 bg-slate-500 mt-4"></p>
                <h1 className="h-4 rounded-full bg-gray-300 w-4 mt-4"></h1>
              </div>
              <div className="bg-slate-500 rounded-md mt-3">
                <div className="flex justify-between p-2">
                  <h1>Order value</h1>
                  <p>USDT</p>
                </div>
              </div>

              <div className="bg-gray-500 rounded-md mt-3 text-center">
                <h1>TP/SL</h1>
              </div>

              <div className="mt-3">
                <div className="flex justify-between p-2">
                  <h1>
                    <input type="checkbox" />
                    <span>Post-only</span>
                  </h1>
                  <p>GTC</p>
                </div>
              </div>
              <div className="mt-10">
                <button className="bg-green-500 w-full py-4 rounded-md text-white text-lg">
                  Buy RPK
                </button>
              </div>
            </div>
          </div>

          <div className="w-1/2 py-4 p-2">
            <div className="flex justify-between">
              <h1 className="bg-green-500 w-1/2 py-2 text-start p-2">
                Price
                <div>(USDT0)</div>
              </h1>
              <p className="bg-red-600 w-1/2 py-2 text-end p-2">
                QTY
                <div>(USDT0)</div>
              </p>
            </div>
            <div className="mt-4">
              <div className="py-2 mb-2">
                <div className="flex justify-between p-2">
                  <h1 className="text-red-600">0.00825</h1>
                  <p>2.345k</p>
                </div>
                <div className="flex justify-between p-2">
                  <h1 className="text-red-600">0.00825</h1>
                  <p>2.345k</p>
                </div>
                <div className="flex justify-between p-2">
                  <h1 className="text-red-600">0.00825</h1>
                  <p>2.345k</p>
                </div>
                <div className="flex justify-between p-2">
                  <h1 className="text-red-600">0.00825</h1>
                  <p>2.345k</p>
                </div>
                <p className="text-xl">0.00823</p>
                <h5>=0.0082 USD</h5>
              </div>
              <div className="py-2">
                <div className="flex justify-between p-2">
                  <h1 className="text-green-600">0.00825</h1>
                  <p>2.345k</p>
                </div>
                <div className="flex justify-between p-2">
                  <h1 className="text-green-600">0.00825</h1>
                  <p>2.345k</p>
                </div>
                <div className="flex justify-between p-2">
                  <h1 className="text-green-600">0.00825</h1>
                  <p>2.345k</p>
                </div>
                <div className="flex justify-between p-2">
                  <h1 className="text-green-600">0.00825</h1>
                  <p>2.345k</p>
                </div>
                <div className="flex justify-between gap-2">
                  <button className="w-[40%] bg-green-300">
                    <span className="h-4 w-4 border px-2 bg-green-300">B</span>
                    11%
                  </button>
                  <button className="w-[60%] bg-red-400">
                    89% <span className="h-4 w-4 border px-2">$</span>
                  </button>
                </div>
                <div className="flex justify-between mt-2">
                  <button className="bg-gray-500 px-10">0.00001</button>
                  <div className="h-5 w-5 rounded-md border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex justify-between p-2">
          <div>
            <div className="flex gap-4">
              <h1>Orders (1)</h1>
              <p>Assets</p>
              <h5>Tools (0)</h5>
            </div>
          </div>
          <p className="flex gap-1">
            <FaCircle />
            <FaBatteryEmpty />
          </p>
        </div>
        <div className="mt-4">
          <div></div>
          <div className="flex justify-between p-2">
            <div className="flex justify-center items-center">
              <input type="checkbox" className="mr-2" />
              All Markets <span className="ml-2">All Types</span>
              <FaArrowDown91 className="ml-3" />
            </div>
            <button>Cancel All</button>
          </div>
          <hr className="w-full h-1 bg-slate-100 mt-4" />
        </div>
        <div className="min-h-screen mt-10">
          <div className="flex justify-between items-center p-4">
            <h1 className="flex gap-2">
              AVAIL/USDT{" "}
              <span className="px-4 rounded-md bg-red-400 flex justify-center items-center">
                sell
              </span>
            </h1>
            <p>Limit</p>
          </div>
          <div className="flex justify-between items-center p-4">
            <h1 className="flex gap-2">
              AVAIL/USDT{" "}
              <span className="px-4 rounded-md bg-red-400 flex justify-center items-center">
                sell
              </span>
            </h1>
            <p>Limit</p>
          </div>
          <div className="flex justify-between items-center p-4">
            <h1 className="flex gap-2">
              AVAIL/USDT{" "}
              <span className="px-4 rounded-md bg-red-400 flex justify-center items-center">
                sell
              </span>
            </h1>
            <p>Limit</p>
          </div>
        </div>
      </div>
    </div>
  );
};
