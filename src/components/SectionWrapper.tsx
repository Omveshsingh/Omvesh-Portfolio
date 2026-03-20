'use client';

import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, className = '' }: { children: React.ReactNode, id: string, className?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`relative w-full scroll-mt-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
