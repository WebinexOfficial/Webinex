import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../../pages/Seo'; // Make sure this path matches your project structure

import PortfolioSection from '../Portfolio/Portfolio';
import OurServices from '../OurServices/OurServices';
import LandingPage from '../LandingPage/LandingPage';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <HelmetProvider>
      <SEO 
        title="Webinex - Freelance Web Development, SEO, UI/UX & Logo Design"
        description="Webinex offers expert freelance services in website development, SEO, UI/UX design, and logo design. High-quality, fast delivery, and affordable pricing for startups and businesses."
        name="@webinex_official"
        type="website"
        url="https://www.webinex.in"
        image="https://www.webinex.in/assets/images/webinex-cover.jpg"
        keywords="freelance web development, SEO services India, UI UX design, logo design services, Webinex freelancing, website design freelancer, custom website design, SEO expert India, Figma designer, branding expert"
        canonical="https://www.webinex.in"
        locale="en_IN"
      />

      <LandingPage />
      <OurServices />
      <PortfolioSection />
      <WhyChooseUs />

      {/* <ClientTestimonial/> */}
      {/* <Footer/> */}
    </HelmetProvider>
  );
};

export default Home;
