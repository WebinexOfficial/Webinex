

import React, { useState } from "react";
import { CheckCircle2, Clock4, DollarSign, Users2, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../../pages/Seo";

// --- Benefits Data ---
const benefits = [
  {
    icon: <DollarSign size={32} className="text-green-600" />,
    title: "Transparent Pricing",
    desc: "No hidden fees. Get premium quality at a fair, predictable rate.",
    bg: "bg-[#e9f9f0]",
  },
  {
    icon: <Clock4 size={32} className="text-blue-600" />,
    title: "Lightning-Fast Delivery",
    desc: "We launch most projects in days, not weeks—without sacrificing quality.",
    bg: "bg-[#eaf3fb]",
  },
  {
    icon: <Users2 size={32} className="text-purple-600" />,
    title: "Dedicated Support",
    desc: "Direct access to your project team and ongoing post-launch help.",
    bg: "bg-[#f3eafd]",
  },
  {
    icon: <CheckCircle2 size={32} className="text-amber-500" />,
    title: "Results-Driven",
    desc: "We focus on solutions that boost your leads, sales, and brand reputation.",
    bg: "bg-[#fff6e2]",
  },
];

// --- Testimonial Data ---
const reviews = [
  {
    name: "TrueNest",
    avatar: "truenestproperties.jpg",
    role: " TrueNest.Property",
    
    quote: "Webinex delivered beyond our expectations—the design and delivery speed were fantastic.",
  },
  {
    name: "Bk Properties",
    avatar: "bkproperties.jpg",
    role: "Real Estate Agent",
    
    quote: "The communication was clear, and our organic traffic grew by 3x in 60 days.",
  },
  {
    name: "Sara Lee",
    avatar: "/avatars/sara.jpg",
    role: "Creative Director, BloomCo",
    
    quote: "Loved the attention to detail and the smooth project process. Would recommend to anyone.",
  },
];

// --- Comparison Data (for two-card design) ---
const comparison = [
  {
    label: "Webinex",
    highlight: true,
    color: "border-[#009e60]",
    bg: "bg-[#f6fef9]",
    data: [
      { label: "Upfront, Honest Pricing", value: true },
      { label: "Guaranteed Fast Delivery", value: true },
      { label: "Unlimited Revisions", value: true },
      { label: "Direct Communication", value: true },
      { label: "Post-Launch Support", value: true },
      { label: "Proven Track Record", value: true }
    ],
    note: "Premium results. No hidden costs.",
    cta: { text: "Start Your Project", style: "bg-[#009e60] text-white", href: "/contact" }
  },
  {
    label: "Typical Freelancer",
    highlight: false,
    color: "border-gray-300",
    bg: "bg-white",
    data: [
      { label: "Upfront, Honest Pricing", value: false },
      { label: "Guaranteed Fast Delivery", value: false },
      { label: "Unlimited Revisions", value: "Limited" },
      { label: "Direct Communication", value: false },
      { label: "Post-Launch Support", value: false },
      { label: "Proven Track Record", value: false }
    ],
    note: "Varying quality. Often extra fees.",
    cta: { text: "See the Difference", style: "border border-gray-400 text-gray-700", href: "/portfolio" }
  }
];

// --- Testimonial Slider (minimal, no library needed) ---
function TestimonialSlider({ reviews }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === reviews.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-8 flex flex-col items-center text-center min-h-[260px]"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={reviews[idx].avatar}
              alt={reviews[idx].name}
              className="w-14 h-14 object-cover rounded-full border-4 border-[#e7f7ee] shadow"
            />
            <div className="text-left">
              <div className="font-bold text-[#009e60]">{reviews[idx].name}</div>
              <div className="text-xs text-gray-500">{reviews[idx].role}</div>
              <div className="flex gap-[2px] mt-1">
                {Array.from({ length: reviews[idx].rating }, (_, i) => (
                  <Star key={i} size={15} className="text-amber-500" fill="#fbbf24" />
                ))}
              </div>
            </div>
          </div>
          <blockquote className="text-lg text-gray-800 font-serif italic leading-relaxed mb-2">
            “{reviews[idx].quote}”
          </blockquote>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-[#f6fef9] transition"
        aria-label="Previous review"
        tabIndex={0}
      >
        <svg width="18" height="18" fill="none" stroke="#222"><path d="M12 4l-4 5 4 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-[#f6fef9] transition"
        aria-label="Next review"
        tabIndex={0}
      >
        <svg width="18" height="18" fill="none" stroke="#222"><path d="M6 4l4 5-4 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`inline-block w-2 h-2 rounded-full ${i === idx ? "bg-[#009e60]" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <>
      <SEO 
        title=" Fast, Reliable, Results-Driven"
        description="Discover why startups and brands trust Webinex: transparent pricing, lightning-fast delivery, premium quality, and stellar support. See client reviews and what sets us apart."
        url="https://www.webinex.in/whychooseus"
        canonical="https://www.webinex.in/whychooseus"
        keywords="why choose webinex, freelance web developer, webinex reviews, webinex vs freelancer"
      />

      <section className="bg-[#f8fafc] py-16 px-3 md:px-0 relative z-10">
        {/* Hero/Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold font-serif tracking-tight mb-4 bg-gradient-to-r from-[#009e60] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent"
          >
            Why Choose <span className="text-black">Webinex?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-lg md:text-2xl text-gray-600 font-medium"
          >
            Not just another agency—your results-obsessed, design-driven partner.
          </motion.p>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * i, duration: 0.6 }}
              className={`rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 text-center p-8 ${item.bg} flex flex-col items-center`}
            >
              <span className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow mb-4">
                {item.icon}
              </span>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-base text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Two-Cards */}
         

        {/* Comparison Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {comparison.map((cmp, idx) => (
            <div
              key={cmp.label}
              className={`rounded-3xl border-2 p-8 flex flex-col shadow-lg ${cmp.color} ${cmp.bg} min-h-[360px]`}
            >
              <div className={`text-2xl md:text-3xl font-extrabold mb-6 ${cmp.highlight ? "text-[#009e60]" : "text-gray-800"}`}>
                {cmp.label}
              </div>
              <ul className="space-y-4 mb-6">
                {cmp.data.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    {f.value === true && <CheckCircle2 size={22} className="text-[#009e60]" />}
                    {f.value === false && <span className="w-6 h-6 rounded-full flex items-center justify-center border border-gray-300 text-gray-400 font-bold">-</span>}
                    {typeof f.value === "string" && <span className="w-6 h-6 rounded-full flex items-center justify-center border border-yellow-300 text-yellow-500 font-bold">~</span>}
                    <span className={cmp.highlight ? "font-semibold" : ""}>{f.label}</span>
                    {typeof f.value === "string" && (
                      <span className="ml-2 text-sm text-gray-500 font-normal">{f.value}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mb-4 text-gray-600 font-medium">{cmp.note}</div>
              <a
                href={cmp.cta.href}
                className={`mt-auto inline-block rounded-xl px-7 py-3 font-semibold text-lg shadow transition duration-200 ${cmp.cta.style} hover:opacity-90`}
              >
                {cmp.cta.text}
              </a>
            </div>
          ))}
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-3xl mx-auto mb-8">
          <h4 className="text-2xl md:text-3xl font-bold text-[#009e60] text-center mb-6 font-serif">
            What Our Clients Say
          </h4>
          <TestimonialSlider reviews={reviews} />
        </div>
      </section>
    </>
  );
}