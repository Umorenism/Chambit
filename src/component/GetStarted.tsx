import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pic from "../asset/chambit.svg";

export const GetStarted = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000); // Adjust the timeout duration as needed
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="flex flex-col w-full">
        <img src={pic} alt="" className="h-[80px]" />
        <h1 className="text-center  mt-5 animate-bounce text-sm">
          Welcome to Chambit
        </h1>
        <div className="mt-4 ">
          <button
            onClick={handleGetStarted}
            className={`w-full py-2 rounded-md font-bold mt-4 text-xl ${
              loading ? "bg-gray-500" : "bg-orange-500 hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Get started"}
          </button>
        </div>
      </div>
    </div>
  );
};
