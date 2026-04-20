import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="space-y-8 py-10">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
          Selected Work
        </p>
        <h2 className="font-[family:var(--font-heading)] text-3xl font-semibold text-white sm:text-4xl">
          Projects built to solve actual product needs.
        </h2>
        <p className="text-base leading-7 text-white/65">
          A focused set of builds across content platforms and application UI,
          with an emphasis on maintainable structure and clear user flows.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-cyan-300/25 hover:bg-white/[0.07]"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm leading-6 text-white/65">
                  {project.description}
                </p>
              </div>

              {project.tech?.length ? (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
