import { SectionLabel } from "@/components/section-label";
import { SectionSeperator } from "@/components/section-seperator";
import { Projects } from "./Projects";

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="border-t border-b">
        <main className="relative container mx-auto border-r border-l">
          <SectionLabel num="03." text="Projects" />

          <Projects />
        </main>
      </div>

      <SectionSeperator />
    </section>
  );
};
