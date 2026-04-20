"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiFramer, SiSupabase, SiMongodb, SiNodedotjs,
  SiPostgresql, SiPrisma, SiDocker, SiGithub
} from "react-icons/si";

const TECH_ICONS = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Motion", icon: SiFramer },
  { name: "Supabase", icon: SiSupabase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Docker", icon: SiDocker },
  { name: "GitHub", icon: SiGithub },
];

export const TechStack = () => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tickerRef.current) return;

    const ticker = tickerRef.current;
    const scrollWidth = ticker.scrollWidth;

    // Clone icons for infinite loop
    const tl = gsap.to(ticker, {
      x: `-${scrollWidth / 2}px`,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="group relative mt-12 overflow-hidden py-10">
      <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />
      
      <div 
        ref={tickerRef} 
        className="flex w-fit items-center gap-12 whitespace-nowrap px-6"
      >
        {[...TECH_ICONS, ...TECH_ICONS].map((tech, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-3 text-white/40 transition-colors hover:text-cyan-400"
          >
            <tech.icon className="h-8 w-8" />
            <span className="text-sm font-medium uppercase tracking-widest">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
