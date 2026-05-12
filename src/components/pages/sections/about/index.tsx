"use client";

import { SectionLabel } from "@/components/section-label";
import { SectionSeperator } from "@/components/section-seperator";
import { useParallex } from "@/hooks/use-parallex";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { Bio } from "./Bio";
import { Education } from "./Education";
import { Skills } from "./Skills";

export const AboutSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end 50%", "end start"],
  });
  const y = useParallex(scrollYProgress, 180);

  return (
    <section ref={ref} id="about" className="relative">
      <SectionSeperator />

      <div className="relative border-t border-b">
        <motion.div
          style={{ y }}
          className="relative z-0 will-change-transform"
        >
          <main className="relative container mx-auto border-r border-l">
            <SectionLabel num="02." text="About Me" />

            <div className="space-y-12 [&>*:not(:first-child)]:border-t">
              <Bio />
              <Skills />
              <Education />
            </div>
          </main>
        </motion.div>
      </div>
    </section>
  );
};
