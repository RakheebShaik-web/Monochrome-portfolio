const Lamps = ({ amberLabel, greenLabel }: { amberLabel: string; greenLabel: string }) => (
  <div className="signal-lamps" aria-hidden="true">
    <span className="lamp lamp-amber">{amberLabel}</span>
    <span className="lamp lamp-green">{greenLabel}</span>
  </div>
);

export function EquityVisual() {
  const levels = [
    ["196.42", "1,840", "196.45", "920"],
    ["196.39", "2,310", "196.48", "1,460"],
    ["196.36", "3,080", "196.52", "2,120"],
    ["196.31", "4,420", "196.58", "3,760"]
  ];

  return (
    <div className="project-visual equity-visual" role="img" aria-label="Live equity execution blotter and limit order book">
      <div className="visual-top"><span>ORDER MANAGEMENT / AAPL</span><Lamps amberLabel="OPEN 03" greenLabel="BROKER SYNC" /></div>
      <div className="execution-layout">
        <div className="order-book">
          <div className="book-heading"><span>BID SIZE</span><span>BID</span><span>ASK</span><span>ASK SIZE</span></div>
          {levels.map(([bid, bidSize, ask, askSize], index) => <div className="book-level" key={bid}><span className={`depth bid-depth d${index}`}>{bidSize}</span><b>{bid}</b><b>{ask}</b><span className={`depth ask-depth d${index}`}>{askSize}</span></div>)}
          <div className="spread-line"><span>NBBO</span><strong>196.42 × 196.45</strong><em>3¢</em></div>
        </div>
        <div className="execution-ticket">
          <span className="ticket-kicker">PARENT ORDER</span><strong>BUY 120</strong><span>AAPL · LIMIT</span>
          <div className="fill-meter"><i /></div>
          <div className="ticket-stats"><span>FILLED<b>84</b></span><span>AVG PX<b>196.41</b></span></div>
        </div>
      </div>
      <div className="visual-tape"><span className="green-text">NET POS +340</span><span>GROSS EXP 28.2%</span><span className="amber-text">IS +0.7 BPS</span><span>BREAKS 0</span></div>
    </div>
  );
}

export function OptionsVisual() {
  return (
    <div className="project-visual options-visual" role="img" aria-label="NIFTY options volatility surface and strike risk monitor">
      <div className="visual-top"><span>INDEX OPTIONS / NIFTY</span><Lamps amberLabel="EVENT WINDOW" greenLabel="CHAIN 0.4S" /></div>
      <div className="vol-layout">
        <div className="vol-surface">
          <div className="surface-axis"><span>25Δ PUT</span><span>ATM 24,800</span><span>25Δ CALL</span></div>
          <svg viewBox="0 0 320 116" aria-hidden="true">
            <g className="vol-grid"><path d="M18 20H302M18 47H302M18 74H302M18 101H302M62 12V108M110 12V108M160 12V108M210 12V108M258 12V108" /></g>
            <path className="vol-fill" d="M18 37C60 42 92 70 126 83 143 89 151 92 160 92s17-3 34-10c35-14 67-37 108-45v64H18Z" />
            <path className="smile" d="M18 37C60 42 92 70 126 83 143 89 151 92 160 92s17-3 34-10c35-14 67-37 108-45" />
            <path className="atm-line" d="M160 12V101" /><circle className="atm-point" cx="160" cy="92" r="3" />
          </svg>
        </div>
        <div className="greek-stack">
          <span><small>ATM IV</small><b>14.28</b></span><span><small>25Δ RR</small><b className="amber-text">−3.8</b></span><span><small>NET GEX</small><b className="green-text">+₹18.4M</b></span><span><small>VANNA</small><b>−0.17</b></span>
        </div>
      </div>
      <div className="visual-tape"><span>IV PCTL 72</span><span>PUT/CALL OI 1.08</span><span className="amber-text">MAX PAIN 24,800</span><span>EXPIRY T−2</span></div>
    </div>
  );
}

export function FactorVisual() {
  const ranks = [["12−1 MOM", "+1.42", "82"], ["QUALITY", "+0.87", "68"], ["VALUE", "+0.31", "54"], ["LIQUIDITY", "+1.08", "75"]];
  return (
    <div className="project-visual factor-visual" role="img" aria-label="Cross-sectional alpha rank and factor attribution monitor">
      <div className="visual-top"><span>CROSS-SECTION / EQUITIES</span><Lamps amberLabel="DRIFT 0.6σ" greenLabel="SNAPSHOT VALID" /></div>
      <div className="rank-board"><div className="rank-score"><span>COMPOSITE SCORE</span><strong>87.4</strong><small>94TH PCTL</small></div><div className="rank-bars">{ranks.map(([name, value, width]) => <div className="rank-row" key={name}><span>{name}</span><i><b style={{ width: `${width}%` }} /></i><em>{value}</em></div>)}</div></div>
      <div className="visual-tape"><span className="green-text">LONG BOOK</span><span>WINSORIZED</span><span>SECTOR-NEUTRAL</span><span>15:29 SNAPSHOT</span></div>
    </div>
  );
}
