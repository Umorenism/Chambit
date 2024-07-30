import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const OrderBook = () => {
  const [orderBookData, setOrderBookData] = useState({ bids: [], asks: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderBookData = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10"
        );
        setOrderBookData(response.data);
        setLoading(false);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          // Access the message and response from the error object
          setError(err.message);
          if (err.response) {
            console.error("Error response:", err.response);
          }
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchOrderBookData();
  }, []);

  return (
    <div className="h-screen bg-slate-950 py-16 text-white">
      <div className="text-center py-2">
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
          <button className="bg-gray-500 text-white font-bold px-10 py-2 rounded-md text-xl">
            Chart
          </button>
        </Link>
        <Link to="/chart">
          <button className="text-white font-bold hover:bg-gray-500 transition text-xl duration-300 px-10 py-2 rounded-md">
            Trade
          </button>
        </Link>
      </div>
      {/* graph */}
      <div className="px-4 mt-4">
        <div className="bg-white text-slate-500 py-16 flex justify-center">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error loading data: {error}</p>
          ) : (
            <div>
              <h3 className="text-xl">Bids</h3>
              {orderBookData.bids.map((bid, index) => (
                <div key={index} className="flex justify-between">
                  <p>{bid[0]}</p>
                  <p>{bid[1]}</p>
                </div>
              ))}
              <h3 className="text-xl mt-4">Asks</h3>
              {orderBookData.asks.map((ask, index) => (
                <div key={index} className="flex justify-between">
                  <p>{ask[0]}</p>
                  <p>{ask[1]}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* BUY */}
      <div className="px-4 mt-4">
        <div className="bg-white text-slate-500 py-4 flex justify-between items-center p-4 gap-4">
          <div className="w-1/2 bg-black text-white py-4 px-4">
            <h1 className="text-2xl font-bold text-green-500">BUY</h1>
            <div className="flex justify-between items-center">
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
