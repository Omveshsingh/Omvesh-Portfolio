'use client';

import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

const projects = [
  {
    title: 'Smart PDF Processing',
    desc: 'Unstructured PDFs into structured text using OCR and LLMs.',
    link: 'https://github.com/Omveshsingh/policy_navigation',
    image: '/project pdf.png',
    span: 'md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[500px]'
  },
  {
    title: 'Traffic Management',
    desc: 'Signal optimization using ResNet50.',
    link: 'https://github.com/ayushman12baghel/Smart-Traffic-Control-System',
    image: '/project-traffic-new.png',
    span: 'md:col-span-1 md:row-span-1 min-h-[300px]'
  },
  {
    title: 'AI Goal Assistant',
    desc: 'Gemini-powered task manager automation.',
    link: 'https://github.com/Omveshsingh/ai-goal-assistant',
    image: '/project-goal.png',
    span: 'md:col-span-1 md:row-span-1 min-h-[300px]'
  }
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="heading-section text-[var(--foreground)] mb-4">Selected Case Studies</h2>
        <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto font-light">
          A showcase of intelligent solutions designed to solve complex challenges and drive tangible results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank" rel="noreferrer"
            className={`bento-card group flex flex-col justify-between p-8 ${p.span || ''}`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 opacity-[var(--image-opacity)] group-hover:opacity-[var(--image-opacity-hover)]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex justify-between items-start">
              <div className="px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--background)]/50 text-xs font-semibold tracking-wide text-[var(--text-secondary)] backdrop-blur-md">
                Case Study
              </div>
              <div className="w-10 h-10 rounded-full border border-[var(--card-border)] bg-[var(--btn-secondary-bg)] flex items-center justify-center text-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300 backdrop-blur-md">
                <FiArrowUpRight size={20} />
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-10">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-2">{p.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed font-light">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
