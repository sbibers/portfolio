import { useEffect, useState } from 'react';
import { ExternalLink, Github, Star, GitFork, Loader2, Sparkles, Layers3, ArrowRight } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';
import { fetchGitHubRepos } from '../utils/github';
import { FEATURED_PROJECTS, PERSONAL_PROJECTS, LANGUAGE_COLORS } from '../utils/constants';
import type { GitHubRepo } from '../types';

function ProjectCard({
  title,
  description,
  technologies,
  github,
  live,
  index,
  accent = 'primary',
}: {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  index: number;
  accent?: 'primary' | 'cyan';
}) {
  const [ref, visible] = useInView(0.08);

  const accentClass =
    accent === 'cyan'
      ? 'from-cyan-400/20 via-cyan-400/10 to-transparent'
      : 'from-primary-500/20 via-primary-500/10 to-transparent';

  return (
    <article
      ref={ref}
      className={`tilt-card card-highlight group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accentClass} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
      <div className="relative">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-gray-400">
            <Sparkles size={12} className={accent === 'cyan' ? 'text-cyan-300' : 'text-primary-300'} />
            Project
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-primary-300 shadow-[0_16px_35px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
            <Layers3 size={18} />
          </span>
        </div>

        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-gray-400">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium text-gray-300 transition-all duration-300 group-hover:border-primary-400/20 group-hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/30 hover:text-white"
          >
            <Github size={16} />
            View Code
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(99,102,241,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-400"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  const color = LANGUAGE_COLORS[repo.language ?? ''] ?? '#6b7280';

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="tilt-card card-highlight group rounded-[1.4rem] border border-white/10 bg-white/5 p-5 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h4 className="truncate text-base font-semibold text-white transition-colors group-hover:text-primary-200">
            {repo.name}
          </h4>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-400">
            {repo.description || 'No description provided.'}
          </p>
        </div>
        <ExternalLink size={14} className="mt-1 shrink-0 text-gray-600 transition-colors group-hover:text-primary-300" />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-gray-500">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
            {repo.language}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5">
          <Star size={12} />
          {repo.stargazers_count}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <GitFork size={12} />
          {repo.forks_count}
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [ref, visible] = useInView(0.08);

  useEffect(() => {
    fetchGitHubRepos()
      .then((r) => setRepos(r.slice(0, 6)))
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SectionWrapper className="section-shell">
      <div id="projects" className="scroll-mt-24">
        <SectionHeading
          kicker="03 / Projects"
          title="Selected projects"
          subtitle="A few projects that show my work across C/C++, web apps, infrastructure, and 42 coursework."
        />

        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-8 grid gap-6 lg:grid-cols-2">
            {PERSONAL_PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                accent={index % 2 === 0 ? 'primary' : 'cyan'}
              />
            ))}
          </div>

          <div className="mb-10 grid gap-6 lg:grid-cols-2">
            {FEATURED_PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                accent={index % 2 === 0 ? 'cyan' : 'primary'}
              />
            ))}
          </div>

          <div className="section-frame p-6 md:p-8">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-kicker">GitHub</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Recent repositories</h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-400">
                  Recent public repositories with language and activity details.
                </p>
              </div>
              <a
                href="https://github.com/sbibers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/25 hover:text-white"
              >
                <Github size={16} />
                View profile
                <ArrowRight size={16} />
              </a>
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary-300" />
              </div>
            ) : repos.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {repos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-center text-sm text-gray-400">
                Could not load repositories right now. Open my GitHub profile directly.
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
