"use client";

import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
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
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

    // Logic for transparent background at top
    if (latest > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full"
    >
      <nav className="text-card-foreground flex w-full items-center justify-between px-4 py-2.5">
        {/* Background with blur effect */}
        <div
          className={cn(
            "absolute inset-0 -z-10 backdrop-blur-xs transition-all duration-300",
            scrolled ? "bg-card/60" : "bg-transparent",
          )}
        ></div>

        {/* Logo */}
        <a href="#home" className="group relative inline-flex items-center p-2">
          <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 transition-all duration-200 group-hover:h-full group-hover:w-full" />
          <h3 className="text-2xl">Naing</h3>
          <div className="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 transition-all duration-200 group-hover:h-full group-hover:w-full" />
        </a>

        {/* Nav links */}
        <ul className="flex items-center gap-2">
          {NAV_LINKS.map((l) => (
            <li
              key={l.id}
              className="hover:text-primary hover:bg-secondary cursor-pointer p-2 transition-all duration-300"
            >
              <a href={"#" + l.id}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
