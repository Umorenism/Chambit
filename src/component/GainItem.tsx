import React, { useState } from "react";
import { Link } from "react-router-dom";

export const GainItem: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sliderItems = [
    { title: "Hot" },
    { title: "Gainers" },
    { title: "Losers" },
    { title: "New" },
  ];

  return (
    <div className="bg-gray-950 text-white mt-3 py-20 h-auto mb-10 px-4">
      <div className="py-5 p-2 flex-wrap flex justify-around bg-gray-600 items-center rounded-lg">
        <div className="flex justify-between items-center gap-10">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className="mb-5 text-lg font-bold hover:text-orange-500 cursor-pointer relative"
              onClick={() => openItem(index)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      {openIndex !== null && (
        <div className="mt-2 w-full bg-gray-950 text-white p-4 py-15 rounded-md slide-in">
          <h1 className="font-bold text-xl px-4">Spot</h1>
          {/* Spot Trading Top */}
          <div>
            <div className="flex justify-between items-center px-4 mt-2">
              <h1>Trading pairs</h1>
              <p>Price</p>
              <h5>24H Change</h5>
            </div>
            <div className="flex justify-around pb-2 items-center w-full">
              <h4 className="flex flex-col mt-5 text-xl">
                <div>BNB/USDT</div>
                <div>volume</div>
              </h4>
              <p className="px-4 text-xl">590</p>
              <Link to="/orderbook">
                <button className="px-8 text-xl bg-red-500 py-2 rounded-lg">
                  1.2%
                </button>
              </Link>
            </div>
          </div>
          {/* Spot Trading Down */}

          <div>
            <div className="flex justify-between items-center px-4 mt-2">
              <h1>Trading pairs</h1>
              <p>Price</p>
              <h5>24H Change</h5>
            </div>
            <div className="flex justify-around pb-2 items-center w-full">
              <h4 className="flex flex-col mt-5 text-xl">
                <div>BNB/USDT</div>
                <div>volume</div>
              </h4>
              <p className="px-4 text-xl">590</p>
              <Link to="/orderbook">
                <button className="px-8 text-xl bg-green-500 py-2 rounded-lg">
                  1.2%
                </button>
              </Link>
            </div>
          </div>

          <div>
            <div className="flex justify-around pb-2 items-center w-full">
              <h4 className="flex flex-col mt-5 text-xl">
                <div>AVAIL/USDT</div>
                <div>volume</div>
              </h4>
              <p className="px-4 text-xl">590</p>
              <Link to="/orderbook">
                <button className="px-8 text-xl bg-red-500 py-2 rounded-lg">
                  1.2%
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <style>
        {`
        .slide-in {
          animation: slideIn 0.5s forwards;
        }

        @keyframes slideIn {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        `}
      </style>
    </div>
  );
};
