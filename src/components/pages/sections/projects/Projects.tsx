"use client";

import { Button } from "@/components/ui/button";
import { useRolling } from "@/hooks/use-rolling";
import { Link2 } from "lucide-react";
import { motion, useScroll } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
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
    techs: string[];
    image: string;
    github: string;
    url: string;
  };
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const titleMotion = useRolling(scrollYProgress, 0.3);
  const textMotion = useRolling(scrollYProgress, 0.2);
  const tagsMotion = useRolling(scrollYProgress, 0.1);
  const buttonsMotion = useRolling(scrollYProgress, 0);

  return (
    <article className="relative grid grid-cols-1 md:grid-cols-2">
      {/* Project Image */}
      <div className="bg-card relative flex items-center justify-center overflow-hidden p-4 md:border-r md:p-8 lg:p-12">
        <div className="relative aspect-3/2 w-full max-w-md overflow-hidden border">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top-left"
          />
        </div>
      </div>

      {/* Project Text */}
      <div
        ref={ref}
        className="flex flex-col justify-center space-y-6 p-4 pb-8 md:p-8"
      >
        <motion.h2 style={{ ...titleMotion }}>{project.name}</motion.h2>
        <motion.p style={{ ...textMotion }} className="font-mono">
          {project.description}
        </motion.p>
        <motion.div style={{ ...tagsMotion }} className="flex gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 font-mono text-xs md:text-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        <motion.div style={{ ...buttonsMotion }} className="space-x-4">
          <Button asChild>
            <a href={project.github}>
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
              View Code
            </a>
          </Button>
          <Button variant={"outline"} asChild>
            <a href={project.url}>
              <Link2 />
              Live Demo
            </a>
          </Button>
        </motion.div>
      </div>
    </article>
  );
};
