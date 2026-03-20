'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FiDownload, FiEye, FiFileText } from 'react-icons/fi';

export default function Resume() {
  return (
    <SectionWrapper id="resume">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="heading-section text-white mb-4">Resume</h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
          Get a comprehensive overview of my professional experience and skills.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bento-card group p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -mr-20 -mt-20 group-hover:bg-purple-600/20 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -ml-20 -mb-20 group-hover:bg-indigo-600/20 transition-all duration-700" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center text-purple-400 mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <FiFileText size={40} />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Download Full Credentials
            </h3>

            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12">
              Deep dive into my technical journey, detailed project breakdowns, and academic milestones in a single document.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Omvesh_Singh_Resume.pdf"
                className="btn-primary flex items-center justify-center gap-3 px-10 py-4 text-lg"
              >
                <FiDownload size={20} /> Download PDF
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-3 px-10 py-4 text-lg"
              >
                <FiEye size={20} /> View Online
              </a>
            </div>
          </div>

          {/* Decorative Footer */}
          <div className="relative z-10 mt-16 pt-8 border-t border-white/5 w-full flex justify-center">
            <div className="flex items-center gap-4 text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase">
              <div className="h-[1px] w-8 bg-zinc-800" />
              <span>Available for Opportunities</span>
              <div className="h-[1px] w-8 bg-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
