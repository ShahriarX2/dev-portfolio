"use client";

import Container from "@/components/Container";
import { ViewTransition } from "react";
import SpotlightCard from "@/components/SpotlightCard";
import { SiGithub } from "react-icons/si";
import { VscRepo, VscStarFull, VscRepoForked, VscCode } from "react-icons/vsc";
import { motion } from "motion/react";

const GITHUB_STATS = [
  { label: "Total Contributions", value: "1,284", icon: <VscRepo className="h-4 w-4" /> },
  { label: "Stars Received", value: "432", icon: <VscStarFull className="h-4 w-4" /> },
  { label: "Repositories", value: "48", icon: <VscRepoForked className="h-4 w-4" /> },
  { label: "Public Gists", value: "12", icon: <VscCode className="h-4 w-4" /> },
];

const FEATURED_REPOS = [
  {
    name: "next-view-transitions",
    description: "A lightweight library for smooth route transitions in Next.js using the View Transition API.",
    language: "TypeScript",
    stars: 156,
    forks: 24,
    link: "https://github.com/shahriarx2/next-view-transitions",
  },
  {
    name: "react-bento-grid",
    description: "Customizable and responsive bento grid components for modern portfolio sites.",
    language: "React",
    stars: 89,
    forks: 12,
    link: "https://github.com/shahriarx2/react-bento-grid",
  },
  {
    name: "supabase-auth-terminal",
    description: "A terminal-style authentication flow powered by Supabase and Framer Motion.",
    language: "TypeScript",
    stars: 64,
    forks: 8,
    link: "https://github.com/shahriarx2/supabase-auth-terminal",
  },
];

// Mock Contribution Calendar
const DAYS = 365;
const contributionData = Array.from({ length: DAYS }, () => Math.floor(Math.random() * 5));

export default function GithubPage() {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-in" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-out" }}
      default="none"
    >
      <main className="pt-10 pb-32">
        <Container>
          <section className="space-y-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                  Open Source
                </p>
                <h1 className="font-[family:var(--font-heading)] text-4xl font-semibold text-white sm:text-5xl lg:text-6xl text-balance">
                  Code as a craft. <br /> Explore my GitHub activity.
                </h1>
              </div>
              <a 
                href="https://github.com/shahriarx2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex h-fit w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/10"
              >
                <SiGithub className="h-5 w-5 transition-transform group-hover:scale-110" />
                Follow on GitHub
              </a>
            </div>

            {/* Contribution Calendar Mockup */}
            <SpotlightCard spotlightColor="rgba(34, 211, 238, 0.08)">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold tracking-widest text-white/40 uppercase">Contribution Graph</h2>
                  <span className="text-[10px] text-white/20 uppercase tracking-tighter">Last 12 Months</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {contributionData.map((level, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.001 }}
                      className="h-2 w-2 rounded-sm"
                      style={{ 
                        backgroundColor: 
                          level === 0 ? "rgba(255,255,255,0.05)" :
                          level === 1 ? "rgba(34, 211, 238, 0.2)" :
                          level === 2 ? "rgba(34, 211, 238, 0.4)" :
                          level === 3 ? "rgba(34, 211, 238, 0.7)" :
                          "rgba(34, 211, 238, 1)"
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/20">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map(l => (
                      <div key={l} className="h-2 w-2 rounded-sm" style={{ 
                        backgroundColor: 
                          l === 0 ? "rgba(255,255,255,0.05)" :
                          l === 1 ? "rgba(34, 211, 238, 0.2)" :
                          l === 2 ? "rgba(34, 211, 238, 0.4)" :
                          l === 3 ? "rgba(34, 211, 238, 0.7)" :
                          "rgba(34, 211, 238, 1)"
                      }} />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </SpotlightCard>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {GITHUB_STATS.map((stat) => (
                <SpotlightCard key={stat.label} className="py-6" spotlightColor="rgba(34, 211, 238, 0.1)">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="text-cyan-400/40">{stat.icon}</div>
                    <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/30">{stat.label}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-wide">Featured Repositories</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {FEATURED_REPOS.map((repo) => (
                  <SpotlightCard key={repo.name} spotlightColor="rgba(34, 211, 238, 0.15)">
                    <div className="flex h-full flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <VscRepo className="h-4 w-4 text-cyan-400" />
                          <h3 className="font-bold text-white truncate">{repo.name}</h3>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                          {repo.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/40">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-cyan-400" />
                            {repo.language}
                          </span>
                          <span className="flex items-center gap-1">
                            <VscStarFull className="h-3 w-3" />
                            {repo.stars}
                          </span>
                        </div>
                        <a 
                          href={repo.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-cyan-400 transition-colors"
                        >
                          [ VIEW ]
                        </a>
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </main>
    </ViewTransition>
  );
}
