 

// import React, { useState } from "react";
// import ImageCarousel from "./ImageCarousel";
// import ProductGallery from "./ProductGallery";
// import Testimonials from "./Testimonials";
// import BlogPreview from "./BlogPreview";
// import generateHTMLPages from "../utils/GenrateHtml";

// const sections = ["Gallery", "Products", "Testimonials", "Blog"];

// function SectionCard({ title, children }) {
//   return (
//     <section className="rounded-2xl bg-white/70 backdrop-blur-md shadow-md p-6 md:p-8 border-l-4 border-[#6EE7B7] transition hover:scale-[1.01] duration-200">
//       <h3 className="text-xl font-semibold text-[#1F2937] mb-4">{title}</h3>
//       {children}
//     </section>
//   );
// }

// function Input(props) {
//   return (
//     <input
//       {...props}
//       className="w-full rounded-xl border border-[#E5E7EB] bg-white text-[#1F2937] px-5 py-4 text-base font-medium focus:border-[#6EE7B7] focus:ring-2 focus:ring-[#6EE7B7] shadow-sm placeholder:text-[#9CA3AF]"
//       autoComplete="off"
//     />
//   );
// }
// function Textarea(props) {
//   return (
//     <textarea
//       {...props}
//       className="w-full rounded-xl border border-[#E5E7EB] bg-white text-[#1F2937] px-5 py-4 text-base font-medium focus:border-[#6EE7B7] focus:ring-2 focus:ring-[#6EE7B7] shadow-sm placeholder:text-[#9CA3AF]"
//     />
//   );
// }

// function WebsiteForm({ onGenerate }) {
//   const [formData, setFormData] = useState({
//     websiteTitle: "",
//     heroTitle: "",
//     heroSubtitle: "",
//     aboutText: "",
//     faqText: "",
//     contactEmail: "",
//     color: "#6EE7B7",
//     heroMedia: "",
//     enableDarkMode: true,
//     sectionOrder: sections,
//   });

//   const [carouselImages, setCarouselImages] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const [blogPosts, setBlogPosts] = useState([]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const reader = new window.FileReader();
//     reader.onloadend = () => {
//       setFormData((prev) => ({
//         ...prev,
//         heroMedia: reader.result,
//       }));
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSectionChange = (index, value) => {
//     const newOrder = [...formData.sectionOrder];
//     newOrder[index] = value;
//     const uniqueOrder = Array.from(new Set(newOrder));
//     const missing = sections.filter((s) => !uniqueOrder.includes(s));
//     const finalOrder = [...uniqueOrder, ...missing];
//     setFormData((prev) => ({ ...prev, sectionOrder: finalOrder }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const htmlPages = generateHTMLPages(
//       formData,
//       products,
//       carouselImages,
//       testimonials,
//       blogPosts
//     );
//     onGenerate(htmlPages);
//   };

//   return (
//     <div
//       className="min-h-screen w-full flex flex-col justify-center py-8 px-4 sm:px-6 relative overflow-x-hidden"
//       style={{
//         background: "linear-gradient(120deg, #F9FAFB 0%, #ECFDF5 100%)",
//       }}
//     >
//       {/* Decorative Blobs */}
//       <svg
//         className="absolute top-[-80px] left-[-100px] w-[360px] h-[300px] opacity-30 pointer-events-none z-0"
//         viewBox="0 0 500 350"
//         fill="none"
//       >
//         <ellipse cx="250" cy="175" rx="250" ry="175" fill="#6EE7B7" fillOpacity={0.23} />
//       </svg>
//       <svg
//         className="absolute right-[-120px] bottom-[-90px] w-[300px] h-[240px] opacity-20 pointer-events-none z-0"
//         viewBox="0 0 500 350"
//         fill="none"
//       >
//         <ellipse cx="250" cy="175" rx="250" ry="175" fill="#34D399" fillOpacity={0.18} />
//       </svg>

//       {/* Main Content */}
//       <main className="relative z-10 w-full max-w-3xl mx-auto">
//         <header className="mb-12">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight mb-2">
//             <span className="text-[#6EE7B7]">SaaS Website Builder</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-[#4B5563] mb-3">
//             Launch your site in minutes – clean, modern, and yours to own.
//           </p>
//         </header>

//         <form className="space-y-16" onSubmit={handleSubmit}>
//           <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="space-y-6">
//               <Input name="websiteTitle" placeholder="Website Name" onChange={handleChange} />
//               <Input name="heroTitle" placeholder="Hero Title" onChange={handleChange} />
//               <Input name="heroSubtitle" placeholder="Hero Subtitle" onChange={handleChange} />
//               <Textarea name="aboutText" rows={3} placeholder="About Content" onChange={handleChange} />
//               <Textarea name="faqText" rows={3} placeholder="FAQ Content" onChange={handleChange} />
//               <Input name="contactEmail" type="email" placeholder="Contact Email" onChange={handleChange} />
//             </div>

//             <div className="space-y-8">
//               <div>
//                 <label className="block mb-2 text-[#6EE7B7] font-semibold uppercase text-xs tracking-widest">
//                   Upload Hero Image/Video
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/,video/"
//                   onChange={handleFileUpload}
//                   className="block w-full file:bg-[#6EE7B7] file:text-black file:rounded-lg file:px-3 file:py-2 file:font-bold file:border-none cursor-pointer"
//                 />
//                 {formData.heroMedia && (
//                   <div className="mt-3 rounded-xl overflow-hidden shadow">
//                     {formData.heroMedia.includes("video") ? (
//                       <video src={formData.heroMedia} controls className="rounded-xl w-full" />
//                     ) : (
//                       <img src={formData.heroMedia} alt="Preview" className="rounded-xl w-full object-cover max-h-44" />
//                     )}
//                   </div>
//                 )}
//               </div>
//               <div className="flex items-center gap-4">
//                 <label className="text-[#6EE7B7] font-semibold">🎨 Accent Color:</label>
//                 <input
//                   type="color"
//                   name="color"
//                   value={formData.color}
//                   onChange={handleChange}
//                   className="w-12 h-12 rounded-full border-2 border-[#6EE7B7] shadow"
//                 />
//               </div>
//               <label className="inline-flex items-center gap-3 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   name="enableDarkMode"
//                   checked={formData.enableDarkMode}
//                   onChange={handleChange}
//                   className="form-checkbox h-6 w-6 accent-[#6EE7B7] border-[#6EE7B7] rounded-lg"
//                 />
//                 <span className="text-base text-[#1F2937] font-medium">🌙 Enable Dark Mode</span>
//               </label>
//             </div>
//           </section>

//           {/* Section Order */}
//           <section>
//             <h3 className="text-2xl text-[#6EE7B7] font-bold mb-3">📌 Section Order</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {formData.sectionOrder.map((section, idx) => (
//                 <select
//                   key={idx}
//                   value={section}
//                   onChange={(e) => handleSectionChange(idx, e.target.value)}
//                   className="w-full rounded-xl border border-[#E5E7EB] bg-white text-[#1F2937] px-5 py-3 font-semibold text-base shadow focus:border-[#6EE7B7] focus:ring-2 focus:ring-[#6EE7B7]"
//                 >
//                   {sections.map((s) => (
//                     <option key={s} value={s}>
//                       {s}
//                     </option>
//                   ))}
//                 </select>
//               ))}
//             </div>
//           </section>

//           {/* Feature Editors */}
//           <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//             <SectionCard title="🖼 Carousel Images">
//               <ImageCarousel onChange={setCarouselImages} />
//             </SectionCard>
//             <SectionCard title="🛒 Product List">
//               <ProductGallery onChange={setProducts} />
//             </SectionCard>
//             <SectionCard title="🌟 Testimonials">
//               <Testimonials onChange={setTestimonials} />
//             </SectionCard>
//             <SectionCard title="📝 Blog Posts">
//               <BlogPreview onChange={setBlogPosts} />
//             </SectionCard>
//           </section>

//           {/* CTA */}
//           <div className="w-full flex">
//             <button
//               type="submit"
//               className="flex-1 py-5 rounded-2xl bg-[#6EE7B7] text-[#071717] text-2xl font-extrabold shadow-xl hover:bg-[#34D399] transition tracking-wide"
//             >
//               ⚡ Generate Website
//             </button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// }

// export default WebsiteForm;








import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import ProductGallery from "./ProductGallery";
import Testimonials from "./Testimonials";
import BlogPreview from "./BlogPreview";
import generateHTMLPages from "../utils/GenrateHtml";

const sections = ["Gallery", "Products", "Testimonials", "Blog"];

function SectionCard({ title, children }) {
  return (
    <section className="rounded-xl bg-black/40 backdrop-blur-md border border-cyan-500 p-6 md:p-8 shadow-md hover:shadow-cyan-500/10 transition hover:scale-[1.01] duration-300">
      <h3 className="text-xl font-semibold text-cyan-400 mb-4 tracking-wide">{title}</h3>
      {children}
    </section>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-neutral-700 bg-black/60 text-neutral-100 px-5 py-4 text-base focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 placeholder:text-neutral-500 transition"
      autoComplete="off"
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full rounded-lg border border-neutral-700 bg-black/60 text-neutral-100 px-5 py-4 text-base focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 placeholder:text-neutral-500 transition"
    />
  );
}

function WebsiteForm({ onGenerate }) {
  const [formData, setFormData] = useState({
    websiteTitle: "",
    heroTitle: "",
    heroSubtitle: "",
    aboutText: "",
    faqText: "",
    contactEmail: "",
    color: "#06B6D4",
    heroMedia: "",
    enableDarkMode: true,
    sectionOrder: sections,
  });

  const [carouselImages, setCarouselImages] = useState([]);
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        heroMedia: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSectionChange = (index, value) => {
    const newOrder = [...formData.sectionOrder];
    newOrder[index] = value;
    const uniqueOrder = Array.from(new Set(newOrder));
    const missing = sections.filter((s) => !uniqueOrder.includes(s));
    const finalOrder = [...uniqueOrder, ...missing];
    setFormData((prev) => ({ ...prev, sectionOrder: finalOrder }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const htmlPages = generateHTMLPages(
      formData,
      products,
      carouselImages,
      testimonials,
      blogPosts
    );
    onGenerate(htmlPages);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center py-12 px-4 sm:px-8 relative overflow-x-hidden bg-gradient-to-br from-[#0F1117] to-[#1A1E23] text-white font-sans"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-[-100px] left-[-120px] w-[360px] h-[300px] bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-120px] right-[-140px] w-[300px] h-[240px] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-cyan-400 mb-3">
            SaaS Website Builder
          </h1>
          <p className="text-lg md:text-xl text-neutral-400">
            Launch your futuristic site in minutes – fast, dark, and built to last.
          </p>
        </header>

        <form className="space-y-16" onSubmit={handleSubmit}>
          {/* Input Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Input name="websiteTitle" placeholder="Website Name" onChange={handleChange} />
              <Input name="heroTitle" placeholder="Hero Title" onChange={handleChange} />
              <Input name="heroSubtitle" placeholder="Hero Subtitle" onChange={handleChange} />
              <Textarea name="aboutText" rows={3} placeholder="About Content" onChange={handleChange} />
              <Textarea name="faqText" rows={3} placeholder="FAQ Content" onChange={handleChange} />
              <Input name="contactEmail" type="email" placeholder="Contact Email" onChange={handleChange} />
            </div>

            {/* File Upload and Controls */}
            <div className="space-y-8">
              <div>
                <label className="block mb-2 text-sm text-cyan-400 font-semibold uppercase tracking-wider">
                  Upload Hero Image/Video
                </label>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="block w-full file:bg-cyan-400 file:text-black file:rounded-lg file:px-4 file:py-2 file:font-semibold file:border-none cursor-pointer"
                />
                {formData.heroMedia && (
                  <div className="mt-3 rounded-lg overflow-hidden border border-neutral-700 shadow">
                    {formData.heroMedia.includes("video") ? (
                      <video src={formData.heroMedia} controls className="rounded-lg w-full" />
                    ) : (
                      <img src={formData.heroMedia} alt="Preview" className="rounded-lg w-full object-cover max-h-44" />
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4">
                <label className="text-cyan-400 font-semibold">🎨 Accent Color</label>
                <input
                  type="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-12 h-12 rounded-full border-2 border-cyan-400 shadow-inner"
                />
              </div>

              <label className="inline-flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="enableDarkMode"
                  checked={formData.enableDarkMode}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-cyan-500 border-cyan-500 rounded-md"
                />
                <span className="text-sm text-neutral-300 font-medium">🌙 Enable Dark Mode</span>
              </label>
            </div>
          </section>

          {/* Section Order */}
          <section>
            <h3 className="text-2xl text-cyan-400 font-bold mb-4">📌 Section Order</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {formData.sectionOrder.map((section, idx) => (
                <select
                  key={idx}
                  value={section}
                  onChange={(e) => handleSectionChange(idx, e.target.value)}
                  className="w-full rounded-lg border border-neutral-700 bg-black/60 text-neutral-100 px-4 py-3 shadow focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
                >
                  {sections.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              ))}
            </div>
          </section>

          {/* Editors */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <SectionCard title="🖼 Carousel Images">
              <ImageCarousel onChange={setCarouselImages} />
            </SectionCard>
            <SectionCard title="🛒 Product List">
              <ProductGallery onChange={setProducts} />
            </SectionCard>
            <SectionCard title="🌟 Testimonials">
              <Testimonials onChange={setTestimonials} />
            </SectionCard>
            <SectionCard title="📝 Blog Posts">
              <BlogPreview onChange={setBlogPosts} />
            </SectionCard>
          </section>

          {/* Submit CTA */}
          <div className="w-full flex">
            <button
              type="submit"
              className="flex-1 py-5 rounded-xl bg-cyan-500 text-black text-xl font-bold tracking-wide hover:bg-cyan-400 hover:shadow-xl transition"
            >
              ⚡ Generate Website
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default WebsiteForm;
