import { SectionReveal } from "@/components/layout/SectionReveal";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <SectionReveal>
        <h2 className="text-3xl font-bold text-gradient">Projects</h2>
        <div className="section-subtitle-scroll">
          <p className="section-subtitle min-w-max pr-4">
            End-to-end ML systems with deployed APIs and dashboards.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
