
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ClientTestimonial from './components/ClientTestimonial/ClientTestimonial';
import OurServices from './components/OurServices/OurServices';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import PortfolioSection from './components/Portfolio/Portfolio';
import LandingPage from './components/LandingPage/LandingPage';
import LogoDesign from './Pages/PortfolioPages/LogoDesign';
import UIUXDesign from './Pages/PortfolioPages/UIUXDesign';
import WebDevelopment from './Pages/PortfolioPages/WebDevelopment';
import SEO from './Pages/PortfolioPages/SEO';


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/client-testimonial" element={<ClientTestimonial/>} />
      <Route path="/our-services" element={<OurServices/>} />
      <Route path="/why-choose-us" element={<WhyChooseUs/>} />
      <Route path="/portfolio" element={<PortfolioSection/>} />
      <Route path="/landing-page" element={<LandingPage/>} />
      <Route path="/portfolio/logo-design" element={<LogoDesign/>} />
      <Route path="/portfolio/ui-ux-design" element={<UIUXDesign/>} />
      <Route path="/portfolio/web-development" element={<WebDevelopment/>} />
      <Route path="/portfolio/seo" element={<SEO/>} />
    </Routes>
    </>
    );
    }


export default App

