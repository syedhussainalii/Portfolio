import { useCallback, useEffect, useState } from 'react'
import './App.css'
import AboutSection from './components/home/AboutSection'
import CertificationsSection from './components/home/CertificationsSection'
import ContactSection from './components/home/ContactSection'
import HeroSection from './components/home/HeroSection'
import ProjectsSection from './components/home/ProjectsSection'
import ServicesSection from './components/home/ServicesSection'
import TechStackSection from './components/home/TechStackSection'
import Footer from './components/layout/Footer'
import AmbientBackground from './components/layout/AmbientBackground'
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
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 900)
    return () => window.clearTimeout(loadingTimer)
  }, [])

  const handleModalOpenChange = useCallback((isOpen) => {
    setIsProjectModalOpen(isOpen)
    if (isOpen) {
      setIsMenuOpen(false)
    }
  }, [])

  return (
    <>
      <AmbientBackground />
      <Preloader isLoading={isLoading} />
      <Navbar
        navigationItems={navigationItems}
        isMenuOpen={isMenuOpen}
        isProjectModalOpen={isProjectModalOpen}
        onToggleMenu={() => setIsMenuOpen((currentValue) => !currentValue)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />
      <main id="main-content">
        <HeroSection
          heroWords={heroWords}
          languageItems={languageItems}
          socialLinks={socialLinks}
        />
        <AboutSection />
        <TechStackSection />
        {/* <ServicesSection services={services} /> */}
        <ServicesSection services={services} /> 
        {/* <ResumeSection /> */}
        <ProjectsSection
          filters={projectFilters}
          projects={projects}
          onModalOpenChange={handleModalOpenChange}
        />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
