 


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    title: 'WebDevelopment',
    icon: '/Service Images/WebDevlopment.jpeg',
    description: 'Custom website solutions built with modern tech.',
    subServices: [
      { name: 'WordPress', logo: 'Service Images/wordpresslogo.jpg' },
      { name: 'Wix', logo: 'Service Images/wixlogo.jpg' },
      { name: 'Shopify', logo: 'Service Images/shopify-logo.png' },
      { name: 'Code-based (React, Node.js)', logo: 'Service Images/node-logo.png' }
    ],
    color: 'from-[#073D44] to-[#00574A]'
  },
  {
    title: 'SEO',
    icon: '/Service Images/seo.jpeg',
    description: 'Boost visibility and drive traffic to your site.',
    subServices: [
      { name: 'Google My Business Setup', logo: 'Service Images/google-logo.png' },
      { name: 'On-page SEO', logo: 'Service Images/seo-logo.png' },
      { name: 'Off-page SEO', logo: 'Service Images/linkbuilding-logo.png' }
    ],
    color: 'from-[#004733] to-[#073D44]'
  },
{
    title: 'UI/UX Design',
    icon: '/Service Images/Ui.jpeg',
    description: 'User-first design for websites and apps.',
    subServices: [
      { name: 'Complete UI Design', logo: 'Service Images/ui-logo.png' },
      { name: 'Wireframes & Prototyping', logo: 'Service Images/prototype-logo.png' },
      { name: 'UX Research', logo: 'Service Images/ux-logo.png' }
    ],
    color: 'from-[#003912] to-[#073D44]'
  }
];

const ServiceCard = ({ service, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="transition-shadow duration-300"
    >
      <div className={`relative bg-gradient-to-br ${service.color} p-[1px] rounded-3xl shadow-xl`}>
        <div className="bg-white rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg">
          <button
            className="flex items-center gap-4 w-full text-left focus:outline-none"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={`service-details-${index}`}
          >
            <div className={`rounded-xl bg-gradient-to-br ${service.color} p-2 shadow-lg`}>
              <img src={service.icon} alt={service.title} className="w-14 h-14 object-cover rounded-lg border-2 border-white shadow" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
            </div>
            <span className="ml-2">
              {isOpen ? (
                <ChevronUp className="w-6 h-6 text-[#00574A]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#00574A]" />
              )}
            </span>
          </button>

          {/* Accordion */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                id={`service-details-${index}`}
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: '1.5rem' }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.subServices.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center bg-[#E0F6EE] hover:bg-[#D6F2E8] rounded-lg py-2 px-3 shadow-sm transition-colors duration-200"
                      initial={{ x: -12, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.15 + idx * 0.07 }}
                    >
                      <div className="w-8 h-8 mr-3 flex items-center justify-center bg-white rounded-md border border-gray-200 shadow-sm">
                        <img
                          src={item.logo}
                          alt={`${item.name} logo`}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => (e.currentTarget.src = '/fallback-icon.png')}
                        />
                      </div>
                      <span className="font-semibold text-gray-800 text-sm sm:text-base">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const OurServices = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#E8FAF4] to-[#f6fffa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-[#003912] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-[#222325] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We deliver exceptional digital solutions tailored to your business needs.
          </motion.p>
        </div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
