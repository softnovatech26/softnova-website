import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../pages/Images/SoftNova Logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-md px-8 py-2 flex justify-between items-center relative">
      
      {/* Logo */}
      <img
        src={logo}
        alt="SoftNova Tech Logo"
        className="h-16 w-16 rounded-full object-cover"
      />

      {/* Menu */}
      <ul className="flex space-x-8 text-white font-medium items-center">
        
        <li>
          <Link to="/" className="hover:text-red-300 transition">
            Home
          </Link>
        </li>

        {/* About Dropdown */}
        <li className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-red-300 transition font-medium"
          >
            About
          </button>

          {dropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-white text-gray-700 border rounded-md shadow-lg w-40 z-20">
              <li>
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/mission"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/vision"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Vision
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/portfolio" className="hover:text-red-300 transition">
            Portfolio
          </Link>
        </li>

        <li>
          <Link to="/services" className="hover:text-red-300 transition">
            Services
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-red-300 transition">
            Contact
          </Link>
        </li>

        {/* <li> */}
         
        {/* </li> */}
      </ul>
       <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Login
          </Link>
    </nav>
  );
};

export default Navbar;
