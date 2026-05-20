import { Github, Linkedin, Mail, Heart, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../utils/constants';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="section-shell border-t border-white/10 bg-surface-950/90 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-frame p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <div>
              <p className="font-mono text-lg font-bold text-primary-300">
                Salam Baybars
              </p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-gray-400">
                Computer Science student and 42 Amman graduate working with C/C++, React, Linux, Docker, and SQL.
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="inline-flex items-center gap-1 text-left text-sm text-gray-400 transition-colors hover:text-primary-300"
                  >
                    <ArrowUpRight size={12} />
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Connect</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
                  { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/25 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs leading-6 text-gray-500">
                Open to internships, project work, and technical roles.
              </p>
            </div>
          </div>

          <div className="section-divider my-8" />

          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-xs text-gray-500">
              Built with <Heart size={12} className="text-red-400" /> using React, TypeScript, and Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
