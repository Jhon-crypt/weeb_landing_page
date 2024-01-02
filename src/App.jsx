import Header from './components/header/header'
import LandingHero from './components/hero/landing-hero'
import BannerHero from './components/hero/bannerHero'
import DiscoverHero from './components/hero/discoverHero'
import PowerfulHero from './components/hero/powerfulHero'
import CustomersHero from './components/hero/customersHero'
import SpeedHero from './components/hero/speedHero'
import Testimonials from './components/section/testimonials'
import DesignEvents from './components/section/designEventsSection'
import Footer from './components/footer/footer'
import './App.css'

function App() {


  return (
    <>
      <div style={{ backgroundColor: '#0F172A'}}>
        <Header />
        <LandingHero />
        <BannerHero />
        <DiscoverHero />
        <PowerfulHero />
        <CustomersHero />
        <SpeedHero />
      </div>
      <Testimonials />
      <DesignEvents />
      <Footer />
    </>
  )
}

export default App
