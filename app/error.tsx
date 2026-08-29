"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="site-shell state-page" id="main"><p className="state-code">runtime / recoverable</p><h1>This route failed to render.</h1><p>Retry the request. If it persists, use the direct contact link.</p><div><button className="button" onClick={reset}>Try again</button><a href="mailto:shaikrakheeb280@gmail.com">Email directly ↗</a></div></main>;
}
