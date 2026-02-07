const Graphics = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        Graphics Designing
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-xl p-6 rounded-xl">
          <h3 className="font-bold text-xl">Logo Design</h3>
          <p className="text-gray-600 mt-2">
            Brand identity & logo
          </p>
        </div>

        <div className="bg-white shadow-xl p-6 rounded-xl">
          <h3 className="font-bold text-xl">Social Media Post</h3>
          <p className="text-gray-600 mt-2">
            Instagram & Facebook creatives
          </p>
        </div>
      </div>
    </div>
  );
};

export default Graphics;
