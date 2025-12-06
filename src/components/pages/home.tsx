import { Navbar } from "../navbar";
import { HeroSection } from "./sections/hero";

export const HomePage = () => {
  return (
    <main className="bg-background relative min-h-screen w-full">
      <Navbar />

      <HeroSection />

      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
    </main>
  );
};
