'use client';

import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

const highlights = [
  'Skilled in building scalable ML models and intelligent systems.',
  'Expertise in Python, PyTorch, and Modern AI Frameworks.',
  'Passionate about Generative AI, RAG architectures, and Cloud deployments.',
  'Focused on crafting clean, production-ready frontend experiences.',
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="heading-section text-[var(--foreground)] mb-4">About Me</h2>
        <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto font-light">
          Getting to know the developer behind the code.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

        {/* BIG Bento Box: Image & About Intro */}
        <div className="bento-card lg:col-span-8 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]" />

          <div className="shrink-0 w-40 h-40 md:w-56 md:h-64 relative rounded-[2rem] overflow-hidden border border-[var(--card-border)] bg-[var(--background)] shadow-2xl">
            <Image
              src="/portfolio.png"
              alt="Portfolio showcase"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="flex flex-col justify-center h-full relative z-10 px-4 md:px-0">
            <h3 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-6">
              Engineering the Future <br /> with Applied AI
            </h3>
            <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-6">
              I am a Computer Science student with a profound passion for artificial intelligence, machine learning, and advanced software engineering. I specialize in bridging the gap between raw data and tangible real-world solutions.
            </p>
            <p className="text-[var(--text-secondary)] font-light leading-relaxed">
              Whether it&apos;s building computer vision optimization models, intelligent document processing pipelines, or scalable web applications, I focus on delivering code that is performant and clean.
            </p>
          </div>
        </div>

        {/* Small Bento Boxes: Stats */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="bento-card p-8 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-2 tracking-tighter">8.38</div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[var(--text-secondary)]">CGPA Average</div>
          </div>
          <div className="bento-card p-8 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-2 tracking-tighter">3+</div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[var(--text-secondary)]">Published AI Projects</div>
          </div>
        </div>
      </div>

      {/* Highlights Bento */}
      <div className="bento-card mt-6 p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-1">
                <FiCheckCircle size={16} />
              </div>
              <p className="text-[var(--foreground)] font-medium leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
