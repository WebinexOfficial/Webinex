// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const WebDevelopment = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//   };

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/webProjects'); // <-- Replace with actual backend URL
//         const data = await res.json();
//         setProjects(data);
//       } catch (err) {
//         console.error('Failed to fetch projects:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-white text-center mt-20">
//         Loading projects...
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#0C2228] py-12 font-[Inter,sans-serif]">
//       <div className="max-w-5xl mx-auto px-4">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center tracking-tight">
//           Web Development Projects
//         </h1>
//         <Slider {...settings}>
//           {projects.map((project, index) => (
//             <div key={index} className="text-white text-center px-2">
//               <div className="rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm p-8 mx-auto max-w-lg flex flex-col items-center">
//                 <img
//                   src={project.image}
//                   alt={project.Title}
//                   className="w-full h-72 object-contain rounded-md mb-6"
//                 />
//                 <h2 className="text-2xl font-semibold mb-3">{project.Title}</h2>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap justify-center gap-2 mb-4">
//                   {project.tags?.split(',').map((tag, i) => (
//                     <span key={i} className="bg-white text-black text-xs px-3 py-1 rounded-full">
//                       {tag.trim()}
//                     </span>
//                   ))}
//                 </div>
//                 <a
//                   href={project.projectLink}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-block mt-2 bg-[#009e60] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#007a4d] transition"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default WebDevelopment;

import React from "react";
import { motion } from "framer-motion";

// Replace with your actual images and info
const projects = [
  {
    title: "Tech Startup Landing Page",
    subtitle: "UI/UX Design",
    image: "/images/project1.jpg",
  },
  {
    title: "Mobile App Showcase",
    subtitle: "UI/UX Design",
    image: "/images/project2.jpg",
  },
  {
    title: "E-Commerce Dashboard",
    subtitle: "Web Development",
    image: "/images/project3.jpg",
  },
  {
    title: "Corporate Branding Site",
    subtitle: "UI/UX Design",
    image: "/images/project4.jpg",
  },
];

export default function WebDevCardGrid() {
  return (
    <section className="min-h-screen bg-[#192133] flex items-center justify-center py-12">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.7, type: "spring" }}
            className="relative rounded-2xl overflow-hidden shadow-xl bg-[#232d47] group flex flex-col"
            style={{ minHeight: 380, maxHeight: 400 }} // Ensures consistent card height
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
          >
            {/* Card Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#232d47] via-[#232d47cc] to-transparent pointer-events-none" />
            {/* Text Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-10">
              <h3 className="text-white text-xl font-bold mb-2 drop-shadow">
                {project.title}
              </h3>
              <p className="text-green-300 text-md font-medium drop-shadow">
                {project.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
