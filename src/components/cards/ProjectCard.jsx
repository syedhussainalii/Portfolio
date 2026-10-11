import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const ProjectCard = memo(({
  title,
  thumbnail,
  alt,
  category,
  description,
  technologies,
  project,
  onOpen,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="project-card"
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="project-card-image-wrapper">
        <img className="project-card-image" alt={alt} src={thumbnail} loading="lazy" decoding="async" />
      </div>
      <div className="project-card-body">
        <span className="project-card-badge">{category}</span>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-tech">
          {technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="project-tech-chip">
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="project-tech-chip">+{technologies.length - 3}</span>
          )}
        </div>
        <button
          className="project-card-button"
          type="button"
          onClick={(event) => onOpen(project, event)}
          aria-label={`View details of ${title}`}
        >
          View Details
        </button>
      </div>
    </motion.article>
  )
})

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
