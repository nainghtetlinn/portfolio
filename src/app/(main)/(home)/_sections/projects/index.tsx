import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Projects } from "./Projects";

export const ProjectsSection = () => {
  return (
    <section id="projects" aria-label="Projects section">
      <div className="relative">
        <main className="relative container mx-auto border-r border-l">
          <SectionLabel num="03." text="Projects" />

          <Projects />

          <div className="flex h-32 items-center justify-center border-t">
            <Button asChild variant={"ghost"} size={"lg"}>
              <Link href={"/projects"}>
                <span className="bg-border mr-2 inline-block h-px w-10"></span>
                VIEW ALL PROJECTS
                <span className="bg-border ml-2 inline-block h-px w-10"></span>
              </Link>
            </Button>
          </div>
        </main>
      </div>
    </section>
  );
};
