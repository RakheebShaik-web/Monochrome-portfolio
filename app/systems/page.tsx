import type { Metadata } from "next";
import { ExternalIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { EquityVisual, FactorVisual, OptionsVisual } from "@/components/project-visuals";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = { title: "Systems", description: "Full-stack quantitative trading systems spanning research, APIs, execution, state, monitoring, and reconciliation.", alternates: { canonical: "/systems" } };

export default function SystemsPage() {
  return <main className="site-shell subpage" id="main"><PageHeader title="Systems" description="Research that survives contact with execution." /><section className="systems-list" aria-label="Trading systems">{projects.map((project, index) => <article className="system-card" key={project.slug}><div className="system-art">{index === 0 ? <EquityVisual /> : index === 1 ? <OptionsVisual /> : <FactorVisual />}</div><div className="system-copy"><div className="system-heading"><h2>{project.title}</h2><span data-tone={project.tone}>{project.status}</span></div><p>{project.description}</p><dl><div><dt>Stack</dt><dd>{project.stack.join(" · ")}</dd></div><div><dt>Invariants</dt><dd>{project.invariants.join(" · ")}</dd></div></dl><a className="source-link" href={project.source} target="_blank" rel="noreferrer">View source <ExternalIcon /></a></div></article>)}</section></main>;
}
