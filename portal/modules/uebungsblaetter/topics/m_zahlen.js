/* Mathematik 1. Klasse: natürliche Zahlen, + − · :, Rechenregeln, Teilbarkeit */
(function () {
  const M = UB.M, { R, fmt, gcd, lcm, task, info, grid, numberLine } = M;
  const F = (x) => fmt(x);

  // ---------------------------------------------------------------- Zahlwörter
  const U = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
  const T = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];
  const b100 = (n, fin) => n < 20 ? (n === 1 ? (fin ? 'eins' : 'ein') : U[n]) : ((n % 10 ? (n % 10 === 1 ? 'ein' : U[n % 10]) + 'und' : '') + T[Math.floor(n / 10)]);
  const b1000 = (n, fin) => { const h = Math.floor(n / 100), r = n % 100; return (h ? (h === 1 ? 'ein' : U[h]) + 'hundert' : '') + (r ? b100(r, fin) : ''); };
  function words(n) {
    if (n === 0) return 'null';
    const mio = Math.floor(n / 1e6), th = Math.floor(n / 1000) % 1000, r = n % 1000;
    let s = '';
    if (mio) s += (mio === 1 ? 'eine Million' : b1000(mio, false) + ' Millionen') + ' ';
    if (th) s += b1000(th, false) + 'tausend';
    if (r) s += b1000(r, true);
    return s.trim();
  }
  const PLACES = [['E', 1], ['Z', 10], ['H', 100], ['T', 1e3], ['ZT', 1e4], ['HT', 1e5], ['M', 1e6]];
  const PLACE_NAME = { 10: 'Zehner', 100: 'Hunderter', 1000: 'Tausender', 10000: 'Zehntausender', 100000: 'Hunderttausender', 1000000: 'Millionen' };
  const roundTo = (n, p) => Math.round(n / p) * p;
  const maxFor = (level) => level === 1 ? 99999 : level === 2 ? 999999 : 99999999;
  const num = (rng, level) => { const max = maxFor(level); const d = String(max).length; const min = Math.pow(10, d - 2); return R(rng, min, max); };

  // ---------------------------------------------------------------- Aufgaben: Zahlen
  const stellen = (n) => task({
    title: 'Stellenwerte', instr: 'Schreibe die Zahl in Ziffern.', n, cols: 2, w: 6,
    gen: (rng, level) => {
      const x = num(rng, level);
      const parts = PLACES.slice().reverse().filter(p => Math.floor(x / p[1]) % 10).map(p => (Math.floor(x / p[1]) % 10) + ' ' + p[0]);
      return { q: parts.join(' + '), a: F(x) };
    }
  });
  const runden = (n) => task({
    title: 'Runden', instr: 'Runde auf die angegebene Stelle. Ab 5 wird aufgerundet.', n, cols: 2, w: 6,
    gen: (rng, level) => {
      const x = num(rng, level);
      const opts = [10, 100, 1000].concat(level > 1 ? [10000] : [], level > 2 ? [100000, 1000000] : []).filter(p => p * 10 <= x);
      const p = rng.pick(opts);
      return { q: F(x) + ' <span class="hint">(' + PLACE_NAME[p] + ')</span> ≈ {?}', a: F(roundTo(x, p)) };
    }
  });
  const vergleich = (n) => task({
    title: 'Größer, kleiner oder gleich?', instr: 'Setze <, > oder = ein.', n, cols: 3, w: 1.6,
    gen: (rng, level) => {
      const a = num(rng, level);
      const k = rng.int(3);
      let b = k === 0 ? a : k === 1 ? a + rng.pick([1, 9, 10, 90, 100, 900]) : Math.max(1, a - rng.pick([1, 10, 100, 1000]));
      if (rng.int(4) === 0 && a > 1000) { const s = String(a).split(''); const i = R(rng, 0, s.length - 2); [s[i], s[i + 1]] = [s[i + 1], s[i]]; b = +s.join(''); }
      return { q: F(a) + ' {?} ' + F(b), a: a > b ? '>' : a < b ? '<' : '=' };
    }
  });
  const nachbarn = (n) => task({
    title: 'Vorgänger und Nachfolger', instr: 'Schreibe den Vorgänger und den Nachfolger auf.', n, cols: 1, w: 6,
    gen: (rng, level) => {
      const base = rng.pick([1000, 10000, 100000, 1000000].filter(b => b <= maxFor(level) * 1.01));
      const x = rng.int(2) ? R(rng, 2, 99) * base : num(rng, level);
      return { q: '{?} – ' + F(x) + ' – {?}', a: [F(x - 1), F(x + 1)], key: x };
    }
  });
  const wortZahl = (n) => task({
    title: 'Zahlen in Worten', instr: 'Schreibe die Zahl in Ziffern.', n, cols: 1, w: 8,
    gen: (rng, level) => { const x = num(rng, level); return { q: words(x) + ' = {?}', a: F(x) }; }
  });
  const zahlWort = (n) => task({
    title: 'Zahlen in Worten', instr: 'Schreibe die Zahl in Worten.', n, cols: 1, mode: 'lines', lines: 1,
    gen: (rng, level) => { const x = num(rng, level); return { q: F(x), a: words(x) }; }
  });
  const strahl = () => ({ type: 'fn', fn: (rng, level) => {
    const step = level === 1 ? rng.pick([10, 100]) : level === 2 ? rng.pick([100, 1000]) : rng.pick([1000, 10000]);
    const start = R(rng, 1, 40) * step * 10;
    const count = 21;
    const vals = rng.shuffle([...Array(count - 2).keys()].map(i => i + 1)).slice(0, 3).sort((a, b) => a - b).map(i => start + i * step);
    const lab = ['A', 'B', 'C'];
    const fig = numberLine(start, step, count, { labelEvery: 5, arrows: vals.map((v, i) => ({ v, t: lab[i] })) });
    const q = lab.map((l, i) => '<span class="mi" style="margin-right:8mm">' + l + ' = {?}</span>');
    const mk = (s) => fig + '<div class="mgrid c3">' + vals.map((v, i) => '<div class="mi">' + lab[i] + ' = ' + (s ? UB.sol(F(v)) : UB.blank(6)) + '</div>').join('') + '</div>';
    return { title: 'Zahlenstrahl', instr: 'Welche Zahlen zeigen die Pfeile? Ein Strich bedeutet ' + F(step) + '.', body: mk(false), sol: mk(true) };
  } });

  UB.simple({
    id: 'm-zahlen', fach: 'mathe', title: 'Natürliche Zahlen', area: 'zahlen', klassen: [1], img: 'MiniHoS_Forschen_Fernrohr',
    merk: '<b>Stellenwerte</b>: E (Einer), Z (Zehner), H (Hunderter), T (Tausender), ZT, HT, M (Million). 1 M = 1 000 000. <b>Runden</b>: Schau auf die Ziffer rechts von der Rundungsstelle – bei 0 bis 4 abrunden, bei 5 bis 9 aufrunden: 4 372 ≈ 4 400 (H). <b>Vorgänger</b> = Zahl − 1, <b>Nachfolger</b> = Zahl + 1. Große Zahlen schreibt man in Dreiergruppen: 2 450 300.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Zahlen bis 100 000 lesen und schreiben.', 'Du kannst auf Zehner, Hunderter und Tausender runden.'], tasks: [stellen(6), runden(6), vergleich(9), strahl()] },
      2: { ichkann: ['Du kannst Zahlen bis 1 Million vergleichen und runden.', 'Du kannst Vorgänger und Nachfolger bestimmen.'], tasks: [runden(8), vergleich(9), nachbarn(3), strahl()] },
      3: { ichkann: ['Du kannst Zahlen über eine Million lesen und schreiben.', 'Du kannst Zahlen in Worten schreiben.'], tasks: [wortZahl(3), zahlWort(3), runden(6), vergleich(6)] }
    }
  });

  // ---------------------------------------------------------------- Addieren / Subtrahieren
  const kopfAS = (n) => task({
    title: 'Kopfrechnen', instr: 'Rechne im Kopf.', n, cols: 3, w: 4,
    gen: (rng, level) => {
      const big = level === 1 ? 100 : 1000;
      const a = R(rng, 12, big - 1) * (level === 3 ? 10 : 1), b = R(rng, 11, Math.floor(big / 2)) * (level === 3 ? 10 : 1);
      return rng.int(2) ? { q: F(a) + ' + ' + F(b), a: F(a + b) } : { q: F(Math.max(a, b)) + ' − ' + F(Math.min(a, b)), a: F(Math.max(a, b) - Math.min(a, b)) };
    }
  });
  function addGrid(nums, sub) {
    const res = sub ? nums[0] - nums.slice(1).reduce((s, x) => s + x, 0) : nums.reduce((s, x) => s + x, 0);
    const rows = nums.map(String);
    const width = Math.max(...rows.map(r => r.length), String(res).length) + 2;
    return { grid: { rows, solRows: [String(res)], op: sub ? '−' : '+', opRow: rows.length - 1, cols: width, extra: 1 }, a: '', res };
  }
  const schriftlich = (n, sub, terms) => task({
    title: sub ? 'Schriftlich subtrahieren' : 'Schriftlich addieren', instr: 'Rechne in den Kästchen. Schreib die Zahlen stellengerecht untereinander.', n, cols: n > 3 ? 4 : 3, mode: 'grid',
    gen: (rng, level) => {
      const digits = level === 1 ? 3 : level === 2 ? 4 : 5;
      const t = terms || (level === 3 ? 3 : 2);
      let nums = [...Array(t)].map(() => R(rng, Math.pow(10, digits - 2) * 2, Math.pow(10, digits) - 1));
      if (sub) { nums.sort((a, b) => b - a); const rest = nums.slice(1).reduce((s, x) => s + x, 0); if (rest >= nums[0]) nums[0] = rest + R(rng, 100, Math.pow(10, digits - 1)); }
      const g = addGrid(nums, sub);
      return { grid: g.grid, a: '', key: nums.join(sub ? '-' : '+') };
    }
  });
  const TEXT_AS = [
    (r) => { const a = R(r, 320, 690), b = R(r, 120, a - 50); return { q: 'In der Schule sind ' + a + ' Kinder. ' + b + ' davon sind Mädchen. Wie viele Buben gehen in die Schule?', a: a + ' − ' + b + ' = ' + (a - b) + ' – Es sind ' + (a - b) + ' Buben.' }; },
    (r) => { const a = R(r, 120, 480), b = R(r, 90, 390); return { q: 'Lena spart im Jänner ' + a + ' Cent und im Februar ' + b + ' Cent. Wie viel Cent hat sie gespart?', a: a + ' + ' + b + ' = ' + (a + b) + ' – Sie hat ' + (a + b) + ' Cent gespart.' }; },
    (r) => { const a = R(r, 1200, 4800), b = R(r, 300, 1100); return { q: 'Ein Wanderweg ist ' + F(a) + ' m lang. Familie Huber ist schon ' + F(b) + ' m gegangen. Wie weit ist es noch?', a: F(a) + ' − ' + F(b) + ' = ' + F(a - b) + ' – Es sind noch ' + F(a - b) + ' m.' }; },
    (r) => { const a = R(r, 2500, 9000), b = R(r, 800, 2400), c = R(r, 500, 1800); return { q: 'Ein Kino hat am Freitag ' + F(a) + ' Besucher, am Samstag ' + F(b) + ' mehr als am Freitag und am Sonntag ' + F(c) + ' weniger als am Samstag. Wie viele Besucher kommen am Sonntag?', a: F(a) + ' + ' + F(b) + ' = ' + F(a + b) + ', ' + F(a + b) + ' − ' + F(c) + ' = ' + F(a + b - c) + ' – Am Sonntag kommen ' + F(a + b - c) + ' Besucher.' }; },
    (r) => { const a = R(r, 45, 95), b = R(r, 12, 40), c = R(r, 15, 39); return { q: 'Max hat ' + a + ' €. Er kauft ein Buch um ' + b + ' € und ein Spiel um ' + c + ' €. Wie viel Geld bleibt ihm?', a: a + ' − ' + b + ' − ' + c + ' = ' + (a - b - c) + ' – Ihm bleiben ' + (a - b - c) + ' €.' }; },
    (r) => { const a = R(r, 1890, 1990), b = R(r, 2000, 2025); return { q: 'Oma ist im Jahr ' + a + ' geboren. Wie alt wird sie im Jahr ' + b + '?', a: b + ' − ' + a + ' = ' + (b - a) + ' – Sie wird ' + (b - a) + ' Jahre alt.' }; },
    (r) => { const a = R(r, 1200, 3500), b = R(r, 1200, 3500), c = R(r, 1200, 3500); return { q: 'Ein Bauer erntet ' + F(a) + ' kg Äpfel, ' + F(b) + ' kg Birnen und ' + F(c) + ' kg Zwetschken. Wie viel Obst erntet er insgesamt?', a: F(a) + ' + ' + F(b) + ' + ' + F(c) + ' = ' + F(a + b + c) + ' – Er erntet ' + F(a + b + c) + ' kg Obst.' }; },
    (r) => { const a = R(r, 3000, 3800), b = R(r, 1000, 2900); return { q: 'Der Großglockner ist 3 798 m hoch. Eine Hütte liegt auf ' + F(b) + ' m Höhe. Wie viele Höhenmeter sind es von der Hütte bis zum Gipfel?', a: '3 798 − ' + F(b) + ' = ' + F(3798 - b) + ' – Es sind ' + F(3798 - b) + ' Höhenmeter.', key: 'glockner' + b }; }
  ];
  const textAS = (n) => task({ title: 'Textaufgaben', instr: 'Schreibe die Rechnung und einen Antwortsatz.', n, mode: 'lines', lines: 2, gen: (rng) => rng.pick(TEXT_AS)(rng) });
  const fachAS = (n) => task({
    title: 'Fachbegriffe', instr: 'Berechne.', n, cols: 1, w: 6,
    gen: (rng) => {
      const a = R(rng, 120, 980), b = R(rng, 110, a - 10);
      return rng.int(2) ? { q: 'Die Summe von ' + a + ' und ' + b + ' ist {?}', a: F(a + b) } : { q: 'Die Differenz von ' + a + ' und ' + b + ' ist {?}', a: F(a - b) };
    }
  });
  UB.simple({
    id: 'm-addsub', fach: 'mathe', title: 'Addieren und Subtrahieren', area: 'zahlen', klassen: [1], img: 'MiniHoS_Lob_Daumen-Hoch-2',
    merk: '<b>Addieren</b>: Summand + Summand = <b>Summe</b>. <b>Subtrahieren</b>: Minuend − Subtrahend = <b>Differenz</b>. Beim schriftlichen Rechnen schreibst du die Zahlen stellengerecht untereinander (Einer unter Einer …) und beginnst bei den Einern. Überschlage vorher: 487 + 316 ≈ 500 + 300 = 800. Probe: Differenz + Subtrahend = Minuend.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst im Kopf addieren und subtrahieren.', 'Du kannst schriftlich addieren.'], tasks: [kopfAS(12), schriftlich(4, false), schriftlich(4, true)] },
      2: { ichkann: ['Du kannst mit vierstelligen Zahlen schriftlich rechnen.', 'Du kennst die Fachbegriffe Summe und Differenz.'], tasks: [schriftlich(4, false), schriftlich(4, true), fachAS(4)] },
      3: { ichkann: ['Du kannst mehrere Zahlen schriftlich addieren und subtrahieren.', 'Du kannst Textaufgaben lösen.'], tasks: [schriftlich(3, false), schriftlich(3, true), textAS(3)] }
    }
  });

  // ---------------------------------------------------------------- Multiplizieren / Dividieren
  const kopfMD = (n) => task({
    title: 'Kopfrechnen', instr: 'Rechne im Kopf.', n, cols: 4, w: 3.5,
    gen: (rng, level) => {
      const a = R(rng, 2, 9), b = R(rng, 2, level === 1 ? 10 : 12) * (level === 1 ? 1 : rng.pick([1, 10]));
      return rng.int(2) ? { q: a + ' · ' + F(b), a: F(a * b) } : { q: F(a * b) + ' : ' + a, a: F(b) };
    }
  });
  const divRest = (n) => task({
    title: 'Dividieren mit Rest', instr: 'Rechne im Kopf und schreib den Rest dazu.', n, cols: 3, w: 5,
    gen: (rng) => { const d = R(rng, 3, 9), q = R(rng, 3, 9), r = R(rng, 1, d - 1); return { q: (d * q + r) + ' : ' + d + ' = {?}', a: q + ' Rest ' + r }; }
  });
  function mulGrid(a, b) {
    const bs = String(b), as = String(a);
    const partial = [...bs].map(d => String(a * +d));
    const res = String(a * b);
    const width = Math.max(as.length + bs.length + 3, res.length + 2);
    if (bs.length === 1) return { rows: [as + '·' + bs], solRows: [res], cols: width, lineAfter: 0, extra: 0, shift: [0, 0] };
    // österreichische Schreibweise: Teilprodukte von der höchsten Stelle an, jeweils eine Stelle nach rechts
    const shift = [0].concat(partial.map((p, i) => bs.length - 1 - i), [0]);
    return { rows: [as + '·' + bs], solRows: partial.concat([res]), cols: width, lineAfter: 0, lines2: [partial.length], shift };
  }
  const schriftMul = (n) => task({
    title: 'Schriftlich multiplizieren', instr: 'Rechne in den Kästchen.', n, cols: 2, mode: 'grid',
    gen: (rng, level) => {
      const a = R(rng, level === 1 ? 120 : 210, level === 3 ? 9800 : 980), b = level === 1 ? R(rng, 3, 9) : level === 2 ? R(rng, 12, 89) : R(rng, 105, 489);
      return { grid: mulGrid(a, b), a: F(a) + ' · ' + F(b) + ' = ' + F(a * b), key: a + 'x' + b };
    }
  });
  const schriftDiv = (n) => task({
    title: 'Schriftlich dividieren', instr: 'Rechne im Kästchenfeld. Mach die Probe.', n, cols: 2, mode: 'karo', karo: [17, 8],
    gen: (rng, level) => {
      const d = level === 3 ? R(rng, 12, 48) : R(rng, 3, 9);
      const q = R(rng, level === 1 ? 112 : 1020, level === 1 ? 980 : 9800);
      const r = level === 1 ? 0 : R(rng, 0, d - 1);
      const x = d * q + r;
      return { q: F(x) + ' : ' + d, a: F(x) + ' : ' + d + ' = ' + F(q) + (r ? ' Rest ' + r : ''), key: x + ':' + d };
    }
  });
  const TEXT_MD = [
    (r) => { const k = R(r, 18, 29), p = R(r, 4, 9); return { q: 'Eine Klasse mit ' + k + ' Kindern fährt ins Theater. Eine Karte kostet ' + p + ' €. Wie viel kosten alle Karten?', a: k + ' · ' + p + ' = ' + k * p + ' – Alle Karten kosten ' + k * p + ' €.' }; },
    (r) => { const g = R(r, 6, 9), p = R(r, 12, 30); return { q: g * p + ' Schülerinnen und Schüler werden auf ' + g + ' gleich große Gruppen aufgeteilt. Wie viele sind in einer Gruppe?', a: g * p + ' : ' + g + ' = ' + p + ' – In einer Gruppe sind ' + p + ' Kinder.' }; },
    (r) => { const e = R(r, 6, 12), k = R(r, 15, 48); return { q: 'In einer Schachtel sind ' + e + ' Eier. Wie viele Eier sind in ' + k + ' Schachteln?', a: k + ' · ' + e + ' = ' + k * e + ' – Es sind ' + k * e + ' Eier.' }; },
    (r) => { const s = R(r, 4, 8), q = R(r, 25, 120), rest = R(r, 1, s - 1); const x = s * q + rest; return { q: 'Ein Bäcker hat ' + x + ' Kekse. Er packt immer ' + s + ' Kekse in ein Sackerl. Wie viele Sackerl werden voll? Wie viele Kekse bleiben übrig?', a: x + ' : ' + s + ' = ' + q + ' Rest ' + rest + ' – ' + q + ' Sackerl werden voll, ' + rest + ' Kekse bleiben übrig.' }; },
    (r) => { const w = R(r, 3, 6), t = R(r, 120, 380); return { q: 'Ein Lkw fährt an ' + w + ' Tagen jeweils ' + t + ' km. Wie viele Kilometer fährt er insgesamt?', a: w + ' · ' + t + ' = ' + w * t + ' – Er fährt ' + F(w * t) + ' km.' }; },
    (r) => { const m = R(r, 3, 9), p = R(r, 15, 48); return { q: 'Ein Fahrrad kostet ' + m * p + ' €. Es wird in ' + m + ' gleichen Monatsraten bezahlt. Wie hoch ist eine Rate?', a: m * p + ' : ' + m + ' = ' + p + ' – Eine Rate beträgt ' + p + ' €.' }; }
  ];
  const textMD = (n) => task({ title: 'Textaufgaben', instr: 'Schreibe die Rechnung und einen Antwortsatz.', n, mode: 'lines', lines: 2, gen: (rng) => rng.pick(TEXT_MD)(rng) });
  UB.simple({
    id: 'm-multdiv', fach: 'mathe', title: 'Multiplizieren und Dividieren', area: 'zahlen', klassen: [1], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: '<b>Multiplizieren</b>: Faktor · Faktor = <b>Produkt</b>. <b>Dividieren</b>: Dividend : Divisor = <b>Quotient</b>. Beim schriftlichen Multiplizieren rechnest du mit jeder Ziffer des zweiten Faktors und rückst jede Zeile eine Stelle nach rechts. Beim Dividieren gehst du von links nach rechts vor; was übrig bleibt, ist der <b>Rest</b>. Probe: Quotient · Divisor + Rest = Dividend. Durch 0 kann man nicht dividieren.',
    pools: {},
    levels: {
      1: { ichkann: ['Du beherrschst das Einmaleins.', 'Du kannst mit Rest dividieren.', 'Du kannst mit einstelligen Zahlen schriftlich multiplizieren.'], tasks: [kopfMD(12), divRest(6), schriftMul(4)] },
      2: { ichkann: ['Du kannst mit zweistelligen Zahlen schriftlich multiplizieren.', 'Du kannst schriftlich durch einstellige Zahlen dividieren.'], tasks: [schriftMul(4), schriftDiv(4)] },
      3: { ichkann: ['Du kannst mit mehrstelligen Zahlen schriftlich rechnen.', 'Du kannst Textaufgaben mit · und : lösen.'], tasks: [schriftMul(2), schriftDiv(2), textMD(2)] }
    }
  });

  // ---------------------------------------------------------------- Rechenregeln
  function expr(rng, level) {
    const n = () => R(rng, 2, 12);
    const forms = level === 1 ? [
      () => { const a = R(rng, 5, 40), b = n(), c = n(); return [a + ' + ' + b + ' · ' + c, a + b * c]; },
      () => { const b = n(), c = n(), a = b * c + R(rng, 1, 30); return [a + ' − ' + b + ' · ' + c, a - b * c]; },
      () => { const c = R(rng, 2, 9), q = R(rng, 2, 9), a = R(rng, 3, 30); return [a + ' + ' + c * q + ' : ' + c, a + q]; },
      () => { const a = n(), b = n(), c = R(rng, 2, 20); return ['(' + c + ' + ' + a + ') · ' + b, (c + a) * b]; }
    ] : level === 2 ? [
      () => { const a = n(), b = n(), c = n(), d = n(); return [a + ' · ' + b + ' + ' + c + ' · ' + d, a * b + c * d]; },
      () => { const a = R(rng, 15, 40), b = R(rng, 2, 14), c = n(); return ['(' + a + ' − ' + b + ') · ' + c, (a - b) * c]; },
      () => { const c = R(rng, 2, 9), q = R(rng, 2, 12), a = R(rng, 2, 9); return ['(' + (c * q - a) + ' + ' + a + ') : ' + c, q]; },
      () => { const a = R(rng, 6, 12), b = R(rng, 6, 12), c = R(rng, 2, 5), d = R(rng, 2, 5); return [a + ' · ' + b + ' − ' + c + ' · ' + d, a * b - c * d]; }
    ] : [
      () => { const a = n(), b = n(), c = n(); return [a + ' · (' + b + ' + ' + c + ') − ' + b + ' · ' + c, a * (b + c) - b * c]; },
      () => { const c = R(rng, 2, 9), q = R(rng, 2, 9), a = R(rng, 2, 9), b = R(rng, 2, 9); return ['(' + c * q + ' : ' + c + ' + ' + a + ') · ' + b, (q + a) * b]; },
      () => { const a = n(), b = n(), c = R(rng, 2, 5), d = R(rng, 2, 9); return ['[' + a + ' + (' + b + ' − 1) · ' + c + '] · ' + d, (a + (b - 1) * c) * d]; },
      () => { const a = n(), b = n(), c = n(), d = n(); return ['(' + a + ' + ' + b + ') · (' + c + ' + ' + d + ')', (a + b) * (c + d)]; }
    ];
    const [q, v] = rng.pick(forms)();
    return { q, v };
  }
  const regeln = (n) => task({
    title: 'Rechne nach den Regeln.', instr: 'Klammer zuerst, dann Punkt vor Strich.', n, cols: 2, w: 4,
    gen: (rng, level) => { let e; do { e = expr(rng, level); } while (e.v < 0); return { q: e.q, a: F(e.v) }; }
  });
  UB.simple({
    id: 'm-rechenregeln', fach: 'mathe', title: 'Rechenregeln', area: 'zahlen', klassen: [1, 2], img: 'MiniHoS_Geste_Stopp',
    merk: '<b>1. Klammern zuerst</b> (innen nach außen: ( ) vor [ ]). <b>2. Punkt vor Strich</b>: · und : vor + und −. <b>3.</b> Sonst rechnet man <b>von links nach rechts</b>. Beispiel: 20 − 3 · 4 = 20 − 12 = 8, aber (20 − 3) · 4 = 17 · 4 = 68.',
    pools: {},
    levels: {
      1: { ichkann: ['Du rechnest Punkt vor Strich.', 'Du rechnest Klammern zuerst.'], tasks: [regeln(12)] },
      2: { ichkann: ['Du kannst längere Rechnungen mit Klammern lösen.'], tasks: [regeln(12)] },
      3: { ichkann: ['Du kannst Rechnungen mit eckigen und runden Klammern lösen.'], tasks: [regeln(10)] }
    }
  });

  // ---------------------------------------------------------------- Teilbarkeit
  const divisors = (x) => [...Array(x).keys()].map(i => i + 1).filter(d => x % d === 0);
  const isPrime = (x) => x > 1 && divisors(x).length === 2;
  const teiler = (n) => task({
    title: 'Teilermengen', instr: 'Schreibe alle Teiler der Zahl auf.', n, cols: 1, w: 16,
    gen: (rng, level) => { const x = rng.pick(level === 1 ? [12, 15, 16, 18, 20, 24, 30, 36] : [28, 32, 40, 42, 45, 48, 50, 54, 56, 60, 64, 72]); return { q: 'T<sub>' + x + '</sub> = { {?} }', a: divisors(x).join(', '), key: x }; }
  });
  const vielfache = (n) => task({
    title: 'Vielfachenmengen', instr: 'Schreibe die ersten sechs Vielfachen auf.', n, cols: 1, w: 16,
    gen: (rng) => { const x = R(rng, 3, 15); return { q: 'V<sub>' + x + '</sub> = { {?}, … }', a: [1, 2, 3, 4, 5, 6].map(k => k * x).join(', '), key: x }; }
  });
  const regelTab = () => ({ type: 'fn', fn: (rng, level) => {
    const ds = [2, 3, 5, 9, 10];
    const xs = []; while (xs.length < (level === 1 ? 6 : 7)) { const x = R(rng, 100, level === 1 ? 999 : 99999); if (!xs.includes(x)) xs.push(x); }
    const head = ['Zahl'].concat(ds.map(d => 'durch ' + d));
    const mk = (s) => UB.table(head, xs.map(x => [F(x)].concat(ds.map(d => s ? (x % d === 0 ? UB.sol('✓') : UB.sol('–')) : UB.box))), 'center-cols');
    return { title: 'Teilbarkeitsregeln', instr: 'Kreuze an, wodurch die Zahl teilbar ist.', body: mk(false), sol: mk(true) };
  } });
  const ggt = (n) => task({
    title: 'ggT und kgV', instr: 'Bestimme den größten gemeinsamen Teiler und das kleinste gemeinsame Vielfache.', n, cols: 1, w: 4,
    gen: (rng) => { let a, b; do { const g = R(rng, 2, 12); a = g * R(rng, 2, 9); b = g * R(rng, 2, 9); } while (a === b); return { q: 'ggT(' + a + ', ' + b + ') = {?} &nbsp;&nbsp;&nbsp; kgV(' + a + ', ' + b + ') = {?}', a: [gcd(a, b), lcm(a, b)], key: a + '/' + b }; }
  });
  const primfaktor = (n) => task({
    title: 'Primfaktorzerlegung', instr: 'Zerlege in Primfaktoren.', n, cols: 2, w: 9,
    gen: (rng) => { const ps = [2, 2, 2, 3, 3, 5, 7]; let x = 1; const f = []; const k = R(rng, 3, 4); for (let i = 0; i < k; i++) { const p = rng.pick(ps); f.push(p); x *= p; } f.sort((a, b) => a - b); return { q: x + ' = {?}', a: f.join(' · '), key: x }; }
  });
  const primzahlen = () => ({ type: 'fn', fn: (rng) => {
    const start = R(rng, 1, 6) * 10; const xs = [...Array(20).keys()].map(i => start + i + 1);
    const mk = (s) => '<div class="mgrid c10" style="grid-template-columns:repeat(10,1fr);gap:1.5mm">' + xs.map(x => '<div class="mi" style="text-align:center;border:0.3mm solid #999;border-radius:1mm;' + (s && isPrime(x) ? 'background:#fde2e2;font-weight:700;color:#c62828' : '') + '">' + x + '</div>').join('') + '</div>';
    return { title: 'Primzahlen', instr: 'Kreise alle Primzahlen ein. Eine Primzahl hat genau zwei Teiler: 1 und sich selbst.', body: mk(false), sol: mk(true) };
  } });
  UB.simple({
    id: 'm-teilbarkeit', fach: 'mathe', title: 'Teiler und Vielfache', area: 'zahlen', klassen: [1, 2], img: 'MiniHoS_Forschen_Lupe',
    merk: '<b>Teiler</b> von 12: 1, 2, 3, 4, 6, 12. <b>Vielfache</b> von 4: 4, 8, 12, 16 … <b>Teilbarkeitsregeln</b>: durch 2 – letzte Ziffer gerade; durch 5 – letzte Ziffer 0 oder 5; durch 10 – letzte Ziffer 0; durch 3 bzw. 9 – Ziffernsumme durch 3 bzw. 9 teilbar. <b>Primzahlen</b> haben genau zwei Teiler (2, 3, 5, 7, 11, 13 …). <b>ggT</b>: größter gemeinsamer Teiler, <b>kgV</b>: kleinstes gemeinsames Vielfaches.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Teiler und Vielfache einer Zahl angeben.', 'Du kennst die Teilbarkeitsregeln.'], tasks: [teiler(4), vielfache(3), regelTab()] },
      2: { ichkann: ['Du wendest die Teilbarkeitsregeln an.', 'Du erkennst Primzahlen.'], tasks: [regelTab(), primzahlen(), teiler(3)] },
      3: { ichkann: ['Du kannst Zahlen in Primfaktoren zerlegen.', 'Du kannst ggT und kgV bestimmen.'], tasks: [primfaktor(6), ggt(4), primzahlen()] }
    }
  });
})();
