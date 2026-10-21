import { Button } from "@/components/ui/button";
import RotatingText from "@/components/ui/rotating-text";
import env from "@/config/env";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";

const ROLES = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "React-Native Developer",
  "Software Engineer",
];

export const Text = () => {
  return (
    <div className="w-full text-center md:flex-1 md:text-left">
      <div className="mb-4 inline-flex items-center gap-2">
        <div
          className="bg-background border-border shrink-0 border px-2 pb-0.5 md:px-3 md:pt-1 md:pb-1.5"
          aria-label="Job availability status"
        >
          {/* animate-pulse uses opacity+scale — GPU-composited, no forced reflow */}
          <span
            className={cn(
              "inline-block h-2 w-2 animate-ping rounded-full",
              env.NEXT_PUBLIC_AVAILABLE_STATUS ? "bg-green-500" : "bg-red-500",
            )}
          />
          <span
            className="text-foreground/80 ml-2 font-mono text-xs md:text-sm"
            aria-label={
              env.NEXT_PUBLIC_AVAILABLE_STATUS ? "Available" : "Unavailable"
            }
          >
            {env.NEXT_PUBLIC_AVAILABLE_STATUS ? "Available" : "Unavailable"}
          </span>
        </div>
        <div className="bg-border h-px w-12" />
        <RotatingText
          aria-label={ROLES.join(", ")}
          texts={ROLES}
          mainClassName="min-w-40 text-left text-foreground/80 shrink-0 font-mono text-xs md:text-sm"
          staggerFrom="first"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2500}
          splitBy="characters"
          auto
          loop
        />
      </div>

      {/* Main Heading — start visible so FCP is not delayed by opacity:0 */}
      <h1 className="mb-4">
        <span>Hey, I&apos;m </span>
        <span className="text-primary block italic">Naing Htet Linn</span>
      </h1>

      {/* Description */}
      <p className="text-foreground/80 mx-auto max-w-xl text-center md:mx-0 md:max-w-3xl md:text-justify">
        Software engineer from Myanmar with a passion for solving real-world
        problems using modern technologies.
      </p>

      <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
        <Button asChild variant={"default"} size={"lg"}>
          <a href={"#contact"}>
            Let&apos;s Connect
            <ArrowUpRight />
          </a>
        </Button>
        <Button asChild variant={"outline"} size={"lg"}>
          <Link href={"/resume.pdf"} prefetch={false}>
            Download resume
            <Download />
          </Link>
        </Button>
      </div>
    </div>
  );
};
