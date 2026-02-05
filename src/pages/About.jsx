import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Hasseb from "../assets/IMG-20260204-WA0043.jpg";
import Kumail from "../assets/IMG-20260204-WA0071.jpg";




const team = [
  {
    name: "Haseeb ul Hassan",
    role: "Founder & CEO",
    image: Hasseb,
  },
  {
    name: "Muhammad Moosa",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Yasir Abbas",
    role: "Content Writer",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Kumail",
    role: "Graphic Designer",
    image: Kumail,
  },
  {
    name: "Shahnaz",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Faiza Soomro",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Muhammad Mairaj",
    role: "Junior Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Ramsha Haider",
    role: "Junior Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-black via-gray-900 to-red-900 text-white overflow-hidden min-h-screen">
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900" />

          <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-red-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-red-800/20 rounded-full blur-3xl" />

          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
  
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Building the Future with
                <span className="block text-red-600">Soft Nova Tech</span>
              </h1>

              <p className="mt-6 text-gray-300 max-w-lg text-justify leading-relaxed">
                SoftNova Tech delivers premium software solutions tailored for
                startups and enterprises worldwide. Our team is driven by a
                strong engineering culture that prioritizes performance,
                reliability, and scalability in every product we build. We
                specialize in crafting modern web applications, intelligent
                digital solutions, and scalable backend systems that empower
                businesses to grow faster and operate smarter. At SoftNova Tech,
                we combine innovation, technology, and creativity to transform
                ideas into powerful digital experiences that create real impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[360px] rounded-3xl bg-gradient-to-br from-red-700 via-black to-gray-900 shadow-2xl border border-white/10 backdrop-blur-xl">
                <div className="p-6 space-y-4">
                  <div className="w-24 h-3 bg-red-600 rounded" />
                  <div className="w-40 h-3 bg-gray-600 rounded" />
                  <div className="w-full h-32 bg-black/40 rounded-xl border border-white/10" />
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg" />
                    <div className="w-10 h-10 bg-gray-700 rounded-lg" />
                    <div className="w-10 h-10 bg-gray-700 rounded-lg" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative py-28 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900" />
          <div className="absolute -left-32 top-10 w-96 h-96 bg-red-600/20 blur-3xl rounded-full" />

          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-red-500 font-semibold mb-3 tracking-wider">
                COMPANY OVERVIEW
              </p>

              <h2 className="text-4xl  md:text-5xl font-bold mb-5  ">
                Engineering Meets SoftNova Tech
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                SoftNova Tech focuses on building high-performance applications
                using modern technologies. Our team designs reliable
                architectures and beautiful user experiences that scale with
                business growth.
              </p>

              <div className="flex gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3">
                  <p className="text-red-500 font-bold text-xl">50+</p>
                  <p className="text-gray-400 text-sm">Projects</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3">
                  <p className="text-red-500 font-bold text-xl">20+</p>
                  <p className="text-gray-400 text-sm">Clients</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[320px] rounded-3xl bg-gradient-to-br from-red-700 via-black to-gray-900 border border-white/10 shadow-2xl backdrop-blur-xl p-6">
        
                <div className="space-y-4">
                  <div className="w-32 h-3 bg-red-600 rounded" />
                  <div className="w-48 h-3 bg-gray-600 rounded" />

                  <div className="h-36 bg-black/40 border border-white/10 rounded-xl" />

                  <div className="flex gap-3">
                    <div className="flex-1 h-10 bg-red-600 rounded-lg" />
                    <div className="flex-1 h-10 bg-gray-700 rounded-lg" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-red-700/20 blur-3xl rounded-full" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center text-4xl font-bold mb-16"
            >
              Our <span className="text-red-600">Impact</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "20+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
                { value: "24/7", label: "Support" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg"
                >
                  <h3 className="text-4xl font-bold text-red-600">
                    {item.value}
                  </h3>
                  <p className="text-gray-400 mt-2">{item.label}</p>

                  <div className="w-0 h-[2px] bg-red-600 mx-auto mt-4 group-hover:w-16 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28 bg-gradient-to-b from-black via-gray-950 to-black">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">
              Meet Our <span className="text-red-600">Team</span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -10 }}
                  className="group relative rounded-3xl overflow-hidden 
          bg-white/5 border border-white/10 backdrop-blur-xl
          shadow-[0_0_40px_rgba(255,0,0,0.08)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "https://via.placeholder.com/400"}
                      alt={member.name}
                      className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                    <div className="absolute bottom-0 left-0 right-0 translate-y-10 group-hover:translate-y-0 transition duration-500 p-4">
                      <p className="text-red-500 text-sm tracking-wide">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{member.name}</h3>

                    <div className="w-0 group-hover:w-14 h-[2px] bg-red-600 mt-3 transition-all duration-500 mx-auto" />
                  </div>

                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-red-600/10 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
