import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import ProductGallery from './ProductGallery';
import Testimonials from './Testimonials';
import BlogPreview from './BlogPreview';
import generateHTMLPages from '../utils/GenrateHtml';

const sections = ['Gallery', 'Products', 'Testimonials', 'Blog'];

function WebsiteForm({ onGenerate }) {
  const [formData, setFormData] = useState({
    websiteTitle: '',
    heroTitle: '',
    heroSubtitle: '',
    aboutText: '',
    faqText: '',
    contactEmail: '',
    color: '#00ff99',
    heroMedia: '',
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
      [name]: type === 'checkbox' ? checked : value,
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
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-5xl mx-auto bg-gradient-to-br from-gray-950/95 via-gray-900/95 to-black/95 text-white p-10 md:p-16 rounded-3xl shadow-2xl space-y-12 border border-gray-800"
    >
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#00ff99] mb-2 drop-shadow-xl">🚀 SaaS Website Builder</h2>
        <p className="text-gray-400 text-lg">Create and preview your professional site in minutes.</p>
      </div>

      {/* Main Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <input
            type="text"
            name="websiteTitle"
            placeholder="Website Name"
            className="input-style"
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="text"
            name="heroTitle"
            placeholder="Hero Title"
            className="input-style"
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="text"
            name="heroSubtitle"
            placeholder="Hero Subtitle"
            className="input-style"
            onChange={handleChange}
            autoComplete="off"
          />
          <textarea
            name="aboutText"
            placeholder="About Section Content"
            rows={3}
            className="input-style"
            onChange={handleChange}
          />
          <textarea
            name="faqText"
            placeholder="FAQ Content"
            rows={3}
            className="input-style"
            onChange={handleChange}
          />
          <input
            type="email"
            name="contactEmail"
            placeholder="Contact Email"
            className="input-style"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="space-y-8">
          <div>
            <label className="block mb-3 text-[#00ff99] font-semibold">Upload Hero Image/Video</label>
            <input type="file" accept="image/*,video/*" onChange={handleFileUpload}
              className="block w-full file:bg-[#00ff99] file:text-black file:rounded-lg file:px-3 file:py-2 file:border-none file:mr-4"
            />
            {formData.heroMedia && (
              <div className="mt-4">
                {formData.heroMedia.includes('video') ? (
                  <video src={formData.heroMedia} controls className="rounded-xl w-full shadow-lg" />
                ) : (
                  <img src={formData.heroMedia} alt="Preview" className="rounded-xl max-w-full shadow-lg" />
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <label className="text-[#00ff99] font-semibold">🎨 Accent Color:</label>
            <input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-12 h-12 rounded-full border-2 border-[#00ff99] shadow-lg"
            />
          </div>

          <label className="inline-flex items-center gap-3 cursor-pointer mt-2">
            <input
              type="checkbox"
              name="enableDarkMode"
              checked={formData.enableDarkMode}
              onChange={handleChange}
              className="form-checkbox h-6 w-6 text-[#00ff99] border-[#00ff99] rounded focus:ring-2 focus:ring-[#00ff99]"
            />
            <span className="text-base text-gray-200">🌙 Enable Dark Mode</span>
          </label>
        </div>
      </div>

      {/* Section Order */}
      <div>
        <h3 className="text-2xl text-[#00ff99] font-bold mb-3">📌 Section Order</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {formData.sectionOrder.map((section, idx) => (
            <select
              key={idx}
              value={section}
              onChange={(e) => handleSectionChange(idx, e.target.value)}
              className="input-style"
            >
              {sections.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          ))}
        </div>
      </div>

      {/* Sub-component editors */}
      <div className="space-y-10">
        <div>
          <h3 className="text-2xl text-[#00ff99] font-bold mb-3">🖼️ Carousel Images</h3>
          <div className="rounded-xl border border-[#00ff99] bg-black p-4 shadow-md">
            <ImageCarousel onChange={setCarouselImages} />
          </div>
        </div>

        <div>
          <h3 className="text-2xl text-[#00ff99] font-bold mb-3">🛒 Product List</h3>
          <div className="rounded-xl border border-[#00ff99] bg-black p-4 shadow-md">
            <ProductGallery onChange={setProducts} />
          </div>
        </div>

        <div>
          <h3 className="text-2xl text-[#00ff99] font-bold mb-3">🌟 Testimonials</h3>
          <div className="rounded-xl border border-[#00ff99] bg-black p-4 shadow-md">
            <Testimonials onChange={setTestimonials} />
          </div>
        </div>

        <div>
          <h3 className="text-2xl text-[#00ff99] font-bold mb-3">📝 Blog Posts</h3>
          <div className="rounded-xl border border-[#00ff99] bg-black p-4 shadow-md">
            <BlogPreview onChange={setBlogPosts} />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-8 py-4 rounded-xl bg-[#00ff99] text-black text-xl font-bold hover:bg-[#00e68c] transition-all shadow-lg tracking-wide"
      >
        ⚡ Generate Website
      </button>
    </form>
  );
}

export default WebsiteForm;