import React from 'react'
import Portfolio from './components/Portfolio/Portfolio'
import WebDevelopment from './pages/PortfolioPages/WebDevelopment'
import LogoDesign from './pages/PortfolioPages/LogoDesign'
import VoiceOver from './pages/PortfolioPages/VoiceOver'
import SEO from './pages/PortfolioPages/SEO'
import UIUXDesign from './pages/PortfolioPages/UiUxDesign'
import OurServices from './components/OurServices/OurServices'

const App = () => {
  return (
    <div>
      <Portfolio />
      <WebDevelopment />
      <LogoDesign />
      <VoiceOver />
      <SEO />
      <UIUXDesign />
      <OurServices />
      {/* Add more portfolio sections as needed */}
    </div>
  )
}

export default App

