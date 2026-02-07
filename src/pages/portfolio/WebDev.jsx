const WebDev = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        Web Development Projects
      </h1>

      {/* Projects yahan lagao */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-xl p-6 rounded-xl">
          <h3 className="font-bold text-xl">Business Website</h3>
          <p className="text-gray-600 mt-2">
            React + Tailwind company website
          </p>
        </div>

        <div className="bg-white shadow-xl p-6 rounded-xl">
          <h3 className="font-bold text-xl">Portfolio Website</h3>
          <p className="text-gray-600 mt-2">
            Personal portfolio with animations
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
