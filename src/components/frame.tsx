import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Frame = ({
  className,
  children,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div className={cn("relative", className)}>
      <div className="relative">
        <div className="absolute inset-0">
          <svg
            className="h-full w-full"
            viewBox="0 0 250 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M87.5 0.5H15.5L0.5 15.5V165.5L8 173L15.5 180.5V234.5H149.5L164.5 249.5H234.5L249.5 234.5V15.5H102.5L87.5 0.5Z"
              className="stroke-card-foreground fill-card dark:fill-stone-700"
            />
            <path
              d="M92.5 0.5L104.5 12.5H177.5L165.5 0.5H92.5Z"
              className="fill-card-foreground"
            />
            <path
              d="M182.5 12.5L170.5 0.5H209.5L221.5 12.5H182.5Z"
              className="fill-card-foreground"
            />
            <path
              d="M226.5 12.5L214.5 0.5H236.5L248.5 12.5H226.5Z"
              className="fill-card-foreground"
            />
            <path
              d="M92.5 0.5L104.5 12.5H177.5L165.5 0.5H92.5Z"
              className="stroke-card-foreground"
            />
            <path
              d="M182.5 12.5L170.5 0.5H209.5L221.5 12.5H182.5Z"
              className="stroke-card-foreground"
            />
            <path
              d="M226.5 12.5L214.5 0.5H236.5L248.5 12.5H226.5Z"
              className="stroke-card-foreground"
            />
            <path
              d="M11.5 182.5L0.5 171.5V230.5L6.5 224.5L11.5 219.5V182.5Z"
              className="fill-card-foreground"
            />
            <path
              d="M6.5 224.5L11.5 219.5V182.5L0.5 171.5V230.5L6.5 224.5ZM6.5 224.5V242.5H99.5"
              className="stroke-card-foreground"
            />
            <circle
              cx="142"
              cy="243"
              r="3.5"
              className="fill-card-foreground stroke-card-foreground"
            />
            <circle
              cx="129"
              cy="243"
              r="3.5"
              className="fill-card-foreground stroke-card-foreground"
            />
            <circle
              cx="116"
              cy="243"
              r="3.5"
              className="fill-card-foreground stroke-card-foreground"
            />
          </svg>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};
