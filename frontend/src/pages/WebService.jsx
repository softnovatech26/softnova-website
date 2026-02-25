import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import webImg from "../assets/Web-Developement-2.png";
import { motion } from "framer-motion";
import reactImg from "../assets/react Js.jpg";
import bootstrapImg from "../assets/bootsrap.jpg";
import tailwindImg from "../assets/tailwindcss.jpg";

const ServiceBlock = ({ title, image, children, reverse }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className={`grid md:grid-cols-2 gap-12 items-center mb-24 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* IMAGE */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <img
        src={image}
        alt={title}
        className="rounded-3xl shadow-2xl border border-white/10"
      />
      <div className="absolute inset-0 rounded-3xl border border-red-600/20"></div>
    </motion.div>

    {/* CONTENT */}
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-xl"
    >
      <h2 className="text-3xl font-bold mb-4 text-red-500">{title}</h2>
      <div className="text-gray-300 leading-relaxed space-y-4">{children}</div>
    </motion.div>
  </motion.div>
);

const WebService = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
        {/* HERO */}
        <div
          className="relative h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${webImg})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-red-600">
            Web Development
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* INTRO */}
          <p className="text-center text-gray-300 text-lg mb-20 max-w-3xl mx-auto">
            We build scalable, high-performance websites using modern
            technologies and best engineering practices. Our goal is to create
            fast, secure, and user-focused digital experiences.
          </p>

          {/* REACT */}
          <ServiceBlock title="React Development" image={reactImg}>
            <p>
              We provide professional React.js development services to build
              fast, scalable, and modern web applications using component-based
              architecture.
            </p>

            <ul className="list-disc ml-5 space-y-2">
              <li>High-performance applications</li>
              <li>Reusable components</li>
              <li>Responsive UI systems</li>
              <li>Single Page Applications</li>
              <li>Secure architecture</li>
            </ul>
          </ServiceBlock>

          {/* BOOTSTRAP */}
          <ServiceBlock
            title="Bootstrap Development"
            image={bootstrapImg}
            reverse
          >
            <p>
              Bootstrap enables rapid development of responsive and
              mobile-friendly websites with consistent UI components and layout
              systems.
            </p>

            <ul className="list-disc ml-5 space-y-2">
              <li>Mobile-first layouts</li>
              <li>Cross-browser compatibility</li>
              <li>Consistent UI components</li>
              <li>Fast development workflow</li>
            </ul>
          </ServiceBlock>

          {/* TAILWIND */}
          <ServiceBlock title="Tailwind CSS Development" image={tailwindImg}>
            <p>
              Tailwind CSS allows us to build modern, SEO-optimized, and
              scalable interfaces using utility-first styling architecture.
            </p>

            <ul className="list-disc ml-5 space-y-2">
              <li>Custom UI systems</li>
              <li>Lightweight styling</li>
              <li>Performance-optimized design</li>
              <li>Modern UI standards</li>
            </ul>
          </ServiceBlock>
          <div className="text-center mt-10 flex justify-center gap-4">
            <Link to="/contact">
              <button className="bg-red-600 px-8 py-3 rounded-full hover:bg-red-700">
                Order Service
              </button>
            </Link>

            <Link to="/services">
              <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black">
                Back
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
