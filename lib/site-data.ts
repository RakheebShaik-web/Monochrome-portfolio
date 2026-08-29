export const profile = {
  name: "Rakheeb Shaikh",
  handle: "@RakheebShaik-web",
  role: "Algorithmic Trader · Quant Developer",
  location: "Hyderabad, India",
  email: "shaikrakheeb280@gmail.com",
  github: "https://github.com/RakheebShaik-web",
  linkedin: "https://www.linkedin.com/in/rakheeb-shaik-aba0762b5/"
} as const;

export const projects = [
  {
    slug: "us-equities-oms",
    title: "Equity Execution Engine",
    status: "Live system",
    tone: "green",
    description: "Completed-bar signals, ATR sizing, bracket execution, persistent state, monitoring, and end-of-day reconciliation.",
    source: "https://github.com/RakheebShaik-web/alpaca.bot-eod-dashboard",
    stack: ["Python", "Alpaca API", "PostgreSQL", "Redis", "Docker"],
    invariants: ["No duplicate submissions", "Broker truth wins", "Every fill reconciles"]
  },
  {
    slug: "nse-options-lab",
    title: "NIFTY Volatility Desk",
    status: "Research",
    tone: "amber",
    description: "Volatility, trend, liquidity, and event-risk research for Indian derivatives with conservative execution assumptions.",
    source: "https://github.com/RakheebShaik-web/stocks-options-strategy",
    stack: ["Python", "pandas", "NumPy", "PostgreSQL", "FastAPI"],
    invariants: ["No look-ahead", "Auditable assumptions", "Event risk is explicit"]
  },
  {
    slug: "factor-screener",
    title: "Cross-Sectional Alpha Ranker",
    status: "Roadmap",
    tone: "neutral",
    description: "An explainable cross-sectional ranking engine across quality, value, momentum, volatility, liquidity, and trend.",
    source: "https://github.com/RakheebShaik-web/quant-screener",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript"],
    invariants: ["Explain every score", "Version every factor", "Rank reproducibly"]
  }
] as const;

export const experience = [
  {
    mark: "AI",
    organization: "NRI University",
    kind: "Education",
    role: "BTech Computer Science · AI/ML",
    date: "Graduated Mar 2025",
    location: "Vijayawada, India",
    points: ["Built a foundation in software engineering, machine learning, data structures, and quantitative problem solving."]
  },
  {
    mark: "SE",
    organization: "Shah Equity",
    kind: "Full-Time",
    role: "Algorithmic Trader · Quant Developer",
    date: "Jul 2025 – Now",
    location: "Hyderabad, India",
    points: [
      "Research and operate systematic strategies across U.S. equities and Indian options.",
      "Build signal ranking, ATR risk sizing, bracket-order execution, persistent state, monitoring, and reconciliation workflows.",
      "Review live behavior against broker truth and turn operational failure modes into permanent system invariants."
    ]
  }
] as const;

export const skillGroups = [
  ["Languages", ["Python", "TypeScript", "C++", "SQL"]],
  ["Backend", ["FastAPI", "REST APIs", "PostgreSQL", "Redis", "Validation"]],
  ["Quant", ["pandas", "NumPy", "Backtesting", "Factor Models", "Volatility", "Risk Engineering"]],
  ["Execution", ["Alpaca API", "IBKR API", "Bracket Orders", "Position Sizing", "Order Lifecycle"]],
  ["Frontend", ["React", "Next.js", "SVG Systems", "Responsive UI", "Accessibility"]],
  ["Infrastructure", ["Docker", "Linux", "GitHub Actions", "Vercel", "Monitoring", "Reconciliation"]]
] as const;

export function siteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return new URL(configured ?? (vercel ? `https://${vercel}` : "http://localhost:3000"));
}
