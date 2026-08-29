import Link from "next/link";
import { ContributionGrid } from "@/components/contribution-grid";
import { EquityVisual, OptionsVisual } from "@/components/project-visuals";
import { WorkflowMap } from "@/components/workflow-map";
import { profile, projects } from "@/lib/site-data";

const architecture = [
  ["01", "Research", "Hypothesis testing, point-in-time data, walk-forward validation"],
  ["02", "Portfolio & Risk", "Signal aggregation, sizing, exposure and drawdown controls"],
  ["03", "Execution", "Order state, broker routing, fills and slippage"],
  ["04", "Post-Trade", "Positions, cash, P&L, reconciliation and review"]
] as const;

export default function HomePage() {
  const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: "Algorithmic Trader and Quant Developer", url: process.env.NEXT_PUBLIC_SITE_URL, sameAs: [profile.github, profile.linkedin], address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" }, knowsAbout: ["Algorithmic trading", "Quantitative research", "Software engineering", "Risk engineering", "Trading infrastructure"] };
  return <main className="site-shell home-page" id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
    <section className="hero"><div className="hero-copy"><p className="eyebrow">Hey, it&apos;s me <span aria-hidden="true">⌁</span></p><div className="identity"><h1>{profile.name.split(" ")[0].toUpperCase()}</h1><span>/</span><a href={profile.github} target="_blank" rel="noreferrer">{profile.handle}</a></div><p>I&apos;m an <strong>Algorithmic Trader</strong> at Shah Equity, researching and operating systematic strategies across U.S. equities and Indian index options.</p><p>As a <strong>Quant Developer</strong>, I build the trade lifecycle from signal formation and risk sizing through broker execution, position state, monitoring, and post-trade reconciliation.</p><div className="hero-actions"><a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><span>OR</span><a className="button" href={`mailto:${profile.email}`}>Email me</a></div></div><WorkflowMap /></section>
    <div data-reveal><ContributionGrid /></div>
    <section className="architecture" data-reveal aria-labelledby="architecture-title"><div className="section-intro"><p id="architecture-title">Trading system lifecycle</p><span>From research hypothesis to reconciled live position.</span></div><div className="architecture-grid">{architecture.map(([number, title, copy]) => <article key={number}><i>{number}</i><h2>{title}</h2><p>{copy}</p></article>)}</div></section>
    <section className="featured-projects" data-reveal aria-labelledby="projects-title"><div className="section-intro"><p id="projects-title">Selected trading systems</p><Link href="/systems">Review system controls ↗</Link></div><div className="project-grid">{projects.slice(0, 2).map((project, index) => <a className="project-card" href={project.source} target="_blank" rel="noreferrer" key={project.slug}>{index === 0 ? <EquityVisual /> : <OptionsVisual />}<div className="project-info"><div><h2>{project.title}</h2><span>{project.status}</span></div><p>{project.description}</p></div></a>)}</div></section>
    <footer><p>Designed and engineered by {profile.name}.</p><p>© 2026 · Hyderabad, India</p></footer>
  </main>;
}
