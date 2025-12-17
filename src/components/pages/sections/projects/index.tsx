import { SectionLabel } from "@/components/section-label";
import { Link2 } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "./data";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="border-t border-b">
      <main className="relative container mx-auto border-r border-l">
        <SectionLabel num="03." text="Projects" />
        <div className="grid grid-cols-1 gap-4 px-4 pb-8 md:grid-cols-2 md:px-8 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="bg-card group relative border"
            >
              <div className="relative aspect-3/2 w-full overflow-hidden border-b">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top-left transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 px-4 pt-2 pb-4">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <h2>{project.name}</h2>
                    <div className="flex items-center justify-end gap-4">
                      <a href={project.github} className="size-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-github-icon lucide-github"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </a>
                      <a href={project.url} className="size-5">
                        <Link2 />
                      </a>
                    </div>
                  </div>
                  <p className="font-mono">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 font-mono text-xs md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </section>
  );
};
