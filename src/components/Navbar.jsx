import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../pages/Images/SoftNova Logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-red-900 to-black shadow-2xl">
      <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">
        <div className="flex  items-center gap-3">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <img
              src={logo}
              alt="SoftNova Tech Logo"
              className="h-12 w-12 object-contain rounded-full"
            />
          </div>
          <span className="text-white font-bold text-xl tracking-wide">
            SoftNova <span className="text-red-300">Tech</span>
          </span>
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="nav-link">About</button>

            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-3 w-44 bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden">
                {[
                  { name: "About Us", path: "/about-us" },
                  { name: "Mission", path: "/mission" },
                  { name: "Vision", path: "/vision" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="block px-5 py-3 hover:bg-red-50 hover:text-red-800 transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        <Link
          to="/login"
          className="bg-red-800 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-red-900 hover:scale-105 transition duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
