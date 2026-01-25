const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 mb-4 rounded"
        />

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
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
