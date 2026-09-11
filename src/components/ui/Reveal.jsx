import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  width = "100%",
  delay = 0,
  duration = 0.6,
  y = 24,
  cascade = false,
  className = "",
  style = {},
}) {
  const shouldReduceMotion = useReducedMotion();

  const defaultVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  if (cascade) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={className}
        style={{ width, ...style }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={{ width, ...style }}
    >
      {children}
    </motion.div>
  );
}

export function RevealChild({ children, className = "", style = {}, y = 24 }) {
  const shouldReduceMotion = useReducedMotion();
  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };
  return (
    <motion.div variants={variants} className={className} style={style}>
      {children}
    </motion.div>
  );
}
