import { PropsWithChildren } from "react";

export const GridLabel = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-background/70 absolute top-0 left-0 z-10 border-r border-b p-2 backdrop-blur-xs">
      <span>{children}</span>
    </div>
  );
};
