import { Link } from "react-router-dom";
import logo from "../assets/SoftNova Logo1-06.png";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-white/80 p-8 rounded-lg shadow-lg w-96 flex flex-col items-center">

        <img src={logo} alt="SoftNova Tech Logo" className="w-36 h-36 mb-4" />

        <h2 className="text-3xl font-impact tracking-wider shadow-black  font-bold text-center text-red-700 mb-6">
          Login to SoftNova Tech
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button className="w-full bg-red-700 text-white font-bold py-2 rounded hover:bg-gray-900 transition duration-300">
          Login
        </button>


        <p className="text-center text-sm mt-4 text-black">
          New user?{" "}
          <Link
            to="/signup"
            className="text-red-600 font-impact  font-bold hover:underline"
          >
            Signup here
          </Link>
        </p>

 
        <Link
          to="/forgot-password"
          className="text-black text-sm mt-2 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
