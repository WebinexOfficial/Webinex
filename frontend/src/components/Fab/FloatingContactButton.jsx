 

//  import React, { useState } from "react";
// import { Phone, X, Mail, Video, PenTool } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const FloatingContactButton = () => {
//   const [open, setOpen] = useState(false);
//   const [activeTooltip, setActiveTooltip] = useState(null);

//   const contactOptions = [
//     {
//       icon: <Phone size={24} />,
//       bg: "bg-gradient-to-br from-blue-500 to-blue-600",
//       href: "tel:+919311596345",
//       title: "Call",
//       aria: "Contact via phone call"
//     },
//     {
//       icon: <FaWhatsapp size={24} />, // WhatsApp icon from react-icons
//       bg: "bg-gradient-to-br from-green-500 to-green-600",
//       href: "https://wa.me/9311596345",
//       title: "WhatsApp",
//       aria: "Contact via WhatsApp"
//     },
//     {
//       icon: <Mail size={24} />,
//       bg: "bg-gradient-to-br from-rose-500 to-rose-600",
//       href: "mailto:contact@example.com",
//       title: "Email",
//       aria: "Contact via email"
//     },
//     // {
//     //   icon: <Video size={24} />,
//     //   bg: "bg-gradient-to-br from-purple-500 to-purple-600",
//     //   href: "/video-consultation",
//     //   title: "Video Call",
//     //   aria: "Schedule video consultation"
//     // }
//   ];

//   return (
//     <div className="fixed bottom-8 right-8 z-50">
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="flex flex-col items-center gap-4 mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//           >
//             {contactOptions.map((option) => (
//               <motion.a
//                 key={option.title}
//                 href={option.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`${option.bg} hover:shadow-xl text-white rounded-2xl p-4 shadow-lg 
//                   transition-all duration-200 relative group`}
//                 whileHover={{ scale: 1.1 }}
//                 onHoverStart={() => setActiveTooltip(option.title)}
//                 onHoverEnd={() => setActiveTooltip(null)}
//                 aria-label={option.aria}
//               >
//                 {option.icon}
//                 <span className="absolute right-16 -top-1 bg-gray-800 text-white px-3 py-1 
//                   rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 
//                   transition-opacity duration-200">
//                   {option.title}
//                   <span className="absolute right-[-4px] top-3 w-2 h-2 bg-gray-800 rotate-45" />
//                 </span>
//               </motion.a>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.button
//         onClick={() => setOpen(!open)}
//         className={`${open ? 
//           "bg-gradient-to-br from-red-500 to-red-600 rotate-45" : 
//           "bg-gradient-to-br from-indigo-600 to-indigo-700"} 
//           text-white rounded-2xl p-5 shadow-2xl transition-all duration-300 
//           hover:shadow-3xl relative`}
//         whileTap={{ scale: 0.9 }}
//         aria-label={open ? "Close contact options" : "Open contact options"}
//       >
//         <motion.div
//           animate={{ rotate: open ? 180 : 0 }}
//           transition={{ type: "spring" }}
//         >
//           {open ? (
//             <X size={28} className="stroke-current" />
//           ) : (
//             <PenTool size={28} className="stroke-current" />
//           )}
//         </motion.div>
        
//         {!open && (
//           <span className="absolute -top-12 right-0 bg-indigo-600 text-white px-3 py-1 
//             rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 
//             transition-opacity duration-200">
//             Get in Touch
//             <span className="absolute right-3 -bottom-1.5 w-3 h-3 bg-indigo-600 rotate-45" />
//           </span>
//         )}
//       </motion.button>
//     </div>
//   );
// };

// export default FloatingContactButton;


import React, { useState } from "react";
import { Phone, X, Mail, PenTool } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const contactOptions = [
    {
      icon: <Phone size={24} />,
      bg: "bg-gradient-to-br from-green-700 to-green-600", // Updated to green
      href: "tel:+919311596345",
      title: "Call",
      aria: "Contact via phone call"
    },
    {
      icon: <FaWhatsapp size={24} />,
      bg: "bg-gradient-to-br from-green-500 to-green-400", // Updated to green
      href: "https://wa.me/9311596345",
      title: "WhatsApp",
      aria: "Contact via WhatsApp"
    },
    {
      icon: <Mail size={24} />,
      bg: "bg-gradient-to-br from-green-600 to-green-500", // Updated to green
      href: "mailto:contact@example.com",
      title: "Email",
      aria: "Contact via email"
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col items-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {contactOptions.map((option) => (
              <motion.a
                key={option.title}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${option.bg} hover:shadow-lg text-white rounded-2xl p-4 shadow-md 
                  transition-all duration-200 relative group`}
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => setActiveTooltip(option.title)}
                onHoverEnd={() => setActiveTooltip(null)}
                aria-label={option.aria}
              >
                {option.icon}
                <span className="absolute right-16 -top-1 bg-green-800 text-white px-3 py-1 
                  rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 
                  transition-opacity duration-200">
                  {option.title}
                  <span className="absolute right-[-4px] top-3 w-2 h-2 bg-green-800 rotate-45" />
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className={`${open ? 
          "bg-gradient-to-br from-green-700 to-green-600 rotate-45" : 
          "bg-gradient-to-br from-green-600 to-green-500"} 
          text-white rounded-2xl p-5 shadow-2xl transition-all duration-300 
          hover:shadow-3xl relative`}
        whileTap={{ scale: 0.9 }}
        aria-label={open ? "Close contact options" : "Open contact options"}
      >
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring" }}
        >
          {open ? (
            <X size={28} className="stroke-current" />
          ) : (
            <PenTool size={28} className="stroke-current" />
          )}
        </motion.div>
        
        {!open && (
          <span className="absolute -top-12 right-0 bg-green-600 text-white px-3 py-1 
            rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 
            transition-opacity duration-200">
            Get in Touch
            <span className="absolute right-3 -bottom-1.5 w-3 h-3 bg-green-600 rotate-45" />
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingContactButton;