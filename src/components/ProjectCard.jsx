import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, image, description, link }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.35)]"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-5 leading-relaxed">
          {description}
        </p>

        <Link
          to={link}
          className="inline-flex items-center gap-2 text-red-500 font-semibold group-hover:gap-3 transition-all"
        >
          View Project →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
