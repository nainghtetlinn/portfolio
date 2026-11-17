import { SectionLabel } from "@/components/section-label";
import { Bio } from "./Bio";
import { Education } from "./Education";
import { Skills } from "./Skills";

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
