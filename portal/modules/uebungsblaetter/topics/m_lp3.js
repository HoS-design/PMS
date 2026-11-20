/* Mathematik – Lehrplan-Ergänzungen 3. Klasse: Verhältnisse & Ähnlichkeit, Wahrscheinlichkeit,
   prozentuelle Änderung & Wachstum, Prisma & Pyramide, regelmäßige Vielecke & Vielecksflächen. */
(function () {
  const M = UB.M, G = UB.G, { R, fmt, round, task, frac, gcd } = M;
  const { add, sub, mul, n2, svgMM, T, L, C, PL, spt, DEG, F1 } = G;
  const F = (x) => fmt(round(x, 6)), F2 = (x) => fmt(round(x, 2));
  const Q = (z, n) => { const g = gcd(z, n) || 1; return [z / g, n / g]; };
  const qs = ([z, n]) => n === 1 ? fmt(z) : frac(z, n);
  const pct = ([z, n]) => F(round(z / n * 100, 1)) + ' %';

  // ================================================================ Verhältnisse und Ähnlichkeit
  const vkuerzen = (n) => task({ title: 'Verhältnisse kürzen', instr: 'Kürze so weit wie möglich.', n, cols: 3, w: 3,
    gen: (rng) => { let a, b; do { a = R(rng, 1, 9); b = R(rng, 1, 9); } while (gcd(a, b) !== 1 || a === b); const k = R(rng, 2, 12); return { q: (a * k) + ' : ' + (b * k), a: a + ' : ' + b, key: a * k + '|' + b * k }; } });
  const vteilen = (n) => task({ title: 'Im Verhältnis teilen', instr: 'Teile im angegebenen Verhältnis. Tipp: Zuerst berechnen, wie viel ein Teil ist.', n, cols: 1, w: 7,
    gen: (rng) => { const ctx = rng.pick([['€', 'Zwei Geschwister teilen'], ['kg', 'Zwei Bauern teilen'], ['l', 'Saft und Wasser werden gemischt:']]); let a, b; do { a = R(rng, 1, 7); b = R(rng, 1, 7); } while (a === b || gcd(a, b) !== 1); const t = R(rng, 2, 25);
      return { q: ctx[1] + ' ' + ((a + b) * t) + ' ' + ctx[0] + ' im Verhältnis ' + a + ' : ' + b + ': {?} und {?}', a: [(a * t) + ' ' + ctx[0], (b * t) + ' ' + ctx[0]], key: a + '|' + b + '|' + t }; } });
  const vglied = (n) => task({ title: 'Fehlende Zahl', instr: 'Die Verhältnisse sind gleich. Ergänze die fehlende Zahl.', n, cols: 3, w: 2.5,
    gen: (rng) => { let a, b; do { a = R(rng, 1, 9); b = R(rng, 1, 9); } while (a === b); const k = R(rng, 2, 9); return rng.int(2) ? { q: a + ' : ' + b + ' = {?} : ' + (b * k), a: String(a * k), key: a + b + 'x' + k } : { q: a + ' : ' + b + ' = ' + (a * k) + ' : {?}', a: String(b * k), key: a + b + 'y' + k }; } });
  const kFaktor = (n) => task({ title: 'Ähnliche Figuren', instr: 'Bei ähnlichen Figuren werden alle Längen mit dem Faktor k multipliziert, der Flächeninhalt mit k².', n, cols: 1, w: 4,
    gen: (rng) => { const k = rng.pick([2, 3, 0.5, 1.5, 2.5, 4]), typ = R(rng, 0, 2);
      if (typ === 0) { const a = R(rng, 2, 9) * 2, b = R(rng, 1, 6) * 2; return { q: 'Ein Rechteck (a = ' + a + ' cm, b = ' + b + ' cm) wird mit k = ' + F(k) + ' gestreckt. a′ = {?}, b′ = {?}, A′ = {?}', a: [F(a * k) + ' cm', F(b * k) + ' cm', F(a * b * k * k) + ' cm²'], key: 'r' + a + b + k }; }
      if (typ === 1) { const a = R(rng, 2, 9), k2 = R(rng, 2, 4); return { q: 'Ein Dreieck hat die Seite a = ' + a + ' cm, das ähnliche Bilddreieck a′ = ' + (a * k2) + ' cm. Ähnlichkeitsfaktor k = {?}; die Fläche wird {?}-mal so groß.', a: [String(k2), String(k2 * k2)], key: 'd' + a + k2 }; }
      const A = R(rng, 3, 20); return { q: 'Eine Figur hat den Flächeninhalt ' + A + ' cm². Sie wird mit k = ' + F(k) + ' gestreckt. A′ = {?}', a: F(A * k * k) + ' cm²', key: 'f' + A + k }; } });
  // Zentrische Streckung am Gitter
  const streckung = () => ({ type: 'fn', fn: (rng) => {
    const NX = 30, NY = 15, u = 5; let Z, pts, k, img;
    for (let t = 0; t < 800; t++) {
      k = rng.pick([2, 2, 3, 0.5]);
      Z = [R(rng, 1, NX - 1), R(rng, 1, NY - 1)];
      const n = R(rng, 3, 4), base = n === 3 ? [[0, 0], [R(rng, 2, 3), 0], [R(rng, 0, 2), R(rng, 2, 3)]] : [[0, 0], [R(rng, 2, 3), 0], [R(rng, 2, 4), R(rng, 2, 3)], [0, R(rng, 2, 3)]];
      const off = [R(rng, 1, NX - 5), R(rng, 1, NY - 4)]; pts = base.map(p => [p[0] * (k === 0.5 ? 2 : 1) + off[0], p[1] * (k === 0.5 ? 2 : 1) + off[1]]);
      img = pts.map(p => [Z[0] + k * (p[0] - Z[0]), Z[1] + k * (p[1] - Z[1])]);
      const ok = (p) => p[0] >= 0 && p[0] <= NX && p[1] >= 0 && p[1] <= NY && Number.isInteger(p[0]) && Number.isInteger(p[1]);
      const sep = pts.every(p => Math.hypot(p[0] - Z[0], p[1] - Z[1]) >= 1.5);
      if (pts.concat(img).every(ok) && sep && !pts.some(p => p[0] === Z[0] && p[1] === Z[1])) break;
    }
    const P = (p) => [3 + p[0] * u, 3 + (NY - p[1]) * u];
    let g = ''; for (let x = 0; x <= NX; x++) g += L(P([x, 0]), P([x, NY]), { c: '#dcdcdc', w: 0.2 }); for (let y = 0; y <= NY; y++) g += L(P([0, y]), P([NX, y]), { c: '#dcdcdc', w: 0.2 });
    const N = ['A', 'B', 'C', 'D'];
    const base = g + PL(pts.map(P), { f: '#e3eaff', w: 0.5, cls: 'fig' }) + pts.map((p, i) => T(add(P(p), [-2, -1.3]), N[i], { fs: 2.8, b: true })).join('') + C(P(Z), 0.9, { f: '#111', cls: 'Z' }) + T(add(P(Z), [2, 3.4]), 'Z', { fs: 3, b: true, a: 'start' });
    const rays = pts.map((p, i) => { const far = Math.hypot(img[i][0] - Z[0], img[i][1] - Z[1]) > Math.hypot(p[0] - Z[0], p[1] - Z[1]) ? img[i] : p; return L(P(Z), P(far), { c: '#94a3b8', w: 0.25, d: '1 0.8' }); }).join('');
    const solS = rays + base + PL(img.map(P), { f: 'rgba(198,40,40,0.12)', c: '#c62828', w: 0.5, cls: 'img' }) + img.map((p, i) => T(add(P(p), [1.8, -1.3]), N[i] + '′', { fs: 2.8, b: true, fill: '#c62828', a: 'start' })).join('');
    const W = NX * u + 6, H = NY * u + 6;
    return { title: 'Zentrische Streckung', instr: 'Strecke die Figur vom Streckungszentrum Z aus mit dem Faktor k = ' + F(k) + '. Jeder Bildpunkt liegt auf dem Strahl von Z durch den Originalpunkt, ' + (k > 1 ? F(k) + '-mal so weit von Z entfernt.' : 'halb so weit von Z entfernt.'),
      body: svgMM(W, H, base), sol: svgMM(W, H, solS) + '<div class="mi">' + UB.sol('Alle Längen werden mit ' + F(k) + ' multipliziert, der Flächeninhalt mit ' + F(k * k) + '.') + '</div>' };
  } });
  UB.simple({
    id: 'm-aehnlichkeit', fach: 'mathe', title: 'Verhältnisse und Ähnlichkeit', area: 'geometrie', klassen: [3], img: 'MiniHoS_Forschen_Lupe',
    merk: 'Ein <b>Verhältnis</b> a : b vergleicht zwei Größen; man kann es kürzen und erweitern (12 : 18 = 2 : 3). <b>Im Verhältnis teilen</b>: Gesamtmenge durch die Summe der Teile → Wert eines Teils (60 € im Verhältnis 2 : 3 → 1 Teil = 12 €, also 24 € und 36 €). <b>Ähnliche Figuren</b> haben gleiche Winkel; alle Längen sind mit demselben Faktor k multipliziert, der Flächeninhalt mit k². <b>Zentrische Streckung</b> mit Zentrum Z und Faktor k: Bildpunkt P′ liegt auf dem Strahl ZP mit ZP′ = k · ZP (k > 1 vergrößert, 0 < k < 1 verkleinert).',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Verhältnisse kürzen.', 'Du kannst Mengen im Verhältnis teilen.'], tasks: [vkuerzen(9), vteilen(3), vglied(6)] },
      2: { ichkann: ['Du rechnest mit dem Ähnlichkeitsfaktor.'], tasks: [kFaktor(4), vglied(6), vteilen(2)] },
      3: { ichkann: ['Du kannst Figuren zentrisch strecken.'], tasks: [streckung(), kFaktor(2)] }
    }
  });

  // ================================================================ Wahrscheinlichkeit
  const SMU = [['Beim Würfeln kommt eine Zahl kleiner als 7.', 'sicher'], ['Beim Würfeln kommt eine 7.', 'unmöglich'], ['Beim Würfeln kommt eine gerade Zahl.', 'möglich'], ['Eine Münze zeigt Kopf.', 'möglich'],
    ['Aus einer Dose mit nur roten Kugeln zieht man eine rote Kugel.', 'sicher'], ['Aus einer Dose mit nur roten Kugeln zieht man eine blaue Kugel.', 'unmöglich'], ['Beim Würfeln mit zwei Würfeln ist die Augensumme 1.', 'unmöglich'], ['Beim Würfeln mit zwei Würfeln ist die Augensumme 12.', 'möglich'], ['Morgen geht die Sonne im Osten auf.', 'sicher'], ['Beim Würfeln kommt eine Zahl größer als 0.', 'sicher']];
  const smu = (n) => task({ title: 'Sicher, möglich oder unmöglich?', instr: 'Schreibe sicher, möglich oder unmöglich.', n, cols: 1, w: 6, gen: (rng) => { const [q, a] = rng.pick(SMU); return { q: q + ' {?}', a, key: q }; } });
  const WE = [
    ['eine gerade Zahl', 3], ['eine Zahl größer als 4', 2], ['eine 6', 1], ['eine Primzahl', 3], ['eine Zahl kleiner als 3', 2], ['höchstens eine 4', 4], ['mindestens eine 2', 5], ['eine ungerade Zahl', 3]
  ];
  const laplace = (n) => task({ title: 'Wahrscheinlichkeiten berechnen', instr: 'Wahrscheinlichkeit = günstige Fälle : mögliche Fälle. Gib sie als gekürzten Bruch und in Prozent an (gerundet auf 1 Dezimalstelle).', n, cols: 1, w: 3,
    gen: (rng) => { const k = R(rng, 0, 2);
      if (k === 0) { const [e, g] = rng.pick(WE); const q = Q(g, 6); return { q: 'Würfel: P(' + e + ') = {?} ≈ {?}', a: [qs(q), pct(q)], key: 'w' + e }; }
      if (k === 1) { const r = R(rng, 1, 8), b = R(rng, 1, 8), gr = R(rng, 0, 5), tot = r + b + gr, q = Q(r, tot); return { q: 'In einer Dose sind ' + r + ' rote, ' + b + ' blaue' + (gr ? ' und ' + gr + ' grüne' : '') + ' Kugeln. P(rot) = {?} ≈ {?}', a: [qs(q), pct(q)], key: 'u' + r + b + gr }; }
      const s = rng.pick([24, 30, 32, 26]); const sp = rng.pick([1, 2, 3, 4]); return { q: 'Ein Kartenspiel hat ' + s + ' Karten, davon ' + (sp * 4) + ' Bildkarten. P(Bildkarte) = {?} ≈ {?}', a: [qs(Q(sp * 4, s)), pct(Q(sp * 4, s))], key: 'k' + s + sp }; } });
  const RADC = [['rot', '#dc2626'], ['blau', '#2563eb'], ['gelb', '#facc15'], ['grün', '#16a34a']];
  function rad(counts, rng) {
    const n = counts.reduce((a, b) => a + b, 0), Mi = [16, 17], r = 14; let s = '', a = 90;
    const order = []; counts.forEach((c, i) => { for (let j = 0; j < c; j++) order.push(i); });
    rng.shuffle(order).forEach(ci => { const sw = 360 / n, p1 = spt(Mi, r, a), p2 = spt(Mi, r, a - sw); s += '<path d="M16 17 L' + n2(p1[0]) + ' ' + n2(p1[1]) + ' A14 14 0 0 1 ' + n2(p2[0]) + ' ' + n2(p2[1]) + ' Z" fill="' + RADC[ci][1] + '" stroke="#fff" stroke-width="0.5"/>'; a -= sw; });
    return svgMM(32, 32, s + '<path d="M14.4 0.6 h3.2 l-1.6 3.4 z" fill="#111"/>');
  }
  const gluecksrad = (n) => task({ title: 'Glücksrad', instr: 'Alle Felder sind gleich groß. Gib die Wahrscheinlichkeit als gekürzten Bruch an.', n, cols: 2, w: 3,
    gen: (rng) => { const nn = rng.pick([6, 8, 10, 12]); let cs; do { cs = [R(rng, 1, nn - 2), 0, 0]; cs[1] = R(rng, 1, nn - cs[0] - 1); cs[2] = nn - cs[0] - cs[1]; } while (cs[2] < 1);
      cs = rng.shuffle(cs); const f = R(rng, 0, 2); return { q: rad(cs, rng) + 'P(' + RADC[f][0] + ') = {?}', a: qs(Q(cs[f], nn)), key: cs.join() + f }; } });
  const empirisch = (n) => task({ title: 'Wahrscheinlichkeit schätzen und vorhersagen', instr: 'Verwende relative Häufigkeiten bzw. die Wahrscheinlichkeit.', n, cols: 1, w: 5,
    gen: (rng) => { const k = R(rng, 0, 2);
      if (k === 0) { const N = rng.pick([200, 300, 400, 500]), h = R(rng, 30, 70) * N / 100; return { q: 'Ein Reißnagel wird ' + N + '-mal geworfen. ' + h + '-mal landet er mit der Spitze nach oben. Schätze P(Spitze oben) ≈ {?}', a: F(h / N) + ' = ' + F(h / N * 100) + ' %', key: 'r' + N + h }; }
      if (k === 1) { const N = rng.pick([60, 120, 300, 600, 900]); return { q: 'Wie oft erwartest du ungefähr eine Sechs, wenn du ' + N + '-mal würfelst? {?}', a: 'etwa ' + (N / 6) + '-mal', key: 'w' + N }; }
      const N = rng.pick([50, 100, 200, 400]); return { q: 'Eine Münze wird ' + N + '-mal geworfen. Wie oft erwartest du ungefähr Kopf? {?}', a: 'etwa ' + (N / 2) + '-mal', key: 'm' + N }; } });
  const mulQ = (a, b) => Q(a[0] * b[0], a[1] * b[1]), addQ = (a, b) => Q(a[0] * b[1] + b[0] * a[1], a[1] * b[1]);
  const zweistufig = (n) => task({ title: 'Zweistufige Zufallsversuche', instr: 'Zeichne ein Baumdiagramm. Multipliziere entlang eines Weges, addiere die Wege.', n, mode: 'lines', lines: 3, cols: 1,
    gen: (rng) => { const k = R(rng, 0, 3);
      if (k === 0) { const r = R(rng, 2, 6), b = R(rng, 2, 6), t = r + b; const p = mulQ([r, t], [r - 1, t - 1]); return { q: 'In einer Dose sind ' + r + ' rote und ' + b + ' blaue Kugeln. Es werden zwei Kugeln <b>ohne Zurücklegen</b> gezogen. Wie groß ist P(zwei rote)?', a: frac(r, t) + ' · ' + frac(r - 1, t - 1) + ' = ' + qs(p) + ' ≈ ' + pct(p), key: 'o' + r + b }; }
      if (k === 1) { const r = R(rng, 2, 6), b = R(rng, 2, 6), t = r + b; const p = mulQ([r, t], [r, t]); return { q: 'In einer Dose sind ' + r + ' rote und ' + b + ' blaue Kugeln. Es wird zweimal <b>mit Zurücklegen</b> gezogen. Wie groß ist P(zwei rote)?', a: frac(r, t) + ' · ' + frac(r, t) + ' = ' + qs(p) + ' ≈ ' + pct(p), key: 'm' + r + b }; }
      if (k === 2) { const s = R(rng, 2, 12); let c = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (a + b === s) c++; const p = Q(c, 36); return { q: 'Zwei Würfel werden geworfen. Wie groß ist die Wahrscheinlichkeit für die Augensumme ' + s + '?', a: c + ' günstige von 36 Möglichkeiten: ' + qs(p) + ' ≈ ' + pct(p), key: 's' + s }; }
      const r = R(rng, 2, 6), b = R(rng, 2, 6), t = r + b; const p = addQ(mulQ([r, t], [b, t - 1]), mulQ([b, t], [r, t - 1])); return { q: 'In einer Dose sind ' + r + ' rote und ' + b + ' blaue Kugeln. Zwei Kugeln werden ohne Zurücklegen gezogen. Wie groß ist P(eine rote und eine blaue)?', a: frac(r, t) + ' · ' + frac(b, t - 1) + ' + ' + frac(b, t) + ' · ' + frac(r, t - 1) + ' = ' + qs(p) + ' ≈ ' + pct(p), key: 'v' + r + b }; } });
  UB.simple({
    id: 'm-wahrscheinlichkeit', fach: 'mathe', title: 'Wahrscheinlichkeit', area: 'daten', klassen: [3, 4], img: 'MiniHoS_Gesicht_Zwinkern',
    merk: 'Ein Ereignis kann <b>sicher</b> (P = 1 = 100 %), <b>möglich</b> oder <b>unmöglich</b> (P = 0) sein. Sind alle Ergebnisse gleich wahrscheinlich (Laplace): <b>P = günstige Fälle : mögliche Fälle</b>. Würfel: P(6) = ' + frac(1, 6) + ' ≈ 16,7 %. Relative Häufigkeiten aus vielen Versuchen sind Schätzwerte für die Wahrscheinlichkeit; umgekehrt sagt die Wahrscheinlichkeit voraus, wie oft etwas ungefähr eintritt (600 Würfe → etwa 100 Sechser). <b>Zweistufige Versuche</b>: Baumdiagramm zeichnen, entlang eines Weges <b>multiplizieren</b>, mehrere Wege <b>addieren</b>. Ohne Zurücklegen ändert sich beim 2. Zug die Anzahl.',
    pools: {},
    levels: {
      1: { ichkann: ['Du unterscheidest sicher, möglich und unmöglich.', 'Du berechnest einfache Wahrscheinlichkeiten.'], tasks: [smu(4), laplace(5), gluecksrad(2)] },
      2: { ichkann: ['Du schätzt Wahrscheinlichkeiten aus relativen Häufigkeiten.', 'Du machst Vorhersagen.'], tasks: [gluecksrad(4), empirisch(4), laplace(2)] },
      3: { ichkann: ['Du berechnest Wahrscheinlichkeiten bei zweistufigen Zufallsversuchen.'], tasks: [zweistufig(4)] }
    }
  });

  // ================================================================ Prozentuelle Änderung und Wachstum
  const aenderungsfaktor = (n) => task({ title: 'Änderungsfaktor', instr: 'Plus p % heißt mal (1 + p/100), minus p % heißt mal (1 − p/100).', n, cols: 2, w: 3,
    gen: (rng) => { const p = rng.pick([5, 10, 12, 15, 20, 25, 30, 40, 50, 3, 8]), up = rng.int(2); return { q: (up ? 'Zunahme um ' : 'Abnahme um ') + p + ' %: Faktor {?}', a: F(up ? 1 + p / 100 : 1 - p / 100), key: up + '|' + p }; } });
  const neuWert = (n) => task({ title: 'Neuer Wert', instr: 'Rechne mit dem Änderungsfaktor: neuer Wert = alter Wert · Faktor.', n, cols: 1, w: 6,
    gen: (rng) => { const p = rng.pick([10, 20, 25, 15, 30, 5, 40]), up = rng.int(2), G0 = R(rng, 4, 60) * 10; const ctx = up ? rng.pick(['Der Preis von {G} € steigt um {p} %.', 'Die Miete von {G} € wird um {p} % erhöht.', 'Ein Verein mit {G} Mitgliedern wächst um {p} %.']) : rng.pick(['Ein Rad um {G} € wird um {p} % verbilligt.', 'Die Stromrechnung von {G} € sinkt um {p} %.', 'Ein Handy um {G} € kostet im Abverkauf {p} % weniger.']);
      const unit = /Mitglied/.test(ctx) ? '' : ' €'; return { q: ctx.replace('{G}', F(G0)).replace('{p}', p) + ' Neuer Wert: {?}', a: F(G0) + ' · ' + F(up ? 1 + p / 100 : 1 - p / 100) + ' = ' + F(G0 * (up ? 1 + p / 100 : 1 - p / 100)) + unit, key: ctx + G0 + p }; } });
  const mehrstufigP = (n) => task({ title: 'Mehrere Änderungen', instr: 'Multipliziere die Änderungsfaktoren. Gib die Gesamtänderung in Prozent an.', n, cols: 1, w: 9,
    gen: (rng) => { const p1 = rng.pick([10, 20, 25, 50, 5, 30]), p2 = rng.pick([10, 20, 25, 50, 5, 30]), s1 = rng.int(2) ? 1 : -1, s2 = rng.int(2) ? 1 : -1;
      const f = round((1 + s1 * p1 / 100) * (1 + s2 * p2 / 100), 6), ch = round((f - 1) * 100, 4);
      return { q: 'Zuerst ' + (s1 > 0 ? '+' : '−') + p1 + ' %, dann ' + (s2 > 0 ? '+' : '−') + p2 + ' %: {?}', a: F(1 + s1 * p1 / 100) + ' · ' + F(1 + s2 * p2 / 100) + ' = ' + F(f) + ' → ' + (ch === 0 ? 'keine Änderung' : (ch > 0 ? 'Zunahme um ' : 'Abnahme um ') + F(Math.abs(ch)) + ' %'), key: s1 * p1 + '|' + s2 * p2 }; } });
  const rueck = (n) => task({ title: 'Ursprünglicher Wert', instr: 'Dividiere durch den Änderungsfaktor.', n, cols: 1, w: 6,
    gen: (rng) => { const p = rng.pick([10, 20, 25, 30, 40, 50]), G0 = R(rng, 4, 40) * 10, up = rng.int(2); const N = G0 * (up ? 1 + p / 100 : 1 - p / 100);
      return { q: up ? 'Nach einer Erhöhung um ' + p + ' % kostet etwas ' + F(N) + ' €. Vorher kostete es {?}' : 'Nach ' + p + ' % Rabatt kostet etwas ' + F(N) + ' €. Vorher kostete es {?}', a: F(N) + ' : ' + F(up ? 1 + p / 100 : 1 - p / 100) + ' = ' + F(G0) + ' €', key: up + '|' + p + '|' + G0 }; } });
  const wachstum = () => ({ type: 'fn', fn: (rng) => {
    const start = R(rng, 2, 9) * 100, d = R(rng, 2, 8) * 10, p = rng.pick([5, 10, 20]), yrs = [0, 1, 2, 3, 4];
    const lin = yrs.map(y => start + d * y), exp = yrs.map(y => round(start * Math.pow(1 + p / 100, y), 2));
    const row = (s) => UB.table(['Jahr'].concat(yrs.map(String)), [['A: jedes Jahr + ' + d].concat(yrs.map((y, i) => i < 2 || s ? (i < 2 ? F(lin[i]) : UB.sol(F(lin[i]))) : '')), ['B: jedes Jahr + ' + p + ' %'].concat(yrs.map((y, i) => i < 2 || s ? (i < 2 ? F2(exp[i]) : UB.sol(F2(exp[i]))) : ''))]);
    const yN = yrs.find((y, i) => exp[i] > lin[i]);
    return { title: 'Lineares und prozentuelles Wachstum', instr: 'Ein Startwert von ' + F(start) + ' wächst auf zwei Arten. Ergänze die Tabelle (runde auf 2 Dezimalstellen). Bei welchem Modell nimmt der Wert immer gleich viel zu, bei welchem um immer denselben Faktor?',
      body: row(false) + UB.lines(2), sol: row(true) + '<div class="mi">' + UB.sol('A: lineares Wachstum (immer + ' + d + '). B: prozentuelles (exponentielles) Wachstum (immer · ' + F(1 + p / 100) + ').' + (yN !== undefined ? ' Ab Jahr ' + yN + ' liegt B vorne.' : ' In diesen 4 Jahren bleibt A vorne – auf lange Sicht überholt B aber immer.')) + '</div>' };
  } });
  UB.simple({
    id: 'm-wachstum', fach: 'mathe', title: 'Prozentuelle Änderung und Wachstum', area: 'zahlen', klassen: [3], img: 'MiniHoS_Digital_Laptop',
    merk: '<b>Änderungsfaktor</b>: +20 % → · 1,2; −15 % → · 0,85. Neuer Wert = alter Wert · Faktor. Ursprünglicher Wert = neuer Wert : Faktor. <b>Mehrere Änderungen</b>: Faktoren multiplizieren (+10 % und dann −10 % ergibt 1,1 · 0,9 = 0,99, also −1 %, nicht 0 %!). <b>Lineares Wachstum</b>: Es kommt immer gleich viel dazu (Differenzen gleich). <b>Prozentuelles (exponentielles) Wachstum</b>: Es wird immer mit demselben Faktor multipliziert (Quotienten gleich), z. B. bei Zinseszinsen.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kennst Änderungsfaktoren.', 'Du berechnest neue Werte.'], tasks: [aenderungsfaktor(8), neuWert(4)] },
      2: { ichkann: ['Du rechnest mehrere Änderungen hintereinander.', 'Du berechnest den ursprünglichen Wert.'], tasks: [mehrstufigP(4), rueck(4)] },
      3: { ichkann: ['Du unterscheidest lineares und prozentuelles Wachstum.'], tasks: [wachstum(), mehrstufigP(3), rueck(2)] }
    }
  });

  // ================================================================ Prisma und Pyramide
  const TRIP = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17]];
  const prismaV = (n) => task({ title: 'Volumen von Prismen', instr: 'V = G · h (Grundfläche mal Höhe des Prismas).', n, cols: 1, w: 6,
    gen: (rng) => { const k = R(rng, 0, 2), h = R(rng, 4, 20);
      if (k === 0) { const g = R(rng, 3, 12), hg = R(rng, 2, 10); return { q: 'Dreiseitiges Prisma: Grundfläche ist ein Dreieck mit g = ' + g + ' cm und h<sub>g</sub> = ' + hg + ' cm; Prismenhöhe h = ' + h + ' cm. V = {?}', a: 'G = ' + g + ' · ' + hg + ' : 2 = ' + F(g * hg / 2) + ' cm²; V = ' + F(g * hg / 2 * h) + ' cm³', key: 'd' + g + hg + h }; }
      if (k === 1) { const a = R(rng, 6, 14), c = R(rng, 2, 5), hT = R(rng, 2, 8); return { q: 'Prisma mit Trapez als Grundfläche: a = ' + a + ' cm, c = ' + c + ' cm, h<sub>T</sub> = ' + hT + ' cm; Prismenhöhe h = ' + h + ' cm. V = {?}', a: 'G = (' + a + ' + ' + c + ') · ' + hT + ' : 2 = ' + F((a + c) * hT / 2) + ' cm²; V = ' + F((a + c) * hT / 2 * h) + ' cm³', key: 't' + a + c + hT + h }; }
      const e = R(rng, 4, 12), f = R(rng, 3, 10); return { q: 'Prisma mit Raute als Grundfläche: e = ' + e + ' cm, f = ' + f + ' cm; Prismenhöhe h = ' + h + ' cm. V = {?}', a: 'G = ' + e + ' · ' + f + ' : 2 = ' + F(e * f / 2) + ' cm²; V = ' + F(e * f / 2 * h) + ' cm³', key: 'r' + e + f + h }; } });
  const prismaO = (n) => task({ title: 'Oberfläche von Prismen', instr: 'O = 2 · G + M; Mantel M = Umfang der Grundfläche · Höhe.', n, cols: 1, w: 6,
    gen: (rng) => { const [a, b, c] = rng.pick(TRIP), h = R(rng, 5, 20); const G0 = a * b / 2, u = a + b + c; return { q: 'Dreiseitiges Prisma, Grundfläche rechtwinkeliges Dreieck mit den Seiten ' + a + ' cm, ' + b + ' cm, ' + c + ' cm (rechter Winkel zwischen ' + a + ' cm und ' + b + ' cm); h = ' + h + ' cm. O = {?}', a: 'G = ' + F(G0) + ' cm², M = ' + u + ' · ' + h + ' = ' + (u * h) + ' cm², O = ' + F(2 * G0 + u * h) + ' cm²', key: a + '|' + h }; } });
  const pyramide = (n) => task({ title: 'Pyramiden', instr: 'V = G · h : 3. Oberfläche der quadratischen Pyramide: O = a² + 4 · a · h<sub>a</sub> : 2.', n, cols: 1, w: 6,
    gen: (rng) => { const k = R(rng, 0, 2);
      if (k === 0) { const a = R(rng, 2, 12), h = R(rng, 2, 10) * 3; return { q: 'Quadratische Pyramide: a = ' + a + ' cm, h = ' + h + ' cm. V = {?}', a: a + '² · ' + h + ' : 3 = ' + F(a * a * h / 3) + ' cm³', key: 'v' + a + h }; }
      if (k === 1) { const a = R(rng, 3, 12), b = R(rng, 2, 10), h = R(rng, 2, 8) * 3; return { q: 'Rechteckige Pyramide: a = ' + a + ' cm, b = ' + b + ' cm, h = ' + h + ' cm. V = {?}', a: a + ' · ' + b + ' · ' + h + ' : 3 = ' + F(a * b * h / 3) + ' cm³', key: 'r' + a + b + h }; }
      const a = R(rng, 2, 10) * 2, ha = R(rng, 3, 15); return { q: 'Quadratische Pyramide: a = ' + a + ' cm, Höhe einer Seitenfläche h<sub>a</sub> = ' + ha + ' cm. O = {?}', a: a + '² + 4 · ' + a + ' · ' + ha + ' : 2 = ' + F(a * a + 2 * a * ha) + ' cm²', key: 'o' + a + ha }; } });
  const DICHTE = [['Holz (Fichte)', 0.5], ['Eis', 0.9], ['Glas', 2.5], ['Aluminium', 2.7], ['Eisen', 7.8], ['Beton', 2.4]];
  const masse = (n) => task({ title: 'Masse aus Volumen und Dichte', instr: 'Masse = Volumen · Dichte (Dichte in g/cm³).', n, cols: 1, w: 6,
    gen: (rng) => { const [mat, d] = rng.pick(DICHTE), k = R(rng, 0, 1);
      if (k === 0) { const a = R(rng, 2, 10), b = R(rng, 2, 10), c = R(rng, 2, 10); const V = a * b * c; return { q: 'Ein Quader aus ' + mat + ' (Dichte ' + F(d) + ' g/cm³) ist ' + a + ' cm × ' + b + ' cm × ' + c + ' cm groß. Masse: {?}', a: 'V = ' + V + ' cm³; m = ' + V + ' · ' + F(d) + ' = ' + F(V * d) + ' g', key: mat + V }; }
      const a = R(rng, 2, 8), h = R(rng, 1, 6) * 3; const V = a * a * h / 3; return { q: 'Eine quadratische Pyramide aus ' + mat + ' (Dichte ' + F(d) + ' g/cm³) hat a = ' + a + ' cm und h = ' + h + ' cm. Masse: {?}', a: 'V = ' + F(V) + ' cm³; m = ' + F(V) + ' · ' + F(d) + ' = ' + F(round(V * d, 2)) + ' g', key: mat + 'p' + a + h }; } });
  UB.simple({
    id: 'm-prisma', fach: 'mathe', title: 'Prisma und Pyramide', area: 'geometrie', klassen: [3], img: 'MiniHoS_Forschen_Lupe',
    merk: 'Ein <b>gerades Prisma</b> hat zwei deckungsgleiche, parallele Grundflächen (Dreieck, Trapez, Sechseck …) und rechteckige Seitenflächen (Mantel). <b>V = G · h</b>, <b>O = 2 · G + M</b> mit M = u · h (u = Umfang der Grundfläche). Eine <b>Pyramide</b> hat eine Grundfläche und dreieckige Seitenflächen, die in der Spitze zusammenlaufen. <b>V = G · h : 3</b> (ein Drittel des Prismas mit gleicher Grundfläche und Höhe). Quadratische Pyramide: O = a² + 4 · a · h<sub>a</sub> : 2. <b>Masse</b> = Volumen · Dichte. <b>Zusammengesetzte Körper</b> (z. B. Haus = Quader + Dachprisma): Teilvolumen addieren.',
    pools: {},
    levels: {
      1: { ichkann: ['Du berechnest das Volumen von Prismen.'], tasks: [prismaV(5)] },
      2: { ichkann: ['Du berechnest die Oberfläche von Prismen.', 'Du berechnest das Volumen von Pyramiden.'], tasks: [prismaO(2), pyramide(4)] },
      3: { ichkann: ['Du berechnest Massen von Körpern.', 'Du berechnest zusammengesetzte Körper aus Quader, Prisma und Pyramide.'], tasks: [pyramide(2), masse(2), UB.KZ.haus(2)] }
    }
  });

  // ================================================================ Regelmäßige Vielecke und Vielecksflächen
  const NECK = { 3: 'Gleichseitiges Dreieck (regelmäßiges Dreieck)', 4: 'Quadrat (regelmäßiges Viereck)', 5: 'Regelmäßiges Fünfeck', 6: 'Regelmäßiges Sechseck', 8: 'Regelmäßiges Achteck', 9: 'Regelmäßiges Neuneck', 10: 'Regelmäßiges Zehneck', 12: 'Regelmäßiges Zwölfeck' };
  const vieleckWinkel = (n) => task({ title: 'Winkel im regelmäßigen Vieleck', instr: 'Mittelpunktswinkel = 360° : n; Winkelsumme = (n − 2) · 180°; Innenwinkel = Winkelsumme : n.', n, cols: 1, w: 3,
    gen: (rng) => { const k = +rng.pick(Object.keys(NECK)); return { q: NECK[k] + ' (n = ' + k + '): Mittelpunktswinkel {?}, Winkelsumme {?}, Innenwinkel {?}', a: [F(360 / k) + '°', ((k - 2) * 180) + '°', F((k - 2) * 180 / k) + '°'], key: 'k' + k }; } });
  const shoelace = (p) => Math.abs(p.reduce((s, a, i) => { const b = p[(i + 1) % p.length]; return s + a[0] * b[1] - b[0] * a[1]; }, 0)) / 2;
  function vieleckGitter(rng) {
    for (let t = 0; t < 300; t++) {
      const n = R(rng, 4, 6), cx = 6, cy = 4; const ang0 = rng.int(360); const pts = [];
      for (let i = 0; i < n; i++) { const a = (ang0 + i * 360 / n + R(rng, -15, 15)) * DEG, r = R(rng, 25, 45) / 10; pts.push([Math.round(cx + r * Math.cos(a)), Math.round(cy + r * Math.sin(a))]); }
      const uniqP = new Set(pts.map(String)).size === n; const A = shoelace(pts);
      const inside = pts.every(p => p[0] >= 0 && p[0] <= 12 && p[1] >= 0 && p[1] <= 8);
      // keine drei aufeinanderfolgenden Punkte auf einer Linie, konvex genug
      const col = pts.some((p, i) => { const a = pts[(i + n - 1) % n], b = pts[(i + 1) % n]; return (p[0] - a[0]) * (b[1] - a[1]) - (p[1] - a[1]) * (b[0] - a[0]) === 0; });
      if (uniqP && inside && !col && A >= 12) return { pts, A };
    }
  }
  const vieleckFlaeche = (n) => ({ type: 'fn', fn: (rng) => {
    const its = M.uniq(n, () => vieleckGitter(rng), x => String(x.pts));
    const cell = (it, s) => { const u = 5, P = (p) => [3 + p[0] * u, 3 + (8 - p[1]) * u]; let g = ''; for (let x = 0; x <= 12; x++) g += L(P([x, 0]), P([x, 8]), { c: '#d9d9d9', w: 0.2 }); for (let y = 0; y <= 8; y++) g += L(P([0, y]), P([12, y]), { c: '#d9d9d9', w: 0.2 });
      g += PL(it.pts.map(P), { f: '#e3eaff', w: 0.5, cls: 'fig' });
      return '<div class="mi">' + svgMM(66, 46, g) + 'A = ' + (s ? UB.sol(F(it.A) + ' cm²') : UB.blank(6)) + '</div>'; };
    return { title: 'Flächeninhalt von Vielecken', instr: 'Zerlege das Vieleck in Rechtecke und Dreiecke (oder ergänze es zu einem Rechteck und ziehe ab). Ein Kästchen steht für 1 cm².', body: '<div class="mgrid c2">' + its.map(x => cell(x, false)).join('') + '</div>', sol: '<div class="mgrid c2">' + its.map(x => cell(x, true)).join('') + '</div>' };
  } });
  const sechseck = (H) => ({ type: 'fn', fn: (rng) => {
    const a = R(rng, 25, 35) / 10, Mi = [90, H / 2]; let s = C(Mi, a * 10, { c: '#1d4ed8', w: 0.3 }) + C(Mi, 0.7, { f: '#111' }) + T(add(Mi, [2, 3.5]), 'M', { fs: 3, a: 'start' });
    const P = [0, 1, 2, 3, 4, 5].map(i => spt(Mi, a * 10, 90 + 60 * i));
    P.forEach((p, i) => { s += G.ARC(p, a * 10, G.sdir(p, P[(i + 1) % 6]) - 6, G.sdir(p, P[(i + 1) % 6]) + 6); });
    s += PL(P, { c: '#c62828', w: 0.55, cls: 'fig' }) + P.map(p => C(p, 0.6, { f: '#c62828', c: '#c62828' })).join('');
    const h = a * Math.sqrt(3) / 2, A = 6 * a * h / 2;
    return { title: 'Regelmäßiges Sechseck', instr: 'Konstruiere ein regelmäßiges Sechseck mit der Seitenlänge a = ' + F1(a) + ' cm: Zeichne einen Kreis mit r = a und trage a mit dem Zirkel sechsmal auf dem Kreis ab. Berechne den Flächeninhalt (die Höhe eines Teildreiecks ist h ≈ 0,866 · a).',
      body: '<div class="kfeld" style="height:' + H + 'mm"></div><div class="mi">A ≈ ' + UB.blank(6) + '</div>', sol: '<div class="kfeld sol-box" style="height:' + H + 'mm">' + svgMM(180, H, s) + '</div><div class="mi">' + UB.sol('h ≈ 0,866 · ' + F1(a) + ' ≈ ' + F2(0.866 * a) + ' cm; A = 6 · a · h : 2 ≈ 6 · ' + F1(a) + ' · ' + F2(0.866 * a) + ' : 2 ≈ ' + F2(3 * a * round(0.866 * a, 2)) + ' cm²') + '</div>' };
  } });
  UB.simple({
    id: 'm-vielecke', fach: 'mathe', title: 'Regelmäßige Vielecke und Vielecksflächen', area: 'geometrie', klassen: [3], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: 'Ein <b>regelmäßiges n-Eck</b> hat n gleich lange Seiten und n gleich große Innenwinkel; seine Ecken liegen auf einem Kreis. Mittelpunktswinkel: 360° : n. Winkelsumme: (n − 2) · 180°. Innenwinkel: (n − 2) · 180° : n. Das <b>regelmäßige Sechseck</b> besteht aus 6 gleichseitigen Dreiecken: Konstruktion mit r = a; A = 6 · a · h : 2 mit h ≈ 0,866 · a. <b>Vielecksflächen</b>: in Rechtecke und Dreiecke zerlegen oder zu einem Rechteck ergänzen und Überschüssiges abziehen.',
    pools: {},
    levels: {
      1: { ichkann: ['Du berechnest Winkel in regelmäßigen Vielecken.'], tasks: [vieleckWinkel(5)] },
      2: { ichkann: ['Du berechnest Flächeninhalte von Vielecken durch Zerlegen.'], tasks: [vieleckFlaeche(4)] },
      3: { ichkann: ['Du konstruierst regelmäßige Sechsecke und berechnest ihren Flächeninhalt.'], tasks: [sechseck(76), vieleckWinkel(3)] }
    }
  });
})();
