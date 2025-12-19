import { Footer } from "../footer";
import { Navbar } from "../navbar";
import { SectionSeperator } from "../section-seperator";
import { AboutSection } from "./sections/about";
import { ContactSection } from "./sections/contact";
import { HeroSection } from "./sections/hero";
import { ProjectsSection } from "./sections/projects";

export const HomePage = () => {
  return (
    <main className="bg-background relative min-h-screen overflow-hidden">
      <Navbar />

      <HeroSection />
      <SectionSeperator />
      <AboutSection />
      <SectionSeperator />
      <ProjectsSection />
      <SectionSeperator />
      <ContactSection />

      <Footer />
    </main>
  );
};
