import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Data-driven lists to reduce repetition
  const navSections = [
    {
      title: "Support",
      items: ["Submit ticket", "Documentation", "Guides"],
    },
  ];

  const companySections = [
    {
      title: "Company",
      items: ["About", "Blog", "Jobs", "Contact Us"],
    },
    {
      title: "Legal",
      items: ["Terms of service", "Privacy policy", "License"],
    },
  ];

  return (
    <footer className="bg-[#0C2228] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-start">
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company Logo"
            className="h-8 w-auto mb-2"
          />
          <p className="text-sm text-gray-400">
            Making the world a better place through constructing elegant hierarchies.
          </p>
        </div>

        {/* Dynamic Navigation Sections */}
        {navSections.map(({ title, items }) => (
          <div key={title}>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {items.map((label) => {
                const pathMap = {
                  "Submit ticket": "/submit-ticket",
                  Documentation: "/documentation",
                  Guides: "/guides",
                };
                const path = pathMap[label] || "#";

                return (
                  <li key={label}>
                    <Link to={path} className="hover:text-gray-300">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {/* Company & Legal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {companySections.map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {items.map((label) => {
                  const pathMap = {
                    About: "/about",
                    Blog: "/blog",
                    Jobs: "/jobs",
                    "Contact Us": "/contact",
                    "Terms of service": "/terms-of-service",
                    "Privacy policy": "/privacy-policy",
                    License: "/license",
                  };
                  const path = pathMap[label] || "#";

                  return (
                    <li key={label}>
                      <Link to={path} className="hover:text-gray-300">
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#17292E] py-4 mt-8">
        <div className="container mx-auto flex items-center justify-between px-6">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Your Company, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-gray-400 hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X (formerly Twitter)"
              className="text-gray-400 hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our GitHub"
              className="text-gray-400 hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to our YouTube channel"
              className="text-gray-400 hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
