/* Mathematik – Lehrplan-Ergänzungen 4. Klasse: reelle Zahlen & Wurzeln, Bruchterme & Bruchgleichungen,
   lineare Gleichungssysteme, Boxplot & Kreuztabellen, Kreisteile, Pythagoras in Figuren und Körpern, Funktionen. */
(function () {
  const M = UB.M, G = UB.G, { R, fmt, round, task, frac, gcd } = M;
  const { add, n2, svgMM, T, L, C, PL, spt } = G;
  // Typen gemischt reihum ziehen, damit sich auf einem Blatt nichts unnötig wiederholt
  const plans = {}; const typ = (rng, i, n, id) => { if (i === 0 || !plans[id] || plans[id].length !== n) plans[id] = rng.shuffle(Array.from({ length: n }, (_, k) => k)); return plans[id][i % n]; };
  const F = (x) => fmt(round(x, 6)), F2 = (x) => fmt(round(x, 2));
  const nz = (rng, a, b) => { let x = 0; while (x === 0) x = R(rng, a, b); return x; };
  // Selbstkontrolle: zwei Terme müssen für mehrere x-Werte übereinstimmen, sonst wird die Aufgabe verworfen
  const chk = (f, g) => { [1.7, 2.3, -0.6, 3.1, -2.4].forEach(x => { const a = f(x), b = g(x); if (!isFinite(a) || !isFinite(b) || Math.abs(a - b) > 1e-9 * (1 + Math.abs(a))) throw new Error('Termprüfung fehlgeschlagen'); }); };
  // lineare Terme schön schreiben: a·x + b
  const coef = (a, v) => a === 1 ? v : a === -1 ? '−' + v : fmt(a) + v;
  const lin = (a, b, v) => { v = v || 'x'; if (a === 0) return fmt(b); let s = coef(a, v); if (b > 0) s += ' + ' + fmt(b); if (b < 0) s += ' − ' + fmt(-b); return s; };
  const sq = (s) => '√' + (String(s).length > 2 || /[^\d]/.test(String(s)) ? '<span style="text-decoration:overline">' + s + '</span>' : s);

  // ================================================================ Reelle Zahlen und Wurzeln
  const wExakt = (n) => task({ title: 'Wurzeln berechnen', instr: 'Berechne ohne Taschenrechner.', n, cols: 4, w: 2.5,
    gen: (rng) => { const k = R(rng, 0, 2); if (k === 0) { const b = R(rng, 2, 25); return { q: '√' + F(b * b), a: F(b), key: 'q' + b }; } if (k === 1) { const b = R(rng, 2, 10); return { q: '∛' + F(b * b * b), a: F(b), key: 'k' + b }; } const b = R(rng, 1, 9); return { q: '√' + F(b * b / 100), a: F(b / 10), key: 'd' + b }; } });
  const zwischen = (n) => task({ title: 'Zwischen welchen ganzen Zahlen?', instr: 'Ergänze die beiden benachbarten ganzen Zahlen.', n, cols: 2, w: 2,
    gen: (rng) => { let m; do { m = R(rng, 3, 200); } while (Number.isInteger(Math.sqrt(m))); const f = Math.floor(Math.sqrt(m)); return { q: '{?} < √' + m + ' < {?}', a: [String(f), String(f + 1)], key: m }; } });
  const naeherung = (n) => task({ title: 'Näherungswerte', instr: 'Berechne mit dem Taschenrechner und runde auf zwei Dezimalstellen.', n, cols: 3, w: 3,
    gen: (rng) => { let m; do { m = R(rng, 2, 99); } while (Number.isInteger(Math.sqrt(m))); return { q: '√' + m + ' ≈ {?}', a: F2(Math.sqrt(m)), key: m }; } });
  const RAT = [
    (r) => { const b = R(r, 2, 12); return ['√' + (b * b), 'rational (= ' + b + ')']; }, (r) => { let m; do { m = R(r, 2, 50); } while (Number.isInteger(Math.sqrt(m))); return ['√' + m, 'irrational']; },
    (r) => { const z = R(r, 1, 8), n = R(r, 2, 9); return [frac(z, n), 'rational']; }, () => ['π', 'irrational'], (r) => { const d = R(r, 1, 9); return ['0,' + d + d + d + '…  (Periode ' + d + ')', 'rational (= ' + d + '/9)']; },
    (r) => { const b = R(r, 2, 5); return ['∛' + (b * b * b), 'rational (= ' + b + ')']; }, (r) => { const a = R(r, 1, 9); return ['−' + a + ',25', 'rational']; }, () => ['√2 · √2', 'rational (= 2)'], () => ['1,4142135…  (nicht periodisch)', 'irrational']
  ];
  const ratIrr = (n) => task({ title: 'Rational oder irrational?', instr: 'Rationale Zahlen lassen sich als Bruch schreiben; irrationale haben unendlich viele Dezimalstellen ohne Periode.', n, cols: 2, w: 6,
    gen: (rng, lv, i) => { const [q, a] = RAT[typ(rng, i, RAT.length, 'RAT6')](rng); return { q: q + ': {?}', a, key: q }; } });
  const SQF = [2, 3, 5, 6, 7, 10, 11];
  const wRegeln = (n) => task({ title: 'Rechenregeln für Wurzeln', instr: '√a · √b = √(a · b), √a : √b = √(a : b), √(k² · b) = k · √b.', n, cols: 2, w: 4,
    gen: (rng) => { const k = R(rng, 0, 3), b = rng.pick(SQF);
      if (k === 0) { const p = R(rng, 1, 5), q = R(rng, 1, 4); if (p === q) return { q: '√' + (b * p * p) + ' · √' + b, a: F(b * p), key: 'm' + b + p }; return { q: '√' + (b * p * p) + ' · √' + (b * q * q), a: F(b * p * q), key: 'm' + b + p + q }; }
      if (k === 1) { const kk = R(rng, 2, 9); return { q: '√' + (kk * kk * b) + ' (teilweise Wurzel ziehen)', a: kk + '·√' + b, key: 't' + kk + b }; }
      if (k === 2) { const p = R(rng, 2, 7); return { q: '√' + (b * p * p) + ' : √' + b, a: F(p), key: 'd' + b + p }; }
      return { q: '(√' + b + ')² + (√' + (b + 3) + ')²', a: F(2 * b + 3), key: 'p' + b }; } });
  UB.simple({
    id: 'm-wurzeln', fach: 'mathe', title: 'Reelle Zahlen und Wurzeln', area: 'zahlen', klassen: [4], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: '<b>Quadratwurzel</b>: √a ist die nichtnegative Zahl, die quadriert a ergibt (√49 = 7, weil 7² = 49). <b>Kubikwurzel</b>: ∛27 = 3, weil 3³ = 27. <b>Rationale Zahlen</b> (ℚ) lassen sich als Bruch schreiben (endliche oder periodische Dezimalzahlen). <b>Irrationale Zahlen</b> haben unendlich viele Dezimalstellen ohne Periode (√2, π). Rationale und irrationale Zahlen bilden zusammen die <b>reellen Zahlen</b> (ℝ). Regeln: √a · √b = √(a · b); √a : √b = √(a : b); √(k² · b) = k · √b; (√a)² = a.',
    pools: {},
    levels: {
      1: { ichkann: ['Du berechnest Quadrat- und Kubikwurzeln.', 'Du schätzt Wurzeln ab.'], tasks: [wExakt(12), zwischen(6)] },
      2: { ichkann: ['Du unterscheidest rationale und irrationale Zahlen.', 'Du berechnest Näherungswerte.'], tasks: [ratIrr(8), naeherung(9)] },
      3: { ichkann: ['Du wendest die Rechenregeln für Wurzeln an.'], tasks: [wRegeln(10), zwischen(4)] }
    }
  });

  // ================================================================ Bruchterme und Bruchgleichungen
  const DEF = [
    (r) => { const c = nz(r, -9, 9); return [frac('x', lin(1, -c)), 'x ≠ ' + fmt(c)]; },
    (r) => { const c = nz(r, -9, 9), a = R(r, 1, 5); return [frac(lin(2, a), lin(1, c)), 'x ≠ ' + fmt(-c)]; },
    (r) => { const c = nz(r, 1, 9); return [frac(R(r, 1, 9), 'x · (' + lin(1, -c) + ')'), 'x ≠ 0 und x ≠ ' + c]; },
    (r) => { const k = R(r, 2, 5), c = nz(r, -6, 6); return [frac(3, lin(k, -k * c)), 'x ≠ ' + fmt(c)]; }
  ];
  const defMenge = (n) => task({ title: 'Wann ist der Bruchterm nicht definiert?', instr: 'Der Nenner darf nicht 0 sein. Welche Zahlen darf man für x nicht einsetzen?', n, cols: 2, w: 5,
    gen: (rng, lv, i) => { const [q, a] = DEF[typ(rng, i, DEF.length, 'DEF1')](rng); return { q: q + ': {?}', a, key: q }; } });
  const KUERZ = [
    (r) => { let m, nn; do { m = R(r, 1, 7); nn = R(r, 2, 7); } while (gcd(m, nn) !== 1); const k = R(r, 2, 6); chk(x => k * m * x / (k * nn * x * x), x => m / (nn * x)); return [frac(coef(k * m, 'x'), (k * nn) + 'x²'), frac(m, nn === 1 ? 'x' : nn + 'x')]; },
    (r) => { const a = R(r, 2, 9), b = nz(r, -9, 9); chk(x => (a * x + a * b) / a, x => x + b); return [frac(lin(a, a * b), a), lin(1, b)]; },
    (r) => { const b = R(r, 1, 9); chk(x => (x * x - b * b) / (x + b), x => x - b); return [frac('x² − ' + (b * b), lin(1, b)), lin(1, -b)]; },
    (r) => { const b = R(r, 1, 8); chk(x => (x * x + 2 * b * x + b * b) / (x + b), x => x + b); return [frac('x² + ' + (2 * b) + 'x + ' + (b * b), lin(1, b)), lin(1, b)]; },
    (r) => { const c = R(r, 2, 7), b = nz(r, -8, 8); chk(x => (c * x - c * b) / (x - b), () => c); return [frac(lin(c, -c * b), lin(1, -b)), String(c)]; }
  ];
  const kuerzen = (n) => task({ title: 'Bruchterme kürzen', instr: 'Zerlege Zähler und Nenner in Faktoren (herausheben, binomische Formeln) und kürze.', n, cols: 2, w: 5,
    gen: (rng, lv, i) => { const [q, a] = KUERZ[typ(rng, i, KUERZ.length, 'KUERZ2')](rng); return { q, a, key: q }; } });
  const redX = (N, k) => { const g = gcd(N, k) || 1; N /= g; k /= g; return k === 1 ? frac(fmt(N), 'x') : frac(fmt(N), k + 'x'); };
  const BRR = [
    (r) => { const a = R(r, 1, 9), b = R(r, 1, 9); chk(x => a / x + b / x, x => (a + b) / x); return [frac(a, 'x') + ' + ' + frac(b, 'x'), redX(a + b, 1)]; },
    (r) => { const a = R(r, 1, 9), b = R(r, 1, 9); chk(x => a / x + b / (2 * x), x => (2 * a + b) / (2 * x)); return [frac(a, 'x') + ' + ' + frac(b, '2x'), redX(2 * a + b, 2)]; },
    (r) => { const a = R(r, 1, 9), b = R(r, 1, 9); chk(x => a / x - b / (3 * x), x => (3 * a - b) / (3 * x)); return [frac(a, 'x') + ' − ' + frac(b, '3x'), (3 * a - b === 0 ? '0' : redX(3 * a - b, 3))]; },
    (r) => { const a = R(r, 1, 9), b = R(r, 2, 9), g = gcd(a, b); chk(x => (a / x) * (x * x / b), x => (a / g) * x / (b / g)); return [frac(a, 'x') + ' · ' + frac('x²', b), b / g === 1 ? coef(a / g, 'x') : frac(coef(a / g, 'x'), b / g)]; },
    (r) => { const a = R(r, 1, 9), b = R(r, 2, 9), g = gcd(a, b); chk(x => (a / x) / (b / (x * x)), x => (a / g) * x / (b / g)); return [frac(a, 'x') + ' : ' + frac(b, 'x²'), b / g === 1 ? coef(a / g, 'x') : frac(coef(a / g, 'x'), b / g)]; },
    (r) => { const a = R(r, 1, 6), b = R(r, 1, 6); chk(x => a / x + b / (x * x), x => (a * x + b) / (x * x)); return [frac(a, 'x') + ' + ' + frac(b, 'x²'), frac(lin(a, b), 'x²')]; }
  ];
  const bruchRechnen = (n) => task({ title: 'Rechnen mit Bruchtermen', instr: 'Bring auf gemeinsamen Nenner bzw. multipliziere/dividiere wie bei Brüchen. Kürze das Ergebnis.', n, cols: 2, w: 5,
    gen: (rng, lv, i) => { const [q, a] = BRR[typ(rng, i, BRR.length, 'BRR3')](rng); return { q, a, key: q }; } });
  const BGL = [
    (r) => { const s = nz(r, -9, 9), b = nz(r, -6, 6), a = b * s; if (Math.abs(a / s - b) > 1e-12) throw new Error('x'); return [frac(fmt(a), 'x') + ' = ' + fmt(b), s, 'x ≠ 0']; },
    (r) => { let s, c; do { s = nz(r, -8, 8); c = nz(r, -6, 6); } while (s + c === 0); const b = nz(r, -5, 5), a = b * (s + c); if (Math.abs(a / (s + c) - b) > 1e-12) throw new Error('x'); return [frac(fmt(a), lin(1, c)) + ' = ' + fmt(b), s, 'x ≠ ' + fmt(-c)]; },
    (r) => { const b = R(r, 2, 5), s = nz(r, -8, 8), a = (b - 1) * s; if (Math.abs((s + a) / s - b) > 1e-12) throw new Error('x'); return [frac(lin(1, a), 'x') + ' = ' + b, s, 'x ≠ 0']; },
    (r) => { const s = nz(r, -8, 8), d = nz(r, -5, 5), b = R(r, -6, 6), a = d * s; if (Math.abs(a / s + b - (b + d)) > 1e-12) throw new Error('x'); return [frac(fmt(a), 'x') + (b ? (b > 0 ? ' + ' + b : ' − ' + (-b)) : '') + ' = ' + fmt(b + d), s, 'x ≠ 0']; },
    (r) => { let s, c; do { s = nz(r, -7, 7); c = nz(r, -5, 5); } while (s === c || s === 0); const k = R(r, 2, 4); // k/(x − c) = k·... : 2/(x−c) = 1/(s−c)·2 → einfacher: a/(x − c) = a/(s − c)
      const a = k * (s - c); return [frac(fmt(a), lin(1, -c)) + ' = ' + k, s, 'x ≠ ' + fmt(c)]; }
  ];
  const bruchGl = (n) => task({ title: 'Bruchgleichungen', instr: 'Gib zuerst an, welche Zahl x nicht sein darf. Multipliziere dann mit dem Nenner und löse.', n, cols: 2, w: 5,
    gen: (rng, lv, i) => { const [q, s, d] = BGL[typ(rng, i, BGL.length, 'BGL4')](rng); return { q: q + '<br>{?}', a: d + '; x = ' + fmt(s), key: q }; } });
  UB.simple({
    id: 'm-bruchterme', fach: 'mathe', title: 'Bruchterme und Bruchgleichungen', area: 'variablen', klassen: [4], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: 'Ein <b>Bruchterm</b> hat eine Variable im Nenner, z. B. ' + frac(3, 'x − 2') + '. Der Nenner darf nie 0 werden: hier x ≠ 2 (<b>Definitionsmenge</b>). <b>Kürzen</b> darf man nur Faktoren, nie Summanden: Zähler und Nenner zuerst zerlegen (herausheben, binomische Formeln), dann kürzen. Rechnen wie mit Brüchen: gleichnamig machen, dann Zähler addieren; multiplizieren: Zähler · Zähler, Nenner · Nenner; dividieren: mit dem Kehrwert multiplizieren. <b>Bruchgleichung</b>: Definitionsmenge angeben, mit dem Nenner multiplizieren, lösen, Lösung prüfen.',
    pools: {},
    levels: {
      1: { ichkann: ['Du bestimmst, wann ein Bruchterm nicht definiert ist.', 'Du kürzt einfache Bruchterme.'], tasks: [defMenge(6), kuerzen(6)] },
      2: { ichkann: ['Du rechnest mit Bruchtermen.'], tasks: [bruchRechnen(8), kuerzen(4)] },
      3: { ichkann: ['Du löst Bruchgleichungen.'], tasks: [bruchGl(8), defMenge(2)] }
    }
  });

  // ================================================================ Lineare Gleichungssysteme
  const eq2 = (a, b, c) => { let s = coef(a, 'x'); s += b > 0 ? ' + ' + coef(b, 'y') : ' − ' + coef(-b, 'y'); return s + ' = ' + fmt(c); };
  const sys = (e1, e2) => '<span class="lgs">I: ' + e1 + '<br>II: ' + e2 + '</span>';
  function randSys(rng, small) {
    for (;;) { const x = R(rng, -6, 6), y = R(rng, -6, 6), a1 = nz(rng, -5, 5), b1 = nz(rng, -5, 5), a2 = nz(rng, -5, 5), b2 = nz(rng, -5, 5);
      if (a1 * b2 - a2 * b1 === 0 || (small && (Math.abs(a1) > 3 || Math.abs(b2) > 3))) continue; return { x, y, e1: eq2(a1, b1, a1 * x + b1 * y), e2: eq2(a2, b2, a2 * x + b2 * y), A: [[a1, b1, a1 * x + b1 * y], [a2, b2, a2 * x + b2 * y]] }; }
  }
  const solve = (A) => { const [[a, b, c], [d, e, f]] = A, D = a * e - b * d; return [(c * e - b * f) / D, (a * f - c * d) / D]; };
  const pruefen = (n) => task({ title: 'Ist das eine Lösung?', instr: 'Setze ein und prüfe beide Gleichungen. Schreibe ja oder nein.', n, cols: 2, w: 3,
    gen: (rng) => { const s = randSys(rng, true), ok = rng.int(2); const px = ok ? s.x : s.x + nz(rng, -2, 2), py = s.y; const ok2 = s.A.every(([a, b, c]) => a * px + b * py === c);
      return { q: sys(s.e1, s.e2) + '<br>(' + fmt(px) + ' | ' + fmt(py) + '): {?}', a: ok2 ? 'ja' : 'nein', key: s.e1 + px }; } });
  const gleichsetzen = (n) => task({ title: 'Gleichsetzungsverfahren', instr: 'Setze die beiden rechten Seiten gleich, löse nach x und berechne dann y.', n, cols: 2, w: 3,
    gen: (rng) => { let k1, k2; do { k1 = nz(rng, -4, 4); k2 = nz(rng, -4, 4); } while (k1 === k2); const x = R(rng, -5, 5), y = R(rng, -6, 6), d1 = y - k1 * x, d2 = y - k2 * x;
      return { q: sys('y = ' + lin(k1, d1), 'y = ' + lin(k2, d2)) + '<br>x = {?}, y = {?}', a: [fmt(x), fmt(y)], key: k1 + '|' + d1 + '|' + k2 + '|' + d2 }; } });
  const allgemein = (n) => task({ title: 'Gleichungssysteme lösen', instr: 'Löse mit dem Einsetzungs-, Gleichsetzungs- oder Additionsverfahren. Mach die Probe.', n, cols: 2, w: 3,
    gen: (rng) => { const s = randSys(rng, false), [x, y] = solve(s.A); if (x !== s.x || y !== s.y) throw new Error('LGS'); return { q: sys(s.e1, s.e2) + '<br>x = {?}, y = {?}', a: [fmt(s.x), fmt(s.y)], key: s.e1 + s.e2 }; } });
  const grafisch = () => ({ type: 'fn', fn: (rng) => {
    const KS = [-2, -1, -0.5, 0.5, 1, 2, 3]; let k1, k2, x0, y0, d1, d2;
    do { k1 = rng.pick(KS); k2 = rng.pick(KS); x0 = R(rng, -4, 4); y0 = R(rng, -4, 4); d1 = y0 - k1 * x0; d2 = y0 - k2 * x0; } while (k1 === k2 || !Number.isInteger(d1) || !Number.isInteger(d2) || Math.abs(d1) > 6 || Math.abs(d2) > 6);
    const u = 5, mn = -7, mx = 7, P = (p) => [5 + (p[0] - mn) * u, 4 + (mx - p[1]) * u], W = (mx - mn) * u + 10, H = (mx - mn) * u + 8;
    let g = ''; for (let i = mn; i <= mx; i++) { g += L(P([i, mn]), P([i, mx]), { c: '#dcdcdc', w: 0.2 }) + L(P([mn, i]), P([mx, i]), { c: '#dcdcdc', w: 0.2 }); }
    g += L(P([mn, 0]), P([mx, 0]), { w: 0.4 }) + L(P([0, mn]), P([0, mx]), { w: 0.4 });
    for (let i = mn + 1; i < mx; i++) if (i && i % 2 === 0) g += T([P([i, 0])[0], P([i, 0])[1] + 3], fmt(i), { fs: 2.2 }) + T([P([0, i])[0] - 1.2, P([0, i])[1] + 0.8], fmt(i), { fs: 2.2, a: 'end' });
    const line = (k, d, col) => { const xs = []; for (let x = mn; x <= mx; x += 0.25) { const y = k * x + d; if (y >= mn && y <= mx) xs.push([x, y]); } return xs.length > 1 ? L(P(xs[0]), P(xs[xs.length - 1]), { c: col, w: 0.5 }) : ''; };
    const solS = g + line(k1, d1, '#1d4ed8') + line(k2, d2, '#c62828') + C(P([x0, y0]), 1, { f: '#111' }) + T(add(P([x0, y0]), [2, -2]), 'S(' + fmt(x0) + ' | ' + fmt(y0) + ')', { fs: 3, b: true, a: 'start' });
    return { title: 'Grafisch lösen', instr: 'Zeichne beide Geraden. Ihr Schnittpunkt ist die Lösung. I: y = ' + lin(k1, d1) + ', II: y = ' + lin(k2, d2), body: svgMM(W, H, g) + '<div class="mi">Lösung: x = ' + UB.blank(2) + ', y = ' + UB.blank(2) + '</div>', sol: svgMM(W, H, solS) + '<div class="mi">' + UB.sol('x = ' + fmt(x0) + ', y = ' + fmt(y0)) + '</div>' };
  } });
  const TXL = [
    (r) => { const x = R(r, 10, 60), y = R(r, 2, x - 1); return { q: 'Die Summe zweier Zahlen ist ' + (x + y) + ', ihre Differenz ' + (x - y) + '. Wie heißen die Zahlen?', a: 'x + y = ' + (x + y) + ', x − y = ' + (x - y) + ' → x = ' + x + ', y = ' + y }; },
    (r) => { const h = R(r, 3, 20), k = R(r, 3, 20); return { q: 'Auf einem Bauernhof gibt es Hühner und Kaninchen, zusammen ' + (h + k) + ' Köpfe und ' + (2 * h + 4 * k) + ' Beine. Wie viele Hühner und Kaninchen sind es?', a: 'h + k = ' + (h + k) + ', 2h + 4k = ' + (2 * h + 4 * k) + ' → ' + h + ' Hühner, ' + k + ' Kaninchen' }; },
    (r) => { const pe = R(r, 9, 14), pk = R(r, 4, 8), e = R(r, 2, 12), k = R(r, 2, 15); return { q: 'Eine Gruppe kauft ' + (e + k) + ' Kinokarten und zahlt ' + (e * pe + k * pk) + ' €. Erwachsene zahlen ' + pe + ' €, Kinder ' + pk + ' €. Wie viele Erwachsene und Kinder sind es?', a: 'e + k = ' + (e + k) + ', ' + pe + 'e + ' + pk + 'k = ' + (e * pe + k * pk) + ' → ' + e + ' Erwachsene, ' + k + ' Kinder' }; },
    (r) => { const a = R(r, 2, 6) * 50, b = R(r, 2, 8) * 50; return { q: 'In einer Kassa sind ' + (a / 50 + b / 50 * 1) + ' Scheine, nur 10-€- und 20-€-Scheine, zusammen ' + (a / 50 * 10 + b / 50 * 20) + ' €. Wie viele Scheine von jeder Sorte sind es?', a: 'z + s = ' + (a / 50 + b / 50) + ', 10z + 20s = ' + (a / 5 + b / 50 * 20) + ' → ' + (a / 50) + ' Zehner, ' + (b / 50) + ' Zwanziger' }; },
    (r) => { const v = R(r, 3, 9), s = R(r, 1, 3); return { q: 'Ein Boot fährt flussabwärts mit ' + (v + s) + ' km/h und flussaufwärts mit ' + (v - s) + ' km/h. Wie schnell ist das Boot im stehenden Wasser, wie schnell fließt der Fluss?', a: 'b + f = ' + (v + s) + ', b − f = ' + (v - s) + ' → Boot ' + v + ' km/h, Fluss ' + s + ' km/h' }; }
  ];
  const lgsText = (n) => task({ title: 'Textaufgaben', instr: 'Stelle zwei Gleichungen auf und löse das Gleichungssystem.', n, mode: 'lines', lines: 2, gen: (rng, lv, i) => { const x = TXL[typ(rng, i, TXL.length, 'TXL5')](rng); x.key = x.q.slice(0, 20); return x; } });
  UB.simple({
    id: 'm-gleichungssysteme', fach: 'mathe', title: 'Lineare Gleichungssysteme', area: 'variablen', klassen: [4], img: 'MiniHoS_Digital_Laptop',
    merk: 'Ein <b>lineares Gleichungssystem</b> mit zwei Variablen besteht aus zwei Gleichungen (I und II). Lösung: ein Zahlenpaar (x | y), das <b>beide</b> Gleichungen erfüllt. <b>Gleichsetzungsverfahren</b>: beide Gleichungen nach derselben Variablen auflösen und gleichsetzen. <b>Einsetzungsverfahren</b>: eine Gleichung nach einer Variablen auflösen und in die andere einsetzen. <b>Additionsverfahren</b>: Gleichungen so multiplizieren, dass beim Addieren eine Variable wegfällt. <b>Grafisch</b>: Die Lösung ist der Schnittpunkt der beiden Geraden (parallele Geraden: keine Lösung). Immer die Probe machen!',
    pools: {},
    levels: {
      1: { ichkann: ['Du prüfst, ob ein Zahlenpaar eine Lösung ist.', 'Du löst Systeme mit dem Gleichsetzungsverfahren.'], tasks: [pruefen(4), gleichsetzen(4)] },
      2: { ichkann: ['Du löst Gleichungssysteme rechnerisch und grafisch.'], tasks: [allgemein(4), grafisch()] },
      3: { ichkann: ['Du löst Textaufgaben mit Gleichungssystemen.'], tasks: [lgsText(3), allgemein(4)] }
    }
  });

  // ================================================================ Boxplot und Kreuztabellen
  const med = (a) => { const n = a.length, m = Math.floor(n / 2); return n % 2 ? a[m] : (a[m - 1] + a[m]) / 2; };
  const quart = (d) => { const a = d.slice().sort((x, y) => x - y), n = a.length, h = Math.floor(n / 2); return { min: a[0], q1: med(a.slice(0, h)), md: med(a), q3: med(a.slice(n - h)), max: a[n - 1], s: a }; };
  const kennzahlen = (n) => task({ title: 'Quartile und Median', instr: 'Ordne die Daten der Größe nach. Bestimme Minimum, unteres Quartil q₁, Median, oberes Quartil q₃ und Maximum.', n, cols: 1, w: 2.5,
    gen: (rng) => { const k = R(rng, 9, 12), d = Array.from({ length: k }, () => R(rng, 1, 30)); const q = quart(d);
      return { q: d.join(', ') + '<br>Min {?} &nbsp; q₁ {?} &nbsp; Median {?} &nbsp; q₃ {?} &nbsp; Max {?}', a: [F(q.min), F(q.q1), F(q.md), F(q.q3), F(q.max)], key: d.join() }; } });
  function boxSvg(q, empty) {
    const x0 = 6, u = 5, X = (v) => x0 + v * u, y = 12; let s = L([x0, 24], [X(30) + 2, 24], { w: 0.4 });
    for (let v = 0; v <= 30; v++) s += L([X(v), 24], [X(v), v % 5 ? 25 : 26], { w: 0.3 }) + (v % 5 ? '' : T([X(v), 29.5], v, { fs: 2.6 }));
    if (!empty) s += L([X(q.min), y], [X(q.q1), y], { w: 0.5 }) + L([X(q.q3), y], [X(q.max), y], { w: 0.5 }) + L([X(q.min), y - 3], [X(q.min), y + 3], { w: 0.5 }) + L([X(q.max), y - 3], [X(q.max), y + 3], { w: 0.5 }) +
      '<rect x="' + n2(X(q.q1)) + '" y="' + (y - 5) + '" width="' + n2((q.q3 - q.q1) * u) + '" height="10" fill="rgba(29,78,216,0.15)" stroke="#1d4ed8" stroke-width="0.5"/>' + L([X(q.md), y - 5], [X(q.md), y + 5], { c: '#c62828', w: 0.7 });
    return svgMM(X(30) + 6, 31, s);
  }
  const boxZeichnen = (n) => ({ type: 'fn', fn: (rng) => {
    const its = M.uniq(n, () => { const k = R(rng, 9, 11); return Array.from({ length: k }, () => R(rng, 1, 30)); }, x => x.join());
    const cell = (d, s) => { const q = quart(d); return '<div class="mi">' + d.join(', ') + '<br>' + boxSvg(q, !s) + (s ? UB.sol('Min ' + F(q.min) + ', q₁ = ' + F(q.q1) + ', Median ' + F(q.md) + ', q₃ = ' + F(q.q3) + ', Max ' + F(q.max)) : '') + '</div>'; };
    return { title: 'Boxplot zeichnen', instr: 'Bestimme die fünf Kennzahlen und zeichne den Boxplot über die Zahlengerade.', body: its.map(d => cell(d, false)).join(''), sol: its.map(d => cell(d, true)).join('') };
  } });
  const boxLesen = (n) => task({ title: 'Boxplot lesen', instr: 'Lies die Kennzahlen ab. Wie groß sind Spannweite und Quartilsabstand (q₃ − q₁)?', n, cols: 1, w: 2.5,
    gen: (rng) => { let v; do { v = [R(rng, 0, 8), 0, 0, 0, R(rng, 22, 30)]; v[1] = R(rng, v[0] + 1, 12); v[3] = R(rng, 15, v[4] - 1); v[2] = R(rng, v[1] + 1, v[3] - 1); } while (v[2] <= v[1] || v[3] <= v[2]);
      const q = { min: v[0], q1: v[1], md: v[2], q3: v[3], max: v[4] };
      return { q: boxSvg(q) + '<br>Min {?}, q₁ {?}, Median {?}, q₃ {?}, Max {?}; Spannweite {?}, Quartilsabstand {?}', a: v.map(String).concat([String(v[4] - v[0]), String(v[3] - v[1])]), key: v.join() }; } });
  const KT = [['Mädchen', 'Buben', 'Haustier', 'kein Haustier'], ['7. Schulstufe', '8. Schulstufe', 'Handy in der Pause', 'kein Handy in der Pause'], ['Mädchen', 'Buben', 'Fußballfan', 'kein Fußballfan'], ['Bus', 'kein Bus', 'wohnt im Ort', 'wohnt auswärts']];
  const kreuz = () => ({ type: 'fn', fn: (rng) => {
    const [r1, r2, c1, c2] = rng.pick(KT), a = R(rng, 3, 25), b = R(rng, 3, 25), c = R(rng, 3, 25), d = R(rng, 3, 25);
    const R1 = a + b, R2 = c + d, C1 = a + c, C2 = b + d, N = R1 + R2;
    const S = (x, show) => show ? String(x) : null;
    const tab = (s) => UB.table(['', c1, c2, 'gesamt'], [[r1, String(a), s ? UB.sol(String(b)) : '', String(R1)], [r2, s ? UB.sol(String(c)) : '', String(d), String(R2)], ['gesamt', String(C1), s ? UB.sol(String(C2)) : '', s ? UB.sol(String(N)) : '']]);
    const qs = [r1 + ': Wie viel Prozent davon gehören zu „' + c1 + '“?', 'Von allen in „' + c1 + '“: Wie viel Prozent sind ' + r1 + '?', 'Wie viel Prozent aller Befragten gehören zu „' + c2 + '“?'];
    const as = [a + ' : ' + R1 + ' ≈ ' + F(round(a / R1 * 100, 1)) + ' %', a + ' : ' + C1 + ' ≈ ' + F(round(a / C1 * 100, 1)) + ' %', C2 + ' : ' + N + ' ≈ ' + F(round(C2 / N * 100, 1)) + ' %'];
    return { title: 'Kreuztabelle', instr: 'Ergänze die fehlenden Zahlen in der Kreuztabelle. Beantworte dann die Fragen (runde auf eine Dezimalstelle).', body: tab(false) + qs.map((q, i) => '<div class="mi">' + 'abc'[i] + ') ' + q + ' ' + UB.blank(6) + '</div>').join(''), sol: tab(true) + qs.map((q, i) => '<div class="mi">' + 'abc'[i] + ') ' + q + ' ' + UB.sol(as[i]) + '</div>').join('') };
  } });
  UB.simple({
    id: 'm-statistik2', fach: 'mathe', title: 'Boxplot und Kreuztabellen', area: 'daten', klassen: [4], img: 'MiniHoS_Digital_Laptop',
    merk: 'Die Daten werden der Größe nach geordnet. <b>Median</b>: der Wert in der Mitte (bei gerader Anzahl: Mittelwert der beiden mittleren). <b>Unteres Quartil q₁</b>: Median der unteren Hälfte; <b>oberes Quartil q₃</b>: Median der oberen Hälfte (bei ungerader Anzahl gehört der Median zu keiner Hälfte). Zwischen q₁ und q₃ liegt die mittlere Hälfte der Daten. <b>Boxplot</b>: Box von q₁ bis q₃ mit Strich beim Median, „Antennen“ bis Minimum und Maximum. <b>Spannweite</b> = Max − Min, <b>Quartilsabstand</b> = q₃ − q₁. Eine <b>Kreuztabelle</b> zeigt zwei Merkmale gleichzeitig; Zeilen- und Spaltensummen helfen beim Ergänzen.',
    pools: {},
    levels: {
      1: { ichkann: ['Du bestimmst Median und Quartile.'], tasks: [kennzahlen(4)] },
      2: { ichkann: ['Du zeichnest und liest Boxplots.'], tasks: [boxZeichnen(2), boxLesen(2)] },
      3: { ichkann: ['Du ergänzt und interpretierst Kreuztabellen.'], tasks: [kreuz(), boxLesen(1)] }
    }
  });

  // ================================================================ Kreisbogen, Kreissektor, Kreisring
  const PI = 3.14;
  function sektorSvg(alpha) { const Mi = [16, 16], r = 13, p1 = spt(Mi, r, 0), p2 = spt(Mi, r, alpha); return svgMM(34, 32, C(Mi, r, { c: '#999', w: 0.3, d: '1 1' }) + '<path d="M16 16 L' + n2(p1[0]) + ' ' + n2(p1[1]) + ' A13 13 0 ' + (alpha > 180 ? 1 : 0) + ' 0 ' + n2(p2[0]) + ' ' + n2(p2[1]) + ' Z" fill="rgba(29,78,216,0.18)" stroke="#1d4ed8" stroke-width="0.5"/>' + T([20, 14], 'α', { fs: 3, fill: '#c62828' })); }
  const sektor = (n) => task({ title: 'Kreisbogen und Kreissektor', instr: 'Rechne mit π ≈ 3,14 und runde auf zwei Dezimalstellen. b = 2 · r · π · α : 360°, A = r² · π · α : 360°.', n, cols: 1, w: 4,
    gen: (rng) => { const r = R(rng, 2, 15), al = R(rng, 2, 22) * 15; return { q: sektorSvg(al) + 'r = ' + r + ' cm, α = ' + al + '°: b ≈ {?}, A ≈ {?}', a: [F2(2 * r * PI * al / 360) + ' cm', F2(r * r * PI * al / 360) + ' cm²'], key: r + '|' + al }; } });
  const ring = (n) => task({ title: 'Kreisring', instr: 'A = (R² − r²) · π mit π ≈ 3,14. Runde auf zwei Dezimalstellen.', n, cols: 2, w: 4,
    gen: (rng) => { const Rr = R(rng, 4, 20), r = R(rng, 1, Rr - 1); return { q: 'R = ' + Rr + ' cm, r = ' + r + ' cm: A ≈ {?}', a: F2((Rr * Rr - r * r) * PI) + ' cm²', key: Rr + '|' + r }; } });
  const sektorRueck = (n) => task({ title: 'Winkel gesucht', instr: 'Forme die Formel um: α = A · 360° : (r² · π). π ≈ 3,14; runde auf ganze Grad.', n, cols: 1, w: 3,
    gen: (rng) => { const r = R(rng, 3, 12), al = R(rng, 3, 20) * 15, A = round(r * r * PI * al / 360, 2); return { q: 'Ein Kreissektor mit r = ' + r + ' cm hat den Flächeninhalt A = ' + F(A) + ' cm². α ≈ {?}', a: Math.round(A * 360 / (r * r * PI)) + '°', key: r + '|' + al }; } });
  function zusSvg(k, a, b) {
    if (k === 0) { const sc = 24 / Math.max(a, b), w = a * sc, h = b * sc, x0 = 12, y0 = 3; return svgMM(x0 + w + h / 2 + 4, y0 + h + 6, '<path d="M' + n2(x0 + w) + ' ' + y0 + ' H' + x0 + ' V' + n2(y0 + h) + ' H' + n2(x0 + w) + ' A' + n2(h / 2) + ' ' + n2(h / 2) + ' 0 0 0 ' + n2(x0 + w) + ' ' + y0 + ' Z" fill="#eef3ff" stroke="#111" stroke-width="0.45"/>' + L([x0 + w, y0], [x0 + w, y0 + h], { c: '#777', w: 0.3, d: '1 1' }) + T([x0 + w / 2, y0 + h + 4.5], a + ' cm', { fs: 3 }) + T([x0 - 1.2, y0 + h / 2 + 1], b + ' cm', { fs: 3, a: 'end' })); }
    return svgMM(40, 36, '<path d="M4 32 H34 V2 H4 Z" fill="#eef3ff" stroke="#111" stroke-width="0.45"/><path d="M4 32 L4 2 A30 30 0 0 1 34 32 Z" fill="#fff" stroke="#111" stroke-width="0.45"/>' + T([19, 35.5], a + ' cm', { fs: 3 }));
  }
  const zusammen = (n) => task({ title: 'Zusammengesetzte Figuren', instr: 'Berechne den Flächeninhalt der blauen Fläche. π ≈ 3,14; runde auf zwei Dezimalstellen.', n, cols: 2, w: 4,
    gen: (rng) => { const k = R(rng, 0, 1);
      if (k === 0) { const a = R(rng, 4, 14), b = R(rng, 2, 6) * 2; return { q: zusSvg(0, a, b) + 'Rechteck mit Halbkreis: A ≈ {?}', a: F2(a * b + (b / 2) * (b / 2) * PI / 2) + ' cm²', key: 'h' + a + b }; }
      const a = R(rng, 4, 16); return { q: zusSvg(1, a) + 'Quadrat ohne Viertelkreis (r = a): A ≈ {?}', a: F2(a * a - a * a * PI / 4) + ' cm²', key: 'v' + a }; } });
  UB.simple({
    id: 'm-kreisteile', fach: 'mathe', title: 'Kreisbogen, Kreissektor, Kreisring', area: 'geometrie', klassen: [4], img: 'MiniHoS_Forschen_Lupe',
    merk: 'Ein <b>Kreissektor</b> („Tortenstück“) mit Mittelpunktswinkel α ist der Teil α : 360° des ganzen Kreises. <b>Kreisbogen</b>: b = 2 · r · π · α : 360°. <b>Sektorfläche</b>: A = r² · π · α : 360°. <b>Kreisring</b> zwischen zwei Kreisen mit gleichem Mittelpunkt: A = (R² − r²) · π. <b>Zusammengesetzte Figuren</b>: in bekannte Teile zerlegen, Flächen addieren oder abziehen (Halbkreis: r² · π : 2, Viertelkreis: r² · π : 4).',
    pools: {},
    levels: {
      1: { ichkann: ['Du berechnest Kreisbogen und Kreissektor.'], tasks: [sektor(4)] },
      2: { ichkann: ['Du berechnest Kreisringe.', 'Du berechnest zusammengesetzte Figuren.'], tasks: [ring(6), zusammen(4)] },
      3: { ichkann: ['Du formst Formeln um und berechnest den Winkel.'], tasks: [sektorRueck(3), zusammen(2), sektor(2)] }
    }
  });

  // ================================================================ Pythagoras in Figuren und Körpern
  const sq2 = (x) => F2(Math.sqrt(x));
  const PYF = [
    (r) => { const a = R(r, 3, 15), b = R(r, 2, 12); return ['Rechteck a = ' + a + ' cm, b = ' + b + ' cm: Diagonale d ≈ {?}', 'd = √(' + a + '² + ' + b + '²) ≈ ' + sq2(a * a + b * b) + ' cm']; },
    (r) => { const a = R(r, 2, 12) * 2; return ['Gleichseitiges Dreieck a = ' + a + ' cm: Höhe h ≈ {?}', 'h = √(' + a + '² − ' + (a / 2) + '²) ≈ ' + sq2(a * a - a * a / 4) + ' cm']; },
    (r) => { const c = R(r, 2, 8) * 2, s = R(r, c / 2 + 1, 14); return ['Gleichschenkeliges Dreieck, Basis c = ' + c + ' cm, Schenkel a = ' + s + ' cm: Höhe h<sub>c</sub> ≈ {?}', 'h = √(' + s + '² − ' + (c / 2) + '²) ≈ ' + sq2(s * s - c * c / 4) + ' cm']; },
    (r) => { const e = R(r, 2, 9) * 2, f = R(r, 2, 8) * 2; return ['Raute mit e = ' + e + ' cm, f = ' + f + ' cm: Seite a ≈ {?}', 'a = √(' + (e / 2) + '² + ' + (f / 2) + '²) ≈ ' + sq2(e * e / 4 + f * f / 4) + ' cm']; },
    (r) => { const a = R(r, 2, 12); return ['Quadrat a = ' + a + ' cm: Diagonale d ≈ {?}', 'd = √(' + a + '² + ' + a + '²) ≈ ' + sq2(2 * a * a) + ' cm']; }
  ];
  const PYK = [
    (r) => { const a = R(r, 2, 12), b = R(r, 2, 10), c = R(r, 2, 10); return ['Quader a = ' + a + ' cm, b = ' + b + ' cm, c = ' + c + ' cm: Raumdiagonale d ≈ {?}', 'd = √(' + a + '² + ' + b + '² + ' + c + '²) ≈ ' + sq2(a * a + b * b + c * c) + ' cm']; },
    (r) => { const a = R(r, 2, 10); return ['Würfel a = ' + a + ' cm: Raumdiagonale d ≈ {?}', 'd = √(3 · ' + a + '²) ≈ ' + sq2(3 * a * a) + ' cm']; },
    (r) => { const a = R(r, 2, 8) * 2, ha = R(r, a / 2 + 1, 16); return ['Quadratische Pyramide a = ' + a + ' cm, Höhe der Seitenfläche h<sub>a</sub> = ' + ha + ' cm: Körperhöhe h ≈ {?}', 'h = √(' + ha + '² − ' + (a / 2) + '²) ≈ ' + sq2(ha * ha - a * a / 4) + ' cm']; },
    (r) => { const rr = R(r, 2, 10), h = R(r, 3, 15); return ['Kegel r = ' + rr + ' cm, h = ' + h + ' cm: Mantellinie s ≈ {?}', 's = √(' + rr + '² + ' + h + '²) ≈ ' + sq2(rr * rr + h * h) + ' cm']; },
    (r) => { const a = R(r, 2, 8) * 2, h = R(r, 3, 14); return ['Quadratische Pyramide a = ' + a + ' cm, h = ' + h + ' cm: Höhe der Seitenfläche h<sub>a</sub> ≈ {?}', 'h<sub>a</sub> = √(' + h + '² + ' + (a / 2) + '²) ≈ ' + sq2(h * h + a * a / 4) + ' cm']; }
  ];
  const pyFig = (n, list, title) => task({ title, instr: 'Fertige eine Skizze an, markiere das rechtwinkelige Dreieck und rechne. Runde auf zwei Dezimalstellen.', n, cols: 1, w: 4,
    gen: (rng, lv, i) => { const [q, a] = list[typ(rng, i, list.length, title)](rng); return { q, a, key: q }; } });
  const HKS = (n) => task({ title: 'Höhensatz und Kathetensatz', instr: 'Im rechtwinkeligen Dreieck teilt die Höhe h die Hypotenuse c in p und q. Höhensatz: h² = p · q. Kathetensatz: a² = c · p, b² = c · q.', n, cols: 1, w: 4,
    gen: (rng) => { const p = R(rng, 1, 12), q = R(rng, 1, 12), k = rng.int(2); return k ? { q: 'p = ' + p + ' cm, q = ' + q + ' cm: h ≈ {?}', a: '√(' + p + ' · ' + q + ') ≈ ' + sq2(p * q) + ' cm', key: 'h' + p + q } : { q: 'p = ' + p + ' cm, q = ' + q + ' cm (c = ' + (p + q) + ' cm): Kathete a ≈ {?} (a liegt bei p)', a: '√(' + (p + q) + ' · ' + p + ') ≈ ' + sq2((p + q) * p) + ' cm', key: 'k' + p + q }; } });
  UB.simple({
    id: 'm-pythagoras2', fach: 'mathe', title: 'Pythagoras in Figuren und Körpern', area: 'geometrie', klassen: [4], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: '<b>Lehrsatz des Pythagoras</b>: Im rechtwinkeligen Dreieck gilt a² + b² = c² (c ist die Hypotenuse, sie liegt gegenüber dem rechten Winkel). Vorgehen: Skizze, rechtwinkeliges Dreieck suchen und färben, Formel aufstellen. Häufige Fälle: Rechteckdiagonale d = √(a² + b²); Höhe im gleichseitigen Dreieck h = √(a² − (a/2)²); Raute a = √((e/2)² + (f/2)²); Raumdiagonale des Quaders d = √(a² + b² + c²); Kegel s = √(r² + h²). <b>Höhensatz</b>: h² = p · q. <b>Kathetensatz</b>: a² = c · p.',
    pools: {},
    levels: {
      1: { ichkann: ['Du nutzt Pythagoras in ebenen Figuren.'], tasks: [pyFig(6, PYF, 'In ebenen Figuren')] },
      2: { ichkann: ['Du nutzt Pythagoras in Körpern.'], tasks: [pyFig(3, PYF, 'In ebenen Figuren'), pyFig(4, PYK, 'In Körpern')] },
      3: { ichkann: ['Du kennst Höhensatz und Kathetensatz.'], tasks: [pyFig(4, PYK, 'In Körpern'), HKS(4)] }
    }
  });

  // ================================================================ Funktionen: Grundbegriffe und Graphen lesen
  let planJ = [];
  const istFunktion = (n) => task({ title: 'Ist das eine Funktion?', instr: 'Bei einer Funktion gehört zu jedem x-Wert genau ein y-Wert. Schreibe ja oder nein.', n, cols: 2, w: 3,
    gen: (rng, lv, i) => { if (i === 0) planJ = rng.shuffle([1, 0, 1, 0, 1, 0]); const xs = rng.sample([-3, -2, -1, 0, 1, 2, 3, 4, 5], 5).sort((a, b) => a - b), ys = xs.map(() => R(rng, -5, 9)); const yes = planJ[i % 6]; let X = xs.slice();
      if (!yes) { const i = R(rng, 1, 4); X[i] = X[i - 1]; if (ys[i] === ys[i - 1]) ys[i] += 1; }
      const isF = X.every((x, i) => X.every((x2, j) => x !== x2 || ys[i] === ys[j]));
      return { q: UB.table(['x'].concat(X.map(v => fmt(v))), [['y'].concat(ys.map(v => fmt(v)))]) + 'Funktion: {?}', a: isF ? 'ja' : 'nein', key: X.join() + ys.join() }; } });
  const FN = [
    (r) => { const k = nz(r, -3, 3), d = R(r, -5, 5); return ['f(x) = ' + lin(k, d), (x) => k * x + d]; },
    (r) => { const a = nz(r, -2, 2), c = R(r, -4, 4); return ['f(x) = ' + (a === 1 ? '' : a === -1 ? '−' : a + ' · ') + 'x²' + (c ? (c > 0 ? ' + ' + c : ' − ' + (-c)) : ''), (x) => a * x * x + c]; },
    (r) => { const k = rng0 => 0; const kk = r.pick([6, 12, 24]); return ['f(x) = ' + kk + ' : x', (x) => kk / x]; }
  ];
  const fWerte = (n) => task({ title: 'Funktionswerte', instr: 'Setze ein und berechne den Funktionswert.', n, cols: 1, w: 2.5,
    gen: (rng) => { const [s, f] = rng.pick(FN)(rng); const xs = /: x/.test(s) ? [1, 2, 3, -2] : [-2, -1, 0, 3]; return { q: s + ': ' + xs.map(x => 'f(' + fmt(x) + ') = {?}').join(', '), a: xs.map(x => F(f(x))), key: s }; } });
  const artTab = (n) => task({ title: 'Welche Art von Zusammenhang?', instr: 'Ist der Zusammenhang linear (immer gleiche Zunahme), indirekt proportional (x · y gleich) oder quadratisch?', n, cols: 1, w: 9,
    gen: (rng, lv, i) => { const k = i % 3; let xs = [1, 2, 3, 4, 6], ys, a;
      if (k === 0) { const m = nz(rng, -3, 4), d = R(rng, -3, 5); ys = xs.map(x => m * x + d); a = 'linear (y = ' + lin(m, d) + ')'; }
      else if (k === 1) { const c = rng.pick([12, 24, 36, 48]); ys = xs.map(x => c / x); a = 'indirekt proportional (x · y = ' + c + ')'; }
      else { const c = R(rng, 1, 3); ys = xs.map(x => c * x * x); a = 'quadratisch (y = ' + (c === 1 ? '' : c + ' · ') + 'x²)'; }
      return { q: UB.table(['x'].concat(xs.map(v => fmt(v))), [['y'].concat(ys.map(v => F(v)))]) + '{?}', a, key: ys.join() }; } });
  // Zeit-Weg-Diagramm einer Wanderung
  const zeitWeg = () => ({ type: 'fn', fn: (rng) => {
    let segs, tot, dist;
    // Gehen mit 3 bis 6 km/h: km zwischen min/20 und min/10
    const walk = () => { const m = R(rng, 2, 4) * 15; return [m, R(rng, Math.ceil(m / 20), Math.floor(m / 10))]; };
    for (;;) { segs = [walk(), [R(rng, 1, 2) * 15, 0], walk(), [R(rng, 1, 2) * 15, 0]]; dist = segs.reduce((a, s) => a + s[1], 0);
      const back = Math.ceil(dist * 12 / 15) * 15; segs.push([back, -dist]); tot = segs.reduce((a, s) => a + s[0], 0); if (tot <= 240 && dist <= 14 && back / dist <= 20) break; }
    const pts = [[0, 0]]; segs.forEach(s => { const p = pts[pts.length - 1]; pts.push([p[0] + s[0], p[1] + s[1]]); });
    const u = 0.6, v = 3.6, X = (t) => 10 + t * u, Y = (d) => 58 - d * v, W = X(240) + 8, H = 66;
    let g = ''; for (let t = 0; t <= 240; t += 15) g += L([X(t), Y(0)], [X(t), Y(14)], { c: t % 60 ? '#ececec' : '#cfcfcf', w: 0.2 }) + (t % 30 ? '' : T([X(t), 62.5], fmt(t), { fs: 2.4 }));
    for (let d = 0; d <= 14; d++) g += L([X(0), Y(d)], [X(240), Y(d)], { c: d % 2 ? '#ececec' : '#cfcfcf', w: 0.2 }) + (d % 2 ? '' : T([X(0) - 1.5, Y(d) + 0.9], d, { fs: 2.4, a: 'end' }));
    g += L([X(0), Y(0)], [X(240) + 3, Y(0)], { w: 0.4 }) + L([X(0), Y(0)], [X(0), Y(14) - 2], { w: 0.4 }) + T([X(240), 65.5], 'Zeit in min', { fs: 2.6, a: 'end' }) + T([X(0) + 1.5, Y(14) - 1], 'Entfernung vom Start in km', { fs: 2.6, a: 'start' });
    g += '<polyline points="' + pts.map(p => n2(X(p[0])) + ',' + n2(Y(p[1]))).join(' ') + '" fill="none" stroke="#1d4ed8" stroke-width="0.7"/>';
    const t1 = pts[1][0], v1 = segs[0][1] / (segs[0][0] / 60), pause = segs[1][0] + segs[3][0], far = pts[4][1], back = segs[4][0];
    const Qs = [['Wie weit ist Anna nach ' + t1 + ' Minuten vom Start entfernt?', pts[1][1] + ' km'], ['Wie lange macht sie insgesamt Pause?', pause + ' min'], ['Wie weit entfernt ist sie höchstens vom Start?', far + ' km'], ['Wie schnell geht sie im ersten Abschnitt (in km/h)?', F(round(v1, 2)) + ' km/h'], ['Wie lange braucht sie für den Rückweg?', back + ' min']];
    return { title: 'Zeit-Weg-Diagramm', instr: 'Anna macht eine Wanderung und kehrt zum Start zurück. Lies aus dem Diagramm ab.', body: svgMM(W, H, g) + Qs.map((q, i) => '<div class="mi">' + 'abcde'[i] + ') ' + q[0] + ' ' + UB.blank(4) + '</div>').join(''), sol: svgMM(W, H, g) + Qs.map((q, i) => '<div class="mi">' + 'abcde'[i] + ') ' + q[0] + ' ' + UB.sol(q[1]) + '</div>').join('') };
  } });
  UB.simple({
    id: 'm-funktionen2', fach: 'mathe', title: 'Funktionen: Grundbegriffe und Graphen', area: 'variablen', klassen: [4], img: 'MiniHoS_Digital_Laptop',
    merk: 'Eine <b>Funktion</b> ordnet jedem x-Wert (Argument) <b>genau einen</b> y-Wert (Funktionswert f(x)) zu. Darstellung als Tabelle, Graph, Formel oder in Worten. <b>Linear</b>: f(x) = k · x + d, gleiche Zunahme pro Schritt, Graph ist eine Gerade. <b>Indirekt proportional</b>: x · y bleibt gleich, f(x) = c : x. <b>Quadratisch</b>: f(x) = a · x², Graph ist eine Parabel. In einem <b>Zeit-Weg-Diagramm</b> bedeutet eine waagrechte Linie: Pause; je steiler, desto schneller; Geschwindigkeit = Weg : Zeit.',
    pools: {},
    levels: {
      1: { ichkann: ['Du erkennst, ob eine Zuordnung eine Funktion ist.', 'Du berechnest Funktionswerte.'], tasks: [istFunktion(4), fWerte(4)] },
      2: { ichkann: ['Du liest Graphen aus dem Alltag.'], tasks: [zeitWeg(), istFunktion(2)] },
      3: { ichkann: ['Du unterscheidest lineare, indirekt proportionale und quadratische Zusammenhänge.'], tasks: [artTab(3), fWerte(3)] }
    }
  });
})();
