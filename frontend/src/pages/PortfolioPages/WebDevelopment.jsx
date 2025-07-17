 

// updated WebDevelopment page


import React, { useEffect, useState } from 'react';


const WebDevelopment = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('https://webcraftbackend.onrender.com/webprojects');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-gray-700 text-center mt-20 font-semibold">
        Loading projects...
      </div>
    );
  }

  return (
    <div className="bg-[#F7FAFC] min-h-screen py-12 font-[Inter,sans-serif]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#20293a] mb-3 tracking-tight">
            Our Web Development Work
          </h1>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Selected websites built for real clients, creators, and bold ideas.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-5 flex flex-col transition-all group"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.Title}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-bold text-[#20293a] mb-2">{project.Title}</h2>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.split(',').map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#E6F4EA] text-[#009e60] text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-auto bg-[#009e60] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#007a4d] transition"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;