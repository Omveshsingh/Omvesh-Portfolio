import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <main className="flex flex-col w-full relative pt-10 pb-32">
        <Hero />

        <div className="px-6 md:px-12 lg:px-20 w-full max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-24 mt-16">
          <Projects />
          <Skills />
          <About />
          <Certificates />
          <Achievements />
          <Education />
          <Resume />
          <Contact />
        </div>
      </main>
    </div>
  );
}
