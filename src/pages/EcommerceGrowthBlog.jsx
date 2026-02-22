import React from "react";
import { Link } from "react-router-dom";

const EcommerceGrowthBlog = () => {
  return (
    <div className="bg-[#050b1a] text-white min-h-screen relative overflow-hidden">

      {/* Wave Top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none -z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-32" preserveAspectRatio="none">
          <defs>
            <linearGradient id="blogWave3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="50%" stopColor="#b31217" />
              <stop offset="100%" stopColor="#ff0000" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blogWave3)"
            fillOpacity="0.9"
            d="M0,80 C300,120 600,40 900,60 1200,80 1440,20 1440,20 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="mb-6 text-sm text-gray-400">
          <Link to="/blog" className="hover:text-red-500 transition">Blog</Link> / E-Commerce Growth
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
          E-Commerce Growth Strategies 2026
        </h1>

        <div className="mb-12 rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200"
            alt="E-Commerce Growth"
            className="w-full object-cover h-96 md:h-[500px] transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            Scaling an e-commerce business in 2026 requires a combination of proven strategies and innovative approaches. 
          </p>
          <p>
            Key strategies include improving user experience, implementing AI-driven personalization, 
            optimizing product listings for search engines, and expanding social media marketing channels.
          </p>
          <p>
            By continuously analyzing performance metrics and adapting to emerging trends, businesses can achieve sustainable 
            growth and maintain a competitive edge in the evolving e-commerce landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcommerceGrowthBlog;