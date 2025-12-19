"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const SectionLabel = ({ num, text }: { num: string; text: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.4], [-60, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const rightX = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-between pt-8 pb-4"
    >
      <motion.h1
        style={{ x: leftX, opacity: leftOpacity }}
        className="flex flex-col pl-4 md:pl-8"
      >
        <span className="text-foreground">{num}</span>
        <span className="text-primary">{text}</span>
      </motion.h1>
      <motion.span
        style={{ x: rightX, opacity: bgOpacity }}
        className="text-foreground/15 absolute right-0 -bottom-1/3 hidden text-7xl font-black sm:block md:text-8xl lg:text-9xl"
      >
        {text}
      </motion.span>
    </div>
  );
};
