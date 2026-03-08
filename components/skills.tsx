"use client"

import { useState } from "react"

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "C", icon: "C" },
      { name: "C++", icon: "C++" },
      { name: "JavaScript", icon: "JS" },
      { name: "TypeScript", icon: "TS" },
      { name: "Java", icon: "Java" },
      { name: "SQL", icon: "SQL" },
    ],
  },
  {
    name: "Web & Frameworks",
    skills: [
      { name: "React", icon: "React" },
      { name: "Next.js", icon: "Next" },
      { name: "Vite", icon: "Vite" },
      { name: "ASP.NET", icon: ".NET" },
      { name: "HTML", icon: "HTML" },
      { name: "CSS", icon: "CSS" },
      { name: "Tailwind", icon: "TW" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "PSQL" },
      { name: "MySQL", icon: "MySQL" },
      { name: "MariaDB", icon: "MDB" },
    ],
  },
  {
    name: "Systems & Tools",
    skills: [
      { name: "Linux", icon: "Linux" },
      { name: "Git", icon: "Git" },
      { name: "Docker", icon: "Docker" },
      { name: "Docker Compose", icon: "DC" },
      { name: "Bash", icon: "Bash" },
      { name: "Makefile", icon: "Make" },
      { name: "Nginx", icon: "Nginx" },
    ],
  },
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("Languages")

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Technologies I Work With
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ${
                activeCategory === category.name ? "block" : "hidden"
              }`}
            >
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-card transition-all cursor-default"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-mono font-bold text-sm">
                      {skill.icon}
                    </span>
                  </div>
                  <h3 className="text-foreground font-medium">{skill.name}</h3>
                </div>
              ))}
            </div>
          ))}

          {/* All Skills Summary */}
          <div className="mt-12 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
            <h3 className="text-foreground font-semibold mb-4">All Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skillCategories.flatMap((cat) => cat.skills).map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
