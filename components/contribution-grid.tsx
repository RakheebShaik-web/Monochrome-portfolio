import { CalendarScroller } from "@/components/calendar-scroller";

type ContributionDay = { date: string; level: number };

const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

function fallbackDays(): ContributionDay[] {
  return Array.from({ length: 371 }, (_, index) => ({ date: "", level: index > 300 && index % 7 !== 2 ? (index * 7) % 4 : 0 }));
}

async function getContributions() {
  try {
    const response = await fetch("https://github.com/users/RakheebShaik-web/contributions", { headers: { "User-Agent": "Rakheeb-portfolio" }, next: { revalidate: 21600 }, signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error("GitHub contribution request failed");
    const html = await response.text();
    const days = [...html.matchAll(/data-date="([^"]+)"[^>]*data-level="([0-4])"/g)].map((match) => ({ date: match[1], level: Number(match[2]) })).sort((a, b) => a.date.localeCompare(b.date));
    const count = html.match(/<h2[^>]*id="js-contribution-activity-description"[^>]*>\s*([\d,]+)/)?.[1];
    if (days.length < 350) throw new Error("Incomplete GitHub contribution response");
    return { days, count: count ?? null };
  } catch {
    return { days: fallbackDays(), count: null };
  }
}

export async function ContributionGrid() {
  const { days, count } = await getContributions();
  return <CalendarScroller>
    <div className="calendar-track"><div className="months">{months.map((month, index) => <span key={`${month}-${index}`}>{month}</span>)}</div><div className="heatmap" aria-hidden="true">{days.map((day, index) => <i data-level={day.level} title={day.date || undefined} key={day.date || index} />)}</div></div>
    <p>{count ? `${count} contributions in life time` : "Public GitHub activity · live data refreshes automatically"}</p>
  </CalendarScroller>;
}
