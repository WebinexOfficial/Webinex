 



import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link

const heroVideo = "https://res.cloudinary.com/dg1w52bkb/video/upload/v1748071242/hero-bg7_dtiogg.mp4";
const staticImage = "/fallback.png"; // Replace with your actual image path

export default function LandingPage() {
  const videoRef = useRef(null);
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
  }, [isMobile]);

  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[600px] overflow-hidden">
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
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90 transition-opacity duration-1000"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Strong black overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 md:px-16 text-white text-center pt-24 pb-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] px-2">
            Crafting Digital Excellence
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] mt-2 md:mt-4">
            We build stunning websites, design impactful logos, and implement powerful SEO strategies to elevate your brand.
          </p>

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

          {/* Single CTA Button */}
          <div className="mt-8 md:mt-12 flex justify-center px-2">
            <Link
              to="/portfolio"
              className="border-2 border-white/50 hover:border-white/80 text-white text-lg px-8 py-4 rounded-xl transform hover:scale-105 transition-all font-bold shadow-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              Explore Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
