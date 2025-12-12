"use client";

import { Particles } from "@/components/ui/particles";
import useScreenSize from "@/hooks/use-screen-size";

export const Background = () => {
  const screenSize = useScreenSize();

  return (
    <div className="absolute inset-0 -z-10">
      {/* Dual Gradient Overlay Background */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(75, 85, 99, 0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.2) 1px, transparent 1px)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />

      <Particles
        particleColors={[
          "#ff914d",
          "#d0c87a",
          "#88a6c9",
          "#8aa1ff",
          "#ff8a78",
          "#d56b96",
          "#2acfa4",
          "#60e09a",
          "#7e6bf2",
        ]}
        particleCount={
          screenSize.lessThanOrEqual("md")
            ? 150
            : screenSize.lessThanOrEqual("lg")
              ? 250
              : 350
        }
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={true}
        className="absolute inset-0"
      />
    </div>
  );
};
