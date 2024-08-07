import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaCircle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export const DepositeCrypto = () => {
  const searchHistory = [
    { symbol: "11 HNCH", name: "1inch Network", path: "/depositdetails/1inch" },
    { symbol: "BTC", name: "Bitcoin", path: "/depositdetails/bitcoin" },
    { symbol: "ETH", name: "Ethereum", path: "/depositdetails/ethereum" },
    { symbol: "BTC", name: "BTC", path: "/depositdetails/Btc" },
    { symbol: "ETH", name: "Ethereum", path: "/depositdetails/ethereum" },
    { symbol: "ETH", name: "Ethereum", path: "/depositdetails/ethereum" },
    // Add more items as needed
  ];

  const [selectedType, setSelectedType] = useState("Crypto");
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate("/depositcrypto");
  };

  return (
    <div className="flex justify-center items-center bg-gray-950 text-white overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen h-auto">
        <div className="bg-gray-950 py-3 fixed top-0 w-full left-0 right-0">
          <div className="text-center p-2">
            <div className="flex gap-4">
              <div className="w-full bg-slate-700 rounded-full flex gap-2">
                <CiSearch className="mt-1 ml-2" />
                <input
                  type="text"
                  className="w-full bg-transparent text-sm outline-none"
                  placeholder="Please select your preferred pairs"
                />
              </div>
              <p>Cancel</p>
            </div>
            <div className="mb-3 flex gap-3 mt-4 text-start pl-3">
              <button
                onClick={() => setSelectedType("Crypto")}
                className={`${
                  selectedType === "Crypto"
                    ? "underline underline-offset-4 text-[#fed503]"
                    : ""
                }`}
              >
                Crypto
              </button>
              <button
                onClick={() => setSelectedType("Fiat")}
                className={`${
                  selectedType === "Fiat"
                    ? "underline underline-offset-4 text-[#fed503]"
                    : ""
                }`}
              >
                Fiat
              </button>
            </div>
          </div>
          <hr />
        </div>

        <div className="min-h-screen overflow-y-auto w-full max-w-sm h-auto mt-24">
          <div className="mt-4">
            <div className="flex items-center justify-between p-2">
              <h1>Search History</h1>
              <RiDeleteBin5Line />
            </div>
            <div className="p-2 flex gap-4">
              <Link to="/depositcrypto">
                <button className="px-2 bg-slate-700 rounded-md">PIXFI</button>
              </Link>
              <Link to="/depositcrypto">
                <button className="px-2 bg-slate-700 rounded-md">USDT</button>
              </Link>
              <Link to="/depositcrypto">
                <button className="px-2 bg-slate-700 rounded-md">BNB</button>
              </Link>
              <Link to="/depositcrypto">
                <button className="px-2 bg-slate-700 rounded-md">SQL</button>
              </Link>
            </div>
          </div>
          {searchHistory.map((item, index) => (
            <div
              key={index}
              onClick={handleItemClick}
              className="block p-2 cursor-pointer"
            >
              <div className="flex items-center">
                <FaCircle />
                <p>
                  {item.symbol}
                  <span className="text-sm text-slate-500">{item.name}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
