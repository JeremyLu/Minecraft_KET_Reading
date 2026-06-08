#!/usr/bin/env node
/**
 * build-glossary-inline.js
 *
 * 把 glossary.html 以 data: URI 方式嵌入 index.html 的抽屉 iframe 中。
 * 输出单个自包含 HTML，不需要服务器，file:// 打开即全部功能。
 *
 * data: URI 方式的好处：
 *   - 完全隔离的 CSS/JS，没有样式冲突
 *   - file:// 协议下也可正常加载（不受跨文件限制）
 *   - glossary.html 本身无需任何修改
 *
 * Usage:
 *   node build-glossary-inline.js
 *
 * Output:   index.html (merged, self-contained)
 * Backup:   index-glossary-backup.html (the raw iframe version)
 */

const fs = require('fs');
const path = require('path');

const DIR = __dirname;

// ── read source files ──────────────────────────────────────────
const indexHTML    = fs.readFileSync(path.join(DIR, 'index.html'), 'utf8');
const glossaryHTML = fs.readFileSync(path.join(DIR, 'glossary.html'), 'utf8');

// ── base64-encode the entire glossary.html ─────────────────────
const glossaryBase64 = Buffer.from(glossaryHTML, 'utf8').toString('base64');
const dataURI = `data:text/html;charset=utf-8;base64,${glossaryBase64}`;

// ── replace the iframe src with the data URI ───────────────────
// Find the glossary-iframe and set its src to the data URI
if (!indexHTML.includes('id="glossary-iframe"')) {
  console.error('ERROR: Could not find glossary-iframe in index.html');
  process.exit(1);
}

// Replace empty src="" with the data URI
const mergedHTML = indexHTML.replace(
  /(<iframe[^>]*id="glossary-iframe"[^>]*src=")[^"]*("[^>]*>)/,
  `$1${dataURI}$2`
);

// ── backup current (already-merged) index.html ─────────────────
fs.writeFileSync(
  path.join(DIR, 'index-glossary-backup.html'),
  indexHTML,
  'utf8'
);

// ── write merged output ────────────────────────────────────────
fs.writeFileSync(
  path.join(DIR, 'index.html'),
  mergedHTML,
  'utf8'
);

console.log('✅ Build complete!');
console.log(`   Glossary size: ${(glossaryBase64.length / 1024).toFixed(1)} KB (base64)`);
console.log('   Output:  index.html (self-contained, glossary embedded as data URI)');
console.log('   Backup:  index-glossary-backup.html (original version)');
console.log('   Works with file:// — no server needed.');
