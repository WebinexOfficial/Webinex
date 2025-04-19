import Navbar from '../Header/Navbar';
import PortfolioSection from '../Portfolio/Portfolio';
import OurServices from '../OurServices/OurServices';
import LandingPage from '../LandingPage/LandingPage';

const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <OurServices/>
      <PortfolioSection />
  
      
    </>
  );
};

export default Home;
