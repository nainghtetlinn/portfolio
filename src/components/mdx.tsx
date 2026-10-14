import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...components,
    h1: ({ children, ...props }) => (
      <h1 className="text-primary font-bold" {...props}>
        {children}
      </h1>
    ),
    p: ({ children, ...props }) => (
      <p className="[&>code]:bg-accent font-mono" {...props}>
        {children}
      </p>
    ),
    li: ({ children, ...props }) => (
      <li className="[&>code]:bg-accent font-mono" {...props}>
        {children}
      </li>
    ),
    td: ({ children, ...props }) => (
      <td className="font-mono" {...props}>
        {children}
      </td>
    ),
    a: ({ children, ...props }) => (
      <a className="[&>code]:bg-accent font-mono" {...props}>
        {children}
      </a>
    ),
    strong: ({ children, ...props }) => (
      <strong className="font-semibold" {...props}>
        {children}
      </strong>
    ),
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
