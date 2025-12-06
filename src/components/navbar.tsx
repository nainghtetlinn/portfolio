"use client";

import { siteConfig } from "@/config/site";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "stats", label: "Stats" },
  { id: "contact", label: "Contact" },
] as const;

export const Navbar = () => {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Logic:
    // 1. If we are at the very top (less than 150px), always show.
    // 2. If scrolling down (latest > previous), hide.
    // 3. If scrolling up (latest < previous), show.
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 z-50 w-full"
      >
        {/* Background with blur effect */}
        <motion.div
          style={{
            opacity: backgroundOpacity,
          }}
          className="bg-background/70 absolute inset-0 border-b backdrop-blur-xs"
        ></motion.div>

        <nav className="text-foreground relative z-10 container mx-auto flex h-20 w-full items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <a
            href="#home"
            className="group relative inline-flex items-center p-2"
          >
            <div className="border-border absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 transition-all duration-200 group-hover:h-full group-hover:w-full" />
            <h3 className="text-2xl">Naing</h3>
            <div className="border-border absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 transition-all duration-200 group-hover:h-full group-hover:w-full" />
          </a>

          {/* Nav links */}
          <ul className="flex items-center gap-2">
            {NAV_LINKS.map((l) => (
              <li
                key={l.id}
                className="hover:text-primary cursor-pointer p-2 transition-all duration-300"
              >
                <a href={"#" + l.id}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* Github */}
          <a
            href={siteConfig.github}
            className="hover:text-primary transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github-icon lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </nav>
      </motion.header>
    </>
  );
};
