import { Navbar } from "@/components/navbar";
import { SectionSeperator } from "@/components/section-seperator";
import dynamic from "next/dynamic";
import { HeroSection } from "./_sections/hero";

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
