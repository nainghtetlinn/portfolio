import { CountUp } from "@/components/ui/count-up";
import { cn } from "@/lib/utils";
import { ArrowDownSquareIcon } from "lucide-react";

export const Stats = () => {
  return (
    <div className="relative">
      <div className="bg-background grid grid-cols-2 md:max-w-3/4 lg:grid-cols-4">
        {[
          { label: "Years of Experience", value: 4 },
          { label: "Projects Shipped", value: 8 },
          { label: "Happy Clients", value: 1 },
          { label: "Open Source", value: 1 },
        ].map((stat, i) => (
          <div
            key={i}
            className={cn(
              "hover:bg-foreground/5 relative p-8 text-center transition-colors",
              {
                "border-t border-l": true,
                "border-r": i == 1 || i == 3,
                "lg:border-r-0": i == 1,
              },
            )}
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
