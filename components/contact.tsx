import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {"Let's Work Together"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            {"I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Feel free to reach out!"}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg" className="gap-2">
              <a href="https://github.com/sbibers" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="https://www.linkedin.com/in/salambaybars/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <a href="mailto:salambaybars@gmail.com">
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Zarqa, Jordan</span>
          </div>
        </div>
      </div>
    </section>
  )
}
