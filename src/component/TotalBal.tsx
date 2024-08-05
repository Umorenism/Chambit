import { useState, useEffect } from "react";
import { FaRegEyeSlash, FaRegEye, FaCircle } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import axios from "axios";
import { Swap } from "./Swap";
import { MySlider } from "./MySlider";
import { GainItem } from "./GainItem";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

interface User {
  isAuthenticated: boolean;
  balance: number | null;
}

export const TotalBal: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [user, setUser] = useState<User>({
    isAuthenticated: false,
    balance: null,
  });

  const toggleDeposit = () => {
    setDeposit(!deposit);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      axios
        .get("http://127.0.0.1:6001/api/trans/getdetails", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("API response:", response.data); // Log API response
          setUser({ isAuthenticated: true, balance: response.data.balance });
        })
        .catch((error) => {
          console.error("Error fetching balance:", error);
          setUser({ isAuthenticated: false, balance: null });
        });
    } else {
      console.warn("No token found");
    }
  }, []);

  useEffect(() => {
    console.log("User state updated:", user); // Log user state updates
  }, [user]);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="bg-gray-950 py-5 text-gray-100">
      <div className="max-w-sm overflow-y-auto bg-slate-950">
        <div className="text-white px-2 m-2 bg-transparent rounded-lg bg-slate-700 mt-6 flex items-center gap-2">
          <CiSearch />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none bg-transparent text-slate-200 font-bold text-sm mb-2 mt-2"
          />
        </div>
        <div className="py-4 rounded-lg flex justify-between items-center mt-4 p-5 text-lg w-full mb-2">
          <div>
            <div>
              <h2 className="flex items-center gap-2">
                Total Assets{" "}
                <span onClick={toggleVisibility} className="cursor-pointer">
                  {isHidden ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </h2>
              <h1>
                {isHidden
                  ? "****"
                  : user.isAuthenticated
                  ? user.balance
                  : "0.00"}{" "}
                <span>USD</span>
              </h1>
            </div>
          </div>
          <div className="text-sm text-green-700">
            <button
              className="px-5 py-3 rounded-sm text-white bg-orange-500 font-semibold hover:bg-blue-600 duration-300 ease-in transition cursor-pointer"
              onClick={toggleDeposit}
            >
              Deposit
            </button>
          </div>
        </div>
        {deposit && (
          <div className="relative bg-slate-800 transition duration-300  p-4 rounded-lg mt-4 ease-in min-h-[500px]">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-white">Deposit Options</span>
              <MdCancel
                className="cursor-pointer text-white"
                onClick={toggleDeposit}
              />
            </div>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 text-left bg-gray-700 text-white rounded-md hover:bg-gray-600">
                <Link to="/p2p">
                  <div className="flex gap-2">
                    <FaCircle className="mt-1" />
                    <div>
                      <h1>P2P Trading</h1>
                      <p className="text-sm">
                        Bank Transfer ,Opay,GooglePay & more
                      </p>
                    </div>
                  </div>
                </Link>
              </button>
              <h1>Deposit with Crypto</h1>
              <button className="w-full px-4 py-2 text-left bg-gray-700 text-white rounded-md hover:bg-gray-600">
                <div className="flex gap-2">
                  <FaCircle className="mt-1" />
                  <Link to="/depositcrypto">
                    <div>
                      <h1>Deposit Crypto</h1>
                      <p className="text-sm">
                        Already have crypto?Deposit directly
                      </p>
                    </div>
                  </Link>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4">
        <Swap />
        <MySlider />
        <GainItem />
      </div>
    </div>
  );
};
//
