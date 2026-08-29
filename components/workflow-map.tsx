import type { ReactNode } from "react";

const nodes = [
  ["market", "market", "Universe & Data", "live"],
  ["signal", "signal", "Signal Formation", "watch"],
  ["router", "risk", "Pre-Trade Risk", "watch"],
  ["risk", "router", "Order Routing", "live"],
  ["state", "state", "Positions & P&L", "live"],
  ["ledger", "ledger", "Post-Trade", "live"]
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
    <div className="workflow" aria-label="Trading workflow from point-in-time data through post-trade reconciliation">
      <svg className="workflow-rails" viewBox="0 0 668 183" preserveAspectRatio="none" aria-hidden="true"><path d="M450 27H610M634 51V135M450 159H610M253 159H402M58 159H205" /></svg>
      <div className="workflow-runner" aria-hidden="true">
        <svg className="execution-emblem" viewBox="0 0 48 48">
          <defs>
            <radialGradient id="runner-key-light"><stop stopColor="#fff" stopOpacity=".42"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient>
            <radialGradient id="runner-reflection"><stop stopColor="#fff" stopOpacity=".15"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient>
          </defs>
          <path className="emblem-frame" d="M8 1h39v34L35 47H1V8Z"/>
          <circle className="emblem-key-light" cx="40" cy="8" r="7"/><circle className="emblem-key-dot" cx="40" cy="8" r="1.7"/>
          <ellipse cx="10" cy="37" rx="8" ry="6" fill="url(#runner-reflection)"/>
          <path className="emblem-book" d="M8 17h11l5 7-5 7H8m32-14H29l-5 7 5 7h11M8 21h8m-8 6h8m24-6h-8m8 6h-8"/>
          <path className="emblem-fill" d="m20 24 4-4 4 4-4 4Z"/>
        </svg>
      </div>
      {nodes.map(([position, icon, label, state]) => <div className={`workflow-node node-${position}`} data-label={label} data-state={state} key={position}><NodeMark id={icon} /></div>)}
    </div>
  );
}
