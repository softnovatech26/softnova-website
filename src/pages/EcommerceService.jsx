import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ServiceBlock from "./ServiceBlock";

import heroImg from "../assets/e-commers.jpg";
import storeImg from "../assets/Custom Online Stores.jpg";
import paymentImg from "../assets/Payment Integration.jpg";
import analyticsImg from "../assets/Analytics & Reports.jpg";

const EcommerceService = () => {
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
            E-Commerce Solutions
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-center text-gray-300 text-lg mb-20 max-w-3xl mx-auto">
            We deliver complete e-commerce systems with beautiful design, secure payments, and powerful analytics.
          </p>

          <ServiceBlock title="Custom Online Stores" image={storeImg}>
            <ul className="list-disc ml-5 space-y-2">
              <li>Responsive product catalogs</li>
              <li>Custom storefront designs</li>
              <li>User-friendly checkout flow</li>
            </ul>
          </ServiceBlock>

          <ServiceBlock title="Payment Integration" image={paymentImg} reverse>
            <ul className="list-disc ml-5 space-y-2">
              <li>Secure payment gateways</li>
              <li>Multiple payment options</li>
              <li>Fraud prevention & security</li>
            </ul>
          </ServiceBlock>

          <ServiceBlock title="Analytics & Reports" image={analyticsImg}>
            <ul className="list-disc ml-5 space-y-2">
              <li>Track sales & customer behavior</li>
              <li>Revenue and conversion insights</li>
              <li>Custom dashboards & reports</li>
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

export default EcommerceService;
