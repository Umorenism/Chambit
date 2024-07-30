import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import axios from "axios";
import logo from "../asset/chambit.svg";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Explicitly type the state

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://your-api-endpoint.com/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      // Handle successful login (e.g., store tokens, redirect)
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-[50px] mt-10" />
        </div>
        <h1 className="text-2xl mt-5 font-bold text-center">
          Login to your Account
        </h1>
        <p className="py-4 text-sm text-center">
          Login to your account by entering your email and password
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400 bg-none`"
            />
            <div
              className="absolute top-0 right-3 flex items-center h-full cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEye className="text-white" />
              ) : (
                <FaEyeSlash className="text-white" />
              )}
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          <Link to="/home">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 rounded-lg py-2 mt-10 mb-2 text-md text-white font-bold"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </Link>
          <p className="py-2 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-orange-500">
              Sign up here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
