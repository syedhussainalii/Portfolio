function SkillCard({ name, percentage, isVisible }) {
  return (
    <div className="single-skill" data-percentage={percentage}>
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="progress skill-progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={percentage}
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default SkillCard
