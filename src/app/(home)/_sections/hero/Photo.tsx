"use client";

import { motion } from "motion/react";
import Image from "next/image";

export const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <motion.svg
      className={className}
      width="95"
      height="62"
      viewBox="0 0 95 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: 2 }}
      animate={{
        rotate: [2, 3, 0, 2],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <path
        d="M14.7705 15.8619C33.2146 15.2843 72.0772 22.1597 79.9754 54.2825"
        stroke="oklch(0.75 0.183 55.934)"
        strokeWidth={3}
      />
      <path
        d="M17.7987 7.81217C18.0393 11.5987 16.4421 15.8467 15.5055 19.282C15.2179 20.3369 14.9203 21.3791 14.5871 22.4078C14.4728 22.7608 14.074 22.8153 13.9187 23.136C13.5641 23.8683 12.0906 22.7958 11.7114 22.5416C8.63713 20.4812 5.49156 18.3863 2.58664 15.9321C1.05261 14.6361 2.32549 14.1125 3.42136 13.0646C4.37585 12.152 5.13317 11.3811 6.22467 10.7447C8.97946 9.13838 12.7454 8.32946 15.8379 8.01289"
        stroke="oklch(0.75 0.183 55.934)"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export const Photo = () => {
  return (
    <motion.div
      // Start fully visible so the LCP image can paint immediately.
      // Only animate scale (not opacity) to avoid delaying first paint.
      initial={{ scale: 0.95 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-lg">
        <div className="relative aspect-square w-72 sm:w-80 lg:w-90 xl:w-96">
          <Image
            src={"/profile.webp"}
            alt="Naing Htet Linn profile picture"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 384px"
            className="object-cover"
          />
        </div>

        <div className="absolute top-17 right-2 sm:top-19 sm:right-3 md:top-17 lg:top-20 xl:top-21 xl:right-5">
          <span className="bg-primary text-primary-foreground block rotate-6 rounded px-1.5 py-0.5 text-xs font-medium text-wrap">
            Serious Eyes
          </span>
        </div>

        <div className="absolute top-19 right-14 sm:top-22 sm:right-15 md:top-21 md:right-13 lg:top-25 lg:right-14 xl:top-27 xl:right-15">
          <ArrowIcon className="w-12 scale-x-[-1] -rotate-185 sm:w-14 md:w-16 lg:w-18 xl:w-20" />
        </div>

        <div className="absolute top-35 left-2 sm:top-38 sm:left-4 md:top-36 md:left-4 lg:top-43 lg:left-6 xl:top-44 xl:left-7">
          <span className="bg-primary text-primary-foreground block -rotate-8 rounded px-1.5 py-0.5 text-xs font-medium text-wrap">
            Dev Jacket
          </span>
        </div>

        <div className="absolute top-38 left-12 sm:top-42 sm:left-13 md:top-42 md:left-12 lg:top-50 lg:left-12 xl:top-52 xl:left-12">
          <ArrowIcon className="w-12 -rotate-160 sm:w-14 md:w-16 lg:w-18 xl:w-20" />
        </div>
      </div>
    </motion.div>
  );
};
