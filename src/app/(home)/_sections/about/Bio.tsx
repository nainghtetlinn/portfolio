"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { LuMove, LuShuffle, LuSkipForward } from "react-icons/lu";
import { Frame } from "@/components/frame";
import type { PortraitPuzzleCanvasHandle } from "@/components/portrait-puzzle-canvas";
import { Button } from "@/components/ui/button";

const HINT_STORAGE_KEY = "puzzle-hint-seen";

// Lazy-load the heavy WebGL puzzle canvas — keeps initial bundle lean.
const PortraitPuzzleCanvas = dynamic(
  () =>
    import("@/components/portrait-puzzle-canvas").then((m) => ({
      default: m.PortraitPuzzleCanvas,
    })),
  { ssr: false },
);

export const Bio = () => {
  const puzzleRef = useRef<PortraitPuzzleCanvasHandle>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [alignment, setAlignment] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Only mount the canvas once the frame scrolls into view (perf).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSolved = useCallback(() => setIsSolved(true), []);
  const handleAlignment = useCallback((pct: number) => setAlignment(pct), []);

  const handleFirstInteract = useCallback(() => {
    setShowHint(false);
    try {
      localStorage.setItem(HINT_STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  const handleSkip = useCallback(() => {
    puzzleRef.current?.solveNow();
  }, []);

  const handleShuffle = useCallback(() => {
    setIsSolved(false);
    setAlignment(0);
    puzzleRef.current?.scrambleAgain();
  }, []);

  return (
    <section className="relative lg:flex lg:items-center">
      <article className="px-4 md:px-8">
        <p className="text-foreground/80 text-justify">
          &gt; Hello! I&apos;m Naing Htet Linn, a full-stack web developer and
          React Native developer with a strong foundation in building
          responsive, scalable applications. My journey in software development
          began with a curiosity about how the apps on our everyday devices
          work. <br />
          &gt; I work across the full-stack using technologies like TypeScript,
          React, Next.js, Express, NestJS, React Native, MongoDB, PostgreSQL,
          and Spring Boot, and I enjoy designing applications from backend
          architecture to polished user interfaces. <br />
          &gt; Outside of development, I love experimenting with Arduino
          projects, playing volleyball, badminton, and chess, and enjoying a cup
          of black coffee while exploring new technologies.
        </p>
      </article>

      <div
        ref={containerRef}
        className="mt-4 flex items-center justify-center p-4 lg:mt-0"
      >
        <div className="relative">
          <Frame className="relative aspect-square w-72 sm:w-80 lg:w-90 xl:w-96">
            {isVisible && (
              <PortraitPuzzleCanvas
                ref={puzzleRef}
                onSolved={handleSolved}
                onFirstInteract={handleFirstInteract}
                onAlignmentChange={handleAlignment}
                className="absolute inset-0"
              />
            )}
          </Frame>

          {/* First-visit drag hint overlay */}
          {showHint && (
            <div className="pointer-events-none absolute inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500">
              <LuMove className="h-8 w-8 animate-pulse text-white/90" />
              <span className="text-sm font-medium text-white/90 select-none">
                Drag to explore
              </span>
            </div>
          )}

          <div className="absolute right-4 bottom-4 z-30 flex items-center gap-1">
            {/* Alignment percentage */}
            <span className="bg-background/60 text-foreground/80 rounded px-1.5 py-0.5 font-mono text-xs tabular-nums backdrop-blur-sm lg:text-sm">
              {alignment}%
            </span>
            {/* Skip / Shuffle button */}
            {!isSolved ? (
              <Button
                onClick={handleSkip}
                aria-label="Skip puzzle"
                variant={"secondary"}
                size={"icon"}
              >
                <LuSkipForward />
              </Button>
            ) : (
              <Button
                onClick={handleShuffle}
                aria-label="Shuffle puzzle"
                variant={"secondary"}
                size={"icon"}
              >
                <LuShuffle />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
