// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../pages/Images/SoftNova Logo.png";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-white backdrop-blur-md sticky top-0 z-50 shadow-lg  bg-gradient-to-br from-red-800/70  to-red-400/30 border-b border-red-200">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
//         <Link
//           to="/"
//           className="flex items-center gap-3 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
//         >
//           <div className="rounded-full p-1 shadow-md bg-red-100">
//             <img
//               src={logo}
//               alt="SoftNova Logo"
//               className="h-12 w-12 object-contain rounded-full"
//             />
//           </div>
//           <span className="text-red-600 text-2xl font-bold font-futura tracking-wider">
//             SoftNova <span className="text-red-900">Tech</span>
//           </span>
//         </Link>

//         <ul className="hidden md:flex items-center space-x-10">
//           <li className="relative group">
//             <Link
//               to="/"
//               className="text-red-800 font-medium relative inline-block px-2 py-1 transform transition duration-300 hover:-translate-y-1 hover:scale-105"
//             >
//               Home
//               <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </li>

//           <li
//             className="relative group"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <button className="text-red-800 font-medium relative inline-block px-2 py-1 transform transition duration-300 hover:-translate-y-1 hover:scale-105">
//               About
//               <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//             </button>

//             <ul
//               className={`absolute left-0 top-full mt-1 w-44 bg-white text-gray-800 rounded-md shadow-md overflow-hidden transition-all duration-300 ${
//                 dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
//               }`}
//               style={{ zIndex: 999 }}
//             >
//               {[
//                 { name: "About", path: "/about" },
//                 { name: "Mission", path: "/mission" },
//                 { name: "Vision", path: "/vision" },
//               ].map((item, i) => (
//                 <li key={i}>
//                   <Link
//                     to={item.path}
//                     className="block px-5 py-2 hover:bg-red-50 hover:text-red-800 transition-colors"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//           </li>
//              <li className="relative group">
//             <Link
//               to="/portfolio"
//               className="text-red-800 font-medium relative inline-block px-2 py-1 transform transition duration-300 hover:-translate-y-1 hover:scale-105"
//             >
//               Portfolio
//               <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </li>

//           <li className="relative group">
//             <Link
//               to="/services"
//               className="text-red-800 font-medium relative inline-block px-2 py-1 transform transition duration-300 hover:-translate-y-1 hover:scale-105"
//             >

//               Services
//               <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </li>

//           <li className="relative group">
//             <Link
//               to="/contact"
//               className="text-red-800 font-medium relative inline-block px-2 py-1 transform transition duration-300 hover:-translate-y-1 hover:scale-105"
//             >
//               Contact
//               <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </li>
//         </ul>

//         <div className="hidden md:block">
//           <Link
//             to="/login"
//             className="ml-6 bg-red-800 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-red-900 hover:scale-105 transition-transform duration-300"
//           >
//             Login
//           </Link>
//         </div>

//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-red-800 focus:outline-none text-2xl"
//           >
//             {menuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md px-6 pb-6">
//           <ul className="flex flex-col space-y-4">
//             <li>
//               <Link
//                 to="/"
//                 className="text-red-800 font-medium relative inline-block px-2 py-1 hover:-translate-y-1 hover:scale-105 transition-transform"
//               >
//                 Home
//                 <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>

//             <li>
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="text-red-800 font-medium relative inline-block px-2 py-1 w-full text-left hover:-translate-y-1 hover:scale-105 transition-transform"
//               >
//                 About
//                 <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </button>

//               {dropdownOpen && (
//                 <ul className="mt-2 pl-4 flex flex-col space-y-2">
//                   {[
//                     { name: "About Us", path: "/about-us" },
//                     { name: "Mission", path: "/mission" },
//                     { name: "Vision", path: "/vision" },
//                   ].map((item, i) => (
//                     <li key={i}>
//                       <Link
//                         to={item.path}
//                         className="block text-red-800 px-2 py-1 hover:bg-red-50 rounded transition-colors"
//                       >
//                         {item.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>

//             <li>
//               <Link
//                 to="/services"
//                 className="text-red-800 font-medium relative inline-block px-2 py-1 hover:-translate-y-1 hover:scale-105 transition-transform"
//               >
//                 Services
//                 <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/contact"
//                 className="text-red-800 font-medium relative inline-block px-2 py-1 hover:-translate-y-1 hover:scale-105 transition-transform"
//               >
//                 Contact
//                 <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/login"
//                 className="bg-red-800 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-red-900 hover:scale-105 transition-transform duration-300 inline-block"
//               >
//                 Login
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pages/Images/SoftNova Logo.png";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="relative top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-red-500/30 ">
      {/* MAIN BAR */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between relative z-10">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="SoftNova Logo"
            className="h-11 w-11 rounded-full shadow-lg group-hover:scale-110 transition"
          />
          <span className="text-xl font-bold tracking-wider text-white">
            SoftNova <span className="text-red-500">Tech</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10">
          {["Home", "Portfolio", "Services", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="relative text-white font-medium hover:text-red-400 transition
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                after:bg-red-500 after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* ABOUT */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-white font-medium hover:text-red-400 transition">
              About <FiChevronDown />
            </button>

            <ul
              className={`absolute top-full mt-3 w-44 rounded-xl bg-black/90
              border border-red-500/20 shadow-xl backdrop-blur-md transition-all
              ${dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
              {["About", "Mission", "Vision"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="block px-5 py-2 text-sm text-white
                    hover:bg-red-600/20 hover:text-red-400 transition rounded-lg"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* LOGIN */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="px-6 py-2 rounded-full bg-red-600 text-white font-semibold
            shadow-lg hover:bg-red-500 hover:scale-105 transition"
          >
            Login
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* NAVBAR WAVE (DESKTOP + MOBILE BOTH) */}
      <div className="absolute bottom-[15px] left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          className="w-full h-[70px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="navbarWave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="50%" stopColor="#b31217" />
              <stop offset="100%" stopColor="#ff0000" />
            </linearGradient>
          </defs>

          <path
            fill="url(#navbarWave)"
            fillOpacity="0.9"
            d="M0,40 C120,60 240,20 360,30 480,40 600,70 720,60
               840,50 960,30 1080,35 1200,40 1320,55 1440,45
               L1440,0 L0,0 Z"
          >
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="
              M0,40 C120,60 240,20 360,30 480,40 600,70 720,60
              840,50 960,30 1080,35 1200,40 1320,55 1440,45 L1440,0 L0,0 Z;
              M0,45 C120,30 240,40 360,50 480,60 600,40 720,50
              840,60 960,40 1080,45 1200,50 1320,35 1440,40 L1440,0 L0,0 Z;
              M0,40 C120,60 240,20 360,30 480,40 600,70 720,60
              840,50 960,30 1080,35 1200,40 1320,55 1440,45 L1440,0 L0,0 Z
              "
            />
          </path>
        </svg>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-red-500/20 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {["Home", "Portfolio", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="text-white font-medium hover:text-red-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
