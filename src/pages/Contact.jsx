const Contact = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT SIDE – GET IN TOUCH */}
        <div className="bg-white rounded-lg shadow">
          <h2 className="bg-red-500 text-white text-center py-3 rounded-t-lg text-xl font-semibold">
            Get In Touch With Us Now!
          </h2>

          <div className="grid grid-cols-2 gap-6 p-6 text-center">

            {/* Phone */}
            <div className="border-r border-b pb-6">
              <div className="text-blue-900 text-3xl mb-2">📞</div>
              <h3 className="font-semibold text-lg">Phone Number</h3>
              <p className="text-gray-600 mt-1">+92..........</p>
            </div>

            {/* Email */}
            <div className="border-b pb-6">
              <div className="text-blue-900 text-3xl mb-2">✉️</div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600 text-sm mt-1">
                softnovatech@gmail.com <br />
                info@softnova.com
              </p>
            </div>

            {/* Location */}
            <div className="border-r pt-6">
              <div className="text-blue-900 text-3xl mb-2">📍</div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-gray-600 text-sm mt-1">
                 Pakistan
              </p>
            </div>

            {/* Working Hours */}
            <div className="pt-6">
              <div className="text-blue-900 text-3xl mb-2">🕒</div>
              <h3 className="font-semibold text-lg">Working Hours</h3>
              <p className="text-gray-600 text-sm mt-1">
                Mon – Sat <br /> 09:00 AM – 06:00 PM
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <div className="bg-gray-200 rounded-lg shadow">
          <h2 className="bg-red-500 text-white text-center py-3 rounded-t-lg text-xl font-semibold">
            Contact Us
          </h2>

          <form className="p-6 space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                className="p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Mobile No *"
                className="p-3 rounded w-full"
              />
              <input
                type="email"
                placeholder="Email ID *"
                className="p-3 rounded w-full"
              />
            </div>

            <textarea
              placeholder="Message"
              rows="4"
              className="p-3 rounded w-full"
            ></textarea>

            
            <button
              type="submit"
              className="bg-red-500 text-white px-8 py-3 rounded flex items-center gap-2 hover:bg-red-800"
            >
              Submit 
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
