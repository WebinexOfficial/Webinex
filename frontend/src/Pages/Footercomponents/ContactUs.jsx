import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <ThemedPageLayout title="Contact Us">
      <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 md:px-10 lg:px-16 text-[#0C2228] font-body">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* LEFT SIDE - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#073D44]">
              Let's Build Something Great
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you’re looking to build a modern website, improve your SEO,
              design a standout logo, or craft seamless UI/UX – we’re ready to help.
              Contact us today to discuss how we can support your digital goals.
            </p>

            <div className="space-y-4 text-gray-800 mt-6">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#00D8A7]" />
                <a href="mailto:mukeshyadav234175@gmail.com" className="hover:text-[#00D8A7] transition">
                  mukeshyadav234175@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#00D8A7]" />
                <a href="tel:+919311596345" className="hover:text-[#00D8A7] transition">
                  +91 93115 96345
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-xl shadow-lg border space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#00D8A7] outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#00D8A7] outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell us about your project or question..."
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#00D8A7] outline-none transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#073D44] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0C2228] transition-all"
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
