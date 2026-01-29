import React from "react";

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Portfolio.....
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are working on exciting projects in web development, e-commerce,
          and AI solutions. Stay connected — great things are coming soon.
        </p>
      </div>

      {/* Portfolio Content */}
      <div className="max-w-6xl mx-auto">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-white">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Projects Coming Soon.......
          </h2>
          <p className="text-gray-500">
            Our team is currently building amazing projects.  
            This section will be updated very soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
