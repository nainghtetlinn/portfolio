import { Navbar } from "../navbar";
import { HeroBackground, HeroSection } from "./sections/hero";

export const HomePage = () => {
  return (
    <main className="bg-background relative min-h-screen w-full">
      <Navbar />
      <div className="relative">
        <HeroBackground />
        <HeroSection />
      </div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
    </main>
  );
};
