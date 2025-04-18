// import React from 'react'

// const projects = [
//   {
//     title: 'Modern E-Commerce Site',
//     image: '/public/PortfolioImages/ecommerce.png',
//     description: 'A responsive e-commerce platform with product filtering, payment gateway integration, and admin dashboard.',
//     link: 'https://serene-cajeta-eb3be8.netlify.app/',
//     tags: ['React', 'Stripe', 'Firebase']
//   },
//   {
//     title: 'Photography Portfolio',
//     image: '/photography.jpg',
//     description: 'A sleek, minimalist site for photographers with galleries and booking options.',
//     link: 'https://photography.example.com',
//     tags: ['Next.js', 'Tailwind', 'Sanity CMS']
//   },
//   {
//     title: 'Social Media App',
//     image: '/social.jpg',
//     description: 'A custom social media platform with messaging, posts, and notifications.',
//     link: 'https://socialmedia.example.com',
//     tags: ['MERN Stack', 'Socket.io']
//   },
//   // add more...
// ]

// const WebDevelopment = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
//         Web Development Projects
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
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-block text-blue-600 hover:underline font-medium"
//               >
//                 View Project →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default WebDevelopment


import React from 'react'

const projects = [
  {
    title: 'Modern E-Commerce Site',
    image: '/public/PortfolioImages/ecommerce.png',
    description:
      'A responsive e-commerce platform with product filtering, payment gateway integration, and admin dashboard.',
    link: 'https://serene-cajeta-eb3be8.netlify.app/',
    tags: ['React', 'Stripe', 'Firebase'],
  },
  {
    title: 'Photography Portfolio',
    image: '/photography.jpg',
    description:
      'A sleek, minimalist site for photographers with galleries and booking options.',
    link: 'https://photography.example.com',
    tags: ['Next.js', 'Tailwind', 'Sanity CMS'],
  },
  {
    title: 'Social Media App',
    image: '/social.jpg',
    description:
      'A custom social media platform with messaging, posts, and notifications.',
    link: 'https://socialmedia.example.com',
    tags: ['MERN Stack', 'Socket.io'],
  },
  {
    title: 'Social Media App',
    image: '/social.jpg',
    description:
      'A custom social media platform with messaging, posts, and notifications.',
    link: 'https://socialmedia.example.com',
    tags: ['MERN Stack', 'Socket.io'],
  },
  // add more...
]

const WebDevelopment = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#073D44] mb-10 text-center">
        Web Development Projects
      </h1>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#073D44] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#e6f4f5] text-[#073D44] px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#073D44] text-white text-sm px-4 py-1.5 rounded-full hover:bg-opacity-90 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WebDevelopment
