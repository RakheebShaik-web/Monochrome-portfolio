import type { Metadata, Viewport } from "next";
import { Dock } from "@/components/dock";
import { MotionReady } from "@/components/motion-ready";
import { profile, siteUrl } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl(),
  title: { default: `${profile.name} — Algorithmic Trader & Quant Developer`, template: `%s — ${profile.name}` },
  description: "Algorithmic trader and quant developer building systematic research, pre-trade risk, broker execution, position state, monitoring, and post-trade reconciliation.",
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  keywords: ["Rakheeb Shaikh", "algorithmic trader", "quant developer", "systematic trading", "execution management", "pre-trade risk", "post-trade reconciliation", "Python", "Alpaca API", "NIFTY options research"],
  alternates: { canonical: "/" },
  openGraph: { type: "profile", locale: "en_IN", url: "/", title: `${profile.name} — Systematic Trading & Quant Engineering`, description: "Signal formation, portfolio risk, broker execution, position state, and post-trade controls.", siteName: `${profile.name} Portfolio` },
  twitter: { card: "summary_large_image", title: `${profile.name} — Algorithmic Trader & Quant Developer`, description: "Systematic trading from point-in-time research through reconciled live positions." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0b0d0e", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}<MotionReady /><Dock /><div className="bottom-blur" aria-hidden="true" /></body></html>;
}
