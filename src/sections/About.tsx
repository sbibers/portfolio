import { Award, GraduationCap, Code2, Cpu, LayoutGrid, ArrowRight } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';
import { PERSONAL_INFO } from '../utils/constants';

const milestones = [
  { icon: GraduationCap, label: 'Computer Science Student', detail: 'Building strong fundamentals in software and systems' },
  { icon: Award, label: '42 Amman Graduate', detail: 'Project-driven learning, collaboration, and problem solving' },
  { icon: Code2, label: 'Core Stack', detail: 'C / C++, JavaScript, TypeScript, React, Linux, Docker, SQL' },
];

const focusAreas = [
  {
    icon: Cpu,
    title: 'Systems-first mindset',
    text: 'I care about reliability, performance, and clear architecture.',
  },
  {
    icon: LayoutGrid,
    title: 'Polished product delivery',
    text: 'I like interfaces that feel premium, focused, and intentional.',
  },
];

export default function About() {
  const [ref, visible] = useInView();

  return (
    <SectionWrapper className="section-shell">
      <div id="about" className="scroll-mt-24">
        <SectionHeading
          kicker="01 / About"
          title="A focused builder with systems depth"
          subtitle="Short, direct, and professional — the way a premium portfolio should feel."
        />

        <div
          ref={ref}
          className={`grid gap-6 lg:grid-cols-[1.05fr_0.95fr] transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-frame p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="section-kicker">Profile</span>
              <span className="h-px flex-1 bg-white/10" />
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
                CS Student • 42 Graduate
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              {PERSONAL_INFO.aboutParagraphs[0]}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-400">
              {PERSONAL_INFO.aboutParagraphs[1]}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {focusAreas.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="tilt-card card-highlight rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-primary-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">{text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/25 hover:text-white"
            >
              See my skills
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid gap-4">
            {milestones.map(({ icon: Icon, label, detail }, index) => (
              <div
                key={label}
                className="section-frame card-highlight p-5 md:p-6"
                style={{ transform: `translateY(${index % 2 === 0 ? '0' : '10px'})` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary-300 shadow-[0_16px_35px_rgba(0,0,0,0.22)]">
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.28em] text-gray-500">Milestone</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{label}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-400">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
