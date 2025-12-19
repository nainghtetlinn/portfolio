import { Background } from "./Background";
import { Photo } from "./Photo";
import { Stats } from "./Stats";
import { Text } from "./Text";

export const HeroSection = () => {
  return (
    <section id="home" className="relative z-0 overflow-hidden border-b pt-32">
      <Background />

      <main className="container mx-auto">
        <div className="flex flex-col items-center gap-6 px-4 py-6 text-center md:flex-row md:px-8 md:pb-14 md:text-left lg:gap-12 lg:px-20">
          <Photo />
          <Text />
        </div>

        <Stats />
      </main>
    </section>
  );
};
