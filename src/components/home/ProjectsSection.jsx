import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ProjectCard from '../cards/ProjectCard'
import { Reveal, RevealChild } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const PROJECTS_VISIBLE_LIMIT = 9

function ProjectsSection({ filters, projects, onModalOpenChange }) {
  const allFilters = [{ label: 'All', value: 'all' }, ...filters]
  const shouldReduceMotion = useReducedMotion()
  const lastActiveElementRef = useRef(null)
  const modalCloseButtonRef = useRef(null)
  
  const [activeFilter, setActiveFilter] = useState('ui-ux')
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isClosing, setIsClosing] = useState(false)

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

  const handleFilterChange = useCallback((nextFilter) => {
    setActiveFilter(nextFilter)
    setIsExpanded(false)
  }, [])

  const visibleProjects = useMemo(() => {
    return activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)
  }, [activeFilter, projects])

  const renderedProjects = useMemo(
    () => isExpanded ? visibleProjects : visibleProjects.slice(0, PROJECTS_VISIBLE_LIMIT),
    [isExpanded, visibleProjects],
  )

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

  const handleOpenProject = useCallback((project, event) => {
    lastActiveElementRef.current = event.currentTarget
    setIsClosing(false)
    setSelectedProject(project)
    onModalOpenChange(true)
  }, [onModalOpenChange])

  return (
    <section
      className="page-section portfolio-section-wrapper"
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
                  <SectionHeading title="Portfolio" subtitle="Showcasing some of my best work" className="page-heading" headingId="projects-title" />
                </div>
              </div>

              {/* Filtering Controls */}
              <div className="portfolio-section single-section">
                <div className="row">
                  <div className="col-12">
                    <Reveal
                      className="filter-tabs"
                      role="tablist"
                      aria-label="Portfolio filters"
                      cascade
                      style={{ width: 'auto' }}
                    >
                      {allFilters.map((filter) => {
                        const total = filter.value === 'all'
                          ? projects.length
                          : projects.filter(
                              (project) => project.category === filter.value
                            ).length

                        const isActive = activeFilter === filter.value

                        return (
                          <RevealChild key={filter.value} y={12}>
                          <motion.button
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            aria-pressed={isActive}
                            className={`filter-tab${isActive ? ' active' : ''}`}
                            onClick={() => handleFilterChange(filter.value)}
                            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                          >
                            {filter.label}
                            <span className="filter-tab-badge">{total}</span>
                          </motion.button>
                          </RevealChild>
                        )
                      })}
                    </Reveal>
                  </div>
                </div>

                <div className="portfolio-grid-container">
                  {renderedProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      thumbnail={project.thumbnail}
                      alt={project.title}
                      category={project.categoryLabel ?? project.category}
                      description={project.shortDescription ?? project.description}
                      technologies={project.technologies}
                      project={project}
                      onOpen={handleOpenProject}
                    />
                  ))}
                </div>

                {visibleProjects.length > PROJECTS_VISIBLE_LIMIT ? (
                  <div className="tech-stack-toggle">
                    <button
                      type="button"
                      className="filter-tab"
                      aria-expanded={isExpanded}
                      onClick={() => setIsExpanded((expanded) => !expanded)}
                    >
                      {isExpanded ? 'View Less' : 'View More'}
                    </button>
                  </div>
                ) : null}
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
                <span className="project-card-badge">
                  {selectedProject.categoryLabel ?? selectedProject.category}
                </span>
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
                    rel="noopener noreferrer"
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
