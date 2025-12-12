"use client";

import { Profile } from "@/components/profile";
import { motion } from "motion/react";

export const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div className="absolute -inset-1 rotate-3 rounded-lg border-2" />
      <div className="absolute -inset-1 -rotate-3 rounded-lg border-2" />
      <div className="bg-background relative rounded-lg border-2 p-2">
        <Profile />
      </div>
    </motion.div>
  );
};
