import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white w-full py-8 mt-10">
      <div className="max-w-6xl mx-auto flex justify-between px-6">

        {/* LEFT SIDE – SERVICES */}
        <div>
          <h2 className="text-xl font-bold mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm">

            <li>
              <Link to="/services/web" className="hover:underline">
                Web Development
              </Link>
            </li>

            <li>
              <Link to="/services/ai" className="hover:underline">
                AI / ML Based Projects
              </Link>
            </li>

            <li>
              <Link to="/services/ecommerce" className="hover:underline">
                E-Commerce Websites
              </Link>
            </li>

          </ul>
        </div>

        {/* RIGHT SIDE – COPYRIGHT */}
        <div className="flex items-end text-sm">
          © 2026 SoftNova Tech. All rights reserved.
        </div>

      </div>
    </footer>

    // 3 services mane asme link kya he jab click karte he too  us page pe jata he 
    // same baki 3 services ke link add karne he 
    // or same jab click karein tooo services.jsx me uska ander services ka page open hojy  
  );
};

export default Footer;
