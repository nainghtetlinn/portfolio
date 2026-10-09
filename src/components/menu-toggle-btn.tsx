"use client";

import { useMenuStore } from "@/lib/menu-store";
import { AnimatePresence, motion } from "motion/react";
import { LuMenu, LuX } from "react-icons/lu";

export const MenuToggleBtn = () => {
  const { isOpen, toggle } = useMenuStore();

  return (
    <button
      onClick={toggle}
      className="hover:text-primary cursor-pointer py-4 transition-transform duration-300 md:hidden"
      aria-label="Toggle menu"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <LuX className="size-6" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <LuMenu className="size-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
