// export default function LandingPage() {
//     return (
//       <section className="relative w-full h-[90vh] overflow-hidden">
//         {/* Background Video */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
//         >
//           <source src="./src/assets/hero-bg.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
  
//         {/* Overlay (dark layer for better text contrast) */}
//         <div className="absolute top-0 left-0 w-full h-full bg-[#073D44]/60 z-10" />
  
//         {/* Hero Content */}
//         <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 md:px-16 text-white max-w-5xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Crafting Digital Experiences That Drive Growth
//           </h1>
//           <p className="text-lg mt-4 max-w-xl">
//             Web Development, SEO, UI/UX and more — all under one roof. We build digital experiences that deliver results.
//           </p>
//           <div className="mt-6 flex flex-col sm:flex-row gap-4">
//             <button className="bg-[#00C7B1] hover:bg-[#019b8f] text-white text-lg px-6 py-4 rounded-xl">
//               Get a Free Consultation
//             </button>
//             <button className="border-2 border-white text-white hover:bg-white hover:text-[#073D44] text-lg px-6 py-4 rounded-xl">
//               Explore Our Work
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }
  

// export default function LandingPage() {
//     return (
//       <section className="relative w-full h-screen min-h-[800px] overflow-hidden">
//         {/* Background Video */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
//         >
//           <source src="./src/assets/hero-bg.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
  
//         {/* Gradient Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#073D44]/90 to-[#073D44]/70 z-10" />
  
//         {/* Hero Content */}
//         <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 md:px-16 text-white text-center">
//           <div className="max-w-4xl mx-auto space-y-6">
//             <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
//               Our Freelancers<br />
//               <span className="text-[#00C7B1]">Will Take It From Here</span>
//             </h1>
            
//             {/* Search Bar */}
//             <div className="relative mt-8 max-w-2xl mx-auto">
//               <input
//                 type="text"
//                 placeholder="Search for any service..."
//                 className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 focus:border-[#00C7B1] focus:ring-2 focus:ring-[#00C7B1] outline-none transition-all"
//               />
//               <svg
//                 className="absolute right-4 top-4 h-6 w-6 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </div>
  
//             {/* Service Tags */}
//             <div className="flex flex-wrap justify-center gap-4 mt-6 text-lg">
//               {['website development', 'logo design', 'video editing', 'architecture & interior design'].map((service) => (
//                 <span
//                   key={service}
//                   className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#00C7B1] transition-colors"
//                 >
//                   {service}
//                 </span>
//               ))}
//             </div>
  
//             {/* CTA Buttons */}
//             <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
//               <button className="bg-[#00C7B1] hover:bg-[#019b8f] text-white text-lg px-8 py-4 rounded-xl transform hover:scale-105 transition-all">
//                 Get a Free Consultation
//               </button>
//               <button className="border-2 border-white/50 hover:border-[#00C7B1] text-white hover:text-[#00C7B1] text-lg px-8 py-4 rounded-xl transform hover:scale-105 transition-all">
//                 Explore Our Work
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

 

// video transition only one video

// export default function LandingPage() {
//     return (
//       <section className="relative w-full min-h-[80vh] md:min-h-[700px] overflow-x-hidden">
//         {/* Background Video */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
//         >
//           <source src="./src/assets/hero-bg6.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
  
//         {/* Text Protection Layer */}
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/10 z-10" />
  
//         {/* Hero Content */}
//         <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 md:px-16 text-white text-center py-20">
//           <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 w-full">
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)] px-2">
//               Our Freelancers<br />
//               Will Take It From Here
//             </h1>
  
//             {/* Search Bar */}
//             <div className="relative mt-4 md:mt-8 max-w-2xl mx-auto w-full px-2">
//               <input
//                 type="text"
//                 placeholder="Search for any service..."
//                 className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 focus:border-white/60 focus:ring-2 focus:ring-white/30 outline-none transition-all text-sm md:text-base"
//               />
//               <svg
//                 className="absolute right-3 top-3 md:right-4 md:top-4 h-5 w-5 md:h-6 md:w-6 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </div>
  
//             {/* Service Tags */}
//             <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-6 text-sm md:text-lg px-2">
//               {['website development', 'logo design', 'video editing', 'architecture & interior design'].map((service) => (
//                 <span
//                   key={service}
//                   className="px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
//                 >
//                   {service}
//                 </span>
//               ))}
//             </div>
  
//             {/* CTA Buttons */}
//             <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 md:gap-6 px-2">
//               <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm md:text-lg px-4 py-3 md:px-8 md:py-4 rounded-xl transform hover:scale-105 transition-all border-2 border-white/30">
//                 Get Free Consultation
//               </button>
//               <button className="border-2 border-white/50 hover:border-white/80 text-white hover:text-white/90 text-sm md:text-lg px-4 py-3 md:px-8 md:py-4 rounded-xl transform hover:scale-105 transition-all">
//                 Explore Work
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }


// multiple video transition


// import React, { useRef, useState, useEffect } from 'react';

// const videoSources = [
//   './src/assets/hero-bg5.mp4',
//   './src/assets/hero-bg6.mp4',
//   './src/assets/hero-bg7.mp4',
//   './src/assets/hero-bg8.mp4'
// ];

// export default function LandingPage() {
//   const videoRef = useRef(null);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   const handleVideoEnd = () => {
//     setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
//   };

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.load();
//       videoRef.current.play().catch(() => {}); // prevent autoplay issues silently
//     }
//   }, [currentVideoIndex]);

//   return (
//     <section className="relative w-full min-h-[80vh] md:min-h-[700px] overflow-x-hidden">
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
//         onEnded={handleVideoEnd}
//       >
//         <source src={videoSources[currentVideoIndex]} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Text Protection Layer */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/10 z-10" />

//       {/* Hero Content */}
//       <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 md:px-16 text-white text-center py-20">
//         <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 w-full">
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)] px-2">
//             Our Freelancers<br />
//             Will Take It From Here
//           </h1>

//           {/* Search Bar */}
//           <div className="relative mt-4 md:mt-8 max-w-2xl mx-auto w-full px-2">
//             <input
//               type="text"
//               placeholder="Search for any service..."
//               className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 focus:border-white/60 focus:ring-2 focus:ring-white/30 outline-none transition-all text-sm md:text-base"
//             />
//             <svg
//               className="absolute right-3 top-3 md:right-4 md:top-4 h-5 w-5 md:h-6 md:w-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </div>

//           {/* Service Tags */}
//           <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-6 text-sm md:text-lg px-2">
//             {['website development', 'logo design', 'video editing', 'architecture & interior design'].map((service) => (
//               <span
//                 key={service}
//                 className="px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
//               >
//                 {service}
//               </span>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 md:gap-6 px-2">
//             <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm md:text-lg px-4 py-3 md:px-8 md:py-4 rounded-xl transform hover:scale-105 transition-all border-2 border-white/30">
//               Get Free Consultation
//             </button>
//             <button className="border-2 border-white/50 hover:border-white/80 text-white hover:text-white/90 text-sm md:text-lg px-4 py-3 md:px-8 md:py-4 rounded-xl transform hover:scale-105 transition-all">
//               Explore Work
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// video time reduce to 6 seconds and add transition

import React, { useRef, useState, useEffect } from 'react';

const videoSources = [
  './src/assets/hero-bg5.mp4',
  './src/assets/hero-bg6.mp4',
  './src/assets/hero-bg7.mp4',
  './src/assets/hero-bg8.mp4'
];

export default function LandingPage() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }

    const timer = setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    }, 6000); // Change video every 6 seconds

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, [currentVideoIndex]);

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[700px] overflow-x-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90 transition-opacity duration-1000"
        onEnded={() => {
          setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
        }}
      >
        <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Protection Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/10 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 md:px-16 text-white text-center py-20">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 w-full">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)] px-2">
            Our Freelancers<br />
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

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-6 text-sm md:text-lg px-2">
            {['website development', 'logo design', 'seo', 'ui/us design'].map((service) => (
              <span
                key={service}
                className="px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 md:gap-6 px-2">
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm md:text-lg px-4 py-3 md:px-8 md:py-4 rounded-xl transform hover:scale-105 transition-all border-2 border-white/30">
              Get Free Consultation
            </button>
            <button className="border-2 border-white/50 hover:border-white/80 text-white hover:text-white/90 text-sm md:text-lg px-4 py-3 md:px-8 md:py-4 rounded-xl transform hover:scale-105 transition-all">
              Explore Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


// no transition 
