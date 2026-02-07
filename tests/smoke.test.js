import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const rootDir = path.resolve(process.cwd());
const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

assert.match(indexHtml, /<title>Fuckthebug\.com\.au<\/title>/i, 'Expected title tag to exist.');
assert.match(
  indexHtml,
  /Expert web development, bug fixing, and performance optimization/i,
  'Expected meta description to mention services.'
);

console.log('Smoke test passed.');
