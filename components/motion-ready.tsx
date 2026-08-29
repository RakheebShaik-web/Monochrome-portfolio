"use client";

import { useLayoutEffect } from "react";

export function MotionReady() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const items = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    root.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    items.forEach((item) => observer.observe(item));
    return () => { observer.disconnect(); root.classList.remove("motion-ready"); };
  }, []);
  return null;
}
