// import React from 'react'

// const projects = [
//   {
//     title: 'Elegant Logo for Tech Startup',
//     image: '/logo1.jpg',
//     description: 'A sleek, modern logo with geometric elements and a minimalist typeface.',
//     tags: ['Figma', 'Illustrator', 'Brand Kit'],
//   },
//   {
//     title: 'Hand-drawn Logo for Organic Shop',
//     image: '/logo2.jpg',
//     description: 'Warm, earthy design made to appeal to eco-conscious shoppers.',
//     tags: ['Illustrator', 'Custom Illustration'],
//   },
//   // Add more...
// ]

// const LogoDesign = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
//         Logo Design Projects
//       </h1>

//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-800"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default LogoDesign



import React from 'react';

const logoProjects = [
  {
    title: 'Minimalist Tech Logo',
    image: '/logo1.jpg',
    style: 'Flat Design',
  },
  {
    title: 'Luxury Fashion Logo',
    image: '/logo2.jpg',
    style: 'Elegant Serif',
  },
  {
    title: 'Creative Agency Logo',
    image: '/logo3.jpg',
    style: 'Modern Abstract',
  },
  {
    title: 'Fitness Brand Logo',
    image: '/logo4.jpg',
    style: 'Bold & Energetic',
  },
  // Add more logo items...
];

const LogoDesign = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Logo Design Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {logoProjects.map((logo, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 flex flex-col items-center text-center group"
          >
            <div className="w-40 h-40 overflow-hidden rounded-md mb-4">
              <img
                src={logo.image}
                alt={logo.title}
                className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{logo.title}</h3>
            <span className="mt-2 text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              {logo.style}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoDesign;
