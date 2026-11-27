import {ZERO} from './case-zero.mjs';
import fs from 'node:fs';
const e = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\n/g,'<br>');
const html = `<!doctype html><html><head><meta charset="utf-8"><title>${e(ZERO.title)}</title><style>
@font-face{font-family:LG;src:url(fonts/LeagueGothic-Regular.ttf)}
@font-face{font-family:LC;src:url(fonts/LibreCaslonText-Regular.ttf)}
@font-face{font-family:LC;font-style:italic;src:url(fonts/LibreCaslonText-Italic.ttf)}
@font-face{font-family:LC;font-weight:700;src:url(fonts/LibreCaslonText-Bold.ttf)}
@page{size:Letter;margin:16mm 16mm 14mm;@bottom-right{content:counter(page) " / " counter(pages);font:9pt LG;color:#55524b}}
html{font:9.6pt/1.45 LC,serif;color:#1b1a17}
h1{font:30pt/.95 LG;text-transform:uppercase;margin:0 0 3pt}
h2{font:14pt LG;letter-spacing:.06em;text-transform:uppercase;border-bottom:.8pt solid;margin:10pt 0 5pt}
.kick{font:10pt LG;letter-spacing:.14em;color:#7d261e;text-transform:uppercase}
.sub{font-style:italic;color:#55524b;margin:0 0 8pt}
.cols{columns:2;column-gap:7mm}
.doc{break-inside:avoid;border-top:1.2pt solid;padding-top:4pt;margin:0 0 8pt}
.dl{font:12pt LG;letter-spacing:.05em;text-transform:uppercase;color:#7d261e}
table{border-collapse:collapse;width:100%}td{border-bottom:.5pt solid #8c877c;padding:2pt 4pt 2pt 0}
.p2{break-before:page}
.box{border:1pt solid;padding:6pt 8pt;margin:6pt 0;min-height:24mm}
.sealed{transform:rotate(180deg);border:1pt dashed #8c877c;padding:8pt;margin-top:8pt;font-size:9pt}
.cta{background:#f1eee6;border-left:3pt solid #7d261e;padding:8pt 10pt;margin-top:10pt}
.cta b{font:15pt LG;letter-spacing:.04em;text-transform:uppercase}
.small{font-size:8pt;color:#55524b}
</style></head><body>
<div class="kick">Free mini-case · solo · 10–15 minutes · print or read on screen</div>
<h1>${e(ZERO.title)}</h1>
<p class="sub">${e(ZERO.setup)}</p>
<h2>The people</h2><table>${ZERO.cast.map(([n,r])=>`<tr><td><b>${e(n)}</b></td><td>${e(r)}</td></tr>`).join('')}</table>
<h2>The evidence</h2><div class="cols">${ZERO.docs.map(d=>`<div class="doc"><div class="dl">${d.no} · ${e(d.name)}</div><p>${e(d.text)}</p></div>`).join('')}</div>
<section class="p2"><h2>Your accusation</h2>
<p>Write it down before you turn the page over: <b>who opened the drawer</b>, and <b>which document proves their statement false</b>.</p>
<div class="box">Culprit:<br><br>Proof (document numbers):</div>
<h2>Sealed answer (printed upside down; turn the sheet to read it)</h2>
<div class="sealed"><p><b>${e(ZERO.solution.answer)}</b></p><ol>${ZERO.solution.chain.map(s=>`<li>${e(s)}</li>`).join('')}</ol></div>
<div class="cta"><b>Liked that? The full case: The Midnight Trolley File</b>
<p>A 45–60 minute solo deduction case from 1950s Cleveland, built the same way: 30 numbered documents, 6 suspects, a five-level hint ladder in a separate file and a sealed solution that walks through every step. The logic is machine-checked so that only one answer fits. Printable PDF in US Letter and A4, $9.</p>
<p><b style="font-size:11pt">binding-bench.itch.io/midnight-trolley-file</b></p></div>
<p class="small">Case File Zero is free to play, print and share unchanged. It shares no clues or suspects with the paid case, so playing it spoils nothing. Made with AI assistance; the logic was checked by an automated script (check.mjs).</p>
</section></body></html>`;
fs.writeFileSync('case-file-zero.html', html); console.log('html', html.length);
