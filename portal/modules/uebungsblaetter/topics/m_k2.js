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
  const textP = (n) => task({ title: 'Sachaufgaben', instr: 'Schreibe die Rechnung und einen Antwortsatz.', n, mode: 'lines', lines: 2, gen: (rng) => M.pickT(rng, TX_P, 'TX_P') });
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
  const arrow = (it) => Object.assign(it, { q: it.q + ' &nbsp;→ {?}' });
  const gl = (n) => task({
    title: 'Löse die Gleichungen.', instr: 'Rechne am Rand und mach die Probe.', n, cols: 3, w: 4,
    gen: (rng, level) => arrow(glGen(rng, level))
  });
  function glGen(rng, level) {
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
  const TX_G = [
    (r) => { const x = R(r, 3, 20), a = R(r, 2, 5), b = R(r, 1, 20); return { q: 'Ich denke mir eine Zahl, nehme sie mal ' + a + ' und addiere ' + b + '. Ich erhalte ' + (a * x + b) + '. Wie heißt die Zahl?', a: a + 'x + ' + b + ' = ' + (a * x + b) + ' → x = ' + x }; },
    (r) => { const x = R(r, 5, 30), d = R(r, 2, 12); return { q: 'Max ist ' + d + ' Jahre älter als seine Schwester. Zusammen sind sie ' + (2 * x + d) + ' Jahre alt. Wie alt ist die Schwester?', a: 'x + x + ' + d + ' = ' + (2 * x + d) + ' → x = ' + x + ' – Die Schwester ist ' + x + ' Jahre alt.' }; },
    (r) => { const x = R(r, 3, 12), b = R(r, 4, 15); return { q: 'Ein Rechteck ist ' + b + ' cm lang. Sein Umfang beträgt ' + 2 * (x + b) + ' cm. Wie breit ist es?', a: '2 · (' + b + ' + x) = ' + 2 * (x + b) + ' → x = ' + x + ' cm' }; },
    (r) => { const x = R(r, 2, 8), p = R(r, 2, 6), g = R(r, 10, 30); return { q: 'Lena kauft ' + p + ' gleiche Hefte und einen Rucksack um ' + g + ' €. Sie zahlt ' + (p * x + g) + ' €. Wie viel kostet ein Heft?', a: p + 'x + ' + g + ' = ' + (p * x + g) + ' → x = ' + x + ' €' }; }
  ];
  const textG = (n) => task({ title: 'Textgleichungen', instr: 'Stelle eine Gleichung auf und löse sie.', n, mode: 'lines', lines: 2, gen: (rng) => M.pickT(rng, TX_G, 'TX_G') });
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
  // ================================================================ Stufe 4 · Profi
  const { L4, text } = M;
  const TX_P4 = [
    (r) => { const g = R(r, 6, 30) * 10, p1 = r.pick([10, 20]), p2 = r.pick([10, 20, 25]); const a1 = g * (100 - p1) / 100, a2 = a1 * (100 - p2) / 100; return { q: 'Eine Jacke kostet ' + g + ' €. Zuerst wird sie um ' + p1 + ' % reduziert, später noch einmal um ' + p2 + ' % vom neuen Preis. Wie viel kostet sie jetzt? Um wie viel Prozent ist sie insgesamt billiger?', a: g + ' · ' + F(1 - p1 / 100) + ' = ' + E(a1) + ' €; ' + E(a1) + ' · ' + F(1 - p2 / 100) + ' = ' + E(a2) + ' €; ' + E(g - a2) + ' : ' + g + ' = ' + F(round((g - a2) / g * 100, 2)) + ' % (nicht ' + (p1 + p2) + ' %!)' }; },
    (r) => { const g = R(r, 4, 25) * 10, p = r.pick([10, 20, 25, 40]); const a = g * (100 - p) / 100; return { q: 'Nach einem Rabatt von ' + p + ' % kostet ein Rucksack nur noch ' + E(a) + ' €. Wie viel hat er vorher gekostet?', a: E(a) + ' € ≙ ' + (100 - p) + ' %; ' + E(a) + ' : ' + (100 - p) + ' · 100 = ' + E(g) + ' €' }; },
    (r) => { const alt = R(r, 4, 20) * 20, p = r.pick([5, 10, 15, 20, 25, 30]); const neu = alt * (100 + p) / 100; return { q: 'Die Schülerzahl einer Schule stieg von ' + alt + ' auf ' + neu + '. Um wie viel Prozent ist sie gestiegen?', a: neu + ' − ' + alt + ' = ' + (neu - alt) + '; ' + (neu - alt) + ' : ' + alt + ' = ' + F(p / 100) + ' = ' + p + ' %' }; },
    (r) => { const n = R(r, 3, 30) * 5, p = r.pick([10, 20, 25]); const ohne = n * (100 - p) / 100, brutto = ohne * 1.2; return { q: 'Ein Händler gewährt auf einen Preis von ' + n + ' € (ohne Steuer) ' + p + ' % Rabatt. Danach kommen 20 % Umsatzsteuer dazu. Wie viel zahlt man?', a: n + ' · ' + F(1 - p / 100) + ' = ' + E(ohne) + ' €; ' + E(ohne) + ' · 1,2 = ' + E(brutto) + ' €' }; },
    (r) => { const brutto = R(r, 3, 40) * 6; return { q: 'Ein Spiel kostet mit 20 % Umsatzsteuer ' + brutto + ' €. Wie hoch ist der Preis ohne Steuer? Wie viel Steuer ist enthalten?', a: brutto + ' : 1,2 = ' + E(brutto / 1.2) + ' € ohne Steuer; Steuer: ' + E(brutto - brutto / 1.2) + ' €' }; }
  ];
  L4('m-prozent', ['Du rechnest mehrstufige Prozentaufgaben (Rabatt auf Rabatt, Rabatt und Steuer).', 'Du berechnest den Grundwert vor einer Veränderung.', 'Du berechnest prozentuelle Zu- und Abnahmen.'],
    [text('Sachaufgaben mit mehreren Schritten', 'Schreibe die Rechnung und einen Antwortsatz.', TX_P4, 'p4', 4), dreisatzP(4)]);

  const TX_S4 = [
    (r) => { let p1, t1, b1, p2, b2, t2; do { p1 = r.pick([2, 3, 4, 6]); t1 = r.pick([4, 6, 8, 12]); b1 = r.pick([2, 3, 4]); p2 = r.pick([2, 3, 4, 6, 8].filter(x => x !== p1)); b2 = r.pick([3, 4, 5, 6, 8, 9].filter(x => x !== b1)); t2 = t1 * b2 * p1 / (b1 * p2); } while (!Number.isInteger(t2) || t2 > 40); return { q: p1 + ' Pumpen füllen ' + b1 + ' Becken in ' + t1 + ' Stunden. Wie lange brauchen ' + p2 + ' Pumpen für ' + b2 + ' Becken?', a: t1 + ' · ' + b2 + ' : ' + b1 + ' · ' + p1 + ' : ' + p2 + ' = ' + t2 + ' h – Sie brauchen ' + t2 + ' Stunden.' }; },
    (r) => { let a1, d1, h1, a2, h2, d2; do { a1 = r.pick([4, 5, 6, 8]); d1 = r.pick([6, 8, 10, 12, 15]); h1 = r.pick([6, 8]); a2 = r.pick([3, 4, 5, 6, 10, 12].filter(x => x !== a1)); h2 = r.pick([6, 8, 10].filter(x => x !== h1)); d2 = a1 * d1 * h1 / (a2 * h2); } while (!Number.isInteger(d2)); return { q: a1 + ' Maler streichen ein Haus in ' + d1 + ' Tagen, wenn sie täglich ' + h1 + ' Stunden arbeiten. Wie viele Tage brauchen ' + a2 + ' Maler bei ' + h2 + ' Stunden pro Tag?', a: d1 + ' · ' + a1 + ' : ' + a2 + ' · ' + h1 + ' : ' + h2 + ' = ' + d2 + ' Tage' }; },
    (r) => { let k1, t1, m1, k2, t2, m2; do { k1 = r.pick([4, 5, 6, 8, 10]); t1 = r.pick([5, 6, 10, 12]); m1 = k1 * t1 * r.pick([2, 3, 5]); k2 = r.pick([3, 4, 6, 12, 15, 20].filter(x => x !== k1)); t2 = r.pick([4, 7, 8, 9, 14, 15].filter(x => x !== t1)); m2 = m1 / (k1 * t1) * k2 * t2; } while (!Number.isInteger(m2)); return { q: k1 + ' Kühe fressen in ' + t1 + ' Tagen ' + m1 + ' kg Heu. Wie viel Heu fressen ' + k2 + ' Kühe in ' + t2 + ' Tagen?', a: m1 + ' : ' + k1 + ' : ' + t1 + ' = ' + F(m1 / (k1 * t1)) + ' kg pro Kuh und Tag; · ' + k2 + ' · ' + t2 + ' = ' + F(m2) + ' kg' }; },
    (r) => { const v = r.pick([40, 50, 60, 75, 80, 90, 100, 120]), t = r.pick([1.5, 2, 2.5, 3]), s = v * t; const w = r.pick([50, 60, 75, 80, 90, 100, 120].filter(x => x !== v && (s / x * 60) % 5 === 0)); if (!w) return { q: 'Ein Auto fährt mit 60 km/h und braucht 2 h. Wie lange braucht es mit 80 km/h?', a: '120 km : 80 = 1,5 h = 1 h 30 min (indirekt)' }; const min = s / w * 60; return { q: 'Ein Bus braucht für eine Strecke bei ' + v + ' km/h ' + F(t) + ' Stunden. Wie lange braucht er bei ' + w + ' km/h? Wie lang ist die Strecke?', a: 'Strecke: ' + v + ' · ' + F(t) + ' = ' + F(s) + ' km; ' + F(s) + ' : ' + w + ' = ' + Math.floor(min / 60) + ' h ' + (min % 60) + ' min (indirekt)' }; }
  ];
  L4('m-schlussrechnung', ['Du löst zusammengesetzte Schlussrechnungen mit drei Größen.', 'Du entscheidest bei jedem Schritt: direkt oder indirekt?'],
    [text('Zusammengesetzte Schlussrechnung', 'Überlege bei jeder Größe: direkt oder indirekt? Schreibe die Rechnung und das Ergebnis.', TX_S4, 's4', 4)]);

  const gl4 = (n) => task({
    title: 'Löse die Gleichungen.', instr: 'Löse zuerst die Klammern auf. Mach die Probe.', n, cols: 2, w: 4,
    gen: (rng) => arrow((() => {
      const x = R(rng, -6, 15) || 3, k = rng.int(4);
      if (k === 0) { const a = R(rng, 3, 6), b = R(rng, 1, 5), c = R(rng, 2, a - 1), d = R(rng, 1, 9); const e = a * (x - b) - c * (x + d); return { q: a + ' · (x − ' + b + ') = ' + c + ' · (x + ' + d + ')' + (e ? (e < 0 ? ' − ' + F(-e) : ' + ' + F(e)) : ''), a: 'x = ' + F(x), key: 'g' + a + b + c + d + x }; }
      if (k === 1) { const a = R(rng, 4, 9), b = R(rng, 1, a - 2), c = R(rng, 1, 9); return { q: a + 'x − (' + b + 'x + ' + c + ') = ' + F(a * x - b * x - c), a: 'x = ' + F(x) }; }
      if (k === 2) { const d = R(rng, 2, 5), b = R(rng, 1, 12); return { q: '<span class="fr"><span>x</span><span>' + d + '</span></span> + ' + b + ' = ' + F(x + b), a: 'x = ' + F(x * d), key: 'f' + d + b + x }; }
      const a = R(rng, 2, 5), b = R(rng, 2, 9), e = R(rng, 1, a - 1); return { q: a + ' · (x + ' + b + ') − ' + e + 'x = ' + F(a * (x + b) - e * x), a: 'x = ' + F(x), key: 'h' + a + b + e + x };
    })())
  });
  const TX_G4 = [
    (r) => { const x = R(r, 10, 40); return { q: 'Die Summe von drei aufeinanderfolgenden natürlichen Zahlen ist ' + (3 * x + 3) + '. Wie heißen die Zahlen?', a: 'x + (x + 1) + (x + 2) = ' + (3 * x + 3) + ' → x = ' + x + '; die Zahlen: ' + x + ', ' + (x + 1) + ', ' + (x + 2) }; },
    (r) => { const x = R(r, 3, 12); return { q: 'Ein Rechteck ist doppelt so lang wie breit. Sein Umfang beträgt ' + 6 * x + ' cm. Wie lang und wie breit ist es?', a: '2 · (2x + x) = ' + 6 * x + ' → x = ' + x + '; Breite ' + x + ' cm, Länge ' + 2 * x + ' cm' }; },
    (r) => { const k = R(r, 8, 14), m = R(r, 3, 5); const v = m * k; return { q: 'Eine Mutter ist heute ' + m + '-mal so alt wie ihr Sohn. In ' + ((m - 1) * k - 2 * k) + ' Jahren ist sie nur noch doppelt so alt. Wie alt sind beide heute?', a: m + 'x + ' + ((m - 1) * k - 2 * k) + ' = 2 · (x + ' + ((m - 1) * k - 2 * k) + ') → x = ' + k + '; Sohn ' + k + ' Jahre, Mutter ' + v + ' Jahre' }; },
    (r) => { const x = R(r, 4, 20), d = R(r, 2, 6); const t = 2 * x + d * x; return { q: 'Lena hat doppelt so viele Sticker wie Tom, Mia hat ' + d + '-mal so viele wie Tom. Zusammen haben sie ' + (t + x) + ' Sticker. Wie viele hat jedes Kind?', a: 'x + 2x + ' + d + 'x = ' + (t + x) + ' → x = ' + x + '; Tom ' + x + ', Lena ' + 2 * x + ', Mia ' + d * x }; },
    (r) => { const x = R(r, 3, 9), b = R(r, 4, 12); return { q: 'Bei einem gleichschenkeligen Dreieck ist jeder Schenkel ' + b + ' cm länger als die Basis. Der Umfang beträgt ' + (3 * x + 2 * b) + ' cm. Wie lang sind die Seiten?', a: 'x + 2 · (x + ' + b + ') = ' + (3 * x + 2 * b) + ' → x = ' + x + '; Basis ' + x + ' cm, Schenkel je ' + (x + b) + ' cm' }; }
  ];
  L4('m-gleichungen', ['Du löst Gleichungen mit Klammern, Brüchen und negativen Lösungen.', 'Du stellst Gleichungen zu schwierigen Textaufgaben auf.'],
    [gl4(8), text('Textgleichungen', 'Lege fest, wofür x steht. Stelle eine Gleichung auf und löse sie.', TX_G4, 'g4', 3)]);

  const TX_V4 = [
    (r) => { const a = R(r, 6, 14), b = R(r, 4, 10), h = R(r, 2, 6) * 2; return { q: 'Die Vorderseite eines Hauses besteht aus einem Rechteck (' + a + ' m breit, ' + b + ' m hoch) und einem dreieckigen Giebel (Höhe ' + h + ' m). Wie groß ist die Fläche?', a: a + ' · ' + b + ' + ' + a + ' · ' + h + ' : 2 = ' + (a * b) + ' + ' + F(a * h / 2) + ' = ' + F(a * b + a * h / 2) + ' m²' }; },
    (r) => { const a = R(r, 30, 60), c = R(r, 15, a - 8), h = R(r, 10, 30) * 2, p = R(r, 80, 250); const A = (a + c) * h / 2; return { q: 'Ein Grundstück hat die Form eines Trapezes (a = ' + a + ' m, c = ' + c + ' m, h = ' + h + ' m). 1 m² kostet ' + p + ' €. Wie viel kostet das Grundstück?', a: 'A = (' + a + ' + ' + c + ') · ' + h + ' : 2 = ' + F(A) + ' m²; ' + F(A) + ' · ' + p + ' = ' + F(A * p) + ' €' }; },
    (r) => { const e = R(r, 4, 12) * 2, A = e * R(r, 3, 10) / 2 * 2; const f = 2 * A / e; return { q: 'Ein Drachen (Deltoid) hat eine Fläche von ' + F(A) + ' dm². Die eine Diagonale ist ' + e + ' dm lang. Wie lang ist die andere?', a: 'f = 2 · ' + F(A) + ' : ' + e + ' = ' + F(f) + ' dm' }; },
    (r) => { const g = R(r, 6, 16), h = R(r, 3, 10); return { q: 'Ein Parallelogramm hat g = ' + g + ' cm und h = ' + h + ' cm. Ein Dreieck mit derselben Grundlinie soll gleich groß sein. Wie hoch muss es sein?', a: 'A = ' + g * h + ' cm²; ' + g + ' · h : 2 = ' + g * h + ' → h = ' + 2 * h + ' cm' }; }
  ];
  L4('m-vierecke', ['Du berechnest zusammengesetzte Flächen.', 'Du löst Sachaufgaben zu Dreieck, Trapez und Deltoid.', 'Du schließt von der Fläche auf eine fehlende Länge.'],
    [text('Sachaufgaben', 'Schreibe die Rechnung und das Ergebnis mit Einheit.', TX_V4, 'v4', 3), rueck(4)]);

  const mittelR = (n) => task({
    title: 'Mittelwert rückwärts', instr: 'Berechne den fehlenden Wert.', n, cols: 1, w: 4,
    gen: (rng) => {
      const k = R(rng, 4, 6), m = R(rng, 8, 18); const xs = [...Array(k - 1)].map(() => R(rng, m - 6, m + 6)); const last = k * m - xs.reduce((a, b) => a + b, 0);
      if (last < 0 || last > 40) return { q: 'Die Werte 12, 15, {?} haben den Mittelwert 14.', a: '15', key: 'fix' };
      return { q: 'Die Werte ' + xs.join(', ') + ' und {?} haben den Mittelwert ' + m + '.', a: String(last), key: xs.join() + m };
    }
  });
  const TX_ST4 = [
    (r) => { const k = R(r, 3, 5), a = R(r, 12, 17), z = R(r, a + 1, a + 3); const need = (k + 1) * z - k * a; if (need > 25) return { q: 'Max hat in 4 Tests im Schnitt 15 Punkte. Wie viele braucht er im 5. Test für einen Schnitt von 16 Punkten?', a: '5 · 16 − 4 · 15 = 20 Punkte' }; return { q: 'Lena hat in ' + k + ' Tests durchschnittlich ' + a + ' Punkte erreicht. Wie viele Punkte braucht sie im nächsten Test, damit ihr Durchschnitt ' + z + ' Punkte beträgt?', a: (k + 1) + ' · ' + z + ' − ' + k + ' · ' + a + ' = ' + need + ' Punkte' }; },
    (r) => { const xs = [...Array(6)].map(() => R(r, 8, 14)); const big = R(r, 60, 90); const all = xs.concat(big); const mw = all.reduce((a, b) => a + b, 0) / 7; return { q: 'Taschengeld pro Woche in einer Gruppe (in €): ' + all.join(', ') + '. Berechne Mittelwert und Median. Welcher Wert beschreibt die Gruppe besser? Begründe.', a: 'Mittelwert ≈ ' + F(round(mw, 2)) + ' €, Median ' + F(median(all)) + ' € – der Median, weil der Ausreißer ' + big + ' € den Mittelwert stark erhöht.' }; }
  ];
  L4('m-statistik', ['Du berechnest fehlende Werte aus dem Mittelwert.', 'Du beurteilst, ob Mittelwert oder Median besser passt.'],
    [kennzahlen(3, 'voll'), mittelR(3), text('Sachaufgaben', 'Rechne und begründe.', TX_ST4, 'st4', 2)]);


  // ================================================================ Mehr Sachaufgaben (Pool-Erweiterung)
  TX_P.push(
    (r) => { const t = R(r, 2, 8) * 5, p = r.pick([10, 20]); return { q: 'Lisa bekommt ' + t + ' € Taschengeld im Monat. Ab nächstem Monat bekommt sie ' + p + ' % mehr. Wie viel bekommt sie dann?', a: t + ' · ' + F(1 + p / 100) + ' = ' + E(t * (100 + p) / 100) + ' € – Sie bekommt ' + E(t * (100 + p) / 100) + ' €.' }; },
    (r) => { const N = r.pick([20, 40, 50]), pc = r.pick([60, 70, 80, 90]); const P = N * pc / 100; return { q: 'Bei einem Test gibt es ' + N + ' Punkte. Max erreicht ' + P + ' Punkte. Wie viel Prozent sind das?', a: P + ' : ' + N + ' = ' + F(pc / 100) + ' = ' + pc + ' % – Es sind ' + pc + ' %.' }; },
    (r) => { const n = R(r, 8, 20) * 20, p = r.pick([15, 25, 35, 45, 55]); return { q: 'An einer Schule sind ' + n + ' Kinder. ' + p + ' % kommen mit dem Bus. Wie viele Kinder sind das?', a: n + ' · ' + p + ' : 100 = ' + F(n * p / 100) + ' – Es sind ' + F(n * p / 100) + ' Kinder.' }; }
  );
  TX_G.push(
    (r) => { const x = R(r, 8, 15), m = r.pick([3, 4]); return { q: 'Ein Vater ist ' + m + '-mal so alt wie sein Sohn. Zusammen sind sie ' + (m + 1) * x + ' Jahre alt. Wie alt sind beide?', a: 'x + ' + m + 'x = ' + (m + 1) * x + ' → x = ' + x + ' – Sohn ' + x + ' Jahre, Vater ' + m * x + ' Jahre' }; },
    (r) => { const x = R(r, 5, 30), d = R(r, 2, 10); return { q: 'Lena und Tom teilen ' + (2 * x + d) + ' €. Lena bekommt ' + d + ' € mehr als Tom. Wie viel bekommt jedes Kind?', a: 'x + x + ' + d + ' = ' + (2 * x + d) + ' → x = ' + x + ' – Tom ' + x + ' €, Lena ' + (x + d) + ' €' }; },
    (r) => { const x = R(r, 4, 30), b = R(r, 2, 15); return { q: 'Wenn man das Doppelte einer Zahl um ' + b + ' vermindert, erhält man ' + (2 * x - b) + '. Wie heißt die Zahl?', a: '2x − ' + b + ' = ' + (2 * x - b) + ' → x = ' + x }; },
    (r) => { const a = R(r, 15, 45); return { q: 'In einem Dreieck ist β doppelt so groß wie α, und γ = ' + (180 - 3 * a) + '°. Wie groß sind α und β?', a: 'x + 2x + ' + (180 - 3 * a) + ' = 180 → x = ' + a + ' – α = ' + a + '°, β = ' + 2 * a + '°' }; }
  );
  TX_P4.push(
    (r) => { const g = R(r, 5, 30) * 10; const a = g * 1.1, b = a * 0.9; return { q: 'Ein Fahrrad kostet ' + g + ' €. Der Preis wird zuerst um 10 % erhöht und später um 10 % gesenkt. Kostet es jetzt wieder ' + g + ' €?', a: g + ' · 1,1 = ' + E(a) + ' €; ' + E(a) + ' · 0,9 = ' + E(b) + ' € – nein, es ist um ' + E(g - b) + ' € (1 %) billiger.' }; },
    (r) => { const g = R(r, 4, 40) * 25; return { q: 'Eine Rechnung über ' + g + ' € wird sofort bezahlt. Dafür gibt es 3 % Skonto. Wie viel muss man zahlen? Wie viel spart man?', a: g + ' · 0,97 = ' + E(g * 0.97) + ' € – man spart ' + E(g * 0.03) + ' €' }; }
  );
  TX_S4.push(
    (r) => { const v = r.pick([5, 6, 7, 8]), s = R(r, 3, 9) * 50, p = r.pick([1.6, 1.7, 1.8]); const l = v * s / 100; return { q: 'Ein Auto verbraucht ' + v + ' Liter Benzin auf 100 km. Wie viel Benzin braucht es für ' + s + ' km? Wie viel kostet das bei ' + E(p) + ' € pro Liter?', a: v + ' · ' + s + ' : 100 = ' + F(l) + ' l; ' + F(l) + ' · ' + E(p) + ' = ' + E(l * p) + ' €' }; },
    (r) => { const m = R(r, 4, 8) * 50, p = r.pick([2, 6, 8, 10]); return { q: 'Für einen Kuchen für 4 Personen braucht man ' + m + ' g Mehl. Wie viel Mehl braucht man für ' + p + ' Personen?', a: m + ' : 4 · ' + p + ' = ' + F(m / 4 * p) + ' g (direkt)' }; },
    (r) => { let a, t, b, u; do { a = r.pick([2, 3, 4, 6]); t = r.pick([8, 10, 12, 15, 18, 20]); b = r.pick([2, 3, 4, 5, 6, 8].filter(x => x !== a)); u = a * t / b; } while (!Number.isInteger(u)); return { q: 'Ein Heuvorrat reicht für ' + a + ' Pferde ' + t + ' Tage. Wie lange reicht er für ' + b + ' Pferde?', a: t + ' · ' + a + ' : ' + b + ' = ' + u + ' Tage (indirekt)' }; }
  );
  TX_G4.push(
    (r) => { const x = R(r, 3, 15), d = R(r, 2, 8); return { q: 'Ein Rechteck ist ' + d + ' cm länger als breit. Sein Umfang beträgt ' + (4 * x + 2 * d) + ' cm. Wie lang und wie breit ist es?', a: '2 · (x + x + ' + d + ') = ' + (4 * x + 2 * d) + ' → x = ' + x + '; Breite ' + x + ' cm, Länge ' + (x + d) + ' cm' }; },
    (r) => { const z = R(r, 3, 15), e = R(r, 3, 15); return { q: 'In einer Spardose sind nur 1-€- und 2-€-Münzen, insgesamt ' + (z + e) + ' Stück im Wert von ' + (2 * z + e) + ' €. Wie viele 2-€-Münzen sind es?', a: '2x + (' + (z + e) + ' − x) = ' + (2 * z + e) + ' → x = ' + z + '; ' + z + ' Zwei-Euro-Münzen und ' + e + ' Ein-Euro-Münzen' }; }
  );
  TX_V4.push(
    (r) => { const a = R(r, 6, 12), c = R(r, 2, a - 2), h = R(r, 2, 6), k = R(r, 2, 4) * 2; const A = (a + c) * h / 2; return { q: 'Ein Beet hat die Form eines Trapezes (a = ' + a + ' m, c = ' + c + ' m, h = ' + h + ' m). Pro m² werden ' + k + ' Blumen gepflanzt. Wie viele Blumen braucht man?', a: 'A = (' + a + ' + ' + c + ') · ' + h + ' : 2 = ' + F(A) + ' m²; ' + F(A) + ' · ' + k + ' = ' + F(A * k) + ' Blumen' }; },
    (r) => { const e = R(r, 4, 9) * 10, f = R(r, 3, 7) * 10; return { q: 'Für einen Drachen (Deltoid) mit den Diagonalen ' + e + ' cm und ' + f + ' cm wird Papier gebraucht. Wie viel cm² Papier sind das mindestens?', a: 'A = ' + e + ' · ' + f + ' : 2 = ' + F(e * f / 2) + ' cm²' }; },
    (r) => { const g = R(r, 20, 40), h = R(r, 10, 25), p = R(r, 60, 150); return { q: 'Ein Grundstück hat die Form eines Parallelogramms (g = ' + g + ' m, h = ' + h + ' m). 1 m² kostet ' + p + ' €. Wie teuer ist das Grundstück?', a: 'A = ' + g + ' · ' + h + ' = ' + g * h + ' m²; ' + g * h + ' · ' + p + ' = ' + F(g * h * p) + ' €' }; }
  );
  TX_ST4.push(
    (r) => { const t = [...Array(7)].map(() => R(r, -3, 12)); const s = t.reduce((a, b) => a + b, 0); return { q: 'Die Mittagstemperaturen einer Woche (in °C): ' + t.map(F).join('; ') + '. Berechne den Mittelwert (auf eine Dezimalstelle) und die Spannweite.', a: 'Summe ' + F(s) + ', : 7 ≈ ' + F(round(s / 7, 1)) + ' °C; Spannweite ' + (Math.max(...t) - Math.min(...t)) + ' °C' }; },
    (r) => { const m = R(r, 2, 3); const xs = [...Array(5)].map(() => R(r, 0, 4)); const sum = xs.reduce((a, b) => a + b, 0), need = 6 * m - sum; if (need < 0 || need > 8) return { q: 'Eine Mannschaft schoss in 6 Spielen durchschnittlich 2 Tore. In den ersten 5 Spielen waren es 1, 3, 2, 0 und 4 Tore. Wie viele Tore waren es im 6. Spiel?', a: '6 · 2 − 10 = 2 Tore' }; return { q: 'Eine Mannschaft schoss in 6 Spielen durchschnittlich ' + m + ' Tore. In den ersten 5 Spielen waren es ' + xs.join(', ') + ' Tore. Wie viele Tore waren es im 6. Spiel?', a: '6 · ' + m + ' − ' + sum + ' = ' + need + ' Tore' }; },
    (r) => { const xs = [...Array(6)].map(() => R(r, 120, 175)); const so = xs.slice().sort((a, b) => a - b); return { q: 'Körpergrößen (in cm) von sechs Kindern: ' + xs.join(', ') + '. Bestimme den Median.', a: 'geordnet: ' + so.join(', ') + '; Median = (' + so[2] + ' + ' + so[3] + ') : 2 = ' + F((so[2] + so[3]) / 2) + ' cm' }; }
  );
})();
