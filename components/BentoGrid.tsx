"use client";

import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { VscArrowRight } from "react-icons/vsc";
import { ViewTransition } from "react";
import { useRouter } from "next/navigation";
import { useTransition, addTransitionType } from "react";

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 lg:gap-6">
      {projects.map((project, idx) => (
        <BentoCard
          key={project.id}
          project={project}
          className={cn(
            project.featured
              ? "md:col-span-2 md:row-span-2"
              : "md:col-span-2 md:row-span-1",
            idx === 1 && "md:col-start-3",
            idx === 2 && "md:col-start-3 md:row-start-2"
          )}
        />
      ))}
    </div>
  );
}

function BentoCard({
  project,
  className,
}: {
  project: (typeof projects)[0];
  className?: string;
}) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const handleNavigate = () => {
    startTransition(() => {
      addTransitionType("nav-forward");
      router.push(`/projects/${project.id}`);
    });
  };

  return (
    <ViewTransition name={`project-${project.id}`} share="morph">
      <motion.article
        onClick={handleNavigate}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:border-cyan-400/30 hover:bg-white/10",
          className
        )}
      >
        {/* Background Image Placeholder / Grain */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-50" />
        
        <div className="flex h-full flex-col p-6 sm:p-8">
          <div className="mb-auto">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300/60">
              {project.category}
            </p>
            <h3 className="font-[family:var(--font-heading)] text-2xl font-bold text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60 sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tech?.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/40"
                >
                  {t}
                </span>
              ))}
            </div>
            
            <motion.div
              whileHover={{ x: 5 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors group-hover:bg-cyan-300"
            >
              <VscArrowRight className="h-5 w-5" />
            </motion.div>
          </div>
        </div>

        {/* Interactive Sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </motion.article>
    </ViewTransition>
  );
}
