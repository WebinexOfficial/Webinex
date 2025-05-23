 

import React, { useRef, useState, useEffect } from "react";

const videoSources = [
  "./src/assets/hero-bg5.mp4",
  "./src/assets/hero-bg6.mp4",
  "./src/assets/hero-bg7.mp4",
  "./src/assets/hero-bg8.mp4",
];

const staticImage = "./src/assets/fallback1.jpg"; // Replace with actual image path

export default function LandingPage() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }

    const timer = setTimeout(() => {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % videoSources.length
      );
    }, 6000); // 6 seconds interval

    return () => clearTimeout(timer);
  }, [currentVideoIndex, isMobile]);

  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[700px] overflow-hidden">
      {/* Background */}
      {isMobile ? (
        <img
          src={staticImage}
          alt="Hero fallback"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90 transition-opacity duration-1000"
        >
          <source src={videoSources[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/10 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 md:px-16 text-white text-center pt-24 pb-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)] px-2">
            Our Freelancers
            <br />
            Will Take It From Here
          </h1>

          {/* Search Bar */}
          <div className="relative mt-4 md:mt-8 max-w-2xl mx-auto w-full px-2">
            <input
              type="text"
              placeholder="Search for any service..."
              className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 focus:border-white/60 focus:ring-2 focus:ring-white/30 outline-none transition-all text-sm md:text-base"
            />
            <svg
              className="absolute right-3 top-3 md:right-4 md:top-4 h-5 w-5 md:h-6 md:w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Scrollable Service Tags */}
          <div className="hidden md:flex justify-center overflow-x-auto no-scrollbar gap-2 md:gap-4 mt-4 md:mt-6 text-sm md:text-lg px-2">
            {["website development", "logo design", "seo", "ui/ux design"].map(
              (service) => (
                <span
                  key={service}
                  className="whitespace-nowrap px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  {service}
                </span>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 md:gap-6 px-2">
            <div className="hidden md:block">
              <button className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm md:text-lg px-4 py-3 md:px-8 md:py-4 rounded-xl transform hover:scale-105 transition-all border-2 border-white/30">
                Get Free Consultation
              </button>
            </div>
            <button className="w-full sm:w-auto border-2 border-white/50 hover:border-white/80 text-white hover:text-white/90 text-sm md:text-lg px-4 py-3 md:px-8 md:py-4 rounded-xl transform hover:scale-105 transition-all">
              Explore Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}