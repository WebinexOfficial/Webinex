


import React from "react";
import { Link } from "react-router-dom";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Linkedin } from "lucide-react";

// Update these with your actual logo, company name, tagline, and links
const currentYear = new Date().getFullYear();
const logoSrc = "webinex-logo-dark.png"; // Replace with your logo path
const companyName = "";
const tagline = "Crafting Digital Experiences That Grow Brands";

const navSections = [
  {
    title: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Blog", to: "/blog" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Documentation", to: "/documentation" },
      { label: "Submit Ticket", to: "/submit-ticket" },
      { label: "Guides", to: "/guides" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Terms of Service", to: "/terms-of-service" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "License", to: "/license" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#181E22] text-[#f3f4f6] pt-10 pb-4 border-t border-[#23282C]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start md:w-1/4 mb-8 md:mb-0">
          <Link to="/" className="flex items-center gap-3 mb-2 group">
            <img src={logoSrc} alt={companyName} className="w-24 h-13 rounded-lg shadow" />
            <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-[#009e60] transition">
              {companyName}
            </span>
          </Link>
          <div className="text-xs text-gray-400 font-medium pr-3">{tagline}</div>
        </div>
        {/* Navigation */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
          {navSections.map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-[#009e60] mb-3 uppercase tracking-wider">{title}</h3>
              <ul className="space-y-2 text-base">
                {items.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="hover:text-[#009e60] transition font-medium text-[#f3f4f6]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Contact */}
        <div className="md:w-1/4 mt-8 md:mt-0 flex flex-col items-start gap-2">
          <div className="flex items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#009e60]" />
            <a href="mailto:webinexofficial@gmail.com" className="hover:text-[#009e60] transition">
              webinexofficial@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faPhone} className="text-[#009e60]" />
            <a href="tel:+919311596345" className="hover:text-[#009e60] transition">
              +91 931 159 6345
            </a>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <a href="https://www.instagram.com/webinexofficial/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#009e60] transition">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            {/* <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-[#009e60] transition">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a> */}
            <a
              href="https://www.linkedin.com/company/107505593/admin/dashboard/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#009e60] transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              
            </a>

          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row items-center justify-between border-t border-[#23282C] pt-4">
        <span className="text-xs text-gray-400">
          &copy; {currentYear} {companyName}. All rights reserved.
        </span>
        <span className="text-xs text-gray-500 mt-1 md:mt-0">
          Built with <span className="text-[#009e60] font-bold">♥</span> by {companyName}
        </span>
      </div>
    </footer>
  );
}