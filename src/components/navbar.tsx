"use client";

import { Logo } from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { MenuIcon, XIcon } from "lucide-react";
import { animate, MotionValue } from "motion";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";
import { ThemeToggleBtn } from "./theme-toggle-btn";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Logic:
    // 1. If we are at the very top (less than 200px), always show.
    // 2. If scrolling down (latest > previous), hide.
    // 3. If scrolling up (latest < previous), show.
    if (latest > previous && latest > 200) {
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
        <Backdrop open={open} scrollY={scrollY} />

        <nav className="text-foreground relative z-10 container mx-auto px-4 md:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#home">
              <Logo />
            </a>

            {/* Nav links */}
            <ul className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((l) => (
                <li
                  key={l.id}
                  className="hover:text-primary cursor-pointer p-2 transition-all duration-300"
                >
                  <a href={"#" + l.id}>{l.label}</a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              {/* Github */}
              <a
                href={siteConfig.github}
                aria-label="Github account url"
                className="hover:text-primary py-4 transition-all duration-300"
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

              {/* Theme Toggle */}
              <ThemeToggleBtn className="size-7" />

              {/* Menu Toggle */}
              <button
                onClick={() => setOpen((s) => !s)}
                className="hover:text-primary cursor-pointer py-4 transition-transform duration-300 md:hidden"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XIcon />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MenuIcon />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Nav Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden md:hidden"
              >
                {/* Nav links */}
                <ul className="pb-4">
                  {NAV_LINKS.map((l) => (
                    <li
                      key={l.id}
                      className="hover:text-primary cursor-pointer p-2 transition-all duration-300"
                    >
                      <a href={"#" + l.id}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

const Backdrop = ({
  open,
  scrollY,
}: {
  open: boolean;
  scrollY: MotionValue<number>;
}) => {
  const scrollOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const backgroundOpacity = useMotionValue(0);

  useMotionValueEvent(scrollOpacity, "change", (latest) => {
    if (!open) backgroundOpacity.set(latest);
  });

  useEffect(() => {
    if (open) {
      animate(backgroundOpacity, 1, { duration: 0.3, ease: "easeInOut" });
    } else {
      animate(backgroundOpacity, scrollOpacity.get(), {
        duration: 0.3,
        ease: "easeInOut",
      });
    }
  }, [open, backgroundOpacity, scrollOpacity]);

  return (
    <motion.div
      style={{ opacity: backgroundOpacity }}
      className="bg-background/70 absolute inset-0 border-b backdrop-blur-xs"
    ></motion.div>
  );
};
