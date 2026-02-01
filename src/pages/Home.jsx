// // src/pages/Home.jsx
// import React from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import slide1 from "../pages/Images/Welcome .jpeg";
// import slide2 from "../pages/Images/Web Dev.jpeg";
// import slide3 from "../pages/Images/React Admin .jpeg";
// import slide4 from "../pages/Images/Py dev.jpeg";
// import slide5 from "../pages/Images/E.Commerce.jpeg";
// import Footer from "../components/Footer";

// const Home = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <>
//       {/* ===== Slider Section ===== */}
//       <div className="home-slider ">
//         <Slider {...settings}>
//           <div className="slide h-screen">
//             <img src={slide1} alt="Welcome" />
//             <div className="slide-content">
//               <h1>Welcome to SoftNova Tech</h1>
//               <p>We build modern websites & smart software solutions</p>
//               <p>Your digital growth partner 🚀</p>
//             </div>
//           </div>

//           <div className="slide">
//             <img src={slide2} alt="Web Development" />
//             <div className="slide-content">
//               <h1>Web Development</h1>
//               <p>Business & portfolio websites</p>
//               <p>Fast, secure & responsive designs</p>
//             </div>
//           </div>

//           <div className="slide">
//             <img src={slide3} alt="Ecommerce" />
//             <div className="slide-content">
//               <h1>E-Commerce Solutions</h1>
//               <p>Online stores with admin panels</p>
//               <p>Grow your sales online</p>
//             </div>
//           </div>

//           <div className="slide">
//             <img src={slide4} alt="AI Projects" />
//             <div className="slide-content">
//               <h1>Python & AI Projects</h1>
//               <p>Final Year & Mini Projects</p>
//               <p>With source code & documentation</p>
//             </div>
//           </div>

//           <div className="slide">
//             <img src={slide5} alt="Maintenance" />
//             <div className="slide-content">
//               <h1>Maintenance & Redesign</h1>
//               <p>Website redesign & bug fixing</p>
//               <p>Clean code & better performance</p>
//             </div>
//           </div>
//         </Slider>
//       </div>

//       {/* ===== Normal Page Content (Slider ke neeche) ===== */}
//       <section className="-mt-10 px-6 text-center">
//         <h2 className="text-3xl font-bold mb-4 text-gray-800">
//           Professional Software House
//         </h2>
//         <p className="max-w-3xl mx-auto text-gray-600 leading-7">
//           SoftNova Tech provides complete web development, AI projects,
//           e-commerce solutions and final year projects for students. We focus on
//           clean design, secure backend and modern technologies. ,,,,, SoftNova
//           Tech provides complete web development, AI projects, e-commerce
//           solutions and final year projects for students. We focus on clean
//           design, secure backend and modern technologies SoftNova Tech provides
//           complete web development, AI projects, e-commerce solutions and final
//           year projects for students. We focus on clean design, secure backend
//           and modern technologies SoftNova Tech provides complete web
//           development, AI projects, e-commerce solutions and final year projects
//           for students. SoftNova Tech provides complete web development, AI
//           projects, e-commerce solutions and final year projects for students.
//           We focus on clean design, secure backend and modern technologies We
//           focus on clean design, secure backend and modern technologies
//         </p>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Home;

// // src/pages/Home.jsx
// import React from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import slide1 from "../pages/Images/bg-new1.png";
// import slide2 from "../pages/Images/bg-new2.jpg";
// import slide3 from "../pages/Images/React Admin .jpeg";
// import slide4 from "../pages/Images/Py dev.jpeg";
// import slide5 from "../pages/Images/E.Commerce.jpeg";

// import Footer from "../components/Footer";

// const Home = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,

//   pauseOnHover: false,   // 🔴 IMPORTANT
//   pauseOnFocus: false,   // 🔴 IMPORTANT
//   pauseOnDotsHover: false,
//   cssEase: "linear",
//   };

//   return (
//     <>
//       {/* ================= HERO SLIDER ================= */}
//       <section className="relative">
//         <Slider {...settings}>
//           {[slide1, slide2, slide3, slide4, slide5].map((img, index) => (
//             <div key={index} className="relative h-screen">
//               {/* Background Image */}
//               <img
//                 src={img}
//                 alt="SoftNova Slide"
//                 className="h-full w-full object-cover"
//               />

//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-black/70"></div>

//               {/* Content */}
//               <div className="absolute inset-0 flex items-center justify-center text-center px-6">
//                 <div className="max-w-3xl">
//                   <h1 className="font-futura text-4xl md:text-6xl font-bold text-white tracking-wide mb-4">
//                     {index === 0 && "Welcome to SoftNova Tech"}
//                     {index === 1 && "Web Development"}
//                     {index === 2 && "E-Commerce Solutions"}
//                     {index === 3 && "Python & AI Projects"}
//                     {index === 4 && "Maintenance & Redesign"}
//                   </h1>

//                   <p className="font-montserrat text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
//                     {index === 0 &&
//                       "We build modern websites & smart software solutions"}
//                     {index === 1 &&
//                       "Fast, secure & responsive business websites"}
//                     {index === 2 && "Online stores with powerful admin panels"}
//                     {index === 3 &&
//                       "Final year projects with source code & documentation"}
//                     {index === 4 &&
//                       "Clean code, bug fixing & performance optimization"}
//                   </p>

//                   <div className="flex gap-4 justify-center">
//                     <button className="px-6 py-3 bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-lg">
//                       Get Started
//                     </button>
//                     <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-lg">
//                       Contact Us
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </section>

//       {/* ================= ABOUT SECTION ================= */}
//       <section className="bg-gray-100 py-20 px-6 text-center">
//         <h2 className="font-futura text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//           Professional Software House
//         </h2>

//         <p className="font-montserrat max-w-4xl mx-auto text-gray-600 leading-8">
//           SoftNova Tech is a modern software house providing complete web
//           development, e-commerce solutions, AI & Python projects, and final
//           year student projects. We focus on clean UI, secure backend systems,
//           and scalable technologies that help businesses and individuals grow
//           digitally with confidence.
//         </p>
//       </section>

//       {/* ================= SERVICES PREVIEW ================= */}
//       <section className="bg-black py-20 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//           {[
//             "Web Development",
//             "E-Commerce Solutions",
//             "AI & Python Projects",
//           ].map((service, i) => (
//             <div
//               key={i}
//               className="bg-gray-900 rounded-xl p-8 text-center hover:scale-105 transition"
//             >
//               <h3 className="font-futura text-xl font-bold text-white mb-3">
//                 {service}
//               </h3>
//               <p className="font-montserrat text-gray-400">
//                 High-quality solutions built with modern technologies and best
//                 practices.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Home;

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
