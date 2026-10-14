import { projectSource } from "@/lib/source";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FiBookOpen, FiGithub, FiLink } from "react-icons/fi";

const Page = () => {
  const nodes = projectSource
    .getPageTree()
    .children.filter((node) => node.type === "page");

  return (
    <main className="pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mt-6 pb-8">
          <h1 className="text-primary">Projects</h1>
          <p className="mt-2">A collection of things I&apos;ve built.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {nodes.map((node) => {
            const page = projectSource.getNodePage(node)?.data;
            if (!page) return null;

            return (
              <article
                key={page.title}
                className="bg-card group flex flex-col border shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Cover image */}
                <div className="bg-muted relative aspect-video w-full overflow-hidden">
                  <Image
                    src={page.cover ?? "/cover.webp"}
                    alt={page.title ?? "project cover"}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 100vw"
                    className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    fetchPriority="high"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="leading-tight font-semibold">{page.title}</h3>
                  {page.description && (
                    <p className="text-muted-foreground mt-2 flex-1 text-justify font-mono text-xs leading-relaxed sm:text-sm md:text-base">
                      {page.description}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Button asChild size="sm">
                      <Link href={node.url}>
                        Overview
                        <FiBookOpen />
                      </Link>
                    </Button>

                    {page.repo && (
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={`https://github.com/nainghtetlinn/${page.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                          <FiGithub />
                        </a>
                      </Button>
                    )}

                    {page.url && (
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={page.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                          <FiLink />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
