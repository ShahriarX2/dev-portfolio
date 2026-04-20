"use client";

import { use, useTransition, addTransitionType } from "react";
import { projects } from "@/lib/projects";
import { notFound, useRouter } from "next/navigation";
import Container from "@/components/Container";
import { ViewTransition } from "react";
import { VscArrowLeft, VscGlobe } from "react-icons/vsc";
import { Magnetic } from "@/components/ui/Magnetic";

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);
  const router = useRouter();
  const [, startTransition] = useTransition();

  if (!project) {
    notFound();
  }

  const handleBack = () => {
    startTransition(() => {
      addTransitionType("nav-back");
      router.push("/projects");
    });
  };

  return (
    <main className="h-svh overflow-y-auto pt-10 pb-32">
      <Container>
        <button
          onClick={handleBack}
          className="mb-8 flex items-center gap-2 text-xs font-bold tracking-widest text-white/40 uppercase transition hover:text-white"
        >
          <VscArrowLeft className="h-4 w-4" />
          Back to Projects
        </button>

        <ViewTransition name={`project-${project.id}`} share="morph">
          <section className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
            
            <div className="grid gap-12 p-8 sm:p-16 lg:grid-cols-[1fr_0.8fr]">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    {project.category}
                  </p>
                  <h1 className="font-[family:var(--font-heading)] text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
                    {project.title}
                  </h1>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
                  {project.longDescription || project.description}
                </p>

                {project.link && (
                  <Magnetic strength={0.2}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-cyan-300"
                    >
                      Live Project
                      <VscGlobe className="h-4 w-4" />
                    </a>
                  </Magnetic>
                )}
              </div>

              <div className="space-y-8 border-l border-white/5 lg:pl-12">
                {project.role && (
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">Your Role</p>
                    <p className="text-lg font-medium text-white">{project.role}</p>
                  </div>
                )}
                {project.outcome && (
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">Outcome</p>
                    <p className="text-base text-white/60 leading-relaxed">{project.outcome}</p>
                  </div>
                )}
                {project.challenges && (
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">The Challenge</p>
                    <p className="text-base text-white/60 leading-relaxed">{project.challenges}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </ViewTransition>
      </Container>
    </main>
  );
}
