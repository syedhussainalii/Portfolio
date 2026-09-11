import { motion, useReducedMotion } from "framer-motion";

function TechCard({ icon: Icon, name, categoryTitle }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="tech-card"
      tabIndex={0}
      aria-label={`${name} in ${categoryTitle}`}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="tech-card-icon" aria-hidden="true">
        <Icon />
      </div>
      <p className="tech-card-name">{name}</p>
    </motion.article>
  )
}

export default TechCard
