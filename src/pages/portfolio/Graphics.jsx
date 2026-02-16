import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    { src: design1, title: "Creative Artwork" },
    { src: design2, title: "Creative (Sindhi Raali) Design" },
    { src: design3, title: "Creative Artwork" },
    { src: design4, title: "Creative Artwork" },
    { src: design5, title: "Creative Artwork" },
    { src: design6, title: "Art Composition" },
    { src: design7, title: "Digital Illustration Poster" },
    { src: design8, title: "Mobile UI Design" },
    { src: design9, title: "Creative Artwork" },
    { src: design10, title: "Product Packaging Design" },
    { src: design11, title: "Creative Layout Posters" },
    { src: design12, title: "Modern Graphic Concept" },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-600/30 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center mb-20 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Graphics <span className="text-red-500">Portfolio</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Explore our premium creative projects including branding, marketing
          visuals, and digital artwork designed with modern aesthetics.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-8 max-w-7xl mx-auto relative z-10 space-y-8">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative group overflow-hidden rounded-3xl cursor-pointer break-inside-avoid"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full rounded-3xl shadow-xl transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
              <h3 className="text-white text-lg font-semibold">{img.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative"
            >
              <img
                src={selectedImage.src}
                alt="Preview"
                className="max-w-[95vw] max-h-[90vh] rounded-2xl shadow-2xl"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full shadow-lg"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GraphicsDesign;
