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
})();
