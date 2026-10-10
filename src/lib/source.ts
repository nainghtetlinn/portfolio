import { loader } from "fumadocs-core/source";
import { pageSchema } from "fumadocs-core/source/schema";
import { defineDocs } from "fumadocs-mdx/macro";
import { z } from "zod";

const projects = defineDocs({
  dir: "content/projects",
  docs: {
    schema: pageSchema.extend({
      cover: z.string().optional(),
      github: z.string().optional(),
      url: z.string().optional(),
    }),
  },
});

export const projectSource = loader({
  baseUrl: "/projects",
  source: projects.toFumadocsSource(),
});
