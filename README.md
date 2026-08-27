# Rakheeb Shaikh — Monochrome Portfolio

A responsive monochrome portfolio for **Rakheeb Shaikh**, an Algorithmic Trader and Quant Developer at Shah Equity.

**Live site:** [rakheebtrades.vercel.app](https://rakheebtrades.vercel.app/)

## Highlights

- Responsive desktop and mobile layouts
- Animated trading workflow from market data to execution
- Live GitHub contribution calendar with a safe fallback
- Original dashboard thumbnails for the U.S. Stock Bot and NSE Options System
- Categorized skill badges with tool logos
- Interactive project cards, buttons, navigation, lighting, and hover states
- Reduced-motion support for accessibility
- Fixed glass navigation dock across every page

## Pages

| Route | Content |
| --- | --- |
| `/` | Introduction, trading-flow animation, GitHub activity, timeline, projects, and social links |
| `/work/` | Professional experience and responsibilities |
| `/systems/` | Live, research, and planned quantitative trading systems |
| `/skills/` | Research, execution, data, platform, and application skills |
| `/contact/` | Email, LinkedIn, and GitHub links |

## Featured projects

### U.S. Stock Bot

An Alpaca-based automation system for completed-bar signals, ATR risk sizing, bracket execution, persistent state, monitoring, and end-of-day reconciliation.

### NSE Options System

An Indian derivatives research system covering volatility, trend, liquidity, Greeks, and event-risk analysis.

## Technology

- Semantic HTML
- CSS animations and responsive layouts
- Vanilla JavaScript
- Tailwind CSS utilities on the homepage
- Static Node.js build script
- Vercel deployment

The site intentionally avoids a heavy frontend framework. Motion and interactions are implemented with CSS and small amounts of JavaScript.

## Local development

Requirements:

- Node.js
- Python 3, used by the local static server

Start the local site:

```bash
npm run dev
```

Open [http://localhost:4173](http://localhost:4173/).

## Production build

```bash
npm run build
```

The build script recreates `public/` and copies the site pages, styles, scripts, and image assets into it. Vercel publishes the generated directory.

## Project structure

```text
.
├── assets/
│   ├── projects/       # Trading dashboard thumbnails
│   └── tools/          # Skill and platform logos
├── contact/
├── skills/
├── systems/
├── work/
├── index.html
├── custom.css          # Homepage layout and motion
├── interactions.css    # Shared interaction states
├── pages.css           # Subpage layouts
├── styles.css          # Shared design system
├── script.js           # Calendar, lighting, and page behavior
└── build.mjs
```

## GitHub contribution data

The homepage requests public contribution data for `RakheebShaik-web` from `github-contributions-api.jogruber.de`. If the service is unavailable, the page renders a fallback calendar instead of leaving the section blank.

## Deployment

Production deploys automatically from the `main` branch to the Vercel project `rakheebtrades`.

This repository and deployment are independent from the separate portfolio hosted at `rakheeb.vercel.app`.

## Contact

- [GitHub](https://github.com/RakheebShaik-web)
- [LinkedIn](https://www.linkedin.com/in/rakheeb-shaik-aba0762b5/)
- [Email](mailto:shaikrakheeb280@gmail.com)

© 2026 Rakheeb Shaikh.
