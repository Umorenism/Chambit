import { FaCircle } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const textItems = [
  "ERC20",
  "Arbitrum",
  "Base Mainnet",
  "Op Mainnet",
  "LINEA",
  "zkSync Era",
  "Mantle Network ",
  "Arbitrum Nova",
  "zkSync Lite",
];

export const DepositDetailPage = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("/depositdetails"); // Navigate to the desired route
  };

  return (
    <div className="flex justify-center items-center bg-gray-950 text-white overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen h-auto">
        <div className="bg-gray-950 py-3 fixed top-0 w-full left-0 right-0">
          <div className="flex items-center justify-between p-2">
            <p>Choose a Crypto type</p>
            <MdOutlineCancel
              className="cursor-pointer"
              onClick={handleCancelClick}
            />
          </div>
          <hr className="border-gray-600" />
        </div>
        <div className="min-h-screen overflow-y-auto w-full max-w-sm h-auto mt-14">
          <div className="mt-1 p-2">
            <div className="bg-slate-700 py-3 px-4 rounded-md shadow-md flex gap-1">
              <FaCircle />

              <p className="text-sm text-gray-300">
                Make sure that the chain type you make the deposit to is the one
                you make withdrawals from.
              </p>
            </div>
          </div>
          <div className="p-2 mt-4">
            {textItems.map((item, index) => (
              <Link to="/depositview">
                <p key={index} className="text-sm font-semibold mb-4">
                  {item}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
