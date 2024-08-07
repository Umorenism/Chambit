import logo from "../asset/QR-removebg-preview.png";
import { IoIosArrowForward } from "react-icons/io";
import { BsCopy } from "react-icons/bs";

const CardQRC = () => {
  return (
    <div className="mt-4 px-2 p-2 py-4">
      <div className="bg-gray-800 py-5 rounded-md p-2">
        <div className="flex items-center justify-center">
          <img src={logo} alt="qrc-code" className="bg-white rounded-md" />
        </div>
        <div className="bg-gray-900 rounded-md mt-4 py-2">
          <div className="flex items-center gap-2 p-2">
            <h1>Wallet</h1>
            <IoIosArrowForward />
          </div>
          <div className="flex justify-between items-center p-2">
            <h1 className="text-sm flex-1 break-words mr-2">
              arsfsfswwrwrrrrrrrrrrrrrrrraaswsfsuuu
            </h1>
            <div className="flex-shrink-0">
              <BsCopy />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardQRC;
