export const TechBadge = ({ tech }: { tech: string }) => {
  return (
    <span className="bg-secondary text-secondary-foreground px-2 py-1 font-mono text-xs font-medium tracking-widest">
      {tech}
    </span>
  );
};
