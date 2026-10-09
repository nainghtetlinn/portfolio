import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SectionSeperator } from "@/components/section-seperator";
import { AboutSection } from "./_sections/about";
import { ContactSection } from "./_sections/contact";
import { HeroSection } from "./_sections/hero";
import { ProjectsSection } from "./_sections/projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <SectionSeperator />

      <AboutSection />

      <SectionSeperator />

      <ProjectsSection />

      <SectionSeperator />

      <ContactSection />

      <SectionSeperator />

      <Footer />
    </>
  );
}
