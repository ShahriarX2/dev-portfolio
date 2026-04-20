"use client";

import Container from "@/components/Container";
import { ViewTransition } from "react";
import SpotlightCard from "@/components/SpotlightCard";
import { 
  VscComment, 
  VscFile, 
  VscTerminal, 
  VscBook, 
  VscScreenFull,
  VscCheckAll,
  VscSymbolInterface,
  VscPulse
} from "react-icons/vsc";
import { Magnetic } from "@/components/ui/Magnetic";

const profileStats = [
  { label: "Base", value: "Bangladesh" },
  { label: "Focus", value: "Next.js + UI systems" },
  { label: "Work Style", value: "Freelance / Product Builds" },
];

const principles = [
  {
    title: "Performance First",
    description: "Speed is not an afterthought; it's a core feature. I build for 100/100 Lighthouse scores.",
    icon: <VscPulse className="h-5 w-5 text-cyan-400" />,
  },
  {
    title: "Clarity over Cleverness",
    description: "I write code that my future self (and your team) can read without a manual.",
    icon: <VscSymbolInterface className="h-5 w-5 text-cyan-400" />,
  },
  {
    title: "Practical Polish",
    description: "Aesthetic details matter, but only if they don't get in the way of the user's mission.",
    icon: <VscCheckAll className="h-5 w-5 text-cyan-400" />,
  },
];

const testimonials = [
  {
    quote: "Shahriar doesn't just write code; he thinks through the product logic. His builds are robust and ready for real users.",
    author: "CTO @ Swadesh Chitra",
  },
  {
    quote: "The fastest delivery I've seen without compromising on polish. A rare find in the freelance market.",
    author: "Founder @ TechFlow",
  },
];

export default function ProfilePage() {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-in" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-out" }}
      default="none"
    >
      <main className="pt-10 pb-32">
        <Container>
          <section className="space-y-16">
            {/* Hero / Intro */}
            <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-12">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                  Profile
                </p>
                <h1 className="font-[family:var(--font-heading)] text-4xl font-semibold text-white sm:text-5xl lg:text-6xl text-balance">
                  The human behind <br /> the terminal.
                </h1>
                <div className="space-y-4 text-base leading-relaxed text-white/70 sm:text-lg">
                  <p>
                    I’m a developer who believes that software should be invisible—so fast and 
                    intuitive that the user never has to stop and think about it. 
                  </p>
                  <p className="text-white/50">
                    When I’m not pushing commits, I’m usually exploring minimalist architecture, 
                    tweaking my developer setup, or drinking way too much coffee while 
                    reading about frontend performance.
                  </p>
                </div>
                
                <div className="pt-4">
                  <Magnetic strength={0.2}>
                    <button className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-300">
                      <VscFile className="h-4 w-4" />
                      Download Resume
                    </button>
                  </Magnetic>
                </div>
              </div>

              <div className="grid h-fit gap-4">
                {profileStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-cyan-400/30"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                      {item.label}
                    </p>
                    <p className="mt-4 text-xl font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Principles */}
            <div className="space-y-8">
              <h2 className="text-center font-[family:var(--font-heading)] text-2xl font-semibold text-white/80 uppercase tracking-[0.3em]">
                Work Philosophy
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {principles.map((p) => (
                  <SpotlightCard key={p.title} spotlightColor="rgba(34, 211, 238, 0.1)">
                    <div className="space-y-4 p-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 border border-cyan-400/20">
                        {p.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white">{p.title}</h3>
                      <p className="text-sm leading-relaxed text-white/50">
                        {p.description}
                      </p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            {/* Now & Beyond */}
            <div className="grid gap-8 lg:grid-cols-2">
              <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.05)">
                <div className="space-y-6">
                  <h3 className="text-sm font-bold tracking-[0.3em] text-white/30 uppercase">The "Now" Section</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-white/70">
                      <VscBook className="h-5 w-5 text-cyan-400/60" />
                      <span className="text-sm italic">Reading: "Refactoring" by Martin Fowler</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/70">
                      <VscPulse className="h-5 w-5 text-cyan-400/60" />
                      <span className="text-sm">Learning: Three.js & Shader Language</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/70">
                      <VscScreenFull className="h-5 w-5 text-cyan-400/60" />
                      <span className="text-sm">Setup: MacBook Pro (M2) + 27" Studio Display</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/70">
                      <VscTerminal className="h-5 w-5 text-cyan-400/60" />
                      <span className="text-sm">Current Fuel: Ethiopian Yirgacheffe</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-[0.3em] text-white/30 uppercase pl-4">What people say</h3>
                <div className="space-y-4">
                  {testimonials.map((t, i) => (
                    <div key={i} className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 italic">
                      <VscComment className="mb-3 h-6 w-6 text-white/10" />
                      <p className="text-sm leading-relaxed text-white/60 mb-4">
                        "{t.quote}"
                      </p>
                      <span className="text-[10px] font-bold tracking-widest text-cyan-400/60 uppercase not-italic">
                        — {t.author}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </ViewTransition>
  );
}
