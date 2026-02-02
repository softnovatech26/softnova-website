// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <footer className="bg-blue-600 text-white w-full py-8 mt-10">
//       <div className="max-w-6xl mx-auto flex justify-between px-6">

//         {/* LEFT SIDE – SERVICES */}
//         <div>
//           <h2 className="text-xl font-bold mb-4">Our Services</h2>
//           <ul className="space-y-2 text-sm">

//             <li>
//               <Link to="/services/web" className="hover:underline">
//                 Web Development
//               </Link>
//             </li>

//             <li>
//               <Link to="/services/ai" className="hover:underline">
//                 AI / ML Based Projects
//               </Link>
//             </li>

//             <li>
//               <Link to="/services/ecommerce" className="hover:underline">
//                 E-Commerce Websites
//               </Link>
//             </li>

//           </ul>
//         </div>

//         {/* RIGHT SIDE – COPYRIGHT */}
//         <div className="flex items-end text-sm">
//           © 2026 SoftNova Tech. All rights reserved.
//         </div>

//       </div>
//     </footer>

//     // 3 services mane asme link kya he jab click karte he too  us page pe jata he
//     // same baki 3 services ke link add karne he
//     // or same jab click karein tooo services.jsx me uska ander services ka page open hojy
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import logo from "../assets/SoftNova Logo1-06.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white  overflow-hidden">
      <div className="absolute top-0 left-0 w-full ">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-32"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="50%" stopColor="#b31217" />
              <stop offset="100%" stopColor="#ff0000" />
            </linearGradient>
          </defs>

          <path
            fill="url(#waveGradient)"
            d="M0,160L60,138.7C120,117,240,75,360,80C480,85,600,139,720,154.7C840,171,960,149,1080,133.3C1200,117,1320,107,1380,101.3L1440,96V0H0Z"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M0,160L60,138.7C120,117,240,75,360,80C480,85,600,139,720,154.7C840,171,960,149,1080,133.3C1200,117,1320,107,1380,101.3L1440,96V0H0Z;
                M0,180L60,160C120,140,240,100,360,110C480,120,600,160,720,170C840,180,960,160,1080,150C1200,140,1320,130,1380,125L1440,120V0H0Z;
                M0,160L60,138.7C120,117,240,75,360,80C480,85,600,139,720,154.7C840,171,960,149,1080,133.3C1200,117,1320,107,1380,101.3L1440,96V0H0Z
              "
            />
          </path>

          <path
            fill="rgba(255,0,0,0.3)"
            d="M0,200L80,180C160,160,320,120,480,130C640,140,800,200,960,210C1120,220,1280,180,1360,160L1440,140V0H0Z"
          >
            <animate
              attributeName="d"
              dur="25s"
              repeatCount="indefinite"
              values="
                M0,200L80,180C160,160,320,120,480,130C640,140,800,200,960,210C1120,220,1280,180,1360,160L1440,140V0H0Z;
                M0,180L80,160C160,140,320,100,480,110C640,120,800,180,960,190C1120,200,1280,160,1360,140L1440,120V0H0Z;
                M0,200L80,180C160,160,320,120,480,130C640,140,800,200,960,210C1120,220,1280,180,1360,160L1440,140V0H0Z
              "
            />
          </path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="SoftNova Logo"
              className="w-12 h-12 drop-shadow-[0_0_25px_rgba(255,0,0,0.8)]"
            />
            <h2 className="text-3xl font-bold tracking-wide text-white">
              SoftNova <span className="text-red-500">Tech</span>
            </h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            We craft scalable, secure, and modern software solutions for
            startups and enterprises worldwide.
          </p>

          <div className="flex gap-4 mt-4">
            {[
              { Icon: FaFacebookF, href: "https://facebook.com" },
              { Icon: FaTwitter, href: "https://twitter.com" },
              { Icon: FaLinkedinIn, href: "https://linkedin.com" },
              { Icon: FaGithub, href: "https://github.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-lg hover:scale-110 transform transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ################################################### */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-red-500 tracking-wide">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Web Development",
              "AI / ML Solutions",
              "E-Commerce Platforms",
              "UI / UX Design",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to="/services"
                  className="hover:text-red-400 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ####################################################################### */}

        <div>
          <h3 className="font-semibold text-lg mb-4 text-white tracking-wide">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-red-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-red-400 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* #################################################### */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-red-500 tracking-wide">
            Get in Touch
          </h3>
          <p className="text-gray-300 mb-2 text-sm">
            📧 softnovatech.pk@gmail.com
          </p>
          <p className="text-gray-300 mb-4 text-sm">
            🌍 Pakistan · Remote Worldwide
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-2 text-sm font-medium rounded-full bg-red-600 hover:bg-red-500 shadow-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* ############################################################# */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        <p>
          © 2026 <span className="text-white font-medium">SoftNova Tech</span>.
          All rights reserved.
        </p>
        <p className="text-red-500 text-xs mt-1">
          Designed with ❤️ by SoftNova Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
