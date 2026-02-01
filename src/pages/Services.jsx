import { Link } from "react-router-dom";
import webImg from "./Images/Web Dev.jpeg";
import aiImg from "./Images/Py dev.jpeg";
import ecommerceImg from "./Images/E.Commerce.jpeg";

const Services = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Web Development */}
        <div className="border rounded-lg shadow p-4">
          <img src={webImg} alt="Web Development" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Web Development</h2>
          <p className="text-sm mt-2">
            Modern React websites with fast performance.
          </p>
          <Link to="/services/web">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              View Details
            </button>
          </Link>
        </div>

        {/* AI / Python */}
        <div className="border rounded-lg shadow p-4">
          <img src={aiImg} alt="AI Projects" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">AI & Python Projects</h2>
          <p className="text-sm mt-2">
            AI, ML & Python based smart solutions.
          </p>
          <Link to="/services/ai">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              View Details
            </button>
          </Link>
        </div>

        {/* E-commerce */}
        <div className="border rounded-lg shadow p-4">
          <img src={ecommerceImg} alt="Ecommerce" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">E-Commerce Websites</h2>
          <p className="text-sm mt-2">
            Online stores with admin panels & payments.
          </p>
          <Link to="/services/ecommerce">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              View Details
            </button>
          </Link>
        </div>
           {/* More services Add With Create Pages 3  pages alrady created  
           and Defered to Home.jsx card Section  
           and baki 3 pages created karna he and import karna he app.js me
           and filah sub ase simple pages rakhna ander waly jasa mana rakhe hein uspe next work karein he 
           4 cards name (Wordpress Development)
           5 card name (Complete IT Solutions & Support)
           6 card name (Grapics Desging ) */}

      </div>
    </div>
  );
};

export default Services;
