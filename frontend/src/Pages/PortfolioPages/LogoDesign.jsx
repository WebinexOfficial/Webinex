import React from 'react'

const projects = [
  {
    title: 'Elegant Logo for Tech Startup',
    image: '/logo1.jpg',
    description: 'A sleek, modern logo with geometric elements and a minimalist typeface.',
    tags: ['Figma', 'Illustrator', 'Brand Kit'],
  },
  {
    title: 'Hand-drawn Logo for Organic Shop',
    image: '/logo2.jpg',
    description: 'Warm, earthy design made to appeal to eco-conscious shoppers.',
    tags: ['Illustrator', 'Custom Illustration'],
  },
  // Add more...
]

const LogoDesign = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Logo Design Projects
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-800"
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
  )
}

export default LogoDesign