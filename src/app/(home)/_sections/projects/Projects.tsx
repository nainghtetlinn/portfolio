"use client";

import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import Image from "next/image";
import { Background } from "./Background";
import { PROJECTS } from "./data";

export const Projects = () => {
  return (
    <div className="*:border-t">
      {PROJECTS.map((project) => (
        <ProjectArticle key={project.name} project={project} />
      ))}
    </div>
  );
};

const ProjectArticle = ({
  project,
}: {
  project: {
    name: string;
    description: string;
    image: string;
    github: string;
    url: string;
  };
}) => {
  return (
    <article className="relative grid grid-cols-1 lg:grid-cols-2">
      {/* Project Image */}
      <div className="bg-card relative z-0 flex items-center justify-center overflow-hidden p-8 lg:border-r lg:p-12 xl:p-20">
        <Background />
        <div className="relative aspect-video w-full max-w-md overflow-hidden border shadow-2xl/40">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top-left"
          />
        </div>
      </div>

      {/* Project Text */}
      <div className="flex flex-col justify-center p-4 pb-8 md:p-8">
        <h2>{project.name}</h2>
        <p className="mt-4 font-mono">{project.description}</p>
        <div className="mt-8 space-x-4">
          <Button asChild className="border-2">
            <a href={project.github} target="_blank">
              View Code
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
          </Button>
          <Button variant={"outline"} asChild className="border-2">
            <a href={project.url} target="_blank">
              Live Demo
              <Link2 />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};
