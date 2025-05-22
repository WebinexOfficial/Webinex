// import { CheckCircle, Clock, DollarSign, Users } from "lucide-react";

// export default function WhyChooseUs() {
//   return (
//     <section className="bg-[#E8FAF4] text-[#222325] py-16 px-6 md:px-20">
//       {/* Intro */}
//       <div className="text-center max-w-3xl mx-auto mb-12">
//         <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
//         <p className="text-lg text-[#003912]">
//           We're not just affordable — we’re fast, reliable, and committed to your success.
//         </p>
//       </div>

//       {/* Benefit Grid */}
//       <div className="grid md:grid-cols-3 gap-8 mb-16">
//         {[
//           {
//             icon: <DollarSign size={32} className="text-[#003912] mb-4" />, 
//             title: "Affordable Pricing", 
//             desc: "Top-tier service without the high-end cost."
//           },
//           {
//             icon: <Clock size={32} className="text-[#003912] mb-4" />, 
//             title: "Fast Turnaround", 
//             desc: "We deliver projects earlier than expected."
//           },
//           {
//             icon: <Users size={32} className="text-[#003912] mb-4" />, 
//             title: "Client-First Approach", 
//             desc: "We prioritize transparency, communication, and long-term support."
//           }
//         ].map((item, i) => (
//           <div key={i} className="bg-white rounded-2xl p-6 shadow-md text-center">
//             {item.icon}
//             <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//             <p className="text-sm text-[#003912]">{item.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Comparison Table */}
//       <div className="overflow-x-auto mb-16">
//         <table className="min-w-full bg-white rounded-xl overflow-hidden">
//           <thead className="bg-[#003912] text-white">
//             <tr>
//               <th className="py-3 px-4 text-left">Feature</th>
//               <th className="py-3 px-4">Us</th>
//               <th className="py-3 px-4">Other Freelancers</th>
//             </tr>
//           </thead>
//           <tbody className="text-[#003912]">
//             {[
//               ["Affordable Pricing", "✅", "❌"],
//               ["Fast Delivery", "✅", "❌"],
//               ["Revisions Included", "✅", "Sometimes"],
//               ["Direct Communication", "✅", "❌"]
//             ].map(([feature, us, them], i) => (
//               <tr key={i} className="even:bg-[#F2FDFC]">
//                 <td className="py-3 px-4 font-medium">{feature}</td>
//                 <td className="py-3 px-4 text-center">{us}</td>
//                 <td className="py-3 px-4 text-center">{them}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* CTA */}
//       <div className="text-center">
//         <h3 className="text-2xl font-semibold mb-4">Let’s Build Something Great Together</h3>
//         <button className="bg-[#003912] text-white px-6 py-3 rounded-xl hover:bg-[#025b26] transition">
//           Get a Free Quote
//         </button>
//       </div>
//     </section>
//   );
// }


import { CheckCircle, Clock, DollarSign, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-[#e8faf4] to-[#f6fffa] text-[#222325] py-20 px-6 md:px-20">
      {/* Intro */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Why Partner With <span className="text-[#009e60]">Our Team?</span>
        </h2>
        <p className="text-lg md:text-xl text-[#003912] font-medium">
          Elevate your business with a digital presence that’s fast, affordable, and built for results.
        </p>
      </div>

      {/* Benefit Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {[
          {
            icon: <DollarSign size={36} className="text-[#009e60] mb-4" />,
            title: "Transparent Pricing",
            desc: "No hidden fees. Get premium quality at a fair, predictable rate."
          },
          {
            icon: <Clock size={36} className="text-[#009e60] mb-4" />,
            title: "Lightning-Fast Delivery",
            desc: "We launch most projects in days, not weeks-without sacrificing quality."
          },
          {
            icon: <Users size={36} className="text-[#009e60] mb-4" />,
            title: "Dedicated Support",
            desc: "Direct access to your project team and ongoing post-launch help."
          },
          {
            icon: <CheckCircle size={36} className="text-[#009e60] mb-4" />,
            title: "Results-Driven",
            desc: "We focus on solutions that boost your leads, sales, and brand reputation."
          }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition text-center border border-[#e6f4ec]">
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-base text-[#003912]">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto mb-20">
        <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-md">
          <thead className="bg-[#009e60] text-white">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">Feature</th>
              <th className="py-3 px-4 font-semibold">Our Company</th>
              <th className="py-3 px-4 font-semibold">Typical Freelancers</th>
            </tr>
          </thead>
          <tbody className="text-[#003912]">
            {[
              ["Upfront, Honest Pricing", "✅", "❌"],
              ["Guaranteed Fast Delivery", "✅", "❌"],
              ["Unlimited Revisions", "✅", "Limited"],
              ["Direct Communication", "✅", "❌"],
              ["Post-Launch Support", "✅", "❌"],
              ["Proven Track Record", "✅", "Varies"]
            ].map(([feature, us, them], i) => (
              <tr key={i} className="even:bg-[#f2fdfc]">
                <td className="py-3 px-4 font-medium">{feature}</td>
                <td className="py-3 px-4 text-center">{us}</td>
                <td className="py-3 px-4 text-center">{them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Testimonial */}
      <div className="max-w-xl mx-auto mb-20">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <svg className="mb-4" width="40" height="40" fill="#009e60" viewBox="0 0 24 24"><path d="M7.17 6.17a7 7 0 0 1 9.9 9.9l-4.24 4.24a1 1 0 0 1-1.42 0l-4.24-4.24a7 7 0 0 1 0-9.9zm7.07 7.07a5 5 0 1 0-7.07-7.07 5 5 0 0 0 7.07 7.07z"></path></svg>
          <blockquote className="text-lg text-[#003912] italic mb-4">
            “Our website traffic and leads doubled within the first month. The team’s communication and expertise are unmatched.”
          </blockquote>
          <span className="font-semibold text-[#009e60]">- Priya Sharma, Startup Founder</span>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready for a website that works as hard as you do?
        </h3>
        <button className="bg-[#009e60] text-white px-8 py-4 rounded-xl shadow-md hover:bg-[#007a4d] transition text-lg font-semibold">
          Get Your Free Quote
        </button>
        <p className="text-sm text-[#003912] mt-2">
          No obligation. Let’s discuss your vision!
        </p>
      </div>
    </section>
  );
}
