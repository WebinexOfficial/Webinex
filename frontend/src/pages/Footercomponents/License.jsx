import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";
import { FaKey, FaBan, FaCrown, FaTimesCircle, FaEnvelope } from "react-icons/fa";

const licenseSections = [
  {
    icon: <FaKey className="text-blue-600 text-xl mr-2" />,
    title: "License Grant",
    description:
      "Webinex grants you a limited, non-exclusive, non-transferable license to use our products and services in accordance with these terms and your selected plan.",
  },
  {
    icon: <FaBan className="text-red-500 text-xl mr-2" />,
    title: "Restrictions",
    description:
      "You may not modify, distribute, sublicense, sell, or reverse engineer any part of our products unless expressly permitted in writing by Webinex.",
  },
  {
    icon: <FaCrown className="text-yellow-500 text-xl mr-2" />,
    title: "Ownership",
    description:
      "All intellectual property and rights to our code, designs, and content remain the sole property of Webinex or our licensors.",
  },
  {
    icon: <FaTimesCircle className="text-gray-600 text-xl mr-2" />,
    title: "Termination",
    description:
      "Your license terminates automatically upon violation of these terms. Upon termination, you must discontinue all use of Webinex products and destroy any copies.",
  },
];

const License = () => {
  return (
    <ThemedPageLayout title="License">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-yellow-50 rounded-xl px-6 py-14 mb-12 shadow-sm text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#073D44] mb-4">
          License & Usage Terms
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Please review the following terms to understand how you are permitted to use Webinex products and services.
        </p>
      </section>

      {/* License Terms List */}
      <section className="max-w-3xl mx-auto grid grid-cols-1 gap-8 pb-12 px-4">
        {licenseSections.map(({ icon, title, description }) => (
          <div
            key={title}
            className="flex flex-row items-start bg-white rounded-lg shadow hover:shadow-md transition-all p-6 gap-4 border border-gray-100"
          >
            <div className="mt-2">{icon}</div>
            <div>
              <h2 className="text-xl font-semibold text-[#073D44] mb-1">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="max-w-xl mx-auto text-center py-8">
        <div className="flex flex-col items-center mb-3">
          <FaEnvelope className="text-[#2563eb] text-2xl mb-2" />
          <h2 className="text-lg font-bold text-[#073D44]">License Inquiries</h2>
        </div>
        <p className="text-gray-700">
          Have a question about your rights or terms of use? <br />
          Contact us at{" "}
          <a
            href="mailto:licensing@webinex.in"
            className="underline text-blue-600 hover:text-blue-800"
          >
            licensing@webinex.in
          </a>
        </p>
      </section>
    </ThemedPageLayout>
  );
};

export default License;