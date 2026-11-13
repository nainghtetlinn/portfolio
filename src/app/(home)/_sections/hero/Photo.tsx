"use client";

import { motion } from "motion/react";
import Image from "next/image";

const ACCENT = "var(--primary)";

export const Photo = () => {
  return (
    <motion.div
      // Start fully visible so the LCP image can paint immediately.
      initial={{ scale: 0.97 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative p-2.5"
    >
      {/* Outer HUD corner brackets */}
      <span
        className="pointer-events-none absolute top-0 left-0 h-5 w-5 border-t-2 border-l-2"
        style={{ borderColor: ACCENT }}
      />
      <span
        className="pointer-events-none absolute top-0 right-0 h-5 w-5 border-t-2 border-r-2"
        style={{ borderColor: ACCENT }}
      />
      <span
        className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2"
        style={{ borderColor: ACCENT }}
      />
      <span
        className="pointer-events-none absolute right-0 bottom-0 h-5 w-5 border-r-2 border-b-2"
        style={{ borderColor: ACCENT }}
      />

      {/* Chamfered futuristic frame */}
      <div
        className="border-border/80 relative overflow-hidden border shadow-md"
        style={{
          clipPath:
            "polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)",
        }}
      >
        <div className="relative aspect-square w-72 sm:w-80 lg:w-90 xl:w-96">
          <Image
            src="/profile.webp"
            alt="Naing Htet Linn profile picture"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 384px"
            className="object-cover contrast-[1.06] grayscale"
          />

          {/* Subtle dot-matrix grid around the edges (center masked clear) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "radial-gradient(oklch(0.75 0.183 55.934 / 0.55) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
              maskImage:
                "radial-gradient(circle at center, transparent 42%, black 95%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, transparent 42%, black 95%)",
            }}
          />
        </div>

        {/* Callout 1: Top-Right corner */}
        <div className="pointer-events-none absolute top-3 right-3 flex items-center sm:top-4 sm:right-4">
          <svg
            width="44"
            height="28"
            viewBox="0 0 44 28"
            fill="none"
            className="-mr-px hidden shrink-0 drop-shadow-[0_0_6px_oklch(0.75_0.183_55.934/0.8)] sm:block"
          >
            <circle
              cx="6"
              cy="22"
              r="5"
              stroke={ACCENT}
              strokeWidth="1.2"
              strokeOpacity="0.5"
            />
            <circle cx="6" cy="22" r="2.4" fill={ACCENT} />
            <motion.path
              d="M9.5 19.5L19 14H44"
              stroke={ACCENT}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
            />
          </svg>

          <motion.div
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.4 }}
            className="flex items-center gap-1.5 bg-zinc-950/90 px-3 py-1 font-mono text-xs font-semibold tracking-wide text-zinc-100 uppercase shadow-[0_0_16px_oklch(0.75_0.183_55.934/0.35)] backdrop-blur-md sm:text-sm"
            style={{
              border: `1px solid ${ACCENT}`,
              clipPath:
                "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
            }}
          >
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
            Full-Stack
          </motion.div>
        </div>

        {/* Callout 2: Bottom-Left corner */}
        <div className="pointer-events-none absolute bottom-3 left-3 flex items-center sm:bottom-4 sm:left-4">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.5 }}
            className="flex items-center gap-1.5 bg-zinc-950/90 px-3 py-1 font-mono text-xs font-semibold tracking-wide text-zinc-100 uppercase shadow-[0_0_16px_oklch(0.75_0.183_55.934/0.35)] backdrop-blur-md sm:text-sm"
            style={{
              border: `1px solid ${ACCENT}`,
              clipPath:
                "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
            UTC+6:30 · MM
          </motion.div>

          <svg
            width="44"
            height="28"
            viewBox="0 0 44 28"
            fill="none"
            className="-ml-px hidden shrink-0 drop-shadow-[0_0_6px_oklch(0.75_0.183_55.934/0.8)] sm:block"
          >
            <motion.path
              d="M0 14H25L34.5 8.5"
              stroke={ACCENT}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
            />
            <circle
              cx="38"
              cy="6"
              r="5"
              stroke={ACCENT}
              strokeWidth="1.2"
              strokeOpacity="0.5"
            />
            <circle cx="38" cy="6" r="2.4" fill={ACCENT} />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
