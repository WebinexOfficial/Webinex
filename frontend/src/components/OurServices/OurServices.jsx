

//updated service page 
 

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from "../../pages/Seo";

// Accent colors for each card (blue, teal, purple)
const CARD_ACCENTS = [
  "from-[#2563EB] to-[#38BDF8]",
  "from-[#10B981] to-[#60A5FA]",
  "from-[#8B5CF6] to-[#06B6D4]",
];
const CARD_BORDERS = [
  "border-blue-400/40",
  "border-teal-400/40",
  "border-purple-400/40",
];
const SUBSERVICE_BG = [
  "bg-blue-50",
  "bg-teal-50",
  "bg-purple-50",
];

const services = [
  {
    title: "Web Development",
    icon: "/Service Images/WebDevlopment.jpeg",
    description: "Custom website.",
    subServices: [
      { name: "WordPress", logo: "Service Images/wordpresslogo.jpg" },
      { name: "Wix", logo: "Service Images/wixlogo.jpg" },
      { name: "Shopify", logo: "Service Images/shopify-logo.png" },
      { name: "Code-based (React, Node.js)", logo: "Service Images/node-logo.png" },
    ],
  },
  {
    title: "SEO",
    icon: "/Service Images/seo.jpeg",
    description: "Boost visibility.",
    subServices: [
      { name: "Google My Business Setup", logo: "Service Images/google-logo.png" },
      { name: "On-page SEO", logo: "Service Images/seo-logo.png" },
      { name: "Off-page SEO", logo: "Service Images/linkbuilding-logo.png" },
    ],
  },
  {
    title: "UI/UX Design",
    icon: "/Service Images/Ui.jpeg",
    description: "User-first design.",
    subServices: [
      { name: "Complete UI Design", logo: "Service Images/ui-logo.png" },
      { name: "Wireframes & Prototyping", logo: "Service Images/prototype-logo.png" },
      { name: "UX Research", logo: "Service Images/ux-logo.png" },
    ],
  },
];

const ServiceCard = ({ service, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      whileHover={{ y: -6, boxShadow: "0 8px 44px 0 #8b5cf61a" }}
      className="transition-shadow duration-300"
    >
      <div
        className={`
          relative bg-white rounded-2xl shadow-xl 
          border-t-4 ${CARD_BORDERS[index]}
          overflow-hidden
        `}
        style={{
          boxShadow:
            "0 2px 24px 0 rgba(40, 80, 200, 0.07), 0 1.5px 4px 0 rgba(100, 60, 200, 0.04)",
        }}
      >
        <div
          className={`
            absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${CARD_ACCENTS[index]}
            z-10
          `}
        />
        <div className="relative p-8 flex flex-col h-full">
          <button
            className="flex items-center gap-5 group w-full text-left focus:outline-none"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={`service-details-${index}`}
          >
            <span
              className={`
                flex items-center justify-center rounded-full shadow-md 
                bg-gradient-to-br ${CARD_ACCENTS[index]} 
                w-16 h-16 border-4 border-white transition-transform duration-300 group-hover:scale-105
              `}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10 object-cover rounded-full"
              />
            </span>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-1">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 font-medium">
                {service.description}
              </p>
            </div>
            <span className="ml-2">
              {isOpen ? (
                <ChevronUp className="w-6 h-6 text-gray-500" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-500" />
              )}
            </span>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                id={`service-details-${index}`}
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: "1.5rem" }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.34 }}
                className="overflow-hidden"
              >
                <div className="space-y-4">
                  {service.subServices.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className={`
                        flex items-center gap-4 
                        ${SUBSERVICE_BG[index]} 
                        rounded-xl px-5 py-3 shadow 
                        hover:shadow-md transition-shadow duration-200
                        border border-gray-100
                      `}
                      initial={{ x: -14, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.11 + idx * 0.08 }}
                    >
                      <div className={`w-10 h-10 flex items-center justify-center rounded-full shadow border border-gray-200 bg-white`}>
                        <img
                          src={item.logo}
                          alt={`${item.name} logo`}
                          className="max-w-7 max-h-7 object-contain"
                          onError={e => (e.currentTarget.src = '/fallback-icon.png')}
                        />
                      </div>
                      <span className="font-semibold text-gray-800 text-base">
                        {item.name}
                      </span>
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
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <SEO
        title="Our Freelance Services - Web Development, SEO, UI/UX & Logo Design | Webinex"
        description="Explore Webinex's freelance services including website development, SEO, UI/UX design, and custom logos. We deliver high-quality digital solutions tailored to your needs."
        name="@webinex_official"
        type="website"
        url="https://www.webinex.in/services"
        image="https://www.webinex.in/assets/images/webinex-cover.jpg"
        keywords="web development services, freelance SEO expert, UI UX freelancer, logo designer India, custom web solutions, SEO agency India, branding services"
        canonical="https://www.webinex.in/services"
        locale="en_IN"
      />
      <section className="relative py-16 px-3 sm:px-0 bg-gradient-to-b from-[#F2F7FD] via-[#E3F3F9] to-[#ECFDF5] z-10">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] shadow-2xl bg-white/80 px-3 sm:px-10 py-10 border border-[#e0eee7]">
          <div className="text-center mb-14">
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-[#1e293b] mb-4"
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-lg text-[#334155] max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.5 }}
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
        {/* Decorative bottom border/wave if desired
        <div className="absolute left-0 right-0 bottom-0 h-10 z-20 flex items-end pointer-events-none">
          <svg
            width="100%"
            height="45"
            viewBox="0 0 1440 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12"
          >
            <path
              d="M0 0 Q 360 45 720 25 Q 1080 0 1440 30 V45 H0 V0 Z"
              fill="#fff"
              fillOpacity="0.90"
            />
          </svg>
        </div>
        */}
      </section>
    </>
  );
};

export default OurServices;