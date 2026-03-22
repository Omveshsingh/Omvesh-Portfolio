'use client';

import SectionWrapper from './SectionWrapper';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiCheck } from 'react-icons/fi';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Inquiry from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitting(false);
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 3000);
      } else {
        setIsSubmitting(false);
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      alert("Uh oh! Network error. Check your connection.");
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Contact Info Intro */}
        <div className="flex flex-col justify-center">
          <h2 className="heading-jumbo text-[var(--foreground)] mb-6">
            Let&apos;s talk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Business.</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed mb-12">
            Open to AI engineering roles, freelance software projects, and research collaborations. I usually respond within 24 hours.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <FiMail />, label: 'Email', value: 'Drop a line', href: 'mailto:omveshsingh2004@gmail.com' },
              { icon: <FiPhone />, label: 'Mobile', value: 'Call me', href: 'tel:+919807991271' },
              { icon: <FiLinkedin />, label: 'Network', value: 'LinkedIn', href: 'https://www.linkedin.com/in/omvesh-singh-aa71a0289/' },
              { icon: <FiGithub />, label: 'Repos', value: 'GitHub', href: 'https://github.com/Omveshsingh' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="bento-card p-6 flex flex-col gap-4 group"
              >
                <div className="w-12 h-12 rounded-[1rem] bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] flex items-center justify-center text-[var(--text-secondary)] group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-400 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] opacity-60 mb-1">{item.label}</div>
                  <div className="text-[15px] font-semibold text-[var(--foreground)]">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bento-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[80px]" />

          <div className="relative z-10 mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">Send a Message</h3>
            <p className="text-[var(--text-secondary)] mt-2 font-light">Fill out the form below and I&apos;ll be in touch.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 w-full">
            <div>
              <label htmlFor="name" className="block text-[11px] uppercase font-bold tracking-widest text-[var(--text-secondary)] mb-2">Name</label>
              <input
                type="text" id="name" required className="form-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[11px] uppercase font-bold tracking-widest text-[var(--text-secondary)] mb-2">Email Address</label>
              <input
                type="email" id="email" required className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[11px] uppercase font-bold tracking-widest text-[var(--text-secondary)] mb-2">Message</label>
              <textarea
                id="message" required rows={5} className="form-input"
                placeholder="How can I help you?"
                style={{ resize: 'vertical' }}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSent}
              className={`w-full py-4 rounded-xl font-bold text-[15px] transition-all flex items-center justify-center gap-2 ${isSent ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_4px_14px_rgba(16,185,129,0.4)]' : 'btn-primary'
                }`}
            >
              {isSubmitting ? 'Transmitting...' : isSent ? <><FiCheck /> Message Sent</> : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
