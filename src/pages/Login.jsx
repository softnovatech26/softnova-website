import { Link } from "react-router-dom";
import logo from "../assets/SoftNova Logo1-06.png";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Login Card */}
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 flex flex-col items-center">
        {/* Logo */}
        <div className="rounded-full p-3  mb-4">
          <img
            src={logo}
            alt="SoftNova Tech Logo"
            className="w-32 h-32 object-contain   rounded-full"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold tracking-wider text-center font-impact text-red-800 mb-6">
          Login
        </h2>

        {/* Inputs */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {/* Login Button */}
        <button className="w-full bg-red-800 text-white font-bold py-2 rounded hover:bg-red-900 transition duration-300">
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm mt-4 text-gray-800">
          New user?{" "}
          <Link
            to="/signup"
            className="text-red-800 font-semibold font-sans hover:underline"
          >
            Signup here
          </Link>
        </p>

        {/* Forgot Password */}
        <Link
          to="/forgot-password"
          className="text-gray-800 text-sm mt-2 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
