"use client";

import { useMenuStore } from "@/lib/menu-store";
import { AnimatePresence, motion } from "motion/react";
import { LuMenu, LuX } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export const MenuToggleBtn = () => {
  const { isOpen, toggle } = useMenuStore();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-expanded={isOpen}
      aria-label="Toggle menu"
      className="hover:text-primary cursor-pointer md:hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center"
          >
            <LuX className="size-5" />
          </motion.span>
        ) : (
          <motion.span
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center"
          >
            <LuMenu className="size-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
};
