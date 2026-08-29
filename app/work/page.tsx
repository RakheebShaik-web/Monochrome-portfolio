import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { experience } from "@/lib/site-data";

export const metadata: Metadata = { title: "Work", description: "Rakheeb Shaikh's education and algorithmic trading experience at Shah Equity.", alternates: { canonical: "/work" } };

export default function WorkPage() {
  return <main className="site-shell subpage" id="main"><PageHeader title="Work" description="Market and engineering experience." /><section className="work-list" aria-label="Experience">{experience.map(item => <article className="work-entry" key={item.organization}><div className="work-logo">{item.mark}</div><div className="work-title"><div><h2>{item.organization}</h2><span className="work-kind">{item.kind}</span></div><p>{item.role}</p></div><div className="work-date"><p>{item.date}<br />{item.location}</p></div><ul className="work-points">{item.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</section></main>;
}
