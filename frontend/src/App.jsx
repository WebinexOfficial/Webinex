// import About from './Pages/Footercomponents/About';
// import Blog from './Pages/Footercomponents/Blog';
// import ContactUs from './Pages/Footercomponents/ContactUs';
// import Documentation from './Pages/Footercomponents/Documentation';
// import Guides from './Pages/Footercomponents/Guides';
// import Jobs from './Pages/Footercomponents/Jobs';
// import License from './Pages/Footercomponents/License';
// import PrivacyPolicy from './Pages/Footercomponents/PrivacyPolicy';
// import SubmitTicket from './Pages/Footercomponents/SubmitTicket';
// import TermsOfService from './Pages/Footercomponents/TermsOfService';

import About from './pages/Footercomponents/About';
import Blog from './pages/Footercomponents/Blog';
import ContactUs from './pages/Footercomponents/ContactUs';
import Documentation from './pages/Footercomponents/Documentation';
import Guides from './pages/Footercomponents/Guides';
import Jobs from './pages/Footercomponents/Jobs';
import License from './pages/Footercomponents/License';
import PrivacyPolicy from './pages/Footercomponents/PrivacyPolicy';
import SubmitTicket from './pages/Footercomponents/SubmitTicket';
import TermsOfService from './pages/Footercomponents/TermsOfService';
import WebSiteBuilder from './Feature1/WebSiteBuilder.jsx';


import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ClientTestimonial from './components/ClientTestimonial/ClientTestimonial';
import OurServices from './components/OurServices/OurServices';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import PortfolioSection from './components/Portfolio/Portfolio';
import LandingPage from './components/LandingPage/LandingPage';
// import LogoDesign from './Pages/PortfolioPages/LogoDesign';
// import UIUXDesign from './Pages/PortfolioPages/UIUXDesign';
// import WebDevelopment from './Pages/PortfolioPages/WebDevelopment';
// import SEO from './Pages/PortfolioPages/SEO';
import LogoDesign from './pages/PortfolioPages/LogoDesign';
import UIUXDesign from './pages/PortfolioPages/UiUxDesign';
import WebDevelopment from './pages/PortfolioPages/WebDevelopment';
import SEO from './pages/PortfolioPages/SEO';

import Footer from './components/Footer/Footer';
import FloatingContactButton from './components/Fab/FloatingContactButton';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Login from './components/Login/Login';
import Navbar from './components/Header/Navbar';
import ProtectedRouted from './components/ProtectedRoute';
import Signup from './components/SignUp/SignUp';
import {HelmetProvider} from 'react-helmet-async'
function App() {
  const helmetContext={};
  return (
    <>
    <HelmetProvider context={helmetContext}>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/client-testimonial" element={<ClientTestimonial/>} />
        <Route path="/why-choose-us" element={<WhyChooseUs/>} />
        <Route path="/portfolio" element={<PortfolioSection/>} />
        <Route path="/landing-page" element={<LandingPage/>} />

        <Route path="/OurServices" element={<OurServices/>} />
        <Route path="/portfolio/logo-design" element={<LogoDesign/>} />
        <Route path="/portfolio/ui-ux-design" element={<UIUXDesign/>} />
        <Route path="/portfolio/web-development" element={<WebDevelopment/>} />
        <Route path="/portfolio/seo" element={<SEO/>} />
        
        {/* Footer Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/license" element={<License />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/submit-ticket" element={<SubmitTicket />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* Protected Route for Website Builder */}
        <Route path="/WebSiteBuilder" element={<WebSiteBuilder />} />

        {/* Catch-all route for 404 */}
      </Routes>
      <FloatingContactButton/>
      <Footer/>
    </HelmetProvider>
      
    </>
  );
}

export default App;
