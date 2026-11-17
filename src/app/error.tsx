"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuArrowUpRight, LuRotateCcw } from "react-icons/lu";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <div className="flex w-full flex-1 flex-col">
        <section className="relative flex flex-1 flex-col overflow-hidden border-b p-4 md:p-8">
          {/* Background Grid */}
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px)
      `,
              backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
            }}
          />
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              backgroundImage: `
        linear-gradient(to right, rgba(75, 85, 99, 0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.2) 1px, transparent 1px)
      `,
              backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
            }}
          />

          {/* Utility Bar */}
          <div className="relative z-10 flex justify-between gap-5">
            <div className="font-mono text-[9px] font-medium tracking-widest uppercase sm:text-[11px]">
              Error code / 500
            </div>
            <div className="font-mono text-[9px] font-medium tracking-widest uppercase sm:text-[11px]">
              [ Internal server error ]
            </div>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center"
            aria-hidden="true"
          >
            <div className="text-foreground relative z-10 translate-x-[-0.045em] text-[clamp(145px,38vw,210px)] leading-[0.8] font-bold tracking-[-0.115em] whitespace-nowrap md:text-[clamp(170px,36vw,350px)] lg:text-[clamp(180px,29vw,380px)]">
              5
              <span className="text-secondary-foreground [-webkit-text-stroke:3px_var(--foreground)] md:[-webkit-text-stroke:5px_var(--foreground)]">
                0
              </span>
              0
              <span className="absolute -top-1 -right-8 z-20 rotate-[9deg] bg-[#e13d35] px-2.5 py-2 font-mono text-[11px] tracking-[0.08em] text-white uppercase sm:-right-10 sm:text-xs md:text-sm">
                SERVER ERROR
              </span>
            </div>
          </div>

          <p className="relative z-10 text-right font-mono text-[11px] leading-normal uppercase">
            An unexpected error occurred
            <br />
            while processing this request.
          </p>
        </section>

        {/* Bottom Panel */}
        <section className="grid min-h-40 grid-cols-1 sm:grid-cols-[1.2fr_1fr_160px]">
          {/* Message Area */}
          <div className="space-y-3 border-b p-4 sm:border-r sm:border-b-0 md:px-8">
            <p className="font-mono text-[10px] tracking-[0.08em] text-[#e13d35] uppercase">
              HTTP // 500 INTERNAL ERROR
              {error.digest ? ` • ${error.digest}` : ""}
            </p>
            <h2 className="leading-none font-bold tracking-[-0.06em]">
              Something broke.
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm lg:text-base">
              The server encountered an unhandled exception. Try reloading the
              view or return home.
            </p>
          </div>

          {/* Action Area */}
          <div className="flex flex-col items-start justify-between gap-4 border-b p-4 sm:border-r sm:border-b-0 md:px-8">
            <p className="font-mono text-[10px] tracking-[0.08em] uppercase">
              Re-route your signal
            </p>
            <div className="flex flex-wrap items-center gap-3 md:mb-3">
              <Button
                onClick={() => reset()}
                className="bg-[#e13d35] text-white hover:bg-[#c72e2d] focus-visible:ring-black"
                size="lg"
              >
                Try Again <LuRotateCcw aria-hidden="true" />
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">
                  Return Home <LuArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Illustration Corner (Pixel Art) */}
          <div
            className="flex min-h-25 items-center justify-center p-[12px_18px] sm:min-h-auto sm:p-[22px_28px]"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              className="text-foreground h-14 w-14 opacity-20 dark:opacity-30"
              fill="currentColor"
              shapeRendering="crispEdges"
            >
              {/* Monitor Shell */}
              <path d="M2 3h20v14H2V3zm2 2v10h16V5H4z" />
              {/* Left X Eye */}
              <path d="M7 7h2v2H7V7zm2 2h2v2H9V9zm-2 2h2v2H7v-2z" />
              {/* Right X Eye */}
              <path d="M13 7h2v2h-2V7zm2 2h2v2h-2V9zm-2 2h2v2h-2v-2z" />
              {/* Sad Mouth */}
              <path d="M10 13h4v2h-4v-2zm-2 1h2v2H8v-2zm6 0h2v2h-2v-2z" />
              {/* Stand */}
              <path d="M10 18h4v2h-4v-2zm-2 2h8v2H8v-2z" />
            </svg>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex min-h-8 items-center justify-between border-t px-4 py-4 sm:py-2 md:px-8">
          <span className="font-mono text-[10px] tracking-[0.08em] uppercase">
            Naing Htet Linn
          </span>
          <span className="font-mono text-[10px] tracking-[0.08em] uppercase">
            © {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </div>
  );
}
