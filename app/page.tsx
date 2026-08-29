import Link from "next/link";
import { ContributionGrid } from "@/components/contribution-grid";
import { EquityVisual, OptionsVisual } from "@/components/project-visuals";
import { WorkflowMap } from "@/components/workflow-map";
import { profile, projects } from "@/lib/site-data";

const architecture = [
  ["01", "Research", "Signals, filters, reproducible backtests"],
  ["02", "Services", "Typed APIs, workers, broker adapters"],
  ["03", "State", "PostgreSQL, Redis, idempotent workflows"],
  ["04", "Operations", "Monitoring, reconciliation, deployment"]
] as const;

export default function HomePage() {
  const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: "Algorithmic Trader and Full-Stack Quant Developer", url: process.env.NEXT_PUBLIC_SITE_URL, sameAs: [profile.github, profile.linkedin], address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" }, knowsAbout: ["Algorithmic trading", "Quantitative research", "Full-stack engineering", "Risk engineering", "Trading infrastructure"] };
  return <main className="site-shell home-page" id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
    <section className="hero"><div className="hero-copy"><p className="eyebrow">Hey, it&apos;s me <span aria-hidden="true">⌁</span></p><div className="identity"><h1>{profile.name.split(" ")[0].toUpperCase()}</h1><span>/</span><a href={profile.github} target="_blank" rel="noreferrer">{profile.handle}</a></div><p>I&apos;m an <strong>Algorithmic Trader</strong> at Shah Equity, building complete trading systems across research, APIs, execution, state, monitoring, and reconciliation.</p><p>I also work as a <strong>Full-Stack Quant Developer</strong> across U.S. equities and Indian options.</p><div className="hero-actions"><a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><span>OR</span><a className="button" href={`mailto:${profile.email}`}>Email me</a></div></div><WorkflowMap /></section>
    <ContributionGrid />
    <section className="architecture" aria-labelledby="architecture-title"><div className="section-intro"><p id="architecture-title">Full-stack ownership</p><span>From a market hypothesis to a system that can survive production.</span></div><div className="architecture-grid">{architecture.map(([number, title, copy]) => <article key={number}><i>{number}</i><h2>{title}</h2><p>{copy}</p></article>)}</div></section>
    <section className="featured-projects" aria-labelledby="projects-title"><div className="section-intro"><p id="projects-title">Selected systems</p><Link href="/systems">View architecture notes ↗</Link></div><div className="project-grid">{projects.slice(0, 2).map((project, index) => <a className="project-card" href={project.source} target="_blank" rel="noreferrer" key={project.slug}>{index === 0 ? <EquityVisual /> : <OptionsVisual />}<div className="project-info"><div><h2>{project.title}</h2><span>{project.status}</span></div><p>{project.description}</p></div></a>)}</div></section>
    <footer><p>Designed and engineered by {profile.name}.</p><p>© 2026 · Hyderabad, India</p></footer>
  </main>;
}
