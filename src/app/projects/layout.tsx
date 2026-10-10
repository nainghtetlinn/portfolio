import { Navbar } from "@/components/navbar";
import { projectSource } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider/next";

export default function Layout({ children }: LayoutProps<"/projects">) {
  return (
    <div className="flex min-h-screen flex-col">
      <RootProvider>
        <DocsLayout
          tree={projectSource.getPageTree()}
          slots={{ header: Navbar }}
          containerProps={{
            className: "pt-20",
          }}
          sidebar={{ enabled: false }}
        >
          {children}
        </DocsLayout>
      </RootProvider>
    </div>
  );
}
