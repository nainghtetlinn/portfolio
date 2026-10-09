"use client";

import { useEffect, useRef, useState } from "react";

export const SectionLabel = ({ num, text }: { num: string; text: string }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Disconnects observer so it only animates once
          observer.disconnect();
        }
      },
      // Triggers when 20% of the element is visible
      { threshold: 0.2 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Custom easing function that mimics your Framer Motion spring physics
  const springEase = "ease-[cubic-bezier(0.175,0.885,0.32,1.275)]";

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-between pt-8 pb-4"
    >
      {/* Left-sliding Title */}
      <h1
        className={`flex flex-col pl-4 transition-all duration-700 md:pl-8 ${springEase} ${
          isInView ? "translate-x-0 opacity-100" : "-translate-x-15 opacity-0"
        }`}
      >
        <span className="text-foreground">{num}</span>
        <span className="text-primary">{text}</span>
      </h1>

      {/* Right-sliding Background Text */}
      <span
        className={`text-foreground/15 pointer-events-none absolute right-0 -bottom-1/3 hidden text-7xl font-black transition-all delay-100 duration-700 sm:block md:text-8xl lg:text-9xl ${springEase} ${
          isInView ? "translate-x-0 opacity-100" : "translate-x-15 opacity-0"
        }`}
      >
        {text}
      </span>
    </div>
  );
};
