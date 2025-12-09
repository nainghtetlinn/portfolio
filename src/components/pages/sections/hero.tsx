"use client";

import { Profile } from "@/components/profile";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";
import { Particles } from "@/components/ui/particles";
import useScreenSize from "@/hooks/use-screen-size";
import { ArrowDownSquareIcon, ArrowUpRight, Download } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative z-0 overflow-hidden border-b pt-20">
      <HeroBackground />

      <div className="container mx-auto">
        <div className="px-4 py-6 md:px-8 md:pb-14 lg:px-20">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left lg:gap-12">
            <HeroPhoto />
            <HeroText />
          </div>
        </div>
        <StatsGrid />
      </div>
    </section>
  );
};

const StatsGrid = () => {
  return (
    <div className="relative">
      <div className="bg-background grid grid-cols-2 border md:max-w-3/4 md:border-0 md:border-t md:border-r lg:grid-cols-4">
        {[
          { label: "Years of Experience", value: 4 },
          { label: "Projects Shipped", value: 8 },
          { label: "Happy Clients", value: 1 },
          { label: "Open Source", value: 1 },
        ].map((stat, i) => (
          <div
            key={i}
            className="hover:bg-foreground/5 relative border p-8 text-center transition-colors"
          >
            <div className="text-foreground mb-2 text-3xl font-bold">
              <CountUp from={0} to={stat.value} />+
            </div>
            <div className="text-foreground/50 font-mono text-xs tracking-wider uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <div className="text-muted-foreground absolute right-4 bottom-2 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex">
        SCROLL DOWN
        <ArrowDownSquareIcon className="size-4 animate-pulse" />
      </div>
    </div>
  );
};

const HeroPhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div className="absolute -inset-1 rotate-3 rounded-lg border-2" />
      <div className="absolute -inset-1 -rotate-3 rounded-lg border-2" />
      <div className="bg-background relative rounded-lg border-2 p-2">
        <Profile />
      </div>
    </motion.div>
  );
};

const HeroText = () => {
  return (
    <div className="md:flex-1">
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 inline-flex items-center gap-2"
      >
        <div className="bg-background border px-2 pb-1">
          <span className="text-foreground/80 mr-2 font-mono text-xs">
            Available
          </span>
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
        </div>
        <div className="bg-secondary/60 h-px w-12" />
        <span className="text-foreground/80 font-mono text-xs md:text-sm">
          Full-Stack Developer
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4 text-3xl leading-tight font-semibold md:text-4xl lg:text-5xl xl:text-6xl"
      >
        <span className="text-foreground">Hey, I&apos;m </span>
        <p className="text-primary relative italic">Naing Htet Linn</p>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-foreground/80 max-w-2xl font-mono text-sm lg:text-lg"
      >
        Software engineer from Myanmar with a passion for solving real-world
        problems using modern technologies.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-foreground/80 max-w-2xl font-mono text-sm lg:text-lg"
      >
        My core stack includes React, Next.js, Node.js, MongoDB, PostgreSQL and
        TypeScript.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-5 flex items-center gap-4 max-md:mx-auto max-md:justify-center"
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

const HeroBackground = () => {
  const { resolvedTheme } = useTheme();
  const screenSize = useScreenSize();
  const isLight = resolvedTheme === "light";

  return (
    <div className="absolute inset-0 -z-10">
      {/* Dual Gradient Overlay Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, ${isLight ? "rgba(229,231,235,0.8)" : "rgba(75, 85, 99, 0.4)"} 1px, transparent 1px),
        linear-gradient(to bottom, ${isLight ? "rgba(229,231,235,0.8)" : "rgba(75, 85, 99, 0.4)"} 1px, transparent 1px)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />

      <Particles
        particleColors={[
          "#ff914d",
          "#d0c87a",
          "#88a6c9",
          "#8aa1ff",
          "#ff8a78",
          "#d56b96",
          "#2acfa4",
          "#60e09a",
          "#7e6bf2",
        ]}
        particleCount={
          screenSize.lessThanOrEqual("md")
            ? 150
            : screenSize.lessThanOrEqual("lg")
              ? 250
              : 350
        }
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={true}
        className="absolute inset-0"
      />
    </div>
  );
};
