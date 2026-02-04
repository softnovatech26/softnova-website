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



import React, { useEffect, useRef, useState } from "react";

import heroBg from "../assets/hero-3.jpg";
import Footer from "../components/Footer";

import webImg from "../assets/programmer-night.jpg";
import ecommerceImg from "../assets/e-commers.jpg";
import aiImg from "../assets/transhumanist-using-neuroscientific-tech-transcend-physical-limitations.jpg";

/* ================= Typing Words ================= */
const TYPING_WORDS = [
  "Soft Nova Tech",
  "Innovative Solutions",
  "Digital Excellence",
];

/* ================= Team Scroll Component ================= */
const TeamScroll = ({ members }) => {
  const scrollRef = useRef();
  const [scrollX, setScrollX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2; // duplicate width

    const interval = setInterval(() => {
      if (!isPaused) {
        setScrollX(prev => (prev >= totalWidth ? 0 : prev + 1)); // loop
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isPaused]);

  const duplicatedMembers = [...members, ...members]; // duplicate for seamless scroll

  return (
    <div
      className="w-full overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="flex gap-10"
        style={{ transform: `translateX(-${scrollX}px)`, whiteSpace: "nowrap" }}
      >
        {duplicatedMembers.map((member, i) => (
          <div
            key={i}
            className="min-w-[180px] flex-shrink-0 bg-[#0b132b] rounded-2xl p-6 text-center shadow-xl hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-transform transform hover:-translate-y-2"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-white">{member.name}</h3>
            <p className="text-gray-400 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  /* ================= Typing Effect ================= */
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

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

        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-[420px] h-[420px] bg-blue-600/40 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-futura text-white text-4xl md:text-6xl font-bold leading-tight">
            Welcome to <br />
            <span className="flex justify-center mt-2">
              <span className="text-red-500">{text}</span>
              <span className="text-red-500 animate-pulse ml-1">|</span>
            </span>
          </h1>

          <p className="mt-6 font-montserrat text-gray-300 text-lg leading-relaxed">
            Delivering innovative software solutions for modern businesses.
          </p>
        </div>
      </section>

      {/* ================= Service Section ================= */}
      <section className="relative bg-black py-20 overflow-hidden">
        <div className="absolute -top-20 left-10 w-72 h-72 bg-red-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Our <span className="text-red-500">Services</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We provide cutting-edge digital solutions to help your business grow faster and smarter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Web Development", desc: "High-performance websites using modern technologies like React, Next.js, and Tailwind CSS." },
              { title: "UI / UX Design", desc: "Modern, user-friendly, and visually stunning designs focused on user experience." },
              { title: "E-Commerce Solutions", desc: "Secure and scalable online stores with payment gateway integration." },
              { title: "Mobile App Development", desc: "Cross-platform mobile apps with smooth performance and elegant UI." },
              { title: "AI & Automation", desc: "Intelligent systems that automate workflows and enhance productivity." },
              { title: "Digital Marketing", desc: "SEO, social media, and online marketing strategies to grow your brand." },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Team Section ================= */}
      <section className="relative bg-[#050b1a] py-20 px-6 overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-14">
          Meet Our <span className="text-red-500">Team</span>
        </h2>

        <TeamScroll
          members={[
            { name: "Haseeb ul Hassan Memon", role: "Project Manager", img: "https://via.placeholder.com/150x150.png?text=Alice" },
            { name: "Muhammad Moosa Nizamani", role: "Frontend Developer", img: "https://via.placeholder.com/150x150.png?text=Bob" },
            { name: "Yasir Abbas", role: "Content Writer", img: "https://via.placeholder.com/150x150.png?text=Carol" },
            { name: "Kumail Memon", role: "Graphic Designer", img: "https://via.placeholder.com/150x150.png?text=David" },
            { name: "Shahnaz", role: "Backend Developer", img: "https://via.placeholder.com/150x150.png?text=Eve" },
          ]}
        />
      </section>

      {/* ================= Projects Section ================= */}
      <section className="relative bg-[#0a0f1f] py-20 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-14">
          Our <span className="text-red-500">Projects</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { title: "E-Commerce Platform", img: ecommerceImg, link: "/projects/ecommerce" },
            { title: "AI Chatbot", img: aiImg, link: "/projects/ai-chatbot" },
            { title: "Company Website", img: webImg, link: "/projects/company-website" },
            { title: "WordPress Solution", img: "https://via.placeholder.com/400x300.png?text=WordPress", link: "/projects/wordpress" },
          ].map((project, i) => (
            <div
              key={i}
              className="bg-[#0b132b] rounded-2xl overflow-hidden transition-transform transform hover:-translate-y-3 hover:scale-105 shadow-xl hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]"
            >
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <a href={project.link} className="mt-3 inline-block px-4 py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-500 transition">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Clients Section ================= */}
      <section className="bg-[#0b132b] py-20 px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-14">
          What Our <span className="text-red-500">Clients Say</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { name: "John Doe", feedback: "SoftNova Tech transformed our website. Fast, reliable, and creative!", img: "https://via.placeholder.com/100" },
            { name: "Sara Smith", feedback: "Amazing AI solutions. Highly professional team and support.", img: "https://via.placeholder.com/100" },
            { name: "Michael Lee", feedback: "Their development skills are top-notch. Highly recommended!", img: "https://via.placeholder.com/100" },
          ].map((client, i) => (
            <div key={i} className="bg-[#1b1f3b] p-6 rounded-xl text-center shadow-xl hover:scale-105 transition-transform">
              <img src={client.img} alt={client.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
              <p className="text-gray-300 italic mb-4">"{client.feedback}"</p>
              <h3 className="text-white font-bold">{client.name}</h3>
            </div>
          ))}
        </div>
      </section>

      ================= Partners Section =================
      <section className="bg-[#050b1a] py-20 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-14">
          Our <span className="text-red-500">Partners</span>
        </h2>

        <div className="flex items-center justify-center gap-10 flex-wrap">
          {[
            "https://via.placeholder.com/120x60?text=Client1",
            "https://via.placeholder.com/120x60?text=Client2",
            "https://via.placeholder.com/120x60?text=Client3",
            "https://via.placeholder.com/120x60?text=Client4",
          ].map((logo, i) => (
            <img key={i} src={logo} alt={`Client ${i}`} className="h-16 object-contain grayscale hover:grayscale-0 transition" />
          ))}
        </div>
      </section>

      {/* ================= Blog Section ================= */}
      <section className="bg-[#050b1a] py-20 px-6">
        <h2 className="text-center font-futura text-3xl md:text-4xl text-white font-bold mb-14">
          Latest News & Blog
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "SoftNova Launches New AI Tool", description: "Explore how our AI tool is transforming digital businesses.", image: "https://source.unsplash.com/400x250/?ai,technology", link: "/blog/ai-tool-launch" },
            { title: "5 Tips for Modern Web Development", description: "Best practices and trends for building responsive websites.", image: "https://source.unsplash.com/400x250/?web,development", link: "/blog/web-development-tips" },
            { title: "E-Commerce Growth Strategies 2026", description: "Boost your online store performance with these strategies.", image: "https://source.unsplash.com/400x250/?ecommerce,shopping", link: "/blog/ecommerce-strategies" },
          ].map((item, i) => (
            <a key={i} href={item.link} className="group block bg-[#0b132b] rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="overflow-hidden h-48">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-futura text-xl font-bold mb-2 transition duration-300 group-hover:text-red-500">{item.title}</h3>
                <p className="text-gray-400 font-montserrat mb-4">{item.description}</p>
                <span className="inline-block text-red-500 font-semibold group-hover:underline">Read More →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
