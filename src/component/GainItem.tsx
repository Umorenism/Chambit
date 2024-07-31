import { useState } from "react";
import { TradeComponent } from "./TradeComponent";
import { Gainorder } from "./Gainorder";

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
      <div className="py-5 p-2 flex-wrap flex justify-around bg-gray-800 items-center rounded-lg text-sm">
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
        <>
          <Gainorder />
          <hr className="border-2" />
          <TradeComponent />
        </>
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
