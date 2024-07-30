import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Long } from "./Long";
import { TradeComponent } from "./TradeComponent";
import { useState } from "react";

export const Spot = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setOpen(!open);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen mt-20 flex flex-col">
        <div className="flex justify-between items-center">
          <button className="bg-gray-500 px-10 py-2 rounded-md">Spot</button>
          <Link to="/pp">
            <button className="bg-gray-500 px-10 py-2 rounded-md">P2P</button>
          </Link>
        </div>

        {/* subheader */}
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-2xl">
            MX/USDT{" "}
            <span className="text-sm bg-green-300 rounded-md">+197.11%</span>
          </h1>
          <p>200x</p>
          <div className="flex gap-2">
            <h1>icon</h1>
            <p>..</p>
          </div>
        </div>
        {/* trade side component */}

        <div className="min-h-[500px] bg-black p-4  mt-5 text-black flex justify-between gap-2">
          <div className="w-1/2 bg-black text-white">
            <div>
              <div className="flex justify-between p-2">
                <div>
                  <h1>Price</h1>
                  <p className="text-center">(USDT)</p>
                </div>
                <div>
                  <h1>Amount</h1>
                  <p className="text-center">(MX)</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between p-2">
                  <h1 className="text-red-500">4.0298</h1>
                  <p>118.15</p>
                </div>
                <div className="flex justify-between p-2">
                  <h1 className="text-red-500">4.0298</h1>
                  <p>118.15</p>
                </div>
                <div className="flex justify-between p-2">
                  <h1 className="text-red-500">4.0298</h1>
                  <p>118.15</p>
                </div>

                <div className="mt-4 text-center">
                  <h1 className="text-2xl text-green-500">4.0241</h1>
                  <p>$4.0231</p>
                </div>
              </div>
            </div>

            <div className="bg-black">
              <div className="flex justify-between p-2">
                <h1 className="text-green-500">4.0298</h1>
                <p>118.15</p>
              </div>
              <div className="flex justify-between p-2">
                <h1 className="text-green-500">4.0298</h1>
                <p>118.15</p>
              </div>
              <div className="flex justify-between p-2">
                <h1 className="text-green-500">4.0298</h1>
                <p>118.15</p>
              </div>
              <div className="flex justify-between p-2">
                <h1 className="text-green-500">4.0298</h1>
                <p>118.15</p>
              </div>
              <div className="flex justify-between p-2">
                <h1 className="text-green-500">4.0298</h1>
                <p>118.15</p>
              </div>

              <div className="p-2 flex justify-between items-center gap-2">
                <button className="bg-gray-600 px-6 p-2 flex items-center justify-between rounded-md">
                  <p> 0.0001</p>
                  <div>
                    <FaArrowDown />
                  </div>
                </button>
                <div className="h-8 w-10 bg-slate-400 rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="w-1/2 ">
            <div className="flex">
              <button className="bg-gray-800 w-1/2 py-2 rounded-md">Buy</button>
              <button className="bg-red-500 w-1/2 py-2 rounded-md">Sell</button>
            </div>

            <div className="bg-gray-800 mt-6 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                <p>1</p>
                <h1>Limit</h1>
                <FaArrowDown />
              </div>
            </div>
            <div className="bg-gray-800 mt-4 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                <p>-</p>
                <h1>4.0255</h1>
                <p>+</p>
              </div>
            </div>
            <p className="text-white py-2">$4.024</p>
            <div className="bg-gray-800 mt-4 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                <p>-</p>
                <h1>QUANTITY(MX)</h1>
                <p>+</p>
              </div>
            </div>
            <div className="py-4">
              <Long />
            </div>
            <div className="bg-gray-800 mt-4 py-2 rounded-md">
              <div className="flex justify-center items-center px-2 text-white">
                <h1 className="text-xl">Total(USDT)</h1>
              </div>
            </div>

            <div className="flex text-white gap-2 mt-4">
              <input type="checkbox" />
              <p>
                TP/SL <span></span>
              </p>
            </div>

            <div className="bg-gray-800 mt-2 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                <p>Avail</p>
                <p className="h-3 w-3 rounded-full bg-blue-600 flex justify-center items-center text-sm">
                  +
                </p>
              </div>
            </div>

            <div className="mt-2">
              <button className="bg-red-500 w-full py-2 rounded-md text-white">
                sell mx
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-950 mt-4 py-4 justify-between items-center">
          <div className="flex gap-4 items-center justify-between">
            <h1 className="text-xl p-2 ">
              Open Order(0) <span className="ml-4">Post</span>
            </h1>
            <p>icons</p>
          </div>
          <hr />
          <div className="mt-2 p-2 flex gap-2">
            <input type="checkbox" />
            <p>Hide other pairs</p>
          </div>
          <hr />
          <div className="min-h-screen">
            <div className="mt-4 flex justify-between items-center p-2">
              <h1>
                MX/USDT <span className="mb-2">pairs</span>
              </h1>
              <div className="flex justify-center items-center gap-1">
                <h1>show</h1>
                {open ? (
                  <FaArrowUp onClick={handleSubmit} />
                ) : (
                  <FaArrowDown onClick={handleSubmit} />
                )}
              </div>
            </div>
            {open && <TradeComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};
