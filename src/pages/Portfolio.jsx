const Portfolio = () => {
  const projects = [
    {
      title: "Web Development Projects",
      desc: "Modern, responsive websites built using React, Tailwind CSS, and modern UI practices.",
      tech: "React, Tailwind, JavaScript",
      img: "/assets/Web Dev.jpeg",
    },
    {
      title: "AI & Machine Learning",
      desc: "Smart AI-based solutions including prediction systems and automation projects.",
      tech: "Python, AI, ML",
      img: "/assets/Image.png",
    },
    {
      title: "Python Applications",
      desc: "Custom Python software solutions for automation, data processing, and backend systems.",
      tech: "Python, Django",
      img: "/assets/Py dev.jpeg",
    },
    {
      title: "E-Commerce Websites",
      desc: "Complete e-commerce platforms with product management and payment integration.",
      tech: "React, Backend APIs",
      img: "/assets/E.Commerce.jpeg",
    },
    {
      title: "Admin Panels & Dashboards",
      desc: "Powerful dashboards for managing data, users, and analytics.",
      tech: "React, Charts",
      img: "/assets/React Admin.jpeg",
    },
    {
      title: "Student Projects",
      desc: "Academic and final-year projects developed using AI, Python, and Web technologies.",
      tech: "AI, Python, Web",
      img: "/assets/Welcome.jpeg",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-4">Our Portfolio</h1>
      <p className="text-center text-gray-600 mb-10">
        A glimpse of the projects and solutions we are building at SoftNova Tech.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{p.desc}</p>
              <p className="text-sm font-medium text-blue-600 mb-4">
                Tech: {p.tech}
              </p>

              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Coming Soon
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
