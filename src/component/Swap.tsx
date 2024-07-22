import { FaSdCard } from "react-icons/fa6";

const carditem = [
  {
    icon: <FaSdCard />,
    title: "SWAP",
  },
  {
    icon: <FaSdCard />,
    title: "P2P",
  },
];

export const Swap = () => {
  return (
    <div className="bg-gray-950 py-5 px-4 mt-3 text-white">
      <div className=" py-10 px-2 flex  justify-around gap-2">
        {carditem.map((item, index) => (
          <div
            key={index}
            className=" w-1/2 py-2 justify-center flex flex-col items-center"
          >
            <div>{item.icon}</div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
