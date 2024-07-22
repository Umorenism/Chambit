import { FaArrowRight } from "react-icons/fa6";

export const Slider = () => {
  return (
    <div className="bg-gray-950 text-white py-6 shadow-md mt-3 px-4">
      <h1>A8 launchpool Stake A8, USDT or MTN to</h1>
      <p className="mt-3 flex items-center gap-2">
        Earn a share of 9,000,000 A8{" "}
        <button className="px-4 bg-orange-400 py-1 rounded-full">
          <FaArrowRight />
        </button>
      </p>
    </div>
  );
};
