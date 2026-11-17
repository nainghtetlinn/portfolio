import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import env from "@/config/env";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LuArrowUpRight, LuDownload } from "react-icons/lu";

// const ROLES = [
//   "Full-Stack Developer",
//   "Frontend Developer",
//   "Backend Developer",
//   "React-Native Developer",
//   "Software Engineer",
// ];

export const Text = () => {
  return (
    <div className="w-full space-y-6 text-center md:flex-1 md:text-left">
      <div className="inline-flex items-center gap-2">
        <Badge asChild variant={"outline"} size={"sm"}>
          <div className="space-x-2" aria-label="Job availability status">
            <span
              className="text-foreground/80 font-mono text-xs font-normal md:text-sm"
              aria-label={
                env.NEXT_PUBLIC_AVAILABLE_STATUS ? "Available" : "Unavailable"
              }
            >
              {env.NEXT_PUBLIC_AVAILABLE_STATUS ? "Available" : "Unavailable"}
            </span>
            {/* animate-pulse uses opacity+scale — GPU-composited, no forced reflow */}
            <span
              className={cn(
                "inline-block h-2 w-2 animate-ping rounded-full",
                env.NEXT_PUBLIC_AVAILABLE_STATUS
                  ? "bg-green-500"
                  : "bg-red-500",
              )}
            />
          </div>
        </Badge>

        <div className="bg-border h-px w-12" />
        <p className="text-foreground/80 font-mono text-xs font-normal md:text-sm">
          Remote Positions
        </p>
      </div>

      {/* Main Heading — start visible so FCP is not delayed by opacity:0 */}
      <h1>
        <span>Hey, I&apos;m </span>
        <span className="text-primary block italic">Naing Htet Linn</span>
      </h1>

      {/* Description */}
      <p className="text-foreground/80 mx-auto max-w-lg text-center md:mx-0 md:max-w-4xl md:text-justify">
        Software engineer from Myanmar with a passion for solving real-world
        problems using modern technologies.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
        <Button asChild variant={"default"} size={"lg"}>
          <a href={"#contact"}>
            Let&apos;s Connect
            <LuArrowUpRight />
          </a>
        </Button>
        <Button
          asChild
          variant={"secondary"}
          size={"lg"}
          data-umami-event="Resume button"
        >
          <Link href={"/resume.pdf"} prefetch={false}>
            Download resume
            <LuDownload />
          </Link>
        </Button>
      </div>
    </div>
  );
};
