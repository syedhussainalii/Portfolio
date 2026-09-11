import { useEffect, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
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
  const [hasStarted, setHasStarted] = useState(false);

  const spring = useSpring(from, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    return Math.round(current) + suffix;
  });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setTimeout(() => {
        spring.set(to);
      }, delay * 1000);
      setHasStarted(true);
    }
  }, [isInView, hasStarted, to, delay, spring]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
