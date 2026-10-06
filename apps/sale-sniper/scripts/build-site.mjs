// Builds the install page into public/sale-sniper/ (served by Vercel). Run after package-extension.mjs.
// The page lives under BASE_PATH on the shared vaultra-apps domain; the hub (apps/hub) proxies it there.
//
// Copies site/* and the favicons into public/sale-sniper/, then fills {{VERSION}}, {{FILENAME}}, {{SIZE}}, {{SHA256}},
// {{SITE_URL}} and {{BASE_PATH}} in index.html from public/sale-sniper/downloads/latest.json, so no version string is hard-coded anywhere.

import { cpSync, existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const BASE_PATH = '/sale-sniper';
const PUB = join(ROOT, 'public', BASE_PATH.slice(1));
const fail = (msg) => {
  throw new Error(msg);
};

const latestPath = join(PUB, 'downloads', 'latest.json');
if (!existsSync(latestPath)) fail('public/sale-sniper/downloads/latest.json missing — run scripts/package-extension.mjs first');
const latest = JSON.parse(readFileSync(latestPath, 'utf8'));
for (const k of ['version', 'filename', 'size_bytes', 'sha256']) if (!latest[k]) fail(`latest.json has no ${k}`);

const zip = join(PUB, 'downloads', latest.filename);
if (!existsSync(zip) || statSync(zip).size !== latest.size_bytes) fail(`${latest.filename} missing or size differs from latest.json`);
if (createHash('sha256').update(readFileSync(zip)).digest('hex') !== latest.sha256) fail(`${latest.filename} sha256 differs from latest.json`);

// Absolute URL (including BASE_PATH) for canonical / Open Graph. This project's own domain only backs the hub, so
// the public URL is the hub's.
const siteUrl = (process.env.SITE_URL || `https://vaultra-apps.vercel.app${BASE_PATH}`).replace(/\/$/, '');

cpSync(join(ROOT, 'site'), PUB, { recursive: true, filter: (p) => !p.endsWith('.DS_Store') });
for (const size of [32, 128]) cpSync(join(ROOT, 'icons', `icon-${size}.png`), join(PUB, `icon-${size}.png`));

const kb = latest.size_bytes / 1024;
const values = {
  VERSION: latest.version,
  FILENAME: latest.filename,
  SIZE: kb < 1024 ? `${Math.round(kb)} KB` : `${(kb / 1024).toFixed(1)} MB`,
  SHA256: latest.sha256,
  SITE_URL: siteUrl,
  BASE_PATH,
};
const indexPath = join(PUB, 'index.html');
const html = readFileSync(indexPath, 'utf8').replace(/\{\{(\w+)\}\}/g, (m, k) => (k in values ? values[k] : fail(`unknown placeholder ${m}`)));
writeFileSync(indexPath, html);

console.log(`✓ public/sale-sniper/index.html · v${values.VERSION} · ${values.SIZE} · ${siteUrl}`);
