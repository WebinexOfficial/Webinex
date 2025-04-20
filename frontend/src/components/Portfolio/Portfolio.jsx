import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Website Development",
    image: "/dev.jpg",
    slug: "web-development",
    tag: "Web Dev",
    gradient: "from-green-900 via-emerald-800 to-green-950",
  },
  {
    title: "Logo Design",
    image: "/logo.jpg",
    slug: "logo-design",
    tag: "Branding",
    gradient: "from-rose-900 via-rose-800 to-pink-950",
  },
  {
    title: "SEO",
    image: "/seo.jpg",
    slug: "seo",
    tag: "SEO",
    gradient: "from-pink-900 via-rose-800 to-rose-950",
  },
  {
    title: "UI/UX Design",
    image: "/uiux.jpg",
    slug: "ui-ux-design",
    tag: "UI/UX",
    gradient: "from-indigo-900 via-indigo-800 to-indigo-950",
  },
  {
    title: "Voice Over",
    image: "/voice.jpg",
    slug: "voice-over",
    tag: "Audio",
    gradient: "from-yellow-800 via-orange-600 to-yellow-900",
  },
];

const PortfolioSection = () => {
  const [visibleCards, setVisibleCards] = useState(categories.slice(0, 4)); // Initially display 4 cards
  const [queue, setQueue] = useState(categories); // Full queue of cards
  const [cardsToShow, setCardsToShow] = useState(4); // Number of cards to show based on screen size

  // Adjust the number of visible cards based on screen size
  const updateCardsToShow = () => {
    if (window.innerWidth < 640) {
      setCardsToShow(1); // Mobile (1 card)
    } else if (window.innerWidth < 1024) {
      setCardsToShow(2); // Tablet (2 cards)
    } else if (window.innerWidth < 1280) {
      setCardsToShow(3); // Small Laptop (3 cards)
    } else {
      setCardsToShow(4); // Desktop (4 cards)
    }
  };

  useEffect(() => {
    updateCardsToShow(); // Set initial number of cards to show
    window.addEventListener("resize", updateCardsToShow); // Listen for window resize
    return () => window.removeEventListener("resize", updateCardsToShow); // Cleanup
  }, []);

  useEffect(() => {
    setVisibleCards(queue.slice(0, cardsToShow)); // Update visible cards when cardsToShow changes
  }, [cardsToShow, queue]);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleRightClick();
    }, 2000); // Slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [queue, cardsToShow]);

  // Handle right button click to cycle cards
  const handleRightClick = () => {
    const newQueue = [...queue];
    const firstCard = newQueue.shift(); // Remove the first card
    newQueue.push(firstCard); // Add it to the end
    setQueue(newQueue); // Update the queue
    setVisibleCards(newQueue.slice(0, cardsToShow)); // Update the visible cards
  };

  // Handle left button click to cycle cards in reverse
  const handleLeftClick = () => {
    const newQueue = [...queue];
    const lastCard = newQueue.pop(); // Remove the last card
    newQueue.unshift(lastCard); // Add it to the beginning
    setQueue(newQueue); // Update the queue
    setVisibleCards(newQueue.slice(0, cardsToShow)); // Update the visible cards
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Explore Our Portfolio
        </h2>

        <div className="relative">
          {/* Left Navigation Button */}
          {queue.length > cardsToShow && (
            <button
              onClick={handleLeftClick}
              className="absolute left-[-20px] md:left-[-40px] top-1/2 transform -translate-y-1/2 bg-[#0C2228] text-white p-3 rounded-full shadow-md z-10 hover:bg-opacity-90 flex items-center justify-center"
              aria-label="Scroll left"
            >
              &#8249;
            </button>
          )}

          {/* Cards Container */}
          <div className="flex gap-6 justify-center items-center transition-all duration-500 ease-in-out">
            {visibleCards.map((item, index) => (
              <Link
                to={`/portfolio/${item.slug}`}
                key={index}
                className={`w-[260px] md:w-[280px] rounded-3xl bg-gradient-to-br ${item.gradient} p-4 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2`}
                aria-label={`View ${item.title} portfolio`}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                      {item.title}
                    </h3>
                    <div className="rounded-xl overflow-hidden aspect-[4/3] mb-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Navigation Button */}
          {queue.length > cardsToShow && (
            <button
              onClick={handleRightClick}
              className="absolute right-[-20px] md:right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#0C2228] text-white p-3 rounded-full shadow-md z-10 hover:bg-opacity-90 flex items-center justify-center"
              aria-label="Scroll right"
            >
              &#8250;
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;