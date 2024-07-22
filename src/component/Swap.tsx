import { FaSdCard } from "react-icons/fa6";
import { Link } from "react-router-dom";

const carditem = [
  {
    icon: <FaSdCard />,
    title: "SWAP",
    path: "/swap",
  },
  {
    icon: <FaSdCard />,
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
            className=" w-1/2 py-4 justify-center flex flex-col items-center bg-slate-500 text-blue-500 rounded-lg shadow-lg hover:bg-orange-600 hover:text-white"
          >
            <Link to={item.path}>
              <div>{item.icon}</div>
              <p>{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
