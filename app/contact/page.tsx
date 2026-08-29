import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { profile } from "@/lib/site-data";

export const metadata: Metadata = { title: "Contact", description: "Contact Rakheeb Shaikh about algorithmic trading, full-stack systems, quantitative research, or engineering roles.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <main className="site-shell subpage" id="main"><PageHeader title="Contact" description="Markets, systems, or engineering." /><div className="contact-layout"><div className="contact-copy"><p>I&apos;m <strong>{profile.name}</strong>, an Algorithmic Trader and Full-Stack Quant Developer based in {profile.location}.</p><p>I&apos;m especially interested in systematic research, execution reliability, risk engineering, data integrity, and the operational details that keep live systems honest.</p><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div><ContactForm /></div></main>;
}
