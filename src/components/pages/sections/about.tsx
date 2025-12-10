import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { cn } from "@/lib/utils";
import StackIcon from "tech-stack-icons";

export const AboutSection = () => {
  return (
    <section id="about">
      <h2 className="text-primary pt-8 pb-4 text-center text-3xl">
        Who am I ?
      </h2>
      <main
        className={cn(
          "grid gap-2 px-2 [&>div]:aspect-square",
          "grid-cols-2 grid-rows-6",
          "sm:grid-cols-3",
          "md:grid-cols-4",
          "lg:grid-cols-5",
          "xl:grid-cols-6",
        )}
      >
        <div className={cn("col-span-2 row-span-2")}>
          <TechStack />
        </div>
        <div className="col-span-1 row-span-1">
          <div className="bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden border">
            <InteractiveGridPattern
              className={cn(
                "mask-[radial-gradient(200px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12",
              )}
            />
          </div>
        </div>
        <div className="border"></div>
        <div className="border"></div>
        <div className="border"></div>
        <div className="border"></div>
        <div className="border"></div>
        <div className="border"></div>
        <div className="border"></div>
        <div className="border"></div>
      </main>
    </section>
  );
};

const TECH_STACKS = [
  [
    { name: "Typescript", icon: "typescript" },
    { name: "Java", icon: "java" },
    { name: "Python", icon: "python" },
    { name: "C++", icon: "c++" },
    { name: "Javascript", icon: "js" },
  ],
  [
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs2" },
    { name: "Nest.js", icon: "nestjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "SpringBoot", icon: "spring" },
  ],
];

const TechStack = () => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden border",
        "has-[div:hover]:[&>div]:paused [&>div]:grayscale-100 [&>div]:hover:grayscale-0",
      )}
    >
      {TECH_STACKS.map((items, index) => (
        <OrbitingCircles
          key={index}
          speed={0.5}
          radius={80 + index * 70}
          reverse={index % 2 === 1}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative flex h-14 w-14 items-center justify-center rounded-md transition-transform duration-300"
              aria-label={item.name}
            >
              <StackIcon name={item.icon} className="size-8" />
              <span className="absolute bottom-1 translate-y-4 rounded bg-black/50 px-1 text-[10px] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.name}
              </span>
            </div>
          ))}
        </OrbitingCircles>
      ))}
    </div>
  );
};
