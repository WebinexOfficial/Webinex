


import React, { useState } from "react";
import { Phone, X, Mail, PenTool } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Contact options data
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
    href: "mailto:webinexofficial@gmail.com",
    title: "Email",
    aria: "Send email"
  }
];

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed top-1/2 right-0 z-50 flex items-center"
      style={{ transform: "translateY(-50%)" }}
    >
      <motion.div
        initial={false}
        animate={{
          x: open ? 0 : "calc(100% - 46px)" // used for changing the width of the botton
        }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="flex items-center"
        style={{ pointerEvents: "auto" }}
      >
        {/* Contact Panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="contact-panel"
              initial={{ opacity: 0, scale: 0.98, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: 30 }}
              transition={{ duration: 0.23 }}
              className="flex flex-col justify-between
                bg-white shadow-2xl border border-gray-100
                rounded-l-2xl px-5 py-6 min-h-[210px]
                w-64 mr-2"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-800 text-lg">Contact Us</span>
                <button
                  className="text-gray-400 hover:text-red-500 rounded-full p-1 ml-2"
                  onClick={() => setOpen(false)}
                  aria-label="Close contact panel"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="flex flex-col gap-4 mt-2">
                {contactOptions.map((option, idx) => (
                  <a
                    key={option.title}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition shadow group hover:scale-105 border border-gray-100"
                    aria-label={option.aria}
                    style={{ background: "#f6fafd" }}
                  >
                    <span className={`flex items-center justify-center rounded-full w-9 h-9 ${option.bg}`}>
                      {option.icon}
                    </span>
                    <span className="font-medium text-gray-700 group-hover:text-[#20817d]">
                      {option.title}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Floating Vertical Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`
            flex flex-col items-center justify-center
            px-3 py-2 text-white font-semibold
            bg-[#20817d] hover:bg-[#17645d] rounded-l-lg shadow-lg
            transition-all focus:outline-none
            `}
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            minHeight: 120,
            minWidth: 46,
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12
          }}
          aria-label={open ? "Close contact panel" : "Open contact panel"}
        >
          <PenTool size={22} className="mb-1" />
          <span className="text-base tracking-wide whitespace-nowrap">
            Contact
          </span>
        </button>
      </motion.div>
    </div>
  );
};

export default FloatingContactButton;