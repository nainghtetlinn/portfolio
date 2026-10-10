"use client";

import { useMenuStore } from "@/lib/menu-store";
import { AnimatePresence, motion } from "motion/react";

export const MobileNavMenu = () => {
  const isOpen = useMenuStore((state) => state.isOpen);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden md:hidden"
        >
          {/* Nav links */}
          <ul className="pb-4">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
