import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-800 p-4 rounded">
            <h3 className="font-bold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
