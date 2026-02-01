import React from "react";

import heroBg from "../assets/hero-3.jpg";
import webImg from "../assets/programmer-night.jpg";
import ecommerceImg from "../assets/e-commers.jpg";
import aiImg from "../assets/transhumanist-using-neuroscientific-tech-transcend-physical-limitations.jpg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* ================= Buddy he Hero Section aha ================= */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-[420px] h-[420px] bg-blue-600/40 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-futura text-white text-4xl md:text-6xl font-bold leading-tight">
            Welcome to <br />
            <span className="text-red-500">SoftNova Tech</span>
          </h1>

          <p className="mt-6 font-montserrat text-gray-300 text-lg leading-relaxed">
            Delivering innovative software solutions for modern businesses. We
            build scalable, secure and high-performance digital products.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-full">
              Get Started
            </button>

            <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ================= Buddy he SERVICES Section Aha ================= */}
      <section className="bg-[#050b1a] py-20 px-6">
        <h2 className="text-center font-futura text-3xl md:text-4xl text-white font-bold mb-14">
          Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#0b132b] rounded-xl overflow-hidden hover:scale-105 transition">
            <img src={webImg} alt="Web Development" />
            <div className="p-6 text-center">
              <h3 className="font-futura text-xl text-white font-bold mb-2">
                Web Development
              </h3>
              <p className="font-montserrat text-gray-400">
                Responsive, fast and modern websites to grow your business.
              </p>
            </div>
          </div>

          <div className="bg-[#0b132b] rounded-xl overflow-hidden hover:scale-105 transition">
            <img src={ecommerceImg} alt="E-Commerce" />
            <div className="p-6 text-center">
              <h3 className="font-futura text-xl text-white font-bold mb-2">
                E-Commerce Solutions
              </h3>
              <p className="font-montserrat text-gray-400">
                Secure online stores with smooth user experience.
              </p>
            </div>
          </div>

          <div className="bg-[#0b132b] rounded-xl overflow-hidden hover:scale-105 transition">
            <img src={aiImg} alt="AI Projects" />
            <div className="p-6 text-center">
              <h3 className="font-futura text-xl text-white font-bold mb-2">
                AI & Python Projects
              </h3>
              <p className="font-montserrat text-gray-400">
                Advanced AI systems and Python-based applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
