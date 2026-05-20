import { useMemo, useState } from 'react';
import { Code2, Database, Globe, Terminal, Layers3, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';
import { TECH_CATEGORIES, TECH_ITEMS } from '../utils/constants';
import type { TechCategory } from '../utils/constants';

const CATEGORY_ICONS: Record<TechCategory, LucideIcon | undefined> = {
  All: Sparkles,
  Languages: Code2,
  'Systems & Unix': Terminal,
  'Tools & Frameworks': Globe,
  Databases: Database,
};

function TechCard({
  name,
  iconUrl,
  index,
  visible,
}: {
  name: string;
  iconUrl: string;
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className={`tilt-card card-highlight group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${Math.min(index * 35, 420)}ms` }}
    >
      <div className="relative flex flex-col items-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]">
          <img src={iconUrl} alt={name} className="h-full w-full object-contain" loading="lazy" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white transition-colors group-hover:text-cyan-100">
            {name}
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-gray-500">
            Used in projects
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryChip({
  active,
  label,
  onClick,
  icon: Icon,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  icon?: LucideIcon;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
        active
          ? 'border-primary-400/40 bg-primary-500/15 text-primary-100 shadow-[0_16px_35px_rgba(99,102,241,0.2)]'
          : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white'
      }`}
    >
      {Icon && <Icon size={14} className="transition-transform duration-300 group-hover:scale-110" />}
      {label}
    </button>
  );
}

export default function Skills() {
  const [active, setActive] = useState<TechCategory>('All');
  const [ref, visible] = useInView(0.05);

  const filtered = useMemo(
    () => (active === 'All' ? TECH_ITEMS : TECH_ITEMS.filter((item) => item.category === active)),
    [active]
  );

  const categoryCounts = useMemo(
    () =>
      TECH_CATEGORIES.reduce<Record<string, number>>((acc, category) => {
        acc[category] =
          category === 'All'
            ? TECH_ITEMS.length
            : TECH_ITEMS.filter((item) => item.category === category).length;
        return acc;
      }, {}),
    []
  );

  return (
    <SectionWrapper className="section-shell">
      <div id="skills" className="scroll-mt-24">
        <SectionHeading
          kicker="02 / Skills"
          title="Skills"
          subtitle="Languages, tools, and platforms I use in projects, coursework, and 42 work."
        />

        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-8 flex flex-wrap gap-2">
            {TECH_CATEGORIES.map((category) => (
              <CategoryChip
                key={category}
                active={active === category}
                label={`${category} (${categoryCounts[category]})`}
                onClick={() => setActive(category)}
                icon={CATEGORY_ICONS[category]}
              />
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((tech, index) => (
              <TechCard
                key={tech.name}
                name={tech.name}
                iconUrl={tech.iconUrl}
                index={index}
                visible={visible}
              />
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { label: 'Low-level', value: 'C / C++', text: 'Memory, processes, algorithms, and Unix-style programs' },
              { label: 'Frontend', value: 'React / TS', text: 'Interfaces built with React, TypeScript, and Tailwind' },
              { label: 'DevOps', value: 'Docker / Linux', text: 'Local environments, containers, and deployment basics' },
            ].map((item) => (
              <div
                key={item.label}
                className="section-frame card-highlight p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="section-frame mt-10 p-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Layers3 size={16} className="text-cyan-300" />
              Current focus
            </div>
            <div className="mt-5 grid gap-4">
              {[
                { label: 'Systems programming', detail: 'C, C++, Unix, memory, and process control', level: 92 },
                { label: 'Frontend development', detail: 'React, TypeScript, responsive UI, and state management', level: 85 },
                { label: 'Backend & databases', detail: 'APIs, SQL, Dockerized services, and deployment basics', level: 80 },
              ].map((skill, index) => (
                <div key={skill.label} className="space-y-2">
                  <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-gray-300">{skill.label}</span>
                    <span className="text-xs leading-5 text-gray-500 sm:text-right">{skill.detail}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-900/90">
                    <div
                      className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-cyan-400"
                      style={{
                        width: visible ? `${skill.level}%` : '0%',
                        animationDelay: `${index * 120}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
