// import React from 'react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// const projects = [
//   {
//     title: 'Credit Score App',
//     image: '/credit.png',
//     description: 'A user-friendly app to check and understand your credit score.',
//     link: 'https://creditscoreai.netlify.app/',
//     tags: ['React', 'Tailwind CSS']
//   },
//   {
//     title: 'E-Commerce Website',
//     image: '/ecom1.png',
//     description: 'A sleek e-commerce website for general products with modern UI and features.',
//     link: 'https://resonant-paprenjak-6ede1f.netlify.app/',
//     tags: ['React', 'Firebase']
//   },
//   {
//     title: 'Online Gallery',
//     image: '/gallery.png',
//     description: 'A beautiful gallery website to showcase artist work and portfolios.',
//     link: 'https://unsettle-artist.netlify.app/',
//     tags: ['React', 'CSS']
//   },
//   {
//     title: 'Clothing Store',
//     image: '/clothing.png',
//     description: 'An e-commerce platform dedicated to selling stylish clothing items.',
//     link: 'https://serene-cajeta-eb3be8.netlify.app/',
//     tags: ['React', 'Firebase']
//   },
//   {
//     title: 'Toy Store',
//     image: '/toys.png',
//     description: 'Fun and colorful toy e-commerce website for kids and parents.',
//     link: 'https://courageous-hotteok-2dd775.netlify.app/',
//     tags: ['React', 'JavaScript']
//   }
// ]

// const WebDevelopment = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true
//   }

//   return (
//     <div className="bg-[#0C2228] py-8 mt-8">
//       <div className="max-w-5xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-white mb-10 text-center">
//           Web Development Projects
//         </h1>

//         <Slider {...settings}>
//           {projects.map((project, index) => (
//             <div key={index} className="text-white text-center px-4">
//               <div className="rounded-xl overflow-hidden shadow-lg bg-[#17292E] p-6">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-72 object-contain rounded-md mb-6"
//                 />
//                 <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap justify-center gap-2 mb-4">
//                   {project.tags.map((tag, i) => (
//                     <span key={i} className="bg-white text-black text-xs px-3 py-1 rounded-full">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-blue-400 hover:text-gray-300"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   )
// }

// export default WebDevelopment



import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const projects = [
  {
    title: 'Credit Score App',
    image: '/credit.png',
    description: 'A user-friendly app to check and understand your credit score.',
    link: 'https://creditscoreai.netlify.app/',
    tags: ['React', 'Tailwind CSS']
  },
  {
    title: 'E-Commerce Website',
    image: '/ecom1.png',
    description: 'A sleek e-commerce website for general products with modern UI and features.',
    link: 'https://resonant-paprenjak-6ede1f.netlify.app/',
    tags: ['React', 'Firebase']
  },
  {
    title: 'Online Gallery',
    image: '/gallery.png',
    description: 'A beautiful gallery website to showcase artist work and portfolios.',
    link: 'https://unsettle-artist.netlify.app/',
    tags: ['React', 'CSS']
  },
  {
    title: 'Clothing Store',
    image: '/clothing.png',
    description: 'An e-commerce platform dedicated to selling stylish clothing items.',
    link: 'https://serene-cajeta-eb3be8.netlify.app/',
    tags: ['React', 'Firebase']
  },
  {
    title: 'Toy Store',
    image: '/toys.png',
    description: 'Fun and colorful toy e-commerce website for kids and parents.',
    link: 'https://courageous-hotteok-2dd775.netlify.app/',
    tags: ['React', 'JavaScript']
  }
]

const WebDevelopment = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
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
                  alt={project.title}
                  className="w-full h-64 object-contain rounded-lg mb-6 bg-white/20"
                />
                <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
                <p className="text-gray-300 mb-5 text-base">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#E8FAF4] text-[#003912] text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
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
  )
}

export default WebDevelopment
