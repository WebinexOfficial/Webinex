import React, { useState } from "react";
import { Phone, X, MessageCircle } from "lucide-react"; // Optional: Lucide icons

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
      {open && (
        <>
          <a
            href="tel:+1234567890"
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-lg transition-all duration-200"
            title="Call"
          >
            <Phone size={24} />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-200"
            title="WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={`${
          open ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
        } text-white rounded-full p-4 shadow-xl transition-all duration-300`}
        title={open ? "Close" : "Contact"}
      >
        {open ? <X size={24} /> : <Phone size={24} />}
      </button>
    </div>
  );
};

export default FloatingContactButton;
