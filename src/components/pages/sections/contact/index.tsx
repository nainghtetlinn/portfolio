import { SectionLabel } from "@/components/section-label";
import { Contacts } from "./Contacts";
import { Article } from "./Article";
import { Background } from "./Background";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative z-0 border-t border-b">
      <Background />

      <main className="relative container mx-auto min-h-[60vh] border-r border-l">
        <SectionLabel num="04." text="Contact" />

        <div className="relative space-y-12 px-4 md:px-8">
          <Article />
          <Contacts />
        </div>
      </main>
    </section>
  );
};
