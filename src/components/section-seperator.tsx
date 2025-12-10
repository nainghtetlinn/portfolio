import { cn } from "@/lib/utils";

export const SectionSeperator = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "my-4 h-8 w-full bg-[repeating-linear-gradient(45deg,var(--border)_0px,var(--border)_10px,var(--background)_10px,var(--background)_20px)] opacity-60",
        className,
      )}
    />
  );
};
