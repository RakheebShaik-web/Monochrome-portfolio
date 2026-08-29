import type { ReactNode } from "react";

const nodes = [
  ["market", "Universe", "live"],
  ["signal", "Signal Stack", "watch"],
  ["router", "Broker Route", "live"],
  ["risk", "Pre-trade Check", "watch"],
  ["state", "Position Book", "live"],
  ["ledger", "EOD Match", "live"]
] as const;

function NodeMark({ id }: { id: string }) {
  const paths: Record<string, ReactNode> = {
    market: <><circle cx="12" cy="12" r="5"/><path d="M3 12h3m12 0h3M12 3v3m0 12v3M8.5 8.5l7 7m0-7-7 7"/></>,
    signal: <><path d="M4 17 8 11l4 3 4-8 4 3"/><path d="M4 20h16"/></>,
    router: <><path d="M4 7h10m0 0-3-3m3 3-3 3M20 17H10m0 0 3-3m-3 3 3 3"/></>,
    risk: <><path d="M12 3 20 7v5c0 5-3.4 8-8 9-4.6-1-8-4-8-9V7l8-4Z"/><path d="m8 12 2.5 2.5L16 9"/></>,
    state: <><path d="M5 6c0-2 14-2 14 0s-14 2-14 0Zm0 0v6c0 2 14 2 14 0V6m-14 6v6c0 2 14 2 14 0v-6"/></>,
    ledger: <><path d="M5 3h14v18H5zM8 8h8M8 12h8M8 16h5"/></>
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[id]}</svg>;
}

export function WorkflowMap() {
  return (
    <div className="workflow" aria-label="Trading workflow from universe selection to end-of-day reconciliation">
      <svg className="workflow-rails" viewBox="0 0 668 183" preserveAspectRatio="none" aria-hidden="true"><path d="M450 27H610M634 51V135M450 159H610M253 159H402M58 159H205" /></svg>
      <div className="workflow-legend" aria-hidden="true"><span className="lamp lamp-green">MARKET OPEN</span><span className="lamp lamp-amber">RISK ARMED</span></div>
      <div className="workflow-runner" aria-hidden="true"><span className="runner-led runner-led-amber"/><span className="runner-led runner-led-green"/><b>BUY</b><svg viewBox="0 0 24 14"><path d="M2 7h15m-4-4 4 4-4 4"/><circle cx="21" cy="7" r="1.5"/></svg><small>120 AAPL</small></div>
      {nodes.map(([id, label, state]) => <div className={`workflow-node node-${id}`} data-label={label} data-state={state} key={id}><NodeMark id={id} /></div>)}
    </div>
  );
}
