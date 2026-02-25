import { useState } from "react";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import design1 from "../../assets/Webpro/pro-1.jpeg";
import design2 from "../../assets/Webpro/pro-2.jpeg";
import design3 from "../../assets/Webpro/pro 2.jpeg";
import design4 from "../../assets/Webpro/pro-3.jpeg";
import design5 from "../../assets/Webpro/Pro-4.jpeg";
import design6 from "../../assets/Webpro/pro 5.jpeg";
import design7 from "../../assets/Webpro/pro 6.jpeg";
import design8 from "../../assets/Webpro/pro 7.jpeg";
import design9 from "../../assets/Webpro/pro 8.jpeg";
import design10 from "../../assets/Webpro/pro 9.jpeg";
import design11 from "../../assets/Webpro/pro 10.jpeg";
import design12 from "../../assets/Webpro/pro 11.jpeg";
import design13 from "../../assets/Webpro/pro 12.jpeg";
import design14 from "../../assets/Webpro/pro 13.jpeg";
import design115 from "../../assets/Webpro/pro 14.jpeg";
     
const WebDev = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: design1, title: "Food Website " },
    { src: design2, title: "Hospital Management System" },
    { src: design3, title: "Campus Management System" },
    { src: design4, title: "Online Car Booking System" },
    { src: design5, title: "Photos Management System" },
    { src: design6, title: "Management Horses Reached " },
    { src: design7, title: "Tutorial Blogs" },
    { src: design8, title: "Data Analytics App" },
    { src: design9, title: "E-commerce Website" },
    { src: design10, title: "Creative Agency" },
    { src: design11, title: "Shop Tech Startup" },
    { src: design12, title: "Qr Code Generator " },
    { src: design13, title: "Youtube Creator App" },
    { src: design14, title: "Fitness App UI" },
    { src: design115, title: "URl dashboard" },
  ];

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-orange-500/30 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto text-center mb-20 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Web Development <span className="text-red-500">Projects</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our modern websites, dashboards, and responsive UI systems
            built using React, Tailwind, and scalable frontend architecture.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl cursor-pointer"
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
                  className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full shadow-lg"
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

export default WebDev;
