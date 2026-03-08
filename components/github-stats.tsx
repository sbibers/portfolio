"use client"

import { useEffect, useState } from "react"
import { Github, GitFork, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GitHubData {
  stars: number
  forks: number
  followers: number
  repos: number
}

export function GitHubStats() {
  const [data, setData] = useState<GitHubData>({ stars: 0, forks: 0, followers: 0, repos: 0 })

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const userRes = await fetch("https://api.github.com/users/sbibers")
        const user = await userRes.json()

        const reposRes = await fetch("https://api.github.com/users/sbibers/repos?per_page=100")
        const repos = await reposRes.json()

        let totalStars = 0
        let totalForks = 0
        if (Array.isArray(repos)) {
          for (const repo of repos) {
            totalStars += repo.stargazers_count || 0
            totalForks += repo.forks_count || 0
          }
        }

        setData({
          stars: totalStars,
          forks: totalForks,
          followers: user.followers || 0,
          repos: user.public_repos || 0,
        })
      } catch {
        // Keep defaults on error
      }
    }
    fetchGitHubData()
  }, [])

  return (
    <section id="github" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            GitHub
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Open Source Contributions
          </h2>

          {/* GitHub Streak */}
          <div className="rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border p-4 mb-8">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=sbibers&theme=transparent&hide_border=true&ring=5eead4&fire=5eead4&currStreakLabel=5eead4&sideLabels=a1a1aa&dates=71717a&currStreakNum=fafafa&sideNums=fafafa"
              alt="GitHub Streak"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center">
              <Star className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{data.stars}</p>
              <p className="text-sm text-muted-foreground">Stars</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center">
              <GitFork className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{data.forks}</p>
              <p className="text-sm text-muted-foreground">Forks</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{data.followers}</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center">
              <Github className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{data.repos}</p>
              <p className="text-sm text-muted-foreground">Repositories</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="gap-2">
              <a href="https://github.com/sbibers" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View Full Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
