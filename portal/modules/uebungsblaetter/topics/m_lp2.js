/* Mathematik – Lehrplan-Ergänzungen 2. Klasse: Dreiecksarten & Winkelbeziehungen, Viereckseigenschaften,
   Brüche multiplizieren/dividieren, relative Häufigkeiten & Diagramme, Formeln, Schiebung & Kongruenz. */
(function () {
  const M = UB.M, G = UB.G, { R, fmt, round, task, frac, gcd } = M;
  const { add, sub, mul, n2, svgMM, T, L, C, PL, ARC, spt, DEG } = G;
  const F = (x) => fmt(round(x, 6));

  // ================================================================ Dreiecke: Arten und Winkel
  const artW = (a, b, c) => { const m = Math.max(a, b, c); return m === 90 ? 'rechtwinkelig' : m > 90 ? 'stumpfwinkelig' : 'spitzwinkelig'; };
  const artS = (a, b, c) => a === b && b === c ? 'gleichseitig' : (a === b || b === c || a === c) ? 'gleichschenkelig' : 'allgemein';
  const nachWinkeln = (n) => task({
    title: 'Einteilung nach Winkeln', instr: 'Ist das Dreieck spitzwinkelig, rechtwinkelig oder stumpfwinkelig?', n, cols: 2, w: 7,
    gen: (rng, lv, i) => { const kind = i % 3; let a, b; do { a = R(rng, 4, 26) * 5; b = kind === 1 ? 90 - a : R(rng, 4, 26) * 5; if (kind === 1) { a = R(rng, 5, 17) * 5; b = 90; } } while (a + b >= 175 || 180 - a - b < 10 || (kind === 0 && Math.max(a, b, 180 - a - b) >= 90) || (kind === 2 && Math.max(a, b, 180 - a - b) <= 90));
      const g = 180 - a - b, arr = rng.shuffle([a, b, g]); return { q: 'α = ' + arr[0] + '°, β = ' + arr[1] + '°, γ = ' + arr[2] + '° &nbsp;→ {?}', a: artW(...arr), key: arr.join() }; }
  });
  const nachSeiten = (n) => task({
    title: 'Einteilung nach Seiten', instr: 'Ist das Dreieck gleichseitig, gleichschenkelig oder allgemein?', n, cols: 2, w: 7,
    gen: (rng, lv, i) => { const kind = i % 3; let a = R(rng, 3, 9), b = a, c = a; if (kind === 1) { c = R(rng, 2, 2 * a - 1); if (c === a) c = a + 1; } if (kind === 2) { do { b = R(rng, 3, 9); c = R(rng, 3, 9); } while (b === a || c === a || b === c || a + b <= c || a + c <= b || b + c <= a); }
      const arr = rng.shuffle([a, b, c]); return { q: 'a = ' + arr[0] + ' cm, b = ' + arr[1] + ' cm, c = ' + arr[2] + ' cm &nbsp;→ {?}', a: artS(...arr), key: arr.join() }; }
  });
  const winkelsumme = (n) => task({
    title: 'Winkelsumme im Dreieck', instr: 'Die Winkelsumme im Dreieck beträgt 180°. Berechne den fehlenden Winkel.', n, cols: 2, w: 3,
    gen: (rng) => { const a = R(rng, 15, 110), b = R(rng, 15, 165 - a); const nm = rng.pick([['α', 'β', 'γ'], ['β', 'γ', 'α'], ['α', 'γ', 'β']]); return { q: nm[0] + ' = ' + a + '°, ' + nm[1] + ' = ' + b + '°, ' + nm[2] + ' = {?}', a: (180 - a - b) + '°', key: a + '|' + b }; }
  });
  const gleichschenkelig = (n) => task({
    title: 'Gleichschenkelige Dreiecke', instr: 'Im gleichschenkeligen Dreieck sind die beiden Basiswinkel gleich groß.', n, cols: 1, w: 4,
    gen: (rng) => { if (rng.int(2)) { const g = R(rng, 4, 34) * 4; return { q: 'Der Winkel an der Spitze ist ' + g + '°. Jeder Basiswinkel ist {?}', a: ((180 - g) / 2) + '°', key: 's' + g }; }
      const b = R(rng, 15, 85); return { q: 'Ein Basiswinkel ist ' + b + '°. Der Winkel an der Spitze ist {?}', a: (180 - 2 * b) + '°', key: 'b' + b }; }
  });
  const gibtEs = (n) => task({
    title: 'Gibt es dieses Dreieck?', instr: 'Schreibe ja oder nein. Begründe kurz mit der Winkelsumme.', n, cols: 1, w: 12,
    gen: (rng) => { const a = R(rng, 20, 130), b = R(rng, 20, 130); const ok = a + b < 180; return { q: 'α = ' + a + '° und β = ' + b + '°: {?}', a: ok ? 'ja, γ = ' + (180 - a - b) + '°' : 'nein, α + β = ' + (a + b) + '° ≥ 180°', key: a + '|' + b }; }
  });
  // Winkel an zwei parallelen Geraden mit einer schneidenden Geraden
  function parallelWinkel(rng) {
    let phi; do { phi = R(rng, 7, 29) * 5; } while (Math.abs(phi - 90) < 15);
    const W = 74, H = 42, y1 = 13, y2 = 31, t = Math.tan(phi * DEG), X1 = [37 + 9 / t, y1], X2 = [37 + 9 / t - 18 / t, y2];
    const d = [Math.cos(phi * DEG), -Math.sin(phi * DEG)];
    let s = L([3, y1], [W - 3, y1], { w: 0.5 }) + L([3, y2], [W - 3, y2], { w: 0.5 }) + L(add(X1, mul(d, 11)), add(X2, mul(d, -11)), { w: 0.5 }) +
      T([W - 3, y1 - 1.4], 'g', { fs: 3, a: 'end' }) + T([W - 3, y2 - 1.4], 'h', { fs: 3, a: 'end' }) + T([3, H - 2], 'g ∥ h', { fs: 2.8, a: 'start' });
    const size = (q) => q % 2 === 0 ? phi : 180 - phi;
    const start = (q) => [0, phi, 180, phi + 180][q];
    const all = []; [0, 1].forEach(k => [0, 1, 2, 3].forEach(q => all.push({ k, q })));
    const given = rng.pick(all), asked = rng.sample(all.filter(x => x !== given), 3);
    const names = ['α', 'β', 'γ', 'δ'];
    const mark = (x, nm, col) => { const P = x.k ? X2 : X1, a1 = start(x.q), sz = size(x.q); return ARC(P, 4.2, a1, a1 + sz, { c: col, w: 0.4 }) + T(add(spt(P, 8, a1 + sz / 2), [0, 1.1]), nm, { fs: 3, fill: col, b: true }); };
    s += mark(given, 'α', '#c62828'); asked.forEach((x, i) => { s += mark(x, names[i + 1], '#1d4ed8'); });
    const rel = (x) => { if (x.k === given.k) return (x.q - given.q + 4) % 4 === 2 ? 'Scheitelwinkel' : 'Nebenwinkel'; if (x.q === given.q) return 'Parallelwinkel (Stufenwinkel)'; if ((x.q - given.q + 4) % 4 === 2) return 'Parallelwinkel (Wechselwinkel)'; return 'ergänzt α auf 180°'; };
    return { svg: svgMM(W, H, s), phi: size(given.q), asked: asked.map((x, i) => ({ nm: names[i + 1], v: size(x.q), rel: rel(x) })) };
  }
  const paraWinkel = (n) => ({ type: 'fn', fn: (rng) => {
    const its = M.uniq(n, () => parallelWinkel(rng), x => x.phi + x.asked.map(a => a.v).join());
    const cell = (x, s) => '<div class="mi">' + x.svg + 'α = ' + x.phi + '°<br>' + x.asked.map(a => a.nm + ' = ' + (s ? UB.sol(a.v + '° <small>(' + a.rel + ')</small>') : UB.blank(3))).join('<br>') + '</div>';
    return { title: 'Winkel an Parallelen', instr: 'Die Geraden g und h sind parallel. Berechne β, γ und δ. Schreibe dazu, warum (Nebenwinkel, Scheitelwinkel, Parallelwinkel).', body: '<div class="mgrid c2">' + its.map(x => cell(x, false)).join('') + '</div>', sol: '<div class="mgrid c2">' + its.map(x => cell(x, true)).join('') + '</div>' };
  } });
  UB.simple({
    id: 'm-dreiecke', fach: 'mathe', title: 'Dreiecke und Winkelbeziehungen', area: 'geometrie', klassen: [2], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: '<b>Nach Winkeln</b>: spitzwinkelig (alle Winkel < 90°), rechtwinkelig (ein Winkel = 90°), stumpfwinkelig (ein Winkel > 90°). <b>Nach Seiten</b>: gleichseitig (alle Seiten gleich, alle Winkel 60°), gleichschenkelig (zwei gleich lange Schenkel, gleich große Basiswinkel), allgemein. <b>Winkelsumme</b> im Dreieck: α + β + γ = 180°. <b>Nebenwinkel</b> ergänzen einander auf 180°. <b>Scheitelwinkel</b> sind gleich groß. <b>Parallelwinkel</b> (Stufen- und Wechselwinkel an parallelen Geraden) sind gleich groß.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Dreiecke nach Winkeln und Seiten einteilen.'], tasks: [nachWinkeln(6), nachSeiten(6), winkelsumme(4)] },
      2: { ichkann: ['Du kannst fehlende Winkel im Dreieck berechnen.'], tasks: [winkelsumme(8), gleichschenkelig(4), gibtEs(3)] },
      3: { ichkann: ['Du kennst Nebenwinkel, Scheitelwinkel und Parallelwinkel.'], tasks: [paraWinkel(4), gibtEs(2)] }
    }
  });

  // ================================================================ Vierecke: Eigenschaften
  const PROPS = ['Alle Seiten sind gleich lang.', 'Gegenüberliegende Seiten sind parallel.', 'Es hat vier rechte Winkel.', 'Die Diagonalen sind gleich lang.', 'Die Diagonalen stehen normal aufeinander.', 'Die Diagonalen halbieren einander.', 'Es hat mindestens ein Paar paralleler Seiten.', 'Es ist achsensymmetrisch.'];
  const QT = {
    'Quadrat': [1, 1, 1, 1, 1, 1, 1, 1], 'Rechteck': [0, 1, 1, 1, 0, 1, 1, 1], 'Raute': [1, 1, 0, 0, 1, 1, 1, 1], 'Parallelogramm': [0, 1, 0, 0, 0, 1, 1, 0],
    'Deltoid': [0, 0, 0, 0, 1, 0, 0, 1], 'Trapez (allgemein)': [0, 0, 0, 0, 0, 0, 1, 0], 'gleichschenkeliges Trapez': [0, 0, 0, 1, 0, 0, 1, 1]
  };
  const eigenschaften = (n) => task({
    title: 'Stimmt das?', instr: 'Schreibe ja oder nein. Gemeint ist immer ein ganz allgemeines Beispiel dieser Vierecksart.', n, cols: 1, w: 3,
    gen: (rng) => { const q = rng.pick(Object.keys(QT)), p = R(rng, 0, 7); return { q: '<b>' + q + '</b>: ' + PROPS[p] + ' {?}', a: QT[q][p] ? 'ja' : 'nein', key: q + p }; }
  });
  const RAETSEL = [
    ['Alle Seiten sind gleich lang, aber es hat keine rechten Winkel.', 'Raute'], ['Es hat vier rechte Winkel, aber nicht alle Seiten sind gleich lang.', 'Rechteck'],
    ['Alle Seiten sind gleich lang und alle Winkel sind 90°.', 'Quadrat'], ['Gegenüberliegende Seiten sind parallel, es hat keine rechten Winkel und nicht alle Seiten sind gleich lang.', 'Parallelogramm'],
    ['Es hat genau ein Paar paralleler Seiten.', 'Trapez'], ['Je zwei benachbarte Seiten sind gleich lang, die Diagonalen stehen normal aufeinander, aber es hat keine parallelen Seiten.', 'Deltoid'],
    ['Es hat genau ein Paar paralleler Seiten, und die beiden anderen Seiten (Schenkel) sind gleich lang.', 'gleichschenkeliges Trapez'],
    ['Die Diagonalen sind gleich lang und halbieren einander, stehen aber nicht normal aufeinander.', 'Rechteck'], ['Die Diagonalen halbieren einander und stehen normal aufeinander, sind aber verschieden lang.', 'Raute']
  ];
  const raetsel = (n) => task({ title: 'Welches Viereck ist das?', instr: 'Lies die Beschreibung und schreibe den Namen des Vierecks.', n, cols: 1, w: 10, gen: (rng) => { const [q, a] = rng.pick(RAETSEL); return { q: q + ' {?}', a, key: q }; } });
  const vWinkel = (n) => task({
    title: 'Winkel im Viereck', instr: 'Die Winkelsumme im Viereck beträgt 360°. Berechne die fehlenden Winkel.', n, cols: 1, w: 3,
    gen: (rng) => {
      const k = R(rng, 0, 3);
      if (k === 0) { let a, b, c; do { a = R(rng, 50, 130); b = R(rng, 50, 130); c = R(rng, 40, 170); } while (360 - a - b - c < 40 || 360 - a - b - c > 170); return { q: 'Viereck: α = ' + a + '°, β = ' + b + '°, γ = ' + c + '°, δ = {?}', a: (360 - a - b - c) + '°', key: 'v' + a + b + c }; }
      if (k === 1) { const a = R(rng, 9, 17) * 5; return { q: 'Parallelogramm: α = ' + a + '°. β = {?}, γ = {?}, δ = {?}', a: [(180 - a) + '°', a + '°', (180 - a) + '°'], key: 'p' + a }; }
      if (k === 2) { const a = R(rng, 9, 17) * 5; return { q: 'Gleichschenkeliges Trapez: α = β = ' + a + '°. γ = {?}, δ = {?}', a: [(180 - a) + '°', (180 - a) + '°'], key: 't' + a }; }
      const a = R(rng, 8, 16) * 5, c = R(rng, 8, 16) * 5; if (a + c >= 300) return { q: 'Deltoid: α = 80°, γ = 60°, β = δ. β = {?}', a: '110°', key: 'd0' };
      return { q: 'Deltoid: α = ' + a + '°, γ = ' + c + '°, β = δ. β = {?}', a: String((360 - a - c) / 2).replace('.', ',') + '°', key: 'd' + a + c };
    }
  });
  const flDiag = (n) => task({
    title: 'Fläche aus den Diagonalen', instr: 'Bei Raute und Deltoid gilt: A = e · f : 2.', n, cols: 2, w: 4,
    gen: (rng) => { const e = R(rng, 4, 16), f = R(rng, 3, 12), k = rng.pick(['Raute', 'Deltoid']); return { q: k + ': e = ' + e + ' cm, f = ' + f + ' cm, A = {?}', a: F(e * f / 2) + ' cm²', key: k + e + f }; }
  });
  UB.simple({
    id: 'm-viereckarten', fach: 'mathe', title: 'Vierecke: Eigenschaften und Winkel', area: 'geometrie', klassen: [2], img: 'MiniHoS_Lob_Checkliste',
    merk: '<b>Quadrat</b>: 4 gleiche Seiten, 4 rechte Winkel. <b>Rechteck</b>: 4 rechte Winkel, gegenüberliegende Seiten gleich lang. <b>Raute</b>: 4 gleiche Seiten, Diagonalen normal aufeinander. <b>Parallelogramm</b>: gegenüberliegende Seiten parallel und gleich lang, Diagonalen halbieren einander. <b>Deltoid</b>: je zwei benachbarte Seiten gleich lang, Diagonalen normal, eine Symmetrieachse. <b>Trapez</b>: (mindestens) ein Paar paralleler Seiten; gleichschenkeliges Trapez: Schenkel gleich lang. <b>Winkelsumme</b> im Viereck: 360°. Raute und Deltoid: A = e · f : 2.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kennst die Eigenschaften der besonderen Vierecke.'], tasks: [eigenschaften(12)] },
      2: { ichkann: ['Du erkennst Vierecke an ihren Eigenschaften.', 'Du berechnest Winkel im Viereck.'], tasks: [raetsel(5), vWinkel(4)] },
      3: { ichkann: ['Du berechnest Winkel in besonderen Vierecken.', 'Du berechnest Flächen aus den Diagonalen.'], tasks: [vWinkel(6), flDiag(6), eigenschaften(4)] }
    }
  });

  // ================================================================ Brüche multiplizieren und dividieren
  const Q = (z, n) => { if (n < 0) { z = -z; n = -n; } const g = gcd(z, n) || 1; return [z / g, n / g]; };
  const qs = ([z, n]) => (z < 0 ? '−' : '') + (n === 1 ? fmt(Math.abs(z)) : frac(Math.abs(z), n));
  const qm = ([z, n]) => { if (n === 1 || Math.abs(z) < n) return qs([z, n]); const w = Math.trunc(Math.abs(z) / n), r = Math.abs(z) % n; return (z < 0 ? '−' : '') + w + (r ? '&#8239;' + frac(r, n) : ''); };
  const mulQ = (a, b) => Q(a[0] * b[0], a[1] * b[1]), divQ = (a, b) => Q(a[0] * b[1], a[1] * b[0]), addQ = (a, b) => Q(a[0] * b[1] + b[0] * a[1], a[1] * b[1]), subQ = (a, b) => addQ(a, [-b[0], b[1]]);
  const rq = (rng, maxN) => { let n, z; do { n = R(rng, 2, maxN); z = R(rng, 1, n - 1); } while (gcd(z, n) !== 1); return [z, n]; };
  const ans = (x) => qs(x) + (x[1] !== 1 && Math.abs(x[0]) > x[1] ? ' = ' + qm(x) : '');
  const brMalNat = (n) => task({ title: 'Bruch mal / durch natürliche Zahl', instr: 'Rechne und kürze das Ergebnis. Unechte Brüche darfst du als gemischte Zahl schreiben.', n, cols: 3, w: 4,
    gen: (rng) => { const a = rq(rng, 9), k = R(rng, 2, 9); return rng.int(2) ? { q: frac(a[0], a[1]) + ' · ' + k, a: ans(mulQ(a, [k, 1])), key: 'm' + a + k } : { q: frac(a[0], a[1]) + ' : ' + k, a: ans(divQ(a, [k, 1])), key: 'd' + a + k }; } });
  const brVon = (n) => task({ title: 'Bruchteil von einem Bruch', instr: '„von“ bedeutet „mal“.', n, cols: 3, w: 4,
    gen: (rng) => { const a = rq(rng, 6), b = rq(rng, 8); return { q: frac(a[0], a[1]) + ' von ' + frac(b[0], b[1]), a: ans(mulQ(a, b)), key: a + '|' + b }; } });
  const brMal = (n) => task({ title: 'Bruch mal Bruch', instr: 'Zähler mal Zähler, Nenner mal Nenner. Kürze vorher, wenn es geht.', n, cols: 3, w: 4,
    gen: (rng) => { const a = rq(rng, 9), b = rq(rng, 9); return { q: frac(a[0], a[1]) + ' · ' + frac(b[0], b[1]), a: ans(mulQ(a, b)), key: a + '|' + b }; } });
  const brDurch = (n) => task({ title: 'Bruch durch Bruch', instr: 'Mit dem Kehrwert multiplizieren.', n, cols: 3, w: 4,
    gen: (rng) => { const a = rq(rng, 9), b = rq(rng, 9); return { q: frac(a[0], a[1]) + ' : ' + frac(b[0], b[1]), a: ans(divQ(a, b)), key: a + '|' + b }; } });
  const gemischt = (n) => task({ title: 'Gemischte Zahlen', instr: 'Verwandle zuerst in unechte Brüche.', n, cols: 2, w: 4,
    gen: (rng) => { const a = Q(R(rng, 1, 3) * 4 + R(rng, 1, 3), 4), b = rq(rng, 6), w = R(rng, 1, 2), bb = Q(w * b[1] + b[0], b[1]); const op = rng.int(2);
      return { q: qm(a) + (op ? ' · ' : ' : ') + qm(bb), a: ans(op ? mulQ(a, bb) : divQ(a, bb)), key: a + '|' + bb + op }; } });
  const verbindung = (n) => task({ title: 'Alle vier Rechenarten', instr: 'Punktrechnung vor Strichrechnung!', n, cols: 2, w: 4,
    gen: (rng) => { const a = rq(rng, 6), b = rq(rng, 6), c = rq(rng, 6); const k = rng.int(3);
      if (k === 0) return { q: frac(a[0], a[1]) + ' + ' + frac(b[0], b[1]) + ' · ' + frac(c[0], c[1]), a: ans(addQ(a, mulQ(b, c))), key: 'a' + a + b + c };
      if (k === 1) { const x = addQ(a, b); return { q: '(' + frac(a[0], a[1]) + ' + ' + frac(b[0], b[1]) + ') : ' + frac(c[0], c[1]), a: ans(divQ(x, c)), key: 'b' + a + b + c }; }
      const big = Q(R(rng, 2, 4) * a[1] + a[0], a[1]); return { q: qm(big) + ' − ' + frac(b[0], b[1]) + ' · ' + frac(c[0], c[1]), a: ans(subQ(big, mulQ(b, c))), key: 'c' + big + b + c }; } });
  const TX_BR = [
    (r) => { const l = r.pick([[3, 4], [1, 2], [2, 3], [3, 5]]), k = R(r, 4, 9); return { q: 'Eine Flasche fasst ' + qs(l) + ' Liter. Wie viel Liter sind ' + k + ' Flaschen?', a: k + ' · ' + qs(l) + ' l = ' + ans(mulQ(l, [k, 1])) + ' l' }; },
    (r) => { const t = r.pick([[3, 4], [1, 2], [5, 6]]), k = r.pick([3, 4, 5, 6]); return { q: qs(t) + ' kg Kekse werden gerecht auf ' + k + ' Kinder aufgeteilt. Wie viel bekommt jedes Kind?', a: qs(t) + ' kg : ' + k + ' = ' + ans(divQ(t, [k, 1])) + ' kg' }; },
    (r) => { const g = r.pick([[3, 4], [2, 3], [3, 2], [5, 2]]), p = r.pick([[1, 4], [1, 8], [1, 2], [1, 6]]); return { q: 'Wie viele Gläser zu ' + qs(p) + ' l kann man aus ' + qs(g) + ' l Saft füllen?', a: qs(g) + ' : ' + qs(p) + ' = ' + ans(divQ(g, p)) + ' Gläser' + (divQ(g, p)[1] !== 1 ? ' (also ' + Math.floor(divQ(g, p)[0] / divQ(g, p)[1]) + ' volle Gläser)' : '') }; }
  ];
  const brText = (n) => task({ title: 'Sachaufgaben', instr: 'Schreibe die Rechnung und das Ergebnis.', n, mode: 'lines', lines: 1, gen: (rng) => M.pickT(rng, TX_BR, 'TX_BR') });
  UB.simple({
    id: 'm-brueche2', fach: 'mathe', title: 'Brüche multiplizieren und dividieren', area: 'zahlen', klassen: [2], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: '<b>Multiplizieren</b>: Zähler mal Zähler, Nenner mal Nenner: ' + frac(2, 3) + ' · ' + frac(3, 5) + ' = ' + frac(6, 15) + ' = ' + frac(2, 5) + '. Vorher kürzen spart Arbeit! „<b>von</b>“ bedeutet „mal“: ' + frac(1, 2) + ' von ' + frac(3, 4) + ' = ' + frac(3, 8) + '. <b>Dividieren</b>: mit dem <b>Kehrwert</b> multiplizieren: ' + frac(3, 4) + ' : ' + frac(1, 2) + ' = ' + frac(3, 4) + ' · ' + frac(2, 1) + ' = ' + frac(3, 2) + '. Gemischte Zahlen zuerst in unechte Brüche verwandeln. Es gilt: Punktrechnung vor Strichrechnung, Klammern zuerst.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Brüche mit natürlichen Zahlen multiplizieren und dividieren.', 'Du kannst Bruchteile von Brüchen berechnen.'], tasks: [brMalNat(9), brVon(6), brText(2)] },
      2: { ichkann: ['Du kannst Brüche multiplizieren und dividieren.'], tasks: [brMal(9), brDurch(9), brText(1)] },
      3: { ichkann: ['Du rechnest mit gemischten Zahlen.', 'Du beachtest die Rechenregeln.'], tasks: [gemischt(6), verbindung(6), brText(2)] }
    }
  });

  // ================================================================ Relative Häufigkeiten und Diagramme
  const CTX = [['Von {n} Kindern kommen {k} mit dem Rad.', ''], ['Von {n} Schülerinnen und Schülern haben {k} ein Haustier.', ''], ['{k} von {n} Befragten essen gern Spinat.', ''], ['Bei {n} Freiwürfen trifft Mia {k}-mal.', ''], ['{k} von {n} Losen sind Gewinne.', '']];
  const relH = (n) => task({
    title: 'Relative Häufigkeit', instr: 'Relative Häufigkeit = Anzahl : Gesamtzahl. Gib sie als gekürzten Bruch, als Dezimalzahl und in Prozent an.', n, cols: 1, w: 3,
    gen: (rng) => { const N = rng.pick([10, 20, 25, 50, 40, 200]), k = R(rng, 1, N - 1); const t = rng.pick(CTX)[0].replace('{n}', N).replace('{k}', k);
      const q = Q(k, N); return { q: t + ' {?} = {?} = {?}', a: [qs(q), F(k / N), F(k / N * 100) + ' %'], key: N + '|' + k }; }
  });
  const COLS = ['#1d4ed8', '#c62828', '#f59e0b', '#16a34a', '#7c3aed', '#64748b'];
  function pie(vals, labels) {
    const tot = vals.reduce((a, b) => a + b, 0), Mi = [17, 17], r = 15; let a = 90, s = '';
    vals.forEach((v, i) => { const sw = v / tot * 360, p1 = spt(Mi, r, a), p2 = spt(Mi, r, a - sw); s += '<path d="M17 17 L' + n2(p1[0]) + ' ' + n2(p1[1]) + ' A15 15 0 ' + (sw > 180 ? 1 : 0) + ' 1 ' + n2(p2[0]) + ' ' + n2(p2[1]) + ' Z" fill="' + COLS[i] + '" stroke="#fff" stroke-width="0.4"/>'; a -= sw; });
    labels.forEach((l, i) => { s += '<rect x="37" y="' + (4 + i * 5) + '" width="3" height="3" fill="' + COLS[i] + '"/>' + T([41.5, 6.6 + i * 5], l, { fs: 2.8, a: 'start' }); });
    return svgMM(78, 34, s);
  }
  const SURV = [['Lieblingsfach', ['Turnen', 'Mathe', 'Deutsch', 'Englisch', 'BE']], ['Schulweg', ['zu Fuß', 'Bus', 'Rad', 'Auto']], ['Haustier', ['Hund', 'Katze', 'Fische', 'keins']], ['Lieblingsfarbe', ['Blau', 'Rot', 'Grün', 'Gelb']]];
  const kreisdia = () => ({ type: 'fn', fn: (rng) => {
    const [thema, cats] = rng.pick(SURV), k = R(rng, 3, Math.min(4, cats.length)), labs = cats.slice(0, k);
    const tot = rng.pick([20, 24, 30, 36, 40, 45, 60, 72]);
    let cuts; do { cuts = Array.from(new Set(labs.slice(1).map(() => R(rng, 2, tot - 2)))).sort((a, b) => a - b); } while (cuts.length !== k - 1 || cuts.some((c, i) => c - (i ? cuts[i - 1] : 0) < 2) || tot - cuts[k - 2] < 2);
    const vals = cuts.concat([tot]).map((c, i) => c - (i ? cuts[i - 1] : 0));
    const row = (s) => UB.table([thema].concat(labs), [['Anzahl'].concat(vals.map(String)), ['Anteil in %'].concat(vals.map(v => s ? UB.sol(F(round(v / tot * 100, 1)) + ' %') : '')), ['Winkel'].concat(vals.map(v => s ? UB.sol(F(v / tot * 360) + '°') : ''))]);
    return { title: 'Kreisdiagramm', instr: tot + ' Kinder wurden befragt. Berechne Anteile und Winkel und zeichne ein Kreisdiagramm (Kreis mit r = 3 cm).', body: row(false) + M.karo(34, 9), sol: row(true) + pie(vals, labs) };
  } });
  function streifen(pcts, labels) { let x = 2, s = ''; pcts.forEach((p, i) => { s += '<rect x="' + n2(x) + '" y="3" width="' + p + '" height="8" fill="' + COLS[i] + '" stroke="#fff" stroke-width="0.3"/>' + T([x + p / 2, 16], labels[i], { fs: 2.8 }); x += p; });
    for (let k = 0; k <= 10; k++) s += L([2 + k * 10, 11], [2 + k * 10, 12.5], { w: 0.25 }); return svgMM(104, 19, s); }
  const prozStreifen = (n) => task({
    title: 'Prozentstreifen', instr: 'Der ganze Streifen ist 10 cm lang (= 100 %). Lies die Anteile ab.', n, cols: 1, w: 3,
    gen: (rng) => { let p; do { const a = R(rng, 2, 9) * 5, b = R(rng, 2, 9) * 5; p = [a, b, 100 - a - b]; } while (p[2] < 10); const labs = ['A', 'B', 'C'];
      return { q: streifen(p, labs) + labs.map((l, i) => l + ': {?}').join('&nbsp;&nbsp; '), a: p.map(v => v + ' %'), key: p.join() }; }
  });
  const mehrstufig = (n) => task({
    title: 'Anteile von Anteilen', instr: 'Zeichne ein Baumdiagramm. Multipliziere die Anteile entlang des Weges.', n, mode: 'lines', lines: 2,
    gen: (rng) => { const ctx = rng.pick([['der Kinder fahren mit dem Bus', 'davon fahren', 'länger als 20 Minuten'], ['der Lose sind Gewinne', 'davon sind', 'Hauptgewinne'], ['der Klasse spielen ein Instrument', 'davon spielen', 'Gitarre'], ['der Äpfel sind rot', 'davon sind', 'Bioäpfel']]);
      const p1 = R(rng, 2, 9) * 10, p2 = rng.pick([10, 20, 25, 50, 30, 40, 60, 75]); return { q: p1 + ' % ' + ctx[0] + ', ' + ctx[1] + ' ' + p2 + ' % ' + ctx[2] + '. Wie viel Prozent sind das insgesamt?', a: F(p1 / 100) + ' · ' + F(p2 / 100) + ' = ' + F(round(p1 * p2 / 10000, 4)) + ' = ' + F(p1 * p2 / 100) + ' %', key: ctx[2] + p1 + p2 }; }
  });
  UB.simple({
    id: 'm-haeufigkeiten', fach: 'mathe', title: 'Relative Häufigkeiten und Diagramme', area: 'daten', klassen: [2, 3], img: 'MiniHoS_Digital_Laptop',
    merk: '<b>Absolute Häufigkeit</b>: wie oft etwas vorkommt. <b>Relative Häufigkeit</b> = absolute Häufigkeit : Gesamtzahl, angegeben als Bruch, Dezimalzahl oder in Prozent (' + frac(8, 25) + ' = 0,32 = 32 %). Alle relativen Häufigkeiten zusammen ergeben 1 = 100 %. <b>Kreisdiagramm</b>: Winkel = Anteil · 360° (10 % ≙ 36°). <b>Prozentstreifen</b>: 10 cm ≙ 100 %, 1 mm ≙ 1 %. <b>Anteile von Anteilen</b>: entlang eines Baumdiagramms multiplizieren (50 % von 40 % = 0,5 · 0,4 = 0,2 = 20 %).',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst relative Häufigkeiten berechnen.'], tasks: [relH(6), prozStreifen(2)] },
      2: { ichkann: ['Du kannst Kreisdiagramme berechnen und zeichnen.', 'Du kannst Prozentstreifen lesen.'], tasks: [kreisdia(), prozStreifen(2)] },
      3: { ichkann: ['Du rechnest mit Anteilen von Anteilen.'], tasks: [relH(3), mehrstufig(4)] }
    }
  });

  // ================================================================ Formeln
  const FORM = [
    { f: 'u = 2 · a + 2 · b', t: 'Umfang eines Rechtecks', v: (r) => { const a = R(r, 3, 20), b = R(r, 2, 15); return { give: 'a = ' + a + ' cm, b = ' + b + ' cm', ask: 'u', val: (2 * a + 2 * b) + ' cm' }; } },
    { f: 'A = a · b', t: 'Fläche eines Rechtecks', v: (r) => { const a = R(r, 3, 25), b = R(r, 2, 15); return { give: 'a = ' + a + ' m, b = ' + b + ' m', ask: 'A', val: (a * b) + ' m²' }; } },
    { f: 'P = p · n', t: 'Preis P für n Stück zu je p Euro', v: (r) => { const p = R(r, 2, 30) / 2, n = R(r, 2, 12); return { give: 'p = ' + F(p) + ' €, n = ' + n, ask: 'P', val: F(p * n) + ' €' }; } },
    { f: 's = v · t', t: 'Weg s bei Geschwindigkeit v und Zeit t', v: (r) => { const v = R(r, 4, 24) * 5, t = R(r, 1, 6); return { give: 'v = ' + v + ' km/h, t = ' + t + ' h', ask: 's', val: (v * t) + ' km' }; } },
    { f: 'V = a · b · c', t: 'Volumen eines Quaders', v: (r) => { const a = R(r, 2, 12), b = R(r, 2, 10), c = R(r, 2, 8); return { give: 'a = ' + a + ' cm, b = ' + b + ' cm, c = ' + c + ' cm', ask: 'V', val: (a * b * c) + ' cm³' }; } },
    { f: 'K = 4 + 2 · x', t: 'Taxikosten K (in €) für x km', v: (r) => { const x = R(r, 2, 25); return { give: 'x = ' + x, ask: 'K', val: (4 + 2 * x) + ' €' }; } }
  ];
  const fEinsetzen = (n) => task({ title: 'Formeln anwenden', instr: 'Setze die Werte in die Formel ein und rechne.', n, cols: 1, w: 4,
    gen: (rng) => { const f = rng.pick(FORM), v = f.v(rng); return { q: f.t + ': <b>' + f.f + '</b>; ' + v.give + '. ' + v.ask + ' = {?}', a: v.val, key: f.f + v.give }; } });
  const AUF = [
    (r) => { const g = R(r, 2, 6), k = R(r, 1, 4) / 2 + 1; return { q: 'Ein Taxi kostet ' + g + ' € Grundgebühr und ' + F(k) + ' € pro Kilometer. Stelle eine Formel für den Preis P bei x km auf.', a: 'P = ' + g + ' + ' + F(k) + ' · x' }; },
    (r) => { const e = R(r, 3, 9); return { q: 'Eine Kinokarte kostet ' + e + ' €. Stelle eine Formel für den Preis P von n Karten auf.', a: 'P = ' + e + ' · n' }; },
    () => ({ q: 'Stelle eine Formel für den Umfang u eines Quadrats mit der Seitenlänge a auf.', a: 'u = 4 · a' }),
    () => ({ q: 'Stelle eine Formel für die Oberfläche O eines Würfels mit der Kantenlänge a auf.', a: 'O = 6 · a · a = 6 · a²' }),
    (r) => { const m = R(r, 10, 40); return { q: 'Leo hat ' + m + ' € gespart. Jede Woche legt er 5 € dazu. Stelle eine Formel für sein Guthaben G nach w Wochen auf.', a: 'G = ' + m + ' + 5 · w' }; },
    () => ({ q: 'Stelle eine Formel für den Umfang u eines gleichseitigen Dreiecks mit der Seitenlänge a auf.', a: 'u = 3 · a' }),
    (r) => { const p = R(r, 2, 6); return { q: 'Ein Handytarif kostet 9 € im Monat und ' + p + ' Cent pro SMS. Stelle eine Formel für die Kosten K (in Cent) bei s SMS auf.', a: 'K = 900 + ' + p + ' · s' }; }
  ];
  let planF = [];
  const fAufstellen = (n) => task({ title: 'Formeln aufstellen', instr: 'Schreibe eine Formel mit Variablen.', n, mode: 'lines', lines: 1, gen: (rng, lv, i) => { if (i === 0) planF = rng.shuffle(AUF.map((_, k) => k)); const idx = planF[i % AUF.length]; const x = AUF[idx](rng); x.key = 'f' + idx; return x; } });
  const UMF = [
    { f: 'A = a · b', g: 'b', r: 'b = A : a', v: (r) => { const a = R(r, 3, 15), b = R(r, 2, 12); return ['A = ' + (a * b) + ' cm², a = ' + a + ' cm', b + ' cm']; } },
    { f: 'u = 2 · a + 2 · b', g: 'b', r: 'b = (u − 2 · a) : 2', v: (r) => { const a = R(r, 3, 15), b = R(r, 2, 12); return ['u = ' + (2 * a + 2 * b) + ' cm, a = ' + a + ' cm', b + ' cm']; } },
    { f: 's = v · t', g: 't', r: 't = s : v', v: (r) => { const v = R(r, 4, 20) * 5, t = R(r, 1, 6); return ['s = ' + (v * t) + ' km, v = ' + v + ' km/h', t + ' h']; } },
    { f: 'V = a · b · c', g: 'c', r: 'c = V : (a · b)', v: (r) => { const a = R(r, 2, 10), b = R(r, 2, 10), c = R(r, 2, 9); return ['V = ' + (a * b * c) + ' cm³, a = ' + a + ' cm, b = ' + b + ' cm', c + ' cm']; } },
    { f: 'A = (a + c) · h : 2', g: 'h', r: 'h = 2 · A : (a + c)', v: (r) => { const a = R(r, 6, 14), c = R(r, 2, 6), h = R(r, 2, 9) * 2; return ['A = ' + ((a + c) * h / 2) + ' cm², a = ' + a + ' cm, c = ' + c + ' cm', h + ' cm']; } },
    { f: 'A = g · h : 2', g: 'h', r: 'h = 2 · A : g', v: (r) => { const g = R(r, 4, 16), h = R(r, 2, 12); return ['A = ' + F(g * h / 2) + ' cm², g = ' + g + ' cm', h + ' cm']; } }
  ];
  const fUmformen = (n) => task({ title: 'Formeln umformen', instr: 'Forme die Formel nach der gesuchten Größe um und berechne sie.', n, cols: 1, w: 7,
    gen: (rng) => { const f = rng.pick(UMF), [give, val] = f.v(rng); return { q: '<b>' + f.f + '</b> nach ' + f.g + ' umformen: {?}; ' + give + ' → ' + f.g + ' = {?}', a: [f.r, val], key: f.f + give }; } });
  UB.simple({
    id: 'm-formeln', fach: 'mathe', title: 'Formeln', area: 'variablen', klassen: [1, 2, 3], img: 'MiniHoS_Schreiben_Notiz-Idee',
    merk: 'Eine <b>Formel</b> beschreibt mit Variablen (Buchstaben) einen Zusammenhang, z. B. A = a · b. <b>Anwenden</b>: Werte einsetzen, dann rechnen (Punkt vor Strich!). <b>Aufstellen</b>: Was bleibt gleich (feste Zahl)? Was ändert sich (Variable)? Beispiel: Grundgebühr 4 € plus 2 € pro km → K = 4 + 2 · x. <b>Umformen</b>: wie bei Gleichungen auf beiden Seiten dieselbe Umkehrrechnung: A = a · b | : a → b = A : a.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Werte in Formeln einsetzen.'], tasks: [fEinsetzen(6), fAufstellen(2)] },
      2: { ichkann: ['Du kannst Formeln zu Sachsituationen aufstellen.'], tasks: [fAufstellen(4), fEinsetzen(4)] },
      3: { ichkann: ['Du kannst Formeln nach einer Größe umformen.'], tasks: [fUmformen(6), fAufstellen(2)] }
    }
  });

  // ================================================================ Schiebung und Kongruenz
  function kgrid(minX, maxX, minY, maxY, u, inner) {
    const W = (maxX - minX) * u + 10, H = (maxY - minY) * u + 8, ox = 5 - minX * u, oy = 4 + maxY * u, P = (p) => [ox + p[0] * u, oy - p[1] * u];
    let s = ''; for (let x = minX; x <= maxX; x++) s += L(P([x, minY]), P([x, maxY]), { c: '#d4d4d4', w: 0.2 }); for (let y = minY; y <= maxY; y++) s += L(P([minX, y]), P([maxX, y]), { c: '#d4d4d4', w: 0.2 });
    s += L(P([minX, 0]), P([maxX, 0]), { w: 0.4 }) + L(P([0, minY]), P([0, maxY]), { w: 0.4 });
    for (let x = minX; x <= maxX; x++) if (x && x % 2 === 0) s += T([P([x, 0])[0], P([x, 0])[1] + 3], fmt(x), { fs: 2.2 });
    for (let y = minY; y <= maxY; y++) if (y && y % 2 === 0) s += T([P([0, y])[0] - 1.2, P([0, y])[1] + 0.8], fmt(y), { fs: 2.2, a: 'end' });
    return { W, H, P, s };
  }
  const NAMES = ['A', 'B', 'C', 'D'];
  const schiebung = (neg) => ({ type: 'fn', fn: (rng) => {
    const [minX, maxX, minY, maxY] = neg ? [-7, 7, -5, 5] : [0, 14, 0, 9];
    let pts, dx, dy, img;
    for (let t = 0; t < 500; t++) {
      const k = R(rng, 3, 4), x0 = R(rng, minX + 1, maxX - 5), y0 = R(rng, minY + 1, maxY - 4);
      pts = k === 3 ? [[x0, y0], [x0 + R(rng, 2, 4), y0 + R(rng, 0, 1)], [x0 + R(rng, 0, 2), y0 + R(rng, 2, 3)]] : [[x0, y0], [x0 + R(rng, 2, 3), y0], [x0 + R(rng, 2, 4), y0 + R(rng, 2, 3)], [x0, y0 + R(rng, 2, 3)]];
      dx = R(rng, -6, 6); dy = R(rng, -5, 5); img = pts.map(p => [p[0] + dx, p[1] + dy]);
      const ok = (p) => p[0] >= minX && p[0] <= maxX && p[1] >= minY && p[1] <= maxY && p[0] !== 0 && p[1] !== 0;
      if (Math.abs(dx) + Math.abs(dy) >= 4 && pts.concat(img).every(ok) && (!neg || img.some(p => p[0] < 0 || p[1] < 0))) break;
    }
    const g = kgrid(minX, maxX, minY, maxY, 5, ''), P = pts.map(g.P), Pi = img.map(g.P);
    const base = g.s + PL(P, { f: '#e3eaff', w: 0.5, cls: 'fig' }) + P.map((p, i) => T(add(p, [-1.8, -1.2]), NAMES[i], { fs: 2.8, b: true })).join('');
    const arrow = L(P[0], Pi[0], { c: '#16a34a', w: 0.45 }) + C(Pi[0], 0.7, { f: '#16a34a', c: '#16a34a' });
    const solS = base + arrow + PL(Pi, { f: 'rgba(198,40,40,0.15)', c: '#c62828', w: 0.5, cls: 'img' }) + Pi.map((p, i) => T(add(p, [1.8, -1.2]), NAMES[i] + '′', { fs: 2.8, b: true, fill: '#c62828', a: 'start' })).join('');
    const dir = (dx ? Math.abs(dx) + ' nach ' + (dx > 0 ? 'rechts' : 'links') : '') + (dx && dy ? ' und ' : '') + (dy ? Math.abs(dy) + ' nach ' + (dy > 0 ? 'oben' : 'unten') : '');
    const coords = img.map((p, i) => NAMES[i] + '′(' + fmt(p[0]) + ' | ' + fmt(p[1]) + ')').join(', ');
    const given = pts.map((p, i) => NAMES[i] + '(' + fmt(p[0]) + ' | ' + fmt(p[1]) + ')').join(', ');
    return { title: 'Schiebung', instr: 'Verschiebe die Figur ' + given + ' um ' + dir + '. Zeichne die Bildfigur und gib die Koordinaten der Bildpunkte an.', body: svgMM(g.W, g.H, base) + '<div class="mi">' + img.map((p, i) => NAMES[i] + '′( ' + UB.blank(1.5) + ' | ' + UB.blank(1.5) + ' )').join(' ') + '</div>', sol: svgMM(g.W, g.H, solS) + '<div class="mi">' + UB.sol(coords) + '</div>' };
  } });
  // Kongruenz: Bildfigur gedreht/gespiegelt/verschoben oder leicht verändert
  function kongr(rng) {
    let base; for (let t = 0; t < 100; t++) { base = [[0, 0], [R(rng, 2, 4), 0], [R(rng, 2, 5), R(rng, 1, 3)], [R(rng, 0, 1), R(rng, 2, 3)]]; const a = base.reduce((s, p, i) => { const q = base[(i + 1) % 4]; return s + p[0] * q[1] - q[0] * p[1]; }, 0); if (a > 8) break; }
    const yes = rng.int(2) === 0, how = rng.pick(['gedreht', 'gespiegelt', 'verschoben']);
    let img = base.map(p => how === 'gedreht' ? [-p[1], p[0]] : how === 'gespiegelt' ? [-p[0], p[1]] : [p[0], p[1]]);
    if (!yes) { const i = R(rng, 1, 3); img = img.map((p, j) => j === i ? [p[0] + (rng.int(2) ? 1 : -1), p[1] + (rng.int(2) ? 1 : 0)] : p); }
    const sh = (pts, ox) => { const mx = Math.min(...pts.map(p => p[0])), my = Math.min(...pts.map(p => p[1])); return pts.map(p => [ox + (p[0] - mx) * 4, 26 - (p[1] - my) * 4]); };
    let s = ''; for (let x = 0; x <= 66; x += 4) s += L([x + 2, 2], [x + 2, 30], { c: '#e5e5e5', w: 0.2 }); for (let y = 2; y <= 30; y += 4) s += L([2, y], [68, y], { c: '#e5e5e5', w: 0.2 });
    s += PL(sh(base, 6), { f: '#e3eaff', w: 0.5 }) + PL(sh(img, 38), { f: '#e3eaff', w: 0.5 });
    // tatsächliche Kongruenz rechnerisch prüfen (Seitenlängen und Diagonalen gleich, auch in umgekehrter Reihenfolge)
    const d2 = (p, q) => (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2, sig = (ps) => [0, 1, 2, 3].map(i => d2(ps[i], ps[(i + 1) % 4])).concat([d2(ps[0], ps[2]), d2(ps[1], ps[3])]);
    const same = (a, b) => a.every((v, i) => v === b[i]);
    const sb = sig(base); let isK = false;
    for (let r = 0; r < 4; r++) for (const rev of [false, true]) { let ps = img.slice(r).concat(img.slice(0, r)); if (rev) ps = [ps[0], ps[3], ps[2], ps[1]]; if (same(sig(ps), sb)) isK = true; }
    return { svg: svgMM(70, 32, s), a: isK ? 'ja' : 'nein', key: JSON.stringify(base) + JSON.stringify(img) };
  }
  const kongruent = (n) => task({ title: 'Kongruent oder nicht?', instr: 'Kongruente Figuren sind deckungsgleich (man darf sie verschieben, drehen und umklappen). Schreibe ja oder nein.', n, cols: 2, w: 3,
    gen: (rng) => { const k = kongr(rng); return { q: k.svg + 'kongruent: {?}', a: k.a, key: k.key }; } });
  const vektor = (n) => task({ title: 'Schiebung rechnerisch', instr: 'Bei einer Schiebung werden zu allen x-Koordinaten dieselbe Zahl und zu allen y-Koordinaten dieselbe Zahl addiert.', n, cols: 1, w: 3,
    gen: (rng) => { const A = [R(rng, -6, 6), R(rng, -6, 6)], dx = R(rng, -7, 7) || 2, dy = R(rng, -7, 7) || -3, B = [R(rng, -6, 6), R(rng, -6, 6)];
      return { q: 'A(' + fmt(A[0]) + ' | ' + fmt(A[1]) + ') wird auf A′(' + fmt(A[0] + dx) + ' | ' + fmt(A[1] + dy) + ') verschoben. Dann wird B(' + fmt(B[0]) + ' | ' + fmt(B[1]) + ') auf B′( {?} | {?} ) verschoben.', a: [fmt(B[0] + dx), fmt(B[1] + dy)], key: A + '|' + B + dx + dy }; } });
  UB.simple({
    id: 'm-schiebung', fach: 'mathe', title: 'Schiebung und Kongruenz', area: 'geometrie', klassen: [2], img: 'MiniHoS_Forschen_Magnet',
    merk: 'Bei einer <b>Schiebung</b> werden alle Punkte einer Figur um dieselbe Strecke in dieselbe Richtung verschoben (Schiebepfeil). Bildpunkte bekommen einen Strich: A → A′. Im Koordinatensystem: 3 nach rechts und 2 nach unten heißt x + 3 und y − 2. <b>Kongruent</b> (deckungsgleich) sind Figuren, die durch Verschieben, Drehen oder Spiegeln genau aufeinander passen: Alle Seitenlängen und Winkel sind gleich.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Figuren im Koordinatensystem verschieben.'], tasks: [schiebung(false), kongruent(4)] },
      2: { ichkann: ['Du kannst Schiebungen auch rechnerisch durchführen.'], tasks: [schiebung(true), vektor(3)] },
      3: { ichkann: ['Du erkennst kongruente Figuren.', 'Du rechnest Schiebungen mit negativen Koordinaten.'], tasks: [kongruent(4), vektor(4)] }
    }
  });
  // ================================================================ Stufe 4 · Profi
  const { L4, text } = M;
  const dreieck4 = (n) => task({
    title: 'Winkel mit Bedingungen', instr: 'Stelle eine Gleichung auf oder überlege mit der Winkelsumme.', n, cols: 1, w: 3,
    gen: (rng) => {
      const k = rng.int(3);
      if (k === 0) { const v = rng.pick([[1, 2, 3], [1, 1, 2], [2, 3, 4], [1, 2, 2], [3, 4, 5], [1, 3, 5], [2, 3, 5], [4, 5, 6]]), s = v[0] + v[1] + v[2]; return { q: 'α : β : γ = ' + v.join(' : ') + ' &nbsp; α = {?} β = {?} γ = {?}', a: v.map(x => 180 * x / s + '°'), key: 'v' + v.join() }; }
      if (k === 1) { const m = R(rng, 2, 3), x = R(rng, 15, Math.floor(170 / (2 + m))), d = 180 - (2 + m) * x; return { q: 'β ist um ' + d + '° größer als α, γ ist ' + (m === 2 ? 'doppelt' : 'dreimal') + ' so groß wie α. &nbsp; α = {?} β = {?} γ = {?}', a: [x + '°', (x + d) + '°', m * x + '°'], key: 'e' + m + x }; }
      const a = R(rng, 25, 90), b = R(rng, 25, 150 - a); return { q: 'α = ' + a + '°, β = ' + b + '°. Wie groß ist der Außenwinkel bei C? {?}', a: (a + b) + '° (= α + β)', key: 'a' + a + b };
    }
  });
  L4('m-dreiecke', ['Du berechnest Winkel aus Verhältnissen und Bedingungen.', 'Du kennst den Außenwinkelsatz.', 'Du nutzt Winkel an Parallelen.'],
    [dreieck4(5), paraWinkel(2)]);

  const viereck4 = (n) => task({
    title: 'Winkel mit Bedingungen', instr: 'Nutze die Eigenschaften des Vierecks.', n, cols: 1, w: 3,
    gen: (rng) => {
      const k = rng.int(3);
      if (k === 0) { const d = R(rng, 1, 8) * 10; return { q: 'Parallelogramm: α ist um ' + d + '° größer als β. α = {?} β = {?}', a: [(180 + d) / 2 + '°', (180 - d) / 2 + '°'], key: 'p' + d }; }
      if (k === 1) { const m = rng.pick([2, 3, 4, 5]); return { q: 'Gleichschenkeliges Trapez: γ ist ' + m + '-mal so groß wie α. α = {?} γ = {?}', a: [F(180 / (m + 1)) + '°', F(180 * m / (m + 1)) + '°'], key: 't' + m }; }
      const e = R(rng, 4, 14), f = R(rng, 2, 9) * 2; return { q: 'Deltoid: A = ' + F(e * f / 2) + ' cm², e = ' + e + ' cm. f = {?}', a: f + ' cm', key: 'd' + e + f };
    }
  });
  L4('m-viereckarten', ['Du berechnest Winkel in Vierecken mit Bedingungen.', 'Du rechnest von der Fläche auf eine Diagonale zurück.'],
    [viereck4(5), vWinkel(3), eigenschaften(3)]);

  const klammer4 = (n) => task({
    title: 'Klammerrechnungen', instr: 'Klammern zuerst. Kürze das Ergebnis.', n, cols: 2, w: 4,
    gen: (rng) => {
      let a, b, c, d; do { a = rq(rng, 6); b = rq(rng, 6); } while (a[0] * b[1] <= b[0] * a[1]); c = rq(rng, 6); d = rq(rng, 6);
      const x = subQ(a, b), y = addQ(c, d);
      return { q: '(' + frac(a[0], a[1]) + ' − ' + frac(b[0], b[1]) + ') : (' + frac(c[0], c[1]) + ' + ' + frac(d[0], d[1]) + ')', a: ans(divQ(x, y)), key: '' + a + b + c + d };
    }
  });
  const glBr = (n) => task({
    title: 'Gleichungen mit Brüchen', instr: 'Löse mit der Umkehroperation. Gib x gekürzt an.', n, cols: 2, w: 4,
    gen: (rng) => {
      const k = rq(rng, 7), r = rq(rng, 9), t = rng.int(3);
      if (t === 0) return { q: frac(k[0], k[1]) + ' · x = ' + frac(r[0], r[1]) + ' &nbsp;→ {?}', a: 'x = ' + ans(divQ(r, k)), key: 'm' + k + r };
      if (t === 1) return { q: 'x : ' + frac(k[0], k[1]) + ' = ' + frac(r[0], r[1]) + ' &nbsp;→ {?}', a: 'x = ' + ans(mulQ(r, k)), key: 'd' + k + r };
      const s = addQ(k, r); return { q: 'x + ' + frac(k[0], k[1]) + ' = ' + qm(s) + ' &nbsp;→ {?}', a: 'x = ' + ans(r), key: 'a' + k + r };
    }
  });
  L4('m-brueche2', ['Du löst Klammerrechnungen mit Brüchen.', 'Du löst Gleichungen mit Brüchen.', 'Du rechnest mit gemischten Zahlen und allen vier Rechenarten.'],
    [klammer4(4), glBr(6), verbindung(4)]);

  const TX_H4 = [
    (r) => { const N = r.pick([20, 24, 30, 36, 40, 60, 72]), w = r.pick([30, 45, 60, 72, 90, 120, 150].filter(x => (x * N) % 360 === 0)); return { q: 'In einem Kreisdiagramm zu einer Umfrage mit ' + N + ' Kindern hat der Sektor „Rad“ einen Winkel von ' + w + '°. Wie viele Kinder fahren mit dem Rad? Wie viel Prozent sind das?', a: w + ' : 360 · ' + N + ' = ' + w * N / 360 + ' Kinder; ' + F(round(w / 360 * 100, 1)) + ' %' }; },
    (r) => { const p = r.pick([12, 15, 24, 35, 45, 64]), N = r.pick([25, 50, 200, 400].filter(x => (x * p) % 100 === 0)); return { q: 'Bei einer Umfrage gaben ' + p + ' % von ' + N + ' Befragten an, täglich Sport zu machen. Wie viele Personen sind das? Welcher Winkel gehört im Kreisdiagramm dazu?', a: N + ' · ' + F(p / 100) + ' = ' + N * p / 100 + ' Personen; ' + F(round(p / 100 * 360, 1)) + '°' }; },
    (r) => { const k = R(r, 6, 14), N = k + R(r, 4, 16); return { q: 'Lena trifft bei ' + N + ' Freiwürfen ' + k + '-mal, Tom bei ' + (N + 10) + ' Würfen ' + (k + 5) + '-mal. Wer ist relativ gesehen besser?', a: 'Lena: ' + k + ' : ' + N + ' ≈ ' + F(round(k / N * 100, 1)) + ' %, Tom: ' + (k + 5) + ' : ' + (N + 10) + ' ≈ ' + F(round((k + 5) / (N + 10) * 100, 1)) + ' % – ' + (k / N > (k + 5) / (N + 10) ? 'Lena' : k / N < (k + 5) / (N + 10) ? 'Tom' : 'beide gleich') }; }
  ];
  L4('m-haeufigkeiten', ['Du rechnest zwischen Anzahl, Prozent und Winkel im Kreisdiagramm.', 'Du vergleichst relative Häufigkeiten.', 'Du rechnest mit Anteilen von Anteilen.'],
    [text('Sachaufgaben', 'Schreibe die Rechnung und einen Antwortsatz.', TX_H4, 'h4', 3), mehrstufig(2)]);

  const UMF4 = [
    { f: 'v = s : t', g: 't', r: 't = s : v', v: (r) => { const v = R(r, 3, 20) * 5, t = R(r, 2, 6); return ['s = ' + v * t + ' km, v = ' + v + ' km/h', t + ' h']; } },
    { f: 'A = (a + c) · h : 2', g: 'a', r: 'a = 2 · A : h − c', v: (r) => { const a = R(r, 6, 14), c = R(r, 2, 5), h = R(r, 2, 6) * 2; return ['A = ' + (a + c) * h / 2 + ' cm², c = ' + c + ' cm, h = ' + h + ' cm', a + ' cm']; } },
    { f: 'O = 2 · (a · b + a · c + b · c)', g: 'c', r: 'c = (O : 2 − a · b) : (a + b)', v: (r) => { const a = R(r, 2, 8), b = R(r, 2, 6), c = R(r, 2, 9); return ['O = ' + 2 * (a * b + a * c + b * c) + ' cm², a = ' + a + ' cm, b = ' + b + ' cm', c + ' cm']; } },
    { f: 'K = 4 + 2 · x', g: 'x', r: 'x = (K − 4) : 2', v: (r) => { const x = R(r, 3, 25); return ['K = ' + (4 + 2 * x) + ' €', x + ' km']; } },
    { f: 'F = 1,8 · C + 32', g: 'C', r: 'C = (F − 32) : 1,8', v: (r) => { const C = R(r, -2, 8) * 5; return ['F = ' + F(1.8 * C + 32) + ' °F', F(C) + ' °C']; } },
    { f: 'u = 2 · a + 2 · b', g: 'a', r: 'a = u : 2 − b', v: (r) => { const a = R(r, 3, 20), b = R(r, 2, 15); return ['u = ' + 2 * (a + b) + ' m, b = ' + b + ' m', a + ' m']; } }
  ];
  const fU4 = (n) => task({ title: 'Formeln umformen', instr: 'Forme die Formel nach der gesuchten Größe um und berechne sie.', n, cols: 1, w: 9,
    gen: (rng) => { const k = rng.int(UMF4.length), f = UMF4[k], [give, val] = f.v(rng); return { q: '<b>' + f.f + '</b> nach ' + f.g + ' umformen: {?}; ' + give + ' → ' + f.g + ' = {?}', a: [f.r, val], key: 'u' + k }; } });
  L4('m-formeln', ['Du formst auch schwierigere Formeln um (mit Klammern und mehreren Schritten).', 'Du stellst Formeln zu Sachsituationen auf.'],
    [fU4(5), fAufstellen(2)]);

  const P2 = (p) => '(' + fmt(p[0]) + ' | ' + fmt(p[1]) + ')';
  const vec4 = (n) => task({
    title: 'Schiebungsvektor', instr: 'Gib an, um wie viel nach rechts/links (x) und oben/unten (y) verschoben wurde: v = (Δx | Δy).', n, cols: 1, w: 4,
    gen: (rng) => { const A = [R(rng, -6, 6), R(rng, -6, 6)], d = [R(rng, -7, 7) || 3, R(rng, -7, 7) || -2]; return { q: 'A' + P2(A) + ' → A′' + P2([A[0] + d[0], A[1] + d[1]]) + ': v = {?}', a: P2(d), key: A + '|' + d }; }
  });
  const dSchieben = (n) => task({
    title: 'Dreieck verschieben', instr: 'Verschiebe alle Eckpunkte um den Vektor v. Zeichne Original und Bild in dein Heft.', n, cols: 1, w: 8,
    gen: (rng) => { const pts = [0, 1, 2].map(() => [R(rng, -5, 5), R(rng, -5, 5)]), d = [R(rng, -6, 6) || 4, R(rng, -6, 6) || -3]; const im = pts.map(p => [p[0] + d[0], p[1] + d[1]]);
      return { q: 'A' + P2(pts[0]) + ', B' + P2(pts[1]) + ', C' + P2(pts[2]) + ', v = ' + P2(d) + ': {?}', a: 'A′' + P2(im[0]) + ', B′' + P2(im[1]) + ', C′' + P2(im[2]), key: JSON.stringify(pts) + d }; }
  });
  L4('m-schiebung', ['Du bestimmst Schiebungsvektoren.', 'Du verschiebst Figuren rechnerisch.', 'Du erkennst kongruente Figuren.'],
    [vec4(4), dSchieben(3), kongruent(2)]);


  // ================================================================ Mehr Sachaufgaben (Pool-Erweiterung)
  TX_BR.push(
    (r) => { const p = r.pick([[3, 4], [1, 2], [2, 3]]), m = R(r, 3, 9); return { q: 'Für ein Kissen braucht man ' + qs(p) + ' m Stoff. Wie viele Kissen kann man aus ' + m + ' m nähen?', a: m + ' : ' + qs(p) + ' = ' + ans(divQ([m, 1], p)) + ' → ' + Math.floor(m * p[1] / p[0]) + ' Kissen' }; },
    (r) => { const p = r.pick([[2, 5], [3, 4], [1, 3], [5, 6]]), t = r.pick([6, 10, 12, 15, 20]); return { q: 'Eine Schnecke kriecht in einer Minute ' + qs(p) + ' m. Wie weit kommt sie in ' + t + ' Minuten?', a: t + ' · ' + qs(p) + ' = ' + ans(mulQ([t, 1], p)) + ' m' }; },
    (r) => { const p = r.pick([[3, 4], [2, 3], [5, 8], [1, 2]]); return { q: 'Für einen Teig braucht man ' + qs(p) + ' l Milch. Wie viel braucht man für die halbe Menge?', a: qs(p) + ' : 2 = ' + ans(divQ(p, [2, 1])) + ' l' }; }
  );
  TX_H4.push(
    (r) => { const c = [R(r, 2, 6), R(r, 4, 8), R(r, 4, 9), R(r, 1, 5), R(r, 0, 3)]; const n = c.reduce((a, b) => a + b, 0); return { q: 'Notenverteilung bei einer Schularbeit: Sehr gut ' + c[0] + ', Gut ' + c[1] + ', Befriedigend ' + c[2] + ', Genügend ' + c[3] + ', Nicht genügend ' + c[4] + '. Wie groß ist die relative Häufigkeit von „Sehr gut“ und „Gut“ zusammen?', a: '(' + c[0] + ' + ' + c[1] + ') : ' + n + ' ≈ ' + F(round((c[0] + c[1]) / n * 100, 1)) + ' %' }; },
    (r) => { const N = r.pick([50, 60, 80, 100]), k = R(r, Math.floor(N / 8), Math.floor(N / 4)); return { q: 'Ein Würfel wurde ' + N + '-mal geworfen, dabei fiel ' + k + '-mal eine Sechs. Wie groß ist die relative Häufigkeit? Vergleiche mit ' + frac(1, 6) + ' ≈ 16,7 %.', a: k + ' : ' + N + ' = ' + F(round(k / N * 100, 1)) + ' % – ' + (k / N > 1 / 6 ? 'öfter' : 'seltener') + ' als zu erwarten' }; },
    (r) => { const N = r.pick([20, 40, 60, 80]), p1 = r.pick([25, 35, 45]), p2 = r.pick([20, 30]); const p3 = 100 - p1 - p2; return { q: 'Bei einer Umfrage unter ' + N + ' Kindern nennen ' + p1 + ' % Fußball, ' + p2 + ' % Schwimmen und der Rest Tanzen als Lieblingssport. Wie viele Kinder sind es jeweils?', a: 'Fußball ' + F(N * p1 / 100) + ', Schwimmen ' + F(N * p2 / 100) + ', Tanzen (' + p3 + ' %) ' + F(N * p3 / 100) }; }
  );
})();
