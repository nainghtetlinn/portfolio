"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export const SectionLabel = ({ num, text }: { num: string; text: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Raw transforms
  const rawLeftX = useTransform(scrollYProgress, [0, 0.4], [-60, 0]);
  const rawLeftOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const rawRightX = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
  const rawBgOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Spring smoothing
  const leftX = useSpring(rawLeftX, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const rightX = useSpring(rawRightX, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const leftOpacity = useSpring(rawLeftOpacity, {
    stiffness: 100,
    damping: 30,
  });

  const bgOpacity = useSpring(rawBgOpacity, {
    stiffness: 100,
    damping: 30,
  });

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
