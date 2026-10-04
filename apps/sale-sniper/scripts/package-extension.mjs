// Builds the PUBLIC download of the extension. No deps.
//
//   node scripts/package-extension.mjs
//
// 1. copies only manifest.json, icons/ and src/ into dist/sale-sniper/
// 2. applies the public variant there: PUBLIC_BUILD = true (auto place order hard-off) + public name/description
// 3. validates the manifest (MV3, version, every referenced file, every relative import / <script> / <link>)
// 4. zips it as public/downloads/sale-sniper-v<version>.zip with one top-level folder `sale-sniper/`
// 5. writes public/downloads/latest.json { version, filename, size_bytes, sha256, built_at }
//
// The zip is deterministic (sorted entries, fixed timestamps): same source + same Node/zlib → same sha256.
// Any problem throws and exits non-zero.

import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, relative, sep } from 'node:path';
import { deflateRawSync, inflateRawSync } from 'node:zlib';

const ROOT = new URL('..', import.meta.url).pathname;
const FOLDER = 'sale-sniper';
const DIST = join(ROOT, 'dist', FOLDER);
const OUT = join(ROOT, 'public', 'downloads');

// Only these ship. Everything else (test/, scripts/, README, package.json, …) stays behind.
const ALLOW = ['manifest.json', 'icons', 'src'];
const SKIP = new Set(['.DS_Store', 'Thumbs.db']); // OS junk: dropped quietly
const FORBIDDEN = [/(^|\/)\.git(\/|$)/, /(^|\/)node_modules(\/|$)/, /(^|\/)\.env/, /\.map$/, /\.(pem|key|p12|crx|zip)$/i, /(^|\/)\.vercel(\/|$)/];
const SECRET_PATTERNS = [
  /AKIA[0-9A-Z]{16}/, // AWS
  /\bsk-[A-Za-z0-9_-]{20,}/, // OpenAI / Anthropic-style
  /\bgh[pousr]_[A-Za-z0-9]{30,}/, // GitHub
  /AIza[0-9A-Za-z_-]{35}/, // Google
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/,
  /sourceMappingURL=/,
  /(api[_-]?key|secret|password|passwd|auth[_-]?token)\s*[:=]\s*['"][^'"]{8,}['"]/i,
];
const PUBLIC_MANIFEST = {
  name: 'Sale Sniper — sale-time checkout helper for Amazon.in & Flipkart',
  description: 'Waits for Buy Now to go live during a sale and takes you to checkout on Amazon.in & Flipkart. You approve the payment.',
};

const fail = (msg) => {
  throw new Error(msg);
};
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const rel = (p, base = DIST) => relative(base, p).split(sep).join('/');

// --- 1. copy -----------------------------------------------------------------
rmSync(join(ROOT, 'dist'), { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
for (const entry of ALLOW) {
  const src = join(ROOT, entry);
  if (!existsSync(src)) fail(`missing ${entry}`);
  cpSync(src, join(DIST, entry), { recursive: true, filter: (p) => !SKIP.has(p.split(sep).pop()) });
}
const files = walk(DIST).map((p) => rel(p)).sort();
for (const f of files) for (const re of FORBIDDEN) if (re.test(f)) fail(`refusing to ship ${f}`);

// --- 2. public variant ---------------------------------------------------------
const buildFile = join(DIST, 'src/lib/build.js');
const flagLine = 'export const PUBLIC_BUILD = false;';
const buildSrc = existsSync(buildFile) ? readFileSync(buildFile, 'utf8') : fail('src/lib/build.js missing');
if (buildSrc.split(flagLine).length !== 2) fail(`expected exactly one "${flagLine}" in src/lib/build.js`);
writeFileSync(buildFile, buildSrc.replace(flagLine, 'export const PUBLIC_BUILD = true;'));

const manifestPath = join(DIST, 'manifest.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
Object.assign(manifest, PUBLIC_MANIFEST);
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

// --- 3. validate ----------------------------------------------------------------
if (manifest.manifest_version !== 3) fail(`manifest_version must be 3, got ${manifest.manifest_version}`);
const { version } = manifest;
if (!/^\d{1,5}(\.\d{1,5}){0,3}$/.test(version || '')) fail(`manifest version "${version}" is missing or not 1-4 dot-separated integers`);
if (!manifest.name || manifest.name.length > 75) fail('manifest name missing or > 75 chars');
if (!manifest.description || manifest.description.length > 132) fail('manifest description missing or > 132 chars');

const referenced = [
  ...Object.values(manifest.icons || {}),
  ...Object.values(manifest.action?.default_icon || {}),
  manifest.action?.default_popup,
  manifest.options_page,
  manifest.options_ui?.page,
  manifest.background?.service_worker,
  ...(manifest.content_scripts || []).flatMap((c) => [...(c.js || []), ...(c.css || [])]),
  ...(manifest.web_accessible_resources || []).flatMap((w) => w.resources || []).filter((r) => !r.includes('*')),
].filter(Boolean);
const problems = referenced.filter((p) => !existsSync(join(DIST, p))).map((p) => `manifest → ${p}`);

// Relative imports in JS and local <script src>/<link href> in HTML must resolve too.
for (const f of files) {
  const abs = join(DIST, f);
  const text = readFileSync(abs, 'utf8');
  const refs =
    extname(f) === '.js'
      ? [...text.matchAll(/(?:import|export)[^'"]*?from\s*['"](\.{1,2}\/[^'"]+)['"]|import\(\s*['"](\.{1,2}\/[^'"]+)['"]/g)].map((m) => m[1] || m[2])
      : extname(f) === '.html'
        ? [...text.matchAll(/<(?:script|link)\b[^>]*?(?:src|href)="([^"#?:]+)"/g)].map((m) => m[1])
        : [];
  for (const r of refs) {
    const target = r.startsWith('/') ? join(DIST, r) : join(dirname(abs), r);
    if (!existsSync(target)) problems.push(`${f} → ${r}`);
  }
}
if (problems.length) fail('missing referenced files:\n  ' + problems.join('\n  '));

for (const f of files.filter((f) => /\.(js|html|css|json)$/.test(f))) {
  const text = readFileSync(join(DIST, f), 'utf8');
  for (const re of SECRET_PATTERNS) if (re.test(text)) fail(`${f} matches secret pattern ${re}`);
}
if (!readFileSync(buildFile, 'utf8').includes('export const PUBLIC_BUILD = true;')) fail('public flag not applied');

// --- 4. zip ---------------------------------------------------------------------
const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

// Fixed timestamp 2026-01-01 00:00 (DOS format) so builds are reproducible.
const DOS_TIME = 0;
const DOS_DATE = ((2026 - 1980) << 9) | (1 << 5) | 1;

function zip(entries) {
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const { name, data } of entries) {
    const nameBuf = Buffer.from(name, 'utf8');
    const deflated = deflateRawSync(data, { level: 9 });
    const stored = deflated.length >= data.length;
    const body = stored ? data : deflated;
    const crc = crc32(data);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4); // version needed
    local.writeUInt16LE(0x0800, 6); // UTF-8 names
    local.writeUInt16LE(stored ? 0 : 8, 8);
    local.writeUInt16LE(DOS_TIME, 10);
    local.writeUInt16LE(DOS_DATE, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(body.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuf.length, 26);
    locals.push(local, nameBuf, body);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE((3 << 8) | 20, 4); // made by: Unix
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(stored ? 0 : 8, 10);
    central.writeUInt16LE(DOS_TIME, 12);
    central.writeUInt16LE(DOS_DATE, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(body.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(nameBuf.length, 28);
    central.writeUInt32LE((0o100644 << 16) >>> 0, 38); // -rw-r--r--
    central.writeUInt32LE(offset, 42);
    centrals.push(central, nameBuf);

    offset += 30 + nameBuf.length + body.length;
  }
  const cd = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(cd.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, cd, end]);
}

// Read the zip back and check every entry inflates to the right bytes.
function verifyZip(buf, expected) {
  const eocd = buf.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  if (eocd < 0) fail('zip: no end-of-central-directory record');
  const count = buf.readUInt16LE(eocd + 10);
  if (count !== expected.length) fail(`zip: ${count} entries, expected ${expected.length}`);
  let p = buf.readUInt32LE(eocd + 16);
  for (let i = 0; i < count; i++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) fail('zip: bad central directory');
    const method = buf.readUInt16LE(p + 10);
    const crc = buf.readUInt32LE(p + 16);
    const csize = buf.readUInt32LE(p + 20);
    const nlen = buf.readUInt16LE(p + 28);
    const name = buf.toString('utf8', p + 46, p + 46 + nlen);
    const lo = buf.readUInt32LE(p + 42);
    const start = lo + 30 + buf.readUInt16LE(lo + 26) + buf.readUInt16LE(lo + 28);
    const raw = buf.subarray(start, start + csize);
    const data = method === 8 ? inflateRawSync(raw) : raw;
    if (crc32(data) !== crc || !data.equals(expected[i].data) || name !== expected[i].name) fail(`zip: entry ${name} does not round-trip`);
    p += 46 + nlen;
  }
}

const entries = files.map((f) => ({ name: `${FOLDER}/${f}`, data: readFileSync(join(DIST, f)) }));
if (!entries.some((e) => e.name === `${FOLDER}/manifest.json`)) fail('manifest.json not at sale-sniper/manifest.json');
const archive = zip(entries);
verifyZip(archive, entries);

// --- 5. write -------------------------------------------------------------------
mkdirSync(OUT, { recursive: true });
for (const old of readdirSync(OUT)) if (/^sale-sniper-v.*\.zip$/.test(old)) rmSync(join(OUT, old));
const filename = `sale-sniper-v${version}.zip`;
writeFileSync(join(OUT, filename), archive);
const latest = {
  version,
  filename,
  size_bytes: archive.length,
  sha256: createHash('sha256').update(archive).digest('hex'),
  built_at: new Date().toISOString(),
};
writeFileSync(join(OUT, 'latest.json'), JSON.stringify(latest, null, 2) + '\n');

console.log(`✓ ${files.length} files → public/downloads/${filename} (${(archive.length / 1024).toFixed(1)} KB)`);
console.log(`  sha256 ${latest.sha256}`);
console.log('  public build: auto place order hard-disabled');
