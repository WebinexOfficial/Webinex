import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";
import { FaGavel, FaUserShield, FaLock, FaExclamationTriangle, FaSyncAlt, FaEnvelope } from "react-icons/fa";

const terms = [
  {
    icon: <FaGavel className="text-blue-600 text-lg mr-2" />,
    title: "Acceptance of Terms",
    desc: "By accessing or using Webinex, you agree to comply with these Terms of Service and all applicable laws and regulations."
  },
  {
    icon: <FaUserShield className="text-yellow-500 text-lg mr-2" />,
    title: "User Responsibilities",
    desc: "You agree to use our services for lawful, ethical purposes only. Please do not misuse, disrupt, or attempt to gain unauthorized access to our platform."
  },
  {
    icon: <FaLock className="text-green-600 text-lg mr-2" />,
    title: "Intellectual Property",
    desc: "All content, branding, and materials on Webinex are the property of our company or our partners. You may not copy, reproduce, or distribute without permission."
  },
  {
    icon: <FaExclamationTriangle className="text-red-500 text-lg mr-2" />,
    title: "Account Termination",
    desc: "We reserve the right to suspend or terminate your account if you violate these terms, our Acceptable Use Policy, or applicable law."
  },
  {
    icon: <FaSyncAlt className="text-indigo-600 text-lg mr-2" />,
    title: "Changes to Terms",
    desc: "We may update these Terms from time to time. Continued use of Webinex indicates your acceptance of the most current version."
  },
  {
    icon: <FaExclamationTriangle className="text-gray-500 text-lg mr-2" />,
    title: "Limitation of Liability",
    desc: "Webinex is provided 'as is.' We are not liable for any indirect, incidental, or consequential damages related to your use of our services."
  }
];

const TermsOfService = () => {
  return (
    <ThemedPageLayout title="Terms of Service">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-yellow-50 rounded-xl px-6 py-14 mb-12 shadow-sm text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#073D44] mb-4">
          Terms of Service
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Please review our terms and policies before using Webinex. We strive to be transparent and fair, ensuring a trusted experience for all users.
        </p>
      </section>

      {/* Terms List */}
      <section className="max-w-3xl mx-auto grid grid-cols-1 gap-8 pb-12 px-4">
        {terms.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="flex flex-row items-start bg-white rounded-lg shadow hover:shadow-md transition-all p-6 gap-4 border border-gray-100"
          >
            <div className="mt-2">{icon}</div>
            <div>
              <h2 className="text-xl font-semibold text-[#073D44] mb-1">{title}</h2>
              <p className="text-gray-600">{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="max-w-xl mx-auto text-center py-8">
        <div className="flex flex-col items-center mb-3">
          <FaEnvelope className="text-[#2563eb] text-2xl mb-2" />
          <h2 className="text-lg font-bold text-[#073D44]">Contact Us</h2>
        </div>
        <p className="text-gray-700">
          Have questions about our Terms? <br />
          Email us at{" "}
          <a
            href="mailto:support@webinex.in"
            className="underline text-blue-600 hover:text-blue-800"
          >
            support@webinex.in
          </a>
        </p>
      </section>
    </ThemedPageLayout>
  );
};

export default TermsOfService;