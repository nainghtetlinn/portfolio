"use client";

import { useParallex } from "@/hooks/use-parallex";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { Background } from "./Background";
import { Photo } from "./Photo";
import { Stats } from "./Stats";
import { Text } from "./Text";

export const HeroSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end 50%", "end start"],
  });
  const y = useParallex(scrollYProgress, 180);

  return (
    <section ref={ref} id="home">
      <div className="relative z-0 overflow-hidden border-b pt-20 md:pt-26">
        <Background />

        <motion.div
          style={{ y }}
          className="relative z-0 will-change-transform"
        >
          <main className="container mx-auto">
            <div className="flex flex-col items-center gap-8 px-4 py-6 text-center md:flex-row md:px-8 md:pb-14 md:text-left lg:gap-12 lg:px-20">
              <Photo />
              <Text />
            </div>

            <Stats />
          </main>
        </motion.div>
      </div>
    </section>
  );
};
