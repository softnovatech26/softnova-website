import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pages/Images/SoftNova Logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // please buddy sahab ye icons install kajo thanks

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        <Link
          to="/"
          className="flex items-center gap-3 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="rounded-full p-1 shadow-md bg-red-100">
            <img
              src={logo}
              alt="SoftNova Logo"
              className="h-12 w-12 object-contain rounded-full"
            />
          </div>
          <span className="text-red-600 text-2xl font-bold tracking-wider">
            SoftNova <span className="text-red-900">Tech</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center space-x-10">
          <li className="relative group">
            <Link
              to="/"
              className="text-red-800 font-medium relative inline-block px-2 py-1 transform transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Home
              <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-red-800 font-medium relative inline-block px-2 py-1 transform transition duration-300 hover:-translate-y-1 hover:scale-105">
              About
              <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </button>

            <ul
              className={`absolute left-0 top-full mt-1 w-44 bg-white text-gray-800 rounded-md shadow-md overflow-hidden transition-all duration-300 ${
                dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              style={{ zIndex: 999 }}
            >
              {[
                { name: "About Us", path: "/about-us" },
                { name: "Mission", path: "/mission" },
                { name: "Vision", path: "/vision" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="block px-5 py-2 hover:bg-red-50 hover:text-red-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="relative group">
            <Link
              to="/services"
              className="text-red-800 font-medium relative inline-block px-2 py-1 transform transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Services
              <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li className="relative group">
            <Link
              to="/contact"
              className="text-red-800 font-medium relative inline-block px-2 py-1 transform transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Contact
              <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link
            to="/login"
            className="ml-6 bg-red-800 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-red-900 hover:scale-105 transition-transform duration-300"
          >
            Login
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-red-800 focus:outline-none text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/"
                className="text-red-800 font-medium relative inline-block px-2 py-1 hover:-translate-y-1 hover:scale-105 transition-transform"
              >
                Home
                <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-red-800 font-medium relative inline-block px-2 py-1 w-full text-left hover:-translate-y-1 hover:scale-105 transition-transform"
              >
                About
                <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </button>

              {dropdownOpen && (
                <ul className="mt-2 pl-4 flex flex-col space-y-2">
                  {[
                    { name: "About Us", path: "/about-us" },
                    { name: "Mission", path: "/mission" },
                    { name: "Vision", path: "/vision" },
                  ].map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.path}
                        className="block text-red-800 px-2 py-1 hover:bg-red-50 rounded transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/services"
                className="text-red-800 font-medium relative inline-block px-2 py-1 hover:-translate-y-1 hover:scale-105 transition-transform"
              >
                Services
                <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-red-800 font-medium relative inline-block px-2 py-1 hover:-translate-y-1 hover:scale-105 transition-transform"
              >
                Contact
                <span className="absolute left-0 -bottom-0.5 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="bg-red-800 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-red-900 hover:scale-105 transition-transform duration-300 inline-block"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
