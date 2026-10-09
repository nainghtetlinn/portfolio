"use client";

import { useMenuStore } from "@/lib/menu-store";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect } from "react";

export const NavbarBackdrop = () => {
  const isOpen = useMenuStore((state) => state.isOpen);
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const backgroundOpacity = useMotionValue(0);

  useMotionValueEvent(scrollOpacity, "change", (latest) => {
    if (!isOpen) backgroundOpacity.set(latest);
  });

  useEffect(() => {
    if (isOpen) {
      animate(backgroundOpacity, 1, { duration: 0.3, ease: "easeInOut" });
    } else {
      animate(backgroundOpacity, scrollOpacity.get(), {
        duration: 0.3,
        ease: "easeInOut",
      });
    }
  }, [isOpen, backgroundOpacity, scrollOpacity]);

  return (
    <motion.div
      style={{ opacity: backgroundOpacity }}
      className="bg-background/70 absolute inset-0 border-b backdrop-blur-xs"
    ></motion.div>
  );
};
