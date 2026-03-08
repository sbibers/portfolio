"use client"

import { ExternalLink, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    name: "ft_transcendence",
    description:
      "A full-stack real-time multiplayer trivia platform designed to help Tawjihi students study in a fun and interactive way.",
    features: [
      "Real-time multiplayer gameplay",
      "Public and private game rooms with invitation codes",
      "Authentication with JWT, refresh tokens, and Google OAuth",
      "Friend system with online status",
      "Game history with ranking and pagination",
      "Multilingual support (Arabic RTL, English, Chinese)",
      "Dark and light themes",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "ASP.NET", "PostgreSQL", "Docker", "Nginx"],
    featured: true,
  },
  {
    name: "VanillaShop",
    description:
      "A modern, responsive e-commerce platform built with vanilla JavaScript featuring a clean storefront with full shopping cart functionality and order management.",
    tech: ["HTML5", "CSS3", "JavaScript", "Day.js"],
    url: "https://github.com/sbibers/VanillaShop",
    featured: false,
  },
  {
    name: "LMS Database",
    description:
      "A comprehensive MySQL database schema for modern e-learning platforms with 17 tables covering user management, course systems, assessments, certificates, and analytics.",
    tech: ["MySQL", "SQL", "Database Design"],
    url: "https://github.com/sbibers/learning-management-system-db",
    featured: false,
  },
  {
    name: "Inception",
    description:
      "A Docker infrastructure project that sets up a secure multi-service environment using containers.",
    tech: ["Docker", "Docker Compose", "Nginx", "WordPress", "MariaDB"],
    url: "https://github.com/sbibers/inception",
    featured: false,
  },
  {
    name: "Minishell",
    description:
      "A Unix shell implementation built in C that supports pipes, redirections, environment variables, and built-in commands.",
    tech: ["C", "Unix", "Bash"],
    url: "https://github.com/sbibers/minishell",
    featured: false,
  },
  {
    name: "Push Swap",
    description:
      "An algorithm optimization project focused on sorting stacks using the minimum number of operations.",
    tech: ["C", "Algorithms", "Sorting"],
    url: "https://github.com/sbibers/push_swap",
    featured: false,
  },
  {
    name: "Cub3D",
    description:
      "A 3D graphics engine inspired by Wolfenstein built using raycasting and MiniLibX.",
    tech: ["C", "Raycasting", "MiniLibX"],
    url: "https://github.com/sbibers/cub3d",
    featured: false,
  },
  {
    name: "CPP Modules",
    description:
      "Complete C++ module series (CPP00–CPP09) from the 42 Cursus covering OOP, templates, STL containers, algorithms, and real-world applications like Bitcoin Exchange, RPN Calculator, and Merge-Insert Sort.",
    tech: ["C++", "OOP", "STL", "Templates"],
    url: "https://github.com/sbibers/CPP_modules_42",
    featured: false,
  },
  {
    name: "Libft",
    description:
      "42 school's first project — a custom C library reimplementing standard functions from scratch, including get_next_line and ft_printf. Covers string, memory, and linked list manipulation.",
    tech: ["C", "Makefile", "Library"],
    url: "https://github.com/sbibers/libft",
    featured: false,
  },
]

export function Projects() {
  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Featured Work
          </h2>

          {/* Featured Project */}
          {featuredProject && (
            <div className="mb-16 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="text-primary text-sm font-medium">Final 42 Core Project</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {featuredProject.name}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredProject.description}
              </p>

              {featuredProject.features && (
                <div className="mb-6">
                  <h4 className="text-foreground font-medium mb-3">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {featuredProject.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button asChild size="sm" className="gap-2">
                  <a href="https://andary.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="gap-2">
                  <a href="https://github.com/Tawjihi-Gaming/Andary" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          )}

          {/* Other Projects Grid */}
          <h3 className="text-xl font-semibold text-foreground mb-6">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.name}
                className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h4>
                  <a 
                    href={project.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
