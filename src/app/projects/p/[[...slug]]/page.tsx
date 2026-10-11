import { getMDXComponents } from "@/components/mdx";
import { Button } from "@/components/ui/button";
import { getRepoReadme, rewriteImageUrls } from "@/lib/github";
import { projectSource } from "@/lib/source";
import { createCompiler } from "@fumadocs/mdx-remote";
import { DocsBody, DocsPage } from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiGithub, FiLink } from "react-icons/fi";

const compiler = createCompiler();

export default async function Page(
  props: PageProps<"/projects/p/[[...slug]]">,
) {
  const params = await props.params;
  const page = projectSource.getPage(params.slug);

  if (!page || !page.data.repo) notFound();

  const raw = await getRepoReadme(page.data.repo);
  const source = rewriteImageUrls(page.data.repo, raw);

  const { body: Content, toc } = await compiler.compile({
    source,
  });

  return (
    <DocsPage
      toc={toc}
      full={page.data.full}
      footer={{
        enabled: false,
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={page.data.cover ?? "/cover.webp"}
          alt="Cover Image"
          fill
          priority
          fetchPriority="high"
          className="object-contain"
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 100vw"
        />
      </div>

      <div className="mb-8 flex items-center gap-4">
        <Button asChild variant={"outline"}>
          <a
            href={`https://github.com/nainghtetlinn/${page.data.repo}`}
            target="_blank"
          >
            Github
            <FiGithub />
          </a>
        </Button>

        {page.data.url && (
          <Button asChild variant={"outline"}>
            <a href={page.data.url} target="_blank">
              Live Demo
              <FiLink />
            </a>
          </Button>
        )}
      </div>
      <DocsBody>
        <Content
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(projectSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return projectSource.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/projects/p/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = projectSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
