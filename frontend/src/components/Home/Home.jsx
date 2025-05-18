import Navbar from '../Header/Navbar';
import PortfolioSection from '../Portfolio/Portfolio';
import OurServices from '../OurServices/OurServices';
import LandingPage from '../LandingPage/LandingPage';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Login from '../Login/Login';

const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <OurServices/>
      <PortfolioSection />
      <WhyChooseUs/>
      <Login/>
      {/* <ClientTestimonial/> */}
      {/* <Footer/> */}

  
      
    </>
  );
};

export default Home;