 

import React, { useState } from "react";
import ThemedPageLayout from "./ThemedPageLayout";
import { FaCheckCircle, FaHeadset } from "react-icons/fa";

const SubmitTicket = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send data to your backend or support system.
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2200);
  };

  return (
    <ThemedPageLayout title="Submit a Support Ticket">
      <section className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 py-10 md:py-16">
        {/* Left: Info & Illustration */}
        <div className="md:w-2/5 flex flex-col items-center md:items-start justify-center text-center md:text-left mb-10 md:mb-0">
          <div className="bg-blue-50 rounded-full p-6 mb-6">
            <FaHeadset className="text-4xl text-[#2563eb]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#073D44] mb-3">
            Need Assistance?
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            If you’re facing an issue, have a suggestion, or need help, our support team is here for you.
          </p>
          <p className="text-gray-500 text-sm">
            Please fill out the form and we’ll get back to you as soon as possible.
          </p>
        </div>
        {/* Right: Ticket Form */}
        <div className="md:w-3/5 bg-white rounded-xl shadow-lg p-6 md:p-10 border relative">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center min-h-[260px]">
              <FaCheckCircle className="text-green-500 text-5xl mb-3" />
              <h3 className="text-2xl font-bold text-[#073D44] mb-2">Ticket Submitted</h3>
              <p className="text-gray-700">
                Thank you! Your request has been received.<br />
                Our team will reach out to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-5">
                <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="Your full name"
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 font-semibold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 font-semibold text-gray-700" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="Brief description of your issue"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                  placeholder="Describe your issue in detail"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2563eb] text-white font-bold py-3 rounded-lg hover:bg-[#1746a2] transition text-lg"
              >
                Submit Ticket
              </button>
            </form>
          )}
        </div>
      </section>
    </ThemedPageLayout>
  );
};

export default SubmitTicket;