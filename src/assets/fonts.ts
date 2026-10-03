import { Orbitron, Geist_Mono } from "next/font/google";

export const orbitronSans = Orbitron({
  variable: "--font-orbitron-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
