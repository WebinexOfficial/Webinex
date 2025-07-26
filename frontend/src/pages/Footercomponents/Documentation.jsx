 

import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";
import { Link } from "react-router-dom";
import { FaBook, FaRocket, FaPuzzlePiece, FaQuestionCircle, FaHeadset } from "react-icons/fa";

const sections = [
  {
    icon: <FaRocket className="text-blue-600 text-2xl" />,
    title: "Quick Start",
    desc: "Set up your account and discover how to launch your first project with Webinex in minutes.",
    id: "quick-start",
  },
  {
    icon: <FaPuzzlePiece className="text-yellow-500 text-2xl" />,
    title: "Core Features",
    desc: "Dive into all the tools, integrations, and customization options we offer to help you grow.",
    id: "core-features",
  },
  {
    icon: <FaBook className="text-green-600 text-2xl" />,
    title: "Step-by-Step Guides",
    desc: "Follow our practical guides and real-world examples to master every aspect of our platform.",
    id: "guides",
  },
  {
    icon: <FaQuestionCircle className="text-indigo-600 text-2xl" />,
    title: "FAQs & Troubleshooting",
    desc: "Get instant answers to common questions, and solve issues with our clear troubleshooting tips.",
    id: "faq",
  },
  {
    icon: <FaHeadset className="text-teal-600 text-2xl" />,
    title: "Contact & Support",
    desc: (
      <>
        Need help? Our team is always ready!&nbsp;
        <a
          href="mailto:webinexofficial@gmail.com"
          className="underline text-blue-600 hover:text-blue-800"
        >
          webinexofficial@gmail.com
        </a>
      </>
    ),
    id: "support",
  },
];

const heroText = {
  heading: "Webinex Documentation",
  subheading:
    "Everything you need to build, launch, and succeed with Webinex. Explore our guides, feature overviews, and troubleshooting resources—all designed to help you create standout digital experiences.",
};

const Documentation = () => {
  return (
    <ThemedPageLayout title="Documentation">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-yellow-50 rounded-xl px-6 py-14 mb-12 shadow-sm text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#073D44] mb-4">{heroText.heading}</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">{heroText.subheading}</p>
      </section>

      {/* Main Documentation Sections */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pb-20">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex flex-col items-start bg-white rounded-lg shadow hover:shadow-md transition-all p-6 gap-3 border border-gray-100"
          >
            <div>{section.icon}</div>
            <h2 className="text-xl font-semibold text-[#073D44]">{section.title}</h2>
            <p className="text-gray-600">{section.desc}</p>
            {section.id === "quick-start" && (
              <Link
                to="/register"
                className="inline-block mt-2 text-blue-600 underline hover:text-blue-800 text-sm font-medium"
              >
                
              </Link>
            )}
            {section.id === "core-features" && (
              <Link
                to="/OurServices"
                className="inline-block mt-2 text-yellow-600 underline hover:text-yellow-800 text-sm font-medium"
              >
                
              </Link>
            )}
            {section.id === "support" && (
              <Link
                to="/contact"
                className="inline-block mt-2 text-teal-600 underline hover:text-teal-800 text-sm font-medium"
              >
                
              </Link>
            )}
          </div>
        ))}
      </section>
    </ThemedPageLayout>
  );
};

export default Documentation;