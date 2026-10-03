import { Background } from "./Background";
import { Photo } from "./Photo";
import { Stats } from "./Stats";
import { Text } from "./Text";

export const HeroSection = () => {
  return (
    <section id="home" aria-label="Home section">
      <div className="relative z-0 overflow-hidden pt-20 md:pt-30">
        <Background />

        <main className="container mx-auto">
          <div className="flex flex-col items-center gap-8 px-4 py-6 md:flex-row md:px-8 md:pb-14 lg:gap-12 lg:px-20">
            <Photo />
            <Text />
          </div>

          <Stats />
        </main>
      </div>
    </section>
  );
};
