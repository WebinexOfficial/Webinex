 

import React, { useState } from "react";
import { Phone, X, Mail, PenTool } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const contactOptions = [
  {
    icon: <Phone size={20} />,
    bg: "bg-gradient-to-br from-indigo-600 to-blue-500",
    href: "tel:+919311596345",
    title: "Call",
    aria: "Call us"
  },
  {
    icon: <FaWhatsapp size={20} />,
    bg: "bg-gradient-to-br from-emerald-600 to-emerald-500",
    href: "https://wa.me/9311596345",
    title: "WhatsApp",
    aria: "Chat via WhatsApp"
  },
  {
    icon: <Mail size={20} />,
    bg: "bg-gradient-to-br from-sky-600 to-blue-500 ",
    href: "mailto:contact@example.com",
    title: "Email",
    aria: "Send email"
  }
];

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-end space-y-3 mb-4"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${option.bg} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg ring-2 ring-white/30 relative group`}
                whileHover={{ scale: 1.1 }}
                title={option.title}
                aria-label={option.aria}
              >
                {option.icon}
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-14 px-3 py-1 text-sm text-white bg-blue-700 rounded-md shadow-lg hidden sm:block"
                >
                  {option.title}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        className={`group relative w-14 h-14 rounded-full flex items-center justify-center text-white 
          shadow-xl transition-all duration-300 
          ${open
            ? "bg-gradient-to-br from-green-700 to-blue-600"
            : "bg-gradient-to-br from-green-600 to-green-500 animate-pulse"
          }`}
        aria-label={open ? "Close contact options" : "Open contact options"}
      >
        <motion.div
          animate={{ rotate: open ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {open ? <X size={24} /> : <PenTool size={24} />}
        </motion.div>

        {!open && (
          <span className="absolute -top-10 right-0 text-xs bg-green-600 text-white px-2 py-1 rounded-md shadow hidden sm:group-hover:block">
            Get in Touch
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingContactButton;
