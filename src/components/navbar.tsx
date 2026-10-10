"use client";

import { Logo } from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { MenuToggleBtn } from "./menu-toggle-btn";
import { MobileNavMenu } from "./mobile-nav-menu";
import { NavbarBackdrop } from "./navbar-backdrop";
import { ThemeToggleBtn } from "./theme-toggle-btn";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

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
        <NavbarBackdrop />

        <nav className="text-foreground relative z-10 container mx-auto px-4 md:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href={"/"}>
              <Logo />
            </a>

            {/* Nav links */}
            <ul className="hidden items-center gap-6 md:flex">
              <li className="hover:text-primary cursor-pointer p-2 transition-all duration-300">
                <a href={"/"}>Home</a>
              </li>
              <li className="hover:text-primary cursor-pointer p-2 transition-all duration-300">
                <a href={"/#about"}>About</a>
              </li>
              <li className="hover:text-primary cursor-pointer p-2 transition-all duration-300">
                <a href={"/#projects"}>Projects</a>
              </li>
              <li className="hover:text-primary cursor-pointer p-2 transition-all duration-300">
                <a href={"/#contact"}>Contact</a>
              </li>
            </ul>

            <div className="flex items-center gap-6">
              {/* Github */}
              <a
                href={siteConfig.github}
                aria-label="Github account url"
                className="hover:text-primary py-4 transition-all duration-300"
              >
                <FiGithub className="size-5" />
              </a>

              {/* Theme Toggle */}
              <ThemeToggleBtn />

              {/* Menu Toggle */}
              <MenuToggleBtn />
            </div>
          </div>

          <MobileNavMenu />
        </nav>
      </motion.header>
    </>
  );
};
