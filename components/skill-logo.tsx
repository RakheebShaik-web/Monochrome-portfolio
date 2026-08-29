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
  SQL: "SQL", "REST APIs": "API", "Data Validation": "✓", "Time-Series Research": "TS", "Walk-Forward Validation": "WF", "Factor Research": "ƒ", "Volatility Surfaces": "IV", "Risk Models": "RΔ", "Alpaca API": "A", "IBKR API": "IB", "Order State Machines": "OS", "Bracket Orders": "BO", "Position Sizing": "%", "Execution Quality": "TCA", "Post-Trade Reconciliation": "REC", "SVG Systems": "SVG", "Responsive UI": "RWD", Accessibility: "A11Y", Observability: "OBS", "Operational Controls": "CTL"
};

export function SkillLogo({ skill }: { skill: string }) {
  const logo = logos[skill];
  if (logo) {
    const color = logo.hex === "000000" ? "#f0f0f0" : `#${logo.hex}`;
    return <span className="skill-logo skill-logo-brand" style={{ color }} aria-hidden="true"><svg viewBox="0 0 24 24"><path d={logo.path}/></svg></span>;
  }
  return <span className="skill-logo skill-mark" aria-hidden="true">{marks[skill] ?? skill.slice(0, 2).toUpperCase()}</span>;
}
