import { useEffect, useRef } from 'react'

function AmbientBackground() {
  const layerRef = useRef(null)

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)')

    if (!supportsFinePointer.matches || !layerRef.current) {
      return undefined
    }

    const layer = layerRef.current
    let frameId = null
    let targetX = window.innerWidth * 0.55
    let targetY = window.innerHeight * 0.24
    let currentX = targetX
    let currentY = targetY

    const render = () => {
      currentX += (targetX - currentX) * 0.11
      currentY += (targetY - currentY) * 0.11
      layer.style.setProperty('--spotlight-x', `${currentX}px`)
      layer.style.setProperty('--spotlight-y', `${currentY}px`)

      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        frameId = window.requestAnimationFrame(render)
      } else {
        frameId = null
      }
    }

    const handlePointerMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY

      if (frameId === null) {
        frameId = window.requestAnimationFrame(render)
      }
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    frameId = window.requestAnimationFrame(render)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <div ref={layerRef} className="ambient-background" aria-hidden="true">
      <span className="ambient-background__spotlight" />
      <span className="ambient-background__blob ambient-background__blob--one" />
      <span className="ambient-background__blob ambient-background__blob--two" />
      <span className="ambient-background__blob ambient-background__blob--three" />
    </div>
  )
}

export default AmbientBackground
