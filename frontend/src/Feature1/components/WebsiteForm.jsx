// import React, { useState } from 'react';
// import ImageCarousel from './ImageCarousel';
// import ProductGallery from './ProductGallery';
// import Testimonials from './Testimonials';
// import BlogPreview from './BlogPreview';
// import generateHTMLPages from '../utils/GenrateHtml';

// const sections = ['Gallery', 'Products', 'Testimonials', 'Blog'];

// function WebsiteForm({ onGenerate }) {
//   const [formData, setFormData] = useState({
//     websiteTitle: '',
//     heroTitle: '',
//     heroSubtitle: '',
//     aboutText: '',
//     faqText: '',
//     contactEmail: '',
//     color: '#00ff99',
//     heroMedia: '',
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
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
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
//     <form
//       onSubmit={handleSubmit}
//       className="w-full max-w-5xl mx-auto bg-gradient-to-br from-gray-950/95 via-gray-900/95 to-black/95 text-white p-10 md:p-16 rounded-3xl shadow-2xl space-y-12 border border-gray-800"
//     >
//       {/* Header */}
//       <div className="text-center">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-[#00ff99] mb-2 drop-shadow-xl">🚀 SaaS Website Builder</h2>
//         <p className="text-gray-400 text-lg">Create and preview your professional site in minutes.</p>
//       </div>

//       {/* Main Inputs */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         <div className="space-y-6">
//           <input
//             type="text"
//             name="websiteTitle"
//             placeholder="Website Name"
//             className="input-style"
//             onChange={handleChange}
//             autoComplete="off"
//           />
//           <input
//             type="text"
//             name="heroTitle"
//             placeholder="Hero Title"
//             className="input-style"
//             onChange={handleChange}
//             autoComplete="off"
//           />
//           <input
//             type="text"
//             name="heroSubtitle"
//             placeholder="Hero Subtitle"
//             className="input-style"
//             onChange={handleChange}
//             autoComplete="off"
//           />
//           <textarea
//             name="aboutText"
//             placeholder="About Section Content"
//             rows={3}
//             className="input-style"
//             onChange={handleChange}
//           />
//           <textarea
//             name="faqText"
//             placeholder="FAQ Content"
//             rows={3}
//             className="input-style"
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="contactEmail"
//             placeholder="Contact Email"
//             className="input-style"
//             onChange={handleChange}
//             autoComplete="off"
//           />
//         </div>

//         <div className="space-y-8">
//           <div>
//             <label className="block mb-3 text-[#00ff99] font-semibold">Upload Hero Image/Video</label>
//             <input type="file" accept="image/*,video/*" onChange={handleFileUpload}
//               className="block w-full file:bg-[#00ff99] file:text-black file:rounded-lg file:px-3 file:py-2 file:border-none file:mr-4"
//             />
//             {formData.heroMedia && (
//               <div className="mt-4">
//                 {formData.heroMedia.includes('video') ? (
//                   <video src={formData.heroMedia} controls className="rounded-xl w-full shadow-lg" />
//                 ) : (
//                   <img src={formData.heroMedia} alt="Preview" className="rounded-xl max-w-full shadow-lg" />
//                 )}
//               </div>
//             )}
//           </div>

//           <div className="flex items-center gap-4">
//             <label className="text-[#00ff99] font-semibold">🎨 Accent Color:</label>
//             <input
//               type="color"
//               name="color"
//               value={formData.color}
//               onChange={handleChange}
//               className="w-12 h-12 rounded-full border-2 border-[#00ff99] shadow-lg"
//             />
//           </div>

//           <label className="inline-flex items-center gap-3 cursor-pointer mt-2">
//             <input
//               type="checkbox"
//               name="enableDarkMode"
//               checked={formData.enableDarkMode}
//               onChange={handleChange}
//               className="form-checkbox h-6 w-6 text-[#00ff99] border-[#00ff99] rounded focus:ring-2 focus:ring-[#00ff99]"
//             />
//             <span className="text-base text-gray-200">🌙 Enable Dark Mode</span>
//           </label>
//         </div>
//       </div>

//       {/* Section Order */}
//       <div>
//         <h3 className="text-2xl text-[#00ff99] font-bold mb-3">📌 Section Order</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {formData.sectionOrder.map((section, idx) => (
//             <select
//               key={idx}
//               value={section}
//               onChange={(e) => handleSectionChange(idx, e.target.value)}
//               className="input-style"
//             >
//               {sections.map((s) => (
//                 <option key={s} value={s}>
//                   {s}
//                 </option>
//               ))}
//             </select>
//           ))}
//         </div>
//       </div>

//       {/* Sub-component editors */}
//       <div className="space-y-10">
//         <div>
//           <h3 className="text-2xl text-[#00ff99] font-bold mb-3">🖼️ Carousel Images</h3>
//           <div className="rounded-xl border border-[#00ff99] bg-black p-4 shadow-md">
//             <ImageCarousel onChange={setCarouselImages} />
//           </div>
//         </div>

//         <div>
//           <h3 className="text-2xl text-[#00ff99] font-bold mb-3">🛒 Product List</h3>
//           <div className="rounded-xl border border-[#00ff99] bg-black p-4 shadow-md">
//             <ProductGallery onChange={setProducts} />
//           </div>
//         </div>

//         <div>
//           <h3 className="text-2xl text-[#00ff99] font-bold mb-3">🌟 Testimonials</h3>
//           <div className="rounded-xl border border-[#00ff99] bg-black p-4 shadow-md">
//             <Testimonials onChange={setTestimonials} />
//           </div>
//         </div>

//         <div>
//           <h3 className="text-2xl text-[#00ff99] font-bold mb-3">📝 Blog Posts</h3>
//           <div className="rounded-xl border border-[#00ff99] bg-black p-4 shadow-md">
//             <BlogPreview onChange={setBlogPosts} />
//           </div>
//         </div>
//       </div>

//       <button
//         type="submit"
//         className="w-full mt-8 py-4 rounded-xl bg-[#00ff99] text-black text-xl font-bold hover:bg-[#00e68c] transition-all shadow-lg tracking-wide"
//       >
//         ⚡ Generate Website
//       </button>
//     </form>
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
    <section className="rounded-2xl bg-white/70 backdrop-blur-md shadow-md p-6 md:p-8 border-l-4 border-[#6EE7B7] transition hover:scale-[1.01] duration-200">
      <h3 className="text-xl font-semibold text-[#1F2937] mb-4">{title}</h3>
      {children}
    </section>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-[#E5E7EB] bg-white text-[#1F2937] px-5 py-4 text-base font-medium focus:border-[#6EE7B7] focus:ring-2 focus:ring-[#6EE7B7] shadow-sm placeholder:text-[#9CA3AF]"
      autoComplete="off"
    />
  );
}
function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full rounded-xl border border-[#E5E7EB] bg-white text-[#1F2937] px-5 py-4 text-base font-medium focus:border-[#6EE7B7] focus:ring-2 focus:ring-[#6EE7B7] shadow-sm placeholder:text-[#9CA3AF]"
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
    color: "#6EE7B7",
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
    const reader = new window.FileReader();
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
      className="min-h-screen w-full flex flex-col justify-center px-6 md:px-14 lg:px-20 py-12 relative"
      style={{
        background: "linear-gradient(120deg, #F9FAFB 0%, #ECFDF5 100%)",
      }}
    >
      {/* Decorative Blobs */}
      <svg
        className="absolute top-[-80px] left-[-100px] w-[360px] h-[300px] opacity-30 pointer-events-none z-0"
        viewBox="0 0 500 350"
        fill="none"
      >
        <ellipse cx="250" cy="175" rx="250" ry="175" fill="#6EE7B7" fillOpacity={0.23} />
      </svg>
      <svg
        className="absolute right-[-120px] bottom-[-90px] w-[300px] h-[240px] opacity-20 pointer-events-none z-0"
        viewBox="0 0 500 350"
        fill="none"
      >
        <ellipse cx="250" cy="175" rx="250" ry="175" fill="#34D399" fillOpacity={0.18} />
      </svg>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight mb-2">
            <span className="text-[#6EE7B7]">SaaS Website Builder</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#4B5563] mb-3">
            Launch your site in minutes – clean, modern, and yours to own.
          </p>
        </header>

        <form className="space-y-16" onSubmit={handleSubmit}>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Input name="websiteTitle" placeholder="Website Name" onChange={handleChange} />
              <Input name="heroTitle" placeholder="Hero Title" onChange={handleChange} />
              <Input name="heroSubtitle" placeholder="Hero Subtitle" onChange={handleChange} />
              <Textarea name="aboutText" rows={3} placeholder="About Content" onChange={handleChange} />
              <Textarea name="faqText" rows={3} placeholder="FAQ Content" onChange={handleChange} />
              <Input name="contactEmail" type="email" placeholder="Contact Email" onChange={handleChange} />
            </div>

            <div className="space-y-8">
              <div>
                <label className="block mb-2 text-[#6EE7B7] font-semibold uppercase text-xs tracking-widest">
                  Upload Hero Image/Video
                </label>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="block w-full file:bg-[#6EE7B7] file:text-black file:rounded-lg file:px-3 file:py-2 file:font-bold file:border-none cursor-pointer"
                />
                {formData.heroMedia && (
                  <div className="mt-3 rounded-xl overflow-hidden shadow">
                    {formData.heroMedia.includes("video") ? (
                      <video src={formData.heroMedia} controls className="rounded-xl w-full" />
                    ) : (
                      <img src={formData.heroMedia} alt="Preview" className="rounded-xl w-full object-cover max-h-44" />
                    )}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4">
                <label className="text-[#6EE7B7] font-semibold">🎨 Accent Color:</label>
                <input
                  type="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-12 h-12 rounded-full border-2 border-[#6EE7B7] shadow"
                />
              </div>
              <label className="inline-flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="enableDarkMode"
                  checked={formData.enableDarkMode}
                  onChange={handleChange}
                  className="form-checkbox h-6 w-6 accent-[#6EE7B7] border-[#6EE7B7] rounded-lg"
                />
                <span className="text-base text-[#1F2937] font-medium">🌙 Enable Dark Mode</span>
              </label>
            </div>
          </section>

          {/* Section Order */}
          <section>
            <h3 className="text-2xl text-[#6EE7B7] font-bold mb-3">📌 Section Order</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {formData.sectionOrder.map((section, idx) => (
                <select
                  key={idx}
                  value={section}
                  onChange={(e) => handleSectionChange(idx, e.target.value)}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white text-[#1F2937] px-5 py-3 font-semibold text-base shadow focus:border-[#6EE7B7] focus:ring-2 focus:ring-[#6EE7B7]"
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

          {/* Feature Editors */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <SectionCard title="🖼️ Carousel Images">
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

          {/* CTA */}
          <div className="w-full flex">
            <button
              type="submit"
              className="flex-1 py-5 rounded-2xl bg-[#6EE7B7] text-[#071717] text-2xl font-extrabold shadow-xl hover:bg-[#34D399] transition tracking-wide"
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
