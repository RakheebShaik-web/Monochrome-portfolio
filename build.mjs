import { cp, mkdir, rm } from 'node:fs/promises';
const output = new URL('./public/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await Promise.all(['index.html', 'styles.css', 'interactions.css', 'pages.css', 'script.js'].map(file => cp(new URL(file, import.meta.url), new URL(file, output))));
await Promise.all(['work', 'skills'].map(directory => cp(new URL(`${directory}/`, import.meta.url), new URL(`${directory}/`, output), { recursive: true })));
console.log('Production build written to public/');
