import { FaEyeSlash } from "react-icons/fa6";
import logo from "../asset/chambit.svg";
export const Login = () => {
  return (
    <div className=" flex justify-center items-center py-20 bg-gray-950 text-white px-4 h-screen">
      <div className="mb-20">
        <div>
          <img src={logo} alt="" className="h-[50px] mt-10" />
        </div>
        <h1 className="text-2xl mt-5 font-bold">Login your Account</h1>
        <p className="py-4 text-sm">
          Login to your account by entering your email and Password
        </p>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              className=" w-full py-2 rounded-md
            border 
            p-2
            outline-none hover:border-blue-400"
            />
          </div>

          <div className="mb-4 relative justify-center items-center ">
            <input
              type="text"
              placeholder="Password"
              className=" w-full py-2 rounded-md
            border 
            p-2
            outline-none hover:border-blue-400 "
            />
            <FaEyeSlash className="absolute top-0 left-[320px] text-left mt-4 text-black" />
          </div>

          <button className="w-full bg-blue-600  rounded-lg py-2 mt-10 mb-2 text-md text-white font-bold">
            Create Account
          </button>
          <p className="py-2  text-center">
            Don't have an account?
            <a href="/signup" className="text-orange-500">
              sign up here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
