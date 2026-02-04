// import React, { useEffect, useState } from "react";

// import heroBg from "../assets/hero-3.jpg";
// import webImg from "../assets/programmer-night.jpg";
// import ecommerceImg from "../assets/e-commers.jpg";
// import aiImg from "../assets/transhumanist-using-neuroscientific-tech-transcend-physical-limitations.jpg";
// import Footer from "../components/Footer";
// const text = "SoftNova Tech";
// const [typedText, setTypedText] = useState("");
// const [index, setIndex] = useState(0);

// useEffect(() => {
//   if (index < text.length) {
//     const timer = setTimeout(() => {
//       setTypedText((prev) => prev + text[index]);
//       setIndex(index + 1);
//     }, 120); // typing speed
//     return () => clearTimeout(timer);
//   }
// }, [index]);

// const Home = () => {
//   return (
//     <>
//       {/* ================= Buddy he Hero Section aha ================= */}
//       <section
//         className="relative min-h-screen flex items-center justify-center"
//         style={{
//           backgroundImage: `url(${heroBg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/80"></div>

//         <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/40 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-0 w-[420px] h-[420px] bg-blue-600/40 rounded-full blur-3xl"></div>

//         <div className="relative z-10 text-center px-6 max-w-4xl">
//           <h1 className="font-futura text-white text-4xl md:text-6xl font-bold leading-tight">
//             Welcome to <br />
//             <span className="flex justify-center gap-1 mt-2">
//               <span className="text-white">{typedText.slice(0, 8)}</span>

//               <span className="text-red-500">{typedText.slice(8)}</span>

//               {/* Cursor */}
//               <span className="text-red-500 animate-pulse">|</span>
//             </span>
//           </h1>

//           <p className="mt-6 font-montserrat text-gray-300 text-lg leading-relaxed">
//             Delivering innovative software solutions for modern businesses. We
//             build scalable, secure and high-performance digital products.
//           </p>

//           <div className="mt-8 flex justify-center gap-4">
//             <button className="px-8 py-3 bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-full">
//               Get Started
//             </button>

//             <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-full">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ================= Buddy he SERVICES Section Aha ================= */}
//       <section className="bg-[#050b1a] py-20 px-6">
//         <h2 className="text-center font-futura text-3xl md:text-4xl text-white font-bold mb-14">
//           Services
//         </h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//           <div className="bg-[#0b132b] rounded-xl overflow-hidden hover:scale-105 transition">
//             <img src={webImg} alt="Web Development" />
//             <div className="p-6 text-center">
//               <h3 className="font-futura text-xl text-white font-bold mb-2">
//                 Web Development
//               </h3>
//               <p className="font-montserrat text-gray-400">
//                 Responsive, fast and modern websites to grow your business.
//               </p>
//             </div>
//           </div>

//           <div className="bg-[#0b132b] rounded-xl overflow-hidden hover:scale-105 transition">
//             <img src={ecommerceImg} alt="E-Commerce" />
//             <div className="p-6 text-center">
//               <h3 className="font-futura text-xl text-white font-bold mb-2">
//                 E-Commerce Solutions
//               </h3>
//               <p className="font-montserrat text-gray-400">
//                 Secure online stores with smooth user experience.
//               </p>
//             </div>
//           </div>

//           <div className="bg-[#0b132b] rounded-xl overflow-hidden hover:scale-105 transition">
//             <img src={aiImg} alt="AI Projects" />
//             <div className="p-6 text-center">
//               <h3 className="font-futura text-xl text-white font-bold mb-2">
//                 AI & Python Projects
//               </h3>
//               <p className="font-montserrat text-gray-400">
//                 Advanced AI systems and Python-based applications.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* More services Add With Create  alll Pages
//          jab card ka uper click hooo serviece component pe ander wala page open hojy
//          Exmple : web Development pe click ho to servers.jsx ka under web Developemt wla page open hojy

//            4 cards name (Wordpress Development)
//            5 card name (Complete IT Solutions & Support)
//            6 card name (Grapics Desging ) */}
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import heroBg from "../assets/hero-3.jpg";
import Footer from "../components/Footer";

const WORDS = ["Soft Nova Tech", "Innovative Solutions", "Digital Excellence"];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-[420px] h-[420px] bg-blue-600/40 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-futura text-white text-4xl md:text-6xl font-bold leading-tight">
            Welcome to <br />
            {/* ===== WORKING MODERN TEXT ===== */}
            <span className="block relative h-[72px] mt-3">
              <span
                key={index}
                className="absolute inset-0 flex justify-center items-center
                  text-red-500
                  animate-word"
              >
                {WORDS[index]}
              </span>
            </span>
          </h1>

          <p className="mt-6 font-montserrat text-gray-300 text-lg leading-relaxed">
            Delivering innovative software solutions for modern businesses.
          </p>
        </div>
      </section>

      <section className="relative bg-[#050b1a] py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Cutting-edge digital solutions to grow your business faster and
            smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service Card Example */}
          {[
            {
              title: "Web Development",
              desc: "High-performance websites using React, Next.js & Tailwind CSS.",
              icon: "💻",
            },
            {
              title: "UI/UX Design",
              desc: "Modern, user-friendly, and visually stunning designs.",
              icon: "🎨",
            },
            {
              title: "E-Commerce Solutions",
              desc: "Secure and scalable online stores with payment integration.",
              icon: "🛒",
            },
            {
              title: "Mobile Apps",
              desc: "Cross-platform mobile apps with smooth UI/UX.",
              icon: "📱",
            },
            {
              title: "AI & Automation",
              desc: "Intelligent systems that automate workflows.",
              icon: "🤖",
            },
            {
              title: "Digital Marketing",
              desc: "SEO, social media & growth strategies for your brand.",
              icon: "📈",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="relative group bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-transform duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.desc}</p>

              {/* Accent line at bottom */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Modern Clients Say Section ================= */}
      <section className="bg-gradient-to-b from-[#0b132b] to-[#050b1a] py-24 px-6 relative overflow-hidden">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16">
          What Our <span className="text-red-500">Clients Say</span>
        </h2>

        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          {[
            {
              name: "John Doe",
              feedback:
                "SoftNova Tech transformed our website. Fast, reliable, and creative!",
              img: "https://via.placeholder.com/100",
              position: "CEO, TechCorp",
            },
            {
              name: "Sara Smith",
              feedback:
                "Amazing AI solutions. Highly professional team and support.",
              img: "https://via.placeholder.com/100",
              position: "Founder, InnovateX",
            },
            {
              name: "Michael Lee",
              feedback:
                "Their development skills are top-notch. Highly recommended!",
              img: "https://via.placeholder.com/100",
              position: "CTO, NextGen Labs",
            },
          ].map((client, i) => (
            <div
              key={i}
              className="relative bg-[#0b132b] rounded-3xl p-8 shadow-lg transform hover:-translate-y-4 hover:scale-105 transition-transform duration-500 overflow-hidden border-t-4 border-red-500"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden shadow-2xl border-4 border-red-500">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-16 text-center">
                <p className="text-gray-300 italic text-lg md:text-xl mb-6">
                  "{client.feedback}"
                </p>
                <h3 className="text-white font-bold text-xl">{client.name}</h3>
                <p className="text-red-500 text-sm">{client.position}</p>
              </div>

              {/* Decorative background shapes */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Modern Blog Section ================= */}
      <section className="bg-[#050b1a] py-24 px-6 relative overflow-hidden">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16">
          Latest <span className="text-red-500">News & Blog</span>
        </h2>

        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          {[
            {
              title: "SoftNova Launches New AI Tool",
              description:
                "Discover how our latest AI product is reshaping digital business automation.",
              image: "https://source.unsplash.com/600x400/?ai,technology",
              category: "AI",
              link: "/blog/ai-tool-launch",
            },
            {
              title: "Modern Web Development Trends",
              description:
                "Explore the latest trends in React, Tailwind, and performance-first development.",
              image: "https://source.unsplash.com/600x400/?web,development",
              category: "Development",
              link: "/blog/web-development-trends",
            },
            {
              title: "E-Commerce Growth Strategies 2026",
              description:
                "Proven techniques to scale your online business in a competitive market.",
              image: "https://source.unsplash.com/600x400/?ecommerce,shopping",
              category: "E-Commerce",
              link: "/blog/ecommerce-growth",
            },
          ].map((blog, i) => (
            <a
              key={i}
              href={blog.link}
              className="group relative rounded-3xl overflow-hidden bg-[#0b132b] shadow-xl transition-transform duration-500 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)]"
            >
          
              <div className="relative h-60 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

             



                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

  
                <span className="absolute top-5 left-5 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide">
                  {blog.category}
                </span>
              </div>




              <div className="p-7">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {blog.description}
                </p>

                <span className="inline-flex items-center gap-2 text-red-500 font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <span className="text-lg">→</span>
                </span>
              </div>

              
              <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-red-600/20 rounded-full blur-3xl"></div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
