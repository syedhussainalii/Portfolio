import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ProjectCard from '../cards/ProjectCard'

function ProjectsSection({ filters, projects, onModalOpenChange }) {
  const sectionRef = useRef(null)
  const lastActiveElementRef = useRef(null)
  const modalCloseButtonRef = useRef(null)
  
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('ui-ux')
  const [displayFilter, setDisplayFilter] = useState('ui-ux')
  const [transitionPhase, setTransitionPhase] = useState('idle')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isClosing, setIsClosing] = useState(false)
  const transitionTimerRef = useRef(null)

  // IntersectionObserver to trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Cleanup transition timers on unmount
  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current)
      }
    }
  }, [])

  // Lock background scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  // Focus management
  useEffect(() => {
    if (selectedProject && !isClosing) {
      // Focus the close button when modal opens
      setTimeout(() => {
        modalCloseButtonRef.current?.focus()
      }, 50)
    } else if (!selectedProject && lastActiveElementRef.current) {
      // Restore focus to the card button that opened it
      lastActiveElementRef.current.focus()
      lastActiveElementRef.current = null
    }
  }, [selectedProject, isClosing])

  // Smooth filtering transitions matching Tech Stack logic
  const handleFilterChange = (nextFilter) => {
    if (nextFilter === activeFilter) {
      return
    }

    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current)
    }

    setActiveFilter(nextFilter)
    setTransitionPhase('leaving')

    transitionTimerRef.current = window.setTimeout(() => {
      setDisplayFilter(nextFilter)
      setTransitionPhase('entering')

      window.requestAnimationFrame(() => {
        setTransitionPhase('idle')
      })
    }, 280)
  }

  const visibleProjects = useMemo(() => {
    return projects.filter((project) => project.category === displayFilter)
  }, [displayFilter, projects])

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      setSelectedProject(null)
      setIsClosing(false)
      onModalOpenChange(false)
    }, 280) // match animation duration
  }, [onModalOpenChange])

  // ESC key listener for closing modal
  useEffect(() => {
    if (!selectedProject) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject, handleClose])

  const handleOpenProject = (project, event) => {
    lastActiveElementRef.current = event.currentTarget
    setIsClosing(false)
    setSelectedProject(project)
    onModalOpenChange(true)
  }

  return (
    <section
      ref={sectionRef}
      className={`page-section portfolio-section-wrapper${isVisible ? ' is-visible' : ''}`}
      id="portfolio"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="lightbox-content">
              {/* Section Header */}
              <div className="row">
                <div className="col-12">
                  <div className="section-heading page-heading">
                    <p className="section-description">Showcasing some of my best work</p>
                    <h2 className="section-title" id="projects-title">
                      Portfolio
                    </h2>
                    <div className="animated-bar" />
                  </div>
                </div>
              </div>

              {/* Filtering Controls */}
              <div className="portfolio-section single-section">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="filter-tabs"
                      role="tablist"
                      aria-label="Portfolio filters"
                    >
                      {filters.map((filter) => {
                        const total = projects.filter(
                          (project) => project.category === filter.value
                        ).length

                        const isActive = activeFilter === filter.value

                        return (
                          <button
                            key={filter.value}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            aria-pressed={isActive}
                            className={`filter-tab${isActive ? ' active' : ''}`}
                            onClick={() => handleFilterChange(filter.value)}
                          >
                            {filter.label}
                            <span className="filter-tab-badge">{total}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Animated Grid Container */}
                <div className="portfolio-grid-container">
                  {visibleProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      thumbnail={project.thumbnail}
                      alt={project.title}
                      category={project.category}
                      description={project.description}
                      technologies={project.technologies}
                      onOpen={(event) => handleOpenProject(project, event)}
                      isVisible={isVisible}
                      animationState={transitionPhase}
                      delay={index * 25}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Glassmorphic Modal Detail View */}
      {selectedProject ? (
        <div
          className={`project-modal${isClosing ? ' is-closing' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label={`Details of ${selectedProject.title}`}
          onClick={handleClose}
        >
          <div
            className={`project-modal-wrapper${isClosing ? ' is-closing' : ''}`}
            role="document"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={modalCloseButtonRef}
              className="project-modal-close"
              type="button"
              aria-label="Close modal"
              onClick={handleClose}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            
            {/* Stable Top Area (Image & Title Header) */}
            <div className="project-modal-top-stable">
              <div className="project-modal-image-wrapper">
                <img
                  className="project-modal-image"
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                />
              </div>
              <div className="project-modal-header-stable">
                <span className="project-card-badge">{selectedProject.category}</span>
                <h3 className="project-modal-title">{selectedProject.title}</h3>
              </div>
            </div>

            {/* Scrollable Content Body Area */}
            <div className="project-modal-scrollable-content">
              <p className="project-modal-description">{selectedProject.description}</p>

              {/* Role & Features */}
              <div className="project-modal-metadata">
                <div className="modal-meta-item">
                  <strong>Role:</strong>
                  <span className="modal-meta-value">{selectedProject.role}</span>
                </div>
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="modal-meta-item">
                    <strong>Key Features:</strong>
                    <ul>
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="project-card-tech">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="project-tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Call-to-Action Buttons */}
              <div className="project-modal-actions">
                {selectedProject.category === 'ui-ux' && selectedProject.liveUrl ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-button"
                  >
                    Live Preview
                  </a>
                ) : null}
                {selectedProject.category === 'ui-ux' && !selectedProject.liveUrl ? (
                  <span className="project-card-button" aria-disabled="true">
                    Live Preview
                  </span>
                ) : null}
                {selectedProject.category !== 'ui-ux' && selectedProject.liveUrl ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-button"
                  >
                    Live Demo
                  </a>
                ) : null}
                {selectedProject.category !== 'ui-ux' && selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card-button"
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.figma && (
                  <a
                    href={selectedProject.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card-button"
                  >
                    Figma
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default ProjectsSection
