// import { Link } from "react-router-dom";
// import { useState } from "react";
// import logo from "../pages/Images/SoftNova Logo.png";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-red-800 shadow-2xl px-8 py-2 flex justify-between items-center relative">

//       {/* Logo */}
//       <img
//         src={logo}
//         alt="SoftNova Tech Logo"
//         className="h-16 w-16 rounded-full object-cover"
//       />

//       {/* Menu */}
//       <ul className="flex space-x-8 text-white font-medium items-center">

//         <li>
//           <Link to="/" className="hover:text-red-300 transition">
//             Home
//           </Link>
//         </li>

//         {/* About Dropdown */}
//         <li className="relative">
//           <button
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="hover:text-red-300 transition font-medium"
//           >
//             About
//           </button>

//           {dropdownOpen && (
//             <ul className="absolute top-full left-0 mt-2 bg-white text-gray-700 border rounded-md shadow-lg w-40 z-20">
//               <li>
//                 <Link
//                   to="/about"
//                   className="block px-4 py-2 hover:bg-blue-100"
//                   onClick={() => setDropdownOpen(false)}
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/mission"
//                   className="block px-4 py-2 hover:bg-blue-100"
//                   onClick={() => setDropdownOpen(false)}
//                 >
//                   Mission
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/vision"
//                   className="block px-4 py-2 hover:bg-blue-100"
//                   onClick={() => setDropdownOpen(false)}
//                 >
//                   Vision
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li>
//           <Link to="/portfolio" className="hover:text-red-300 transition">
//             Portfolio
//           </Link>
//         </li>

//         <li>
//           <Link to="/services" className="hover:text-red-300 transition">
//             Services
//           </Link>
//         </li>

//         <li>
//           <Link to="/contact" className="hover:text-red-300 transition">
//             Contact
//           </Link>
//         </li>

//         {/* <li> */}

//         {/* </li> */}
//       </ul>
//        <Link
//             to="/login"
//             className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
//           >
//             Login
//           </Link>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../pages/Images/SoftNova Logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-red-900 to-black shadow-2xl">
      <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">
        {/* Logo + Brand */}
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

        {/* Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          {/* About Dropdown */}
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

        {/* Login Button */}
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
