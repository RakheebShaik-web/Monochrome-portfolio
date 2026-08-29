import type { Metadata, Viewport } from "next";
import { Dock } from "@/components/dock";
import { profile, siteUrl } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl(),
  title: { default: `${profile.name} — Algorithmic Trader & Full-Stack Quant Developer`, template: `%s — ${profile.name}` },
  description: "Algorithmic trader and full-stack quant developer building systematic research, execution infrastructure, persistent state, monitoring, and reconciliation systems.",
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  keywords: ["Rakheeb Shaikh", "algorithmic trader", "quant developer", "full-stack developer", "trading systems", "Python", "Next.js", "FastAPI", "Alpaca API", "options research"],
  alternates: { canonical: "/" },
  openGraph: { type: "profile", locale: "en_IN", url: "/", title: `${profile.name} — Trading systems end to end`, description: "Research, APIs, execution, state, monitoring, and reconciliation built as complete systems.", siteName: `${profile.name} Portfolio` },
  twitter: { card: "summary_large_image", title: `${profile.name} — Algorithmic Trader & Full-Stack Quant Developer`, description: "Trading systems built from research through production operations." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0b0d0e", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}<Dock /><div className="bottom-blur" aria-hidden="true" /></body></html>;
}
