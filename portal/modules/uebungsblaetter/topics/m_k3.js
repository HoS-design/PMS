/* Mathematik 3./4. Klasse: ganze Zahlen, Potenzen, Terme, Pythagoras, Kreis, Zinsen, Funktionen, Körper */
(function () {
  const M = UB.M, { R, fmt, round, task, rtri } = M;
  const F = (x) => fmt(round(x, 6));
  const F2 = (x) => fmt(round(x, 2));
  const P = (x) => x < 0 ? '(' + F(x) + ')' : F(x);     // negative Zahl als zweiter Operand in Klammern
  const svg = (w, h, inner) => '<svg class="mfig" width="' + w + 'mm" height="' + h + 'mm" viewBox="0 0 ' + w + ' ' + h + '" aria-hidden="true">' + inner + '</svg>';
  const tx = (x, y, t, a) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (a || 'middle') + '" font-size="3.5">' + t + '</text>';
  const nz = (rng, a, b) => { let x = 0; while (x === 0) x = R(rng, a, b); return x; };

  // ---------------------------------------------------------------- Ganze Zahlen
  const vglZ = (n) => task({
    title: 'Vergleichen', instr: 'Setze < oder > ein.', n, cols: 4, w: 1.6,
    gen: (rng) => { let a = R(rng, -30, 30), b = R(rng, -30, 30); if (a === b) b = -a || 1; return { q: F(a) + ' {?} ' + F(b), a: a > b ? '>' : '<' }; }
  });
  const temp = (n) => task({
    title: 'Temperaturen', instr: 'Berechne die Temperatur oder den Unterschied.', n, cols: 1, w: 5,
    gen: (rng) => {
      const a = R(rng, -15, 10), d = R(rng, 2, 18);
      if (rng.int(2)) return { q: 'Am Morgen hat es ' + F(a) + ' °C. Bis Mittag steigt die Temperatur um ' + d + ' °C. Mittags hat es {?}', a: F(a + d) + ' °C' };
      const b = a - d; return { q: 'Von ' + F(a) + ' °C auf ' + F(b) + ' °C: Die Temperatur sinkt um {?}', a: d + ' °C' };
    }
  });
  const addZ = (n) => task({
    title: 'Addieren und Subtrahieren', instr: 'Rechne mit ganzen Zahlen.', n, cols: 3, w: 3,
    gen: (rng) => { const a = nz(rng, -40, 40), b = nz(rng, -40, 40); return rng.int(2) ? { q: F(a) + ' + ' + P(b), a: F(a + b) } : { q: F(a) + ' − ' + P(b), a: F(a - b) }; }
  });
  const mulZ = (n) => task({
    title: 'Multiplizieren und Dividieren', instr: 'Achte auf das Vorzeichen.', n, cols: 3, w: 3,
    gen: (rng) => { const a = nz(rng, -12, 12), b = nz(rng, -12, 12); return rng.int(2) ? { q: F(a) + ' · ' + P(b), a: F(a * b) } : { q: F(a * b) + ' : ' + P(b), a: F(a) }; }
  });
  const mixZ = (n) => task({
    title: 'Gemischte Aufgaben', instr: 'Klammer vor Punkt vor Strich.', n, cols: 2, w: 3,
    gen: (rng) => {
      const a = nz(rng, -9, 9), b = nz(rng, -9, 9), c = nz(rng, -9, 9), d = nz(rng, -9, 9);
      return rng.int(2) ? { q: P(a) + ' · ' + P(b) + ' + ' + P(c), a: F(a * b + c) } : { q: '(' + F(a) + ' − ' + P(b) + ') · ' + P(d), a: F((a - b) * d) };
    }
  });
  UB.simple({
    id: 'm-negative', fach: 'mathe', title: 'Ganze Zahlen', area: 'zahlen', klassen: [2, 3], img: 'MiniHoS_Gesicht_Ueberrascht',
    merk: '<b>Ganze Zahlen</b>: …, −3, −2, −1, 0, 1, 2, 3, … Auf der Zahlengeraden ist die Zahl weiter rechts größer: −2 > −5. <b>Betrag</b>: Abstand von 0, |−5| = 5. <b>Addieren</b>: Plus einer negativen Zahl ist wie Minus: 7 + (−3) = 4. <b>Subtrahieren</b>: Minus einer negativen Zahl ist wie Plus: 7 − (−3) = 10. <b>Multiplizieren/Dividieren</b>: gleiche Vorzeichen → +, verschiedene Vorzeichen → −.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst ganze Zahlen vergleichen.', 'Du kannst mit Temperaturen rechnen.'], tasks: [vglZ(12), temp(4), addZ(6)] },
      2: { ichkann: ['Du kannst ganze Zahlen addieren und subtrahieren.'], tasks: [addZ(15), mulZ(6)] },
      3: { ichkann: ['Du kannst ganze Zahlen multiplizieren und dividieren.', 'Du beachtest die Rechenregeln.'], tasks: [mulZ(12), mixZ(8)] }
    }
  });

  // ---------------------------------------------------------------- Potenzen und Wurzeln
  const sup = (b, e) => b + '<sup>' + e + '</sup>';
  const pot = (n) => task({
    title: 'Potenzen berechnen', instr: 'Berechne.', n, cols: 4, w: 3.5,
    gen: (rng) => { const b = R(rng, 2, 12), e = b <= 3 ? R(rng, 2, 6) : b <= 5 ? R(rng, 2, 4) : 2; return { q: sup(b, e), a: F(Math.pow(b, e)) }; }
  });
  const wurzel = (n) => task({
    title: 'Quadratwurzeln', instr: 'Berechne ohne Taschenrechner.', n, cols: 4, w: 3,
    gen: (rng) => { const b = R(rng, 2, 20); const k = rng.int(3); const v = k === 2 ? b * 10 : b; return { q: '√' + F(v * v), a: F(v), key: v }; }
  });
  const gleitkomma = (n, small) => task({
    title: 'Zehnerpotenzen', instr: 'Schreibe in Gleitkommadarstellung (z. B. 3,4 · 10⁶) oder als Dezimalzahl.', n, cols: 2, w: 6,
    gen: (rng) => {
      const m = round(R(rng, 11, 99) / 10, 1); const e = small && rng.int(2) ? -R(rng, 1, 5) : R(rng, 3, 9);
      const val = m * Math.pow(10, e); const dec = e < 0 ? round(val, 8).toFixed(-e + 1).replace('.', ',') : F(round(val, 0));
      const sci = F(m) + ' · ' + sup(10, e < 0 ? '−' + -e : e);
      return rng.int(2) ? { q: dec, a: sci } : { q: sci, a: dec };
    }
  });
  const regeln = (n) => task({
    title: 'Rechenregeln für Potenzen', instr: 'Schreibe als eine Potenz.', n, cols: 3, w: 3,
    gen: (rng) => {
      const b = rng.pick(['a', 'x', '2', '5', '10']), m = R(rng, 2, 7), k = R(rng, 1, 6), t = rng.int(3);
      if (t === 0) return { q: sup(b, m) + ' · ' + sup(b, k), a: sup(b, m + k) };
      if (t === 1) return { q: sup(b, m + k) + ' : ' + sup(b, k), a: sup(b, m) };
      return { q: '(' + sup(b, m) + ')<sup>' + k + '</sup>', a: sup(b, m * k) };
    }
  });
  UB.simple({
    id: 'm-potenzen', fach: 'mathe', title: 'Potenzen und Wurzeln', area: 'zahlen', klassen: [3, 4], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: '<b>Potenz</b>: 2<sup>5</sup> = 2 · 2 · 2 · 2 · 2 = 32 (Basis 2, Hochzahl/Exponent 5). <b>Quadratwurzel</b>: √49 = 7, weil 7<sup>2</sup> = 49. <b>Zehnerpotenzen</b>: 10<sup>6</sup> = 1 000 000, 10<sup>−3</sup> = 0,001. Gleitkommadarstellung: 3 400 000 = 3,4 · 10<sup>6</sup>. <b>Regeln</b>: a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup>, a<sup>m</sup> : a<sup>n</sup> = a<sup>m−n</sup>, (a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup>.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Potenzen und Quadratzahlen berechnen.', 'Du kannst einfache Quadratwurzeln ziehen.'], tasks: [pot(12), wurzel(12)] },
      2: { ichkann: ['Du kannst große Zahlen mit Zehnerpotenzen schreiben.'], tasks: [gleitkomma(8, false), pot(8)] },
      3: { ichkann: ['Du kennst die Rechenregeln für Potenzen.', 'Du kannst kleine Zahlen mit negativen Hochzahlen schreiben.'], tasks: [regeln(9), gleitkomma(6, true)] }
    }
  });

  // ---------------------------------------------------------------- Terme
  const co = (k, v, first) => { const s = k < 0 ? (first ? '−' : ' − ') : (first ? '' : ' + '); const a = Math.abs(k); return s + (a === 1 && v ? '' : F(a)) + (v || ''); };
  const term = (pairs) => { const t = pairs.filter(p => p[0] !== 0).map((p, i) => co(p[0], p[1], i === 0)).join(''); return t || '0'; };
  const zusammen = (n) => task({
    title: 'Terme vereinfachen', instr: 'Fasse gleichartige Glieder zusammen.', n, cols: 2, w: 6,
    gen: (rng, level) => {
      const v = rng.pick(['x', 'a', 'y']), w = rng.pick(['b', 'z']);
      const k = [...Array(level === 1 ? 3 : 4)].map(() => nz(rng, -9, 9));
      if (level === 1) return { q: term([[Math.abs(k[0]), v], [k[1], v], [k[2], v]]), a: term([[Math.abs(k[0]) + k[1] + k[2], v]]) };
      return { q: term([[Math.abs(k[0]), v], [k[1], w], [k[2], v], [k[3], w]]), a: term([[Math.abs(k[0]) + k[2], v], [k[1] + k[3], w]]) };
    }
  });
  const einsetzen = (n) => task({
    title: 'Termwert berechnen', instr: 'Setze den Wert ein und berechne.', n, cols: 2, w: 3,
    gen: (rng) => { const a = R(rng, 2, 9), b = nz(rng, -12, 12), x = R(rng, -5, 8); return { q: term([[a, 'x'], [b, '']]) + ' für x = ' + F(x) + ': {?}', a: F(a * x + b) }; }
  });
  const ausmult = (n) => task({
    title: 'Ausmultiplizieren', instr: 'Löse die Klammer auf.', n, cols: 2, w: 6,
    gen: (rng) => { const k = nz(rng, -8, 9), a = R(rng, 1, 7), b = nz(rng, -9, 9); return { q: F(k) + ' · (' + term([[a, 'x'], [b, '']]) + ')', a: term([[k * a, 'x'], [k * b, '']]) }; }
  });
  const herausheben = (n) => task({
    title: 'Herausheben', instr: 'Hebe den größten gemeinsamen Faktor heraus.', n, cols: 2, w: 6,
    gen: (rng) => { const k = R(rng, 2, 9); let a, b; do { a = R(rng, 1, 6); b = R(rng, 1, 9); } while (M.gcd(a, b) !== 1); return { q: term([[k * a, 'x'], [k * b, '']]), a: k + ' · (' + term([[a, 'x'], [b, '']]) + ')', key: k * a + 'x' + k * b }; }
  });
  const binom = (n) => task({
    title: 'Binomische Formeln', instr: 'Multipliziere aus.', n, cols: 2, w: 8,
    gen: (rng) => {
      const v = rng.pick(['x', 'a']), b = R(rng, 1, 9), k = rng.int(3), m = R(rng, 1, 3);
      const vv = (m === 1 ? '' : m) + v;
      if (k === 0) return { q: '(' + vv + ' + ' + b + ')<sup>2</sup>', a: term([[m * m, v + '<sup>2</sup>'], [2 * m * b, v], [b * b, '']]) };
      if (k === 1) return { q: '(' + vv + ' − ' + b + ')<sup>2</sup>', a: term([[m * m, v + '<sup>2</sup>'], [-2 * m * b, v], [b * b, '']]) };
      return { q: '(' + vv + ' + ' + b + ') · (' + vv + ' − ' + b + ')', a: term([[m * m, v + '<sup>2</sup>'], [-b * b, '']]) };
    }
  });
  UB.simple({
    id: 'm-terme', fach: 'mathe', title: 'Terme', area: 'variablen', klassen: [3, 4], img: 'MiniHoS_Schreiben_Notizblock',
    merk: 'Nur <b>gleichartige Glieder</b> (gleiche Variable) kann man zusammenfassen: 3x + 5x = 8x, aber 3x + 5y bleibt. <b>Ausmultiplizieren</b>: 3 · (x + 4) = 3x + 12. <b>Herausheben</b>: 6x + 9 = 3 · (2x + 3). <b>Binomische Formeln</b>: (a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>, (a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup>, (a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup>.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst gleichartige Glieder zusammenfassen.', 'Du kannst den Wert eines Terms berechnen.'], tasks: [zusammen(8), einsetzen(6)] },
      2: { ichkann: ['Du kannst Klammern ausmultiplizieren.', 'Du kannst Terme mit zwei Variablen vereinfachen.'], tasks: [ausmult(8), zusammen(6)] },
      3: { ichkann: ['Du kannst herausheben.', 'Du kennst die binomischen Formeln.'], tasks: [herausheben(6), binom(8)] }
    }
  });

  // ---------------------------------------------------------------- Pythagoras
  const TRIPEL = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [20, 21, 29], [9, 40, 41]];
  const pyth = (n, mode) => ({ type: 'fn', fn: (rng) => {
    const its = M.uniq(n, () => {
      let a, b, c;
      if (mode === 'dez') { a = R(rng, 3, 15); b = R(rng, 3, 15); c = round(Math.sqrt(a * a + b * b), 2); }
      else { const t = rng.pick(TRIPEL), k = rng.pick([1, 1, 2, 3]); [a, b, c] = t.map(x => x * k); if (rng.int(2)) [a, b] = [b, a]; }
      const want = mode === 'kathete' ? rng.pick(['a', 'b']) : 'c';
      const L = { a: want === 'a' ? 'a = ?' : 'a = ' + F(a) + ' cm', b: want === 'b' ? 'b = ?' : 'b = ' + F(b) + ' cm', c: want === 'c' ? 'c = ?' : 'c = ' + F(c) + ' cm' };
      return { fig: rtri(L.a, L.b, L.c), want, val: { a, b, c }[want], key: a + '/' + b + want };
    }, x => x.key);
    const mk = (s) => '<div class="mgrid c3">' + its.map(x => '<div class="mi">' + x.fig + x.want + ' = ' + (s ? UB.sol(F(x.val) + ' cm' + (mode === 'dez' ? ' (gerundet)' : '')) : UB.blank(4)) + '</div>').join('') + '</div>';
    return { title: mode === 'kathete' ? 'Kathete berechnen' : 'Hypotenuse berechnen', instr: 'Der rechte Winkel ist markiert. Rechne am Rand' + (mode === 'dez' ? ', runde auf zwei Dezimalstellen.' : '.'), body: mk(false), sol: mk(true) };
  } });
  const TX_PY = [
    (r) => { const [a, b, c] = r.pick([[3, 4, 5], [6, 8, 10], [5, 12, 13]]).map(x => x * 1); return { q: 'Eine ' + c + ' m lange Leiter lehnt an einer Hauswand. Ihr Fuß steht ' + a + ' m von der Wand entfernt. Wie hoch reicht die Leiter?', a: '√(' + c + '² − ' + a + '²) = ' + b + ' m' }; },
    (r) => { const a = R(r, 3, 12), b = R(r, 3, 12); return { q: 'Ein rechteckiger Bildschirm ist ' + a * 10 + ' cm breit und ' + b * 10 + ' cm hoch. Wie lang ist die Diagonale?', a: '√(' + a * 10 + '² + ' + b * 10 + '²) ≈ ' + F2(Math.sqrt(a * a + b * b) * 10) + ' cm' }; },
    (r) => { const s = R(r, 4, 20); return { q: 'Ein Quadrat hat die Seitenlänge ' + s + ' cm. Wie lang ist seine Diagonale?', a: '√(' + s + '² + ' + s + '²) ≈ ' + F2(Math.sqrt(2) * s) + ' cm' }; },
    (r) => { const a = R(r, 30, 80), b = R(r, 40, 90); return { q: 'Statt um die Ecke eines rechteckigen Parks (' + a + ' m und ' + b + ' m) zu gehen, geht Lena quer durch. Wie viele Meter spart sie?', a: 'Weg außen: ' + (a + b) + ' m, quer: √(' + a + '² + ' + b + '²) ≈ ' + F2(Math.sqrt(a * a + b * b)) + ' m, Ersparnis ≈ ' + F2(a + b - Math.sqrt(a * a + b * b)) + ' m' }; }
  ];
  const textPy = (n) => task({ title: 'Sachaufgaben', instr: 'Fertige eine Skizze an und rechne.', n, mode: 'lines', lines: 2, gen: (rng) => rng.pick(TX_PY)(rng) });
  UB.simple({
    id: 'm-pythagoras', fach: 'mathe', title: 'Pythagoräischer Lehrsatz', area: 'geometrie', klassen: [3, 4], img: 'MiniHoS_Forschen_Lupe',
    merk: 'Im <b>rechtwinkeligen Dreieck</b> heißt die längste Seite (gegenüber dem rechten Winkel) <b>Hypotenuse</b> c, die beiden anderen Seiten sind die <b>Katheten</b> a und b. <b>Pythagoräischer Lehrsatz</b>: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>. Hypotenuse: c = √(a<sup>2</sup> + b<sup>2</sup>). Kathete: a = √(c<sup>2</sup> − b<sup>2</sup>).',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst die Hypotenuse berechnen.'], tasks: [pyth(6, 'hyp')] },
      2: { ichkann: ['Du kannst eine Kathete berechnen.'], tasks: [pyth(6, 'kathete'), pyth(3, 'hyp')] },
      3: { ichkann: ['Du kannst Sachaufgaben mit dem pythagoräischen Lehrsatz lösen.'], tasks: [pyth(3, 'dez'), textPy(3)] }
    }
  });

  // ---------------------------------------------------------------- Kreis
  const PI = 3.14;
  const kreisFig = (lab) => svg(34, 32, '<circle cx="16" cy="16" r="13" fill="#f3f6ff" stroke="#111" stroke-width="0.45"/><circle cx="16" cy="16" r="0.8"/><line x1="' + (lab === 'd' ? 3 : 16) + '" y1="16" x2="29" y2="16" stroke="#1d4ed8" stroke-width="0.45"/>' + tx(lab === 'd' ? 9.5 : 22.5, 14.5, lab));
  const kreis = (n, what) => ({ type: 'fn', fn: (rng) => {
    const its = M.uniq(n, () => { const useD = rng.int(3) === 0; const r = R(rng, 2, 25) * (rng.int(4) ? 1 : 0.5); return { r, useD }; }, x => x.r);
    const mk = (s) => '<div class="mgrid c3">' + its.map(x => {
      const lab = x.useD ? 'd = ' + F(2 * x.r) + ' cm' : 'r = ' + F(x.r) + ' cm';
      const u = 2 * x.r * PI, A = x.r * x.r * PI;
      return '<div class="mi">' + kreisFig(x.useD ? 'd' : 'r') + lab + '<br>' + (what !== 'A' ? 'u ≈ ' + (s ? UB.sol(F2(u) + ' cm') : UB.blank(4)) + ' ' : '') + (what !== 'u' ? 'A ≈ ' + (s ? UB.sol(F2(A) + ' cm²') : UB.blank(4)) : '') + '</div>';
    }).join('') + '</div>';
    return { title: what === 'u' ? 'Umfang des Kreises' : what === 'A' ? 'Flächeninhalt des Kreises' : 'Umfang und Flächeninhalt', instr: 'Rechne mit π ≈ 3,14 und runde auf zwei Dezimalstellen.', body: mk(false), sol: mk(true) };
  } });
  const kreisRueck = (n) => task({
    title: 'Rückwärts rechnen', instr: 'Rechne mit π ≈ 3,14 und runde auf zwei Dezimalstellen.', n, cols: 1, w: 5,
    gen: (rng) => {
      const r = R(rng, 2, 20);
      return rng.int(2) ? { q: 'Ein Kreis hat den Umfang u = ' + F2(2 * r * PI) + ' cm. Radius r ≈ {?}', a: F2(r) + ' cm' } : { q: 'Ein Kreis hat den Flächeninhalt A = ' + F2(r * r * PI) + ' cm². Radius r ≈ {?}', a: F2(r) + ' cm' };
    }
  });
  UB.simple({
    id: 'm-kreis', fach: 'mathe', title: 'Kreis', area: 'geometrie', klassen: [3, 4], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: '<b>Radius</b> r, <b>Durchmesser</b> d = 2 · r. <b>Umfang</b>: u = d · π = 2 · r · π. <b>Flächeninhalt</b>: A = r · r · π = r<sup>2</sup> · π. π (Pi) ≈ 3,14. Rückwärts: r = u : (2 · π), r = √(A : π).',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst den Umfang eines Kreises berechnen.'], tasks: [kreis(6, 'u')] },
      2: { ichkann: ['Du kannst den Flächeninhalt eines Kreises berechnen.'], tasks: [kreis(6, 'uA')] },
      3: { ichkann: ['Du kannst aus Umfang oder Fläche den Radius berechnen.'], tasks: [kreisRueck(6), kreis(3, 'uA')] }
    }
  });

  // ---------------------------------------------------------------- Zinsen
  const zinsen = (n, level) => task({
    title: 'Zinsen berechnen', instr: 'Berechne die Zinsen. Runde auf Cent.', n, cols: 1, w: 5,
    gen: (rng, lv) => {
      const K = R(rng, 4, 80) * 100, p = rng.pick([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]);
      if (lv === 1) return { q: 'Kapital ' + F(K) + ' €, Zinssatz ' + F(p) + ' % – Jahreszinsen: {?}', a: fmt(round(K * p / 100, 2), 2) + ' €' };
      const m = R(rng, 2, 11); return { q: 'Kapital ' + F(K) + ' €, Zinssatz ' + F(p) + ' %, Laufzeit ' + m + ' Monate – Zinsen: {?}', a: fmt(round(K * p / 100 * m / 12, 2), 2) + ' €' };
    }
  });
  const zinseszins = (n) => task({
    title: 'Zinseszinsen', instr: 'Die Zinsen werden jedes Jahr dazugerechnet. Runde auf Cent.', n, cols: 1, w: 6,
    gen: (rng) => { const K = R(rng, 5, 50) * 100, p = rng.pick([1, 2, 2.5, 3, 4]), y = R(rng, 2, 5); return { q: F(K) + ' € werden ' + y + ' Jahre lang mit ' + F(p) + ' % verzinst. Endkapital: {?}', a: fmt(round(K * Math.pow(1 + p / 100, y), 2), 2) + ' €' }; }
  });
  const kest = (n) => task({
    title: 'Mit Kapitalertragsteuer', instr: 'Von den Zinsen werden 25 % KESt abgezogen. Berechne die Zinsen nach Abzug der KESt.', n, cols: 1, w: 5,
    gen: (rng) => { const K = R(rng, 10, 90) * 100, p = rng.pick([1, 2, 3, 4]); return { q: 'Kapital ' + F(K) + ' €, ' + p + ' % Zinsen, 1 Jahr: {?}', a: fmt(round(K * p / 100 * 0.75, 2), 2) + ' €' }; }
  });
  UB.simple({
    id: 'm-zinsen', fach: 'mathe', title: 'Zinsrechnung', area: 'zahlen', klassen: [3, 4], img: 'MiniHoS_Mathe_Taschenrechner',
    merk: '<b>Kapital</b> K, <b>Zinssatz</b> p % (pro Jahr), <b>Zinsen</b> Z. Jahreszinsen: Z = K · p : 100. Für m Monate: Z = K · p : 100 · m : 12. <b>Zinseszinsen</b>: Kapital nach n Jahren = K · (1 + p/100)<sup>n</sup>. In Österreich werden von Sparzinsen 25 % <b>Kapitalertragsteuer</b> (KESt) abgezogen.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Jahreszinsen berechnen.'], tasks: [zinsen(8)] },
      2: { ichkann: ['Du kannst Zinsen für Monate berechnen.', 'Du kennst die Kapitalertragsteuer.'], tasks: [zinsen(6), kest(4)] },
      3: { ichkann: ['Du kannst Zinseszinsen berechnen.'], tasks: [zinseszins(5), kest(3)] }
    }
  });

  // ---------------------------------------------------------------- Lineare Funktionen
  function koord(lineK, lineD, show) {
    const S = 4, N = 6, O = 3 + N * S; let s = '';
    for (let i = -N; i <= N; i++) { s += '<line x1="' + (O + i * S) + '" y1="3" x2="' + (O + i * S) + '" y2="' + (3 + 2 * N * S) + '" stroke="#ddd" stroke-width="0.2"/><line x1="3" y1="' + (O + i * S) + '" x2="' + (3 + 2 * N * S) + '" y2="' + (O + i * S) + '" stroke="#ddd" stroke-width="0.2"/>'; }
    s += '<line x1="3" y1="' + O + '" x2="' + (4 + 2 * N * S) + '" y2="' + O + '" stroke="#111" stroke-width="0.4"/><line x1="' + O + '" y1="' + (3 + 2 * N * S) + '" x2="' + O + '" y2="2" stroke="#111" stroke-width="0.4"/>';
    s += tx(5 + 2 * N * S, O + 1, 'x', 'start') + tx(O + 2, 3.5, 'y', 'start') + tx(O + S, O + 4, '1') + tx(O - 1.5, O - S + 1, '1', 'end');
    if (show) { const x1 = -N, x2 = N; const y1 = lineK * x1 + lineD, y2 = lineK * x2 + lineD; s += '<clipPath id="kc"><rect x="3" y="3" width="' + 2 * N * S + '" height="' + 2 * N * S + '"/></clipPath><line clip-path="url(#kc)" x1="' + (O + x1 * S) + '" y1="' + (O - y1 * S) + '" x2="' + (O + x2 * S) + '" y2="' + (O - y2 * S) + '" stroke="#c62828" stroke-width="0.6"/>'; }
    return svg(2 * N * S + 8, 2 * N * S + 6, s);
  }
  const fstr = (k, d) => 'y = ' + (k === 1 ? '' : k === -1 ? '−' : F(k)) + 'x' + (d ? (d < 0 ? ' − ' + F(-d) : ' + ' + F(d)) : '');
  const wertetab = () => ({ type: 'fn', fn: (rng) => {
    const k = nz(rng, -3, 3) * rng.pick([1, 1, 0.5]), d = R(rng, -4, 4); const xs = [-2, -1, 0, 1, 2, 3];
    const mk = (s) => '<div class="mi">' + fstr(k, d) + '</div>' + UB.table(['x'].concat(xs.map(F)), [['y'].concat(xs.map(x => s ? UB.sol(F(k * x + d)) : ''))], 'center-cols');
    return { title: 'Wertetabelle', instr: 'Berechne die y-Werte.', body: mk(false), sol: mk(true) };
  } });
  const zeichnen = (n) => ({ type: 'fn', fn: (rng) => {
    const fs = M.uniq(n, () => ({ k: nz(rng, -2, 2) * rng.pick([1, 0.5]), d: R(rng, -3, 3) }), f => f.k + '/' + f.d);
    const mk = (s) => '<div class="mgrid c2">' + fs.map(f => '<div class="mi">' + fstr(f.k, f.d) + koord(f.k, f.d, s) + (s ? UB.sol('Punkte: (0 | ' + F(f.d) + '), (2 | ' + F(2 * f.k + f.d) + ')') : '') + '</div>').join('') + '</div>';
    return { title: 'Graphen zeichnen', instr: 'Zeichne den Graphen. Tipp: Starte bei d auf der y-Achse und geh mit k weiter.', body: mk(false), sol: mk(true) };
  } });
  const kd = (n) => task({
    title: 'Steigung und Achsenabschnitt', instr: 'Lies k und d ab.', n, cols: 2, w: 2.5,
    gen: (rng) => { const k = nz(rng, -5, 5) * rng.pick([1, 0.5]), d = R(rng, -9, 9); return { q: fstr(k, d) + ': k = {?}, d = {?}', a: [F(k), F(d)] }; }
  });
  const punkt = (n) => task({
    title: 'Liegt der Punkt auf dem Graphen?', instr: 'Setze ein und schreibe „ja“ oder „nein“.', n, cols: 1, w: 3,
    gen: (rng) => { const k = nz(rng, -3, 3), d = R(rng, -5, 5), x = R(rng, -4, 4), on = rng.int(2); const y = k * x + d + (on ? 0 : nz(rng, -2, 2)); return { q: fstr(k, d) + ', P(' + F(x) + ' | ' + F(y) + '): {?}', a: on ? 'ja' : 'nein' }; }
  });
  UB.simple({
    id: 'm-funktionen', fach: 'mathe', title: 'Lineare Funktionen', area: 'variablen', klassen: [4], img: 'MiniHoS_Digital_Laptop-Sitzend',
    merk: 'Eine <b>lineare Funktion</b> hat die Form y = k · x + d. Der Graph ist eine Gerade. <b>d</b> (Achsenabschnitt): Dort schneidet die Gerade die y-Achse. <b>k</b> (Steigung): Geht man 1 nach rechts, geht man k nach oben (k > 0) oder nach unten (k < 0). Ein Punkt P(x | y) liegt auf dem Graphen, wenn beim Einsetzen eine wahre Aussage entsteht.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Wertetabellen für lineare Funktionen erstellen.', 'Du kannst k und d ablesen.'], tasks: [wertetab(), wertetab(), kd(6)] },
      2: { ichkann: ['Du kannst Graphen linearer Funktionen zeichnen.'], tasks: [zeichnen(4)] },
      3: { ichkann: ['Du kannst prüfen, ob ein Punkt auf einem Graphen liegt.'], tasks: [punkt(6), zeichnen(2)] }
    }
  });

  // ---------------------------------------------------------------- Prisma, Zylinder, Pyramide, Kegel
  const koerper = (n, kinds) => task({
    title: 'Volumen und Oberfläche', instr: 'Rechne mit π ≈ 3,14 und runde auf zwei Dezimalstellen.', n, cols: 1, w: 6,
    gen: (rng, level, i) => {
      const k = kinds[i % kinds.length];
      if (k === 'prisma') { const a = R(rng, 3, 12), b = R(rng, 3, 12), h = R(rng, 4, 20); return { q: 'Prisma mit rechtwinkelig-dreieckiger Grundfläche (Katheten ' + a + ' cm und ' + b + ' cm), Höhe ' + h + ' cm: V = {?}', a: F(a * b / 2 * h) + ' cm³' }; }
      if (k === 'zylinder') { const r = R(rng, 2, 12), h = R(rng, 3, 25); return { q: 'Zylinder r = ' + r + ' cm, h = ' + h + ' cm: V ≈ {?}, O ≈ {?}', a: [F2(r * r * PI * h) + ' cm³', F2(2 * r * r * PI + 2 * r * PI * h) + ' cm²'] }; }
      if (k === 'pyramide') { const a = R(rng, 3, 15), h = R(rng, 3, 20); return { q: 'Quadratische Pyramide a = ' + a + ' cm, h = ' + h + ' cm: V ≈ {?}', a: F2(a * a * h / 3) + ' cm³' }; }
      if (k === 'kugel') { const r = R(rng, 1, 12); return { q: 'Kugel r = ' + r + ' cm: V ≈ {?}, O ≈ {?}', a: [F2(4 / 3 * r * r * r * PI) + ' cm³', F2(4 * r * r * PI) + ' cm²'] }; }
      if (k === 'kegelO') { const r = R(rng, 2, 10), h = R(rng, 3, 20), s = Math.sqrt(r * r + h * h); return { q: 'Kegel r = ' + r + ' cm, h = ' + h + ' cm: Mantellinie s ≈ {?}, O ≈ {?}', a: [F2(s) + ' cm', F2(r * r * PI + r * PI * round(s, 2)) + ' cm²'] }; }
      const r = R(rng, 2, 10), h = R(rng, 3, 20); return { q: 'Kegel r = ' + r + ' cm, h = ' + h + ' cm: V ≈ {?}', a: F2(r * r * PI * h / 3) + ' cm³' };
    }
  });
  const TX_KO = [
    (r) => { const d = R(r, 6, 12), h = R(r, 10, 20); const V = (d / 2) ** 2 * PI * h; return { q: 'Eine zylinderförmige Dose hat einen Durchmesser von ' + d + ' cm und ist ' + h + ' cm hoch. Wie viel Liter passen hinein?', a: 'V = ' + F(d / 2) + '² · 3,14 · ' + h + ' ≈ ' + F2(V) + ' cm³ ≈ ' + F2(V / 1000) + ' l' }; },
    (r) => { const d = R(r, 2, 6), h = R(r, 5, 15) / 10; return { q: 'Ein kegelförmiger Sandhaufen hat einen Durchmesser von ' + d + ' m und ist ' + F(h) + ' m hoch. Wie viel m³ Sand sind es?', a: 'V = ' + F(d / 2) + '² · 3,14 · ' + F(h) + ' : 3 ≈ ' + F2((d / 2) ** 2 * PI * h / 3) + ' m³' }; },
    (r) => { const d = r.pick([22, 24, 6, 4]); const rr = d / 2; return { q: 'Ein kugelförmiger Ball hat einen Durchmesser von ' + d + ' cm. Wie viel Luft (in Liter) ist darin, wie groß ist seine Oberfläche?', a: 'V = 4/3 · ' + F(rr) + '³ · 3,14 ≈ ' + F2(4 / 3 * rr * rr * rr * PI) + ' cm³ ≈ ' + F2(4 / 3 * rr * rr * rr * PI / 1000) + ' l; O = 4 · ' + F(rr) + '² · 3,14 ≈ ' + F2(4 * rr * rr * PI) + ' cm²' }; },
    (r) => { const rr = R(r, 2, 5), h = R(r, 8, 15); return { q: 'Eine Eistüte ist kegelförmig (r = ' + rr + ' cm, h = ' + h + ' cm). Wie viel cm³ Eis passen hinein (ohne Haube)?', a: 'V = ' + rr + '² · 3,14 · ' + h + ' : 3 ≈ ' + F2(rr * rr * PI * h / 3) + ' cm³' }; }
  ];
  const textKo = (n) => task({ title: 'Sachaufgaben', instr: 'Schreibe die Formel, die Rechnung und das Ergebnis.', n, mode: 'lines', lines: 2, gen: (rng) => rng.pick(TX_KO)(rng) });
  UB.simple({
    id: 'm-koerper2', fach: 'mathe', title: 'Zylinder, Kegel und Kugel', area: 'geometrie', klassen: [4], img: 'MiniHoS_Forschen_Lupe',
    merk: '<b>Drehzylinder</b>: V = r<sup>2</sup> · π · h, O = 2 · r<sup>2</sup> · π + 2 · r · π · h. <b>Drehkegel</b>: V = r<sup>2</sup> · π · h : 3; Mantellinie s = √(r<sup>2</sup> + h<sup>2</sup>); O = r<sup>2</sup> · π + r · π · s. <b>Kugel</b>: V = 4/3 · r<sup>3</sup> · π, O = 4 · r<sup>2</sup> · π. Zylinder und Kegel mit gleicher Grundfläche und Höhe: Der Kegel hat ein Drittel des Volumens. 1 dm³ = 1 l.',
    pools: {},
    levels: {
      1: { ichkann: ['Du berechnest Volumen und Oberfläche von Zylindern.'], tasks: [koerper(6, ['zylinder'])] },
      2: { ichkann: ['Du berechnest Volumen und Oberfläche von Kegel und Kugel.'], tasks: [koerper(6, ['kegel', 'kugel', 'kegelO'])] },
      3: { ichkann: ['Du löst Sachaufgaben zu Zylinder, Kegel und Kugel.'], tasks: [textKo(3), koerper(3, ['zylinder', 'kugel', 'kegelO'])] }
    }
  });
})();
