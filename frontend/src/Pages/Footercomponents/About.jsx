


// updated about page 

import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";
import SEO from '../../pages/Seo';

export default function About() {
  return (
    <ThemedPageLayout title="About Us">
      {/* Hero Split Section */}
      <section className="w-full bg-gradient-to-b from-[#171e29] via-[#20293a] to-[#232946] py-16 md:py-24 px-4 md:px-0 rounded-3xl mb-12 shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Group Photo */}
          <div className="md:w-1/2 flex justify-center ">
            <img
              src="GroupPhoto.jpg" // group photo
              alt="Our Team"
              className="rounded-2xl shadow-xl w-full max-w-[330px] object-cover border-4 border-[#262f3f] bg-[#262f3f]"
              style={{ aspectRatio: "3/4", minHeight: 220 }}
            />
          </div>
          {/* Right: About Text */}
          <div className="md:w-1/2 text-left mt-10 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
              Meet the <span className="text-[#00e68e]">Webinex</span> Team
            </h1>
            <p className="text-lg text-[#f2f5fa] font-medium mb-3">
              We are a group of passionate students dedicated to building modern, creative, and reliable digital experiences for brands, startups, and creators.
            </p>
            <p className="text-base text-[#c0c8d6]">
              Driven by curiosity, collaboration, and a love for technology, we bring fresh ideas and real results to every project.
            </p>
          </div>
        </div>
      </section>

      {/* About Image Section */}
      <section className="w-full bg-[#f6fafd] py-14 rounded-3xl mb-10 shadow-inner">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* <img
            src="image2" // about-themed image (e.g. "About" illustration)
            alt="About Webinex"
            className="rounded-xl mb-6 w-full max-w-[420px] object-contain shadow"
            style={{ aspectRatio: "16/7", minHeight: 128 }}
          /> */}
          
          <div className="text-lg md:text-xl text-[#20293a] font-semibold text-center">
            Empowering businesses with student-driven innovation and modern web solutions.
          </div>
        </div>
      </section>
    </ThemedPageLayout>
  );
}