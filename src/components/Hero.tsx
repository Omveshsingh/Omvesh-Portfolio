'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[95vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
      
      {/* Xtract Atmospheric Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] md:w-[800px] md:h-[500px] bg-purple-600/30 rounded-[100%] blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto flex flex-col items-center"
      >
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
          Omvesh Singh — Software & AI
        </div>

        <h1 className="heading-jumbo text-white mb-8">
          Elevating products <br className="hidden md:block"/> 
          with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Applied AI.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed font-light">
           I craft intelligent systems, scalable cloud deployments, and seamless frontend experiences for teams pushing the boundaries of technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#projects" className="btn-primary">
            Explore Work <FiArrowRight />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
