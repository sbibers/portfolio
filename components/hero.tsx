"use client"

import { Github, Linkedin, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4 animate-fade-in">
            Welcome to my portfolio
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance">
            Salam Baybars
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Systems Programmer & Software Developer
          </p>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Computer Science student and 42 Amman graduate specializing in systems programming, 
            networking, algorithms, backend development, and modern web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
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
            <Button variant="secondary" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </div>

          <a 
            href="#about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
