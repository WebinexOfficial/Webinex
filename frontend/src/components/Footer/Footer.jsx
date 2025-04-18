import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";  // Instagram Icon
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";  // WhatsApp Icon
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";  // Email Icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";  // Meesho Icon

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-#0C2228 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <img
            src="/logo.jpg" 
            alt="Logo"
            className="h-20 w-auto object-contain"
          />
          <p className="mt-2 text-sm">Your one-stop shop for Kawaii Accessories!</p>
        </div>

        {/* Social Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-1">Let's stay linked!</h3>
          <div className="flex space-x-4">
            {/* Instagram Icon */}
            <a 
              href="https://www.instagram.com/k_awaii.accessories/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-all duration-300"
            >
              <FontAwesomeIcon 
                icon={faInstagram} 
                size="lg" 
                className="transition-transform duration-300 hover:scale-125"
              />
            </a>
            {/* WhatsApp Icon */}
            <a 
              href="https://wa.me/yourphonenumber"  // Replace with your WhatsApp number
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-all duration-300"
            >
              <FontAwesomeIcon 
                icon={faWhatsapp} 
                size="lg" 
                className="transition-transform duration-300 hover:scale-125"
              />
            </a>
            {/* Email Icon */}
            <a 
              href="mailto:anshuu9890@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-all duration-300"
            >
              <FontAwesomeIcon 
                icon={faEnvelope} 
                size="lg" 
                className="transition-transform duration-300 hover:scale-125"
              />
            </a>
            {/* Meesho Icon */}
            <a 
              href="https://www.meesho.com/KAWAIIACCESSORIES" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-all duration-300"
            >
              <FontAwesomeIcon 
                icon={faShoppingCart}  // Fallback store icon
                size="lg" 
                className="transition-transform duration-300 hover:scale-125"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-1">Quick Links</h3>
          <ul className="space-y-1">
  <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
  <li><a href="/terms" className="hover:text-gray-300">Terms & Conditions</a></li>
  <li><a href="/refund" className="hover:text-gray-300">Refund Policy</a></li>
</ul>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center pt-4 border-t border-white/20 mt-8">
        <p>&copy; {currentYear} Kawaii Accessories. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
