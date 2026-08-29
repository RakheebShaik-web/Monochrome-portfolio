import Link from "next/link";

export default function NotFound() {
  return <main className="site-shell state-page" id="main"><p className="state-code">404 / route not found</p><h1>The requested route is outside the system.</h1><p>Return to the portfolio or inspect the trading systems.</p><div><Link className="button" href="/">Return home</Link><Link href="/systems">View systems ↗</Link></div></main>;
}
