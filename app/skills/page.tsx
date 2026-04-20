"use client";

import Container from "@/components/Container";
import { TechStack } from "@/components/TechStack";
import { ViewTransition } from "react";
import SpotlightCard from "@/components/SpotlightCard";
import { VscCode, VscDatabase, VscLayers, VscRocket } from "react-icons/vsc";

const skillsCategories = [
  {
    title: "Frontend Development",
    icon: <VscCode className="h-6 w-6 text-cyan-400" />,
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Motion / Framer", "GSAP Animations", "Responsive UI Design"],
  },
  {
    title: "Backend & Database",
    icon: <VscDatabase className="h-6 w-6 text-cyan-400" />,
    skills: ["Node.js / Express", "Supabase", "PostgreSQL", "MongoDB", "Prisma ORM", "REST / GraphQL APIs"],
  },
  {
    title: "Product & Tools",
    icon: <VscLayers className="h-6 w-6 text-cyan-400" />,
    skills: ["Git / GitHub", "Docker", "Vercel / Netlify", "Figma to Code", "Product Architecture", "Clean Code / Patterns"],
  },
  {
    title: "Delivery & Performance",
    icon: <VscRocket className="h-6 w-6 text-cyan-400" />,
    skills: ["SEO Optimization", "Web Vitals / Lighthouse", "CI/CD Workflows", "Unit Testing", "Performance Profiling", "Documentation"],
  },
];

export default function SkillsPage() {
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
                Competencies
              </p>
              <h1 className="font-[family:var(--font-heading)] text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                Specialized in building fast, scalable, and polished web products.
              </h1>
              <p className="text-lg leading-relaxed text-white/70">
                My technical approach focuses on using the right tool for the job, 
                maintaining high performance, and ensuring code quality that scales. 
                I bridge the gap between complex backend systems and refined frontend experiences.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {skillsCategories.map((category) => (
                <SpotlightCard key={category.title} spotlightColor="rgba(34, 211, 238, 0.15)">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      {category.icon}
                      <h2 className="text-xl font-bold text-white tracking-wide">
                        {category.title}
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60 transition hover:border-cyan-400/30 hover:text-cyan-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            <div className="space-y-8 pt-8">
              <div className="text-center space-y-2">
                <h2 className="font-[family:var(--font-heading)] text-2xl font-semibold text-white/80 uppercase tracking-widest">
                  Core Tech Ticker
                </h2>
                <p className="text-sm text-white/40 uppercase tracking-tighter">Tools I use on a daily basis</p>
              </div>
              <TechStack />
            </div>
          </section>
        </Container>
      </main>
    </ViewTransition>
  );
}
