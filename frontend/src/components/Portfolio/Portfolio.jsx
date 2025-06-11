 

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Globe, PenTool, TrendingUp, Layout } from "lucide-react";
import { HelmetProvider } from "react-helmet-async";
import SEO from "../../Pages/Seo";
const categories = [
  {
    title: "Website Development",
    image: "/dev.jpg",
    slug: "web-development",
    tag: "Web Dev",
    icon: <Globe size={28} className="text-white" />,
    desc: "Custom, high-performing websites tailored for your business.",
    gradient: "from-green-900 via-emerald-800 to-green-950",
  },
  {
    title: "Logo Design",
    image: "/logo.jpg",
    slug: "logo-design",
    tag: "Branding",
    icon: <PenTool size={28} className="text-white" />,
    desc: "Memorable logos that elevate your brand identity.",
    gradient: "from-rose-900 via-rose-800 to-pink-950",
  },
  {
    title: "SEO",
    image: "/seo.jpg",
    slug: "seo",
    tag: "SEO",
    icon: <TrendingUp size={28} className="text-white" />,
    desc: "Boost your rankings and drive organic traffic.",
    gradient: "from-pink-900 via-rose-800 to-rose-950",
  },
  {
    title: "UI/UX Design",
    image: "/uiux.jpg",
    slug: "ui-ux-design",
    tag: "UI/UX",
    icon: <Layout size={28} className="text-white" />,
    desc: "Intuitive, beautiful interfaces for better user engagement.",
    gradient: "from-indigo-900 via-indigo-800 to-indigo-950",
  },
];

const clientLogos = [
  "/client1.png",
  "/client2.png",
  "/client3.png",
  "/client4.png",
];

const PortfolioSection = () => {
  const [visibleCards, setVisibleCards] = useState(categories.slice(0, 4));
  const [queue, setQueue] = useState(categories);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isSliding, setIsSliding] = useState(false);
  const [isLaptopView, setIsLaptopView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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

    <section className="py-16 bg-gradient-to-b from-[#f6fffa] to-[#e8faf4]">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Explore Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-[#009e60] font-medium mb-4">
            See how we help brands grow with stunning digital solutions.
          </p>
        </div>

        {/* Trusted By */}
        

        {/* Carousel */}
        <div className="relative">
          <div
            className={`flex gap-7 transition-all duration-500 ease-in-out ${
              isMobileView
                ? "overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 snap-x snap-mandatory"
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
                    ? "w-[calc(80vw-12px)] flex-shrink-0 snap-start"
                    : "w-[270px] md:w-[300px] min-h-[430px]"
                } rounded-3xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform duration-300 bg-gradient-to-br ${item.gradient} relative`}
                aria-label={`View ${item.title} portfolio`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tabIndex={0}
              >
                {/* Card Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl opacity-0 group-hover:opacity-80 transition-all duration-300 flex flex-col justify-center items-center z-10">
                  <span className="text-white text-base font-semibold opacity-0 group-hover:opacity-100 mb-1 transition-all duration-300">
                    {item.title}
                  </span>
                  <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                    View Projects
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-col h-full relative z-0 p-4">
                  {/* Service Icon and Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    {item.icon}
                    <span className="text-xs text-white bg-black bg-opacity-30 rounded px-2 py-1">{item.tag}</span>
                  </div>

                  {/* Image */}
                  <div className="rounded-xl overflow-hidden aspect-[4/3] mb-3">
                    <img
                      src={item.image}
                      alt={`${item.title} portfolio example`}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-white opacity-80">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows */}
          {isLaptopView && queue.length > cardsToShow && (
            <>
              <button
                onClick={handleLeftClick}
                className="absolute left-[-32px] md:left-[-60px] top-1/2 w-[44px] h-[44px] transform -translate-y-1/2 bg-[#009e60] text-white p-2 rounded-full shadow-lg z-10 hover:bg-[#007a4d] hover:scale-110 transition duration-300 flex items-center justify-center"
                aria-label="Scroll left"
                tabIndex={0}
              >
                <ChevronLeft size={26} />
              </button>
              <button
                onClick={handleRightClick}
                className="absolute right-[-32px] md:right-[-60px] top-1/2 w-[44px] h-[44px] transform -translate-y-1/2 bg-[#009e60] text-white p-2 rounded-full shadow-lg z-10 hover:bg-[#007a4d] hover:scale-110 transition duration-300 flex items-center justify-center"
                aria-label="Scroll right"
                tabIndex={0}
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">See More of Our Work</h3>
          <Link
            to="/portfolio"
            className="inline-block bg-[#009e60] text-white px-7 py-3 rounded-xl shadow-md hover:bg-[#007a4d] transition text-lg font-semibold"
          >
            View Full Portfolio
          </Link>
           
        </div> */}
        
      </div>
    </section>
    </>
  );
};

export default PortfolioSection;
