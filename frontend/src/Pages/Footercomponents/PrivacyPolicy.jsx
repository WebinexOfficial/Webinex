import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";
import { FaUserSecret, FaDatabase, FaShieldAlt, FaCookieBite, FaUserCheck, FaEnvelopeOpenText } from "react-icons/fa";

const sections = [
  {
    icon: <FaDatabase className="text-blue-600 text-xl mr-2" />,
    title: "What We Collect",
    description: "We collect information you provide (like name, email, and project details), as well as usage data to help us improve your experience on Webinex.",
  },
  {
    icon: <FaShieldAlt className="text-green-600 text-xl mr-2" />,
    title: "How We Use Your Data",
    description: "Your data helps us deliver, personalize, and enhance our services, contact you about your project, and comply with legal requirements. We never sell your personal information.",
  },
  {
    icon: <FaCookieBite className="text-yellow-500 text-xl mr-2" />,
    title: "Cookies & Analytics",
    description: "We use cookies and similar technologies to remember your preferences and measure how our site is used. These tools help us make Webinex better for you.",
  },
  {
    icon: <FaUserCheck className="text-teal-600 text-xl mr-2" />,
    title: "Your Rights & Choices",
    description: "You can request to view, update, or delete your personal information at any time. Just reach out to our team—we’re here to help!",
  },
];

const PrivacyPolicy = () => {
  return (
    <ThemedPageLayout title="Privacy Policy">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-yellow-50 rounded-xl px-6 py-14 mb-12 shadow-sm text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#073D44] mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Your privacy matters to us. This policy explains what data we collect, how we use it, and how we keep your information safe at Webinex.
        </p>
      </section>

      {/* Main Sections */}
      <section className="max-w-3xl mx-auto grid grid-cols-1 gap-8 pb-12 px-4">
        {sections.map(({ icon, title, description }) => (
          <div
            key={title}
            className="flex items-start bg-white rounded-lg shadow hover:shadow-md transition-all p-6 gap-4 border border-gray-100"
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
          <FaEnvelopeOpenText className="text-[#2563eb] text-2xl mb-2" />
          <h2 className="text-lg font-bold text-[#073D44]">Contact Us</h2>
        </div>
        <p className="text-gray-700">
          Questions or requests? Email us at{" "}
          <a
            href="mailto:privacy@webinex.in"
            className="underline text-blue-600 hover:text-blue-800"
          >
            privacy@webinex.in
          </a>
        </p>
      </section>
    </ThemedPageLayout>
  );
};

export default PrivacyPolicy;