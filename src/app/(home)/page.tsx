import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "./_sections/hero";
import { AboutSection } from "./_sections/about";
import { ProjectsSection } from "./_sections/projects";
import { ContactSection } from "./_sections/contact";
import { ParallaxWrapper } from "@/components/parallax-wrapper";
import { SectionSeperator } from "@/components/section-seperator";

export default function Home() {
  return (
    <>
      <Navbar />

      <ParallaxWrapper>
        <HeroSection />
      </ParallaxWrapper>

      <SectionSeperator />

      <ParallaxWrapper>
        <AboutSection />
      </ParallaxWrapper>

      <SectionSeperator />

      <ParallaxWrapper>
        <ProjectsSection />
      </ParallaxWrapper>

      <SectionSeperator />

      <ContactSection />

      <SectionSeperator />

      <Footer />
    </>
  );
}
