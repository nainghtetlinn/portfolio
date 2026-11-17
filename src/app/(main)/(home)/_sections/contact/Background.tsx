export const Background = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.9) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.9) 1px, transparent 1px)
      `,
          backgroundSize: "60px 60px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(75, 85, 99, 0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.2) 1px, transparent 1px)
      `,
          backgroundSize: "60px 60px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
        }}
      />
    </div>
  );
};
