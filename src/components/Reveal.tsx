import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps { children: ReactNode; delay?: number; className?: string; }

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial={{ opacity: .78, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .12 }} transition={{ duration: .55, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
