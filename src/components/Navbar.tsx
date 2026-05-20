import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../utils/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-38% 0px -52% 0px', threshold: 0.1 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-950/70 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <button
            onClick={() => handleClick('#hero')}
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-left glass transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/25"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 font-mono text-sm font-bold text-cyan-200 shadow-[0_14px_30px_rgba(0,0,0,0.25)]">
              SB
            </span>
            <span className="leading-tight">
              <span className="block font-mono text-[11px] uppercase tracking-[0.35em] text-gray-500">
                Portfolio
              </span>
              <span className="block text-sm font-semibold text-white">
                Salam Baybars
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 lg:flex glass">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-500/15 text-white shadow-[0_12px_30px_rgba(99,102,241,0.16)]'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-1 h-px rounded-full bg-gradient-to-r from-primary-400 via-cyan-300 to-primary-400" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => handleClick('#contact')}
              className="inline-flex items-center gap-2 rounded-full border border-primary-400/20 bg-primary-500/10 px-4 py-2.5 text-sm font-semibold text-primary-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-500/15"
            >
              Let’s talk
              <ArrowRight size={16} />
            </button>
          </div>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-200 glass transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/25 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[34rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/10 bg-slate-950/90 px-4 py-4 backdrop-blur-2xl lg:hidden">
          <div className="glass space-y-2 rounded-[1.75rem] border border-white/10 p-3">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-500/15 text-white'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.5)]" />}
                </button>
              );
            })}

            <div className="mt-3 grid gap-3 border-t border-white/10 pt-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-primary-400/25 hover:text-white"
              >
                GitHub
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => handleClick('#contact')}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-400"
              >
                Contact Me
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
