'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--nav-bg)] backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs tracking-wider">OS</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-[var(--foreground)]">Omvesh Singh</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-[var(--btn-secondary-bg)] backdrop-blur-md px-6 py-2.5 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[13px] font-semibold tracking-wide text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors uppercase">
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--btn-secondary-bg)] transition-all"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a href="#contact" className="btn-secondary text-sm px-6 py-2">
            Let&apos;s Build
          </a>
        </div>

        {/* Mobile Toggle & Theme Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] flex items-center justify-center text-[var(--foreground)]"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button className="text-[var(--text-secondary)] hover:text-[var(--foreground)]" onClick={() => setMobileOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[100] bg-black p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs tracking-wider">OS</span>
              </div>
              <button className="text-zinc-400 hover:text-white" onClick={() => setMobileOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-2xl font-bold tracking-tight">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto mb-8 w-full">
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full max-w-sm">
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
