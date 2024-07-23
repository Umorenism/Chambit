import { Link } from "react-router-dom";

export const OrderBook = () => {
  return (
    <div className=" h-screen  bg-slate-950 py-16 text-white ">
      <div className="text-center py-2 ">
        <h1 className="text-2xl">SWAP</h1>
        <hr />
      </div>
      <div className="flex justify-between px-4 mt-4">
        <h2 className="text-2xl">SWAP</h2>
        <div className="flex flex-col text-2xl">
          <h2>TRADE</h2>
          <span className="h-1 w-20 bg-green-600"></span>
        </div>
      </div>
      <div className="px-4 flex justify-between mt-4">
        <Link to="/chart">
          <button className="bg-green-500 px-10 py-2 rounded-md">Chart</button>
        </Link>
        <Link to="/chart">
          <button className="bg-red-500 px-10 py-2 rounded-md">Chart</button>
        </Link>
      </div>
      {/* graph */}
      <div className=" px-4 mt-4">
        <div className="bg-white text-slate-500  py-16 flex justify-center">
          ORDER BOOK
        </div>
      </div>

      {/* BUY  */}

      <div className="px-4 mt-4">
        <div className="bg-white text-slate-500 py-4 flex justify-between items-center p-4 gap-4">
          <div className="w-1/2 bg-black text-white py-4 px-4">
            <h1 className="text-2xl font-bold text-green-500">BUY</h1>
            <div className="flex justify-between items-center ">
              <h1>QTY</h1>
              <h1>PRICE</h1>
            </div>
          </div>
          {/* SELL */}
          <div className="w-1/2 bg-slate-500 text-white py-4 px-2">
            <h1 className="text-2xl font-bold text-red-500">SELL</h1>
            <div className="flex justify-between items-center">
              <div>QTY</div>
              <h1>PRICE</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
