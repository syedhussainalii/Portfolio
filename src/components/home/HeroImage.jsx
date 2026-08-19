import { useMemo, useState } from 'react'
import { heroProfile } from '../../data/hero'

function HeroImage() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 })

  const portraitStyle = useMemo(
    () => ({
      transform: `translate3d(${tilt.translateX}px, ${tilt.translateY}px, 0) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
    }),
    [tilt],
  )

  const handlePointerMove = (event) => {
    const element = event.currentTarget
    const bounds = element.getBoundingClientRect()
    const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5
    const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5

    setTilt({
      rotateX: -(normalizedY * 8),
      rotateY: normalizedX * 10,
      translateX: normalizedX * 6,
      translateY: normalizedY * 6,
    })
  }

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 })
  }

  return (
    <div className="hero-visual">
      <div className="hero-orb hero-orb-primary" aria-hidden="true" />
      <div className="hero-orb hero-orb-secondary" aria-hidden="true" />
      <div
        className="hero-portrait-frame"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        onBlur={resetTilt}
      >
        <img
          className="hero-portrait"
          src={heroProfile.portrait}
          alt={heroProfile.portraitAlt}
          style={portraitStyle}
        />
      </div>
    </div>
  )
}

export default HeroImage
