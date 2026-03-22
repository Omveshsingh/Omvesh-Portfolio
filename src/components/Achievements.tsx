'use client';

import SectionWrapper from './SectionWrapper';
import { FiAward, FiTrendingUp } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const achievements = [
  {
    title: '100+ Questions Solved',
    subtitle: 'LeetCode',
    desc: 'Demonstrated strong problem-solving skills and algorithmic thinking by consistently solving challenges across various difficulty levels.',
    icon: <SiLeetcode size={24} />,
    color: 'from-yellow-500/20 to-orange-500/20',
    iconColor: 'text-yellow-500',
    link: 'https://leetcode.com/u/omveshsingh/'
  },
  {
    title: 'Infosys Internship 6.0',
    subtitle: 'PolicyNav – AI',
    desc: 'Successfully completed the Infosys Springboard Internship 6.0 focused on Public Policy Navigation using Artificial Intelligence. Gained hands-on experience in applying AI concepts to real-world policy problems, improving analytical thinking and solution-building skills.',
    icon: <FiAward size={24} />,
    color: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-blue-400',
    link: 'https://drive.google.com/file/d/16kDapwDqzRFDzsVs2toHKWroECQLR5dT/view?usp=sharing'
  }
];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="heading-section text-[var(--foreground)] mb-4">Milestones & Achievements</h2>
        <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto font-light">
          A track record of continuous learning, problem-solving, and professional growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, idx) => (
          <a
            key={idx}
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-card group p-8 md:p-10 flex flex-col justify-between relative overflow-hidden h-full block"
          >
            {/* Background Gradient Glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${achievement.color} rounded-full blur-[80px] opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] flex items-center justify-center ${achievement.iconColor} shadow-inner`}>
                  {achievement.icon}
                </div>
                <div className="px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--btn-secondary-bg)] text-[10px] font-bold tracking-widest text-[var(--text-secondary)] uppercase">
                  {achievement.subtitle}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-4 transition-all duration-300">
                {achievement.title}
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed font-light text-lg">
                {achievement.desc}
              </p>
            </div>

            <div className="relative z-10 mt-12 flex items-center gap-2 text-[var(--text-secondary)] group-hover:text-[var(--foreground)] transition-colors duration-300">
              <div className="h-[1px] w-8 bg-[var(--card-border)] group-hover:bg-[var(--accent)] transition-all duration-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-400 group-hover:text-purple-300">View Reference</span>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
