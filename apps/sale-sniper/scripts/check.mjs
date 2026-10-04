// Sanity checks with no deps: manifest paths exist, every script parses.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const manifest = JSON.parse(readFileSync(join(root, 'manifest.json'), 'utf8'));
const paths = [
  ...Object.values(manifest.icons),
  manifest.action.default_popup,
  manifest.options_page,
  manifest.background.service_worker,
  ...manifest.content_scripts.flatMap((c) => c.js),
];
const missing = paths.filter((p) => !existsSync(join(root, p)));
if (missing.length) throw new Error('Missing files referenced by manifest: ' + missing.join(', '));
if (manifest.description.length > 132) throw new Error('description > 132 chars');

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
for (const f of walk(join(root, 'src')).filter((f) => f.endsWith('.js'))) execFileSync(process.execPath, ['--check', f]);
console.log(`ok — ${paths.length} manifest paths, all scripts parse`);
