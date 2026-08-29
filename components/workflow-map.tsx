const nodes = [
  ["market", "Market Scan", "live", "⌕"],
  ["signal", "Alpha Signal", "watch", "▥"],
  ["router", "Order Router", "live", "ϟ"],
  ["risk", "Risk Gate", "watch", "◇"],
  ["state", "Position State", "live", "∿"],
  ["ledger", "Trade Ledger", "live", "▤"]
] as const;

export function WorkflowMap() {
  return (
    <div className="workflow" aria-label="Market scan to trade ledger workflow">
      <svg className="workflow-rails" viewBox="0 0 668 183" preserveAspectRatio="none" aria-hidden="true">
        <path d="M450 27H610M634 51V135M450 159H610M253 159H402M58 159H205" />
      </svg>
      <div className="workflow-runner" aria-hidden="true">
        <svg viewBox="0 0 20 20">
          <path className="runner-ask" d="M2.5 5.5H5v2h2.5v2H9" />
          <path className="runner-bid" d="M2.5 14.5H5v-2h2.5v-2H9" />
          <path className="runner-mid" d="m9 10 2.5-2.5L14 10l-2.5 2.5L9 10Z" />
          <path className="runner-fill" d="M14 10h2.5" />
          <rect x="16.2" y="9.3" width="1.4" height="1.4" rx=".2" />
        </svg>
      </div>
      {nodes.map(([id, label, state, glyph]) => (
        <div className={`workflow-node node-${id}`} data-label={label} data-state={state} key={id}>
          <span aria-hidden="true">{glyph}</span>
        </div>
      ))}
    </div>
  );
}
