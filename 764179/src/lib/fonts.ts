import localFont from "next/font/local";

export const vazirmatn = localFont({
  src: [{ path: "../fonts/vazirmatn-var.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-vazirmatn",
  display: "swap",
  preload: true,
});

export const inter = localFont({
  src: [{ path: "../fonts/inter-var.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});
