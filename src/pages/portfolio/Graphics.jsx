import { useState } from "react";
import design1 from "../../assets/Graphics Project/11.jpg";
import design2 from "../../assets/Graphics Project/2-02.png";
import design3 from "../../assets/Graphics Project/22.jpg";
import design4 from "../../assets/Graphics Project/33.png";
import design5 from "../../assets/Graphics Project/44.webp";
import design6 from "../../assets/Graphics Project/Art Work-01.jpg";
import design7 from "../../assets/Graphics Project/Untitled-1-Recovered.jpg";
import design8 from "../../assets/Graphics Project/mobile screen2-01.png";
import design9 from "../../assets/Graphics Project/mou.jpg";
import design10 from "../../assets/Graphics Project/pro2.png";
import design11 from "../../assets/Graphics Project/pro4.png";
import design12 from "../../assets/Graphics Project/pro5.png";

const GraphicsDesign = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    design1, design2, design3, design4, design5, design6,
    design7, design8, design9, design10, design11, design12
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">

      <h1 className="text-5xl font-bold text-center mb-12">
        Graphics Design Portfolio
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
