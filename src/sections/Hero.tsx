import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown,
  Code2,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  TerminalSquare,
  Cpu,
  Database,
  Layers3,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/constants';
import cvFile from '../assets/Salam_Baybars_CV_2026.pdf';

const quickStats = [
  { value: '42', label: 'Amman Graduate' },
  { value: 'CS', label: 'Student' },
  { value: 'Systems', label: '+ Web Focus' },
];

const techOrbs: Array<{ label: string; icon: LucideIcon; x: string; y: string; delay: string }> = [
  { label: 'C / C++', icon: Code2, x: '-11%', y: '24%', delay: '0s' },
  { label: 'React', icon: Globe, x: '72%', y: '-4%', delay: '0.8s' },
  { label: 'Docker', icon: Cpu, x: '74%', y: '91%', delay: '1.6s' },
  { label: 'SQL', icon: Database, x: '-8%', y: '74%', delay: '2.4s' },
];

const stackTags = ['C / C++', 'TypeScript', 'React', 'Linux', 'Docker', 'SQL'];

const profileHighlights = [
  { label: 'Based in', value: PERSONAL_INFO.location },
  { label: 'Status', value: 'Open to internships' },
  { label: 'Builds', value: 'Reliable products' },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 140);
    return () => window.clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const parallaxStyle = useMemo(
    () =>
      ({
        '--mx': `${pointer.x}px`,
        '--my': `${pointer.y}px`,
      }) as React.CSSProperties,
    [pointer]
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-28 md:pt-32"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
        setPointer({ x, y });
      }}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-backdrop absolute inset-0 opacity-90" />
        <div className="hero-grid absolute inset-0 opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_36%)]" />
        <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary-500/14 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-[-6rem] top-[26%] h-72 w-72 rounded-full bg-cyan-400/12 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[-8rem] left-[-4rem] h-96 w-96 rounded-full bg-primary-400/10 blur-[150px] animate-drift" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div
          className={`max-w-3xl transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="section-kicker text-cyan-200/80 reveal-down">Software Engineer Portfolio</p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black text-white text-glow sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
            <span className="block">Salam</span>
            <span className="text-gradient block">Baybars</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 sm:text-xl">
            {PERSONAL_INFO.title}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            {PERSONAL_INFO.bio}
          </p>

          <div
            className={`mt-8 grid max-w-2xl grid-cols-1 gap-3 transition-all duration-700 delay-150 sm:grid-cols-3 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="glass-strong card-highlight rounded-2xl border border-white/10 px-4 py-3 shadow-float"
              >
                <p className="text-lg font-semibold leading-6 text-white">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button
              onClick={() => scrollTo('#projects')}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-500 px-6 py-3.5 font-semibold text-white shadow-[0_18px_45px_rgba(99,102,241,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-400 hover:shadow-[0_24px_60px_rgba(99,102,241,0.38)]"
            >
              View Work
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-gray-200 glass transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:text-white"
            >
              <Mail size={16} />
              Contact Me
            </button>

            <a
              href={cvFile}
              download="Salam_Baybars_CV_2026.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-3.5 font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/15 hover:text-white"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div
            className={`mt-8 flex items-center gap-4 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
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
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-400 glass transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/30 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div
          className={`panel-3d relative mx-auto w-full max-w-[35rem] transition-all duration-700 delay-150 lg:mx-0 ${
            loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
          }`}
          style={parallaxStyle}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-primary-500/10 blur-3xl animate-pulse-glow" />
          <div className="mouse-parallax relative">
            <div className="absolute left-[8%] top-[7%] h-20 w-20 rounded-full border border-white/10 bg-white/5 blur-[1px] animate-float" />
            <div className="absolute right-[12%] bottom-[11%] h-16 w-16 rounded-full border border-cyan-300/20 bg-cyan-300/10 animate-drift" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_34px_110px_rgba(0,0,0,0.5)] glass-strong sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_36%),linear-gradient(135deg,rgba(99,102,241,0.08),rgba(34,211,238,0.05),transparent_60%)]" />
              <div className="absolute inset-0 surface-grid opacity-20" />
              <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5 shadow-inner shadow-black/30 sm:p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-xl font-black text-cyan-100 glow-ring">
                      SB
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Profile</p>
                      <h2 className="mt-2 text-2xl font-bold leading-tight text-white">{PERSONAL_INFO.name}</h2>
                      <p className="mt-1 text-sm leading-6 text-gray-400">Full-stack & systems developer</p>
                    </div>
                  </div>
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-left">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.55)]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
                      Available
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary-400/20 bg-primary-500/15 text-primary-200">
                        <Code2 size={22} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-gray-500">Engineering Focus</p>
                        <p className="mt-1 text-base font-semibold leading-6 text-white">Systems thinking for polished web products</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-gray-400">
                      I build reliable software with C/C++, JavaScript, TypeScript, React, Linux, Docker, and SQL.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-gray-500">Core Stack</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {stackTags.map((item) => (
                        <span
                          key={item}
                          className="inline-flex min-h-9 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 px-3 text-center text-xs font-medium text-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {profileHighlights.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">{item.label}</p>
                      <p className="mt-2 text-sm font-medium leading-6 text-gray-200">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.055] p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">Portfolio Signal</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        Dark glass, measured motion, and a focused engineering story.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-100">
                      <TerminalSquare size={18} />
                      <Layers3 size={18} />
                      <Database size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {techOrbs.map(({ label, icon: Icon, x, y, delay }) => (
              <div
                key={label}
                className="pointer-events-none absolute hidden xl:block"
                style={{
                  left: x,
                  top: y,
                }}
              >
                <div
                  className="group flex items-center gap-2 rounded-full border border-cyan-300/15 bg-slate-950/80 px-3 py-2 shadow-[0_18px_45px_rgba(0,0,0,0.32)] backdrop-blur-xl animate-float-slow"
                  style={{ animationDelay: delay }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200">
                    <Icon size={16} />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-200">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-500 transition-colors hover:text-gray-300"
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 bg-white/5 p-1">
          <span className="h-2 w-1 rounded-full bg-primary-400 animate-bounce" />
        </span>
      </button>
    </section>
  );
}
