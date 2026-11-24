const PT = require('./generator.js');
const assert = require('node:assert/strict');
let seed = 4242; const rnd = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>>0) / 4294967296);
// Parser
const eq = (a, b) => PT.polyEqual(PT.polyOf(PT.parse(a).list), PT.polyOf(PT.parse(b).list));
assert(eq('5x²+9x', '5x^2 + 9x')); assert(eq('-12x^5', '−12x⁵')); assert(eq('6x^2y', '6yx^2'));
assert(PT.parse('3x^2+2x^2').simplified === false); assert(PT.parse('xx').simplified === false);
assert(PT.parse('x^').ok === false); assert(PT.parse('3*x').ok === false); assert(PT.parse('').ok === false);
assert(PT.parse('7b^2 - 5b').simplified);
const skills = new Set(PT.AREAS.flatMap(a => a.skills));
let n = 0;
for (const s of skills) for (let i = 0; i < 3000; i++) {
  const t = PT.gen(s, rnd); n++;
  assert(t.prompt && t.expr && t.hint && t.explain, s);
  if (t.type === 'choice') {
    assert.equal(new Set(t.options).size, t.options.length, s + ' dup ' + t.options);
    assert(t.answer >= 0 && t.answer < t.options.length, s);
  } else {
    const sol = PT.sumText(t.solution);
    assert.equal(PT.check(t, sol).status, 'correct', s + ': ' + t.expr + ' -> ' + sol);
    assert(t.solution.every(m => m.c !== 0), s);
    // unabhängige Kontrolle: Ausdruck numerisch auswerten an Zufallswerten
    const vals = { x: 1.3, y: 0.7, a: 1.9, b: 1.1, z: 2.3, m: 0.6, c: 1.7, n: 0.9 };
    const evalExpr = e => Function('"use strict";return (' + e.split(' ').map(tok => /^[+\-*:]$/.test(tok) ? tok : '(' + tok + ')').join(' ').replace(/(\d)([a-z(])/g, '$1*$2').replace(/([a-z])(?=[a-z(])/g, '$1*').replace(/\^/g, '**').replace(/:/g, '/').replace(/([a-z])/g, v => '(' + vals[v] + ')') + ')')();
    const lhs = evalExpr(t.expr), rhs = evalExpr(sol);
    assert(Math.abs(lhs - rhs) < 1e-6 * Math.max(1, Math.abs(lhs)), s + ': ' + t.expr + ' = ' + sol + ' (' + lhs + ' vs ' + rhs + ')');
  }
}
// Monom/Binom/Polynom: Anzahl der Glieder unabhängig zählen
for (let k = 0; k < 3000; k++) {
  const t = PT.gen('glieder', rnd);
  const n = t.expr.split(/ [+-] /).length;
  assert.equal(t.options[t.answer], ['Monom','Binom','Polynom'][Math.min(n,3)-1], t.expr);
  const p = PT.gen('potenzterm', rnd);
  assert.equal(p.answer === 0, /\^\d/.test(p.expr), p.expr);
}
// Alphabetische Reihenfolge wird eingefordert
{ const t = PT.gen('alpha', rnd); const sol = PT.sumText(t.solution);
  const rev = sol.replace(/^(-?\d*)((?:[a-z](?:\^\d+)?))((?:[a-z](?:\^\d+)?))$/, '$1$3$2');
  assert.equal(PT.check(t, sol).status, 'correct'); assert.equal(PT.check(t, rev).status, 'order', rev); }
// Vorzeichenfehler wird erkannt
assert.match(PT.check({ kind: 'mul', solution: [{ c: -8, v: { b: 5 } }] }, '8b^5').message, /Vorzeichen/);
// Choice mit Polynomen: richtige Option numerisch korrekt
for (let i = 0; i < 2000; i++) for (const s of ['addmc', 'mulmc']) {
  const t = PT.gen(s, rnd); const right = t.options[t.answer];
  const e = t.expr.replace(' = ?', '');
  const fake = { type: 'input', solution: PT.parse(right).list };
  // right must equal expr; reuse check by building solution from expr parts
  const [l, op, r] = e.split(' '); const L = PT.parse(l).list[0], R = PT.parse(r).list[0];
  const k = Object.keys(L.v)[0];
  const exp = op === '+' ? { c: L.c + R.c, v: L.v } : { c: L.c * R.c, v: { [k]: L.v[k] + R.v[k] } };
  assert(PT.polyEqual(PT.polyOf([exp]), PT.polyOf(fake.solution)), s + ' ' + t.expr + ' ' + right);
}
// Diagnosen
let t = { kind: 'add', solution: [{ c: 7, v: { x: 2 } }] };
assert.match(PT.check(t, '7x^4').message, /bleibt die Hochzahl/);
t = { kind: 'mul', solution: [{ c: 6, v: { x: 5 } }], parts: { ca: 2, cb: 3, n: 2, m: 3 } };
assert.match(PT.check(t, '6x^6').message, /addiert, nicht multipliziert/);
assert.match(PT.check(t, '5x^5').message, /multipliziert, nicht addiert/);
console.log('PASS:', n, 'generierte Aufgaben + Parser + Diagnosen');
