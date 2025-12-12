import { SectionLabel } from "@/components/section-label";
import { Bio } from "./Bio";
import { Skills } from "./Skills";

export const AboutSection = () => {
  return (
    <section id="about" className="border-t border-b">
      <main className="relative container mx-auto border-r border-l">
        <SectionLabel num="02." text="About Me" />
        <div className="space-y-12">
          <Bio />
          <Skills />
        </div>
      </main>
    </section>
  );
};
