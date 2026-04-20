import { projects } from "@/lib/projects";
import ProjectClient from "@/components/project/ProjectClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProjectClient id={id} />;
}
