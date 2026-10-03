"use client";

import dynamic from "next/dynamic";

// This Client Component wrapper is needed because `ssr: false` can only be
// used inside a Client Component, not directly in a Server Component (layout.tsx).
const CustomCursor = dynamic(
  () =>
    import("@/components/ui/custom-cursor").then((m) => ({
      default: m.CustomCursor,
    })),
  { ssr: false },
);

export function CursorLoader() {
  return <CustomCursor />;
}
