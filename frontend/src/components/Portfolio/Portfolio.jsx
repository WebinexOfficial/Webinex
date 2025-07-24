
// updated portfolio page 

 

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Globe, PenTool, TrendingUp, Layout } from "lucide-react";
import SEO from "../../pages/Seo";

// --- Card Data, keep original card gradients ---
const categories = [
  {
    title: "Website Development",
    image: "/dev.jpg",
    slug: "web-development",
    tag: "Web Dev",
    icon: <Globe size={28} className="text-white" />,
    desc: "Custom, high-performing websites tailored for your business.",
    gradient: "from-green-900 via-emerald-800 to-green-950",
    shadow: "shadow-green-200",
  },
  {
    title: "Logo Design",
    image: "/logo.jpg",
    slug: "logo-design",
    tag: "Branding",
    icon: <PenTool size={28} className="text-white" />,
    desc: "Memorable logos that elevate your brand identity.",
    gradient: "from-rose-900 via-rose-800 to-pink-950",
    shadow: "shadow-pink-200",
  },
  {
    title: "SEO",
    image: "/seo.jpg",
    slug: "seo",
    tag: "SEO",
    icon: <TrendingUp size={28} className="text-white" />,
    desc: "Boost your rankings and drive organic traffic.",
    gradient: "from-pink-900 via-rose-800 to-rose-950",
    shadow: "shadow-blue-100",
  },
  {
    title: "UI/UX Design",
    image: "/uiux.jpg",
    slug: "ui-ux-design",
    tag: "UI/UX",
    icon: <Layout size={28} className="text-white" />,
    desc: "Intuitive, beautiful interfaces for better user engagement.",
    gradient: "from-indigo-900 via-indigo-800 to-indigo-950",
    shadow: "shadow-indigo-200",
  },
];

const PortfolioSection = () => {
  const [visibleCards, setVisibleCards] = useState(categories.slice(0, 4));
  const [queue, setQueue] = useState(categories);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isSliding, setIsSliding] = useState(false);
  const [isLaptopView, setIsLaptopView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Responsive logic
  const updateCardsToShow = () => {
    if (window.innerWidth < 640) {
      setCardsToShow(1.25);
      setIsLaptopView(false);
      setIsMobileView(true);
    } else if (window.innerWidth < 1024) {
      setCardsToShow(1.25);
      setIsLaptopView(false);
      setIsMobileView(true);
    } else if (window.innerWidth < 1280) {
      setCardsToShow(3);
      setIsLaptopView(true);
      setIsMobileView(false);
    } else {
      setCardsToShow(4);
      setIsLaptopView(true);
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    if (!isMobileView) {
      setVisibleCards(queue.slice(0, cardsToShow));
    } else {
      setVisibleCards(queue);
    }
  }, [cardsToShow, queue, isMobileView]);

  useEffect(() => {
    if (!isSliding && isLaptopView && !isHovering) {
      const interval = setInterval(() => {
        handleRightClick();
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [queue, cardsToShow, isSliding, isLaptopView, isHovering]);

  // Carousel navigation
  const handleRightClick = () => {
    const newQueue = [...queue];
    const firstCard = newQueue.shift();
    newQueue.push(firstCard);
    setQueue(newQueue);
    setVisibleCards(newQueue.slice(0, cardsToShow));
  };

  const handleLeftClick = () => {
    const newQueue = [...queue];
    const lastCard = newQueue.pop();
    newQueue.unshift(lastCard);
    setQueue(newQueue);
    setVisibleCards(newQueue.slice(0, cardsToShow));
  };

  const handleTouchStart = () => setIsSliding(true);
  const handleTouchEnd = () => setIsSliding(false);
  const handleMouseEnter = () => isLaptopView && setIsHovering(true);
  const handleMouseLeave = () => isLaptopView && setIsHovering(false);

  return (
    <>
      <SEO 
        title="Portfolio - See Our Web Design & Branding Work | Webinex"
        description="Check out our portfolio of websites, UI/UX designs, SEO results, and logos crafted for startups, businesses, and personal brands."
        url="https://www.webinex.in/Portfolio"
        canonical="https://www.webinex.in/Portfolio"
        keywords="portfolio web design, ui ux case studies, seo projects, branding portfolio"
      />

      <section className="py-20 bg-[#f5f7fa] border-b-8 border-[#009e60] relative z-10">
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold tracking-tight mb-3 font-serif bg-gradient-to-r from-[#1e293b] via-[#009e60] to-[#6366f1] bg-clip-text text-transparent drop-shadow-lg">
              Our Portfolio
            </h2>
            <p className="text-lg md:text-xl font-medium mb-4 text-[#273043] font-sans">
              See how we help brands grow with <span className="font-semibold text-[#009e60]">stunning digital solutions</span>.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div
              className={`flex gap-8 transition-all duration-500 ease-in-out ${
                isMobileView
                  ? "overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 snap-x snap-mandatory pb-2"
                  : "justify-center items-center overflow-hidden"
              }`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {visibleCards.map((item, index) => (
                <Link
                  to={`/portfolio/${item.slug}`}
                  key={index}
                  className={`group ${
                    isMobileView
                      ? "w-[calc(80vw-14px)] flex-shrink-0 snap-start"
                      : "w-[280px] md:w-[320px] min-h-[430px]"
                  } rounded-3xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-br ${item.gradient} ${item.shadow} relative border-2 border-white`}
                  aria-label={`View ${item.title} portfolio`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  tabIndex={0}
                >
                  {/* Card Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-25 rounded-3xl backdrop-blur-sm opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-center items-center z-10">
                    <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 mb-1 transition-all duration-300 drop-shadow">
                      {item.title}
                    </span>
                    <span className="text-white text-base opacity-0 group-hover:opacity-100 transition-all duration-300">
                      View Projects
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col h-full relative z-0 p-4">
                    {/* Service Icon and Tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-black/30 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                        {item.icon}
                      </span>
                      <span className="text-xs text-white bg-white/20 rounded-full px-3 py-1 font-semibold tracking-wide">
                        {item.tag}
                      </span>
                    </div>
                    {/* Image */}
                    <div className="rounded-xl overflow-hidden aspect-[4/3] mb-3">
                      <img
                        src={item.image}
                        alt={`${item.title} portfolio example`}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    {/* Title & Description */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 drop-shadow">
                      {item.title}
                    </h3>
                    <p className="text-base text-white/90">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation Arrows */}
            {isLaptopView && queue.length > cardsToShow && (
              <>
                <button
                  onClick={handleLeftClick}
                  className="absolute left-[-34px] md:left-[-60px] top-1/2 w-[44px] h-[44px] transform -translate-y-1/2 bg-[#3B82F6] text-white p-2 rounded-full shadow-lg z-10 hover:bg-[#2563eb] hover:scale-105 transition duration-300 flex items-center justify-center"
                  aria-label="Scroll left"
                  tabIndex={0}
                >
                  <ChevronLeft size={26} />
                </button>
                <button
                  onClick={handleRightClick}
                  className="absolute right-[-34px] md:right-[-60px] top-1/2 w-[44px] h-[44px] transform -translate-y-1/2 bg-[#3B82F6] text-white p-2 rounded-full shadow-lg z-10 hover:bg-[#2563eb] hover:scale-105 transition duration-300 flex items-center justify-center"
                  aria-label="Scroll right"
                  tabIndex={0}
                >
                  <ChevronRight size={26} />
                </button>
              </>
            )}
          </div>
        </div>
        {/* Rectangle color strip for separation */}
        <div className="absolute left-0 w-full h-6 bg-[#f3f4f6] bottom-0 z-20" />
      </section>
    </>
  );
};

export default PortfolioSection;