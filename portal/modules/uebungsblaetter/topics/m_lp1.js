/* Mathematik – Lehrplan-Ergänzungen (v. a. 1./2. Klasse):
   Geometrische Grundbegriffe, Maßstab, Zahlensysteme, Würfelnetze & Ansichten, Abzählen mit Baumdiagrammen. */
(function () {
  const M = UB.M, G = UB.G, { R, fmt, round, task } = M;
  const { add, sub, mul, unit, dist, dot, n2, svgMM, T, L, C, ARC, rightMark, sdir, spt, DEG, F1 } = G;
  const F = (x) => fmt(round(x, 6));
  const W0 = 180;
  const field = (h, inner, solution) => '<div class="kfeld' + (solution ? ' sol-box' : ' pre') + '" style="height:' + h + 'mm">' + svgMM(W0, h, inner) + '</div>';
  // Gerade durch P mit Richtung d auf das Rechteck [m, W-m]×[m, H-m] zuschneiden
  function clip(P, d, W, H, m) {
    let t0 = -1e9, t1 = 1e9;
    [[0, m, W - m], [1, m, H - m]].forEach(([k, lo, hi]) => {
      if (Math.abs(d[k]) < 1e-9) { if (P[k] < lo || P[k] > hi) { t0 = 1; t1 = 0; } return; }
      let a = (lo - P[k]) / d[k], b = (hi - P[k]) / d[k]; if (a > b) [a, b] = [b, a]; t0 = Math.max(t0, a); t1 = Math.min(t1, b);
    });
    return [add(P, mul(d, t0)), add(P, mul(d, t1))];
  }
  const lab = (e, inner, side, W, H) => { const d = unit(sub(inner, e)), p = add(add(e, mul(d, 7)), mul([-d[1], d[0]], side * 3)); return [Math.max(3, Math.min(W - 3, p[0])), Math.max(4.5, Math.min(H - 2, p[1] + 1))]; };
  const inBox = (p, W, H, m) => p[0] >= m && p[0] <= W - m && p[1] >= m && p[1] <= H - m;
  const dot0 = (p, cls, col) => C(p, 0.9, { f: col || '#111', c: col || '#111', cls: cls || '' });

  // ================================================================ Geometrische Grundbegriffe
  // Strecke, Strahl, Gerade erkennen
  const SSG = ['Strecke', 'Strahl', 'Gerade'];
  function ssgSvg(kind, rng) {
    const W = 52, H = 16, a = (R(rng, -15, 15)) * DEG, d = [Math.cos(a), -Math.sin(a)], Mi = [W / 2, H / 2];
    const p1 = add(Mi, mul(d, -16)), p2 = add(Mi, mul(d, 16));
    let s = L(p1, p2, { w: 0.5 });
    const open = (p, dir) => L(p, add(p, mul(dir, 6)), { w: 0.5, d: '1 1.2' });
    const names = rng.pick([['A', 'B'], ['P', 'Q'], ['C', 'D'], ['E', 'F']]);
    if (kind === 'Strecke') s += dot0(p1) + dot0(p2) + T(add(p1, [0, -2.2]), names[0], { fs: 3 }) + T(add(p2, [0, -2.2]), names[1], { fs: 3 });
    if (kind === 'Strahl') s += dot0(p1) + T(add(p1, [0, -2.2]), names[0], { fs: 3 }) + open(p2, d);
    if (kind === 'Gerade') s += open(p1, mul(d, -1)) + open(p2, d) + T(add(p2, [0, -2.4]), 'g', { fs: 3, fill: '#1d4ed8' });
    return svgMM(W, H, s);
  }
  let plan = [];
  const ssg = (n) => task({
    title: 'Strecke, Strahl oder Gerade?', instr: 'Ein Punkt bedeutet: Hier ist ein Ende. Strichliert bedeutet: Es geht unendlich weiter.', n, cols: 3, w: 6,
    gen: (rng, lv, i) => { if (i === 0) plan = rng.shuffle([0, 1, 2, 0, 1, 2, 0, 1, 2]); const k = SSG[plan[i % 9]]; return { q: ssgSvg(k, rng) + '{?}', a: k, key: k + i + rng.int(1000) }; }
  });
  // Kreisteile benennen
  const KT = ['Radius', 'Durchmesser', 'Sehne', 'Kreisbogen', 'Kreissektor', 'Kreissegment', 'Tangente', 'Sekante'];
  function ktSvg(kind, rng) {
    const W = 40, H = 34, Mi = [20, 17], r = 12, red = '#c62828';
    const a1 = R(rng, 0, 359), a2 = a1 + R(rng, 70, 130), P1 = spt(Mi, r, a1), P2 = spt(Mi, r, a2);
    let s = C(Mi, r, { w: 0.4 }) + C(Mi, 0.6, { f: '#111' }) + T([Mi[0] - 2, Mi[1] - 1.2], 'M', { fs: 2.6 });
    if (kind === 'Radius') s += L(Mi, P1, { c: red, w: 0.7 });
    if (kind === 'Durchmesser') s += L(spt(Mi, r, a1), spt(Mi, r, a1 + 180), { c: red, w: 0.7 });
    if (kind === 'Sehne') s += L(P1, P2, { c: red, w: 0.7 });
    if (kind === 'Kreisbogen') s += ARC(Mi, r, a1, a2, { c: red, w: 1.1 });
    if (kind === 'Kreissektor') s += '<path d="M' + n2(Mi[0]) + ' ' + n2(Mi[1]) + ' L' + n2(P1[0]) + ' ' + n2(P1[1]) + ' A' + r + ' ' + r + ' 0 0 0 ' + n2(P2[0]) + ' ' + n2(P2[1]) + ' Z" fill="rgba(198,40,40,0.3)" stroke="' + red + '" stroke-width="0.5"/>';
    if (kind === 'Kreissegment') s += '<path d="M' + n2(P1[0]) + ' ' + n2(P1[1]) + ' A' + r + ' ' + r + ' 0 0 0 ' + n2(P2[0]) + ' ' + n2(P2[1]) + ' Z" fill="rgba(198,40,40,0.3)" stroke="' + red + '" stroke-width="0.5"/>';
    if (kind === 'Tangente') { const T0 = spt(Mi, r, a1), t = [Math.sin(a1 * DEG), Math.cos(a1 * DEG)]; s += L(add(T0, mul(t, -11)), add(T0, mul(t, 11)), { c: red, w: 0.7 }); }
    if (kind === 'Sekante') { const d = unit(sub(P2, P1)); s += L(add(P1, mul(d, -6)), add(P2, mul(d, 6)), { c: red, w: 0.7 }); }
    return svgMM(W, H, s);
  }
  const kreisteile = (n) => task({
    title: 'Teile des Kreises', instr: 'Wie heißt der rote Teil? Radius, Durchmesser, Sehne, Kreisbogen, Kreissektor, Kreissegment, Tangente oder Sekante?', n, cols: 4, w: 6,
    gen: (rng, lv, i) => { const k = KT[(i * 3 + R(rng, 0, 7)) % 8]; return { q: ktSvg(k, rng) + '{?}', a: k, key: k }; }
  });
  // Normale und Parallele durch einen Punkt
  const normPar = (H) => ({ type: 'fn', fn: (rng) => {
    let g0, dg, F0, P, d, nrm;
    for (let t = 0; t < 200; t++) {
      const a = R(rng, -30, 30) * DEG; dg = [Math.cos(a), -Math.sin(a)]; nrm = [-dg[1], dg[0]];
      g0 = [W0 / 2 + R(rng, -20, 20), H / 2 + R(rng, -4, 4)];
      F0 = add(g0, mul(dg, R(rng, -45, 45))); d = R(rng, 18, 32);
      P = add(F0, mul(nrm, rng.int(2) ? d : -d));
      if (inBox(P, W0, H, 9) && inBox(F0, W0, H, 9)) break;
    }
    const [g1, g2] = clip(g0, dg, W0, H, 3);
    const base = L(g1, g2, { w: 0.5, cls: 'g' }) + T(lab(g2, g1, 1, W0, H), 'g', { b: true }) + dot0(P, 'P') + T(add(P, [2.5, -1.8]), 'P', { b: true });
    const [n1, n2b] = clip(P, nrm, W0, H, 3), [p1, p2] = clip(P, dg, W0, H, 3);
    const solS = L(n1, n2b, { c: '#1d4ed8', w: 0.4, cls: 'n' }) + L(p1, p2, { c: '#c62828', w: 0.4, cls: 'p' }) + rightMark(F0, add(F0, dg), P, '#1d4ed8') +
      T(lab(n1, n2b, 1, W0, H), 'n', { fill: '#1d4ed8', b: true }) + T(lab(p1, p2, -1, W0, H), 'p', { fill: '#c62828', b: true }) + base;
    return { title: 'Normale und Parallele', instr: 'Zeichne durch P die Normale n und die Parallele p zur Geraden g. Miss den Abstand des Punktes P von g.', body: field(H, base) + '<div class="mi">Abstand: ' + UB.blank(5) + '</div>', sol: field(H, solS, true) + '<div class="mi">' + UB.sol('Abstand von P zu g: ' + F1(d / 10) + ' cm') + '</div>' };
  } });
  const abstandPar = (H) => ({ type: 'fn', fn: (rng) => {
    const a = R(rng, -20, 20) * DEG, dg = [Math.cos(a), -Math.sin(a)], nrm = [-dg[1], dg[0]], D = R(rng, 14, 26);
    const c = [W0 / 2, H / 2], g0 = add(c, mul(nrm, -D / 2)), h0 = add(c, mul(nrm, D / 2));
    const [g1, g2] = clip(g0, dg, W0, H, 3), [h1, h2] = clip(h0, dg, W0, H, 3);
    const base = L(g1, g2, { w: 0.5, cls: 'g' }) + L(h1, h2, { w: 0.5, cls: 'h' }) + T(lab(g2, g1, -1, W0, H), 'g', { b: true }) + T(lab(h2, h1, 1, W0, H), 'h', { b: true });
    const F0 = add(c, mul(dg, -12)), A0 = add(F0, mul(nrm, -D / 2)), B0 = add(F0, mul(nrm, D / 2));
    const solS = base + L(A0, B0, { c: '#c62828', w: 0.5, cls: 'dist' }) + rightMark(A0, add(A0, dg), B0) + T(add(mul(add(A0, B0), 0.5), [2, 1]), F1(D / 10) + ' cm', { fs: 3, fill: '#c62828', a: 'start' });
    return { title: 'Abstand paralleler Geraden', instr: 'Die Geraden g und h sind parallel. Miss ihren Abstand (normal zu den Geraden!).', body: field(H, base) + '<div class="mi">Abstand: ' + UB.blank(5) + '</div>', sol: field(H, solS, true) + '<div class="mi">' + UB.sol('Abstand: ' + F1(D / 10) + ' cm') + '</div>' };
  } });
  // Streckensymmetrale
  const streckenSym = (H) => ({ type: 'fn', fn: (rng) => {
    let A, B, Mi, Lh, dg, nrm, rr, S1, S2;
    for (let t = 0; t < 200; t++) {
      const a = R(rng, -25, 25) * DEG; dg = [Math.cos(a), -Math.sin(a)]; nrm = [-dg[1], dg[0]];
      Lh = R(rng, 24, 40); Mi = [W0 / 2 + R(rng, -30, 30), H / 2 + R(rng, -3, 3)];
      A = add(Mi, mul(dg, -Lh)); B = add(Mi, mul(dg, Lh)); rr = Lh * 1.25;
      const k = Math.sqrt(rr * rr - Lh * Lh); S1 = add(Mi, mul(nrm, k)); S2 = add(Mi, mul(nrm, -k));
      if (inBox(S1, W0, H, 3) && inBox(S2, W0, H, 3) && inBox(A, W0, H, 8) && inBox(B, W0, H, 8)) break;
    }
    const base = L(A, B, { w: 0.5, cls: 'seg' }) + dot0(A, 'A') + dot0(B, 'B') + T(add(A, [-2.5, -2]), 'A', { b: true }) + T(add(B, [2.5, -2]), 'B', { b: true });
    const arcs = [S1, S2].map(S => ARC(A, rr, sdir(A, S) - 9, sdir(A, S) + 9) + ARC(B, rr, sdir(B, S) - 9, sdir(B, S) + 9)).join('');
    const [s1, s2] = clip(Mi, nrm, W0, H, 3);
    const solS = arcs + base + L(s1, s2, { c: '#c62828', w: 0.45, cls: 'sym' }) + rightMark(Mi, B, S1) + C(Mi, 0.9, { f: '#c62828', c: '#c62828', cls: 'M' }) + T(add(Mi, [2.5, 4]), 'M', { b: true, fill: '#c62828', a: 'start' });
    return { title: 'Streckensymmetrale', instr: 'Konstruiere mit dem Zirkel die Streckensymmetrale von AB und markiere den Mittelpunkt M. Wie lang ist AM?', body: field(H, base) + '<div class="mi">AM = ' + UB.blank(4) + '</div>', sol: field(H, solS, true) + '<div class="mi">' + UB.sol('AM = MB = ' + F1(Lh / 10) + ' cm (halb so lang wie AB = ' + F1(2 * Lh / 10) + ' cm)') + '</div>' };
  } });
  // Winkelsymmetrale
  const winkelSym = (H) => ({ type: 'fn', fn: (rng) => {
    let S, phi, a0, E1, E2, len;
    for (let t = 0; t < 300; t++) {
      phi = R(rng, 4, 15) * 10; a0 = R(rng, 0, 25); len = 46;
      S = [R(rng, 30, 150), H - R(rng, 8, 14)];
      E1 = spt(S, len, a0); E2 = spt(S, len, a0 + phi);
      if (inBox(E1, W0, H, 4) && inBox(E2, W0, H, 4)) break;
    }
    const base = L(S, E1, { w: 0.5, cls: 'ray' }) + L(S, E2, { w: 0.5, cls: 'ray' }) + dot0(S, 'S') + T(add(S, [-3, 3]), 'S', { b: true });
    const r1 = 14, Q1 = spt(S, r1, a0), Q2 = spt(S, r1, a0 + phi), mid = a0 + phi / 2, Z = spt(S, 2 * r1 * Math.cos(phi / 2 * DEG), mid);
    const B = spt(S, len + 4, mid);
    const solS = ARC(S, r1, a0 - 4, a0 + phi + 4) + ARC(Q1, r1, sdir(Q1, Z) - 10, sdir(Q1, Z) + 10) + ARC(Q2, r1, sdir(Q2, Z) - 10, sdir(Q2, Z) + 10) + base +
      L(S, B, { c: '#c62828', w: 0.45, cls: 'bis' }) + ARC(S, 7, a0, mid, { c: '#c62828', w: 0.35 }) + ARC(S, 8, mid, a0 + phi, { c: '#c62828', w: 0.35 }) +
      T(spt(S, 21, a0 + phi / 4), (phi / 2) + '°', { fs: 2.8, fill: '#c62828' }) + T(spt(S, 21, a0 + 3 * phi / 4), (phi / 2) + '°', { fs: 2.8, fill: '#c62828' });
    return { title: 'Winkelsymmetrale', instr: 'Miss den Winkel bei S. Konstruiere mit dem Zirkel die Winkelsymmetrale. Wie groß sind die beiden Teilwinkel?', body: field(H, base) + '<div class="mi">Winkel: ' + UB.blank(4) + ' Teilwinkel: ' + UB.blank(4) + '</div>', sol: field(H, solS, true) + '<div class="mi">' + UB.sol('Winkel: ' + phi + '° · Teilwinkel: je ' + (phi / 2) + '°') + '</div>' };
  } });
  UB.simple({
    id: 'm-grundbegriffe', fach: 'mathe', title: 'Geometrische Grundbegriffe', area: 'geometrie', klassen: [1, 2], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: '<b>Strecke</b> AB: hat zwei Endpunkte, ist messbar. <b>Strahl</b>: hat einen Anfangspunkt, geht in eine Richtung unendlich weiter. <b>Gerade</b> g: hat keinen Endpunkt. <b>Normal</b> (⊥): Zwei Geraden schneiden einander im rechten Winkel. <b>Parallel</b> (∥): Zwei Geraden haben überall denselben Abstand. Der <b>Abstand</b> eines Punktes von einer Geraden wird immer normal zur Geraden gemessen. <b>Kreis</b>: Mittelpunkt M, Radius r, Durchmesser d = 2 · r; Sehne (verbindet zwei Kreispunkte), Sekante (schneidet den Kreis), Tangente (berührt den Kreis in einem Punkt, normal zum Radius), Kreisbogen, Kreissektor („Tortenstück“), Kreissegment. <b>Streckensymmetrale</b>: halbiert eine Strecke normal. <b>Winkelsymmetrale</b>: halbiert einen Winkel.',
    pools: {},
    levels: {
      1: { ichkann: ['Du unterscheidest Strecke, Strahl und Gerade.', 'Du kennst die Teile des Kreises.'], tasks: [ssg(6), kreisteile(8)] },
      2: { ichkann: ['Du kannst Normale und Parallele zeichnen.', 'Du kannst Abstände richtig messen.'], tasks: [normPar(44), normPar(44), abstandPar(34)] },
      3: { ichkann: ['Du kannst Strecken- und Winkelsymmetrale konstruieren.'], tasks: [streckenSym(64), winkelSym(64)] }
    }
  });

  // ================================================================ Maßstab
  const SC = [50, 100, 200, 250, 500, 1000, 2000, 5000, 10000, 25000, 50000, 100000];
  const real = (cm) => cm >= 100000 ? F(cm / 100000) + ' km' : cm >= 100 ? F(cm / 100) + ' m' : F(cm) + ' cm';
  const ms1 = (n) => task({
    title: 'Vom Plan zur Wirklichkeit', instr: 'Wie lang ist die Strecke in Wirklichkeit? Gib das Ergebnis in m oder km an.', n, cols: 2, w: 5,
    gen: (rng) => { const s = rng.pick(SC.slice(1)), c = R(rng, 2, 18) / (rng.int(3) ? 1 : 2); return { q: 'Maßstab 1 : ' + F(s) + ', im Plan ' + F(c) + ' cm', a: real(c * s), key: s + '|' + c }; }
  });
  const ms2 = (n) => task({
    title: 'Von der Wirklichkeit zum Plan', instr: 'Wie lang wird die Strecke im Plan (in cm)?', n, cols: 2, w: 4,
    gen: (rng) => { const s = rng.pick(SC.slice(1)), c = R(rng, 2, 16); return { q: 'Maßstab 1 : ' + F(s) + ', in Wirklichkeit ' + real(c * s), a: F(c) + ' cm', key: s + '|' + c }; }
  });
  const ms3 = (n) => task({
    title: 'Maßstab bestimmen', instr: 'Bestimme den Maßstab.', n, cols: 2, w: 5,
    gen: (rng) => { const s = rng.pick(SC), c = R(rng, 2, 12); return { q: F(c) + ' cm im Plan sind ' + real(c * s) + ' in Wirklichkeit. Maßstab', a: '1 : ' + F(s), key: s + '|' + c }; }
  });
  const ms4 = (n) => task({
    title: 'Vergrößerungen', instr: 'Bei Vergrößerungen steht die größere Zahl vorne, z. B. 10 : 1.', n, cols: 2, w: 4,
    gen: (rng) => { const k = rng.pick([2, 5, 10, 20, 50]), mm = R(rng, 2, 9) / (rng.int(2) ? 1 : 2); return { q: 'Maßstab ' + k + ' : 1, ein ' + F(mm) + ' mm langes Teil ist in der Zeichnung', a: F(mm * k / 10) + ' cm', key: k + '|' + mm }; }
  });
  const TX_MS = [
    (r) => { const s = r.pick([25000, 50000]), c = R(r, 3, 14); return { q: 'Auf einer Wanderkarte (1 : ' + F(s) + ') ist der Weg zur Hütte ' + c + ' cm lang. Wie weit ist das in Wirklichkeit?', a: c + ' cm · ' + F(s) + ' = ' + F(c * s) + ' cm = ' + real(c * s) }; },
    (r) => { const l = R(r, 8, 14), b = R(r, 6, 10); return { q: 'Ein Zimmer ist ' + F(l / 2) + ' m lang und ' + F(b / 2) + ' m breit. Wie groß wird es im Plan mit dem Maßstab 1 : 50?', a: F(l * 50 / 50) + ' cm lang und ' + F(b * 50 / 50) + ' cm breit' }; },
    (r) => { const k = r.pick([5, 10]), mm = R(r, 3, 8); return { q: 'Eine Ameise ist ' + mm + ' mm lang. In einem Buch ist sie im Maßstab ' + k + ' : 1 abgebildet. Wie lang ist sie im Bild?', a: mm + ' mm · ' + k + ' = ' + (mm * k) + ' mm = ' + F(mm * k / 10) + ' cm' }; }
  ];
  const msText = (n) => task({ title: 'Sachaufgaben', instr: 'Schreibe die Rechnung und das Ergebnis.', n, mode: 'lines', lines: 2, gen: (rng, lv, i) => { const x = TX_MS[i % TX_MS.length](rng); x.key = x.q; return x; } });
  UB.simple({
    id: 'm-massstab', fach: 'mathe', title: 'Maßstab', area: 'zahlen', klassen: [1, 2], img: 'MiniHoS_Unterwegs_Rucksack',
    merk: 'Der <b>Maßstab</b> gibt an, wie stark verkleinert oder vergrößert wurde. <b>1 : 100</b> heißt: 1 cm im Plan sind 100 cm = 1 m in Wirklichkeit. Plan → Wirklichkeit: <b>mal</b> der Maßstabszahl. Wirklichkeit → Plan: <b>durch</b> die Maßstabszahl (vorher in cm umwandeln!). Maßstab bestimmen: Wirklichkeit (in cm) : Plan (in cm). Bei Vergrößerungen steht die größere Zahl vorne: <b>10 : 1</b>.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Längen vom Plan in die Wirklichkeit umrechnen.'], tasks: [ms1(10), msText(2)] },
      2: { ichkann: ['Du kannst Längen für einen Plan berechnen.', 'Du kannst den Maßstab bestimmen.'], tasks: [ms2(8), ms3(6), msText(2)] },
      3: { ichkann: ['Du kannst mit Vergrößerungen rechnen.', 'Du löst Sachaufgaben zum Maßstab.'], tasks: [ms1(4), ms3(4), ms4(4), msText(1)] }
    }
  });

  // ================================================================ Zahlensysteme
  const ROM = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  const toRom = (n) => { let s = ''; ROM.forEach(([v, r]) => { while (n >= v) { s += r; n -= v; } }); return s; };
  const rom1 = (n, max) => task({ title: 'Römische Zahlen lesen', instr: 'Schreibe mit unseren Ziffern.', n, cols: 4, w: 3, gen: (rng) => { const x = R(rng, 1, max); return { q: toRom(x), a: F(x), key: x }; } });
  const rom2 = (n, max) => task({ title: 'Römisch schreiben', instr: 'Schreibe als römische Zahl.', n, cols: 4, w: 5, gen: (rng) => { const x = R(rng, 4, max); return { q: F(x), a: toRom(x), key: x }; } });
  const jahre = (n) => task({ title: 'Jahreszahlen', instr: 'Auf alten Gebäuden stehen Jahreszahlen oft römisch. Übersetze.', n, cols: 2, w: 4, gen: (rng) => { const x = R(rng, 1100, 2030); return rng.int(2) ? { q: toRom(x), a: String(x), key: x } : { q: String(x), a: toRom(x), key: x }; } });
  const bin = (n) => task({ title: 'Zweiersystem', instr: 'Im Zweiersystem gibt es nur 0 und 1. Die Stellenwerte sind 1, 2, 4, 8, 16, 32, 64 …', n, cols: 3, w: 4,
    gen: (rng) => { const x = R(rng, 3, 63); return rng.int(2) ? { q: x.toString(2) + '<sub>2</sub>', a: F(x), key: x } : { q: F(x) + ' = {?}<sub>2</sub>', a: x.toString(2), key: x }; } });
  UB.simple({
    id: 'm-zahlensysteme', fach: 'mathe', title: 'Römische Zahlen und Zweiersystem', area: 'zahlen', klassen: [1], img: 'MiniHoS_Digital_Programmieren',
    merk: '<b>Römische Zahlzeichen</b>: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. Gleiche Zeichen werden addiert (III = 3), höchstens dreimal hintereinander. Steht ein kleineres Zeichen <b>vor</b> einem größeren, wird es abgezogen: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900. Unser <b>Zehnersystem</b> ist ein Stellenwertsystem mit den Ziffern 0–9 (E, Z, H, T …). Das <b>Zweiersystem</b> verwendet nur 0 und 1, die Stellenwerte sind 1, 2, 4, 8, 16, 32 … Beispiel: 1011<sub>2</sub> = 8 + 2 + 1 = 11.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst römische Zahlen bis 100 lesen und schreiben.'], tasks: [rom1(12, 100), rom2(8, 100)] },
      2: { ichkann: ['Du kannst große römische Zahlen und Jahreszahlen übersetzen.'], tasks: [rom1(8, 3000), rom2(8, 3000), jahre(4)] },
      3: { ichkann: ['Du kannst zwischen Zweiersystem und Zehnersystem umrechnen.'], tasks: [jahre(4), bin(12)] }
    }
  });

  // ================================================================ Würfelnetze und Ansichten
  // Faltsimulation: Quadrate eines Netzes werden auf einen Würfel „abgerollt“
  function fold(cells) {
    const key = (c) => c[0] + ',' + c[1], set = new Map(cells.map((c, i) => [key(c), i]));
    const face = new Array(cells.length).fill(-1);
    const st = { 0: { d: 0, u: 1, n: 2, s: 3, e: 4, w: 5 } };
    face[0] = 0; const q = [0];
    while (q.length) {
      const i = q.shift(), o = st[i], [x, y] = cells[i];
      const moves = [[1, 0, { d: o.e, e: o.u, u: o.w, w: o.d, n: o.n, s: o.s }], [-1, 0, { d: o.w, w: o.u, u: o.e, e: o.d, n: o.n, s: o.s }],
        [0, -1, { d: o.n, n: o.u, u: o.s, s: o.d, e: o.e, w: o.w }], [0, 1, { d: o.s, s: o.u, u: o.n, n: o.d, e: o.e, w: o.w }]];
      moves.forEach(([dx, dy, no]) => { const j = set.get(key([x + dx, y + dy])); if (j !== undefined && face[j] < 0) { face[j] = no.d; st[j] = no; q.push(j); } });
    }
    return face;
  }
  const isNet = (cells) => { const f = fold(cells); return new Set(f).size === 6 && !f.includes(-1); };
  const OPP = { 0: 1, 1: 0, 2: 3, 3: 2, 4: 5, 5: 4 };
  function randHexo(rng) {
    const cells = [[0, 0]];
    while (cells.length < 6) {
      const c = rng.pick(cells), d = rng.pick([[1, 0], [-1, 0], [0, 1], [0, -1]]), nc = [c[0] + d[0], c[1] + d[1]];
      if (!cells.some(x => x[0] === nc[0] && x[1] === nc[1])) cells.push(nc);
    }
    const mx = Math.min(...cells.map(c => c[0])), my = Math.min(...cells.map(c => c[1]));
    return cells.map(c => [c[0] - mx, c[1] - my]);
  }
  function netSvg(cells, labels, hl) {
    const u = 7, w = Math.max(...cells.map(c => c[0])) + 1, h = Math.max(...cells.map(c => c[1])) + 1;
    let s = '';
    cells.forEach((c, i) => { s += '<rect x="' + (2 + c[0] * u) + '" y="' + (2 + c[1] * u) + '" width="' + u + '" height="' + u + '" fill="' + (hl && hl.includes(i) ? 'rgba(198,40,40,0.25)' : '#eef3ff') + '" stroke="#111" stroke-width="0.4"/>'; if (labels) s += T([2 + c[0] * u + u / 2, 2 + c[1] * u + u / 2 + 1.3], labels[i], { fs: 3.6, b: true }); });
    return svgMM(w * u + 4, h * u + 4, s);
  }
  const netzJaNein = (n) => task({
    title: 'Ist das ein Würfelnetz?', instr: 'Stell dir vor, du faltest die Figur. Entsteht ein Würfel? Schreibe ja oder nein.', n, cols: 4, w: 3,
    gen: (rng, lv, i) => { if (i === 0) plan = rng.shuffle(Array.from({ length: 12 }, (_, k) => k % 2 === 0)); const want = plan[i % 12]; let c; for (let t = 0; t < 400; t++) { c = randHexo(rng); if (isNet(c) === want && Math.max(...c.map(x => x[0])) < 5 && Math.max(...c.map(x => x[1])) < 5) break; }
      return { q: netSvg(c) + '<br>{?}', a: isNet(c) ? 'ja' : 'nein', key: JSON.stringify(c) }; }
  });
  const netzGegen = (n) => task({
    title: 'Gegenüberliegende Flächen', instr: 'Das Netz wird zu einem Würfel gefaltet. Welche Zahl liegt gegenüber der roten Fläche?', n, cols: 4, w: 3,
    gen: (rng) => { let c; do { c = randHexo(rng); } while (!isNet(c) || Math.max(...c.map(x => x[0])) > 4 || Math.max(...c.map(x => x[1])) > 4);
      const f = fold(c), labels = rng.shuffle([1, 2, 3, 4, 5, 6]), i = rng.int(6), j = f.indexOf(OPP[f[i]]);
      return { q: netSvg(c, labels.map(String), [i]) + '<br>{?}', a: String(labels[j]), key: JSON.stringify(c) + i }; }
  });
  // Würfelgebäude: Bauplan (Höhen) → Ansichten
  function bauSvg(h) {
    const u = 7, n = h.length; let s = '';
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { s += '<rect x="' + (6 + x * u) + '" y="' + (3 + y * u) + '" width="' + u + '" height="' + u + '" fill="' + (h[y][x] ? '#eef3ff' : '#fff') + '" stroke="#111" stroke-width="0.35"/>'; if (h[y][x]) s += T([6 + x * u + u / 2, 3 + y * u + u / 2 + 1.3], h[y][x], { fs: 3.6, b: true }); }
    s += T([6 + n * u / 2, 3 + n * u + 4.2], 'vorne', { fs: 2.8 }) + T([8 + n * u + 3, 3 + n * u / 2 + 1], 'rechts', { fs: 2.8, a: 'start' });
    return svgMM(n * u + 20, n * u + 8, s);
  }
  function viewSvg(cols, label) {
    const u = 5, n = cols.length, H = 4; let s = '';
    for (let x = 0; x < n; x++) for (let y = 0; y < H; y++) s += '<rect x="' + (2 + x * u) + '" y="' + (2 + y * u) + '" width="' + u + '" height="' + u + '" fill="' + (cols && H - y <= cols[x] ? 'rgba(198,40,40,0.35)' : '#fff') + '" stroke="#bbb" stroke-width="0.25"' + (cols && H - y <= cols[x] ? ' class="vc"' : '') + '/>';
    return '<div class="mview">' + svgMM(n * u + 4, H * u + 4, s) + '<small>' + label + '</small></div>';
  }
  const ansichten = (n, withCount) => task({
    title: 'Ansichten von Würfelgebäuden', instr: 'Der Bauplan zeigt, wie viele Würfel übereinander stehen. Male die Vorderansicht (von vorne) und die Seitenansicht (von rechts) in die Raster. Bei der Ansicht von rechts ist links in deiner Zeichnung vorne.' + (withCount ? ' Wie viele Würfel sind es?' : ''), n, cols: 2, w: 3,
    gen: (rng) => {
      const h = [0, 1, 2].map(() => [0, 1, 2].map(() => rng.int(10) < 3 ? 0 : R(rng, 1, 3))); if (h.flat().every(v => !v)) h[2][0] = 2;
      const front = [0, 1, 2].map(x => Math.max(h[0][x], h[1][x], h[2][x]));
      const right = [2, 1, 0].map(y => Math.max(...h[y]));           // links in der Zeichnung = vorne (unterste Zeile)
      const total = h.flat().reduce((a, b) => a + b, 0);
      const empty = (lbl) => viewSvg([0, 0, 0], lbl);
      return { q: bauSvg(h) + '<div class="mviews">{?}</div>' + (withCount ? 'Würfel: {?}' : ''), a: withCount ? [viewSvg(front, 'von vorne') + viewSvg(right, 'von rechts'), String(total)] : viewSvg(front, 'von vorne') + viewSvg(right, 'von rechts'), w: 1,
        key: JSON.stringify(h), blankHtml: empty('von vorne') + empty('von rechts') };
    }
  });
  // Ansichten: die leeren Raster stehen auf dem Blatt statt Unterstrichen
  const ansichtenTask = (n, withCount) => { const t = ansichten(n, withCount); const orig = t.fn; t.fn = (rng, lv) => { const r = orig(rng, lv);
    r.body = r.body.replace(/<div class="mviews"><span class="blank"[^>]*><\/span><\/div>/g, '<div class="mviews">' + viewSvg([0, 0, 0], 'von vorne') + viewSvg([0, 0, 0], 'von rechts') + '</div>');
    r.sol = r.sol.replace(/<div class="mviews"><span class="sol">([\s\S]*?)<\/span><\/div>/g, '<div class="mviews">$1</div>'); return r; }; return t; };
  UB.simple({
    id: 'm-netze', fach: 'mathe', title: 'Würfelnetze und Ansichten', area: 'geometrie', klassen: [1, 2], img: 'MiniHoS_Basteln_Schere',
    merk: 'Ein <b>Würfel</b> hat 6 gleich große quadratische Flächen, 12 gleich lange Kanten und 8 Ecken; ein <b>Quader</b> hat 6 rechteckige Flächen (je zwei gegenüberliegende sind gleich). Ein <b>Netz</b> ist der „aufgeklappte“ Körper. Es gibt genau 11 verschiedene Würfelnetze. Nie Würfelnetz: 4 Quadrate in einem 2 × 2-Block, oder 5 und mehr in einer Reihe. Gegenüberliegende Flächen liegen im Netz nie nebeneinander. <b>Ansichten</b>: Vorderansicht (von vorne), Seitenansicht (von rechts oder links), Draufsicht (von oben). Im Bauplan steht, wie viele Würfel übereinander stehen.',
    pools: {},
    levels: {
      1: { ichkann: ['Du erkennst Würfelnetze.'], tasks: [netzJaNein(12)] },
      2: { ichkann: ['Du findest gegenüberliegende Flächen im Würfelnetz.', 'Du zeichnest Ansichten.'], tasks: [netzGegen(8), ansichtenTask(2)] },
      3: { ichkann: ['Du zeichnest Ansichten von Würfelgebäuden.'], tasks: [ansichtenTask(4, true)] }
    }
  });

  // ================================================================ Abzählen und Baumdiagramme
  function treeSvg(levels) {
    const leaves = levels.reduce((a, l) => a * l.length, 1), dy = 5.2, H = leaves * dy + 4;
    const tw = (t) => t.length * 1.65 + 1.5, colX = [8];
    levels.forEach((l, i) => colX.push(colX[i] + Math.max(...l.map(tw)) + 12));
    let s = '';
    const draw = (lv, y0, y1, px, py) => {
      if (lv === levels.length) return;
      const k = levels[lv].length, h = (y1 - y0) / k;
      levels[lv].forEach((lab, i) => {
        const y = y0 + h * (i + 0.5), x = colX[lv];
        s += L([px, py], [x - 0.8, y], { c: '#1d4ed8', w: 0.3 }) + T([x, y + 1.1], lab, { fs: 2.8, a: 'start' });
        draw(lv + 1, y0 + h * i, y0 + h * (i + 1), x + tw(lab), y);
      });
    };
    s += C([3, H / 2], 0.8, { f: '#1d4ed8', c: '#1d4ed8' });
    draw(0, 2, H - 2, 3.5, H / 2);
    return svgMM(colX[levels.length] + 2, H, s);
  }
  const ITEMS = [
    ['T-Shirts', ['rot', 'blau', 'grün', 'gelb'], 'Hosen', ['Jeans', 'kurz', 'Jogging']],
    ['Vorspeisen', ['Suppe', 'Salat', 'Toast'], 'Hauptspeisen', ['Pizza', 'Nudeln', 'Fisch']],
    ['Eissorten', ['Vanille', 'Schoko', 'Erdbeer', 'Zitrone'], 'Verpackungen', ['Becher', 'Tüte']],
    ['Wege von A nach B', ['Weg 1', 'Weg 2', 'Weg 3'], 'Wege von B nach C', ['Weg a', 'Weg b']]
  ];
  const baum = (n) => task({
    title: 'Baumdiagramm', instr: 'Zeichne ein Baumdiagramm. Wie viele Möglichkeiten gibt es?', n, cols: 2, mode: 'lines', lines: 4,
    gen: (rng) => { const [n1, a1, n2, a2] = rng.pick(ITEMS); const x = rng.sample(a1, R(rng, 2, Math.min(3, a1.length))), y = rng.sample(a2, 2);
      return { q: 'Es gibt ' + x.length + ' ' + n1 + ' (' + x.join(', ') + ') und ' + y.length + ' ' + n2 + ' (' + y.join(', ') + ').', a: treeSvg([x, y]) + '<br>' + x.length + ' · ' + y.length + ' = ' + (x.length * y.length) + ' Möglichkeiten', key: n1 + x.join() + y.join() }; }
  });
  const fak = (k) => k <= 1 ? 1 : k * fak(k - 1);
  const ABZ = [
    (r) => { const a = R(r, 2, 5), b = R(r, 2, 4); return { q: 'Ein Café bietet ' + a + ' Kuchen und ' + b + ' Getränke an. Wie viele verschiedene Kombinationen aus einem Kuchen und einem Getränk gibt es?', a: a + ' · ' + b + ' = ' + (a * b) }; },
    (r) => { const k = R(r, 3, 4); return { q: k + ' Kinder stellen sich in einer Reihe auf. Wie viele verschiedene Reihenfolgen gibt es?', a: Array.from({ length: k }, (_, i) => k - i).join(' · ') + ' = ' + fak(k) }; },
    (r) => { const k = R(r, 3, 4); return { q: 'Wie viele verschiedene ' + k + '-stellige Zahlen kann man aus den Ziffern ' + [1, 2, 3, 4, 5].slice(0, k).join(', ') + ' bilden, wenn jede Ziffer genau einmal vorkommt?', a: Array.from({ length: k }, (_, i) => k - i).join(' · ') + ' = ' + fak(k) }; },
    (r) => { const st = R(r, 2, 3); return { q: 'Ein Zahlenschloss hat ' + st + ' Rädchen mit den Ziffern 0 bis 9. Wie viele Codes gibt es?', a: Array(st).fill(10).join(' · ') + ' = ' + F(Math.pow(10, st)) }; },
    (r) => { const k = R(r, 4, 8); return { q: 'Bei einem Treffen geben einander alle ' + k + ' Personen genau einmal die Hand. Wie oft werden Hände geschüttelt?', a: k + ' · ' + (k - 1) + ' : 2 = ' + (k * (k - 1) / 2) }; },
    (r) => { const a = R(r, 2, 3), b = R(r, 2, 4), c = R(r, 2, 3); return { q: 'Ein Menü besteht aus Vorspeise (' + a + ' zur Wahl), Hauptspeise (' + b + ' zur Wahl) und Nachspeise (' + c + ' zur Wahl). Wie viele verschiedene Menüs gibt es?', a: a + ' · ' + b + ' · ' + c + ' = ' + (a * b * c) }; },
    (r) => { const k = R(r, 2, 3); return { q: 'Eine Münze wird ' + k + '-mal geworfen (Kopf oder Zahl). Wie viele verschiedene Ergebnisfolgen gibt es?', a: Array(k).fill(2).join(' · ') + ' = ' + Math.pow(2, k) }; }
  ];
  const abz = (n, from, to) => task({ title: 'Wie viele Möglichkeiten?', instr: 'Überlege mit einem Baumdiagramm oder mit der Zählregel und schreibe die Rechnung auf.', n, mode: 'lines', lines: 1,
    gen: (rng, lv, i) => { if (i === 0) plan = rng.shuffle(Array.from({ length: to - from + 1 }, (_, k) => from + k)); const idx = plan[i % plan.length]; const x = ABZ[idx](rng); x.key = 'f' + idx + (i >= plan.length ? x.q : ''); return x; } });
  UB.simple({
    id: 'm-kombinatorik', fach: 'mathe', title: 'Abzählen und Baumdiagramme', area: 'daten', klassen: [1, 2], img: 'MiniHoS_Ordnen_Ordner',
    merk: 'Ein <b>Baumdiagramm</b> zeigt alle Möglichkeiten Schritt für Schritt: Jeder Ast ist eine Wahl, jeder Weg vom Anfang bis zum Ende ist eine Möglichkeit. <b>Zählregel</b>: Gibt es beim 1. Schritt a Möglichkeiten und beim 2. Schritt b Möglichkeiten, dann gibt es insgesamt a · b Möglichkeiten. <b>Reihenfolgen</b> von 4 Dingen: 4 · 3 · 2 · 1 = 24 (weil jedes Ding nur einmal vorkommt). <b>Händeschütteln</b> bei n Personen: n · (n − 1) : 2.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst ein Baumdiagramm zeichnen.', 'Du kannst Möglichkeiten abzählen.'], tasks: [baum(2), abz(3, 0, 3)] },
      2: { ichkann: ['Du kannst Reihenfolgen und Kombinationen zählen.'], tasks: [baum(2), abz(4, 0, 3)] },
      3: { ichkann: ['Du löst auch schwierigere Abzählaufgaben.'], tasks: [abz(6, 1, 6)] }
    }
  });
})();
