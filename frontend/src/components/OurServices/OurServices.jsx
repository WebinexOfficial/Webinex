// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronDown, ChevronUp } from 'lucide-react'

// const services = [
//   {
//     title: 'Web Development',
//     icon: '/icons/dev.svg',
//     description: 'Custom website solutions built with modern tech.',
//     subServices: [
//       { name: 'WordPress', logo: 'public/Service Images/wordpresslogo.jpg' }, // Add your logo path
//       { name: 'Wix', logo: 'public/Service Images/wixlogo.jpg' }, // Add your logo path
//       { name: 'Shopify', logo: 'public/Service Images/shopify-logo.png' }, // Add your logo path
//       { name: 'Code-based (React, Node.js)', logo: 'public/Service Images/node-logo.png' } // Add your logo path
//     ],
//     color: 'from-blue-500 to-blue-600'
//   },
//   {
//     title: 'SEO',
//     icon: '/icons/seo.svg',
//     description: 'Boost visibility and drive traffic to your site.',
//     subServices: [
//       { name: 'Google My Business Setup', logo: 'public/Service Images/google-logo.png' }, // Add your logo path
//       { name: 'On-page SEO', logo: 'public/Service Images/seo-logo.png' }, // Add your logo path
//       { name: 'Off-page SEO', logo: 'public/Service Images/linkbuilding-logo.png' } // Add your logo path
//     ],
//     color: 'from-purple-500 to-purple-600'
//   },
//   {
//     title: 'UI/UX Design',
//     icon: '/icons/uiux.svg',
//     description: 'User-first design for websites and apps.',
//     subServices: [
//       { name: 'Complete UI Design', logo: 'public/Service Images/ui-logo.png' }, // Add your logo path
//       { name: 'Wireframes & Prototyping', logo: 'public/Service Images/prototype-logo.png' }, // Add your logo path
//       { name: 'UX Research', logo: 'public/Service Images/ux-logo.png' } // Add your logo path
//     ],
//     color: 'from-pink-500 to-pink-600'
//   },
// ]

// const ServiceCard = ({ service, isOpen, onToggle, index }) => {
//   return (
//     <motion.div 
//       className="bg-white rounded-2xl shadow-xl overflow-hidden"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       whileHover={{ scale: 1.02 }}
//     >
//       <div className={`bg-gradient-to-r ${service.color} p-1`}>
//         <div className="bg-white rounded-xl p-6">
//           <motion.div 
//             className="flex items-center gap-4 cursor-pointer"
//             onClick={onToggle}
//             whileTap={{ scale: 0.98 }}
//           >
//             <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
//               <img src={service.icon} alt={service.title} className="w-6 h-6 filter brightness-0 invert" />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
//               <p className="text-sm text-gray-600">{service.description}</p>
//             </div>
//             {isOpen ? (
//               <ChevronUp className="w-5 h-5 text-gray-500" />
//             ) : (
//               <ChevronDown className="w-5 h-5 text-gray-500" />
//             )}
//           </motion.div>

//           <AnimatePresence>
//             {isOpen && (
//               <motion.ul 
//                 className="mt-4 space-y-3 text-sm text-gray-700"
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: 'auto', opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {service.subServices.map((item, idx) => (
//                   <motion.li 
//                     key={idx}
//                     className="flex items-center pl-2"
//                     initial={{ x: -10, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.1 + idx * 0.05 }}
//                   >
//                     {/* Logo container - replace with your actual logo */}
//                     <div className="w-8 h-8 mr-3 flex items-center justify-center bg-gray-100 rounded-md p-1">
//                       <img 
//                         src={item.logo} 
//                         alt={`${item.name} logo`} 
//                         className="max-w-full max-h-full object-contain"
//                       />
//                     </div>
//                     <span>{item.name}</span>
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// const OurServices = () => {
//   const [openIndex, setOpenIndex] = useState(null)

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index)
//   }

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <motion.h2 
//             className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//           <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Our Services</span>
//           </motion.h2>
//           <motion.p 
//             className="text-lg text-gray-600 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             We deliver exceptional digital solutions tailored to your business needs.
//           </motion.p>
//         </div>
        
//         <motion.div 
//           className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           {services.map((service, index) => (
//             <ServiceCard
//               key={index}
//               service={service}
//               isOpen={openIndex === index}
//               onToggle={() => handleToggle(index)}
//               index={index}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default OurServices
  



// import { Briefcase, Globe, Layers, PenTool } from "lucide-react";

// const services = [
//   {
//     title: "Web Development with AI",
//     description: "WordPress, Laravel, APIs",
//     icon: <Briefcase className="w-8 h-8 text-white" />,
//     bg: "bg-gradient-to-br from-[#073D44] to-[#0B4F53]",
//   },
//   {
//     title: "Digital Marketing with AI",
//     description: "UX, SEO, Ads, Automation",
//     icon: <Globe className="w-8 h-8 text-white" />,
//     bg: "bg-gradient-to-br from-[#085C62] to-[#0F7C82]",
//   },
//   {
//     title: "Industry Tech Solutions",
//     description: "Travel, Education, Healthcare",
//     icon: <Layers className="w-8 h-8 text-white" />,
//     bg: "bg-gradient-to-br from-[#04636D] to-[#06838F]",
//   },
//   {
//     title: "Graphic Design Services",
//     description: "Website Design, Social Media",
//     icon: <PenTool className="w-8 h-8 text-white" />,
//     bg: "bg-gradient-to-br from-[#025058] to-[#037077]",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-16 px-4 bg-[#F9FAFB]">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-[#073D44] mb-4">
//           Web Development Company & Digital Agency
//         </h2>
//         <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//           ONE STOP FOR CUSTOM WEBSITE DEVELOPMENT, WHITE LABEL DIGITAL AGENCY SERVICES FROM INDIA
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`${service.bg} rounded-2xl p-6 shadow-lg text-white transition-transform hover:-translate-y-2 hover:shadow-xl duration-300`}
//             >
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-1 leading-snug">
//                 {service.title}
//               </h3>
//               <p className="text-sm opacity-90">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { Link } from "react-router-dom";
import { Briefcase, Globe, Layers, PenTool } from "lucide-react";

const services = [
  {
    title: "Web Development with AI",
    description: "WordPress, Laravel, APIs",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-br from-[#073D44] to-[#0B4F53]",
    link: "/ourservicespage/Webdev",
  },
  {
    title: "Digital Marketing with AI",
    description: "UX, SEO, Ads, Automation",
    icon: <Globe className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-br from-[#085C62] to-[#0F7C82]",
    link: "/ourservicespage/digital-marketing",
  },
  {
    title: "Industry Tech Solutions",
    description: "Travel, Education, Healthcare",
    icon: <Layers className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-br from-[#04636D] to-[#06838F]",
    link: "/ourservicespage/industry-solutions",
  },
  {
    title: "Graphic Design Services",
    description: "Website Design, Social Media",
    icon: <PenTool className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-br from-[#025058] to-[#037077]",
    link: "/ourservicespage/graphic-design",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#073D44] mb-4">
          Web Development Company & Digital Agency
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          ONE STOP FOR CUSTOM WEBSITE DEVELOPMENT, WHITE LABEL DIGITAL AGENCY SERVICES FROM INDIA
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className={`${service.bg} rounded-2xl p-6 shadow-lg text-white transition-transform hover:-translate-y-2 hover:shadow-xl duration-300 block`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-1 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm opacity-90">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
