"use client";

import Container from "@/components/Container";
import { ViewTransition } from "react";
import SpotlightCard from "@/components/SpotlightCard";
import { VscBriefcase, VscMortarBoard, VscOrganization } from "react-icons/vsc";

const experiences = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2023 - Present",
    description: "Building custom web applications, portfolio sites, and internal tools for various clients using Next.js and Supabase.",
    highlights: ["Delivered 10+ production-ready projects", "Optimized performance for high-traffic sites", "Implemented complex UI/UX designs"],
    icon: <VscBriefcase className="h-6 w-6 text-cyan-400" />,
  },
  {
    company: "Open Source Contributor",
    role: "Core Contributor",
    period: "2022 - 2023",
    description: "Contributed to various React and Next.js based open-source projects, focusing on UI components and performance.",
    highlights: ["Merged 50+ PRs in major repositories", "Improved documentation for component libraries", "Fixed critical performance bugs"],
    icon: <VscOrganization className="h-6 w-6 text-cyan-400" />,
  },
  {
    company: "University of Computer Science",
    role: "Student / Junior Developer",
    period: "2020 - 2023",
    description: "Started the journey into software development, focusing on web technologies and software engineering principles.",
    highlights: ["Led the university web development club", "Built internal management system for students", "Won regional hackathon competition"],
    icon: <VscMortarBoard className="h-6 w-6 text-cyan-400" />,
  },
];

export default function ExperiencesPage() {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-in" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-out" }}
      default="none"
    >
      <main className="pt-10 pb-32">
        <Container>
          <section className="space-y-16">
            <div className="max-w-3xl space-y-6">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                Journey
              </p>
              <h1 className="font-[family:var(--font-heading)] text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                My professional path and key milestones.
              </h1>
              <p className="text-lg leading-relaxed text-white/70">
                A timeline of where I've been and what I've built. Each step has been 
                an opportunity to learn new technologies and refine my approach to 
                building digital products.
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <SpotlightCard key={idx} spotlightColor="rgba(34, 211, 238, 0.1)">
                  <div className="grid gap-8 md:grid-cols-[auto_1fr]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      {exp.icon}
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
                          <p className="text-cyan-400 font-medium">{exp.company}</p>
                        </div>
                        <span className="rounded-full border border-white/5 bg-white/5 px-4 py-1 text-xs font-medium text-white/40">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-base text-white/60 leading-relaxed max-w-2xl">
                        {exp.description}
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2 text-sm text-white/40">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/40" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </section>
        </Container>
      </main>
    </ViewTransition>
  );
}
