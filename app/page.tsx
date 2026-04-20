"use client";

import ProfileCard from "@/components/ProfileCard";
import Container from "@/components/Container";
import SpotlightCard from "@/components/SpotlightCard";
import TextType from "@/components/TextType";
import { VscArrowRight, VscCode, VscLayers, VscRocket } from "react-icons/vsc";
import { Magnetic } from "@/components/ui/Magnetic";
import { ViewTransition, useTransition, addTransitionType } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HERO_TEXTS = [
  "Full-stack products with sharp interfaces and clean backend systems.",
  "Interfaces that feel fast, clear, and deliberate.",
  "Backend systems that stay clean as the product grows.",
];

const HERO_TEXT_TYPE_SPEED = {
  enabled: false,
  min: 60,
  max: 120,
};

export default function Home() {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const handleContactClick = () => {
    startTransition(() => {
      addTransitionType("nav-forward");
      router.push("/contact");
    });
  };

  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-in" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-out" }}
      default="none"
    >
      <main className="min-h-svh overflow-hidden">
      <Container>
        <section
          id="home"
          className="relative flex min-h-svh flex-col justify-start pt-2 pb-6 sm:pt-4 sm:pb-10"
        >
            <div className="grid w-full items-start gap-8 xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-10">
              <div className="space-y-8">
                <div className="space-y-5">
                  <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    Available for selective freelance work
                  </p>
                  <div className="space-y-4">
                    <TextType
                        as="h1"
                        text={HERO_TEXTS}
                        className="max-w-4xl font-(--font-heading) text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
                        typingSpeed={65}
                        deletingSpeed={32}
                        pauseDuration={1800}
                        showCursor
                        cursorCharacter="_"
                        cursorBlinkDuration={0.6}
                        variableSpeed={HERO_TEXT_TYPE_SPEED} onSentenceComplete={undefined}                    />
                    <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                      I build fast portfolio sites, dashboards, and content-driven web apps with
                      Next.js, React, and modern frontend systems that still hold up when the
                      project grows.
                    </p>
                  </div>
                </div>

                  <div className="flex flex-wrap gap-4">
                    <Magnetic strength={0.2} radius={50}>
                      <Link
                          href="/projects"
                          transitionTypes={["nav-forward"]}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
                      >
                        View Projects
                        <VscArrowRight className="h-4 w-4" />
                      </Link>
                    </Magnetic>
                    <Magnetic strength={0.2} radius={50}>
                      <Link
                          href="/contact"
                          transitionTypes={["nav-forward"]}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                      >
                        Start a Conversation
                      </Link>
                    </Magnetic>
                  </div>
              </div>
              <div className="relative flex justify-center xl:justify-end">
                <div className="hero-card-glow pointer-events-none absolute right-0 top-1/2 h-96 w-[24rem] -translate-y-1/2 rounded-full" />
                <div className="hero-card-orb pointer-events-none absolute right-10 top-16 h-28 w-28 rounded-full opacity-80" />
                <ProfileCard
                    className="relative z-10"
                    name="Shahariar Hosen"
                    title="Full Stack Developer"
                    handle="shahriarx2"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="/assets/profile-photo.png"
                    showUserInfo
                    enableTilt={true}
                    enableMobileTilt
                    onContactClick={handleContactClick}
                    behindGlowColor="hsla(183, 100%, 70%, 0.6)"
                    behindGlowSize={80}
                    iconUrl="/assets/iconpattern.png"
                    innerGradient="linear-gradient(145deg,hsla(183, 40%, 45%, 0.55) 0%,hsla(272, 60%, 70%, 0.27) 100%)"
                    miniAvatarUrl="/assets/profile-photo-icon.png"
                />
              </div>
            </div>

            <div className="mt-8 grid w-full gap-4 md:grid-cols-2 xl:grid-cols-3">
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
                  <VscCode className="mb-3 h-5 w-5 text-cyan-300" />
                  <p className="text-sm font-semibold text-white">Frontend Systems</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    React, Next.js, Tailwind, motion, responsive UI architecture.
                  </p>
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
                <VscLayers className="mb-3 h-5 w-5 text-cyan-300" />
                <p className="text-sm font-semibold text-white">Product Thinking</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Layouts that feel intentional, readable, and ready for real users.
                </p>
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
                <VscRocket className="mb-3 h-5 w-5 text-cyan-300" />
                <p className="text-sm font-semibold text-white">Delivery Focus</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Clean handoff, practical code structure, and performance-aware builds.
                </p>
              </SpotlightCard>
            </div>


        </section>
      </Container>
    </main>
    </ViewTransition>
  );
}
