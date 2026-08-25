/**
 * Build script — copies public/ into dist/ for static deployment.
 */
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, 'public');
const out = join(__dirname, 'dist');

if (!existsSync(src)) {
  console.error('public/ not found — run from repo root');
  process.exit(1);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const name of readdirSync(src)) {
  cpSync(join(src, name), join(out, name), { recursive: true });
}

console.log(`Built — ${out}`);
