import { SectionLabel } from "@/components/section-label";
import { SectionSeperator } from "@/components/section-seperator";
import { siteConfig } from "@/config/site";
import { Projects } from "./Projects";
import { Button } from "@/components/ui/button";

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="border-t border-b">
        <main className="relative container mx-auto border-r border-l">
          <SectionLabel num="03." text="Projects" />

          <Projects />

          <div className="flex h-32 items-center justify-center border-t">
            <Button variant={"ghost"} asChild className="uppercase">
              <a href={siteConfig.github} target="_blank">
                view all projects on github
              </a>
            </Button>
          </div>
        </main>
      </div>

      <SectionSeperator />
    </section>
  );
};
