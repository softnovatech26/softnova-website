const PythonAI = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        Python & AI Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-xl p-6 rounded-xl">
          <h3 className="font-bold text-xl">Face Detection System</h3>
          <p className="text-gray-600 mt-2">
            OpenCV based AI system
          </p>
        </div>

        <div className="bg-white shadow-xl p-6 rounded-xl">
          <h3 className="font-bold text-xl">Automation Script</h3>
          <p className="text-gray-600 mt-2">
            Python automation tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default PythonAI;
