import Container from "@/components/Container";
import BentoGrid from "@/components/BentoGrid";
import { ViewTransition } from "react";

export default function ProjectsPage() {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-in" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-out" }}
      default="none"
    >
      <main className="pt-10 pb-32">
      <Container>
        <section id="projects" className="space-y-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              Selected Work
            </p>
            <h1 className="font-[family:var(--font-heading)] text-4xl font-semibold text-white sm:text-5xl">
              Projects built to solve actual product needs.
            </h1>
            <p className="text-base leading-7 text-white/65 sm:text-lg">
              A focused set of builds across content platforms and application UI,
              with an emphasis on maintainable structure and clear user flows.
            </p>
          </div>

          <BentoGrid />
        </section>
      </Container>
    </main>
    </ViewTransition>
  );
}
