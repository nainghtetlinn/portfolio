import { projectSource } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider/next";

export default function Layout({ children }: LayoutProps<"/projects/p">) {
  return (
    <div className="flex min-h-screen flex-col">
      <RootProvider>
        <DocsLayout
          tree={projectSource.getPageTree()}
          containerProps={{
            className: "pt-20",
          }}
          nav={{ enabled: false }}
          sidebar={{ enabled: false }}
        >
          {children}
        </DocsLayout>
      </RootProvider>
    </div>
  );
}
