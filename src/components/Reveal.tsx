import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps { children: ReactNode; delay?: number; className?: string; }

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial={{ y: 12 }} whileInView={{ y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.4, delay }}>
      {children}
    </motion.div>
  );
}
