import React, { useState } from "react";
import ThemedPageLayout from "./ThemedPageLayout";

const SubmitTicket = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just alert. Replace with real submission logic later.
    alert("Thank you! Your support ticket has been submitted.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <ThemedPageLayout title="Submit a Ticket">
      <p>
        Facing issues or have a question? Submit a support ticket and our team will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 max-w-lg">
        <label className="block mb-2 font-semibold" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
          placeholder="Your full name"
        />

        <label className="block mb-2 font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
          placeholder="you@example.com"
        />

        <label className="block mb-2 font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
          placeholder="Brief description of your issue"
        />

        <label className="block mb-2 font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-2 border rounded mb-4"
          placeholder="Describe your issue in detail"
        />

        <button
          type="submit"
          className="bg-[#073D44] text-white font-semibold py-2 px-4 rounded hover:bg-[#05514f] transition"
        >
          Submit Ticket
        </button>
      </form>
    </ThemedPageLayout>
  );
};

export default SubmitTicket;
