// import React from "react";
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
// import ecommerceImg from "../assets/Image.png";

// const EcommerceService = () => {
//   return (
//     <>
//       <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
//         <div
//           className="relative h-96 bg-cover bg-center flex items-center justify-center"
//           style={{ backgroundImage: `url(${ecommerceImg})` }}
//         >
//           <div className="absolute inset-0 bg-black/60"></div>
//           <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-red-600 text-center">
//             E-Commerce Solutions
//           </h1>
//         </div>

//         <div className="max-w-5xl mx-auto px-6 py-16 text-center">
//           <p className="text-gray-300 text-lg leading-relaxed mb-8">
//             Build secure, scalable online stores with smooth payment integrations and enhanced user experience.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8 mt-12">
//             {[
//               { title: "Payment Integration", desc: "Secure and smooth transactions.", icon: "💳" },
//               { title: "Custom Design", desc: "Beautiful and user-friendly stores.", icon: "🛍️" },
//               { title: "Analytics & Reports", desc: "Track performance and sales.", icon: "📊" },
//             ].map((feature, i) => (
//               <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-lg hover:scale-105 transition-transform duration-500">
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                 <p className="text-gray-400 text-sm">{feature.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-12">
//             <Link to="/services">
//               <button className="bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 transition text-white font-semibold">
//                 Back to Services
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default EcommerceService;


import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ecommerceImg from "../assets/Image.png";

const EcommerceService = () => {
  const features = [
    {
      title: "Payment Integration",
      desc: "Secure and smooth transactions with popular payment gateways.",
      icon: "💳",
    },
    {
      title: "Custom Design",
      desc: "Beautiful, responsive, and user-friendly online stores.",
      icon: "🛍️",
    },
    {
      title: "Analytics & Reports",
      desc: "Monitor performance, sales trends, and user behavior easily.",
      icon: "📊",
    },
    {
      title: "Inventory Management",
      desc: "Keep track of products, stock levels, and automated alerts.",
      icon: "📦",
    },
    {
      title: "Marketing Tools",
      desc: "Integrated tools for promotions, coupons, and SEO optimization.",
      icon: "📢",
    },
    {
      title: "24/7 Support",
      desc: "Reliable technical support to help you scale your business.",
      icon: "🛠️",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
        <div
          className="relative h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${ecommerceImg})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-red-600 text-center">
            E-Commerce Solutions
          </h1>
        </div>

        {/* Intro */}
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
            Build secure, scalable online stores with smooth payment integrations, enhanced user experience, and tools to grow your business effectively.
          </p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-black/20 via-black/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-lg p-6 hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_50px_rgba(239,68,68,0.5)]"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-red-500 transition">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">{feature.desc}</p>

                {/* Accent line */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-16">
            <Link to="/services">
              <button className="bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 transition text-white font-semibold shadow-lg hover:shadow-red-700/50">
                Back to Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-red-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to <span className="text-red-600">Launch Your Online Store?</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Let’s build a scalable, secure, and visually stunning e-commerce platform that grows with your business.
        </p>
        <Link to="/contact">
          <button className="bg-red-600 px-8 py-3 rounded-full hover:bg-red-700 transition text-white font-semibold shadow-lg hover:shadow-red-700/50">
            Contact Us
          </button>
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default EcommerceService;
