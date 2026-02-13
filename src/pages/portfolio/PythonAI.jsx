import { useState } from "react";
import design1 from "../../assets/Pypro/pro-1.jpeg";
import design2 from "../../assets/Pypro/pro-2.jpeg";
import design3 from "../../assets/Pypro/pro-3.jpeg";
import design4 from "../../assets/Pypro/Pro-4.jpeg";

const GraphicsDesign = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    design1, design2, design3, design4
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">

      <h1 className="text-5xl font-bold text-center mb-12">
        Python & AI Portfolio
      </h1>

      <p className="text-2xl text-center text-purple-600 mb-12 max-w-xl mx-auto">
       We’ve done lot’s of work, Let’s Check <br />some from here Projects
         </p>


      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition h-72"
          >
            <img
              src={img}
              alt="Graphic Design"
              onClick={() => setSelectedImage(img)}
              className="w-full h-full object-cover cursor-pointer hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full Preview"
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default GraphicsDesign;
