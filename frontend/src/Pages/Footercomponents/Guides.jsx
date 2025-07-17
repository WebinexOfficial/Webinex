import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";
import { FaUserPlus, FaClipboardList, FaRegLightbulb, FaHandshake, FaRocket, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: <FaUserPlus className="text-blue-600 text-xl" />,
    title: "Sign Up & Onboard",
    description: "Create your Webinex account and tell us a little about your business or project goals.",
  },
  {
    icon: <FaClipboardList className="text-yellow-500 text-xl" />,
    title: "Pick Your Service",
    description: "Choose from our web development, UI/UX, branding, or SEO solutions—whatever fits your vision.",
  },
  {
    icon: <FaRegLightbulb className="text-green-600 text-xl" />,
    title: "Share Your Brief",
    description: "Complete our project brief form so we can understand your requirements, target audience, and style.",
  },
  {
    icon: <FaHandshake className="text-teal-500 text-xl" />,
    title: "Collaborate & Review",
    description: "Work closely with our team, give feedback, and watch your digital project come to life.",
  },
  {
    icon: <FaRocket className="text-indigo-600 text-xl" />,
    title: "Go Live!",
    description: "Approve the final version and launch your new website or brand with confidence. We’re here for ongoing support and updates.",
  },
];

const Guide = () => {
  return (
    <ThemedPageLayout title="Get Started with Webinex">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-yellow-50 rounded-xl px-6 py-14 mb-12 shadow-sm text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#073D44] mb-4">
          Your Journey with Webinex Starts Here
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          We make digital transformation simple, collaborative, and rewarding. Here’s how to launch your professional project with us—step by step.
        </p>
      </section>

      {/* Steps Section */}
      <section className="max-w-3xl mx-auto grid grid-cols-1 gap-8 pb-16 px-4">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="flex items-start bg-white rounded-lg shadow hover:shadow-md transition-all p-6 gap-5 border border-gray-100"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
              {step.icon}
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-[#073D44] mb-1">
                <span className="mr-2 text-gray-400 font-bold">Step {idx + 1}</span>
                {step.title}
              </h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Next Steps Call-to-Action */}
      <section className="max-w-2xl mx-auto flex flex-col items-center text-center pt-6 pb-16">
        <p className="text-gray-700 mb-3">
          Need more details or help with your project?
        </p>
        <div className="flex gap-4">
          <Link
            to="/documentation"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition gap-2"
          >
            <FaArrowRight />
            Read Documentation
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition gap-2"
          >
            <FaArrowRight />
            Contact Support
          </Link>
        </div>
      </section>
    </ThemedPageLayout>
  );
};

export default Guide;