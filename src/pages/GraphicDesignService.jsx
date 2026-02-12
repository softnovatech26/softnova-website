import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ServiceBlock from "./ServiceBlock";

import heroImg from "../assets/graphic design.jpg";
import brandingImg from "../assets/Bg-1.png";
import uiuxImg from "../assets/19389.jpg";
import marketingImg from "../assets/Bg-10.png";

const GraphicDesignService = () => {
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
            Graphic Design Services
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-center text-gray-300 text-lg mb-20 max-w-3xl mx-auto">
            We create stunning visual designs that strengthen your brand
            identity, enhance user experience, and drive engagement.
          </p>

          <ServiceBlock title="Branding Design" image={brandingImg}>
            <ul className="list-disc ml-5 space-y-2">
              <li>Logo & corporate identity</li>
              <li>Business cards & stationery</li>
              <li>Brand guidelines & visual assets</li>
            </ul>
          </ServiceBlock>

          <ServiceBlock title="UI/UX Design" image={uiuxImg} reverse>
            <ul className="list-disc ml-5 space-y-2">
              <li>Web & mobile interface design</li>
              <li>Wireframes & prototypes</li>
              <li>User-centered experience</li>
            </ul>
          </ServiceBlock>

          <ServiceBlock title="Marketing Design" image={marketingImg}>
            <ul className="list-disc ml-5 space-y-2">
              <li>Social media visuals</li>
              <li>Promotional graphics & banners</li>
              <li>Infographics & presentation design</li>
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

export default GraphicDesignService;
