'use client';

import SectionWrapper from './SectionWrapper';
import { 
  SiPython, SiCplusplus, SiJavascript, SiPandas, 
  SiNumpy, SiPytorch, SiStreamlit, SiDjango, 
  SiGit, SiGithub, SiHackerrank, SiFreecodecamp,
  SiScikitlearn
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbSql, TbChartDots, TbBrain, TbUsers, TbRefresh, TbClock, TbChartBar, TbBulb } from 'react-icons/tb';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++', icon: <SiCplusplus size={24} />, color: '#00599C' },
      { name: 'Java', icon: <FaJava size={24} />, color: '#ED8B00' },
      { name: 'Python', icon: <SiPython size={24} />, color: '#3776AB' },
      { name: 'JavaScript', icon: <SiJavascript size={24} />, color: '#F7DF1E' },
      { name: 'SQL', icon: <TbSql size={24} />, color: '#336791' },
    ] as Skill[],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Pandas', icon: <SiPandas size={24} />, color: '#150458' },
      { name: 'NumPy', icon: <SiNumpy size={24} />, color: '#013243' },
      { name: 'Matplotlib', icon: <TbChartDots size={24} />, color: '#11557c' },
      { name: 'Scikit-learn', icon: <SiScikitlearn size={24} />, color: '#F7931E' },
      { name: 'PyTorch', icon: <SiPytorch size={24} />, color: '#EE4C2C' },
      { name: 'Streamlit', icon: <SiStreamlit size={24} />, color: '#FF4B4B' },
      { name: 'Django', icon: <SiDjango size={24} />, color: '#092E20' },
    ] as Skill[],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <SiGit size={24} />, color: '#F05032' },
      { name: 'GitHub', icon: <SiGithub size={24} />, color: '#6e7681' },
      { name: 'HackerRank', icon: <SiHackerrank size={24} />, color: '#00EA64' },
      { name: 'FreeCodeCamp', icon: <SiFreecodecamp size={24} />, color: '#0A0A23' },
    ] as Skill[],
  },
];

const softSkills = [
  { name: 'Problem Solving', icon: <TbBrain size={20} />, color: '#6366f1' },
  { name: 'Team Collaboration', icon: <TbUsers size={20} />, color: '#8b5cf6' },
  { name: 'Adaptability', icon: <TbRefresh size={20} />, color: '#a855f7' },
  { name: 'Time Management', icon: <TbClock size={20} />, color: '#d946ef' },
  { name: 'Analytical Thinking', icon: <TbChartBar size={20} />, color: '#ec4899' },
  { name: 'Continuous Learning', icon: <TbBulb size={20} />, color: '#f43f5e' },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="heading-section text-[var(--foreground)] mb-4">Mastered Capabilities</h2>
        <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto font-light">
          A breakdown of my technical arsenal and professional soft skills.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {skillCategories.map((category) => (
          <div key={category.title} className="bento-card p-8 md:p-10 flex flex-col h-full relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-glow)] rounded-full blur-[60px] group-hover:opacity-60 transition-colors duration-500" />
            
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-10 relative z-10 border-l border-purple-500/50 pl-4">
              {category.title}
            </h3>

            <div className="flex flex-col gap-4 relative z-10">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] hover:border-[var(--accent)] hover:bg-[var(--card-bg-hover)] transition-all duration-300 group/item"
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--btn-secondary-bg)] transition-colors duration-300 shadow-inner"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-[var(--text-secondary)] font-medium tracking-tight group-hover/item:text-[var(--foreground)] transition-colors duration-300 text-base md:text-lg">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills Section */}
      <div className="mt-10 pt-10 border-t border-[var(--card-border)]">
        <div className="text-center mb-12">
           <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">Soft Skills</h3>
           <div className="h-1 w-12 bg-purple-500 mx-auto rounded-full" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {softSkills.map((skill) => (
            <div 
              key={skill.name} 
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-500 group"
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--btn-secondary-bg)] transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="text-[var(--text-secondary)] font-medium text-sm md:text-base group-hover:text-[var(--foreground)] transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
