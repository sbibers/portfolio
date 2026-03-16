import { ExternalLink, Github, Globe, Users, Shield, History, Languages, Palette } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';

const FEATURES = [
  { icon: Users, label: 'Real-time Multiplayer', description: 'Compete with other players in live trivia matches' },
  { icon: Shield, label: 'JWT & Google OAuth', description: 'Secure authentication with multiple sign-in options' },
  { icon: History, label: 'Game History & Friends', description: 'Track your progress and connect with other players' },
  { icon: Languages, label: 'Multilingual', description: 'Arabic (RTL), English, and Chinese language support' },
  { icon: Palette, label: 'Dark / Light Themes', description: 'Seamless theme switching for comfortable use' },
  { icon: Globe, label: 'Live Demo', description: 'Try it out at andary.netlify.app' },
];

const TECH_STACK = ['React', 'Vite', 'Tailwind CSS', 'ASP.NET', 'PostgreSQL', 'Docker', 'Nginx'];

export default function FeaturedProject() {
  const [ref, visible] = useInView(0.1);

  return (
    <SectionWrapper className="bg-surface-950/50">
      <div id="featured" className="scroll-mt-20">
        <SectionHeading
          title="ft_transcendence"
          subtitle="The 42 capstone project, a full-stack real-time multiplayer trivia platform for Tawjihi students"
        />

        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Main card */}
          <div className="rounded-2xl border border-primary-500/20 bg-gradient-to-br from-surface-900/80 to-surface-950/80 p-8 md:p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 border border-primary-500/20 px-3 py-1 text-xs font-medium text-primary-300 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                  42 Capstone Project
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Andary, Tawjihi Trivia Platform</h3>
                <p className="mt-2 text-gray-400 leading-relaxed max-w-2xl">
                  A full-stack real-time multiplayer trivia application designed for Tawjihi students.
                  Features live competitive gameplay, comprehensive user profiles, and full multilingual support
                  including Arabic RTL layout.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href="https://andary.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 hover:bg-primary-500 transition-all"
                >
                  <Globe size={16} />
                  Live Demo
                </a>
                <a
                  href="https://github.com/Tawjihi-Gaming/Andary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-700 px-5 py-2.5 text-sm font-semibold text-gray-300 hover:border-primary-500/50 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Github size={16} />
                  Source Code
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary-500/20 bg-primary-500/5 px-4 py-1.5 text-sm font-medium text-primary-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ icon: Icon, label, description }, i) => (
                <div
                  key={label}
                  className={`rounded-xl border border-white/5 bg-surface-900/50 p-4 transition-all duration-500 hover:border-primary-500/20 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500/10 text-primary-400">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-sm font-semibold text-white">{label}</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
