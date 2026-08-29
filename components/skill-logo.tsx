import type { SimpleIcon } from "simple-icons";
import { siCplusplus, siDocker, siFastapi, siGithubactions, siLinux, siNextdotjs, siNumpy, siPandas, siPostgresql, siPython, siReact, siRedis, siTypescript, siVercel } from "simple-icons";

const logos: Record<string, SimpleIcon> = {
  Python: siPython,
  TypeScript: siTypescript,
  "C++": siCplusplus,
  FastAPI: siFastapi,
  PostgreSQL: siPostgresql,
  Redis: siRedis,
  pandas: siPandas,
  NumPy: siNumpy,
  React: siReact,
  "Next.js": siNextdotjs,
  Docker: siDocker,
  Linux: siLinux,
  "GitHub Actions": siGithubactions,
  Vercel: siVercel
};

const marks: Record<string, string> = {
  SQL: "SQL", "REST APIs": "API", Validation: "✓", Backtesting: "BT", "Factor Models": "ƒ", Volatility: "IV", "Risk Engineering": "RΔ", "Alpaca API": "A", "IBKR API": "IB", "Bracket Orders": "BO", "Position Sizing": "%", "Order Lifecycle": "FIX", "SVG Systems": "SVG", "Responsive UI": "RWD", Accessibility: "A11Y", Monitoring: "MON", Reconciliation: "REC"
};

export function SkillLogo({ skill }: { skill: string }) {
  const logo = logos[skill];
  if (logo) return <span className="skill-logo" aria-hidden="true"><svg viewBox="0 0 24 24"><path d={logo.path}/></svg></span>;
  return <span className="skill-logo skill-mark" aria-hidden="true">{marks[skill] ?? skill.slice(0, 2).toUpperCase()}</span>;
}
