"use client";

import { motion } from "motion/react";

export const SectionLabel = ({ num, text }: { num: string; text: string }) => {
  return (
    <div className="relative flex items-center justify-between pt-8 pb-4">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ margin: "-100px" }}
        className="flex flex-col pl-4 md:pl-8"
      >
        <span className="text-foreground">{num}</span>
        <span className="text-primary">{text}</span>
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ margin: "-100px" }}
        className="text-foreground/15 absolute right-0 -bottom-1/3 hidden text-7xl font-black sm:block md:text-8xl lg:text-9xl"
      >
        {text}
      </motion.span>
    </div>
  );
};
