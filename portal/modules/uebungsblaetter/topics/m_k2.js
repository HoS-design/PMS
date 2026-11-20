/* Mathematik 2./3. Klasse: Prozent, Schlussrechnung, Gleichungen, Dreieck und Vierecke, Statistik */
(function () {
  const M = UB.M, { R, fmt, round, frac, task } = M;
  const F = (x) => fmt(round(x, 6));
  const E = (x) => fmt(round(x, 2), Number.isInteger(round(x, 2)) ? 0 : 2);   // Euro-Beträge
  const svg = (w, h, inner) => '<svg class="mfig" width="' + w + 'mm" height="' + h + 'mm" viewBox="0 0 ' + w + ' ' + h + '" aria-hidden="true">' + inner + '</svg>';
  const tx = (x, y, t, a) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (a || 'middle') + '" font-size="3.5">' + t + '</text>';
  const POLY = (pts, fill) => '<polygon points="' + pts + '" fill="' + (fill || '#f3f6ff') + '" stroke="#111" stroke-width="0.45"/>';
  const DASH = (x1, y1, x2, y2) => '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#1d4ed8" stroke-width="0.4" stroke-dasharray="1.2 0.9"/>';

  // ---------------------------------------------------------------- Prozent
  const NICE = [[1, 2, 50], [1, 4, 25], [3, 4, 75], [1, 5, 20], [2, 5, 40], [3, 5, 60], [4, 5, 80], [1, 10, 10], [3, 10, 30], [7, 10, 70], [9, 10, 90], [1, 20, 5], [1, 8, 12.5], [1, 100, 1], [3, 20, 15], [1, 25, 4]];
  const umw = (n) => task({
    title: 'Bruch, Dezimalzahl, Prozent', instr: 'Ergänze die fehlenden Darstellungen.', n, cols: 1, w: 4,
    gen: (rng) => {
      const [z, nn, p] = rng.pick(NICE); const k = rng.int(3);
      const parts = [frac(z, nn), F(z / nn), F(p) + ' %'];
      const q = parts.map((x, i) => i === k ? x : '{?}').join(' = ');
      return { q, a: parts.filter((x, i) => i !== k), key: z + '/' + nn };
    }
  });
  const pVon = (n, level) => task({
    title: 'Prozent von', instr: 'Berechne den Prozentanteil.', n, cols: 2, w: 4,
    gen: (rng, lv) => {
      const p = rng.pick(lv === 1 ? [10, 20, 25, 50, 75, 5] : [12, 15, 30, 35, 40, 60, 8, 3, 120]);
      const unit = rng.pick(['€', 'kg', 'km', 'Kinder', 'l']);
      const G = R(rng, 2, 40) * (p % 10 === 0 || p === 25 || p === 75 ? 20 : 100) / (unit === 'Kinder' ? 10 : 1);
      const Gi = unit === 'Kinder' ? Math.round(G) * (100 / gcdP(p)) : G;
      return { q: p + ' % von ' + F(Gi) + ' ' + unit, a: F(Gi * p / 100) + ' ' + unit, key: p + 'v' + Gi + unit };
    }
  });
  function gcdP(p) { let a = p, b = 100; while (b) { [a, b] = [b, a % b]; } return a; }
  const dreisatzP = (n) => task({
    title: 'Grundwert, Prozentsatz, Prozentanteil', instr: 'Berechne die gesuchte Größe.', n, cols: 1, w: 5,
    gen: (rng) => {
      const p = rng.pick([5, 10, 12, 15, 20, 25, 30, 40, 60, 75, 80]); const G = R(rng, 2, 30) * (100 / gcdP(p)) * rng.pick([1, 2, 5]); const A = G * p / 100;
      const k = rng.int(3);
      if (k === 0) return { q: 'G = ' + F(G) + ' €, p = ' + p + ' %, A = {?}', a: F(A) + ' €' };
      if (k === 1) return { q: 'G = ' + F(G) + ' €, A = ' + F(A) + ' €, p = {?}', a: p + ' %' };
      return { q: 'A = ' + F(A) + ' €, p = ' + p + ' %, G = {?}', a: F(G) + ' €' };
    }
  });
  const TX_P = [
    (r) => { const g = R(r, 4, 30) * 10, p = r.pick([10, 20, 25, 30]); return { q: 'Ein Fahrrad kostet ' + g + ' €. Im Ausverkauf gibt es ' + p + ' % Rabatt. Wie viel kostet es jetzt?', a: g + ' · ' + p + ' : 100 = ' + E(g * p / 100) + ' €, ' + g + ' − ' + E(g * p / 100) + ' = ' + E(g * (100 - p) / 100) + ' € – Es kostet jetzt ' + E(g * (100 - p) / 100) + ' €.' }; },
    (r) => { const n = R(r, 2, 5) * 5 + 20, k = r.pick([20, 40, 60]); const a = n * k / 100; if (!Number.isInteger(a)) return { q: 'In einer Klasse sind 25 Kinder. 8 davon fahren mit dem Rad zur Schule. Wie viel Prozent sind das?', a: '8 : 25 = 0,32 = 32 % – Es sind 32 %.', key: 'rad' }; return { q: 'In einer Schule mit ' + n + ' Kindern der ersten Klassen haben ' + a + ' Kinder ein Haustier. Wie viel Prozent sind das?', a: a + ' : ' + n + ' = ' + F(a / n) + ' = ' + k + ' % – Es sind ' + k + ' %.' }; },
    (r) => { const netto = R(r, 3, 40) * 5; return { q: 'Ein Spiel kostet ohne Umsatzsteuer ' + netto + ' €. Dazu kommen 20 % Umsatzsteuer. Wie viel kostet es mit Steuer?', a: netto + ' · 1,2 = ' + E(netto * 1.2) + ' € – Es kostet ' + E(netto * 1.2) + ' €.' }; },
    (r) => { const alt = R(r, 2, 9) * 100, p = r.pick([5, 10, 15, 20]); return { q: 'Ein Verein hatte ' + alt + ' Mitglieder. Die Zahl ist um ' + p + ' % gestiegen. Wie viele Mitglieder hat er jetzt?', a: alt + ' · ' + F(1 + p / 100) + ' = ' + F(alt * (1 + p / 100)) + ' – Er hat jetzt ' + F(alt * (1 + p / 100)) + ' Mitglieder.' }; },
    (r) => { const a = R(r, 3, 12) * 3, p = r.pick([25, 50, 75]); const g = a * 100 / p; return { q: 'Lena hat schon ' + a + ' Seiten gelesen. Das sind ' + p + ' % des Buches. Wie viele Seiten hat das Buch?', a: a + ' · 100 : ' + p + ' = ' + g + ' – Das Buch hat ' + g + ' Seiten.' }; }
  ];
  const textP = (n) => task({ title: 'Sachaufgaben', instr: 'Schreibe die Rechnung und einen Antwortsatz.', n, mode: 'lines', lines: 2, gen: (rng) => rng.pick(TX_P)(rng) });
  UB.simple({
    id: 'm-prozent', fach: 'mathe', title: 'Prozentrechnung', area: 'zahlen', klassen: [2, 3], img: 'MiniHoS_Lob_Daumen-Hoch',
    merk: '<b>Prozent</b> heißt „von Hundert“: 1 % = 1/100 = 0,01. 50 % = 1/2, 25 % = 1/4, 10 % = 1/10. <b>Grundwert</b> G (das Ganze), <b>Prozentsatz</b> p %, <b>Prozentanteil</b> A (auch Prozentwert). A = G · p : 100, p = A : G · 100, G = A · 100 : p. Rabatt wird abgezogen, Umsatzsteuer (20 %) dazugerechnet.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Brüche, Dezimalzahlen und Prozente umwandeln.', 'Du kannst einfache Prozentanteile berechnen.'], tasks: [umw(6), pVon(8)] },
      2: { ichkann: ['Du kannst Grundwert, Prozentsatz und Prozentanteil berechnen.'], tasks: [dreisatzP(8), pVon(6)] },
      3: { ichkann: ['Du kannst Sachaufgaben mit Prozent lösen (Rabatt, Umsatzsteuer, Zunahme).'], tasks: [textP(4), dreisatzP(5)] }
    }
  });

  // ---------------------------------------------------------------- Schlussrechnung
  const DIR = [
    (r) => { const n = R(r, 2, 6), p = r.pick([0.8, 1.2, 1.5, 2.5, 3.4, 0.9]), m = R(r, 7, 15); return { q: n + ' Hefte kosten ' + E(n * p) + ' €. Wie viel kosten ' + m + ' Hefte?', a: '1 Heft: ' + E(n * p) + ' : ' + n + ' = ' + E(p) + ' €, ' + m + ' Hefte: ' + E(p) + ' · ' + m + ' = ' + E(p * m) + ' €' }; },
    (r) => { const l = R(r, 4, 9), km = l * R(r, 12, 18), x = R(r, 20, 60); return { q: 'Ein Auto braucht für ' + km + ' km ' + l + ' l Benzin. Wie viel braucht es für ' + (x * 10) + ' km?', a: '1 km: ' + l + ' : ' + km + ' l, ' + (x * 10) + ' km: ' + l + ' · ' + (x * 10) + ' : ' + km + ' = ' + F(round(l * x * 10 / km, 2)) + ' l (gerundet)' }; },
    (r) => { const h = R(r, 3, 6), lohn = R(r, 9, 14), m = R(r, 7, 20); return { q: 'Für ' + h + ' Stunden Babysitten bekommt Mia ' + h * lohn + ' €. Wie viel bekommt sie für ' + m + ' Stunden?', a: '1 h: ' + h * lohn + ' : ' + h + ' = ' + lohn + ' €, ' + m + ' h: ' + lohn + ' · ' + m + ' = ' + lohn * m + ' €' }; },
    (r) => { const kg = R(r, 2, 5), p = r.pick([1.8, 2.4, 3.2, 4.5]), m = R(r, 6, 12); return { q: kg + ' kg Äpfel kosten ' + E(kg * p) + ' €. Wie viel kosten ' + m + ' kg?', a: '1 kg: ' + E(p) + ' €, ' + m + ' kg: ' + E(p * m) + ' €' }; }
  ];
  const IND = [
    (r) => { const a = r.pick([2, 3, 4, 6]), t = r.pick([6, 8, 12, 24]), b = r.pick([1, 2, 3, 4, 6, 8, 12].filter(x => x !== a && (a * t) % x === 0)); return { q: a + ' Arbeiter brauchen für einen Auftrag ' + t + ' Tage. Wie lange brauchen ' + b + ' Arbeiter?', a: '1 Arbeiter: ' + a + ' · ' + t + ' = ' + a * t + ' Tage, ' + b + ' Arbeiter: ' + a * t + ' : ' + b + ' = ' + (a * t / b) + ' Tage' }; },
    (r) => { const v = r.pick([40, 50, 60, 80, 100]), t = r.pick([2, 3, 4, 6]), w = r.pick([30, 40, 60, 80, 120].filter(x => x !== v)); const mins = Math.round(v * t / w * 60); return { q: 'Bei ' + v + ' km/h dauert eine Fahrt ' + t + ' Stunden. Wie lange dauert sie bei ' + w + ' km/h?', a: 'Strecke: ' + v + ' · ' + t + ' = ' + v * t + ' km, ' + v * t + ' : ' + w + ' = ' + Math.floor(mins / 60) + ' h' + (mins % 60 ? ' ' + mins % 60 + ' min' : '') }; },
    (r) => { const k = r.pick([12, 18, 24, 30]), t = r.pick([6, 8, 10, 12]), m = r.pick([2, 3, 4, 5, 6, 8, 9, 10, 15, 20].filter(x => x !== k && (k * t) % x === 0 && x < k * 2)); return { q: 'Ein Futtervorrat reicht für ' + k + ' Hühner ' + t + ' Tage. Wie lange reicht er für ' + m + ' Hühner?', a: k + ' · ' + t + ' = ' + k * t + ', ' + k * t + ' : ' + m + ' = ' + (k * t / m) + ' Tage' }; },
    (r) => { const p = r.pick([4, 5, 6, 8]), e = r.pick([30, 40, 45, 60]), q = r.pick([2, 3, 10, 12, 15, 20].filter(x => x !== p && (p * e) % x === 0)); return { q: 'Wenn ' + p + ' Kinder sich die Kosten teilen, zahlt jedes ' + e + ' €. Wie viel zahlt jedes Kind, wenn sich ' + q + ' Kinder die Kosten teilen?', a: 'Gesamt: ' + p + ' · ' + e + ' = ' + p * e + ' €, ' + p * e + ' : ' + q + ' = ' + E(p * e / q) + ' €' }; }
  ];
  const dirTask = (n) => task({ title: 'Direkt proportional', instr: 'Je mehr, desto mehr. Rechne über die Einheit.', n, mode: 'lines', lines: 2, gen: (rng) => rng.pick(DIR)(rng) });
  const indTask = (n) => task({ title: 'Indirekt proportional', instr: 'Je mehr, desto weniger. Rechne über die Einheit.', n, mode: 'lines', lines: 2, gen: (rng) => rng.pick(IND)(rng) });
  const mixTask = (n) => task({ title: 'Direkt oder indirekt?', instr: 'Entscheide zuerst, dann rechne. Schreibe „direkt“ oder „indirekt“ dazu.', n, mode: 'lines', lines: 2,
    gen: (rng) => { const d = rng.int(2); const x = rng.pick(d ? DIR : IND)(rng); return { q: x.q, a: (d ? 'direkt: ' : 'indirekt: ') + x.a }; } });
  const tabelle = () => ({ type: 'fn', fn: (rng) => {
    const p = rng.pick([1.5, 2, 2.5, 3, 4, 0.5]); const xs = [1, 2, 3, 5, 8, 10];
    const show = xs.map((x, i) => i === 1 || i === 3);
    const mk = (s) => UB.table(['Anzahl'].concat(xs.map(String)), [['Preis (€)'].concat(xs.map((x, i) => show[i] ? E(x * p) : s ? UB.sol(E(x * p)) : ''))], 'center-cols');
    return { title: 'Wertetabelle', instr: 'Die Größen sind direkt proportional. Ergänze die Tabelle.', body: mk(false), sol: mk(true) };
  } });
  UB.simple({
    id: 'm-schlussrechnung', fach: 'mathe', title: 'Schlussrechnung', area: 'variablen', klassen: [2, 3], img: 'MiniHoS_Gesicht_Nachdenken-Idee',
    merk: '<b>Direkt proportional</b>: Je mehr, desto mehr (doppelt so viele Hefte – doppelter Preis). <b>Indirekt proportional</b>: Je mehr, desto weniger (doppelt so viele Arbeiter – halbe Zeit). <b>Schlussrechnung</b> über die Einheit: 1. Was weiß ich? 2. Schluss auf die Einheit (1 Stück, 1 Stunde …): direkt dividieren, indirekt multiplizieren. 3. Schluss auf die gesuchte Menge: direkt multiplizieren, indirekt dividieren.',
    pools: {},
    levels: {
      1: { ichkann: ['Du erkennst direkt proportionale Größen.', 'Du kannst Schlussrechnungen über die Einheit lösen.'], tasks: [tabelle(), dirTask(4)] },
      2: { ichkann: ['Du kannst indirekt proportionale Aufgaben lösen.'], tasks: [indTask(4), dirTask(2)] },
      3: { ichkann: ['Du unterscheidest direkt und indirekt proportional.'], tasks: [mixTask(5)] }
    }
  });

  // ---------------------------------------------------------------- Gleichungen
  const sgn = (b) => b < 0 ? ' − ' + Math.abs(b) : ' + ' + b;
  const gl = (n) => task({
    title: 'Löse die Gleichungen.', instr: 'Rechne am Rand und mach die Probe.', n, cols: 3, w: 4,
    gen: (rng, level) => {
      const x = R(rng, 2, level === 3 ? 15 : 12);
      if (level === 1) {
        const k = rng.int(4), a = R(rng, 2, 9);
        if (k === 0) { const b = R(rng, 3, 40); return { q: 'x + ' + b + ' = ' + (x + b), a: 'x = ' + x }; }
        if (k === 1) { const b = R(rng, 2, x + 20); const xx = x + b; return { q: 'x − ' + b + ' = ' + x, a: 'x = ' + xx, key: 'm' + b + x }; }
        if (k === 2) return { q: a + 'x = ' + a * x, a: 'x = ' + x };
        return { q: 'x : ' + a + ' = ' + x, a: 'x = ' + a * x };
      }
      if (level === 2) {
        const a = R(rng, 2, 9), b = R(rng, 1, 30) * (rng.int(2) ? 1 : -1);
        if (a * x + b < 0) return { q: a + 'x + ' + Math.abs(b) + ' = ' + (a * x + Math.abs(b)), a: 'x = ' + x };
        return { q: a + 'x' + sgn(b) + ' = ' + (a * x + b), a: 'x = ' + x };
      }
      const a = R(rng, 3, 9), c = R(rng, 1, a - 1), b = R(rng, 1, 20), d = (a - c) * x + b;
      if (rng.int(2)) return { q: a + 'x + ' + b + ' = ' + c + 'x + ' + d, a: 'x = ' + x };
      const k = R(rng, 2, 5), m = R(rng, 1, 9); const rhs = k * (x + m) - (k > 2 ? 0 : 0);
      return { q: k + ' · (x + ' + m + ') = ' + rhs, a: 'x = ' + x };
    }
  });
  const TX_G = [
    (r) => { const x = R(r, 3, 20), a = R(r, 2, 5), b = R(r, 1, 20); return { q: 'Ich denke mir eine Zahl, nehme sie mal ' + a + ' und addiere ' + b + '. Ich erhalte ' + (a * x + b) + '. Wie heißt die Zahl?', a: a + 'x + ' + b + ' = ' + (a * x + b) + ' → x = ' + x }; },
    (r) => { const x = R(r, 5, 30), d = R(r, 2, 12); return { q: 'Max ist ' + d + ' Jahre älter als seine Schwester. Zusammen sind sie ' + (2 * x + d) + ' Jahre alt. Wie alt ist die Schwester?', a: 'x + x + ' + d + ' = ' + (2 * x + d) + ' → x = ' + x + ' – Die Schwester ist ' + x + ' Jahre alt.' }; },
    (r) => { const x = R(r, 3, 12), b = R(r, 4, 15); return { q: 'Ein Rechteck ist ' + b + ' cm lang. Sein Umfang beträgt ' + 2 * (x + b) + ' cm. Wie breit ist es?', a: '2 · (' + b + ' + x) = ' + 2 * (x + b) + ' → x = ' + x + ' cm' }; },
    (r) => { const x = R(r, 2, 8), p = R(r, 2, 6), g = R(r, 10, 30); return { q: 'Lena kauft ' + p + ' gleiche Hefte und einen Rucksack um ' + g + ' €. Sie zahlt ' + (p * x + g) + ' €. Wie viel kostet ein Heft?', a: p + 'x + ' + g + ' = ' + (p * x + g) + ' → x = ' + x + ' €' }; }
  ];
  const textG = (n) => task({ title: 'Textgleichungen', instr: 'Stelle eine Gleichung auf und löse sie.', n, mode: 'lines', lines: 2, gen: (rng) => rng.pick(TX_G)(rng) });
  UB.simple({
    id: 'm-gleichungen', fach: 'mathe', title: 'Gleichungen', area: 'variablen', klassen: [2, 3, 4], img: 'MiniHoS_Gesicht_Nachdenken-Frage',
    merk: 'Eine <b>Gleichung</b> ist wie eine Waage: Was du auf einer Seite tust, musst du auch auf der anderen Seite tun. Umkehroperationen: + ↔ −, · ↔ :. Ziel: x allein auf einer Seite. Beispiel: 3x + 5 = 20 | − 5 → 3x = 15 | : 3 → x = 5. <b>Probe</b>: 3 · 5 + 5 = 20 ✓.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst einfache Gleichungen mit einer Rechenoperation lösen.'], tasks: [gl(12)] },
      2: { ichkann: ['Du kannst Gleichungen in zwei Schritten lösen.', 'Du machst die Probe.'], tasks: [gl(12), textG(2)] },
      3: { ichkann: ['Du kannst Gleichungen mit x auf beiden Seiten und mit Klammern lösen.', 'Du kannst Textgleichungen aufstellen.'], tasks: [gl(9), textG(3)] }
    }
  });

  // ---------------------------------------------------------------- Dreieck und Vierecke
  const FIG = {
    dreieck: (g, h) => svg(48, 35, POLY('4,26 40,26 27,6') + DASH(27, 6, 27, 26) + tx(22, 31.5, 'g = ' + g) + tx(25.8, 21, 'h = ' + h, 'end')),
    parallelogramm: (g, h) => svg(50, 35, POLY('4,26 34,26 44,6 14,6') + DASH(14, 6, 14, 26) + tx(19, 31.5, 'g = ' + g) + tx(15.5, 17, 'h = ' + h, 'start')),
    trapez: (a, c, h) => svg(50, 36, POLY('4,28 44,28 34,10 14,10') + DASH(14, 10, 14, 28) + tx(24, 33, 'a = ' + a) + tx(24, 7.5, 'c = ' + c) + tx(15.5, 20, 'h = ' + h, 'start')),
    raute: (e, f) => svg(64, 36, POLY('24,3 44,17 24,31 4,17') + DASH(4, 17, 44, 17) + DASH(24, 3, 24, 31) + tx(46, 18.2, 'e = ' + e, 'start') + tx(24, 35, 'f = ' + f))
  };
  const flaeche = (n, kinds) => ({ type: 'fn', fn: (rng) => {
    const unit = rng.pick(['cm', 'm']);
    let idx = 0; const its = M.uniq(n, () => {
      const k = kinds[idx++ % kinds.length];
      if (k === 'dreieck') { const g = R(rng, 4, 16), h = R(rng, 2, 12) * (g % 2 ? 2 : 1); return { k, fig: FIG.dreieck(g + ' ' + unit, h + ' ' + unit), A: g * h / 2, name: 'Dreieck' }; }
      if (k === 'parallelogramm') { const g = R(rng, 4, 15), h = R(rng, 3, 12); return { k, fig: FIG.parallelogramm(g + ' ' + unit, h + ' ' + unit), A: g * h, name: 'Parallelogramm' }; }
      if (k === 'trapez') { const a = R(rng, 8, 16), c = R(rng, 3, a - 2), h = R(rng, 2, 10) * ((a + c) % 2 ? 2 : 1); return { k, fig: FIG.trapez(a + ' ' + unit, c + ' ' + unit, h + ' ' + unit), A: (a + c) * h / 2, name: 'Trapez' }; }
      const e = R(rng, 4, 14), f = R(rng, 2, 10) * (e % 2 ? 2 : 1); return { k, fig: FIG.raute(e + ' ' + unit, f + ' ' + unit), A: e * f / 2, name: 'Raute' };
    }, x => x.fig);
    const mk = (s) => '<div class="mgrid c2">' + its.map(x => '<div class="mi">' + x.fig + x.name + ': A = ' + (s ? UB.sol(F(x.A) + ' ' + unit + '²') : UB.blank(5)) + '</div>').join('') + '</div>';
    return { title: 'Flächeninhalt', instr: 'Berechne den Flächeninhalt. Schreib die Formel dazu.', body: mk(false), sol: mk(true) };
  } });
  const rueck = (n) => task({
    title: 'Rückwärts rechnen', instr: 'Berechne die fehlende Größe.', n, cols: 1, w: 5,
    gen: (rng) => {
      const k = rng.int(3);
      if (k === 0) { const g = R(rng, 4, 20), h = R(rng, 2, 10) * 2; return { q: 'Dreieck: A = ' + g * h / 2 + ' cm², g = ' + g + ' cm, h = {?}', a: h + ' cm' }; }
      if (k === 1) { const g = R(rng, 4, 20), h = R(rng, 2, 15); return { q: 'Parallelogramm: A = ' + g * h + ' m², h = ' + h + ' m, g = {?}', a: g + ' m' }; }
      const a = R(rng, 8, 20), c = R(rng, 2, a - 2), h = R(rng, 2, 8) * 2; return { q: 'Trapez: A = ' + (a + c) * h / 2 + ' cm², a = ' + a + ' cm, c = ' + c + ' cm, h = {?}', a: h + ' cm' };
    }
  });
  UB.simple({
    id: 'm-vierecke', fach: 'mathe', title: 'Dreieck und Vierecke', area: 'geometrie', klassen: [2, 3], img: 'MiniHoS_Forschen_Lupe',
    merk: '<b>Dreieck</b>: A = g · h : 2. <b>Parallelogramm</b>: A = g · h. <b>Trapez</b>: A = (a + c) · h : 2 (a und c sind die parallelen Seiten). <b>Raute</b> und <b>Deltoid</b>: A = e · f : 2 (e und f sind die Diagonalen). Die Höhe h steht immer normal (im rechten Winkel) auf der Grundlinie.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst den Flächeninhalt von Dreieck und Parallelogramm berechnen.'], tasks: [flaeche(6, ['dreieck', 'parallelogramm'])] },
      2: { ichkann: ['Du kannst den Flächeninhalt von Trapez und Raute berechnen.'], tasks: [flaeche(6, ['trapez', 'raute', 'dreieck'])] },
      3: { ichkann: ['Du kannst fehlende Seiten und Höhen berechnen.'], tasks: [rueck(6), flaeche(4, ['trapez', 'parallelogramm', 'raute', 'dreieck'])] }
    }
  });

  // ---------------------------------------------------------------- Statistik
  const THEMEN = [['Lieblingsobst', ['Apfel', 'Banane', 'Birne', 'Erdbeere', 'Traube']], ['Schulweg', ['zu Fuß', 'Rad', 'Bus', 'Auto', 'Roller']], ['Lieblingssport', ['Fußball', 'Schwimmen', 'Tanzen', 'Radfahren', 'Turnen']]];
  const diagramm = () => ({ type: 'fn', fn: (rng) => {
    const [thema, kat] = rng.pick(THEMEN); const vals = kat.map(() => R(rng, 2, 12));
    let i1 = R(rng, 0, 4), i2 = R(rng, 0, 4); if (i2 === i1) i2 = (i1 + 1) % 5;
    if (vals[i1] < vals[i2]) [i1, i2] = [i2, i1];
    if (vals[i1] === vals[i2]) vals[i1] += 1;
    const W = 120, H = 52, bw = 14, max = 14;
    let s = '<line x1="12" y1="4" x2="12" y2="' + (H - 8) + '" stroke="#111" stroke-width="0.4"/><line x1="12" y1="' + (H - 8) + '" x2="' + W + '" y2="' + (H - 8) + '" stroke="#111" stroke-width="0.4"/>';
    for (let v = 0; v <= max; v += 2) { const y = H - 8 - v * 3; s += '<line x1="11" y1="' + y + '" x2="' + W + '" y2="' + y + '" stroke="#ddd" stroke-width="0.25"/>' + tx(9.5, y + 1.2, v, 'end'); }
    vals.forEach((v, i) => { const x = 18 + i * 20; s += '<rect x="' + x + '" y="' + (H - 8 - v * 3) + '" width="' + bw + '" height="' + v * 3 + '" fill="#93b4f5" stroke="#1d4ed8" stroke-width="0.3"/>' + tx(x + bw / 2, H - 3, kat[i]); });
    const fig = svg(W, H, s);
    const imax = vals.indexOf(Math.max(...vals)), sum = vals.reduce((a, b) => a + b, 0);
    const qs = [['Wie viele Kinder haben „' + kat[i1] + '“ gewählt?', String(vals[i1])], ['Was wurde am häufigsten gewählt?', kat[imax] + (vals.filter(v => v === vals[imax]).length > 1 ? ' (und gleich oft: ' + kat.filter((k, i) => vals[i] === vals[imax] && i !== imax).join(', ') + ')' : '')], ['Wie viele Kinder mehr haben „' + kat[i1] + '“ als „' + kat[i2] + '“ gewählt?', String(vals[i1] - vals[i2])], ['Wie viele Kinder wurden insgesamt befragt?', String(sum)]];
    const mk = (s2) => fig + qs.map(q => '<div class="mi tx">' + q[0] + ' ' + (s2 ? UB.sol(q[1]) : UB.blank(6)) + '</div>').join('');
    return { title: 'Säulendiagramm: ' + thema, instr: 'Lies das Diagramm genau.', body: mk(false), sol: mk(true) };
  } });
  const median = (xs) => { const s = xs.slice().sort((a, b) => a - b), m = s.length / 2; return s.length % 2 ? s[Math.floor(m)] : (s[m - 1] + s[m]) / 2; };
  const kennzahlen = (n, what) => task({
    title: 'Kennzahlen', instr: what === 'basis' ? 'Berechne Mittelwert und Spannweite.' : 'Berechne Mittelwert, Median und Spannweite.', n, cols: 1, w: 3.5,
    gen: (rng) => {
      const k = R(rng, 5, 7); let xs; do { xs = [...Array(k)].map(() => R(rng, 1, 20)); } while (xs.reduce((a, b) => a + b, 0) % k !== 0 && what === 'basis');
      const mw = xs.reduce((a, b) => a + b, 0) / k, sp = Math.max(...xs) - Math.min(...xs);
      return what === 'basis'
        ? { q: xs.join(', ') + ': &nbsp; Mittelwert {?} &nbsp; Spannweite {?}', a: [F(round(mw, 2)), String(sp)] }
        : { q: xs.join(', ') + ': &nbsp; Mittelwert {?} &nbsp; Median {?} &nbsp; Spannweite {?}', a: [F(round(mw, 2)), F(median(xs)), String(sp)] };
    }
  });
  UB.simple({
    id: 'm-statistik', fach: 'mathe', title: 'Daten und Diagramme', area: 'daten', klassen: [1, 2, 3, 4], img: 'MiniHoS_Erklaeren_Diagramm',
    merk: '<b>Mittelwert</b> (arithmetisches Mittel): alle Werte addieren, durch die Anzahl dividieren. <b>Median</b> (Zentralwert): Werte ordnen, der mittlere Wert (bei gerader Anzahl: Mittelwert der beiden mittleren). <b>Spannweite</b>: größter Wert − kleinster Wert. <b>Modalwert</b>: der häufigste Wert. Diagramme: Säulen-, Balken-, Kreis- und Liniendiagramm.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Säulendiagramme lesen.'], tasks: [diagramm(), kennzahlen(2, 'basis')] },
      2: { ichkann: ['Du kannst Mittelwert und Spannweite berechnen.'], tasks: [kennzahlen(6, 'basis'), diagramm()] },
      3: { ichkann: ['Du kannst Mittelwert, Median und Spannweite berechnen.'], tasks: [kennzahlen(7, 'voll')] }
    }
  });
})();
