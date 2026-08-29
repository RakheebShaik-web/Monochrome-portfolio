import { ImageResponse } from "next/og";

export const alt = "Rakheeb Shaikh — Algorithmic Trader and Full-Stack Quant Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", background: "#0b0d0e", color: "#f4f4f4", padding: "72px", fontFamily: "monospace" }}><div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "space-between", border: "1px solid #292c2e", padding: "54px" }}><div style={{ display: "flex", justifyContent: "space-between", color: "#777", fontSize: 24 }}><span>RAKHEEB / SYSTEMS</span><span style={{ color: "#63d782" }}>● OPERATIONAL</span></div><div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -4 }}>Trading systems, end to end.</div><div style={{ marginTop: 24, fontSize: 30, color: "#a1a4a5" }}>Research · APIs · Execution · State · Monitoring · Reconciliation</div></div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#777" }}><span>Algorithmic Trader</span><span>Full-Stack Quant Developer</span></div></div></div>, size);
}
