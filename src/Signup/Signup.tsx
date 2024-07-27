import { useState } from "react";
import axios from "axios";
import logo from "../asset/chambit.svg";

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phoneNumber: "",
    country: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/signup",
        formData
      );
      console.log("Signup successful:", response.data);
      // Handle successful signup (e.g., redirect to login page)
    } catch (err) {
      console.error("Signup failed:", err);
      setError("Signup failed. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </div>
        <h1 className="text-2xl mt-3 font-bold text-center">
          Create your Account
        </h1>
        <p className="py-2 text-sm text-center">
          Login to your account by entering your email and password
        </p>
        <form className="mt-10" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full py-2 rounded-md border p-2 bg-transparent outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4">
            <p className="py-2">Country</p>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="flex justify-center items-center gap-4 px-2 mb-2">
            <input type="checkbox" className="h-5 w-5" />
            <span className="text-sm">
              By registering you agree to our Terms and privacy policy.{" "}
              <a href="/privacy-policy" className="text-blue-500 underline">
                See privacy policy
              </a>
            </span>
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 rounded-lg py-2 mb-2 text-xl text-white font-bold cursor-pointer hover:bg-orange-500"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
          <p className="py-2 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-orange-500">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
