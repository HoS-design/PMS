/* Mathematik: Dezimalzahlen, Brüche (1./2. Klasse), Winkel (1. Klasse) */
(function () {
  const M = UB.M, { R, fmt, round, gcd, lcm, frac, fracR, task, grid, angle } = M;
  const F = (x) => fmt(round(x, 6));
  const dec = (rng, d, max) => round(R(rng, 1, max * Math.pow(10, d)) / Math.pow(10, d), d);

  // ---------------------------------------------------------------- Dezimalzahlen
  const STELLE = ['Zehntel', 'Hundertstel', 'Tausendstel'];
  const stelle = (n) => task({
    title: 'Stellenwerte', instr: 'Welchen Stellenwert hat die unterstrichene Ziffer?', n, cols: 2, w: 7,
    gen: (rng) => {
      const x = dec(rng, 3, 99); const s = x.toFixed(3); const [i, f] = s.split('.');
      const k = R(rng, 0, 2);
      const shown = i + ',' + f.split('').map((c, j) => j === k ? '<u><b>' + c + '</b></u>' : c).join('');
      return { q: shown + ' → {?}', a: STELLE[k], key: s + k };
    }
  });
  const vgl = (n) => task({
    title: 'Vergleichen', instr: 'Setze <, > oder = ein.', n, cols: 3, w: 1.6,
    gen: (rng) => {
      const a = dec(rng, R(rng, 1, 3), 20);
      const k = rng.int(4);
      let b = k === 0 ? a : k === 1 ? round(a + rng.pick([0.1, 0.01, 0.001, 1]), 3) : k === 2 ? round(Math.max(0.001, a - rng.pick([0.1, 0.01, 0.09])), 3) : round(a * 10 % 20, 2);
      const sb = (k === 0 && rng.int(2)) ? F(b) + '0' : F(b);
      return { q: F(a) + ' {?} ' + sb, a: a > b ? '>' : a < b ? '<' : '=' };
    }
  });
  const rundD = (n) => task({
    title: 'Runden', instr: 'Runde auf die angegebene Stelle.', n, cols: 2, w: 5,
    gen: (rng) => {
      const x = dec(rng, 3, 99); const k = rng.pick([0, 1, 2]);
      const name = ['Ganze', 'Zehntel', 'Hundertstel'][k];
      return { q: F(x) + ' <span class="hint">(' + name + ')</span> ≈ {?}', a: round(x, k).toFixed(k).replace('.', ',') };
    }
  });
  const kopfD = (n) => task({
    title: 'Addieren und Subtrahieren', instr: 'Rechne. Komma unter Komma!', n, cols: 3, w: 4,
    gen: (rng, level) => {
      const a = dec(rng, R(rng, 1, 2), level === 2 ? 50 : 200), b = dec(rng, R(rng, 1, 2), level === 2 ? 30 : 150);
      return rng.int(2) ? { q: F(a) + ' + ' + F(b), a: F(a + b) } : { q: F(Math.max(a, b)) + ' − ' + F(Math.min(a, b)), a: F(Math.abs(a - b)) };
    }
  });
  const mal10 = (n) => task({
    title: 'Mal und durch 10, 100, 1 000', instr: 'Verschiebe das Komma.', n, cols: 3, w: 4,
    gen: (rng) => {
      const x = dec(rng, R(rng, 1, 3), 99), p = rng.pick([10, 100, 1000]);
      return rng.int(2) ? { q: F(x) + ' · ' + F(p), a: F(x * p) } : { q: F(x) + ' : ' + F(p), a: F(x / p) };
    }
  });
  const malNat = (n) => task({
    title: 'Dezimalzahl mal und durch natürliche Zahl', instr: 'Rechne im Kopf oder am Rand.', n, cols: 2, w: 4,
    gen: (rng) => {
      const k = R(rng, 2, 9);
      if (rng.int(2)) { const x = dec(rng, R(rng, 1, 2), 30); return { q: F(x) + ' · ' + k, a: F(x * k) }; }
      const q = dec(rng, R(rng, 1, 2), 20); return { q: F(round(q * k, 3)) + ' : ' + k, a: F(q) };
    }
  });
  const ordnen = (n) => task({
    title: 'Ordnen', instr: 'Ordne der Größe nach, beginne mit der kleinsten Zahl.', n, cols: 1, w: 26,
    gen: (rng) => {
      const base = R(rng, 1, 9); const xs = []; while (xs.length < 5) { const v = round(base + R(rng, 1, 999) / 1000 * rng.pick([1, 1, 0.1]), 3); if (!xs.includes(v)) xs.push(v); }
      return { q: rng.shuffle(xs).map(F).join(' ; ') + '<br>{?}', a: xs.slice().sort((a, b) => a - b).map(F).join(' < ') };
    }
  });
  UB.simple({
    id: 'm-dezimal', fach: 'mathe', title: 'Dezimalzahlen', area: 'zahlen', klassen: [1, 2], img: 'MiniHoS_Lob_Daumen-Hoch',
    merk: 'Nach dem Komma kommen <b>Zehntel</b> (z), <b>Hundertstel</b> (h), <b>Tausendstel</b> (t): 3,475 = 3 + 4 z + 7 h + 5 t. Nullen am Ende ändern den Wert nicht: 2,5 = 2,50. Beim Vergleichen Stelle für Stelle von links vergleichen. Beim Addieren und Subtrahieren steht <b>Komma unter Komma</b>. · 10, 100, 1 000: Komma um 1, 2, 3 Stellen nach rechts; : 10, 100, 1 000: nach links.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kennst Zehntel, Hundertstel und Tausendstel.', 'Du kannst Dezimalzahlen vergleichen und runden.'], tasks: [stelle(6), vgl(9), rundD(6)] },
      2: { ichkann: ['Du kannst Dezimalzahlen addieren und subtrahieren.', 'Du kannst Dezimalzahlen ordnen.'], tasks: [kopfD(12), ordnen(3), rundD(4)] },
      3: { ichkann: ['Du kannst mit 10, 100 und 1 000 multiplizieren und dividieren.', 'Du kannst Dezimalzahlen mit natürlichen Zahlen multiplizieren und dividieren.'], tasks: [mal10(12), malNat(8)] }
    }
  });

  // ---------------------------------------------------------------- Brüche
  // gefärbtes Rechteck: n Teile, k gefärbt
  function shade(k, n) {
    const cols = n <= 6 ? n : (n % 4 === 0 ? 4 : n % 3 === 0 ? 3 : n % 2 === 0 ? n / 2 : n);
    const rows = Math.ceil(n / cols); const cw = 36 / cols, ch = Math.min(8, 24 / rows);
    let s = '';
    for (let i = 0; i < n; i++) { const x = 1 + (i % cols) * cw, y = 1 + Math.floor(i / cols) * ch; s += '<rect x="' + x.toFixed(2) + '" y="' + y.toFixed(2) + '" width="' + cw.toFixed(2) + '" height="' + ch.toFixed(2) + '" fill="' + (i < k ? '#93b4f5' : '#fff') + '" stroke="#111" stroke-width="0.35"/>'; }
    return '<svg class="mfig" width="38mm" height="' + (rows * ch + 2).toFixed(1) + 'mm" viewBox="0 0 38 ' + (rows * ch + 2).toFixed(1) + '" aria-hidden="true">' + s + '</svg>';
  }
  const teil = () => ({ type: 'fn', fn: (rng) => {
    const its = M.uniq(6, () => { const n = rng.pick([2, 3, 4, 5, 6, 8, 10, 12]); return { n, k: R(rng, 1, n - 1) }; }, x => x.k + '/' + x.n);
    const mk = (s) => '<div class="mgrid c3">' + its.map(x => '<div class="mi">' + shade(x.k, x.n) + 'gefärbt: ' + (s ? UB.sol(frac(x.k, x.n)) : UB.blank(3)) + '</div>').join('') + '</div>';
    return { title: 'Welcher Bruchteil ist gefärbt?', instr: 'Schreibe den Bruch auf.', body: mk(false), sol: mk(true) };
  } });
  const vonG = (n) => task({
    title: 'Bruchteile von Größen', instr: 'Berechne. Erst durch den Nenner, dann mal den Zähler.', n, cols: 2, w: 4,
    gen: (rng) => {
      const nn = rng.pick([2, 3, 4, 5, 8, 10]), z = R(rng, 1, nn - 1), unit = rng.pick(['€', 'kg', 'm', 'min', 'l']);
      const g = nn * R(rng, 2, 12) * (unit === 'min' ? 1 : 1);
      return { q: frac(z, nn) + ' von ' + g + ' ' + unit + ' = {?} ' + unit, a: F(g / nn * z), key: z + '/' + nn + g + unit };
    }
  });
  const erweitern = (n) => task({
    title: 'Erweitern und kürzen', instr: 'Ergänze die fehlende Zahl.', n, cols: 3, w: 2.5,
    gen: (rng) => {
      const nn = R(rng, 2, 9), z = R(rng, 1, nn - 1), k = R(rng, 2, 6);
      return rng.int(2) ? { q: frac(z, nn) + ' = ' + frac('{?}', nn * k), a: String(z * k), key: z + '/' + nn + 'e' + k } : { q: frac(z * k, nn * k) + ' = ' + frac('{?}', nn), a: String(z), key: z + '/' + nn + 'k' + k };
    }
  });
  const kuerzen = (n) => task({
    title: 'Vollständig kürzen', instr: 'Kürze so weit wie möglich.', n, cols: 4, w: 3,
    gen: (rng) => { let nn, z, k; do { nn = R(rng, 2, 12); z = R(rng, 1, nn - 1); } while (gcd(z, nn) !== 1); k = R(rng, 2, 8); return { q: frac(z * k, nn * k), a: frac(z, nn) }; }
  });
  const gemischt = (n) => task({
    title: 'Gemischte Zahlen', instr: 'Verwandle: unechter Bruch ↔ gemischte Zahl.', n, cols: 3, w: 3.5,
    gen: (rng) => {
      const nn = R(rng, 2, 9), w = R(rng, 1, 5), r = R(rng, 1, nn - 1), z = w * nn + r;
      return rng.int(2) ? { q: frac(z, nn), a: w + '&#8239;' + frac(r, nn) } : { q: w + '&#8239;' + frac(r, nn), a: frac(z, nn) };
    }
  });
  const gleichnamig = (n) => task({
    title: 'Gleichnamige Brüche', instr: 'Addiere oder subtrahiere. Kürze das Ergebnis, wenn möglich.', n, cols: 3, w: 3,
    gen: (rng) => {
      const nn = R(rng, 3, 12), a = R(rng, 1, nn - 1), b = R(rng, 1, nn - 1);
      return rng.int(2) || a === b ? { q: frac(a, nn) + ' + ' + frac(b, nn), a: M.mixed(a + b, nn) } : { q: frac(Math.max(a, b), nn) + ' − ' + frac(Math.min(a, b), nn), a: fracR(Math.abs(a - b), nn) };
    }
  });
  const ungleich = (n) => task({
    title: 'Ungleichnamige Brüche', instr: 'Mach die Brüche gleichnamig, dann rechne. Kürze das Ergebnis.', n, cols: 3, w: 3,
    gen: (rng) => {
      let n1, n2; do { n1 = R(rng, 2, 8); n2 = R(rng, 2, 9); } while (n1 === n2);
      const a = R(rng, 1, n1 - 1), b = R(rng, 1, n2 - 1); const L = lcm(n1, n2); const za = a * L / n1, zb = b * L / n2;
      if (rng.int(2) || za === zb) return { q: frac(a, n1) + ' + ' + frac(b, n2), a: M.mixed(za + zb, L) };
      return za > zb ? { q: frac(a, n1) + ' − ' + frac(b, n2), a: fracR(za - zb, L) } : { q: frac(b, n2) + ' − ' + frac(a, n1), a: fracR(zb - za, L) };
    }
  });
  const bruchDez = (n) => task({
    title: 'Bruch und Dezimalzahl', instr: 'Schreibe als Dezimalzahl.', n, cols: 4, w: 3.5,
    gen: (rng) => { const nn = rng.pick([2, 4, 5, 8, 10, 20, 25, 100]); const z = R(rng, 1, nn - 1); return { q: frac(z, nn), a: F(z / nn) }; }
  });
  UB.simple({
    id: 'm-brueche', fach: 'mathe', title: 'Brüche', area: 'zahlen', klassen: [1, 2], img: 'MiniHoS_Gesicht_Nachdenken-Idee',
    merk: 'Ein <b>Bruch</b> besteht aus Zähler (oben) und Nenner (unten): ' + 'drei Viertel = 3/4. Der Nenner sagt, in wie viele gleiche Teile das Ganze geteilt ist, der Zähler, wie viele Teile genommen werden. <b>Erweitern</b>: Zähler und Nenner mit derselben Zahl multiplizieren. <b>Kürzen</b>: Zähler und Nenner durch dieselbe Zahl dividieren. <b>Gleichnamige</b> Brüche (gleicher Nenner) addiert man, indem man die Zähler addiert. Ungleichnamige Brüche macht man zuerst gleichnamig (kgV der Nenner).',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Bruchteile erkennen und aufschreiben.', 'Du kannst Bruchteile von Größen berechnen.'], tasks: [teil(), vonG(8)] },
      2: { ichkann: ['Du kannst Brüche erweitern und kürzen.', 'Du kannst gleichnamige Brüche addieren und subtrahieren.'], tasks: [erweitern(9), kuerzen(8), gleichnamig(9)] },
      3: { ichkann: ['Du kannst ungleichnamige Brüche addieren und subtrahieren.', 'Du kannst Brüche in Dezimalzahlen umwandeln.'], tasks: [ungleich(9), gemischt(6), bruchDez(8)] }
    }
  });

  // ---------------------------------------------------------------- Winkel
  const ART = (d) => d < 90 ? 'spitzer Winkel' : d === 90 ? 'rechter Winkel' : d < 180 ? 'stumpfer Winkel' : d === 180 ? 'gestreckter Winkel' : d < 360 ? 'erhabener Winkel' : 'voller Winkel';
  const winkelBilder = (mode) => ({ type: 'fn', fn: (rng) => {
    const pool = mode === 'art' ? [20, 35, 45, 60, 75, 90, 90, 110, 130, 150, 165, 180, 210, 250, 300] : [25, 35, 40, 55, 65, 70, 85, 100, 115, 125, 140, 155, 170];
    const ds = rng.shuffle(pool).slice(0, 6);
    const mk = (s) => '<div class="mgrid c3">' + ds.map(d => '<div class="mi">' + angle(d) + (mode === 'art' ? (s ? UB.sol(ART(d)) : UB.blank(9)) : 'Schätzung: ' + UB.blank(2.5) + '° &nbsp; gemessen: ' + (s ? UB.sol(d + '°') : UB.blank(2.5) + '°')) + '</div>').join('') + '</div>';
    return mode === 'art'
      ? { title: 'Winkelarten', instr: 'Schreibe die Winkelart unter jeden Winkel.', body: mk(false), sol: mk(true) }
      : { title: 'Schätzen und messen', instr: 'Schätze zuerst, dann miss mit dem Geodreieck.', body: mk(false), sol: mk(true) };
  } });
  const winkelRechnen = (n) => task({
    title: 'Winkel berechnen', instr: 'Berechne den fehlenden Winkel.', n, cols: 2, w: 3,
    gen: (rng) => {
      const k = rng.int(3);
      if (k === 0) { const a = R(rng, 25, 100), b = R(rng, 20, 155 - a); return { q: 'Dreieck: α = ' + a + '°, β = ' + b + '°, γ = {?}', a: (180 - a - b) + '°' }; }
      if (k === 1) { const a = R(rng, 15, 165); return { q: 'Nebenwinkel von ' + a + '°: {?}', a: (180 - a) + '°' }; }
      const a = R(rng, 15, 345); return { q: 'Ergänze ' + a + '° auf einen vollen Winkel: {?}', a: (360 - a) + '°' };
    }
  });
  const artZahl = (n) => task({
    title: 'Winkelgrößen', instr: 'Welche Winkelart ist das?', n, cols: 2, w: 9,
    gen: (rng) => { const d = rng.pick([R(rng, 5, 89), 90, R(rng, 91, 179), 180, R(rng, 181, 359), 360]); return { q: d + '° → {?}', a: ART(d), key: d }; }
  });
  UB.simple({
    id: 'm-winkel', fach: 'mathe', title: 'Winkel', area: 'geometrie', klassen: [1], img: 'MiniHoS_Forschen_Lupe',
    merk: '<b>Winkelarten</b>: spitzer Winkel (kleiner als 90°), rechter Winkel (90°), stumpfer Winkel (zwischen 90° und 180°), gestreckter Winkel (180°), erhabener Winkel (zwischen 180° und 360°), voller Winkel (360°). Winkel misst man mit dem Geodreieck. Im <b>Dreieck</b> beträgt die Winkelsumme 180°. <b>Nebenwinkel</b> ergänzen einander auf 180°.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Winkelarten unterscheiden.'], tasks: [winkelBilder('art'), artZahl(8)] },
      2: { ichkann: ['Du kannst Winkel schätzen und messen.'], tasks: [winkelBilder('mess')] },
      3: { ichkann: ['Du kannst fehlende Winkel berechnen.', 'Du kennst die Winkelsumme im Dreieck.'], tasks: [winkelRechnen(8), winkelBilder('art')] }
    }
  });
  // ================================================================ Stufe 4 · Profi
  const { L4, text, mixed } = M;
  const F2 = (x) => fmt(round(x, 2), 2);
  const mulDec = (n) => task({
    title: 'Dezimalzahlen multiplizieren und dividieren', instr: 'Rechne am Rand. Achte auf die Anzahl der Nachkommastellen.', n, cols: 2, w: 5,
    gen: (rng) => {
      if (rng.int(2)) { const a = dec(rng, 1, 20), b = dec(rng, R(rng, 1, 2), 9); return { q: F(a) + ' · ' + F(b), a: F(round(a * b, 4)) }; }
      const d = rng.pick([0.2, 0.4, 0.5, 0.6, 0.8, 1.2, 1.5, 2.5, 0.25, 0.05]), q = R(rng, 3, 60) + rng.pick([0, 0.5]);
      return { q: F(round(q * d, 4)) + ' : ' + F(d), a: F(q) };
    }
  });
  const kette = (n) => task({
    title: 'Rechenketten mit Dezimalzahlen', instr: 'Klammer zuerst, dann Punkt vor Strich.', n, cols: 2, w: 4,
    gen: (rng) => {
      const a = dec(rng, 1, 20), b = dec(rng, 1, 20), c = R(rng, 2, 9), k = rng.int(3);
      if (k === 0) return { q: '(' + F(a) + ' + ' + F(b) + ') · ' + c, a: F(round((a + b) * c, 4)) };
      if (k === 1) return { q: F(a) + ' + ' + F(b) + ' · ' + c, a: F(round(a + b * c, 4)) };
      const x = round(a * c, 2); return { q: F(x) + ' : ' + c + ' − ' + F(Math.min(a, b) / 2), a: F(round(a - Math.min(a, b) / 2, 4)) };
    }
  });
  const TX_D4 = [
    (r) => { const p1 = R(r, 89, 349) / 100, n1 = R(r, 2, 4), p2 = R(r, 109, 599) / 100, n2 = R(r, 2, 3), p3 = R(r, 49, 299) / 100; const s = round(p1 * n1 + p2 * n2 + p3, 2); return { q: 'Mia kauft ' + n1 + ' Packungen Nudeln zu je ' + F2(p1) + ' €, ' + n2 + ' Gläser Sugo zu je ' + F2(p2) + ' € und einen Parmesan um ' + F2(p3) + ' €. Sie zahlt mit einem 50-€-Schein. Wie viel bekommt sie zurück?', a: n1 + ' · ' + F2(p1) + ' + ' + n2 + ' · ' + F2(p2) + ' + ' + F2(p3) + ' = ' + F2(s) + ' €; 50 − ' + F2(s) + ' = ' + F2(round(50 - s, 2)) + ' €' }; },
    (r) => { const l = round(R(r, 250, 550) / 10, 1), p = R(r, 1459, 1799) / 1000; return { q: 'Herr Kern tankt ' + F(l) + ' l Benzin. Ein Liter kostet ' + fmt(p, 3) + ' €. Wie viel muss er zahlen (auf Cent gerundet)?', a: F(l) + ' · ' + fmt(p, 3) + ' = ' + F(round(l * p, 4)) + ' ≈ ' + F2(round(l * p, 2)) + ' €' }; },
    (r) => { const m = R(r, 2, 6) * 0.5 + 0.5, p = R(r, 590, 1490) / 100; return { q: 'Ein Meter Stoff kostet ' + F2(p) + ' €. Wie viel kosten ' + F(m) + ' m?', a: F(m) + ' · ' + F2(p) + ' = ' + F(round(m * p, 3)) + ' ≈ ' + F2(round(m * p, 2)) + ' €' }; },
    (r) => { const g = rng4(r, [0.25, 0.5, 0.75, 1.5]), k = R(r, 6, 24); const t = round(g * k, 2); return { q: 'Für einen Ausflug werden ' + F(t) + ' l Saft in Flaschen zu ' + F(g) + ' l abgefüllt. Wie viele Flaschen werden voll?', a: F(t) + ' : ' + F(g) + ' = ' + k + ' Flaschen' }; }
  ];
  function rng4(r, arr) { return r.pick(arr); }
  L4('m-dezimal', ['Du multiplizierst und dividierst Dezimalzahlen.', 'Du löst Rechenketten mit Dezimalzahlen.', 'Du löst Sachaufgaben mit Geld und Maßen.'],
    [mulDec(8), kette(6), text('Sachaufgaben', 'Schreibe die Rechnung und einen Antwortsatz.', TX_D4, 'd4', 2)]);

  const mulBr = (n) => task({
    title: 'Brüche multiplizieren und dividieren', instr: 'Kürze vor dem Ausrechnen, wenn möglich. Gib das Ergebnis vollständig gekürzt an.', n, cols: 3, w: 3,
    gen: (rng) => {
      let n1, n2, a, b; do { n1 = R(rng, 2, 9); n2 = R(rng, 2, 9); a = R(rng, 1, n1 - 1); b = R(rng, 1, n2 - 1); } while (gcd(a, n1) > 1 || gcd(b, n2) > 1);
      if (rng.int(2)) return { q: frac(a, n1) + ' · ' + frac(b, n2), a: mixed(a * b, n1 * n2) };
      return { q: frac(a, n1) + ' : ' + frac(b, n2), a: mixed(a * n2, n1 * b) };
    }
  });
  const gemRech = (n) => task({
    title: 'Mit gemischten Zahlen rechnen', instr: 'Rechne. Gib das Ergebnis als gemischte Zahl an.', n, cols: 2, w: 3.5,
    gen: (rng) => {
      let n1, n2; do { n1 = R(rng, 2, 6); n2 = R(rng, 2, 8); } while (n1 === n2);
      const w1 = R(rng, 1, 5), w2 = R(rng, 1, 4), a = R(rng, 1, n1 - 1), b = R(rng, 1, n2 - 1), L = lcm(n1, n2);
      const z1 = (w1 * n1 + a) * L / n1, z2 = (w2 * n2 + b) * L / n2;
      if (rng.int(2) || z1 <= z2) return { q: w1 + '&#8239;' + frac(a, n1) + ' + ' + w2 + '&#8239;' + frac(b, n2), a: mixed(z1 + z2, L) };
      return { q: w1 + '&#8239;' + frac(a, n1) + ' − ' + w2 + '&#8239;' + frac(b, n2), a: mixed(z1 - z2, L) };
    }
  });
  const TX_B4 = [
    (r) => { const t = rng4(r, [24, 30, 36, 48, 60]); return { q: 'Eine Klasse hat ' + t + ' € in der Klassenkasse. Ein Drittel wird für den Wandertag ausgegeben, ein Viertel des Rests für Bastelmaterial. Wie viel Geld bleibt übrig?', a: t + ' : 3 = ' + t / 3 + ' €; Rest ' + (t - t / 3) + ' €; ' + (t - t / 3) + ' : 4 = ' + (t - t / 3) / 4 + ' €; übrig: ' + (t - t / 3 - (t - t / 3) / 4) + ' €' }; },
    (r) => { const k = rng4(r, [16, 24, 32]); return { q: 'In einer Klasse sind ' + k + ' Kinder. Drei Viertel fahren mit dem Bus, ein Achtel kommt zu Fuß, der Rest mit dem Rad. Wie viele Kinder fahren mit dem Rad?', a: 'Bus: ' + k * 3 / 4 + ', zu Fuß: ' + k / 8 + '; Rad: ' + k + ' − ' + k * 3 / 4 + ' − ' + k / 8 + ' = ' + k / 8 + ' Kinder' }; },
    (r) => { const n = rng4(r, [3, 4, 5, 6]), z = R(r, 1, n - 1), x = R(r, 2, 9) * n; return { q: frac(z, n) + ' einer Strecke sind ' + z * x / n + ' km. Wie lang ist die ganze Strecke?', a: z * x / n + ' : ' + z + ' · ' + n + ' = ' + x + ' km' }; },
    (r) => { const g = rng4(r, [2, 3, 4]); return { q: 'Ein Rezept braucht ' + frac(3, 4) + ' l Milch für 4 Personen. Wie viel Milch braucht man für ' + 4 * g + ' Personen?', a: frac(3, 4) + ' · ' + g + ' = ' + mixed(3 * g, 4) + ' l' }; }
  ];
  L4('m-brueche', ['Du multiplizierst und dividierst Brüche.', 'Du rechnest mit gemischten Zahlen.', 'Du löst Sachaufgaben mit Bruchteilen.'],
    [mulBr(9), gemRech(4), text('Sachaufgaben', 'Schreibe die Rechnung und einen Antwortsatz.', TX_B4, 'b4', 2)]);

  const winkel4 = (n) => task({
    title: 'Winkel berechnen', instr: 'Berechne die gesuchten Winkel.', n, cols: 1, w: 4,
    gen: (rng) => {
      const k = rng.int(4);
      if (k === 0) { const b = R(rng, 15, 55); return { q: 'Im Dreieck ist α doppelt so groß wie β, γ = ' + (180 - 3 * b) + '°. &nbsp; α = {?} &nbsp; β = {?}', a: [2 * b + '°', b + '°'] }; }
      if (k === 1) { const a = R(rng, 50, 120), b = R(rng, 50, 120), c = R(rng, 50, Math.min(140, 330 - a - b)); return { q: 'Viereck: α = ' + a + '°, β = ' + b + '°, γ = ' + c + '°, δ = {?}', a: (360 - a - b - c) + '°' }; }
      if (k === 2) { const a = R(rng, 20, 160); return { q: 'Zwei Geraden schneiden einander, ein Winkel ist ' + a + '°. Nebenwinkel {?} &nbsp; Scheitelwinkel {?}', a: [(180 - a) + '°', a + '°'] }; }
      const a = R(rng, 30, 75); return { q: 'Gleichschenkeliges Dreieck: Die beiden Basiswinkel sind je ' + a + '° groß. Spitze γ = {?}', a: (180 - 2 * a) + '°' };
    }
  });
  const uhr = (n) => task({
    title: 'Winkel auf der Uhr', instr: 'Welchen Winkel schließen Stunden- und Minutenzeiger ein? Gib den kleineren Winkel an. Tipp: Der Stundenzeiger wandert in 1 Minute um 0,5°.', n, cols: 2, w: 3,
    gen: (rng) => {
      const h = R(rng, 1, 12), m = rng.pick([0, 0, 15, 30, 30, 45, 10, 20, 40]); let d = Math.abs(30 * (h % 12) - 5.5 * m); if (d > 180) d = 360 - d;
      return { q: h + ':' + String(m).padStart(2, '0') + ' Uhr → {?}', a: F(d) + '°' };
    }
  });
  L4('m-winkel', ['Du berechnest Winkel in Dreieck und Viereck.', 'Du kennst Neben- und Scheitelwinkel.', 'Du berechnest Winkel zwischen Uhrzeigern.'],
    [winkel4(6), uhr(6), winkelBilder('art')]);

})();
