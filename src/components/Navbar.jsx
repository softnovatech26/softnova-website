import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      
      <h1 className="text-2xl font-bold text-blue-600">
        SoftNova Tech
      </h1>

      <ul className="flex space-x-8 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
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
