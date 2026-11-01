"use client";

import { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { PortraitPuzzleCanvasHandle } from "@/components/portrait-puzzle-canvas";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Background } from "./Background";
import { Stats } from "./Stats";
import { Text } from "./Text";

/* ----------------------------------------------------------------------- */
/*  SSR-safe dynamic import – canvas never runs on the server              */
/* ----------------------------------------------------------------------- */
const PortraitPuzzleCanvas = dynamic(
  () =>
    import("@/components/portrait-puzzle-canvas").then((m) => ({
      default: m.PortraitPuzzleCanvas,
    })),
  {
    ssr: false,
    loading: () => (
      // Matches the exact slot size so there's zero layout shift (CLS).
      // Uses bg-background to blend with the site while WebGL boots.
      <div className="bg-background/50 aspect-square w-72 rounded-lg sm:w-80 lg:w-90 xl:w-96" />
    ),
  },
);

/* ======================================================================= */
/*  Hero section                                                           */
/* ======================================================================= */

export const HeroSection = () => {
  const puzzleRef = useRef<PortraitPuzzleCanvasHandle>(null);
  const [isSolved, setIsSolved] = useState(false);
  const [alignment, setAlignment] = useState(0);

  const handleSolved = useCallback(() => setIsSolved(true), []);
  const handleAlignmentChange = useCallback(
    (pct: number) => setAlignment(pct),
    [],
  );

  return (
    <section id="home" aria-label="Home section">
      <div className="relative z-0 overflow-hidden pt-20">
        <Background />

        <main className="container mx-auto">
          <div className="flex flex-col items-center gap-8 px-4 py-6 md:flex-row md:px-8 md:py-18 lg:gap-20 lg:px-20 lg:py-24">
            {/* ── Puzzle canvas slot (replaces <Photo />) ── */}
            <div className="relative">
              {/* Canvas wrapper – sized to match the old Photo dimensions */}
              <div
                className={cn(
                  "aspect-square w-72 overflow-hidden rounded-lg sm:w-80 lg:w-90 xl:w-96",
                )}
              >
                <PortraitPuzzleCanvas
                  ref={puzzleRef}
                  onSolved={handleSolved}
                  onAlignmentChange={handleAlignmentChange}
                  className={cn(
                    isSolved
                      ? "pointer-events-none touch-action-pan-y"
                      : "touch-action-none",
                  )}
                />
              </div>

              {/* ── Floating HUD overlay ── */}
              <AnimatePresence mode="wait">
                {!isSolved ? (
                  /* Unsolved HUD */
                  <motion.div
                    key="hud-unsolved"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between py-4"
                  >
                    {/* Top: hint + alignment */}
                    <div className="flex flex-col items-center gap-1">
                      <span className="bg-background/70 text-foreground/80 rounded-full px-3 py-1 font-mono text-xs backdrop-blur-sm">
                        Drag to align portrait
                      </span>
                      <span className="text-primary font-mono text-xs font-semibold tabular-nums">
                        {alignment}%
                      </span>
                    </div>

                    {/* Bottom: Skip button */}
                    <button
                      onClick={() => puzzleRef.current?.solveNow()}
                      className="pointer-events-auto bg-background/60 text-muted-foreground hover:text-foreground hover:bg-background/80 cursor-pointer rounded-full px-3 py-1 font-mono text-xs backdrop-blur-sm transition-colors"
                    >
                      Skip →
                    </button>
                  </motion.div>
                ) : (
                  /* Solved: replay button */
                  <motion.div
                    key="hud-solved"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="absolute inset-x-0 bottom-3 flex justify-center"
                  >
                    <button
                      onClick={() => {
                        setIsSolved(false);
                        setAlignment(0);
                        puzzleRef.current?.scrambleAgain();
                      }}
                      className="bg-background/60 text-muted-foreground hover:text-foreground hover:bg-background/80 cursor-pointer rounded-full px-3 py-1 font-mono text-xs backdrop-blur-sm transition-colors"
                    >
                      Scramble 3D ↻
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Hero text content ── */}
            <motion.div
              initial={{ opacity: 0.4, y: 10 }}
              animate={
                isSolved
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0.4, y: 10 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full md:flex-1"
            >
              <Text />
            </motion.div>
          </div>

          <Stats />
        </main>
      </div>
    </section>
  );
};
