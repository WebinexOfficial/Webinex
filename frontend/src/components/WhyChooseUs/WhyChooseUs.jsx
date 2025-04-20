import { CheckCircle, Clock, DollarSign, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#E8FAF4] text-[#222325] py-16 px-6 md:px-20">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-lg text-[#003912]">
          We're not just affordable — we’re fast, reliable, and committed to your success.
        </p>
      </div>

      {/* Benefit Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <DollarSign size={32} className="text-[#003912] mb-4" />, 
            title: "Affordable Pricing", 
            desc: "Top-tier service without the high-end cost."
          },
          {
            icon: <Clock size={32} className="text-[#003912] mb-4" />, 
            title: "Fast Turnaround", 
            desc: "We deliver projects earlier than expected."
          },
          {
            icon: <Users size={32} className="text-[#003912] mb-4" />, 
            title: "Client-First Approach", 
            desc: "We prioritize transparency, communication, and long-term support."
          }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-md text-center">
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-[#003912]">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto mb-16">
        <table className="min-w-full bg-white rounded-xl overflow-hidden">
          <thead className="bg-[#003912] text-white">
            <tr>
              <th className="py-3 px-4 text-left">Feature</th>
              <th className="py-3 px-4">Us</th>
              <th className="py-3 px-4">Other Freelancers</th>
            </tr>
          </thead>
          <tbody className="text-[#003912]">
            {[
              ["Affordable Pricing", "✅", "❌"],
              ["Fast Delivery", "✅", "❌"],
              ["Revisions Included", "✅", "Sometimes"],
              ["Direct Communication", "✅", "❌"]
            ].map(([feature, us, them], i) => (
              <tr key={i} className="even:bg-[#F2FDFC]">
                <td className="py-3 px-4 font-medium">{feature}</td>
                <td className="py-3 px-4 text-center">{us}</td>
                <td className="py-3 px-4 text-center">{them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Let’s Build Something Great Together</h3>
        <button className="bg-[#003912] text-white px-6 py-3 rounded-xl hover:bg-[#025b26] transition">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
}
