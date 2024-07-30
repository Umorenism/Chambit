import { Link } from "react-router-dom";
import pic from "../asset/chambit.svg";
export const GetStarted = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="flex flex-col w-full">
        <img src={pic} alt="" className="h-[80px]" />
        <h1 className="text-center text-3xl mt-5 animate-bounce">
          Welcome to Chambit ..
        </h1>
        <div className="mt-4 ">
          <Link to="/login">
            <button className=" w-full bg-orange-500 py-2 rounded-md font-bold mt-4 text-xl hover:bg-blue-600">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
