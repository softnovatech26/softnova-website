import logo from "../pages/Images/SoftNova Logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md px-8 py-2 flex justify-between items-center">
      
      <img 
  src={logo} 
  alt="SoftNova Tech Logo" 
  className="h-20  w-20 rounded-full object-cover"
/>


      <ul className="flex space-x-8 text-white font-medium">
        <li>
          <Link to="/" className="hover:text-red-300 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-red-300 transition">
            About
          </Link>
        </li>
        <li>
  <Link to="/portfolio" className="hover:text-red-300 transition">
    Portfolio
  </Link>
</li>

        <li> 
          <Link to="/services" className=" hover:text-red-300 transition">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-red-300 transition">
            Contact
          </Link>
        </li>
        

      </ul>
      {/* <li> */}
  <Link
    to="/login"
    className="bg-lime text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Login
  </Link>
{/* </li> */}
    </nav>
  );
};

export default Navbar;
