/* Potenzterme-Trainer – Aufgabengenerator, Parser und Prüfung.
   Reine Funktionen, im Browser (window.PT) und in Node (require) nutzbar. */
(function (root) {
  'use strict';

  var SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
  var VARS = ['x', 'y', 'a', 'b', 'z', 'm'];

  function ri(rnd, lo, hi) { return lo + Math.floor(rnd() * (hi - lo + 1)); }
  function pick(rnd, arr) { return arr[Math.floor(rnd() * arr.length)]; }
  function shuffle(rnd, arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* ---------- Monome / Polynome ----------
     Monom: { c: Koeffizient, v: { x: 2, y: 1 } }
     Polynom: Objekt key -> Koeffizient, key z. B. "x2y1" ("" = Zahl) */
  function key(v) {
    return Object.keys(v).filter(function (k) { return v[k] > 0; }).sort()
      .map(function (k) { return k + v[k]; }).join('');
  }
  function mono(c, v) { return { c: c, v: v || {} }; }
  function varText(v) {
    return Object.keys(v).filter(function (k) { return v[k] > 0; }).sort().map(function (k) {
      return v[k] === 1 ? k : k + '^' + v[k];
    }).join('');
  }
  /* Monom als Text, z. B. 3x^2, x^2, -x, 5 */
  function monoText(m) {
    var vt = varText(m.v);
    if (!vt) return String(m.c);
    if (m.c === 1) return vt;
    if (m.c === -1) return '-' + vt;
    return m.c + vt;
  }
  /* Liste von Monomen als Summe, z. B. "5x^2 + 9x", "7b^2 - 5b" */
  function sumText(list) {
    var s = '';
    list.forEach(function (m, i) {
      var t = monoText(m);
      if (i === 0) s = t;
      else if (t.charAt(0) === '-') s += ' - ' + t.slice(1);
      else s += ' + ' + t;
    });
    return s || '0';
  }
  function polyOf(list) {
    var p = {};
    list.forEach(function (m) { var k = key(m.v); p[k] = (p[k] || 0) + m.c; });
    Object.keys(p).forEach(function (k) { if (p[k] === 0) delete p[k]; });
    return p;
  }
  function polyEqual(p, q) {
    var a = Object.keys(p), b = Object.keys(q);
    if (a.length !== b.length) return false;
    return a.every(function (k) { return q[k] === p[k]; });
  }
  /* Ordnet Polynom nach Grad absteigend wieder als Monomliste */
  function polyToList(p, order) {
    var keys = Object.keys(p);
    if (order) keys.sort(function (a, b) { return order.indexOf(a) - order.indexOf(b); });
    return keys.map(function (k) {
      var v = {}, re = /([a-z])(\d+)/g, m;
      while ((m = re.exec(k))) v[m[1]] = Number(m[2]);
      return mono(p[k], v);
    });
  }

  /* Text -> HTML: ^n als Hochzahl, - als Minuszeichen, * als Malpunkt */
  function html(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/\*/g, '·')
      .replace(/(^|[\s(])-/g, '$1−')
      .replace(/\^(\d+|n)/g, '<sup>$1</sup>');
  }

  /* ---------- Eingabe-Parser ----------
     Erlaubt: 5x^2 + 9x, 5x²+9x, -12x^5, 6x^2y, 3, x^2 - 4x
     Ergebnis: { ok, list: [Monome], simplified, error } */
  function parse(input) {
    var s = String(input || '').toLowerCase()
      .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, function (m) { return '^' + m.split('').map(function (c) { return SUP[c]; }).join(''); })
      .replace(/[−–—]/g, '-').replace(/\s+/g, '');
    if (!s) return { ok: false, error: 'Schreib zuerst ein Ergebnis hinein.' };
    if (/[^0-9a-z^+\-]/.test(s)) return { ok: false, error: 'Bitte nur Zahlen, Buchstaben, + und − verwenden (Hochzahl mit ^ oder ²).' };
    var list = [], simplified = true, i = 0;
    while (i < s.length) {
      var sign = 1;
      if (s[i] === '+' || s[i] === '-') { if (s[i] === '-') sign = -1; i++; }
      else if (i > 0) return { ok: false, error: 'Das kann ich nicht lesen.' };
      var num = '';
      while (i < s.length && /\d/.test(s[i])) num += s[i++];
      var v = {}, any = false, ord = '';
      while (i < s.length && /[a-z]/.test(s[i])) {
        var name = s[i++], exp = 1; ord += name;
        if (s[i] === '^') {
          i++; var e = '';
          while (i < s.length && /\d/.test(s[i])) e += s[i++];
          if (!e) return { ok: false, error: 'Nach ^ fehlt die Hochzahl.' };
          exp = Number(e);
        }
        if (v[name]) simplified = false;
        v[name] = (v[name] || 0) + exp; any = true;
      }
      if (!num && !any) return { ok: false, error: 'Da fehlt etwas nach dem Rechenzeichen.' };
      if (s[i] === '^') return { ok: false, error: 'Eine Hochzahl gehört direkt hinter einen Buchstaben.' };
      var c = sign * (num ? Number(num) : 1);
      Object.keys(v).forEach(function (k) { if (v[k] === 0) delete v[k]; });
      var mm = mono(c, v); mm.ord = ord;
      list.push(mm);
    }
    var seen = {};
    list.forEach(function (m) { var k = key(m.v); if (seen[k] || m.c === 0) simplified = false; seen[k] = true; });
    return { ok: true, list: list, simplified: simplified };
  }

  /* ---------- Bereiche & Fertigkeiten ---------- */
  var AREAS = [
    { id: 'termarten', title: 'Termarten & Potenzterme', short: '1 Termarten', skills: ['glieder', 'glieder', 'potenzterm', 'potenzschreiben'] },
    { id: 'addsub', title: 'Addieren & Subtrahieren', short: '2 Plus & Minus', skills: ['gleichartig', 'add2', 'add3', 'addmix', 'addmc'] },
    { id: 'muldiv', title: 'Multiplizieren & Dividieren', short: '3 Mal & Durch', skills: ['pow1', 'mul', 'div', 'mul2var', 'alpha', 'mulmc', 'kombi'] },
    { id: 'mix', title: 'Alles gemischt', short: '4 Gemischt', skills: ['glieder', 'potenzterm', 'potenzschreiben', 'add2', 'addmix', 'mul', 'div', 'alpha', 'kombi', 'vergleich'] }
  ];

  var GLIEDER = ['Monom', 'Binom', 'Polynom'];

  /* ein zufälliges Glied (ohne Vorzeichen) */
  function glied(rnd) {
    var x = pick(rnd, ['x', 'y', 'a', 'b', 'z']), y = pick(rnd, ['a', 'b', 'c', 'x', 'y']);
    switch (ri(rnd, 0, 4)) {
      case 0: return String(ri(rnd, 1, 12));
      case 1: return ri(rnd, 2, 9) + x;
      case 2: return (rnd() < 0.3 ? '' : ri(rnd, 2, 9)) + x + '^' + ri(rnd, 2, 4);
      case 3: return ri(rnd, 2, 9) + ' * ' + x + (y !== x ? ' * ' + y : '');
      default: return ri(rnd, 2, 9) + (x < y ? x + y : y + x).replace(/(.)\1/, '$1^2');
    }
  }
  function gliederTerm(rnd, n) {
    var parts = [], s = '';
    for (var i = 0; i < n; i++) parts.push(glied(rnd));
    parts.forEach(function (p, i) {
      if (i === 0) s = (rnd() < 0.2 ? '-' : '') + p;
      else s += (rnd() < 0.5 ? ' + ' : ' - ') + p;
    });
    return { expr: s, parts: parts };
  }

  /* Monom / Binom / Polynom */
  function genGlieder(rnd) {
    var n = pick(rnd, [1, 1, 2, 2, 3, 4]);
    var g = gliederTerm(rnd, n), art = GLIEDER[Math.min(n, 3) - 1];
    var malHinweis = /\*/.test(g.expr) ? ' Der Malpunkt trennt keine Glieder.' : '';
    return {
      type: 'choice', prompt: 'Um welchen Term handelt es sich?', expr: g.expr,
      options: GLIEDER.slice(), answer: GLIEDER.indexOf(art), fixedOrder: true,
      hint: 'Zähle die Glieder: Sie werden durch + oder − getrennt. 1 Glied = Monom, 2 = Binom, 3 oder mehr = Polynom.',
      explain: n + (n === 1 ? ' Glied' : ' Glieder') + ' → ' + art + '.' + malHinweis
    };
  }

  /* Ist es ein Potenzterm? (mindestens eine Potenz) */
  function genPotenzterm(rnd) {
    var want = rnd() < 0.5, g, tries = 0;
    do { g = gliederTerm(rnd, ri(rnd, 1, 3)); tries++; } while (/\^/.test(g.expr) !== want && tries < 50);
    var has = /\^/.test(g.expr);
    var pot = (g.expr.match(/[a-z]\^\d+/g) || [])[0];
    return {
      type: 'choice', prompt: 'Ist das ein Potenzterm?', expr: g.expr,
      options: ['Ja, Potenzterm', 'Nein, kein Potenzterm'], answer: has ? 0 : 1, fixedOrder: true,
      hint: 'Ein Potenzterm enthält mindestens eine Potenz (eine Hochzahl).',
      explain: has ? 'Er enthält die Potenz ' + pot + '.' : 'Es kommt keine Potenz (keine Hochzahl) vor.'
    };
  }

  function exps(rnd) { return ri(rnd, 2, 5); }

  /* Auswahl-Aufgabe mit Polynom-Antworten (eindeutige Optionen) */
  function choicePoly(rnd, prompt, expr, correctList, wrongLists, hint, explain) {
    var seen = {}, opts = [];
    [correctList].concat(wrongLists).forEach(function (l) {
      var t = sumText(l);
      if (!seen[t]) { seen[t] = 1; opts.push(t); }
    });
    var correct = opts[0];
    opts = shuffle(rnd, opts.slice(0, 4));
    return { type: 'choice', prompt: prompt, expr: expr, options: opts, answer: opts.indexOf(correct), hint: hint, explain: explain };
  }

  function gen(skill, rnd) {
    var x = pick(rnd, VARS), y, n, m, a, b, c, v;
    switch (skill) {
      case 'glieder': return genGlieder(rnd);
      case 'potenzterm': return genPotenzterm(rnd);
      case 'potenzschreiben': {
        c = pick(rnd, [1, 1, 2, 2, 3, 4, 5]); n = c >= 3 ? ri(rnd, 2, 3) : ri(rnd, 2, 5);
        var f = (c === 1 ? '' : c) + x, arr = [];
        for (var q = 0; q < n; q++) arr.push(f);
        v = {}; v[x] = n;
        var cn = Math.pow(c, n);
        return {
          type: 'input', prompt: 'Schreibe als Potenz.', expr: arr.join(' * '),
          solution: [mono(cn, v)], kind: 'mul',
          hint: 'Zähle, wie oft ' + x + ' vorkommt' + (c > 1 ? ', und rechne die Zahlen: ' + arr.map(function () { return c; }).join(' · ') : '') + '.',
          explain: (c > 1 ? arr.map(function () { return c; }).join(' · ') + ' = ' + cn + ', ' : '') + x + ' kommt ' + n + '-mal vor → ' + monoText(mono(cn, v)) + '.'
        };
      }
      case 'gleichartig': {
        n = exps(rnd); a = ri(rnd, 2, 9); b = ri(rnd, 1, 9);
        y = pick(rnd, VARS.filter(function (k) { return k !== x; }));
        var kinds = [
          [mono(a, { [x]: n }), mono(b, { [x]: n }), true, 'Gleiche Variable ' + x + ' und gleiche Hochzahl ' + n + '.'],
          [mono(a, { [x]: n }), mono(a, { [x]: n + 1 }), false, 'Die Hochzahlen sind verschieden (' + n + ' und ' + (n + 1) + ').'],
          [mono(a, { [x]: n }), mono(b, { [y]: n }), false, 'Verschiedene Variablen (' + x + ' und ' + y + ').'],
          [mono(a, { [x]: 1 }), mono(b, { [x]: 1 }), true, 'Beide haben ' + x + ' mit Hochzahl 1.'],
          [mono(a, { [x]: 1 }), mono(a, { [x]: n }), false, x + ' ist ' + x + '¹, das andere ist ' + x + '^' + n + '.']
        ];
        var k = pick(rnd, kinds);
        return {
          type: 'choice', prompt: 'Darfst du diese beiden Terme zusammenfassen?',
          expr: monoText(k[0]) + '   und   ' + monoText(k[1]),
          options: ['Ja, gleichartig', 'Nein, nicht gleichartig'], answer: k[2] ? 0 : 1, fixedOrder: true,
          hint: 'Gleichartig heißt: gleiche Variable UND gleiche Hochzahl.',
          explain: k[3]
        };
      }
      case 'add2': {
        n = exps(rnd); a = ri(rnd, 2, 12); b = ri(rnd, 1, 9);
        var minus = rnd() < 0.5 && a > b;
        v = {}; v[x] = n;
        c = minus ? a - b : a + b;
        return {
          type: 'input', prompt: 'Fasse zusammen.', expr: monoText(mono(a, v)) + (minus ? ' - ' : ' + ') + monoText(mono(b, v)),
          solution: [mono(c, v)], kind: 'add',
          hint: 'Rechne nur mit den Zahlen davor: ' + a + (minus ? ' − ' : ' + ') + b + '. Die Hochzahl bleibt ' + n + '.',
          explain: a + (minus ? ' − ' : ' + ') + b + ' = ' + c + ', ' + varText(v) + ' bleibt gleich.'
        };
      }
      case 'add3': {
        n = exps(rnd); v = {}; v[x] = n;
        a = ri(rnd, 3, 9); b = ri(rnd, 1, 6); c = ri(rnd, 1, Math.min(9, a + b - 1));
        var ops = rnd() < 0.5 ? ['+', '-'] : ['-', '+'];
        if (ops[0] === '-' && b >= a) { var tt = a; a = b + 1; b = tt; }
        var r1 = ops[0] === '+' ? a + b : a - b;
        var res = ops[1] === '+' ? r1 + c : r1 - c;
        if (res <= 0) { ops[1] = '+'; res = r1 + c; }
        return {
          type: 'input', prompt: 'Fasse zusammen.',
          expr: monoText(mono(a, v)) + ' ' + ops[0] + ' ' + monoText(mono(b, v)) + ' ' + ops[1] + ' ' + monoText(mono(c, v)),
          solution: [mono(res, v)], kind: 'add',
          hint: 'Alle drei sind gleichartig. Rechne ' + a + ' ' + ops[0] + ' ' + b + ' ' + ops[1] + ' ' + c + '.',
          explain: a + ' ' + ops[0] + ' ' + b + ' ' + ops[1] + ' ' + c + ' = ' + res + '. Die Hochzahl bleibt ' + n + '.'
        };
      }
      case 'addmix': {
        n = ri(rnd, 2, 4); m = n - 1;
        var hi = {}; hi[x] = n; var lo = {}; if (m > 0) lo[x] = m;
        var useConst = rnd() < 0.25; if (useConst) lo = {};
        var p1 = ri(rnd, 2, 8), p2 = ri(rnd, 1, 6), q1 = ri(rnd, 1, 8), q2 = ri(rnd, 1, 7);
        var s1 = rnd() < 0.4 ? -1 : 1, s2 = rnd() < 0.4 ? -1 : 1;
        if (s1 < 0 && p2 >= p1) s1 = 1;
        var parts = [mono(p1, hi), mono(q1, lo), mono(s1 * p2, hi), mono(s2 * q2, lo)];
        if (rnd() < 0.5) parts = [parts[0], parts[1], parts[3], parts[2]];
        var poly = polyOf(parts);
        var order = [key(hi), key(lo)];
        var sol = polyToList(poly, order);
        if (!sol.length || Object.keys(poly).length < 2) return gen('addmix', rnd);
        return {
          type: 'input', prompt: 'Ordne gleichartige Terme und fasse zusammen.', expr: sumText(parts),
          solution: sol, kind: 'add',
          hint: 'Suche zuerst alle Terme mit ' + varText(hi) + ', dann alle mit ' + (varText(lo) || 'ohne Variable') + '.',
          explain: 'Zusammen: ' + sumText(sol) + '. Verschiedene Hochzahlen bleiben getrennt.'
        };
      }
      case 'addmc': {
        n = exps(rnd); a = ri(rnd, 2, 8); b = ri(rnd, 2, 8); v = {}; v[x] = n;
        var w1 = {}; w1[x] = 2 * n; var w2 = {}; w2[x] = n;
        return choicePoly(rnd, 'Was ist richtig?', monoText(mono(a, v)) + ' + ' + monoText(mono(b, v)) + ' = ?',
          [mono(a + b, v)], [[mono(a + b, w1)], [mono(a * b, w1)], [mono(a * b, w2)]],
          'Beim Addieren ändert sich die Hochzahl nicht.',
          a + ' + ' + b + ' = ' + (a + b) + ', die Hochzahl bleibt ' + n + '.');
      }
      case 'pow1': {
        n = ri(rnd, 2, 6); m = ri(rnd, 1, 5);
        var mul = rnd() < 0.55;
        if (!mul && m >= n) { var t2 = n; n = m + 1; m = t2; }
        var r = mul ? n + m : n - m;
        var A = {}; A[x] = n; var B = {}; B[x] = m; var R = {}; R[x] = r;
        return {
          type: 'input', prompt: 'Schreibe als eine Potenz.', expr: varText(A) + (mul ? ' * ' : ' : ') + varText(B),
          solution: [mono(1, R)], kind: mul ? 'mul' : 'div',
          hint: (m === 1 ? x + ' bedeutet ' + x + '¹. ' : '') + (mul ? 'Mal: Hochzahlen addieren.' : 'Durch: Hochzahlen subtrahieren.'),
          explain: (mul ? n + ' + ' + m : n + ' − ' + m) + ' = ' + r + ' → ' + varText(R) + '.'
        };
      }
      case 'mul': {
        n = ri(rnd, 1, 5); m = ri(rnd, 1, 4); a = ri(rnd, 2, 7); b = ri(rnd, 2, 6);
        var A2 = {}; A2[x] = n; var B2 = {}; B2[x] = m; var R2 = {}; R2[x] = n + m;
        var ca = rnd() < 0.35 ? -a : a, cb = rnd() < 0.3 ? -b : b;
        var neg = function (mm) { var tx = monoText(mm); return mm.c < 0 ? '(' + tx + ')' : tx; };
        return {
          type: 'input', prompt: 'Multipliziere.', expr: neg(mono(ca, A2)) + ' * ' + neg(mono(cb, B2)),
          solution: [mono(ca * cb, R2)], kind: 'mul', parts: { ca: ca, cb: cb, n: n, m: m },
          hint: 'Zahlen mal Zahlen: ' + ca + ' · ' + cb + (ca < 0 || cb < 0 ? ' (Vorzeichen beachten!)' : '') + '. Hochzahlen addieren: ' + n + ' + ' + m + '.',
          explain: ca + ' · ' + cb + ' = ' + ca * cb + ' und ' + n + ' + ' + m + ' = ' + (n + m) + '.'
        };
      }
      case 'div': {
        m = ri(rnd, 1, 4); var rr = ri(rnd, 0, 4); n = m + rr; b = ri(rnd, 2, 6); c = ri(rnd, 2, 6); a = b * c;
        var sg = rnd() < 0.3 ? pick(rnd, [[-1, 1], [1, -1], [-1, -1]]) : [1, 1];
        a *= sg[0]; b *= sg[1]; c = a / b;
        var A3 = {}; A3[x] = n; var B3 = {}; B3[x] = m; var R3 = {}; if (rr) R3[x] = rr;
        var par = function (mm) { var tx = monoText(mm); return mm.c < 0 ? '(' + tx + ')' : tx; };
        return {
          type: 'input', prompt: 'Dividiere.', expr: par(mono(a, A3)) + ' : ' + par(mono(b, B3)),
          solution: [mono(c, R3)], kind: 'div', parts: { ca: a, cb: b, n: n, m: m },
          hint: 'Zahlen dividieren: ' + a + ' : ' + b + '. Hochzahlen subtrahieren: ' + n + ' − ' + m + '.',
          explain: a + ' : ' + b + ' = ' + c + ' und ' + n + ' − ' + m + ' = ' + rr + (rr ? '.' : ' → ' + x + ' fällt weg (' + varText(A3) + ' : ' + varText(B3) + ' = 1).')
        };
      }
      case 'mul2var': {
        var p = pick(rnd, [['x', 'y'], ['a', 'b']]);
        var e = [ri(rnd, 1, 3), ri(rnd, 0, 2), ri(rnd, 0, 2), ri(rnd, 1, 3)];
        a = ri(rnd, 2, 5); b = ri(rnd, 2, 5);
        var L = {}, M = {}, P = {};
        L[p[0]] = e[0]; if (e[1]) L[p[1]] = e[1];
        if (e[2]) M[p[0]] = e[2]; M[p[1]] = e[3];
        P[p[0]] = e[0] + e[2]; P[p[1]] = e[1] + e[3];
        return {
          type: 'input', prompt: 'Multipliziere.', expr: rnd() < 0.5 ? monoText(mono(a, L)) + ' * ' + monoText(mono(b, M)) : monoText(mono(b, M)) + ' * ' + monoText(mono(a, L)),
          solution: [mono(a * b, P)], kind: 'mul',
          hint: 'Zahlen multiplizieren. Dann ' + p[0] + ' mit ' + p[0] + ' und ' + p[1] + ' mit ' + p[1] + ' – Hochzahlen addieren.',
          explain: a + ' · ' + b + ' = ' + a * b + ', ' + p[0] + ': ' + e[0] + ' + ' + e[2] + ' = ' + P[p[0]] + ', ' + p[1] + ': ' + e[1] + ' + ' + e[3] + ' = ' + P[p[1]] + '.'
        };
      }
      case 'alpha': {
        var pr = pick(rnd, [['a', 'b'], ['a', 'x'], ['b', 'c'], ['x', 'y'], ['m', 'n']]);
        a = ri(rnd, 2, 6); b = ri(rnd, 2, 6); n = ri(rnd, 1, 3); m = ri(rnd, 1, 3);
        var V1 = {}; V1[pr[1]] = n; var V2 = {}; V2[pr[0]] = m; var VR = {}; VR[pr[0]] = m; VR[pr[1]] = n;
        return {
          type: 'input', prompt: 'Multipliziere. Variablen alphabetisch anschreiben!', expr: monoText(mono(a, V1)) + ' * ' + monoText(mono(b, V2)),
          solution: [mono(a * b, VR)], kind: 'mul',
          hint: 'Zahlen multiplizieren: ' + a + ' · ' + b + '. Dann zuerst ' + pr[0] + ', danach ' + pr[1] + ' (Alphabet).',
          explain: a + ' · ' + b + ' = ' + a * b + ', Variablen alphabetisch: ' + monoText(mono(a * b, VR)) + '.'
        };
      }
      case 'kombi': {
        n = ri(rnd, 1, 4); m = ri(rnd, 1, 4); var k = ri(rnd, 1, n + m - 1);
        a = ri(rnd, 2, 6); b = ri(rnd, 2, 5); var prod = a * b;
        var divs = [2, 3, 4, 5, 6].filter(function (d) { return prod % d === 0; }); c = divs.length ? pick(rnd, divs) : a;
        var K1 = {}; K1[x] = n; var K2 = {}; K2[x] = m; var K3 = {}; K3[x] = k; var KR = {}; KR[x] = n + m - k;
        return {
          type: 'input', prompt: 'Rechne zuerst die Klammer.', expr: '(' + monoText(mono(a, K1)) + ' * ' + monoText(mono(b, K2)) + ') : ' + monoText(mono(c, K3)),
          solution: [mono(prod / c, KR)], kind: 'div',
          hint: 'Klammer zuerst: ' + a + ' · ' + b + ' = ' + prod + ', Hochzahlen ' + n + ' + ' + m + ' = ' + (n + m) + '. Dann dividieren.',
          explain: 'Klammer: ' + monoText(mono(prod, (function () { var o = {}; o[x] = n + m; return o; })())) + ', dann : ' + monoText(mono(c, K3)) + ' → ' + monoText(mono(prod / c, KR)) + '.'
        };
      }
      case 'mulmc': {
        n = ri(rnd, 2, 4); m = ri(rnd, 2, 4); a = ri(rnd, 2, 6); b = ri(rnd, 2, 6);
        var A4 = {}; A4[x] = n; var B4 = {}; B4[x] = m;
        var R4 = {}; R4[x] = n + m; var W4 = {}; W4[x] = n * m; var W5 = {}; W5[x] = Math.max(n, m);
        return choicePoly(rnd, 'Was ist richtig?', monoText(mono(a, A4)) + ' * ' + monoText(mono(b, B4)) + ' = ?',
          [mono(a * b, R4)], [[mono(a * b, W4)], [mono(a + b, R4)], [mono(a * b, W5)], [mono(a + b, W4)]],
          'Zahlen multiplizieren, Hochzahlen addieren.',
          a + ' · ' + b + ' = ' + a * b + ' und ' + n + ' + ' + m + ' = ' + (n + m) + '.');
      }
      case 'vergleich': {
        n = ri(rnd, 2, 4); a = ri(rnd, 2, 6); b = ri(rnd, 2, 6); v = {}; v[x] = n;
        var op = pick(rnd, ['+', '*']);
        var ans = op === '+' ? [mono(a + b, v)] : [mono(a * b, (function () { var o = {}; o[x] = 2 * n; return o; })())];
        var expl = op === '+'
          ? 'Plus: ' + a + ' + ' + b + ' = ' + (a + b) + ', die Hochzahl bleibt ' + n + '.'
          : 'Mal: ' + a + ' · ' + b + ' = ' + a * b + ', Hochzahlen ' + n + ' + ' + n + ' = ' + 2 * n + '.';
        return {
          type: 'input', prompt: 'Achtung, genau schauen: Plus oder Mal?', expr: monoText(mono(a, v)) + ' ' + op + ' ' + monoText(mono(b, v)),
          solution: ans, kind: op === '+' ? 'add' : 'mul',
          hint: op === '+' ? 'Plus: Hochzahl bleibt gleich.' : 'Mal: Hochzahlen addieren.', explain: expl
        };
      }
    }
    throw new Error('Unbekannte Fertigkeit: ' + skill);
  }

  /* ---------- Prüfung mit Fehlerdiagnose ---------- */
  function check(task, input) {
    var p = parse(input);
    if (!p.ok) return { status: 'invalid', message: p.error };
    var want = polyOf(task.solution), got = polyOf(p.list);
    if (polyEqual(want, got)) {
      if (!p.simplified) return { status: 'unsimplified', message: 'Der Wert stimmt – aber fasse noch ganz zusammen.' };
      var unsorted = p.list.some(function (m) { return m.ord && m.ord !== m.ord.split('').sort().join(''); });
      if (unsorted) return { status: 'order', message: 'Richtig gerechnet! Schreib die Variablen noch in alphabetischer Reihenfolge.' };
      return { status: 'correct' };
    }
    return { status: 'wrong', message: diagnose(task, p.list) };
  }

  function diagnose(task, list) {
    var sol = task.solution;
    if (sol.length !== 1 || list.length !== 1) {
      if (task.kind === 'add' && list.length < sol.length) return 'Verschiedene Hochzahlen darfst du nicht zusammenfassen.';
      return 'Noch nicht richtig. Ordne die gleichartigen Terme.';
    }
    var s = sol[0], g = list[0];
    var sv = key(s.v), gv = key(g.v);
    if (sv === gv && g.c === -s.c) return 'Fast! Achte auf das Vorzeichen: Minus · Plus = Minus, Minus · Minus = Plus.';
    if (task.kind === 'add') {
      if (g.c === s.c && sv !== gv) return 'Die Zahl stimmt. Aber beim Addieren und Subtrahieren bleibt die Hochzahl gleich!';
      if (sv === gv) return 'Die Potenz stimmt. Rechne die Zahlen davor noch einmal.';
    }
    if ((task.kind === 'mul' || task.kind === 'div') && task.parts) {
      var pp = task.parts, xv = Object.keys(s.v)[0] || Object.keys(g.v)[0];
      var gExp = g.v[xv] || 0;
      if (task.kind === 'mul' && gExp === pp.n * pp.m && pp.n * pp.m !== pp.n + pp.m) return 'Achtung: Hochzahlen werden addiert, nicht multipliziert.';
      if (task.kind === 'mul' && g.c === pp.ca + pp.cb) return 'Die Zahlen davor werden multipliziert, nicht addiert.';
      if (task.kind === 'div' && gExp === pp.n / pp.m && pp.n % pp.m === 0 && pp.m > 1) return 'Achtung: Hochzahlen werden subtrahiert, nicht dividiert.';
      if (task.kind === 'div' && g.c === pp.ca - pp.cb) return 'Die Zahlen davor werden dividiert, nicht subtrahiert.';
    }
    if (g.c === s.c && sv !== gv) return 'Die Zahl stimmt. Schau dir die Hochzahlen noch einmal an.';
    if (sv === gv) return 'Die Potenz stimmt. Rechne die Zahl davor noch einmal.';
    return 'Noch nicht richtig. Hol dir einen Tipp!';
  }

  var api = { AREAS: AREAS, gen: gen, check: check, parse: parse, html: html, sumText: sumText, polyOf: polyOf, polyEqual: polyEqual, key: key };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.PT = api;
})(this);
