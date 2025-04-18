// import React from 'react'

// const uiuxProjects = [
//   {
//     title: 'Finance App UI Redesign',
//     image: '/ui1.jpg',
//     description: 'Clean, modern UI for a personal finance tracker.',
//     tags: ['Figma', 'Mobile UI', 'User Flow'],
//   },
//   {
//     title: 'Dashboard UX for Analytics Tool',
//     image: '/ui2.jpg',
//     description: 'Created wireframes and prototypes with seamless navigation.',
//     tags: ['Wireframe', 'Prototyping', 'Interaction Design'],
//   },
// ]

// const UIUXDesign = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">UI/UX Projects</h1>

//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {uiuxProjects.map((project, index) => (
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

// export default UIUXDesign




import React from 'react';

const uiuxProjects = [
  {
    title: 'Mobile Banking App',
    image: '/uiux1.jpg',
    description: 'A sleek and secure mobile banking app focused on usability and speed.',
    tags: ['Figma', 'Mobile UI', 'Dark Mode'],
  },
  {
    title: 'SaaS Dashboard',
    image: '/uiux2.jpg',
    description: 'An intuitive dashboard UI for managing business analytics and reports.',
    tags: ['Dashboard', 'UX Research', 'React UI'],
  },
  {
    title: 'Healthcare Booking App',
    image: '/uiux3.jpg',
    description: 'A user-friendly booking system for clinics and healthcare providers.',
    tags: ['UI Flow', 'Prototyping', 'Accessibility'],
  },
  // Add more...
];

const UIUXDesign = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        UI/UX Design Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {uiuxProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                  >
                    {tag}
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

export default UIUXDesign;
