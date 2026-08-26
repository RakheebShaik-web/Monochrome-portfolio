# Rakheeb Shaikh — Monochrome Portfolio

A compact, multi-page portfolio for Rakheeb Shaikh, Algorithmic Trader and Quant Developer at Shah Equity.

## Pages

- `/` — introduction, GitHub activity, timeline, trading systems, and contact links
- `/work/` — experience and operating evidence
- `/systems/` — live and research trading systems
- `/skills/` — categorized trading, research, data, and infrastructure toolkit
- `/contact/` — direct email, LinkedIn, and GitHub links

## Local preview

```bash
npm run dev
```

Open [http://localhost:4173](http://localhost:4173).

## Production build

```bash
npm run build
```

The dependency-free build copies the static site into `public/`. Vercel publishes that directory using `vercel.json`.

The GitHub calendar loads Rakheeb's public activity from `github-contributions-api.jogruber.de` and falls back to an empty calendar if that service is unavailable.

## Deployment safety

This repository is independent from the separate orange portfolio at `rakheeb.vercel.app`. Never link this Vercel project to that repository or deployment.
