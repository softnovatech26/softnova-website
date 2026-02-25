import { motion } from "framer-motion";
import Footer from "../components/Footer";
const Vision = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white overflow-hidden relative">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-red-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-800/20 blur-3xl rounded-full" />

        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-red-500 font-semibold tracking-wider mb-3">
              OUR FUTURE GOAL
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Our <span className="text-red-600">Vision</span>
            </h1>

            <p className="text-gray-300 leading-relaxed mb-6">
              Our vision is to empower students and businesses by bridging the
              gap between education and real-world technology through Artificial
              Intelligence and modern software solutions.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              We envision a future where students become innovators,
              problem-solvers, and technology leaders by working on real-world
              software and AI projects.
            </p>

            <p className="text-gray-300 leading-relaxed">
              SoftNova Tech aims to become a trusted innovation platform that
              nurtures talent and delivers scalable, intelligent, and secure
              digital solutions for modern businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="relative h-[420px] rounded-3xl 
          bg-gradient-to-br from-red-700 via-black to-gray-900
          border border-white/10 backdrop-blur-xl shadow-2xl p-8"
            >
              <div className="space-y-6">
                <div className="w-32 h-3 bg-red-600 rounded" />
                <div className="w-48 h-3 bg-gray-600 rounded" />

                <div className="h-44 bg-black/40 border border-white/10 rounded-xl" />

                <div className="grid grid-cols-3 gap-3">
                  <div className="h-12 bg-red-600 rounded-lg" />
                  <div className="h-12 bg-gray-700 rounded-lg" />
                  <div className="h-12 bg-gray-700 rounded-lg" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-red-600/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vision;
