import { projects } from "@/data/content";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 scroll-mt-32">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work"
        />

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
