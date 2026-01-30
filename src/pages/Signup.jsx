import { Link } from "react-router-dom";
import logo from "../assets/SoftNova Logo1-06.png";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Signup Card */}
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 flex flex-col items-center">
        {/* Logo */}
        <div className=" rounded-full p-3  mb-4">
          <img
            src={logo}
            alt="SoftNova Tech Logo"
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold  font-impact tracking-wide text-center text-red-700 mb-6">
          Create Your Account
        </h2>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 mb-4 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 mb-4 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {/* Signup Button */}
        <button className="w-full bg-red-800 text-white font-bold py-2 rounded hover:bg-red-900 transition duration-300">
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-4 text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-800 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
