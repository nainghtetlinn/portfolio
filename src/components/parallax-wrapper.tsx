"use client";

import { useParallex } from "@/hooks/use-parallex";
import { motion, useScroll } from "motion/react";
import { PropsWithChildren, useRef } from "react";

export const ParallaxWrapper = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end 50%", "end start"],
  });
  const y = useParallex(scrollYProgress, 180);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }} className="relative will-change-transform">
        {children}
      </motion.div>
    </div>
  );
};
