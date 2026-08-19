import { memo } from 'react'

const ProjectCard = memo(({
  title,
  thumbnail,
  alt,
  category,
  description,
  technologies,
  onOpen,
  isVisible,
  animationState = 'idle',
  delay = 0,
}) => {
  const stateClass =
    animationState === 'entering'
      ? ' is-entering'
      : animationState === 'leaving'
        ? ' is-leaving'
        : ' is-idle'

  return (
    <article
      className={`project-card${isVisible ? ' is-visible' : ''}${stateClass}`}
      style={{ '--project-delay': `${delay}ms` }}
    >
      <div className="project-card-image-wrapper">
        <img className="project-card-image" alt={alt} src={thumbnail} />
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
          onClick={onOpen}
          aria-label={`View details of ${title}`}
        >
          View Details
        </button>
      </div>
    </article>
  )
})

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
