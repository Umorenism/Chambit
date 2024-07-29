export const Chart = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen mt-20 flex flex-col">
        <div className=" mb-2 flex justify-center gap-1 items-center w-full ">
          <div className="bg-gray-500 w-full text-center py-2 rounded-md">
            Chart
          </div>
          <div className="bg-gray-500 w-full text-center py-2 rounded-md">
            Trade
          </div>
        </div>

        <div className=" mb-2 flex justify-center gap-1 items-center w-full ">
          <div className="w-full text-center py-2 rounded-md">
            ZKL/USDT <span>-27.95%</span>
          </div>
          <div className="text-green-500 w-full text-xl text-center py-2 rounded-md">
            0.00% <span className="text-white">...</span>
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          <div className="w-1/2 text-white py-4 p-2 ">
            <div className="flex justify-between gap-2 ">
              <div className="flex flex-col">
                <button className="text-xl py-2 px-5 bg-gray-600 rounded-md font-bold text-white">
                  Buy
                </button>
                <p>Available</p>
              </div>
              <div className="flex flex-col">
                <button className="py-2 bg-red-500 px-5 font-bold rounded-md text-white">
                  Sell
                </button>
                <p className="text-end ">0.ZKL</p>
              </div>
            </div>

            <div className="bg-gray-500 py-4 flex justify-between items-center p-2 mb-4 rounded-md text-white font-bold">
              <h2>Limit</h2>
              <p>v</p>
            </div>

            <div className="bg-gray-500 py-4 flex justify-between items-center p-2 mb-4 rounded-md text-white text-xl font-bold">
              <h2>0.26098</h2>
              <div className="flex gap-1">
                <p>-</p>
                <p>+</p>
              </div>
            </div>
            <p className="py-2">=0.26 USD</p>
            <div className="bg-gray-500 py-4 flex justify-between items-center p-2 mb-4 rounded-md text-white font-bold">
              <h2>QTY</h2>
              <p>ZKL</p>
            </div>
            <div className="bg-gray-500 py-4 flex justify-between items-center p-2 mb-4 rounded-md">
              <h2 className="text-sm">Order value</h2>
              <p className="text-white text-xl">USDT</p>
            </div>
            <div className="bg-gray-500 py-4 flex justify-center text-white rounded-md items-center p-2 mb-4">
              <h2>TP/SL</h2>
            </div>
            <div className="flex justify-between items-center py-2">
              <div className="flex gap-1">
                <input type="checkbox" name="" id="" />
                <p>Post-Only</p>
              </div>
              <div>GTC</div>
            </div>
            <div className="flex justify-between items-center py-2">
              <div className="flex gap-1">
                <p>Max.Buy</p>
              </div>
              <div>0.00RPK</div>
            </div>
            <button className="px-10 bg-green-600 py-2 rounded-md">
              BUY RPK
            </button>
            <div className="flex w-full justify-between gap-2 py-4 items-center mt-4">
              <h2>Order(1)</h2>
              <p>Assets</p>
              <h5>Tools(0)</h5>
            </div>
          </div>

          <div className="w-1/2 ">
            <div className="flex justify-between p-4">
              <div>
                <h1>Price</h1>
                <p>(USDT)</p>
              </div>
              <div>
                <h1>Price</h1>
                <p>(ZKL)</p>
              </div>
            </div>
            <div className=" py-4 p-2">
              <div className="flex justify-between p-4 ">
                <h1 className="text-red-500">0.262638</h1>
                <p>7.2000</p>
              </div>
              <div className="flex justify-between p-4 ">
                <h1 className="text-red-500">0.262638</h1>
                <p>7.2000</p>
              </div>
              <div className="flex justify-between p-4 ">
                <h1 className="text-red-500">0.262638</h1>
                <p>7.2000</p>
              </div>

              <h2 className="text-2xl text-red-500">Total bal:0.4325544</h2>
            </div>
            {/* green part */}
            <div className="flex justify-between p-4 ">
              <h1 className="text-green-500">0.262638</h1>
              <p>7.2000</p>
            </div>
            <div className="flex justify-between p-4 ">
              <h1 className="text-green-500">0.262638</h1>
              <p>7.2000</p>
            </div>
            <div className="flex justify-between p-4 ">
              <h1 className="text-green-500">0.262638</h1>
              <p>7.2000</p>
            </div>
            <div className="flex justify-between p-4 ">
              <h1 className="text-green-500">0.262638</h1>
              <p>7.2000</p>
            </div>
            <div className="flex justify-between p-4 ">
              <h1 className="text-green-500">0.262638</h1>
              <p>7.2000</p>
            </div>
            <h2 className="text-xl text-green-500 mt-4">Total bal:0.4325544</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
