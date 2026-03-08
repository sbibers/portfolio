import { GraduationCap, Code2, Trophy } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            My Journey
          </h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I completed the Core Curriculum at <span className="text-foreground font-medium">42 Amman</span> as 
              part of the <span className="text-primary font-medium">first team in the history of the campus</span> to 
              finish the program. The experience was intense and deeply practical, focusing on low-level programming, 
              algorithms, memory management, and building complete systems through peer-to-peer learning.
            </p>
            
            <p>
              As a Computer Science student at the University of Islamic Sciences, I combine academic knowledge 
              with hands-on software engineering experience from 42&apos;s project-based learning approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors">
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-foreground font-semibold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                CS Student at University of Islamic Sciences & 42 Amman Graduate
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors">
              <Code2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-foreground font-semibold mb-2">Specialization</h3>
              <p className="text-sm text-muted-foreground">
                Systems Programming, Networking, Algorithms, Backend & Frontend Development
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors">
              <Trophy className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-foreground font-semibold mb-2">Achievement</h3>
              <p className="text-sm text-muted-foreground">
                First team to complete 42 Amman Core Curriculum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
