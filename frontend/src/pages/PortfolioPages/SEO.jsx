// import React from 'react'

// const seoProjects = [
//   {
//     title: 'E-commerce SEO Optimization',
//     image: '/seo1.jpg',
//     description: 'Improved keyword ranking and traffic for an electronics store.',
//     tags: ['On-page SEO', 'Keyword Research', 'Google Analytics'],
//   },
//   {
//     title: 'SEO for Travel Blog',
//     image: '/seo2.jpg',
//     description: 'Drove organic traffic up by 200% in 3 months.',
//     tags: ['Content SEO', 'Backlinking', 'Page Speed'],
//   },
// ]

// const SEO = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">SEO Projects</h1>

//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {seoProjects.map((project, index) => (
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

// export default SEO

import React from 'react';

const seoProjects = [
  {
    title: 'E-commerce SEO Optimization',
    image: '/seo1.jpg',
    description: 'Boosted traffic by 120% with targeted on-page SEO strategies.',
    stats: ['+120% Traffic', '#1 Keyword Rank', 'Bounce Rate ↓ 30%'],
    tags: ['On-page SEO', 'Keyword Research', 'Google Analytics'],
  },
  {
    title: 'SEO for Travel Blog',
    image: '/seo2.jpg',
    description: 'Achieved 200% organic growth with backlinking and speed optimization.',
    stats: ['+200% Organic Growth', 'DA +15', 'Load Time ↓ 40%'],
    tags: ['Content SEO', 'Backlinking', 'Page Speed'],
  },
];

const SEO = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">SEO Projects</h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {seoProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all border border-gray-100 p-4 flex flex-col justify-between"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 object-cover rounded-md mb-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-green-700 font-medium">
                {project.stats.map((stat, j) => (
                  <span key={j} className="bg-green-100 px-2 py-1 rounded-md">
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SEO;
