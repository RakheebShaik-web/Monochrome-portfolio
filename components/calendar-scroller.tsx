"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

export function CalendarScroller({ children }: { children: ReactNode }) {
  const scroller = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const element = scroller.current;
    if (!element || !window.matchMedia("(max-width: 700px)").matches) return;

    const alignToLatest = () => {
      element.scrollLeft = element.scrollWidth - element.clientWidth;
    };

    alignToLatest();
    const observer = new ResizeObserver(alignToLatest);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={scroller}
      className="contributions"
      href="https://github.com/RakheebShaik-web"
      target="_blank"
      rel="noreferrer"
      aria-label="View GitHub contribution activity"
    >
      {children}
    </a>
  );
}
