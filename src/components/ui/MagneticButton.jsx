import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

function MagneticButton({ children, className, ...props }) {
  const shouldReduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.25 })
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.25 })

  const handlePointerMove = (event) => {
    if (shouldReduceMotion || event.pointerType === 'touch') return

    const bounds = event.currentTarget.getBoundingClientRect()
    x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 10)
    y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 10)
  }

  const resetPosition = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      {...props}
      className={className}
      style={shouldReduceMotion ? undefined : { x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      onBlur={resetPosition}
    >
      {children}
    </motion.a>
  )
}

export default MagneticButton
