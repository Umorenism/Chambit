import { useNavigate } from "react-router-dom";
import { RiSwapFill } from "react-icons/ri";
import { GiTrade } from "react-icons/gi";
import { useState } from "react";

type LoadingState = {
  swapLoading: boolean;
  p2pLoading: boolean;
};

const carditem = [
  {
    icon: (
      <RiSwapFill
        size={30}
        className="border border-white rounded-full text-orange-500"
      />
    ),
    title: "SWAP",
    path: "/swap",
    loadingKey: "swapLoading",
  },
  {
    icon: (
      <GiTrade
        size={30}
        className="border border-white rounded-full text-orange-500"
      />
    ),
    title: "P2P",
    path: "/pp",
    loadingKey: "p2pLoading",
  },
];

export const Swap = () => {
  const [loading, setLoading] = useState<LoadingState>({
    swapLoading: false,
    p2pLoading: false,
  });

  const navigate = useNavigate();

  const handleClick = (loadingKey: keyof LoadingState, path: string) => {
    setLoading((prevLoading) => ({ ...prevLoading, [loadingKey]: true }));
    setTimeout(() => {
      setLoading((prevLoading) => ({ ...prevLoading, [loadingKey]: false }));
      navigate(path);
    }, 2000); // Adjust the timeout duration as needed
  };

  return (
    <div className="bg-gray-950 py-5 px-4 mt-3 text-white">
      <div className="py-10 px-2 flex justify-around gap-2">
        {carditem.map((item, index) => (
          <div
            key={index}
            className="w-1/2 py-4 justify-center flex flex-col items-center bg-gray-600 rounded-lg shadow-lg text-white hover:bg-blue-600 transition-all ease-in duration-300 gap-3"
            onClick={() =>
              handleClick(item.loadingKey as keyof LoadingState, item.path)
            }
          >
            {loading[item.loadingKey as keyof LoadingState] ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            ) : (
              <>
                <div>{item.icon}</div>
                <p className="text-xl">{item.title}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
