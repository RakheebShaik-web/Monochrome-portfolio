const cells = Array.from({ length: 364 }, (_, i) => {
  const recent = i > 294 ? (i * 17 + i * i) % 5 : (i * 13 + 7) % 11 === 0 ? 1 : 0;
  return Math.min(4, recent);
});

export function ContributionGrid() {
  return <section className="contributions" aria-label="GitHub contribution activity"><div className="months"><span>Aug</span><span>Jul</span><span>Jun</span><span>May</span><span>Apr</span><span>Mar</span><span>Feb</span><span>Jan</span><span>Dec</span><span>Nov</span><span>Oct</span><span>Sep</span></div><div className="heatmap" aria-hidden="true">{cells.map((level, index) => <i data-level={level} key={index} />)}</div><p>1,045 GitHub contributions in the last year</p></section>;
}
