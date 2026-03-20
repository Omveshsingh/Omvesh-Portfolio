'use client';

import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import { FiArrowUpRight } from 'react-icons/fi';

const certificates = [
  {
    title: 'Data Analytics with Python',
    issuer: 'NPTEL',
    year: '2025',
    link: 'https://drive.google.com/file/d/1_xDyF_CJl265Zn8zcXk7OVWtloW_ZdT2/view',
    image: '/cert-nptel.png'
  },
  {
    title: 'Computer Vision 101',
    issuer: 'Infosys Springboard',
    year: '2025',
    link: 'https://drive.google.com/file/d/16PpExcC9I-CY7oIH9kplwHgICbqAmqN2/view?usp=sharing',
    image: '/cert-cv.png'
  },
  {
    title: 'Introduction to Deep Learning',
    issuer: 'Infosys Springboard',
    year: '2025',
    link: 'https://drive.google.com/file/d/1EJVjytXSI02GGDnIwws4gXUR7fYVplaA/view?usp=sharing',
    image: '/cert-dl.png'
  },
  {
    title: 'Python for ML/AI',
    issuer: 'CSE Pathshala',
    year: '2024',
    link: 'https://drive.google.com/file/d/112JQlc9Koe2HrRCV5sho5BuUocWrJ7e9/view',
    image: '/cert-python.png'
  },
];

export default function Certificates() {
  return (
    <SectionWrapper id="certificates">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="heading-section text-white mb-4">Certifications</h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
          Professional achievements and validated expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, i) => (
          <a 
            key={i} 
            href={cert.link} 
            target="_blank" 
            rel="noreferrer" 
            className="bento-card group p-0 flex flex-col justify-end overflow-hidden min-h-[300px] md:min-h-[380px] relative"
          >
            {/* Certificate Image Background */}
            <div className="absolute inset-0 z-0">
               {/* Note: User needs to add these images to public folder */}
               <div className="w-full h-full bg-zinc-900 group-hover:scale-105 transition-transform duration-700">
                  <Image 
                    src={cert.image} 
                    alt={cert.title}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content Over the Image */}
            <div className="relative z-10 p-8 md:p-10 w-full mt-auto">
              <div className="flex justify-between items-end">
                <div className="flex-1">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-3">Issued {cert.year}</span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-400 font-medium text-lg leading-relaxed">{cert.issuer}</p>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500 backdrop-blur-md shrink-0 ml-4 mb-2">
                  <FiArrowUpRight size={24} />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
