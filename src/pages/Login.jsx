import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Login to SoftNova Tech
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>

        {/* Signup link */}
        <p className="text-center text-sm mt-4 text-gray-600">
          New user?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
