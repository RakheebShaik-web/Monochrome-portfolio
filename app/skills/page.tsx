import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SkillLogo } from "@/components/skill-logo";
import { skillGroups } from "@/lib/site-data";

export const metadata: Metadata = { title: "Skills", description: "Rakheeb Shaikh's quantitative engineering stack across research, backend, frontend, data, execution, and infrastructure.", alternates: { canonical: "/skills" } };

export default function SkillsPage() {
  return <main className="site-shell subpage" id="main"><PageHeader title="Skills" description="Research stack, execution stack, and production tooling." /><p className="skills-intro">My stack supports the <strong>full trade lifecycle</strong>: Python, C++, pandas, and NumPy for research; FastAPI, PostgreSQL, and Redis for stateful services; TypeScript and React for operator tooling; Docker and Linux for deployment and monitoring.</p><section className="skill-matrix" aria-label="Technical skills">{skillGroups.map(([group, skills]) => <article className="skill-group" key={group}><p>&lt;{group.toLowerCase()} /&gt;</p><div className="skill-cloud">{skills.map(skill => <span className="skill-chip" key={skill}><SkillLogo skill={skill}/><span>{skill}</span></span>)}</div></article>)}</section></main>;
}
