import Footer from "../components/Footer";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://softnova-website.onrender.com/api/contact/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("Error: " + JSON.stringify(data.errors));
      }
    } catch (error) {
      setSubmitStatus("Error: Could not send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-gray-400">
            We'd love to hear from you. Send us a message or reach out via email
            or phone.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div
              className="group relative rounded-3xl overflow-hidden 
              bg-white/5 border border-white/10 backdrop-blur-xl
              shadow-xl transform transition duration-500
              hover:-translate-y-4 hover:shadow-red-900/40 p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a
                href="mailto:softnovatech.pk@gmail.com"
                className="text-red-600 hover:underline"
              >
                softnovatech.pk@gmail.com
              </a>
            </div>

            <div
              className="group relative rounded-3xl overflow-hidden 
              bg-white/5 border border-white/10 backdrop-blur-xl
              shadow-xl transform transition duration-500
              hover:-translate-y-4 hover:shadow-red-900/40 p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a
                href="tel:+923133124724"
                className="text-red-600 hover:underline"
              >
                +92 313 3124724
              </a>
            </div>

            <div
              className="group relative rounded-3xl overflow-hidden 
              bg-white/5 border border-white/10 backdrop-blur-xl
              shadow-xl transform transition duration-500
              hover:-translate-y-4 hover:shadow-red-900/40 p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <a
                href="https://goo.gl/maps/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                SoftNova Tech Remote Based_Sindh,Pakistan
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="group relative rounded-3xl overflow-hidden 
              bg-white/5 border border-white/10 backdrop-blur-xl
              shadow-xl transform transition duration-500
              hover:-translate-y-4 hover:shadow-red-900/40 p-8 space-y-6"
          >
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div> <label className="block text-gray-300 mb-2">Email</label> <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="w-full px-4 py-3 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-600" /> </div>
            <div>
          <label className="block text-gray-300 mb-2">Contact Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full px-4 py-3 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>


            
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full px-4 py-3 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>

            {submitStatus && (
              <div className={`p-3 rounded-lg text-center ${
                submitStatus.includes("successfully") 
                  ? "bg-green-600/20 text-green-400 border border-green-600/30" 
                  : "bg-red-600/20 text-red-400 border border-red-600/30"
              }`}>
                {submitStatus}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
