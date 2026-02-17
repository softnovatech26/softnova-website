import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import design1 from "../../assets/Pypro/pro-1.jpeg";
import design2 from "../../assets/Pypro/pro-2.jpeg";
import design3 from "../../assets/Pypro/pro-3.jpeg";
import design4 from "../../assets/Pypro/Pro-4.jpeg";
import Footer from "../../components/Footer";
const PythonAI = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: design1, title: "Student Attendance Management System" },
    { src: design2, title: "Data Analytics Dashboard" },
    { src: design3, title: "Student Management System" },
    { src: design4, title: "School Management System" },
  ];

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/30 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto text-center mb-20 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI & Python <span className="text-blue-400">Projects</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our intelligent automation systems, AI-powered tools,
            machine learning models and advanced Python applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl cursor-pointer transition"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">
                  {img.title}
                </h3>
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
                  className="absolute -top-4 -right-4 bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-full shadow-lg"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </>
  );
};

export default PythonAI;
