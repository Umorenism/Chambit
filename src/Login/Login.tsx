import { FaEyeSlash } from "react-icons/fa6";
import logo from "../asset/chambit.svg";

export const Login = () => {
  return (
    <div className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 ">
      <div className="mb-40">
        <div>
          <img src={logo} alt="" className="h-[50px] mt-10" />
        </div>
        <h1 className="text-2xl mt-5 font-bold">Login to your Account</h1>
        <p className="py-4 text-sm">
          Login to your account by entering your email and password
        </p>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4 relative justify-center items-center ">
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
            <FaEyeSlash className="absolute top-0 left-[320px] text-left mt-4 text-white mb-2" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 rounded-lg py-2 mt-10 mb-2 text-md text-white font-bold"
          >
            Login
          </button>
          <p className="py-2 text-center">
            Don't have an account?
            <a href="/signup" className="text-orange-500">
              Sign up here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
