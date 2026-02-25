
import { Link } from "react-router-dom";
import webImg from "./Images/Web Dev.jpeg";
import aiImg from "./Images/Py dev.jpeg";
import ecommerceImg from "./Images/E.Commerce.jpeg";
import wordpressImg from "../assets/programmer-night.jpg";
import itImg from "../assets/transhumanist-using-neuroscientific-tech-transcend-physical-limitations.jpg";
import graphicImg from "../assets/graphic design.jpg";
import Footer from "../components/Footer";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Modern React and scalable web applications.",
      img: webImg,
      link: "/services/web",
    },
    {
      title: "AI & Python Projects",
      desc: "AI automation, ML models and Python systems.",
      img: aiImg,
      link: "/services/python",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Complete online store development systems.",
      img: ecommerceImg,
      link: "/services/ecommerce",
    },
    {
      title: "WordPress Development",
      desc: "Custom WordPress business websites.",
      img: wordpressImg,
      link: "/services/wordpress",
    },
     {
      title: "Graphics Designing",
      desc: "Branding, UI design and marketing visuals.",
      img: graphicImg,
      link: "/services/graphics",
    },
    {
      title: "IT Solutions & Support",
      desc: "Infrastructure, deployment and support.",
      img: itImg,
      link: "/services/it",
    },
   
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 py-20 px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-red-600">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We deliver modern digital solutions that combine performance,
            scalability, and design excellence.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative rounded-3xl overflow-hidden 
              bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl 
              transform transition duration-500 hover:-translate-y-4 hover:shadow-red-900/40"
            >

              <div className="h-52 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>


              <div className="relative p-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>

            
              <div className="absolute inset-0 rounded-3xl border border-red-600/0 group-hover:border-red-600/40 transition duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
