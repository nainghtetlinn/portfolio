import { Footer } from "../footer";
import { Navbar } from "../navbar";
import { AboutSection } from "./sections/about";
import { ContactSection } from "./sections/contact";
import { HeroSection } from "./sections/hero";
import { ProjectsSection } from "./sections/projects";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
};
