"use client";

import { useMenuStore } from "@/lib/menu-store";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

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
          <ul className="space-y-2 pb-4">
            <li>
              <a
                href={"/"}
                className="hover:text-primary hover:bg-accent inline-block w-full cursor-pointer p-2 text-center transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href={"/#about"}
                className="hover:text-primary hover:bg-accent inline-block w-full cursor-pointer p-2 text-center transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <Link
                href={"/projects"}
                className="hover:text-primary hover:bg-accent inline-block w-full cursor-pointer p-2 text-center transition-all duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <a
                href={"/#contact"}
                className="hover:text-primary hover:bg-accent inline-block w-full cursor-pointer p-2 text-center transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
