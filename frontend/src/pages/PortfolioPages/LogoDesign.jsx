import React, { useEffect, useState } from 'react';
import { FaTools } from 'react-icons/fa';


const LogoDesign = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogoProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/logoProjects'); // 🔁 Replace with your backend endpoint
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch logo projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogoProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-700 py-20">
        Loading logo design projects...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Logo Design Projects
      </h1>
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 mt-6 text-center">
          <div className="flex flex-col items-center gap-4">

            <FaTools className="h-16 w-16 text-gray-400" />

            <h2 className="text-xl font-semibold text-gray-700">
              Page Under Development
            </h2>

            <p className="text-gray-500 max-w-md">
              We're working hard to bring you this feature. Please check back later!
            </p>

            <div className="mt-4 w-full max-w-xs bg-gray-100 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full w-3/4 animate-pulse"></div>
            </div>

          </div>
        </div>
      </div>


      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.Title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.Title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.split(',').map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-800"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>


  );
};

export default LogoDesign;
