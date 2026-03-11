import { Award, GraduationCap, Code, Trophy } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';
import { PERSONAL_INFO } from '../utils/constants';

const highlights = [
  { icon: GraduationCap, label: 'CS Student', detail: 'University of Islamic Sciences' },
  { icon: Code, label: '42 Amman\nGraduate', detail: 'First team to complete program' },
  { icon: Trophy, label: '23 Skills', detail: 'Full-Stack & Systems' },
  { icon: Award, label: 'Core\nCurriculum', detail: 'Completed all circles' },
];

export default function About() {
  const [ref, visible] = useInView();

  return (
    <SectionWrapper>
      <div id="about" className="scroll-mt-20">
        <SectionHeading
          title="About Me"
          subtitle="A snapshot of my journey in software engineering"
        />

        <div ref={ref} className="grid gap-12 lg:grid-cols-5">
          {/* Text */}
          <div
            className={`lg:col-span-3 space-y-5 text-gray-300 leading-relaxed transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {PERSONAL_INFO.aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Highlights cards */}
          <div
            className={`lg:col-span-2 grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {highlights.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center text-center rounded-2xl border border-white/5 bg-surface-900/60 p-5 gap-3 card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400">
                  <Icon size={24} />
                </div>
                <p className="text-sm font-semibold text-white whitespace-pre-line">{label}</p>
                <p className="text-xs text-gray-500">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
