import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ServiceBlock from "./ServiceBlock";

import heroImg from "../assets/pythonh.jpg";
import aiImg from "../assets/mchinel.jpg";
import dataImg from "../assets/data-science.jpg";
import automationImg from "../assets/automation-system.jpg";

const PythonService = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
        {/* HERO */}
        <div
          className="relative h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <h1 className="relative z-10 text-5xl font-bold text-red-600">
            Python + AI Development
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-center text-gray-300 text-lg mb-20 max-w-3xl mx-auto">
            We build intelligent AI-powered Python systems including machine
            learning applications, automation tools, and data-driven solutions.
          </p>

          <ServiceBlock title="AI & Machine Learning" image={aiImg}>
            <ul className="list-disc ml-5 space-y-2">
              <li>Machine learning models</li>
              <li>Predictive analytics</li>
              <li>NLP systems</li>
              <li>Computer vision apps</li>
            </ul>
          </ServiceBlock>

          <ServiceBlock title="Data Science" image={dataImg} reverse>
            <ul className="list-disc ml-5 space-y-2">
              <li>Data visualization</li>
              <li>Analytics dashboards</li>
              <li>Big data processing</li>
            </ul>
          </ServiceBlock>

          <ServiceBlock title="Automation Systems" image={automationImg}>
            <ul className="list-disc ml-5 space-y-2">
              <li>Task automation</li>
              <li>Web scraping</li>
              <li>Business process automation</li>
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

export default PythonService;
