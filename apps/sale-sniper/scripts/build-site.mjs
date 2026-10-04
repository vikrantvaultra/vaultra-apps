// Builds the install page into public/ (served by Vercel). Run after package-extension.mjs.
//
// Copies site/* and the favicons into public/, then fills {{VERSION}}, {{FILENAME}}, {{SIZE}}, {{SHA256}} and
// {{SITE_URL}} in index.html from public/downloads/latest.json, so no version string is hard-coded anywhere.

import { cpSync, existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const PUB = join(ROOT, 'public');
const fail = (msg) => {
  throw new Error(msg);
};

const latestPath = join(PUB, 'downloads', 'latest.json');
if (!existsSync(latestPath)) fail('public/downloads/latest.json missing — run scripts/package-extension.mjs first');
const latest = JSON.parse(readFileSync(latestPath, 'utf8'));
for (const k of ['version', 'filename', 'size_bytes', 'sha256']) if (!latest[k]) fail(`latest.json has no ${k}`);

const zip = join(PUB, 'downloads', latest.filename);
if (!existsSync(zip) || statSync(zip).size !== latest.size_bytes) fail(`${latest.filename} missing or size differs from latest.json`);
if (createHash('sha256').update(readFileSync(zip)).digest('hex') !== latest.sha256) fail(`${latest.filename} sha256 differs from latest.json`);

// Absolute URL for canonical / Open Graph. Vercel exposes the production domain at build time.
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const siteUrl = (process.env.SITE_URL || (host ? `https://${host}` : 'http://localhost:4318')).replace(/\/$/, '');

cpSync(join(ROOT, 'site'), PUB, { recursive: true, filter: (p) => !p.endsWith('.DS_Store') });
for (const size of [32, 128]) cpSync(join(ROOT, 'icons', `icon-${size}.png`), join(PUB, `icon-${size}.png`));

const kb = latest.size_bytes / 1024;
const values = {
  VERSION: latest.version,
  FILENAME: latest.filename,
  SIZE: kb < 1024 ? `${Math.round(kb)} KB` : `${(kb / 1024).toFixed(1)} MB`,
  SHA256: latest.sha256,
  SITE_URL: siteUrl,
};
const indexPath = join(PUB, 'index.html');
const html = readFileSync(indexPath, 'utf8').replace(/\{\{(\w+)\}\}/g, (m, k) => (k in values ? values[k] : fail(`unknown placeholder ${m}`)));
writeFileSync(indexPath, html);

console.log(`✓ public/index.html · v${values.VERSION} · ${values.SIZE} · ${siteUrl}`);
