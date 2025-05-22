 


// mukesh code

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
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
      whileHover={{ scale: 1.02 }}
    >
      <div className={`bg-gradient-to-r ${service.color} p-1 rounded-2xl`}>
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center gap-4 cursor-pointer" onClick={onToggle}>
            <div className={`rounded-lg bg-gradient-to-r ${service.color} p-2`}>
              <img src={service.icon} alt={service.title} className="w-16 h-16 object-cover rounded-md" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="space-y-3 text-sm text-gray-700">
                  {service.subServices.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center pl-2"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <div className="w-8 h-8 mr-3 flex items-center justify-center bg-gray-100 rounded-md p-1">
                        <img src={item.logo} alt={`${item.name} logo`} className="max-w-full max-h-full object-contain" />
                      </div>
                      <span>{item.name}</span>
                    </motion.li>
                  ))}
                </ul>
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
    <section className="py-20 bg-[#E8FAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-[#003912] mb-4"
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

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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