export function NavIcon({ name }: { name: "home" | "work" | "systems" | "skills" | "contact" }) {
  const paths = {
    home: <><path d="M3 8.2 9 3.5l6 4.7v6.1a1.7 1.7 0 0 1-1.7 1.7H4.7A1.7 1.7 0 0 1 3 14.3Z"/><path d="M9 16v-4"/></>,
    work: <><path d="m2.5 6 6.5-3.3L15.5 6 9 9.3Z"/><path d="M4.5 9v4.2c0 1.1 2 2 4.5 2s4.5-.9 4.5-2V9M15.5 6v4"/></>,
    systems: <><path d="m9 2.7 1.8 4.5L15.3 9l-4.5 1.8L9 15.3l-1.8-4.5L2.7 9l4.5-1.8Z"/><path d="m3.5 2 .5 1.5 1.5.5-1.5.5L3.5 6 3 4.5 1.5 4 3 3.5Z"/></>,
    skills: <><path d="M15 3C8.4 3.5 5 8.3 4 12c2.1.8 5.4 1 7.5-1.2C14 8.5 13.8 5.8 15 3Z"/><path d="M3 15c2-4.5 5.2-7.5 9.5-9.2"/></>,
    contact: <><path d="M3 7.5h12v7H3Z"/><path d="M3 8l6 4 6-4M3 7.5V5a2 2 0 0 1 2-2h3l1 1.5h4a2 2 0 0 1 2 2v1"/></>
  } as const;
  return <svg aria-hidden="true" viewBox="0 0 18 18"><g>{paths[name]}</g></svg>;
}

export function ExternalIcon() {
  return <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M6 3h7v7M13 3 5 11M3 6v7h7"/></svg>;
}
