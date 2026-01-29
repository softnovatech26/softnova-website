import React from "react";
import logo from "../assets/SoftNova Logo1-06.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6 rounded-full p-4 shadow-2xl ring-4 ring-red-600/50 bg-white inline-block">
          <img src={logo} alt="SoftNova Logo" className="w-28 h-28 object-contain" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">About Us</h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          SoftNova Tech delivers premium software solutions for startups and enterprises. 
          Our engineering culture focuses on performance, reliability, and scalability. 
          We provide innovative digital products that help businesses grow faster and smarter.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;