'use client';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ padding: '3rem 1.5rem', background: 'var(--background)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {[
            { icon: <FiGithub />, href: 'https://github.com/Omveshsingh', label: 'GitHub' },
            { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/omvesh-singh/', label: 'LinkedIn' },
            { icon: <FiMail />, href: 'mailto:omveshsingh2004@gmail.com', label: 'Email' },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={s.label}
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        <div>
          <p className="text-base font-bold" style={{ color: 'var(--foreground)' }}>Omvesh Singh</p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>AI Engineer | ML Developer</p>
        </div>

        <div className="w-full max-w-xs h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)' }} />

        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          &copy; {currentYear > 2026 ? currentYear : 2026} Omvesh Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
