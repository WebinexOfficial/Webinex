import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";

const About = () => {
  return (
    <ThemedPageLayout title="About Us">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#073D44] mb-3">
          Building Digital Experiences That Drive Results
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We help businesses grow with powerful websites, performance-driven SEO,
          modern design, and standout brand identity.
        </p>
      </section>

      {/* Origin Story & Mission */}
      <section className="max-w-4xl mx-auto mb-12 text-gray-700 space-y-4">
        <h2 className="text-2xl font-semibold text-[#073D44] mb-2">Our Journey Begins with Your Vision</h2>
        <p>
          We started with a clear goal — to make high-quality digital solutions accessible
          to startups, small businesses, and creators. In a world driven by technology, we believe
          good design and strong development go hand in hand to create impact.
        </p>
        <p>
          Our mission is simple: to craft web experiences that don’t just look good but deliver measurable
          results. Whether it’s building a sleek website, optimizing for search engines, or designing a brand identity — we focus on what moves the needle for you.
        </p>
      </section>

      {/* Passion & Values */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center text-[#073D44] mb-8">What Drives Us</h2>
        <div className="grid gap-6 md:grid-cols-2 text-gray-700">
          <div className="bg-[#E8FAF4] p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">🎯 Purpose-Driven</h3>
            <p>We build with intention — every pixel, every line of code aligns with your goals.</p>
          </div>
          <div className="bg-[#E8FAF4] p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">⚡ Speed & Performance</h3>
            <p>Fast-loading, SEO-optimized sites that keep your users engaged and Google happy.</p>
          </div>
          <div className="bg-[#E8FAF4] p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">🧠 User-Focused</h3>
            <p>Interfaces designed for real people, ensuring intuitive, meaningful interactions.</p>
          </div>
          <div className="bg-[#E8FAF4] p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">📈 Growth-Minded</h3>
            <p>From launch to scale — we help you grow with data-backed decisions and strategies.</p>
          </div>
        </div>
      </section>

      {/* Services Reference */}
      <section className="text-center mb-14">
        <h2 className="text-2xl font-semibold text-[#073D44] mb-3">Explore Our Services</h2>
        <p className="text-gray-600 mb-4">
          From web development and SEO to design and branding — we’ve got you covered.
        </p>
        <a
          href="/services"
          className="inline-block bg-[#00D8A7] text-[#0C2228] hover:bg-[#009e60] font-semibold px-6 py-3 rounded-lg transition"
        >
          View Our Services
        </a>
      </section>

      {/* Optional Founder Note */}
      <section className="max-w-3xl mx-auto text-center text-gray-700 italic">
        <p>
          “Hi, I’m [Your Name], the founder of [Your Company Name]. I created this platform
          to empower businesses with modern tools that work. We combine creative design, technical excellence,
          and a results-first mindset to help you thrive online.”
        </p>
      </section>
    </ThemedPageLayout>
  );
};

export default About;
