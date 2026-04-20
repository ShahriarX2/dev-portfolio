import Container from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { ViewTransition } from "react";

const contactItems = [
  {
    label: "Email",
    value: "shahriar@example.com",
    href: "mailto:shahriar@example.com",
  },
  {
    label: "GitHub",
    value: "github.com/shahriarx2",
    href: "https://github.com/shahriarx2",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shahriarx2",
    href: "https://linkedin.com/in/shahriarx2",
  },
];

export default function ContactPage() {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-in" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "fade-out" }}
      default="none"
    >
      <main className="h-svh overflow-hidden pt-10 pb-32">
      <Container>
        <section className="space-y-12">
          <div className="grid w-full gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-12">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                Contact
              </p>
              <h1 className="font-[family:var(--font-heading)] text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                Reach out when you have a real product problem to solve.
              </h1>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                  I’m interested in focused freelance work, portfolio builds,
                  dashboards, and polished frontend implementation.
                </p>
                
                <div className="flex flex-col gap-3 pt-6">
                  {contactItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center justify-between border-b border-white/5 pb-2 text-sm transition hover:border-cyan-400/30"
                    >
                      <span className="text-white/40 uppercase tracking-widest">{item.label}</span>
                      <span className="text-white transition group-hover:text-cyan-400">{item.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex min-h-[400px] flex-col rounded-[2.5rem] border border-white/10 bg-black/40 p-8 backdrop-blur-xl sm:p-12">
              <ContactForm />
            </div>
          </div>
        </section>
      </Container>
    </main>
    </ViewTransition>
  );
}
