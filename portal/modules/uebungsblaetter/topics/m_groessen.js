/* Mathematik: Maße und Größen, Rechteck/Quadrat, Quader/Würfel (1./2. Klasse) */
(function () {
  const M = UB.M, { R, fmt, round, task, rect, cuboid } = M;
  const F = (x) => fmt(round(x, 6));

  // Einheiten je Größe, Faktor zur kleinsten Einheit
  const FAM = {
    laenge: [['mm', 1], ['cm', 10], ['dm', 100], ['m', 1000], ['km', 1e6]],
    masse: [['g', 1], ['dag', 10], ['kg', 1000], ['t', 1e6]],
    hohl: [['ml', 1], ['cl', 10], ['dl', 100], ['l', 1000], ['hl', 1e5]],
    zeit: [['s', 1], ['min', 60], ['h', 3600], ['d', 86400]],
    geld: [['c', 1], ['€', 100]]
  };
  const fams = (level) => level === 1 ? ['laenge', 'masse', 'zeit', 'geld'] : ['laenge', 'masse', 'hohl', 'zeit', 'geld'];
  function pairs(fam) {
    const u = FAM[fam]; const out = [];
    for (let i = 0; i < u.length; i++) for (let j = i + 1; j < u.length; j++) {
      const f = u[j][1] / u[i][1];
      if (fam === 'zeit' ? j === i + 1 : f <= 1000 || (fam === 'hohl' && f <= 1000) ) out.push([u[j], u[i], f]);
    }
    return out;
  }
  // groß → klein, ganzzahlig (Stufe 1)
  const umw1 = (n) => task({
    title: 'Umwandeln', instr: 'Wandle in die angegebene Einheit um.', n, cols: 2, w: 5,
    gen: (rng, level) => {
      const fam = rng.pick(fams(level)); const [big, small, f] = rng.pick(pairs(fam));
      if (rng.int(2)) { const x = R(rng, 2, 25); return { q: x + ' ' + big[0] + ' = {?} ' + small[0], a: F(x * f) }; }
      const x = R(rng, 2, 9), y = R(rng, 1, f - 1 > 99 ? 99 : f - 1);
      return { q: x + ' ' + big[0] + ' ' + y + ' ' + small[0] + ' = {?} ' + small[0], a: F(x * f + y) };
    }
  });
  // Kommaschreibweise (Stufe 2)
  const umw2 = (n) => task({
    title: 'Kommaschreibweise', instr: 'Wandle um. Achte auf das Komma.', n, cols: 2, w: 5,
    gen: (rng) => {
      const fam = rng.pick(['laenge', 'masse', 'hohl', 'geld']); const [big, small, f] = rng.pick(pairs(fam).filter(p => p[2] >= 10));
      const k = rng.int(3);
      if (k === 0) { const x = R(rng, 11, 99) / 10 * (f >= 100 ? 1 : 1); const v = round(x, 1); return { q: F(v) + ' ' + big[0] + ' = {?} ' + small[0], a: F(v * f) }; }
      if (k === 1) { const y = R(rng, 11, f * 9); return { q: F(y) + ' ' + small[0] + ' = {?} ' + big[0], a: F(y / f) }; }
      const x = R(rng, 1, 9), y = R(rng, 1, Math.min(f - 1, 99)); return { q: x + ' ' + big[0] + ' ' + y + ' ' + small[0] + ' = {?} ' + big[0], a: F(x + y / f) };
    }
  });
  // Rechnen mit Größen (Stufe 3)
  const groessenRechnen = (n) => task({
    title: 'Rechnen mit Größen', instr: 'Rechne. Wandle zuerst in dieselbe Einheit um.', n, cols: 2, w: 5,
    gen: (rng) => {
      const fam = rng.pick(['laenge', 'masse', 'hohl']); const [big, small, f] = rng.pick(pairs(fam).filter(p => p[2] >= 10 && p[2] <= 1000));
      const a = round(R(rng, 12, 95) / 10, 1), b = R(rng, 1, 9) * f / 10 + R(rng, 0, 9) * (f / 100 >= 1 ? f / 100 : 0);
      const plus = rng.int(2) || a * f <= b;
      return { q: F(a) + ' ' + big[0] + (plus ? ' + ' : ' − ') + F(b) + ' ' + small[0] + ' = {?} ' + big[0], a: F(plus ? a + b / f : a - b / f) };
    }
  });
  const zeitspanne = (n) => task({
    title: 'Zeitspannen', instr: 'Wie lange dauert es?', n, cols: 2, w: 6,
    gen: (rng) => {
      const s = R(rng, 6 * 12, 14 * 12) * 5, d = R(rng, 4, 70) * 5; const e = s + d;
      const t = (m) => Math.floor(m / 60) + ':' + String(m % 60).padStart(2, '0');
      return { q: 'von ' + t(s) + ' bis ' + t(e) + ' Uhr: {?}', a: (Math.floor(d / 60) ? Math.floor(d / 60) + ' h ' : '') + (d % 60 ? d % 60 + ' min' : '') };
    }
  });
  UB.simple({
    id: 'm-masse', fach: 'mathe', title: 'Maße und Größen', area: 'zahlen', klassen: [1, 2], img: 'MiniHoS_Mathe_Lineal',
    merk: '<b>Länge</b>: 1 km = 1 000 m, 1 m = 10 dm = 100 cm, 1 cm = 10 mm. <b>Masse</b>: 1 t = 1 000 kg, 1 kg = 100 dag = 1 000 g, 1 dag = 10 g. <b>Hohlmaß</b>: 1 hl = 100 l, 1 l = 10 dl = 100 cl = 1 000 ml. <b>Zeit</b>: 1 d = 24 h, 1 h = 60 min, 1 min = 60 s. <b>Geld</b>: 1 € = 100 c. Kommaschreibweise: 3,5 m = 3 m 50 cm = 350 cm.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kennst die wichtigsten Maßeinheiten.', 'Du kannst Größen in kleinere Einheiten umwandeln.'], tasks: [umw1(12), zeitspanne(4)] },
      2: { ichkann: ['Du kannst Größen in Kommaschreibweise umwandeln.'], tasks: [umw2(12), umw1(6)] },
      3: { ichkann: ['Du kannst mit Größen in verschiedenen Einheiten rechnen.', 'Du kannst Zeitspannen berechnen.'], tasks: [groessenRechnen(8), umw2(6), zeitspanne(4)] }
    }
  });

  // ---------------------------------------------------------------- Rechteck und Quadrat
  const U2 = ['mm²', 'cm²', 'dm²', 'm²', 'a', 'ha', 'km²'];
  const rechteck = (n, what) => ({ type: 'fn', fn: (rng, level) => {
    const unit = rng.pick(['cm', 'm', 'mm']);
    const its = M.uniq(n, () => { const sq = rng.int(4) === 0; const a = R(rng, 3, level === 1 ? 15 : 40); const b = sq ? a : R(rng, 2, level === 1 ? 12 : 30); return { a, b: b === a && !sq ? b + 1 : b, sq }; }, x => x.a + '/' + x.b);
    const cell = (x, s) => '<div class="mi">' + rect(x.a, x.b, x.a + ' ' + unit, x.b + ' ' + unit) +
      '<div>' + (x.sq && x.a === x.b ? 'Quadrat' : 'Rechteck') + ': u = ' + (s ? UB.sol(F(2 * (x.a + x.b)) + ' ' + unit) : UB.blank(5)) + ' &nbsp; A = ' + (s ? UB.sol(F(x.a * x.b) + ' ' + unit + '²') : UB.blank(5)) + '</div></div>';
    const mk = (s) => '<div class="mgrid c2">' + its.map(x => cell(x, s)).join('') + '</div>';
    return { title: 'Umfang und Flächeninhalt', instr: 'Berechne Umfang u und Flächeninhalt A. Rechne im Heft oder am Rand.', body: mk(false), sol: mk(true) };
  } });
  const flUmw = (n) => task({
    title: 'Flächenmaße umwandeln', instr: 'Die Umwandlungszahl ist 100.', n, cols: 2, w: 6,
    gen: (rng, level) => {
      const i = R(rng, 0, 5); const big = U2[i + 1], small = U2[i];
      if (level === 1 || rng.int(2)) { const x = R(rng, 2, 60); return { q: x + ' ' + big + ' = {?} ' + small, a: F(x * 100) }; }
      const y = R(rng, 101, 9999); return { q: F(y) + ' ' + small + ' = {?} ' + big, a: F(y / 100) };
    }
  });
  const rueckwaerts = (n) => task({
    title: 'Fehlende Seite', instr: 'Berechne die fehlende Seitenlänge.', n, cols: 2, w: 5,
    gen: (rng) => {
      const a = R(rng, 3, 20), b = R(rng, 2, 18);
      return rng.int(2) ? { q: 'Rechteck: A = ' + a * b + ' cm², a = ' + a + ' cm, b = {?}', a: b + ' cm' } : { q: 'Rechteck: u = ' + 2 * (a + b) + ' m, a = ' + a + ' m, b = {?}', a: b + ' m' };
    }
  });
  const TX_FL = [
    (r) => { const a = R(r, 3, 6), b = R(r, 3, 5), p = R(r, 18, 45); return { q: 'Ein Zimmer ist ' + a + ' m lang und ' + b + ' m breit. Der Boden wird mit Parkett ausgelegt. 1 m² kostet ' + p + ' €. Wie viel kostet der Boden?', a: 'A = ' + a + ' · ' + b + ' = ' + a * b + ' m², ' + a * b + ' · ' + p + ' = ' + a * b * p + ' € – Der Boden kostet ' + a * b * p + ' €.' }; },
    (r) => { const a = R(r, 12, 40), b = R(r, 8, 30); return { q: 'Ein rechteckiger Garten ist ' + a + ' m lang und ' + b + ' m breit. Er bekommt rundherum einen Zaun. Wie lang ist der Zaun?', a: 'u = 2 · (' + a + ' + ' + b + ') = ' + 2 * (a + b) + ' m – Der Zaun ist ' + 2 * (a + b) + ' m lang.' }; },
    (r) => { const a = R(r, 20, 60), b = R(r, 15, 40); return { q: 'Ein Sportplatz ist ' + a + ' m lang und ' + b + ' m breit. Wie groß ist seine Fläche in m² und in a?', a: 'A = ' + a + ' · ' + b + ' = ' + F(a * b) + ' m² = ' + F(a * b / 100) + ' a' }; },
    (r) => { const s = R(r, 3, 9); return { q: 'Ein quadratisches Beet hat eine Seitenlänge von ' + s + ' m. Wie groß ist die Fläche? Wie lang ist der Rand?', a: 'A = ' + s + ' · ' + s + ' = ' + s * s + ' m², u = 4 · ' + s + ' = ' + 4 * s + ' m' }; }
  ];
  const textFl = (n) => task({ title: 'Textaufgaben', instr: 'Schreibe die Rechnung und einen Antwortsatz.', n, mode: 'lines', lines: 2, gen: (rng) => M.pickT(rng, TX_FL, 'TX_FL') });
  UB.simple({
    id: 'm-flaechen', fach: 'mathe', title: 'Rechteck und Quadrat', area: 'geometrie', klassen: [1, 2], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: '<b>Rechteck</b>: Umfang u = 2 · a + 2 · b = 2 · (a + b), Flächeninhalt A = a · b. <b>Quadrat</b>: u = 4 · a, A = a · a. <b>Flächenmaße</b> (Umwandlungszahl 100): 1 cm² = 100 mm², 1 dm² = 100 cm², 1 m² = 100 dm², 1 a = 100 m², 1 ha = 100 a, 1 km² = 100 ha. Umfang hat eine Längeneinheit (cm), Flächeninhalt eine Flächeneinheit (cm²).',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Umfang und Flächeninhalt von Rechteck und Quadrat berechnen.'], tasks: [rechteck(4), flUmw(6)] },
      2: { ichkann: ['Du kannst Flächenmaße umwandeln.', 'Du kannst eine fehlende Seite berechnen.'], tasks: [rechteck(2), flUmw(8), rueckwaerts(4)] },
      3: { ichkann: ['Du kannst Sachaufgaben zu Flächen lösen.'], tasks: [textFl(3), rueckwaerts(4), flUmw(6)] }
    }
  });

  // ---------------------------------------------------------------- Quader und Würfel
  const quader = (n, withO) => ({ type: 'fn', fn: (rng, level) => {
    const its = M.uniq(n, () => { const w = rng.int(4) === 0; const a = R(rng, 2, 12); return w ? { a, b: a, c: a, w } : { a, b: R(rng, 2, 10), c: R(rng, 2, 9), w }; }, x => [x.a, x.b, x.c].join('/'));
    const cell = (x, s) => {
      const V = x.a * x.b * x.c, O = 2 * (x.a * x.b + x.a * x.c + x.b * x.c);
      return '<div class="mi">' + cuboid(x.a + ' cm', x.b + ' cm', x.c + ' cm') + '<div>' + (x.w ? 'Würfel' : 'Quader') + ': V = ' + (s ? UB.sol(F(V) + ' cm³') : UB.blank(5)) +
        (withO ? ' &nbsp; O = ' + (s ? UB.sol(F(O) + ' cm²') : UB.blank(5)) : '') + '</div></div>';
    };
    const mk = (s) => '<div class="mgrid c2">' + its.map(x => cell(x, s)).join('') + '</div>';
    return { title: withO ? 'Volumen und Oberfläche' : 'Volumen', instr: withO ? 'Berechne Volumen V und Oberfläche O.' : 'Berechne das Volumen V.', body: mk(false), sol: mk(true) };
  } });
  const U3 = ['mm³', 'cm³', 'dm³', 'm³'];
  const raumUmw = (n) => task({
    title: 'Raummaße umwandeln', instr: 'Die Umwandlungszahl ist 1 000. Es gilt: 1 dm³ = 1 l.', n, cols: 2, w: 6,
    gen: (rng, level) => {
      const k = rng.int(3);
      if (k === 2) { const x = level === 1 ? R(rng, 2, 40) : round(R(rng, 15, 95) / 10, 1); return { q: F(x) + ' dm³ = {?} l', a: F(x), key: 'l' + x }; }
      const i = R(rng, 0, 2), big = U3[i + 1], small = U3[i];
      if (k === 0 || level === 1) { const x = R(rng, 2, 30); return { q: x + ' ' + big + ' = {?} ' + small, a: F(x * 1000) }; }
      const y = R(rng, 1100, 9900); return { q: F(y) + ' ' + small + ' = {?} ' + big, a: F(y / 1000) };
    }
  });
  const TX_K = [
    (r) => { const a = R(r, 5, 12) * 10, b = R(r, 3, 6) * 10, c = R(r, 3, 6) * 10; const V = a * b * c; return { q: 'Ein Aquarium ist ' + a + ' cm lang, ' + b + ' cm breit und ' + c + ' cm hoch. Wie viele Liter Wasser passen hinein?', a: 'V = ' + a + ' · ' + b + ' · ' + c + ' = ' + F(V) + ' cm³ = ' + F(V / 1000) + ' dm³ = ' + F(V / 1000) + ' l' }; },
    (r) => { const a = R(r, 2, 6); return { q: 'Ein Würfel hat eine Kantenlänge von ' + a + ' dm. Wie groß sind Volumen und Oberfläche?', a: 'V = ' + a + ' · ' + a + ' · ' + a + ' = ' + a ** 3 + ' dm³, O = 6 · ' + a + ' · ' + a + ' = ' + 6 * a * a + ' dm²' }; },
    (r) => { const a = R(r, 4, 9), b = R(r, 3, 6), c = R(r, 2, 4); return { q: 'Eine Kiste ist ' + a + ' dm lang, ' + b + ' dm breit und ' + c + ' dm hoch. Wie viele Würfel mit 1 dm Kantenlänge passen hinein?', a: a + ' · ' + b + ' · ' + c + ' = ' + a * b * c + ' – Es passen ' + a * b * c + ' Würfel hinein.' }; },
    (r) => { const a = R(r, 8, 15), b = R(r, 5, 9), V = a * b * R(r, 2, 6); return { q: 'Ein Quader hat ein Volumen von ' + V + ' cm³. Er ist ' + a + ' cm lang und ' + b + ' cm breit. Wie hoch ist er?', a: 'h = ' + V + ' : (' + a + ' · ' + b + ') = ' + V / (a * b) + ' cm' }; }
  ];
  const textK = (n) => task({ title: 'Sachaufgaben', instr: 'Schreibe die Rechnung und das Ergebnis mit Einheit.', n, mode: 'lines', lines: 2, gen: (rng) => M.pickT(rng, TX_K, 'TX_K') });
  UB.simple({
    id: 'm-koerper', fach: 'mathe', title: 'Quader und Würfel', area: 'geometrie', klassen: [1, 2], img: 'MiniHoS_Forschen_Lupe',
    merk: '<b>Quader</b>: Volumen V = a · b · c, Oberfläche O = 2 · (a · b + a · c + b · c). <b>Würfel</b>: V = a · a · a, O = 6 · a · a. <b>Raummaße</b> (Umwandlungszahl 1 000): 1 cm³ = 1 000 mm³, 1 dm³ = 1 000 cm³, 1 m³ = 1 000 dm³. <b>1 dm³ = 1 l</b>, 1 cm³ = 1 ml.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst das Volumen von Quader und Würfel berechnen.', 'Du kannst Raummaße umwandeln.'], tasks: [quader(4, false), raumUmw(6)] },
      2: { ichkann: ['Du kannst Volumen und Oberfläche berechnen.', 'Du weißt: 1 dm³ = 1 l.'], tasks: [quader(4, true), raumUmw(8)] },
      3: { ichkann: ['Du kannst Sachaufgaben zu Quader und Würfel lösen.'], tasks: [textK(3), quader(2, true), raumUmw(4)] }
    }
  });
  // ================================================================ Stufe 4 · Profi
  const { L4, text } = M;
  const mehr = (n) => task({
    title: 'Mehrere Einheiten', instr: 'Wandle alle Größen in die angegebene Einheit um und rechne.', n, cols: 1, w: 6,
    gen: (rng) => {
      const k = rng.int(3);
      if (k === 0) { const a = round(R(rng, 12, 95) / 10, 1), b = R(rng, 2, 95), c = R(rng, 1, 9); return { q: F(a) + ' kg + ' + b + ' dag + ' + c + ' g = {?} g', a: F(a * 1000 + b * 10 + c) }; }
      if (k === 1) { const a = round(R(rng, 102, 995) / 100, 2), b = R(rng, 2, 95), c = R(rng, 1, 9); return { q: F(a) + ' m + ' + b + ' cm + ' + c + ' mm = {?} mm', a: F(Math.round(a * 1000) + b * 10 + c) }; }
      const a = round(R(rng, 12, 95) / 10, 1), b = R(rng, 1, 9), c = R(rng, 5, 95); return { q: F(a) + ' l − ' + b + ' dl − ' + c + ' ml = {?} ml', a: F(Math.round(a * 1000) - b * 100 - c) };
    }
  });
  const nacht = (n) => task({
    title: 'Zeitspannen über Mitternacht', instr: 'Wie lange dauert es?', n, cols: 1, w: 6,
    gen: (rng) => {
      const s = R(rng, 18 * 12, 23 * 12 + 11) * 5, d = R(rng, 40, 130) * 5, e = (s + d) % 1440;
      const t = (m) => Math.floor(m / 60) + ':' + String(m % 60).padStart(2, '0');
      return { q: 'Abfahrt ' + t(s) + ' Uhr, Ankunft am nächsten Tag ' + t(e) + ' Uhr: {?}', a: Math.floor(d / 60) + ' h' + (d % 60 ? ' ' + d % 60 + ' min' : '') };
    }
  });
  const ordnen = (n) => task({
    title: 'Ordne der Größe nach.', instr: 'Beginne mit der kleinsten Größe. Wandle dazu in dieselbe Einheit um.', n, cols: 1, w: 16,
    gen: (rng) => {
      const fam = rng.pick(['laenge', 'masse', 'hohl']); const us = FAM[fam].slice(0, fam === 'laenge' ? 4 : 3);
      const vals = []; while (vals.length < 4) { const u = rng.pick(us), base = R(rng, 300, 4000), v = base / u[1]; if (!vals.some(x => x.b === base)) vals.push({ b: base, s: F(round(v, 3)) + ' ' + u[0] }); }
      return { q: vals.map(v => v.s).join(' ; ') + ' <br>{?}', a: vals.slice().sort((a, b) => a.b - b.b).map(v => v.s).join(' &lt; '), key: vals.map(v => v.s).join() };
    }
  });
  L4('m-masse', ['Du rechnest mit Größen in mehreren Einheiten.', 'Du vergleichst und ordnest Größen.', 'Du berechnest Zeitspannen auch über Mitternacht.'],
    [mehr(4), ordnen(3), nacht(3), groessenRechnen(4)]);

  const TX_FL4 = [
    (r) => { const a = R(r, 8, 16), b = R(r, 6, 12), c = R(r, 2, a - 3), d = R(r, 2, b - 3); return { q: 'Aus einem rechteckigen Grundstück (' + a + ' m × ' + b + ' m) wird an einer Ecke ein rechteckiges Stück (' + c + ' m × ' + d + ' m) für eine Garage abgetrennt. Wie groß ist die Restfläche? Wie lang ist ihr Umfang?', a: 'A = ' + a + ' · ' + b + ' − ' + c + ' · ' + d + ' = ' + (a * b - c * d) + ' m²; u = 2 · (' + a + ' + ' + b + ') = ' + 2 * (a + b) + ' m (der Umfang ändert sich nicht).' }; },
    (r) => { const a = R(r, 3, 6), b = R(r, 2, 5); return { q: 'Ein Badezimmer ist ' + a + ' m lang und ' + b + ' m breit. Der Boden wird mit quadratischen Fliesen (25 cm Seitenlänge) belegt. Wie viele Fliesen braucht man?', a: 'A = ' + a * b + ' m² = ' + F(a * b * 10000) + ' cm²; eine Fliese: 625 cm²; ' + F(a * b * 10000) + ' : 625 = ' + a * b * 16 + ' Fliesen.' }; },
    (r) => { const s = r.pick([6, 8, 10, 12]); const ds = [...Array(s - 1).keys()].map(i => i + 1).filter(d => (s * s) % d === 0 && s * s / d <= 4 * s); const a = r.pick(ds), b = s * s / a; return { q: 'Ein Rechteck ist ' + a + ' m lang und ' + b + ' m breit. Ein Quadrat hat denselben Flächeninhalt. Wie lang ist seine Seite? Welche Figur hat den kleineren Umfang?', a: 'A = ' + s * s + ' m², Seite ' + s + ' m; u(Rechteck) = ' + 2 * (a + b) + ' m, u(Quadrat) = ' + 4 * s + ' m – das Quadrat hat den kleineren Umfang.' }; },
    (r) => { const a = R(r, 3, 9), b = R(r, 2, 8); return { q: 'Ein Rechteck ist ' + a + ' cm lang und ' + b + ' cm breit. Beide Seiten werden verdoppelt. Wie verändern sich Umfang und Flächeninhalt?', a: 'u: ' + 2 * (a + b) + ' cm → ' + 4 * (a + b) + ' cm (doppelt so groß); A: ' + a * b + ' cm² → ' + 4 * a * b + ' cm² (viermal so groß).' }; },
    (r) => { const b = R(r, 8, 20), u = 2 * (b + R(r, 10, 30)); const a = u / 2 - b; return { q: 'Ein Zaun um einen rechteckigen Garten ist ' + u + ' m lang. Der Garten ist ' + b + ' m breit. Wie lang ist er? Wie groß ist seine Fläche?', a: 'a = ' + u + ' : 2 − ' + b + ' = ' + a + ' m; A = ' + a + ' · ' + b + ' = ' + a * b + ' m²' }; }
  ];
  L4('m-flaechen', ['Du berechnest zusammengesetzte Flächen.', 'Du löst Sachaufgaben mit Umwandlungen.', 'Du erklärst, wie sich Umfang und Fläche verändern.'],
    [text('Sachaufgaben mit mehreren Schritten', 'Schreibe die Rechnung und einen Antwortsatz.', TX_FL4, 'fl4', 4), flUmw(6)]);

  const TX_K4 = [
    (r) => { const a = R(r, 4, 8) * 10, b = R(r, 3, 5) * 10, h = R(r, 1, 4); return { q: 'In ein Aquarium (' + a + ' cm lang, ' + b + ' cm breit) wird ein Stein gelegt. Der Wasserstand steigt um ' + h + ' cm. Wie groß ist das Volumen des Steins?', a: 'V = ' + a + ' · ' + b + ' · ' + h + ' = ' + F(a * b * h) + ' cm³ = ' + F(a * b * h / 1000) + ' l' }; },
    (r) => { const k = R(r, 2, 5), x = R(r, 2, 6), y = R(r, 2, 5), z = R(r, 2, 4); return { q: 'Ein Quader (' + k * x + ' cm × ' + k * y + ' cm × ' + k * z + ' cm) wird aus Würfeln mit ' + k + ' cm Kantenlänge gebaut. Wie viele Würfel braucht man?', a: x + ' · ' + y + ' · ' + z + ' = ' + x * y * z + ' Würfel' }; },
    (r) => { const b = R(r, 10, 15), t = round(R(r, 12, 20) / 10, 1); return { q: 'Ein Schwimmbecken ist 25 m lang, ' + b + ' m breit und ' + F(t) + ' m tief. Wie viele Liter Wasser fasst es?', a: 'V = 25 · ' + b + ' · ' + F(t) + ' = ' + F(25 * b * t) + ' m³ = ' + F(Math.round(25 * b * t * 1000)) + ' l' }; },
    (r) => { const a = R(r, 2, 6); return { q: 'Ein Würfel hat ein Volumen von ' + a ** 3 + ' dm³. Wie groß ist seine Oberfläche?', a: 'a = ' + a + ' dm (' + a + ' · ' + a + ' · ' + a + ' = ' + a ** 3 + '); O = 6 · ' + a + ' · ' + a + ' = ' + 6 * a * a + ' dm²' }; },
    (r) => { const a = R(r, 10, 30), b = R(r, 8, 20), c = R(r, 5, 15); return { q: 'Für ein Kantenmodell eines Quaders (' + a + ' cm × ' + b + ' cm × ' + c + ' cm) braucht man Draht. Wie viel Draht ist nötig?', a: '4 · (' + a + ' + ' + b + ' + ' + c + ') = ' + 4 * (a + b + c) + ' cm' }; }
  ];
  L4('m-koerper', ['Du löst Sachaufgaben zu Volumen und Oberfläche mit mehreren Schritten.', 'Du schließt vom Volumen auf die Kantenlänge.'],
    [text('Sachaufgaben mit mehreren Schritten', 'Schreibe die Rechnung und das Ergebnis mit Einheit.', TX_K4, 'k4', 4), quader(2, true)]);


  // ================================================================ Mehr Sachaufgaben (Pool-Erweiterung)
  TX_FL.push(
    (r) => { const a = R(r, 20, 60), b = R(r, 15, 45); return { q: 'Ein Bild ist ' + a + ' cm breit und ' + b + ' cm hoch. Es bekommt einen Rahmen. Wie lang ist die Rahmenleiste insgesamt?', a: 'u = 2 · (' + a + ' + ' + b + ') = ' + 2 * (a + b) + ' cm' }; },
    (r) => { const a = R(r, 3, 8), h = R(r, 2, 3); const A = a * h; return { q: 'Eine Wand ist ' + a + ' m lang und ' + h + ' m hoch. Eine Dose Farbe reicht für 5 m². Wie viele Dosen braucht man?', a: 'A = ' + a + ' · ' + h + ' = ' + A + ' m²; ' + A + ' : 5 = ' + F(A / 5) + ' → ' + Math.ceil(A / 5) + ' Dosen' }; },
    (r) => { const s = R(r, 6, 25); return { q: 'Ein quadratischer Spielplatz hat eine Seitenlänge von ' + s + ' m. Wie lang ist der Zaun rundherum? Wie groß ist die Fläche?', a: 'u = 4 · ' + s + ' = ' + 4 * s + ' m; A = ' + s + ' · ' + s + ' = ' + s * s + ' m²' }; },
    (r) => { const a = R(r, 2, 8), b = R(r, 1, 4), k = R(r, 4, 9); return { q: 'Ein Blumenbeet ist ' + a + ' m lang und ' + b + ' m breit. Pro m² werden ' + k + ' Pflanzen gesetzt. Wie viele Pflanzen braucht man?', a: 'A = ' + a + ' · ' + b + ' = ' + a * b + ' m²; ' + a * b + ' · ' + k + ' = ' + a * b * k + ' Pflanzen' }; }
  );
  TX_K.push(
    (r) => { const a = R(r, 10, 20), b = R(r, 10, 20), h = R(r, 2, 4); return { q: 'Eine Sandkiste ist ' + a + ' dm lang und ' + b + ' dm breit. Sie wird ' + h + ' dm hoch mit Sand gefüllt. Wie viel Sand braucht man (in dm³ und m³)?', a: 'V = ' + a + ' · ' + b + ' · ' + h + ' = ' + F(a * b * h) + ' dm³ = ' + F(a * b * h / 1000) + ' m³' }; },
    (r) => { const a = R(r, 10, 30), b = R(r, 8, 20), c = R(r, 4, 12); const O = 2 * (a * b + a * c + b * c); return { q: 'Ein Geschenk ist ' + a + ' cm lang, ' + b + ' cm breit und ' + c + ' cm hoch. Wie viel Geschenkpapier braucht man mindestens?', a: 'O = 2 · (' + a + ' · ' + b + ' + ' + a + ' · ' + c + ' + ' + b + ' · ' + c + ') = ' + F(O) + ' cm²' }; },
    (r) => { const a = R(r, 5, 9), b = R(r, 5, 9), h = R(r, 12, 20); return { q: 'Eine Saftpackung ist ' + a + ' cm lang, ' + b + ' cm breit und ' + h + ' cm hoch. Wie viel Saft passt hinein (in ml)?', a: 'V = ' + a + ' · ' + b + ' · ' + h + ' = ' + F(a * b * h) + ' cm³ = ' + F(a * b * h) + ' ml' }; },
    (r) => { const a = R(r, 3, 7), b = R(r, 3, 6), h = r.pick([2.5, 3]); return { q: 'Ein Zimmer ist ' + a + ' m lang, ' + b + ' m breit und ' + F(h) + ' m hoch. Wie viel m³ Luft sind darin?', a: 'V = ' + a + ' · ' + b + ' · ' + F(h) + ' = ' + F(a * b * h) + ' m³' }; }
  );
  TX_FL4.push(
    (r) => { const a = R(r, 10, 20), b = R(r, 8, 15); return { q: 'Ein rechteckiger Garten ist ' + a + ' m lang und ' + b + ' m breit. Innen am Rand entlang führt ein 1 m breiter Weg. Wie groß ist die Rasenfläche in der Mitte? Wie groß ist der Weg?', a: 'Rasen: ' + (a - 2) + ' · ' + (b - 2) + ' = ' + (a - 2) * (b - 2) + ' m²; Weg: ' + a * b + ' − ' + (a - 2) * (b - 2) + ' = ' + (a * b - (a - 2) * (b - 2)) + ' m²' }; },
    (r) => { const a = R(r, 12, 30) * 10, b = R(r, 8, 20) * 10, p = R(r, 15, 40); const A = a * b / 10000; return { q: 'Ein Teppich ist ' + a + ' cm lang und ' + b + ' cm breit. 1 m² kostet ' + p + ' €. Wie viel kostet der Teppich?', a: 'A = ' + a + ' · ' + b + ' = ' + F(a * b) + ' cm² = ' + F(A) + ' m²; ' + F(A) + ' · ' + p + ' = ' + fmt(round(A * p, 2), 2) + ' €' }; }
  );
  TX_K4.push(
    (r) => { const a = R(r, 4, 8), b = R(r, 4, 8), h = R(r, 8, 12), v = r.pick([2, 4, 5]); const V = a * b * h; return { q: 'Eine quaderförmige Regentonne ist ' + a + ' dm lang, ' + b + ' dm breit und ' + h + ' dm hoch. Pro Minute fließen ' + v + ' Liter Regenwasser hinein. Nach wie vielen Minuten ist sie voll?', a: 'V = ' + F(V) + ' dm³ = ' + F(V) + ' l; ' + F(V) + ' : ' + v + ' = ' + F(round(V / v, 2)) + ' min' }; },
    (r) => { const a = R(r, 2, 9); return { q: 'Ein Würfel hat eine Oberfläche von ' + 6 * a * a + ' cm². Wie groß ist sein Volumen?', a: 'eine Fläche: ' + 6 * a * a + ' : 6 = ' + a * a + ' cm², also a = ' + a + ' cm; V = ' + a + ' · ' + a + ' · ' + a + ' = ' + a ** 3 + ' cm³' }; }
  );
})();
