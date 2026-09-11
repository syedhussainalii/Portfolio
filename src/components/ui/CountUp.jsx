import { useEffect } from "react";
import { motion, useInView, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function CountUp({
  to,
  from = 0,
  duration = 1.5,
  delay = 0,
  className = "",
  suffix = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  const spring = useSpring(from, {
    duration: shouldReduceMotion ? 0 : duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    return Math.round(current) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const timer = window.setTimeout(() => {
        spring.set(to);
      }, delay * 1000);

      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [isInView, to, delay, spring]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
