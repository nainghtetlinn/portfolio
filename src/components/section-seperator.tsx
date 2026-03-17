import { cn } from "@/lib/utils";

export const SectionSeperator = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <div className="bg-background pt-12 pb-8">
      <div
        className={cn(
          "h-8 w-full bg-[repeating-linear-gradient(45deg,var(--border)_0px,var(--border)_10px,var(--background)_10px,var(--background)_20px)] opacity-60",
          className,
        )}
      />
    </div>
  );
};
