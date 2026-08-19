import { useEffect, useState } from 'react'
import SkillCard from '../cards/SkillCard'

function SkillsSection({ title, description, skillGroups }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => setIsVisible(true))

    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div className="skills-section single-section">
      <div className="row">
        <div className="col-12">
          <div className="section-heading">
            <p className="section-description">{description}</p>
            <h2 className="section-title">{title}</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {skillGroups.map((skillGroup, columnIndex) => (
          <div key={`skill-column-${columnIndex}`} className="col-12 col-md-6">
            {skillGroup.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                isVisible={isVisible}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection
