export function EquityVisual() {
  return (
    <div className="project-visual equity-visual" role="img" aria-label="U.S. equities order management system">
      <div className="visual-top"><span>US EQUITIES / OMS</span><span className="status-live">ROUTER LIVE</span></div>
      <div className="visual-main">
        <div className="equity-chart"><small>NET LIQUIDATION</small><strong>$104,821.40</strong><svg viewBox="0 0 250 76" aria-hidden="true"><path className="grid" d="M0 19H250M0 38H250M0 57H250"/><path className="area" d="M0 68 20 60 39 63 59 45 78 50 98 32 118 39 139 26 160 33 181 18 201 22 222 10 250 16V76H0Z"/><path className="line" d="M0 68 20 60 39 63 59 45 78 50 98 32 118 39 139 26 160 33 181 18 201 22 222 10 250 16"/></svg></div>
        <div className="metric-stack"><span>GROSS EXP.<b>28.0%</b></span><span>WORKING<b className="amber">06</b></span><span>RECON<b className="green">0 BREAKS</b></span></div>
      </div>
      <div className="visual-tape"><span>FILL RATE 96.4%</span><span>P95 18MS</span><span>REJECTS 00</span></div>
    </div>
  );
}

export function OptionsVisual() {
  return (
    <div className="project-visual options-visual" role="img" aria-label="NSE options volatility research system">
      <div className="visual-top"><span>NIFTY / VOL LAB</span><span className="status-watch">EVENT WINDOW</span></div>
      <div className="visual-main">
        <div className="vol-chart"><small>IV TERM STRUCTURE</small><svg viewBox="0 0 250 102" aria-hidden="true"><g className="surface"><path d="M7 88C49 57 78 46 126 47s81 14 117 40M7 72c44-24 74-33 119-33s80 9 117 34M7 56c46-17 76-23 119-23s78 6 117 24M29 98c3-32 11-62 28-88m36 88c2-37 5-68 11-94m43 94V4m42 94c-2-37-6-68-11-94m65 94c-4-33-13-63-28-88"/></g><path className="smile" d="M9 86C57 83 79 22 127 22s70 61 116 64"/></svg></div>
        <div className="metric-stack"><span>IV RANK<b className="amber">72</b></span><span>25Δ SKEW<b>−3.8</b></span><span>THETA / D<b>−18.6</b></span><span>REGIME<b className="amber">SHORT VOL</b></span></div>
      </div>
      <div className="visual-tape"><span>ATM IV 14.28</span><span>PCR (OI) 1.08</span><span>MAX PAIN 24,800</span></div>
    </div>
  );
}

export function FactorVisual() {
  return <div className="project-visual factor-visual" role="img" aria-label="Explainable quantitative factor ranking"><div className="visual-top"><span>CROSS-SECTION / RANK ENGINE</span><span>VERSIONED</span></div><svg viewBox="0 0 620 128" aria-hidden="true"><g className="factor-bars"><path d="M40 92h88v12H40zm0-28h145v12H40zm0-28h214v12H40zm344 56h196v12H384zm0-28h140v12H384zm0-28h84v12h-84z"/></g><path className="factor-line" d="M42 111 124 82 206 91 289 51 372 62 455 31 536 43 582 21"/></svg><div className="visual-tape"><span>QUALITY</span><span>VALUE</span><span>MOMENTUM</span><span>VOLATILITY</span></div></div>;
}
