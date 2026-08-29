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
    title: "Systematic Equity Execution",
    status: "Live",
    tone: "green",
    description: "Completed-bar signal generation, volatility-adjusted sizing, bracket orders, durable order state, broker monitoring, and end-of-day position and cash reconciliation.",
    source: "https://github.com/RakheebShaik-web/alpaca.bot-eod-dashboard",
    stack: ["Python", "Alpaca API", "PostgreSQL", "Redis", "Docker"],
    invariants: ["Idempotent order submission", "Broker state is authoritative", "Fills reconcile to positions and cash"]
  },
  {
    slug: "nse-options-lab",
    title: "NIFTY Options Research",
    status: "Research",
    tone: "amber",
    description: "Point-in-time research on implied volatility, skew, liquidity, trend, and event risk in Indian index options, with conservative fill and slippage assumptions.",
    source: "https://github.com/RakheebShaik-web/stocks-options-strategy",
    stack: ["Python", "pandas", "NumPy", "PostgreSQL", "FastAPI"],
    invariants: ["Point-in-time inputs", "Costs and slippage are explicit", "Event risk is filtered"]
  },
  {
    slug: "factor-screener",
    title: "Cross-Sectional Equity Ranking",
    status: "In development",
    tone: "neutral",
    description: "Transparent equity ranking across quality, value, momentum, volatility, liquidity, and trend, with versioned factor definitions.",
    source: "https://github.com/RakheebShaik-web/quant-screener",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript"],
    invariants: ["Every score is attributable", "Factors are versioned", "Ranks are reproducible"]
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
    points: ["Coursework and projects in software engineering, machine learning, data structures, statistics, and quantitative problem solving."]
  },
  {
    mark: "SE",
    organization: "Shah Equity",
    kind: "Full-Time",
    role: "Algorithmic Trader · Quant Developer",
    date: "Jul 2025 – Now",
    location: "Hyderabad, India",
    points: [
      "Research and operate systematic strategies across U.S. equities and Indian listed derivatives.",
      "Build point-in-time signal pipelines, volatility-adjusted sizing, pre-trade controls, broker order state, and execution monitoring.",
      "Reconcile fills, positions, cash, and end-of-day P&L to broker records, then codify failure modes as permanent controls."
    ]
  }
] as const;

export const skillGroups = [
  ["Languages", ["Python", "TypeScript", "C++", "SQL"]],
  ["Backend", ["FastAPI", "REST APIs", "PostgreSQL", "Redis", "Data Validation"]],
  ["Research", ["pandas", "NumPy", "Time-Series Research", "Walk-Forward Validation", "Factor Research", "Volatility Surfaces", "Risk Models"]],
  ["Execution", ["Alpaca API", "IBKR API", "Order State Machines", "Bracket Orders", "Position Sizing", "Execution Quality", "Post-Trade Reconciliation"]],
  ["Frontend", ["React", "Next.js", "SVG Systems", "Responsive UI", "Accessibility"]],
  ["Infrastructure", ["Docker", "Linux", "GitHub Actions", "Vercel", "Observability", "Operational Controls"]]
] as const;

export function siteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return new URL(configured ?? (vercel ? `https://${vercel}` : "http://localhost:3000"));
}
