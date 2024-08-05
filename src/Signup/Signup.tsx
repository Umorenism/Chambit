// import { useState, useEffect } from "react";
// import axios from "axios";
// import logo from "../asset/chambit.svg";
// import { useNavigate } from "react-router-dom";

// // Define the type for the country
// type Country = {
//   code: string;
//   name: string;
// };

// export const Signup: React.FC = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     username: "",
//     phoneNumber: "",
//     country: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [manualCountry, setManualCountry] = useState(false); // Toggle for manual input
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get<{ [key: string]: string }>(
//           "https://backend.chambit.exchange/api/auth/country-list"
//         );

//         // Transform the API response to the desired format
//         const countryArray: Country[] = Object.entries(response.data).map(
//           ([code, name]) => ({ code, name })
//         );

//         setCountries(countryArray);
//       } catch (err) {
//         console.error("Failed to fetch countries:", err);
//         setError("Failed to load countries.");
//       }
//     };

//     fetchCountries();
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(
//         "https://backend.chambit.exchange/api/auth/signup",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("Signup successful:", response.data);
//       localStorage.setItem("authToken", response.data.token); // Store the token
//       navigate("/home"); // Redirect to home page
//     } catch (err: any) {
//       console.error("Signup failed:", err.response || err.message || err);
//       setError(
//         err.response?.data?.message ||
//           "Signup failed. Please check your details and try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto py-14">
//       <div className="w-full max-w-sm min-h-screen mt-20">
//         <div className="flex justify-center mb-6 items-start">
//           <img src={logo} alt="Logo" className="h-[50px]" />
//         </div>
//         <h1 className="text-2xl mt-3 font-bold text-center">
//           Create your Account
//         </h1>

//         <form className="mt-10" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400 bg-none"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="tel"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="w-full py-2 rounded-md border p-2 bg-transparent outline-none hover:border-green-400"
//             />
//           </div>
//           <div className="mb-4">
//             <p className="py-2">Country</p>
//             <div className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 checked={manualCountry}
//                 onChange={() => setManualCountry(!manualCountry)}
//                 className="h-5 w-5 mr-2"
//               />
//               <label className="text-sm">set your country choice</label>
//             </div>
//             {manualCountry ? (
//               <input
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-500"
//               />
//             ) : (
//               <select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="w-full py-2 rounded-md border bg-black p-2 outline-none hover:border-green-500"
//               >
//                 <option value="">Select Country</option>
//                 {countries.map((country) => (
//                   <option key={country.code} value={country.code}>
//                     {country.name}
//                   </option>
//                 ))}
//               </select>
//             )}
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
//             />
//           </div>
//           <div className="flex justify-center items-center gap-4 px-2 mb-2">
//             <input type="checkbox" className="h-5 w-5" />
//             <span className="text-sm">
//               By registering you agree to our Terms and privacy policy.{" "}
//               <a href="/privacy-policy" className="text-blue-500 underline">
//                 See privacy policy
//               </a>
//             </span>
//           </div>
//           {error && (
//             <p className="text-red-500 text-sm text-center mb-4">{error}</p>
//           )}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 rounded-lg py-2 mb-2 text-xl text-white font-bold cursor-pointer hover:bg-orange-500"
//           >
//             {loading ? "Creating Account..." : "Create Account"}
//           </button>
//           <p className="py-2 text-center mb-20">
//             Already have an account?{" "}
//             <a href="/login" className="text-orange-500 cursor-pointer">
//               Login here
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../asset/chambit.svg";
import { useNavigate } from "react-router-dom";

// Define the type for the country
type Country = {
  code: string;
  name: string;
};

export const Signup: React.FC = () => {
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
  const [countries, setCountries] = useState<Country[]>([]);
  const [manualCountry, setManualCountry] = useState(false); // Toggle for manual input
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<{ [key: string]: string }>(
          "https://backend.chambit.exchange/api/auth/country-list"
        );

        // Transform the API response to the desired format
        const countryArray: Country[] = Object.entries(response.data).map(
          ([code, name]) => ({ code, name })
        );

        setCountries(countryArray);
      } catch (err) {
        console.error("Failed to fetch countries:", err);
        setError("Failed to load countries.");
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
        "https://backend.chambit.exchange/api/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Signup successful:", response.data);
      localStorage.setItem("authToken", response.data.token); // Store the token

      // Redirect to home page
      navigate("/home");
    } catch (err: any) {
      console.error("Signup failed:", err.response || err.message || err);
      setError(
        err.response?.data?.message ||
          "Signup failed. Please check your details and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto py-14">
      <div className="w-full max-w-sm min-h-screen mt-20">
        <div className="flex justify-center mb-6 items-start">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </div>
        <h1 className="text-2xl mt-3 font-bold text-center">
          Create your Account
        </h1>

        <form className="mt-10" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400 bg-none"
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
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={manualCountry}
                onChange={() => setManualCountry(!manualCountry)}
                className="h-5 w-5 mr-2"
              />
              <label className="text-sm">I want to type my country</label>
            </div>
            {manualCountry ? (
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-500"
              />
            ) : (
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-500"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            )}
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
          <p className="py-2 text-center mb-20">
            Already have an account?{" "}
            <a href="/login" className="text-orange-500 cursor-pointer">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
