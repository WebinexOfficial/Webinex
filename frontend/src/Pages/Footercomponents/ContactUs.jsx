import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";
import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <ThemedPageLayout title="Contact Us">
     <section className="w-full bg-[#0C2228] py-20 px-6 md:px-16 font-body text-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">

    {/* LEFT SIDE - Info + Instagram */}
    <motion.div
      className="md:w-1/2 space-y-8"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-heading mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-300 leading-relaxed">
        Have a project in mind? Want to collaborate or just say hi? Fill out the form or connect with me directly!
      </p>

      <div className="space-y-4 text-gray-300">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-[#64FFDA]" />
          <a href="mailto:mukeshyadav234175@gmail.com" className="hover:text-[#64FFDA] transition">
            mukeshyadav234175@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-[#64FFDA]" />
          <a href="tel:+919311596345" className="hover:text-[#64FFDA] transition">
            +91 9311596345
          </a>
        </div>
      </div>

      {/* Instagram Card */}
      <motion.a
        href="https://www.instagram.com/unsettle_artist/?next=%2F"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#0C2228] to-[#144554] text-white rounded-xl shadow-lg hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
      >
        <FaInstagram size={32} />
        <div>
          <p className="text-lg font-semibold">Follow me on Instagram</p>
          <p className="text-sm">@unsettle_artist</p>
        </div>
      </motion.a>
    </motion.div>

    {/* RIGHT SIDE - Contact Form */}
    <motion.form
      className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg space-y-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <div>
        <label className="block mb-2 text-sm font-medium text-[#0C2228]" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className="w-full border border-[#0C2228] px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#0C2228] outline-none transition"
          placeholder="Your Name"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-[#0C2228]" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="w-full border border-[#0C2228] px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#0C2228] outline-none transition"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-[#0C2228]" htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="5"
          className="w-full border border-[#0C2228] px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#0C2228] outline-none transition resize-none"
          placeholder="Write your message..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#0C2228] text-white px-6 py-3 rounded-full font-medium hover:bg-[#144554] transition-all"
      >
        Send Message
      </button>
    </motion.form>
  </div>
</section>

    </ThemedPageLayout>
  );
};

export default ContactUs;
