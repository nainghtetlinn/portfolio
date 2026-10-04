import { Navbar } from "@/components/navbar";
import { HeroSection } from "./_sections/hero";
import { ParallaxWrapper } from "@/components/parallax-wrapper";
import { SectionSeperator } from "@/components/section-seperator";
import dynamic from "next/dynamic";

// Lazy-load every section that is below the fold. Each one becomes its own
// JS chunk, keeping the critical-path bundle small and fast for LCP/FCP.
const AboutSection = dynamic(
  () => import("./_sections/about").then((m) => ({ default: m.AboutSection })),
  { loading: () => <div className="min-h-screen" /> },
);

const ProjectsSection = dynamic(
  () =>
    import("./_sections/projects").then((m) => ({
      default: m.ProjectsSection,
    })),
  { loading: () => <div className="min-h-screen" /> },
);

const ContactSection = dynamic(
  () =>
    import("./_sections/contact").then((m) => ({ default: m.ContactSection })),
  { loading: () => <div className="min-h-[50vh]" /> },
);

const Footer = dynamic(
  () => import("@/components/footer").then((m) => ({ default: m.Footer })),
  { loading: () => <div className="h-24" /> },
);

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
