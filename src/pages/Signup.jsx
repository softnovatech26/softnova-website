import { Link } from "react-router-dom";
import logo from "../assets/SoftNova Logo1-06.png";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <div className="flex-grow flex items-center justify-center px-4">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl w-full max-w-sm flex flex-col items-center">
            <div className="rounded-full p-2 mb-3">
              <img
                src={logo}
                alt="SoftNova Tech Logo"
                className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 object-contain"
              />
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-impact tracking-wide text-center text-red-700 mb-5">
              Create Your Account
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 sm:p-2.5 mb-3 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 sm:p-2.5 mb-3 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 sm:p-2.5 mb-3 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 sm:p-2.5 mb-4 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <button className="w-full bg-red-800 text-white font-bold py-2 sm:py-2.5 rounded hover:bg-red-900 transition duration-300">
              Sign Up
            </button>

            <p className="text-center text-sm sm:text-sm mt-3 text-gray-700">
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
      </div>

      <Footer />
    </>
  );
};

export default Signup;
