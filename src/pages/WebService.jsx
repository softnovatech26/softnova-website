import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import webImg from "../assets/19389.jpg";

const WebService = () => {
  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">

        <div
          className="relative h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${webImg})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-red-600 text-center">
            Web Development
          </h1>
        </div>

     
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We build **modern, scalable, and high-performance web applications** using React, Next.js, Tailwind CSS, and other cutting-edge technologies. Our goal is to deliver websites that not only look amazing but also perform seamlessly.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Responsive Design", desc: "Optimized for all devices, from mobile to desktop.", icon: "📱" },
              { title: "High Performance", desc: "Fast load times and smooth interactions.", icon: "⚡" },
              { title: "SEO Friendly", desc: "Built with modern SEO practices to rank higher.", icon: "🔍" },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-lg hover:scale-105 transition-transform duration-500"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/services">
              <button className="bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 transition text-white font-semibold">
                Back to Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WebService;
