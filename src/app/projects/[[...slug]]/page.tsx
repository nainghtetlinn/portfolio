import { getMDXComponents } from "@/components/mdx";
import { Button } from "@/components/ui/button";
import { projectSource } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiGithub, FiLink } from "react-icons/fi";

export default async function Page(props: PageProps<"/projects/[[...slug]]">) {
  const params = await props.params;
  const page = projectSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <Image
        src={page.data.cover ?? "/cover.webp"}
        alt="Cover Image"
        width={1024}
        height={572}
        priority
        className="aspect-video w-full object-contain"
      />
      <DocsTitle className="text-primary">{page.data.title}</DocsTitle>
      <DocsDescription className="mb-1 font-mono">
        {page.data.description}
      </DocsDescription>
      <div className="mb-8 flex items-center gap-4">
        {page.data.github && (
          <Button asChild variant={"outline"}>
            <a href={page.data.github} target="_blank">
              <FiGithub />
              Github
            </a>
          </Button>
        )}
        {page.data.url && (
          <Button asChild variant={"outline"}>
            <a href={page.data.url} target="_blank">
              <FiLink />
              Live Demo
            </a>
          </Button>
        )}
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(projectSource, page),
            p: ({ children, ...props }) => (
              <p className="font-mono" {...props}>
                {children}
              </p>
            ),
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
  props: PageProps<"/projects/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = projectSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
