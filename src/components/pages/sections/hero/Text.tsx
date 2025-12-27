"use client";

import { Button } from "@/components/ui/button";
import env from "@/config/env";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Download } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export const Text = () => {
  return (
    <div className="w-full md:flex-1">
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 inline-flex items-center gap-2"
      >
        <div className="bg-background shrink-0 border px-2 pb-1">
          <span className="text-foreground/80 mr-2 font-mono text-xs">
            {env.NEXT_PUBLIC_AVAILABLE_STATUS ? "Available" : "Unavailable"}
          </span>
          <span
            className={cn(
              "inline-block h-2 w-2 animate-ping rounded-full",
              env.NEXT_PUBLIC_AVAILABLE_STATUS ? "bg-green-500" : "bg-red-500",
            )}
          />
        </div>
        <div className="bg-secondary/60 h-px w-12" />
        <span className="text-foreground/80 shrink-0 font-mono text-xs md:text-sm">
          Full-Stack Developer
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4 text-3xl leading-tight font-semibold md:text-4xl lg:text-5xl xl:text-6xl"
      >
        <span className="text-foreground">Hey, I&apos;m </span>
        <span className="text-primary relative block italic">
          Naing Htet Linn
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-foreground/80 max-w-2xl font-mono text-sm lg:text-lg"
      >
        Software engineer from Myanmar with a passion for solving real-world
        problems using modern technologies.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-foreground/80 max-w-2xl font-mono text-sm lg:text-lg"
      >
        My core stack includes React, Next.js, Node.js, MongoDB, PostgreSQL and
        TypeScript.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-5 flex flex-col items-center gap-4 max-md:mx-auto max-md:justify-center sm:flex-row"
      >
        <Button asChild size="lg" className="group/btn border-2 font-medium">
          <a href={"#contact"}>
            Lets Connect
            <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="group/btn border-2 font-medium"
        >
          <Link href={"/resume.pdf"}>
            <Download className="size-4 transition-transform group-hover/btn:translate-y-0.5" />
            Download resume
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};
