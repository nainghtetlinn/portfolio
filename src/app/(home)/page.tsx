import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "./_sections/hero";
import { AboutSection } from "./_sections/about";
import { ProjectsSection } from "./_sections/projects";
import { ContactSection } from "./_sections/contact";
import { ParallaxWrapper } from "@/components/parallax-wrapper";

export default function Home() {
  return (
    <>
      <Navbar />

      <ParallaxWrapper>
        <HeroSection />
      </ParallaxWrapper>

      <AboutSection />

      <ProjectsSection />

      <ContactSection />
      <Footer />
    </>
  );
}
