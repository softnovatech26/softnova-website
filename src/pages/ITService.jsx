import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ServiceBlock from "./ServiceBlock";

import heroImg from "../assets/IT-hero.jpg";
import infrastructureImg from "../assets/infrastructure.jpg";
import deploymentImg from "../assets/Deployment.jpg";
import supportImg from "../assets/support.jpg";

const ITService = () => {
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
            IT Solutions & Support
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-center text-gray-300 text-lg mb-20 max-w-3xl mx-auto">
            We provide IT infrastructure, deployment, and support solutions for
            seamless business operations.
          </p>

          <ServiceBlock title="Infrastructure Setup" image={infrastructureImg}>
            <ul className="list-disc ml-5 space-y-2">
              <li>Servers & networks configuration</li>
              <li>Cloud & on-premises setup</li>
              <li>Secure and scalable architecture</li>
            </ul>
          </ServiceBlock>

          <ServiceBlock
            title="Deployment Services"
            image={deploymentImg}
            reverse
          >
            <ul className="list-disc ml-5 space-y-2">
              <li>Application deployment & CI/CD</li>
              <li>Monitoring and logging</li>
              <li>Automated infrastructure scripts</li>
            </ul>
          </ServiceBlock>

          <ServiceBlock title="IT Support & Maintenance" image={supportImg}>
            <ul className="list-disc ml-5 space-y-2">
              <li>24/7 technical support</li>
              <li>Regular system updates</li>
              <li>Troubleshooting & optimization</li>
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

export default ITService;
