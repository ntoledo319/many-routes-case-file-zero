// Logic check: exactly one key-holder can be at the drawer at the opening time, and exactly one statement is contradicted.
import {ZERO} from './case-zero.mjs';
import assert from 'node:assert/strict';
const t = s => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
const L = ZERO.logic, open = t(L.openedAt);
const possible = L.keyHolders.filter(p => !(L.whereAt[p] || []).some(([a, b, place]) => t(a) <= open && open <= t(b) && !/Elm St office/.test(place)));
assert.deepEqual(possible, [ZERO.solution.culprit], 'exactly one key-holder can be at the drawer');
const contradicted = Object.entries(L.claims).filter(([p, [a, b, place]]) => (L.whereAt[p] || []).some(([x, y, pl]) => t(x) >= t(a) && t(y) <= t(b) && !pl.includes(place)));
assert.deepEqual(contradicted.map(c => c[0]), [ZERO.solution.culprit], 'the one false statement is the culprit’s');
for (const s of ZERO.solution.chain) for (const ref of s.match(/Z\d/g) || []) assert(ZERO.docs.some(d => d.no === ref), 'chain cites a real doc ' + ref);
assert.equal(ZERO.docs.length, 6); assert.equal(ZERO.cast.length, 5);
const PAID = /Kessler|Kline|Ferris|Okafor|Halvorsen|Panossian|Bellamy|Car 9|warranty crate/;
assert(!PAID.test(JSON.stringify(ZERO)), 'no names or clues shared with the paid case');
console.log('CASE ZERO LOGIC OK: unique culprit', possible[0], '; contradicted statement Z3; 6 docs; no shared elements');
