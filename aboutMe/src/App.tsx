import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ExploreChips } from './components/ExploreChips'
import { HeaderNav } from './components/HeaderNav'
import { HeroSection } from './components/HeroSection'
import { PortfolioCarousel } from './components/PortfolioCarousel'
import { PricingSection } from './components/PricingSection'
import { ReelsSection } from './components/ReelsSection'
import { SiteFooter } from './components/SiteFooter'
import { portfolioSites } from './data/siteContent'
import './portfolio.css'

function App() {
  return (
    <div className="site-root">
      <HeaderNav />
      <main className="main-wrap">
        <HeroSection />
        <ExploreChips />
        <AboutSection />
        <PortfolioCarousel items={portfolioSites} />
        <ReelsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
