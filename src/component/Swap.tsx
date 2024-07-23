import { Link } from "react-router-dom";
import { RiSwapFill } from "react-icons/ri";
import { GiTrade } from "react-icons/gi";

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
  },
];

export const Swap = () => {
  return (
    <div className="bg-gray-950 py-5 px-4 mt-3 text-white">
      <div className=" py-10 px-2 flex  justify-around gap-2">
        {carditem.map((item, index) => (
          <div
            key={index}
            className=" w-1/2 py-4 justify-center flex flex-col items-center bg-gray-600 rounded-lg shadow-lg text-white hover:bg-blue-600 transition-all ease-in duration-300"
          >
            <Link to={item.path}>
              <div>{item.icon}</div>
              <p className="text-xl">{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
