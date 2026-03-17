"use client";

import { SectionLabel } from "@/components/section-label";
import { SectionSeperator } from "@/components/section-seperator";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useParallex } from "@/hooks/use-parallex";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { Projects } from "./Projects";

export const ProjectsSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end 75%", "end start"],
  });
  const y = useParallex(scrollYProgress, 300);

  return (
    <section
      ref={ref}
      id="projects"
      className="bg-background relative snap-start"
    >
      <SectionSeperator />

      <div className="relative border-t border-b">
        <motion.div
          style={{ y }}
          className="relative z-0 will-change-transform"
        >
          <main className="relative container mx-auto border-r border-l">
            <SectionLabel num="03." text="Projects" />

            <Projects />

            <div className="flex h-32 items-center justify-center border-t">
              <Button variant={"ghost"} asChild className="font-mono uppercase">
                <a href={siteConfig.github} target="_blank">
                  <span className="bg-foreground/40 mr-2 inline-block h-px w-8"></span>
                  view all projects on github
                  <span className="bg-foreground/40 ml-2 inline-block h-px w-8"></span>
                </a>
              </Button>
            </div>
          </main>
        </motion.div>
      </div>
    </section>
  );
};
