import { SectionLabel } from "@/components/section-label";
import { Article } from "./Article";
import { Background } from "./Background";
import { Contacts } from "./Contacts";

export const ContactSection = () => {
  return (
    <section id="contact" aria-label="Contact section">
      <div className="relative z-0">
        <main className="relative container mx-auto min-h-[70vh] border-r border-l">
          <SectionLabel num="04." text="Contact" />

          <div className="relative space-y-6 px-4 md:px-8">
            <Article />
            <Contacts />
          </div>

          <Background />
        </main>
      </div>
    </section>
  );
};
