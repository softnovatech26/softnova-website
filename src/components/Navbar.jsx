import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pages/Images/SoftNova Logo.png";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <nav className="relative top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-red-500/30">
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

          {/* HOME */}
          <li>
            <Link
              to="/"
              className="relative text-white font-medium hover:text-red-400 transition
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
              after:bg-red-500 after:transition-all hover:after:w-full"
            >
              Home
            </Link>
          </li>

          {/* 🔥 PORTFOLIO (DROPDOWN – SAME AS ABOUT) */}
          <li
            className="relative"
            onMouseEnter={() => setPortfolioOpen(true)}
            onMouseLeave={() => setPortfolioOpen(false)}
          >
            <button className="flex items-center gap-1 text-white font-medium hover:text-red-400 transition">
              Portfolio <FiChevronDown />
            </button>

            <ul
              className={`absolute top-full mt-3 w-56 rounded-xl bg-black/90
              border border-red-500/20 shadow-xl backdrop-blur-md transition-all
              ${portfolioOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
              <li>
                <Link
                  to="/portfolio/web"
                  className="block px-5 py-2 text-sm text-white
                  hover:bg-red-600/20 hover:text-red-400 transition rounded-lg"
                >
                  Web Development
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio/python-ai"
                  className="block px-5 py-2 text-sm text-white
                  hover:bg-red-600/20 hover:text-red-400 transition rounded-lg"
                >
                  Python & AI
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio/graphics"
                  className="block px-5 py-2 text-sm text-white
                  hover:bg-red-600/20 hover:text-red-400 transition rounded-lg"
                >
                  Graphics Designing
                </Link>
              </li>
               <li>
                <Link
                  to="/portfolio/student"
                  className="block px-5 py-2 text-sm text-white
                  hover:bg-red-600/20 hover:text-red-400 transition rounded-lg"
                >
                  Students Final Year Projects
                </Link>
              </li>

            </ul>
            
          </li>

          {/* SERVICES */}
          <li>
            <Link
              to="/services"
              className="relative text-white font-medium hover:text-red-400 transition
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
              after:bg-red-500 after:transition-all hover:after:w-full"
            >
              Services
            </Link>
          </li>

          {/* CONTACT */}
          <li>
            <Link
              to="/contact"
              className="relative text-white font-medium hover:text-red-400 transition
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
              after:bg-red-500 after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
          </li>

          {/* ABOUT (NO CHANGE) */}
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

      {/* NAVBAR WAVE */}
      <div className="absolute bottom-[15px] left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 90" className="w-full h-[70px]" preserveAspectRatio="none">
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

      {/* MOBILE MENU (UNCHANGED) */}
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
