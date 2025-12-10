import { Navbar } from "../navbar";
import { SectionSeperator } from "../section-seperator";
import { AboutSection } from "./sections/about";
import { HeroSection } from "./sections/hero";

export const HomePage = () => {
  return (
    <main id="home" className="bg-background relative min-h-screen">
      <Navbar />

      <HeroSection />
      <SectionSeperator />
      <AboutSection />
      <SectionSeperator />

      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
    </main>
  );
};
