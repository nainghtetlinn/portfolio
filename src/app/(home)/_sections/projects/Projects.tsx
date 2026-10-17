import { Button } from "@/components/ui/button";
import { projectSource } from "@/lib/source";
import Image from "next/image";
import { FiBookOpen, FiGithub, FiLink } from "react-icons/fi";
import { Background } from "./Background";

export const Projects = () => {
  const tree = projectSource.getPageTree();
  const meta = projectSource.getNodeMeta(tree);
  const featured = meta?.data?.featured ?? [];

  return (
    <div className="*:border-t">
      {tree.children
        .filter((content) => {
          return content.type === "page";
        })
        .map((node) => {
          const page = projectSource.getNodePage(node)?.data;
          if (!page) return null;

          const id = node.$id?.split(".")[0] ?? "";
          if (!featured.includes(id)) return null;

          return (
            <ProjectArticle
              key={page.title}
              project={{
                name: page.title ?? "unknown",
                description: page.description,
                image: page.cover ?? "/cover.webp",
                repo: page.repo,
                url: page.url,
                link: node.url,
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
    repo?: string;
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
        <p className="text-foreground/80 mt-4 text-justify">
          {project.description}
        </p>
        <div className="mt-4 flex items-center gap-2 md:mt-6">
          <Button asChild variant={"default"}>
            <a href={project.link}>
              Overview
              <FiBookOpen />
            </a>
          </Button>
          {project.repo && (
            <Button asChild variant={"outline"}>
              <a
                href={`https://github.com/nainghtetlinn/${project.repo}`}
                target="_blank"
              >
                Code
                <FiGithub />
              </a>
            </Button>
          )}
          {project.url && (
            <Button asChild variant={"outline"}>
              <a href={project.url} target="_blank">
                Demo
                <FiLink />
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
