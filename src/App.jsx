import { useEffect, useState } from 'react'
import './App.css'
import AboutSection from './components/home/AboutSection'
import CertificationsSection from './components/home/CertificationsSection'
import ContactSection from './components/home/ContactSection'
import HeroSection from './components/home/HeroSection'
import ProjectsSection from './components/home/ProjectsSection'
import ServicesSection from './components/home/ServicesSection'
import TechStackSection from './components/home/TechStackSection'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Preloader from './components/layout/Preloader'
import { services } from './data/services'
import {
  heroWords,
  languageItems,
  navigationItems,
  socialLinks,
} from './data/siteContent'
import { projectFilters, projects } from './data/projects'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeWordIndex, setActiveWordIndex] = useState(0)

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 900)
    return () => window.clearTimeout(loadingTimer)
  }, [])

  useEffect(() => {
    const wordTimer = window.setInterval(() => {
      setActiveWordIndex((currentIndex) => (currentIndex + 1) % heroWords.length)
    }, 2200)

    return () => window.clearInterval(wordTimer)
  }, [])

  return (
    <>
      <Preloader isLoading={isLoading} />
      <Navbar
        navigationItems={navigationItems}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((currentValue) => !currentValue)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />
      <main id="main-content">
        <HeroSection
          heroWords={heroWords}
          activeWordIndex={activeWordIndex}
          languageItems={languageItems}
          socialLinks={socialLinks}
        />
        <AboutSection />
        <TechStackSection />
        {/* <ServicesSection services={services} /> */}
        <ServicesSection services={services} /> 
        {/* <ResumeSection /> */}
        <ProjectsSection filters={projectFilters} projects={projects} />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
