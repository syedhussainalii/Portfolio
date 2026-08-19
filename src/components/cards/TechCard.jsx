function TechCard({ icon: Icon, name, categoryTitle, isVisible, animationState = 'idle', delay = 0 }) {
  const stateClass =
    animationState === 'entering'
      ? ' is-entering'
      : animationState === 'leaving'
        ? ' is-leaving'
        : ' is-idle'

  return (
    <article
      className={`tech-card${isVisible ? ' is-visible' : ''}${stateClass}`}
      tabIndex={0}
      aria-label={`${name} in ${categoryTitle}`}
      style={{ '--tech-delay': `${delay}ms` }}
    >
      <div className="tech-card-icon" aria-hidden="true">
        <Icon />
      </div>
      <p className="tech-card-name">{name}</p>
    </article>
  )
}

export default TechCard
