import "../styles/globals.css";

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";

import { geistMono, orbitronSans } from "@/assets/fonts";

import env from "@/config/env";
import { siteConfig } from "@/config/site";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/providers/theme-provider";
// CursorLoader is a thin Client Component that lazy-loads CustomCursor with
// ssr: false — this is required because dynamic({ ssr: false }) can only live
// inside a Client Component, not directly in a Server Component.
import { CursorLoader } from "@/components/ui/cursor-loader";

const Navbar = dynamic(
  () => import("@/components/navbar").then((m) => ({ default: m.Navbar })),
  { loading: () => <div className="h-20" /> },
);

const Footer = dynamic(
  () => import("@/components/footer").then((m) => ({ default: m.Footer })),
  { loading: () => <div className="h-24" /> },
);

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "portfolio",
    "developer portfolio",
    "creative",
    "fullstack",
    "typescript",
    "nestjs",
    "nextjs",
    "reactjs",
  ],

  openGraph: {
    images: [
      {
        url: "/portfolio_screenshot.png",
        alt: "Naing's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/*
          Preload the LCP hero image so the browser fetches it as soon as the
          HTML arrives — before React even executes. This is the single most
          impactful fix for a high LCP on mobile / slow connections.
          The `imagesizes` value matches the `sizes` prop on the <Image> below.
        */}
        <link
          rel="preload"
          as="image"
          href="/profile.webp"
          fetchPriority="high"
          imageSizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 384px"
        />
      </head>
      <body
        className={cn(
          "font-sans antialiased",
          orbitronSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <CursorLoader />

        {env.NODE_ENV === "development" && (
          <div className="fixed right-0 bottom-0 bg-blue-200 p-4">
            <span className="sm:hidden">xs</span>
            <span className="hidden sm:inline md:hidden">sm</span>
            <span className="hidden md:inline lg:hidden">md</span>
            <span className="hidden lg:inline xl:hidden">lg</span>
            <span className="hidden xl:inline">xl</span>
          </div>
        )}

        {/* lazyOnload: loads after page is fully interactive — won't block any Lighthouse metrics */}
        <Script
          strategy="lazyOnload"
          src="https://cloud.umami.is/script.js"
          data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        ></Script>
      </body>
    </html>
  );
}
