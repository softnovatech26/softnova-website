import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
//Card Services routes
import WebService from "./pages/WebService";
import AIService from "./pages/AIService";
import EcommerceService from "./pages/EcommerceService";

import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
// portfolio related pages
import WebDev from "./pages/portfolio/WebDev";
import PythonAI from "./pages/portfolio/PythonAI";
import Graphics from "./pages/portfolio/Graphics";
import Student from "./pages/portfolio/Student";

import Dashboard from "./pages/Dashboard";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* Website Navbar */}
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* // Routes for card services.... */}
          <Route path="/services/web" element={<WebService />} />
          <Route path="/services/ai" element={<AIService />} />
          <Route path="/services/ecommerce" element={<EcommerceService />} />
          
     
        {/* Porfolio Related Routes */}
        <Route path="/portfolio/web" element={<WebDev />} />
        <Route path="/portfolio/python-ai" element={<PythonAI />} />
        <Route path="/portfolio/graphics" element={<Graphics />} />
        <Route path="/portfolio/student" element={<Student />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Website Footer */}
    </Router>
  );
}

export default App;
