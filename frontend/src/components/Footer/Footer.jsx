

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagram,
//   faXTwitter,
//   faGithub,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

// const currentYear = new Date().getFullYear();

// const navSections = [
//   {
//     title: "Support",
//     items: [
//       { label: "Submit Ticket", href: "SubmitTicket" },
//       { label: "Documentation", href: "#" },
//       { label: "Guides", href: "#" },
//     ],
//   },
// ];

// const companySections = [
//   {
//     title: "Company",
//     items: [
//       { label: "About", href: "About" },
//       { label: "Blog", href: "Blog" },
//       { label: "Jobs", href: "#" },
//       { label: "Contact Us", href: "contact" },
//     ],
//   },
//   {
//     title: "Legal",
//     items: [
//       { label: "Terms of Service", href: "#" },
//       { label: "Privacy Policy", href: "#" },
//       { label: "License", href: "#" },
//     ],
//   },
// ];

// const Footer = () => (
//   <footer className="bg-[#0C2228] text-white pt-16 pb-4">
//     <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
//       {/* Logo & Tagline */}
//       <div className="flex flex-col items-start">
//         <img
//           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//           alt="Your Company Logo"
//           className="h-9 w-auto mb-3"
//         />
//         <p className="text-base text-gray-300 mb-4">
//           Building digital experiences that drive results.
//         </p>
//         {/* Contact Info */}
//         <div className="flex flex-col gap-2 text-sm text-gray-400">
//           <span>
//             <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#7AE2CF]" />
//             <a href="mailto:info@yourcompany.com" className="hover:text-white transition">info@yourcompany.com</a>
//           </span>
//           <span>
//             <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#7AE2CF]" />
//             <a href="tel:+1234567890" className="hover:text-white transition">+1 234 567 890</a>
//           </span>
//         </div>
//       </div>

//       {/* Navigation Sections */}
//       {navSections.map(({ title, items }) => (
//         <div key={title}>
//           <h3 className="text-lg font-semibold mb-3 tracking-wide text-[#7AE2CF]">{title}</h3>
//           <ul className="space-y-2 text-base text-gray-300">
//             {items.map(({ label, href }) => (
//               <li key={label}>
//                 <a href={href} className="hover:text-white transition">{label}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       {/* Company & Legal */}
//       <div className="md:col-span-2 grid grid-cols-2 gap-6">
//         {companySections.map(({ title, items }) => (
//           <div key={title}>
//             <h3 className="text-lg font-semibold mb-3 tracking-wide text-[#7AE2CF]">{title}</h3>
//             <ul className="space-y-2 text-base text-gray-300">
//               {items.map(({ label, href }) => (
//                 <li key={label}>
//                   <a href={href} className="hover:text-white transition">{label}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Newsletter / CTA */}
//     <div className="max-w-7xl mx-auto px-6 mt-12 mb-8">
//       <div className="bg-[#17292E] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
//         <div>
//           <h4 className="text-xl font-semibold mb-1 text-white">Stay in the loop</h4>
//           <p className="text-gray-400 text-base">
//             Subscribe to our newsletter for updates, tips, and special offers.
//           </p>
//         </div>
//         <form className="flex w-full max-w-md mt-4 md:mt-0">
//           <input
//             type="email"
//             placeholder="Your email address"
//             className="flex-1 px-4 py-2 rounded-l-lg bg-white text-gray-900 focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="bg-[#7AE2CF] text-[#0C2228] px-5 py-2 rounded-r-lg font-semibold hover:bg-[#009e60] hover:text-white transition"
//           >
//             Subscribe
//           </button>
//         </form>
//       </div>
//     </div>

//     {/* Bottom Bar */}
//     <div className="bg-[#17292E] py-4">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
//         <p className="text-sm text-gray-400">
//           &copy; {currentYear} Your Company, Inc. All rights reserved.
//         </p>
//         <div className="flex space-x-5 mt-2 md:mt-0">
//           <a
//             href="https://www.instagram.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Instagram"
//             className="text-gray-400 hover:text-[#7AE2CF] transition"
//           >
//             <FontAwesomeIcon icon={faInstagram} size="lg" />
//           </a>
//           <a
//             href="https://twitter.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Twitter"
//             className="text-gray-400 hover:text-[#7AE2CF] transition"
//           >
//             <FontAwesomeIcon icon={faXTwitter} size="lg" />
//           </a>
//           <a
//             href="https://github.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub"
//             className="text-gray-400 hover:text-[#7AE2CF] transition"
//           >
//             <FontAwesomeIcon icon={faGithub} size="lg" />
//           </a>
//           <a
//             href="https://www.youtube.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="YouTube"
//             className="text-gray-400 hover:text-[#7AE2CF] transition"
//           >
//             <FontAwesomeIcon icon={faYoutube} size="lg" />
//           </a>
//         </div>
//       </div>
//       </div>
//     </footer>
//   );


// export default Footer;



import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const currentYear = new Date().getFullYear();

const navSections = [
  {
    title: "Support",
    items: [
      { label: "Submit Ticket", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Guides", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Jobs", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "License", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0C2228] text-white pt-10 pb-6">
      {/* Newsletter Section */}
      <div className="max-w-lg mx-auto px-4 text-center">
        <h4 className="text-2xl font-semibold mb-2">Stay in the loop</h4>
        <p className="text-gray-400 text-base mb-4">
          Subscribe to our newsletter for updates, tips, and special offers.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:w-auto flex-1 px-4 py-2 rounded-lg bg-white text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#00D8A7] hover:bg-[#009e60] hover:text-white text-[#0C2228] font-semibold px-5 py-2 rounded-lg transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-700 mx-6" />

      {/* Logo & Contact Info */}
      <div className="max-w-lg mx-auto px-4 text-center space-y-3">
        <img
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company Logo"
          className="mx-auto h-10"
        />
        <p className="text-gray-400 text-base">
          Building digital experiences that drive results.
        </p>
        <div className="text-sm text-gray-400 space-y-1">
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#00D8A7]" />
            <a href="mailto:info@yourcompany.com" className="hover:text-white">
              info@yourcompany.com
            </a>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#00D8A7]" />
            <a href="tel:+1234567890" className="hover:text-white">
              +1 234 567 890
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-700 mx-6" />

      {/* Navigation Sections */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        {navSections.map(({ title, items }) => (
          <div key={title}>
            <h3 className="text-lg font-semibold text-[#00D8A7] mb-3">{title}</h3>
            <ul className="space-y-2 text-base text-gray-400">
              {items.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-700 mx-6" />

      {/* Social Media & Bottom Bar */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-between text-center space-y-4 sm:space-y-0 sm:flex-row sm:text-left">
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Your Company, Inc. All rights reserved.
        </p>
        <div className="flex space-x-5">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#00D8A7] transition">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-[#00D8A7] transition">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-[#00D8A7] transition">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-[#00D8A7] transition">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
