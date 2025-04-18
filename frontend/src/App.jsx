import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ClientTestimonial from './components/ClientTestimonial/ClientTestimonial';
import OurServices from './components/OurServices/OurServices';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import PortfolioSection from './components/Portfolio/Portfolio';
import LandingPage from './components/LandingPage/LandingPage';



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
    </Routes>
    </>
  )
}

export default App
