import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    icon: '/icons/dev.svg',
    description: 'Custom website solutions built with modern tech.',
    subServices: ['WordPress', 'Wix', 'Shopify', 'Code-based (React, Node.js)'],
  },
  {
    title: 'SEO',
    icon: '/icons/seo.svg',
    description: 'Boost visibility and drive traffic to your site.',
    subServices: ['Google My Business Setup', 'On-page SEO', 'Off-page SEO'],
  },
  {
    title: 'UI/UX Design',
    icon: '/icons/uiux.svg',
    description: 'User-first design for websites and apps.',
    subServices: ['Complete UI Design', 'Wireframes & Prototyping', 'UX Research'],
  },
]

const ServiceCard = ({ service, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center gap-4 cursor-pointer" onClick={onToggle}>
        <img src={service.icon} alt={service.title} className="w-10 h-10" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.description}</p>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </div>

      {isOpen && (
        <ul className="mt-4 pl-2 list-disc text-sm text-gray-700">
          {service.subServices.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

const OurServices = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Our Services
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices
