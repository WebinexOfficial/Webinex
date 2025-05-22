import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WebDevelopment = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:5000/webProjects'); // <-- Change this to your actual backend URL
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
      <div className="text-white text-center mt-20">
        Loading projects...
      </div>
    );
  }

  return (
    <div className="bg-[#0C2228] py-12 font-[Inter,sans-serif]">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center tracking-tight">
          Web Development Projects
        </h1>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="text-white text-center px-2">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm p-8 mx-auto max-w-lg flex flex-col items-center">
                <img
                  src={project.image}
                  alt={project.Title}
                  className="w-full h-72 object-contain rounded-md mb-6"
                />
                <h2 className="text-2xl font-semibold mb-3">{project.Title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags?.split(',').map((tag, i) => (
                    <span key={i} className="bg-white text-black text-xs px-3 py-1 rounded-full">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 bg-[#009e60] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#007a4d] transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WebDevelopment;
