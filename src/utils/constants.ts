import type { NavLink, SkillCategory, TechItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Salam Baybars',
  firstName: 'Salam',
  title: 'CS Student • 42 Amman Graduate • Full-Stack & Systems Developer',
  email: 'salambaybars@gmail.com',
  github: 'https://github.com/sbibers',
  githubUsername: 'sbibers',
  linkedin: 'https://www.linkedin.com/in/salambaybars/',
  location: 'Zarqa, Jordan',
  cvUrl: '/Salam-Baybars-CV.pdf',
  bio: `Computer Science student and 42 Amman graduate focused on systems programming, full-stack development, and clean, reliable software.`,
  aboutParagraphs: [
    `I’m a Computer Science student and 42 Amman graduate with a strong foundation in systems programming, web development, and problem solving.`,
    `I build with C/C++, JavaScript, TypeScript, React, Linux, Docker, and SQL, and I enjoy turning complex technical ideas into polished products.`,
  ],
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'ft_transcendence', href: '#featured' },
  { label: 'Projects', href: '#projects' },
  { label: '42 Graph', href: '#holygraph' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'C', level: 95 },
      { name: 'C++', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Java', level: 70 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    title: 'Web & Frameworks',
    icon: 'Globe',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Vite', level: 80 },
      { name: 'HTML / CSS', level: 85 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'MariaDB', level: 70 },
    ],
  },
  {
    title: 'Systems & Tools',
    icon: 'Terminal',
    skills: [
      { name: 'Linux', level: 90 },
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Docker Compose', level: 80 },
      { name: 'Bash', level: 85 },
      { name: 'Makefile', level: 85 },
      { name: 'Nginx', level: 75 },
    ],
  },
];

export const PERSONAL_PROJECTS = [
  {
    title: 'Multi-Pass Caesar Cipher',
    description:
      'A layered C++ encryption tool that applies several transformations to make classical Caesar-style cracking significantly harder. Includes file I/O and automated output naming.',
    technologies: ['C++', 'Cryptography', 'File I/O'],
    github: 'https://github.com/sbibers/multi-pass-caesar-cipher',
  },
  {
    title: 'World Clock App',
    description:
      'A lightweight productivity app with a world clock, stopwatch, countdown timer, and session history, built with vanilla JavaScript and zero dependencies.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Intl API', 'localStorage'],
    github: 'https://github.com/sbibers/world-clock-app',
    live: 'https://sbibers.github.io/world-clock-app/',
  },
  {
    title: 'My Mini Server',
    description:
      'A multi-client TCP chat server in C using select(2), with broadcast messaging, join/leave notices, buffered reads, and graceful shutdown handling.',
    technologies: ['C', 'TCP/IP', 'select(2)', 'POSIX'],
    github: 'https://github.com/sbibers/my_mini_server',
  },
];

export const FEATURED_PROJECTS = [
  {
    title: 'Inception',
    description:
      'Docker infrastructure project building a secure multi-service stack with Docker Compose, Nginx, WordPress, and MariaDB.',
    technologies: ['Docker', 'Docker Compose', 'Nginx', 'WordPress', 'MariaDB'],
    github: 'https://github.com/sbibers/inception',
  },
  {
    title: 'Minishell',
    description:
      'A custom Unix shell in C with pipes, redirections, environment variables, built-ins, and signal handling.',
    technologies: ['C', 'Unix', 'Bash'],
    github: 'https://github.com/sbibers/minishell',
  },
  {
    title: 'Push Swap',
    description:
      'Sorting optimization challenge focused on minimizing stack operations with efficient algorithmic strategies.',
    technologies: ['C', 'Algorithms', 'Sorting'],
    github: 'https://github.com/sbibers/push_swap',
  },
  {
    title: 'Cub3D',
    description:
      'A 3D raycasting engine inspired by Wolfenstein 3D, rendering a maze from a 2D map using MiniLibX.',
    technologies: ['C', 'Raycasting', 'MiniLibX'],
    github: 'https://github.com/sbibers/cub3d',
  },
  {
    title: 'CPP Modules (00–09)',
    description:
      'A broad set of C++ projects covering OOP, templates, STL, Bitcoin Exchange, RPN Calculator, and Merge-Insert Sort.',
    technologies: ['C++', 'OOP', 'STL', 'Templates'],
    github: 'https://github.com/sbibers/CPP_modules_42',
  },
  {
    title: 'Libft',
    description:
      'A custom C library reimplementing standard functions, ft_printf, and get_next_line—the base of all 42 projects.',
    technologies: ['C', 'Makefile', 'Library'],
    github: 'https://github.com/sbibers/libft',
  },
];

// ── Icon-grid tech items (matching screenshot design) ──────────
const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const TECH_ITEMS: TechItem[] = [
  // Languages
  { name: 'C',          iconUrl: '/c-logo.svg',                                    category: 'Languages' },
  { name: 'C++',        iconUrl: `${DI}/cplusplus/cplusplus-original.svg`,          category: 'Languages' },
  { name: 'JavaScript', iconUrl: `${DI}/javascript/javascript-original.svg`,        category: 'Languages' },
  { name: 'TypeScript', iconUrl: `${DI}/typescript/typescript-original.svg`,        category: 'Languages' },
  { name: 'Java',       iconUrl: `${DI}/java/java-original.svg`,                   category: 'Languages' },
  { name: 'SQL',        iconUrl: `${DI}/azuresqldatabase/azuresqldatabase-original.svg`, category: 'Languages' },

  // Systems & Tools
  { name: 'Linux',      iconUrl: `${DI}/linux/linux-original.svg`,                 category: 'Systems & Unix' },
  { name: 'Git',        iconUrl: `${DI}/git/git-original.svg`,                     category: 'Systems & Unix' },
  { name: 'Docker',     iconUrl: `${DI}/docker/docker-original.svg`,               category: 'Systems & Unix' },
  { name: 'Bash',       iconUrl: `${DI}/bash/bash-original.svg`,                   category: 'Systems & Unix' },
  { name: 'Nginx',      iconUrl: `${DI}/nginx/nginx-original.svg`,                 category: 'Systems & Unix' },

  // Tools & Frameworks
  { name: 'React',      iconUrl: `${DI}/react/react-original.svg`,                 category: 'Tools & Frameworks' },
  { name: 'Vite',       iconUrl: `${DI}/vitejs/vitejs-original.svg`,               category: 'Tools & Frameworks' },
  { name: 'Tailwind',   iconUrl: `${DI}/tailwindcss/tailwindcss-original.svg`,     category: 'Tools & Frameworks' },
  { name: 'HTML5',      iconUrl: `${DI}/html5/html5-original.svg`,                 category: 'Tools & Frameworks' },
  { name: 'CSS3',       iconUrl: `${DI}/css3/css3-original.svg`,                   category: 'Tools & Frameworks' },

  // Databases
  { name: 'PostgreSQL', iconUrl: `${DI}/postgresql/postgresql-original.svg`,        category: 'Databases' },
  { name: 'MySQL',      iconUrl: `${DI}/mysql/mysql-original.svg`,                 category: 'Databases' },
  { name: 'MariaDB',    iconUrl: `${DI}/mariadb/mariadb-original.svg`,             category: 'Databases' },
];

export const TECH_CATEGORIES = ['All', 'Languages', 'Systems & Unix', 'Tools & Frameworks', 'Databases'] as const;

export type TechCategory = typeof TECH_CATEGORIES[number];



export const CERTIFICATIONS = [
  {
    title: 'Shadow Code Competition',
    issuer: '42 Amman',
    date: '2024',
    highlight: '1st Place',
  },
  {
    title: 'Foundational C# with Microsoft',
    issuer: 'freeCodeCamp × Microsoft',
    date: '2024',
    link: '',
  },
  {
    title: 'Foundations of Programming',
    issuer: 'ProgrammingAdvices',
    date: '2023',
  },
  {
    title: 'Database Level 1, SQL Concepts & Practices',
    issuer: 'ProgrammingAdvices',
    date: '2023',
  },
  {
    title: 'Algorithms & Problem Solving Level 1',
    issuer: 'ProgrammingAdvices',
    date: '2023',
  },
  {
    title: 'OOP, Object-Oriented Programming',
    issuer: 'ProgrammingAdvices',
    date: '2024',
  },
  {
    title: 'Data Structures Level 1',
    issuer: 'ProgrammingAdvices',
    date: '2024',
  },
];

export const LANGUAGE_COLORS: Record<string, string> = {
  C: '#555555',
  'C++': '#f34b7d',
  Python: '#3572a5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Makefile: '#427819',
  Dockerfile: '#384d54',
  Vim: '#199f4b',
};
