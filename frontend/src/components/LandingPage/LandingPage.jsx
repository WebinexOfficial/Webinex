


import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaPenNib, FaSearch, FaPalette } from "react-icons/fa";

const ACCENT = "#C6FF33";
const DARK_BG = "#071717";
const WHITE = "#fff";

const services = [
  { icon: <FaRocket className="text-[#C6FF33]" />, label: "Web Development" },
  { icon: <FaPenNib className="text-[#C6FF33]" />, label: "Logo Design" },
  { icon: <FaSearch className="text-[#C6FF33]" />, label: "SEO" },
  { icon: <FaPalette className="text-[#C6FF33]" />, label: "UI/UX Design" },
];

export default function LandingPage() {
  return (
    <section
      className="relative w-full overflow-hidden min-h-[80vh] flex items-center"
      style={{ background: DARK_BG }}
    >
      {/* Floating gradient particles for tech effect */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/3 w-40 h-40 bg-gradient-to-tr from-[#C6FF33]/30 to-[#38B36A]/0 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute right-20 bottom-10 w-32 h-32 bg-gradient-to-tr from-[#38B36A]/30 to-transparent rounded-full blur-xl animate-pulse-slower" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 py-16 gap-12 relative z-10">
        {/* Left: Headline, body, CTAs */}
        <div className="flex-1 flex flex-col items-start justify-center gap-7">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Crafting <br />
            <span style={{ color: ACCENT }}>Digital Excellence</span>
          </h1>
          <p className="text-white text-lg sm:text-xl font-medium max-w-2xl">
            We build stunning websites, design impactful logos, and implement powerful SEO strategies to elevate your brand.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {services.map((service) => (
              <span
                key={service.label}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#14301A] text-white rounded-full text-sm font-semibold"
                style={{ border: `1.5px solid ${ACCENT}` }}
              >
                {service.icon} {service.label}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-5 w-full md:w-auto">
            <Link
              to="/portfolio"
              className="flex-1 sm:flex-none text-lg font-bold rounded-xl text-[#071717] bg-[#C6FF33] px-10 py-4 shadow-lg hover:bg-[#b5e630] transition-all text-center"
              style={{ border: `2px solid ${ACCENT}` }}
            >
              Explore Work
            </Link>
          </div>
        </div>
        {/* Right: Tech-inspired glass card with animated glowing border */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">  {/*hidden md:flex flex-1 flex-col items-center justify-center w-full*/}
          <div
            className="relative p-8 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-xl max-w-sm w-full flex flex-col items-center animate-glow-card"
            style={{
              border: `2.5px solid ${ACCENT}`,
              boxShadow: `0 0 32px 0 ${ACCENT}33, 0 8px 24px 0 #0002`,
              transition: "box-shadow 0.3s",
            }}
          >
            {/* SVG circuit lines for a techy touch */}
            <svg
              width="100"
              height="22"
              className="absolute top-5 left-8 opacity-50"
              fill="none"
              stroke={ACCENT}
              strokeWidth="2"
              strokeLinecap="round"
              style={{ filter: "blur(0.5px)" }}
            >
              <polyline points="0,11 25,11 35,3 55,19 70,7 100,7" />
            </svg>
            <span className="font-bold text-2xl text-white mb-2 drop-shadow">
              Tech Empowered
            </span>
            <span className="text-white text-center font-medium mb-4" style={{ color: ACCENT }}>
              Real-time <span className="text-white">innovation</span> <br /> with <span className="text-white">Webinex</span>
            </span>
            <span className="text-xs text-white/60 mb-1 tracking-wide">
              <svg
                width="22"
                height="22"
                className="inline-block mr-1"
                fill={ACCENT}
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" fill={ACCENT} opacity="0.15" />
                <path d="M7 12l3 3 7-7" stroke="#C6FF33" strokeWidth="2" fill="none" />
              </svg>
              Powered by creativity & code
            </span>
          </div>
        </div>
      </div>
      {/* Card glow animation */}
      <style>{`
        .animate-glow-card {
          animation: cardGlow 2.5s infinite alternate cubic-bezier(.5,.2,.3,1.01);
        }
        @keyframes cardGlow {
          0% {
            box-shadow: 0 0 32px 0 #C6FF3333, 0 8px 24px 0 #0002;
          }
          100% {
            box-shadow: 0 0 48px 8px #C6FF3366, 0 12px 36px 0 #0004;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(.4,0,.6,1) infinite alternate;
        }
        @keyframes pulse-slow {
          0% { opacity: 0.4; transform: scale(1);}
          100% { opacity: 0.7; transform: scale(1.08);}
        }
        .animate-pulse-slower {
          animation: pulse-slower 6s cubic-bezier(.4,0,.6,1) infinite alternate;
        }
        @keyframes pulse-slower {
          0% { opacity: 0.3; transform: scale(1);}
          100% { opacity: 0.55; transform: scale(1.10);}
        }
      `}</style>
    </section>
  );
}