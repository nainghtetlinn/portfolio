"use client";

import * as React from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export const ThemeToggleBtn = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const clipPathId = React.useId();
  const isLight = resolvedTheme === "light";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="hover:text-primary cursor-pointer"
      aria-label="Toggle theme"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        strokeLinecap="round"
        viewBox="0 0 32 32"
        className="size-5 transition-transform duration-300 active:scale-95"
      >
        <clipPath id={clipPathId}>
          <motion.path
            animate={{ y: isLight ? 10 : 0, x: isLight ? -12 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
            d="M0-5h30a1 1 0 0 0 9 13v24H0Z"
          />
        </clipPath>
        <g clipPath={`url(#${clipPathId})`}>
          <motion.circle
            initial={{ r: 10 }}
            animate={{ r: isLight ? 10 : 8 }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
            cx="16"
            cy="16"
          />
          <motion.g
            initial={{ opacity: 0 }}
            animate={{
              rotate: isLight ? -100 : 0,
              scale: isLight ? 0.5 : 1,
              opacity: isLight ? 0 : 1,
            }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M16 5.5v-4" />
            <path d="M16 30.5v-4" />
            <path d="M1.5 16h4" />
            <path d="M26.5 16h4" />
            <path d="m23.4 8.6 2.8-2.8" />
            <path d="m5.7 26.3 2.9-2.9" />
            <path d="m5.8 5.8 2.8 2.8" />
            <path d="m23.4 23.4 2.9 2.9" />
          </motion.g>
        </g>
      </svg>
    </Button>
  );
};
