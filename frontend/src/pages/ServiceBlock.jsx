import { motion } from "framer-motion";

const ServiceBlock = ({ title, image, children, reverse }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-2 gap-12 items-center mb-24"
  >
    {/* IMAGE */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={reverse ? "order-2" : ""}
    >
      <img
        src={image}
        alt={title}
        className="rounded-3xl shadow-2xl border border-white/10"
      />
    </motion.div>

    {/* CONTENT */}
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-xl"
    >
      <h2 className="text-3xl font-bold mb-4 text-red-500">{title}</h2>
      <div className="text-gray-300 space-y-4">{children}</div>
    </motion.div>
  </motion.div>
);

export default ServiceBlock;
