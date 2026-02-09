// const Contact = () => {
//   return (
//     <div className="bg-gray-100 py-16 px-4">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

//         {/* LEFT SIDE – GET IN TOUCH */}
//         <div className="bg-white rounded-lg shadow">
//           <h2 className="bg-red-500 text-white text-center py-3 rounded-t-lg text-xl font-semibold">
//             Get In Touch With Us Now!
//           </h2>

//           <div className="grid grid-cols-2 gap-6 p-6 text-center">

//             {/* Phone */}
//             <div className="border-r border-b pb-6">
//               <div className="text-blue-900 text-3xl mb-2">📞</div>
//               <h3 className="font-semibold text-lg">Phone Number</h3>
//               <p className="text-gray-600 mt-1">+92..........</p>
//             </div>

//             {/* Email */}
//             <div className="border-b pb-6">
//               <div className="text-blue-900 text-3xl mb-2">✉️</div>
//               <h3 className="font-semibold text-lg">Email</h3>
//               <p className="text-gray-600 text-sm mt-1">
//                 softnovatech@gmail.com <br />
//                 info@softnova.com
//               </p>
//             </div>

//             {/* Location */}
//             <div className="border-r pt-6">
//               <div className="text-blue-900 text-3xl mb-2">📍</div>
//               <h3 className="font-semibold text-lg">Location</h3>
//               <p className="text-gray-600 text-sm mt-1">
//                  Pakistan
//               </p>
//             </div>

//             {/* Working Hours */}
//             <div className="pt-6">
//               <div className="text-blue-900 text-3xl mb-2">🕒</div>
//               <h3 className="font-semibold text-lg">Working Hours</h3>
//               <p className="text-gray-600 text-sm mt-1">
//                 Mon – Sat <br /> 09:00 AM – 06:00 PM
//               </p>
//             </div>

//           </div>
//         </div>

//         {/* RIGHT SIDE – CONTACT FORM */}
//         <div className="bg-gray-200 rounded-lg shadow">
//           <h2 className="bg-red-500 text-white text-center py-3 rounded-t-lg text-xl font-semibold">
//             Contact Us
//           </h2>

//           <form className="p-6 space-y-4">

//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="First Name *"
//                 className="p-3 rounded w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="p-3 rounded w-full"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Mobile No *"
//                 className="p-3 rounded w-full"
//               />
//               <input
//                 type="email"
//                 placeholder="Email ID *"
//                 className="p-3 rounded w-full"
//               />
//             </div>

//             <textarea
//               placeholder="Message"
//               rows="4"
//               className="p-3 rounded w-full"
//             ></textarea>

//             <button
//               type="submit"
//               className="bg-red-500 text-white px-8 py-3 rounded flex items-center gap-2 hover:bg-red-800"
//             >
//               Submit
//             </button>

//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Contact;

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 text-white px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Get in <span className="text-red-500">Touch</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          Have questions or want to work together? Fill out the form below and
          we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* ***************************Contact Info***************************** */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-red-500/40 transition duration-500">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-300 mb-2">
              📍 Address: 123 Tech Street, Silicon Valley, CA
            </p>
            <p className="text-gray-300 mb-2">📧 Email: info@softnova.tech</p>
            <p className="text-gray-300 mb-2">📞 Phone: +1 (123) 456-7890</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="/"
              className="bg-red-600 hover:bg-red-700 transition p-4 rounded-full shadow-lg hover:shadow-red-500/50"
            >
              <i className="fab fa-facebook-f text-white text-xl"></i>
            </a>
            <a
              href="/"
              className="bg-blue-600 hover:bg-blue-700 transition p-4 rounded-full shadow-lg hover:shadow-blue-500/50"
            >
              <i className="fab fa-twitter text-white text-xl"></i>
            </a>
            <a
              href="/"
              className="bg-pink-500 hover:bg-pink-600 transition p-4 rounded-full shadow-lg hover:shadow-pink-400/50"
            >
              <i className="fab fa-instagram text-white text-xl"></i>
            </a>
            <a
              href="/"
              className="bg-blue-800 hover:bg-blue-900 transition p-4 rounded-full shadow-lg hover:shadow-blue-500/50"
            >
              <i className="fab fa-linkedin-in text-white text-xl"></i>
            </a>
          </div>
        </div>

        {/* ***************************Contact Form***************************** */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-red-500/40 transition duration-500">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-red-500/50 text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="absolute top-10 -left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default Contact;
