// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

//       <h1 className="text-2xl font-bold text-blue-600">
//         SoftNova Tech
//       </h1>

//       <ul className="flex space-x-8 text-gray-700 font-medium">
//         <li>
//           <Link to="/" className="hover:text-blue-600 transition">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="hover:text-blue-600 transition">
//             About
//           </Link>
//         </li>
//         <li>
//   <Link to="/portfolio" className="hover:text-blue-600 transition">
//     Portfolio
//   </Link>
// </li>

//         <li>
//           <Link to="/services" className="hover:text-blue-600 transition">
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="hover:text-blue-600 transition">
//             Contact
//           </Link>
//         </li>
//         <li>
//   <Link
//     to="/login"
//     className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//   >
//     Login
//   </Link>
// </li>

//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">SoftNova Tech</h1>

      {/* Menu */}
      <ul className="flex space-x-8 text-gray-700 font-medium items-center">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
        </li>

        {/* About Dropdown */}
        <li className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-blue-600 transition font-medium"
          >
            About
          </button>

          {/* Dropdown List */}
          {dropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-40 z-20">
              <li>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/mission"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/vision"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  Vision
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/portfolio" className="hover:text-blue-600 transition">
            Portfolio
          </Link>
        </li>

        <li>
          <Link to="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
