// src/pages/Home.jsx
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../pages/Images/Welcome .jpeg";
import slide2 from "../pages/Images/Web Dev.jpeg";
import slide3 from "../pages/Images/React Admin .jpeg";
import slide4 from "../pages/Images/Py dev.jpeg";
import slide5 from "../pages/Images/E.Commerce.jpeg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      {/* ===== Slider Section ===== */}
      <div className="home-slider">
        <Slider {...settings}>
          <div className="slide">
            <img src={slide1} alt="Welcome" />
            <div className="slide-content">
              <h1>Welcome to SoftNova Tech</h1>
              <p>We build modern websites & smart software solutions</p>
              <p>Your digital growth partner 🚀</p>
            </div>
          </div>

          <div className="slide">
            <img src={slide2} alt="Web Development" />
            <div className="slide-content">
              <h1>Web Development</h1>
              <p>Business & portfolio websites</p>
              <p>Fast, secure & responsive designs</p>
            </div>
          </div>

          <div className="slide">
            <img src={slide3} alt="Ecommerce" />
            <div className="slide-content">
              <h1>E-Commerce Solutions</h1>
              <p>Online stores with admin panels</p>
              <p>Grow your sales online</p>
            </div>
          </div>

          <div className="slide">
            <img src={slide4} alt="AI Projects" />
            <div className="slide-content">
              <h1>Python & AI Projects</h1>
              <p>Final Year & Mini Projects</p>
              <p>With source code & documentation</p>
            </div>
          </div>

          <div className="slide">
            <img src={slide5} alt="Maintenance" />
            <div className="slide-content">
              <h1>Maintenance & Redesign</h1>
              <p>Website redesign & bug fixing</p>
              <p>Clean code & better performance</p>
            </div>
          </div>
        </Slider>
      </div>

      {/* ===== Normal Page Content (Slider ke neeche) ===== */}
      <section className="-mt-10 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Professional Software House
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-7">
          SoftNova Tech provides complete web development, AI projects,
          e-commerce solutions and final year projects for students.
          We focus on clean design, secure backend and modern technologies.

          ,,,,,
          SoftNova Tech provides complete web development, AI projects,
          e-commerce solutions and final year projects for students.
          We focus on clean design, secure backend and modern technologies
          SoftNova Tech provides complete web development, AI projects,
          e-commerce solutions and final year projects for students.
          We focus on clean design, secure backend and modern technologies
          SoftNova Tech provides complete web development, AI projects,
          e-commerce solutions and final year projects for students.
          SoftNova Tech provides complete web development, AI projects,
          e-commerce solutions and final year projects for students.
          We focus on clean design, secure backend and modern technologies
          We focus on clean design, secure backend and modern technologies
        </p>
      </section>
    </>
  );
};

export default Home;
