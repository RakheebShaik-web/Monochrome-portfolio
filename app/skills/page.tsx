import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { skillGroups } from "@/lib/site-data";

export const metadata: Metadata = { title: "Skills", description: "Rakheeb Shaikh's full-stack quantitative engineering stack across research, backend, frontend, data, execution, and infrastructure.", alternates: { canonical: "/skills" } };

export default function SkillsPage() {
  return <main className="site-shell subpage" id="main"><PageHeader title="Skills" description="The complete system, not only its interface." /><p className="skills-intro">My core stack connects <strong>quantitative research</strong> to production services: Python and C++ for computation, TypeScript and React for operator interfaces, FastAPI for service boundaries, PostgreSQL and Redis for state, and Docker/Linux for deployment.</p><section className="skill-matrix" aria-label="Technical skills">{skillGroups.map(([group, skills]) => <article className="skill-group" key={group}><p>&lt;{group.toLowerCase()} /&gt;</p><div className="skill-cloud">{skills.map(skill => <span className="skill-chip" key={skill}>{skill}</span>)}</div></article>)}</section></main>;
}
