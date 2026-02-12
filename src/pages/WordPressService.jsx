import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import wordpressImg from "../assets/wordpress-theme2.jpg";

import themeImg from "../assets/19389.jpg";
import pluginImg from "../assets/wordpressplugin.jpg";
import seoImg from "../assets/3409297.jpg";

const features = [
  {
    title: "Custom Themes",
    desc: "Modern, fast, and fully responsive WordPress themes.",
    img: themeImg,
  },
  {
    title: "Plugin Integration",
    desc: "Secure and scalable plugin configuration.",
    img: pluginImg,
  },
  {
    title: "SEO Optimization",
    desc: "Search-engine friendly structure and performance.",
    img: seoImg,
  },
];

const WordPressService = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 via-white to-red-50 text-gray-900 overflow-hidden min-h-screen">
        
        {/* HERO */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-5xl font-bold mb-6">
              WordPress Development
            </h1>

            <p className="text-gray-600 mb-8">
              We build fast, secure, and modern WordPress websites designed
              for performance, scalability, and business growth.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap">
              
              {/* ORDER BUTTON */}
              <Link to="/contact">
                <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition shadow-md">
                  Order Now
                </button>
              </Link>

              {/* BACK BUTTON */}
              <Link to="/services">
                <button className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-200 transition">
                  Back to Services
                </button>
              </Link>

            </div>
          </div>

          <img
            src={wordpressImg}
            alt="WordPress service"
            className="rounded-3xl shadow-xl"
          />
        </div>

        {/* FEATURES */}
        <div className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-14">
              Our WordPress Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="h-44 w-full object-cover"
                  />

                  <div className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
};

export default WordPressService;
