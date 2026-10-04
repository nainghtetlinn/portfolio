import { SectionLabel } from "@/components/section-label";
import { Bio } from "./Bio";
import { Education } from "./Education";
import dynamic from "next/dynamic";

// Lazy-load Skills so its `tech-stack-icons` CSS chunk is NOT injected as a
// render-blocking <link> on first paint. The section is well below the fold
// and doesn't need to be in the critical CSS path.
const Skills = dynamic(
  () => import("./Skills").then((m) => ({ default: m.Skills })),
  {
    loading: () => (
      <div className="space-y-6 px-4 pt-8 md:px-8" aria-busy="true">
        <div className="h-7 w-40 animate-pulse rounded bg-foreground/10" />
        <div className="grid gap-8 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-5 w-24 animate-pulse rounded bg-foreground/10" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div
                    key={j}
                    className="h-8 w-24 animate-pulse rounded-full bg-foreground/10"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
);

export const AboutSection = () => {
  return (
    <section id="about" aria-label="About section">
      <div className="relative">
        <main className="relative container mx-auto border-r border-l">
          <SectionLabel num="02." text="About Me" />

          <div className="space-y-12 [&>*:not(:first-child)]:border-t">
            <Bio />
            <Skills />
            <Education />
          </div>
        </main>
      </div>
    </section>
  );
};
