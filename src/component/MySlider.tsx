import { FaArrowRight } from "react-icons/fa6";
import "./MySlider.css"; // Import the CSS file for custom styles

export const MySlider = () => {
  return (
    <div className="slider-container bg-gray-950 text-white py-6 shadow-md mt-3 px-4">
      <div className="slider-wrapper">
        <div className="slider-item">
          <h1 className="text-lg font-bold">
            A8 Launchpool: Stake A8, USDT, or MTN to
          </h1>
          <p className="mt-3 flex items-center gap-2">
            Earn a share of 9,000,000 A8 <br />
            <button className="px-4 bg-orange-500 py-1 text-white rounded-full flex items-center justify-center">
              <FaArrowRight />
            </button>
          </p>
        </div>
        {/* <div className="slider-item">
          <h1 className="text-lg font-bold">Let trade with chambit</h1>
          <p className="mt-3">experience the best trading platform.</p>
        </div> */}
        {/* Add more slider items as needed */}
      </div>
    </div>
  );
};
