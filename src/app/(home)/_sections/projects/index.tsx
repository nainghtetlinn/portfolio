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
            <Button variant={"ghost"} asChild className="font-mono uppercase">
              <Link href={"/projects"}>
                <span className="bg-foreground/40 mr-2 inline-block h-px w-8"></span>
                view all projects
                <span className="bg-foreground/40 ml-2 inline-block h-px w-8"></span>
              </Link>
            </Button>
          </div>
        </main>
      </div>
    </section>
  );
};
