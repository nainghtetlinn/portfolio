import React from "react";

export const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 scale-101 dark:hidden"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(71, 61, 52, 0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71, 61, 52, 0.2) 1px, transparent 1px)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
      <div
        className="absolute inset-0 hidden scale-101 dark:block"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(75, 85, 99, 0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.3) 1px, transparent 1px)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
    </div>
  );
};
