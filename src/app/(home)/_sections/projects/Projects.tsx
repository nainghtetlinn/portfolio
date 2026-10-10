import { Button } from "@/components/ui/button";
import { projectSource } from "@/lib/source";
import Image from "next/image";
import { FiBookOpen, FiGithub, FiLink } from "react-icons/fi";
import { Background } from "./Background";

export const Projects = () => {
  return (
    <div className="*:border-t">
      {projectSource
        .getPageTree()
        .children.filter((content) => content.type === "page")
        .map((page) => {
          const project = projectSource.getNodePage(page)?.data;
          if (!project) return null;
          return (
            <ProjectArticle
              key={project.title}
              project={{
                name: project.title ?? "unknown",
                description: project.description,
                image: project.cover ?? "/cover.webp",
                github: project.github,
                url: project.url,
                link: page.url,
              }}
            />
          );
        })}
    </div>
  );
};

const ProjectArticle = ({
  project,
}: {
  project: {
    name: string;
    description?: string;
    image: string;
    github?: string;
    url?: string;
    link: string;
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
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover object-top-left"
            loading="lazy"
          />
        </div>
      </div>

      {/* Project Text */}
      <div className="flex flex-col justify-center p-4 pb-8 md:p-8">
        <h2>{project.name}</h2>
        <p className="mt-4 font-mono">{project.description}</p>
        <div className="mt-8 space-x-4">
          <Button asChild className="border-2">
            <a href={project.link}>
              Overview
              <FiBookOpen />
            </a>
          </Button>
          {project.github && (
            <Button asChild variant={"outline"} className="border-2">
              <a href={project.github} target="_blank">
                View Code
                <FiGithub />
              </a>
            </Button>
          )}
          {project.url && (
            <Button asChild variant={"outline"} className="border-2">
              <a href={project.url} target="_blank">
                Live Demo
                <FiLink />
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
