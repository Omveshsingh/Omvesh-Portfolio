'use client';

import SectionWrapper from './SectionWrapper';

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Lovely Professional University',
    score: 'CGPA: 8.38',
    year: '2023 – Present',
  },
  {
    degree: 'Intermediate',
    institution: "St. John's School, Varanasi",
    score: '87%',
    year: '2022 – 2023',
  },
  {
    degree: 'Matriculation',
    institution: "St. John's School, Varanasi",
    score: '90%',
    year: '2020 – 2021',
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="heading-section text-white mb-4">Education</h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
          My core academic journey and academic excellence.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {education.map((item, i) => (
          <div key={i} className="bento-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">{item.degree}</h3>
                <p className="text-zinc-400 font-medium">{item.institution}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0 relative z-10">
                <span className="text-xs font-bold tracking-wide px-3 py-1.5 border border-purple-500/20 bg-purple-500/10 rounded-full text-purple-400">
                  {item.score}
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 bg-[#111] border border-white/5 rounded-full text-zinc-500 uppercase tracking-widest">
                  {item.year}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
