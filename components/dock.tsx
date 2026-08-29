"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavIcon } from "./icons";

const items = [
  ["/", "Home", "home"],
  ["/work", "Work", "work"],
  ["/systems", "Systems", "systems"],
  ["/skills", "Skills", "skills"],
  ["/contact", "Contact", "contact"]
] as const;

export function Dock() {
  const pathname = usePathname();
  return (
    <nav className="dock" aria-label="Primary navigation">
      <div className="dock-inner">
        {items.map(([href, label, icon]) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link className={`dock-item${active ? " active" : ""}`} aria-current={active ? "page" : undefined} href={href} key={href}>
              <NavIcon name={icon} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
