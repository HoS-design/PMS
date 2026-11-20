/* Mathematik – Zusammengesetzte Körper.
   m-quaderkoerper (1./2. Kl.): aus Quadern zusammengesetzte und ausgehöhlte Körper.
   m-zuskoerper (4. Kl.): Kombinationen mit Prisma, Pyramide, Zylinder, Kegel, Halbkugel; Hohlkörper.
   UB.KZ.haus wird auch in „Prisma und Pyramide“ (3. Kl.) verwendet. Skizzen im Schrägriss (nicht maßstabsgetreu). */
(function () {
  const M = UB.M, G = UB.G, { R, fmt, round, task } = M;
  const { svgMM, T, L, n2 } = G;
  const F = (x) => fmt(round(x, 6)), F2 = (x) => fmt(round(x, 2));
  const PI = 3.14;

  // ---------------------------------------------------------------- Schrägriss
  // x nach rechts, y nach hinten (45°, verkürzt 0,5), z nach oben
  const proj = (s, X0, Y0) => (p) => [X0 + s * (p[0] + 0.5 * p[1] * 0.7071), Y0 - s * (p[2] + 0.5 * p[1] * 0.7071)];
  const poly = (pts, fill) => '<polygon points="' + pts.map(p => n2(p[0]) + ',' + n2(p[1])).join(' ') + '" fill="' + fill + '" stroke="#111" stroke-width="0.4" stroke-linejoin="round"/>';
  // Quader von (x0,y0,z0) mit Maßen (a,b,c): sichtbar sind Vorder-, Ober- und rechte Seitenfläche
  const box = (P, x0, y0, z0, a, b, c) => {
    const v = (x, y, z) => P([x0 + x, y0 + y, z0 + z]);
    return poly([v(0, 0, 0), v(a, 0, 0), v(a, 0, c), v(0, 0, c)], '#eef3ff') + poly([v(0, 0, c), v(a, 0, c), v(a, b, c), v(0, b, c)], '#dbe5ff') + poly([v(a, 0, 0), v(a, b, 0), v(a, b, c), v(a, 0, c)], '#c7d6fb');
  };
  const lab = (p, t, o) => T(p, t, Object.assign({ fs: 2.8 }, o || {}));
  // Maßstab so wählen, dass die Skizze in W×H mm passt
  const fit = (ext, W, H) => Math.min((W - 26) / (ext[0] + 0.354 * ext[1]), (H - 10) / (ext[2] + 0.354 * ext[1]));

  // ================================================================ Quaderkörper (1./2. Klasse)
  function quaderAufgabe(rng, kind) {
    const W = 62, H = 44;
    if (kind === 'stufe') {             // Quader A unten, darauf hinten Quader B mit voller Breite
      const a = R(rng, 4, 12), b = R(rng, 4, 10), c1 = R(rng, 2, 6), b2 = R(rng, 2, b - 1), c2 = R(rng, 2, 6);
      const s = fit([a, b, c1 + c2], W, H), P = proj(s, 12, H - 6);
      let g = box(P, 0, 0, 0, a, b, c1) + box(P, 0, b - b2, c1, a, b2, c2);
      g += lab([P([a / 2, 0, 0])[0], P([0, 0, 0])[1] + 3.6], a + ' cm') + lab(G.add(P([a, b / 2, 0]), [3, 1.6]), b + ' cm', { a: 'start' }) + lab(G.add(P([0, 0, c1 / 2]), [-1.2, 1]), c1 + ' cm', { a: 'end' }) +
        lab(G.add(P([0, b - b2, c1 + c2 / 2]), [-1.2, 1]), c2 + ' cm', { a: 'end' }) + lab(G.add(P([a, b - b2 / 2, c1 + c2]), [2.5, -1]), b2 + ' cm', { a: 'start' });
      const V = a * b * c1 + a * b2 * c2, O = 2 * (a * b + a * c1 + b * c1) + 2 * (a * b2 + a * c2 + b2 * c2) - 2 * a * b2;
      return { svg: svgMM(W, H, g), dims: { a, b, c1, b2, c2 }, V, O, txt: 'unten Quader ' + a + ' × ' + b + ' × ' + c1 + ' cm, oben Quader ' + a + ' × ' + b2 + ' × ' + c2 + ' cm', key: 'st' + [a, b, c1, b2, c2] };
    }
    if (kind === 'turm') {              // kleinerer Quader mittig oben
      const a = R(rng, 6, 12), b = R(rng, 5, 10), c1 = R(rng, 2, 5), a2 = R(rng, 2, a - 2), b2 = R(rng, 2, b - 2), c2 = R(rng, 2, 6);
      const s = fit([a, b, c1 + c2], W, H), P = proj(s, 12, H - 6), x2 = (a - a2) / 2, y2 = (b - b2) / 2;
      let g = box(P, 0, 0, 0, a, b, c1) + box(P, x2, y2, c1, a2, b2, c2);
      g += lab([P([a / 2, 0, 0])[0], P([0, 0, 0])[1] + 3.6], a + ' cm') + lab(G.add(P([a, b / 2, 0]), [3, 1.6]), b + ' cm', { a: 'start' }) + lab(G.add(P([0, 0, c1 / 2]), [-1.2, 1]), c1 + ' cm', { a: 'end' }) +
        lab(G.add(P([x2 + a2 / 2, y2, c1 + c2]), [0, -1.5]), a2 + ' cm') + lab(G.add(P([x2 + a2, y2 + b2 / 2, c1 + c2]), [2.5, -0.5]), b2 + ' cm', { a: 'start' }) + lab(G.add(P([x2, y2, c1 + c2 / 2]), [-1.2, 1]), c2 + ' cm', { a: 'end' });
      const V = a * b * c1 + a2 * b2 * c2, O = 2 * (a * b + a * c1 + b * c1) + 2 * (a2 * b2 + a2 * c2 + b2 * c2) - 2 * a2 * b2;
      return { svg: svgMM(W, H, g), V, O, txt: 'unten Quader ' + a + ' × ' + b + ' × ' + c1 + ' cm, oben mittig Quader ' + a2 + ' × ' + b2 + ' × ' + c2 + ' cm', key: 'tu' + [a, b, c1, a2, b2, c2] };
    }
    // ausgehöhlt: Quader a×b×c mit durchgehendem Loch p×q von vorne nach hinten
    const a = R(rng, 6, 14), b = R(rng, 4, 12), c = R(rng, 5, 10), p = R(rng, 2, a - 3), q = R(rng, 2, c - 3);
    const s = fit([a, b, c], W, H), P = proj(s, 12, H - 6), x0 = (a - p) / 2, z0 = (c - q) / 2;
    let g = box(P, 0, 0, 0, a, b, c);
    const h = [P([x0, 0, z0]), P([x0 + p, 0, z0]), P([x0 + p, 0, z0 + q]), P([x0, 0, z0 + q])];
    g += poly(h, '#94a3b8') + poly([h[3], h[2], P([x0 + p, Math.min(b, 2.5), z0 + q]), P([x0, Math.min(b, 2.5), z0 + q])], '#64748b');
    g += lab([P([a / 2, 0, 0])[0], P([0, 0, 0])[1] + 3.6], a + ' cm') + lab(G.add(P([a, b / 2, 0]), [3, 1.6]), b + ' cm', { a: 'start' }) + lab(G.add(P([0, 0, c / 2]), [-1.2, 1]), c + ' cm', { a: 'end' }) +
      lab(G.add(P([x0 + p / 2, 0, z0]), [0, 3]), p + ' cm', { fill: '#c62828' }) + lab(G.add(P([x0 + p, 0, z0 + q / 2]), [1, 1]), q + ' cm', { fill: '#c62828', a: 'start' });
    const V = a * b * c - p * q * b, O = 2 * (a * b + a * c + b * c) - 2 * p * q + 2 * (p + q) * b;
    return { svg: svgMM(W, H, g), V, O, txt: 'Quader ' + a + ' × ' + b + ' × ' + c + ' cm mit durchgehendem Loch ' + p + ' × ' + q + ' cm (Tiefe ' + b + ' cm)', key: 'ho' + [a, b, c, p, q] };
  }
  const qVol = (n, kinds) => ({ type: 'fn', fn: (rng) => {
    const its = M.uniq(n, () => quaderAufgabe(rng, rng.pick(kinds)), x => x.key);
    const cell = (x, s) => '<div class="mi">' + x.svg + '<br>V = ' + (s ? UB.sol(F(x.V) + ' cm³') : UB.blank(5)) + '</div>';
    return { title: 'Volumen zusammengesetzter Körper', instr: 'Zerlege den Körper in Quader (oder ergänze und ziehe ab) und berechne das Volumen.', body: '<div class="mgrid c2">' + its.map(x => cell(x, false)).join('') + '</div>', sol: '<div class="mgrid c2">' + its.map(x => cell(x, true)).join('') + '</div>' };
  } });
  const qOber = (n, kinds) => ({ type: 'fn', fn: (rng) => {
    const its = M.uniq(n, () => quaderAufgabe(rng, rng.pick(kinds)), x => x.key);
    const cell = (x, s) => '<div class="mi">' + x.svg + '<br>V = ' + (s ? UB.sol(F(x.V) + ' cm³') : UB.blank(5)) + '<br>O = ' + (s ? UB.sol(F(x.O) + ' cm²') : UB.blank(5)) + '</div>';
    return { title: 'Volumen und Oberfläche', instr: 'Berechne Volumen und Oberfläche. Achtung: Flächen, an denen die Teile aneinanderstoßen, gehören nicht zur Oberfläche; bei Löchern kommen die Innenwände dazu.', body: '<div class="mgrid c2">' + its.map(x => cell(x, false)).join('') + '</div>', sol: '<div class="mgrid c2">' + its.map(x => cell(x, true)).join('') + '</div>' };
  } });
  const TXQ = [
    (r) => { const l = R(r, 10, 25), b = R(r, 6, 12), t1 = R(r, 8, 12) / 10, l1 = R(r, 3, l - 4), t2 = R(r, 18, 30) / 10; const V = l1 * b * t1 + (l - l1) * b * t2;
      return { q: 'Ein Schwimmbecken ist ' + b + ' m breit. Der Nichtschwimmerteil ist ' + l1 + ' m lang und ' + F(t1) + ' m tief, der Schwimmerteil ' + (l - l1) + ' m lang und ' + F(t2) + ' m tief. Wie viele Liter Wasser passen hinein?', a: l1 + ' · ' + b + ' · ' + F(t1) + ' + ' + (l - l1) + ' · ' + b + ' · ' + F(t2) + ' = ' + F(V) + ' m³ = ' + F(V * 1000) + ' l' }; },
    (r) => { const n = R(r, 3, 4), br = R(r, 8, 15) / 10, t = 3, h = 2; let V = 0; const parts = []; for (let i = 1; i <= n; i++) { V += br * t / 10 * h / 10 * i; parts.push(i + ' · ' + F(br) + ' · 0,3 · 0,2'); }
      return { q: 'Eine Betonstiege hat ' + n + ' Stufen, jede ' + F(br) + ' m breit, 30 cm tief und 20 cm hoch (sie ist massiv, von der Seite sieht man eine Treppe). Wie viel m³ Beton braucht man?', a: 'Die Stiege besteht aus 1 + 2 + … + ' + n + ' = ' + (n * (n + 1) / 2) + ' gleichen Quadern zu ' + F(br) + ' · 0,3 · 0,2 = ' + F(round(br * 0.06, 4)) + ' m³ → ' + F(round(V, 4)) + ' m³' }; },
    (r) => { const a = R(r, 8, 14), b = R(r, 6, 10), c = R(r, 3, 6), w = R(r, 1, 2) / 2; const ai = a - 2 * w, bi = b - 2 * w, ci = c - w; const V = a * b * c - ai * bi * ci;
      return { q: 'Ein oben offener Holzkasten ist außen ' + a + ' cm lang, ' + b + ' cm breit und ' + c + ' cm hoch. Die Wände und der Boden sind ' + F(w) + ' cm dick. Wie viel cm³ Holz wurden verbaut? Wie viel passt hinein?', a: 'außen ' + F(a * b * c) + ' cm³ − innen ' + F(ai) + ' · ' + F(bi) + ' · ' + F(ci) + ' = ' + F(ai * bi * ci) + ' cm³ → Holz: ' + F(V) + ' cm³; Inhalt: ' + F(ai * bi * ci) + ' cm³' }; }
  ];
  const qText = (n) => task({ title: 'Sachaufgaben', instr: 'Fertige eine Skizze an und schreibe die Rechnung auf.', n, mode: 'lines', lines: 2, gen: (rng) => M.pickT(rng, TXQ, 'TXQ') });
  UB.simple({
    id: 'm-quaderkoerper', fach: 'mathe', title: 'Zusammengesetzte Quaderkörper', area: 'geometrie', klassen: [1, 2], img: 'MiniHoS_Forschen_Lupe',
    merk: '<b>Zusammengesetzte Körper</b> zerlegt man in Quader und addiert deren Volumen. Oder man <b>ergänzt</b> zu einem großen Quader und zieht ab, was fehlt (z. B. bei Löchern). <b>Oberfläche</b>: Nur die Flächen zählen, die man von außen berühren kann. Stoßen zwei Quader aneinander, fällt die Berührfläche zweimal weg (bei beiden Quadern). Bei einem durchgehenden Loch fallen Vorder- und Rückseite des Lochs weg, die Innenwände kommen dazu. 1 dm³ = 1 l, 1 m³ = 1 000 l.',
    pools: {},
    levels: {
      1: { ichkann: ['Du berechnest das Volumen von Körpern aus zwei Quadern.'], tasks: [qVol(4, ['stufe', 'turm'])] },
      2: { ichkann: ['Du berechnest das Volumen ausgehöhlter Körper.', 'Du berechnest Oberflächen zusammengesetzter Körper.'], tasks: [qVol(2, ['hohl']), qOber(2, ['stufe', 'turm'])] },
      3: { ichkann: ['Du löst Sachaufgaben zu zusammengesetzten Körpern.'], tasks: [qOber(2, ['hohl', 'stufe', 'turm']), qText(2)] }
    }
  });

  // ================================================================ Körper mit Prisma, Pyramide, Zylinder, Kegel, Kugel
  // Haus (Quader + Dachprisma) und Turm (Quader + Pyramide)
  function hausTurm(rng, kind) {
    const W = 60, H = 46;
    if (kind === 'haus') {
      const a = R(rng, 6, 12), b = R(rng, 5, 12), h = R(rng, 3, 7), hd = R(rng, 2, 5);
      const s = fit([a, b, h + hd], W, H), P = proj(s, 12, H - 5);
      let g = box(P, 0, 0, 0, a, b, h);
      const f1 = P([0, 0, h]), f2 = P([a, 0, h]), ft = P([a / 2, 0, h + hd]), b2 = P([a, b, h]), bt = P([a / 2, b, h + hd]);
      g += poly([f2, b2, bt, ft], '#cbd5f5') + poly([f1, f2, ft], '#eef3ff');
      g += lab([P([a / 2, 0, 0])[0], P([0, 0, 0])[1] + 3.6], a + ' cm') + lab(G.add(P([a, b / 2, 0]), [3, 1.6]), b + ' cm', { a: 'start' }) + lab(G.add(P([0, 0, h / 2]), [-1.2, 1]), h + ' cm', { a: 'end' }) + L(ft, P([a / 2, 0, h]), { c: '#c62828', w: 0.3, d: '1 0.8' }) + lab(G.add(P([a / 2, 0, h + hd / 2]), [1, 1]), hd + ' cm', { fill: '#c62828', a: 'start' });
      return { svg: svgMM(W, H, g), V: a * b * h + a * hd / 2 * b, txt: 'Haus', calc: a + ' · ' + b + ' · ' + h + ' + ' + a + ' · ' + hd + ' : 2 · ' + b, key: 'ha' + [a, b, h, hd] };
    }
    const a = R(rng, 4, 10), h = R(rng, 4, 12), hp = R(rng, 1, 4) * 3;
    const s = fit([a, a, h + hp], W, H), P = proj(s, 12, H - 5);
    let g = box(P, 0, 0, 0, a, a, h);
    const t = P([a / 2, a / 2, h + hp]), c = [P([0, 0, h]), P([a, 0, h]), P([a, a, h])];
    g += poly([c[1], c[2], t], '#cbd5f5') + poly([c[0], c[1], t], '#eef3ff') + L(t, P([a / 2, a / 2, h]), { c: '#c62828', w: 0.3, d: '1 0.8' });
    g += lab([P([a / 2, 0, 0])[0], P([0, 0, 0])[1] + 3.6], a + ' cm') + lab(G.add(P([0, 0, h / 2]), [-1.2, 1]), h + ' cm', { a: 'end' }) + lab(G.add(P([a / 2, a / 2, h + hp / 2]), [1.5, 1]), hp + ' cm', { fill: '#c62828', a: 'start' });
    return { svg: svgMM(W, H, g), V: a * a * h + a * a * hp / 3, txt: 'Turm', calc: a + '² · ' + h + ' + ' + a + '² · ' + hp + ' : 3', key: 'tu' + [a, h, hp] };
  }
  const hausTask = (n) => ({ type: 'fn', fn: (rng) => {
    const its = M.uniq(n, () => hausTurm(rng, rng.pick(['haus', 'turm'])), x => x.key);
    const cell = (x, s) => '<div class="mi">' + x.svg + '<br>V = ' + (s ? UB.sol(x.calc + ' = ' + F(x.V) + ' cm³') : UB.blank(6)) + '</div>';
    return { title: 'Zusammengesetzte Körper', instr: 'Haus: Quader mit dreieckigem Dachprisma. Turm: Quader (quadratische Grundfläche) mit Pyramide. Berechne das Volumen.', body: '<div class="mgrid c2">' + its.map(x => cell(x, false)).join('') + '</div>', sol: '<div class="mgrid c2">' + its.map(x => cell(x, true)).join('') + '</div>' };
  } });
  UB.KZ = { haus: hausTask };

  // Drehkörper-Skizzen
  const ell = (cx, cy, rx, ry, dashedBack) => dashedBack
    ? '<path d="M' + n2(cx - rx) + ' ' + n2(cy) + ' A' + n2(rx) + ' ' + n2(ry) + ' 0 0 0 ' + n2(cx + rx) + ' ' + n2(cy) + '" fill="none" stroke="#111" stroke-width="0.4"/><path d="M' + n2(cx - rx) + ' ' + n2(cy) + ' A' + n2(rx) + ' ' + n2(ry) + ' 0 0 1 ' + n2(cx + rx) + ' ' + n2(cy) + '" fill="none" stroke="#111" stroke-width="0.3" stroke-dasharray="1 0.8"/>'
    : '<ellipse cx="' + n2(cx) + '" cy="' + n2(cy) + '" rx="' + n2(rx) + '" ry="' + n2(ry) + '" fill="#dbe5ff" stroke="#111" stroke-width="0.4"/>';
  function dreh(rng, kind) {
    const W = 52, H = 50;
    const r = R(rng, 2, 8), h = R(rng, 4, 15), hk = kind === 'silo' ? R(rng, 2, 6) : 0;
    const tot = kind === 'silo' ? h + hk : kind === 'kuppel' ? h + r : h, s = Math.min((W - 22) / (2 * r), (H - 12) / (tot + 0.6 * r)), cx = W / 2 - 4, yb = H - 4 - 0.3 * r * s, rx = r * s, ry = 0.3 * r * s, yt = yb - h * s;
    let g = '<path d="M' + n2(cx - rx) + ' ' + n2(yt) + ' V' + n2(yb) + ' A' + n2(rx) + ' ' + n2(ry) + ' 0 0 0 ' + n2(cx + rx) + ' ' + n2(yb) + ' V' + n2(yt) + '" fill="#eef3ff" stroke="#111" stroke-width="0.4"/>' + ell(cx, yb, rx, ry, true);
    const labs = lab([cx + rx + 1.5, (yt + yb) / 2 + 1], h + ' cm', { a: 'start' }) + L([cx, yb], [cx + rx, yb], { c: '#c62828', w: 0.3 }) + lab([cx + rx + 1.5, yb + ry + 2.5], 'r = ' + r + ' cm', { fill: '#c62828', a: 'start' });
    if (kind === 'silo') {
      const ty = yt - hk * s;
      g += '<path d="M' + n2(cx - rx) + ' ' + n2(yt) + ' L' + n2(cx) + ' ' + n2(ty) + ' L' + n2(cx + rx) + ' ' + n2(yt) + ' A' + n2(rx) + ' ' + n2(ry) + ' 0 0 1 ' + n2(cx - rx) + ' ' + n2(yt) + '" fill="#dbe5ff" stroke="#111" stroke-width="0.4"/>' + ell(cx, yt, rx, ry, true).replace(/stroke-width="0.4"\/>/, 'stroke-width="0.3" stroke-dasharray="1 0.8"/>') + L([cx, ty], [cx, yt], { c: '#c62828', w: 0.3, d: '1 0.8' }) + lab([cx + 1.2, (ty + yt) / 2 + 1], hk + ' cm', { fill: '#c62828', a: 'start' });
      const sK = Math.sqrt(r * r + hk * hk);
      return { svg: svgMM(W, H, g + labs), V: r * r * PI * h + r * r * PI * hk / 3, O: r * r * PI + 2 * r * PI * h + r * PI * round(sK, 2), sK, txt: 'Zylinder mit Kegel', calcV: r + '² · π · ' + h + ' + ' + r + '² · π · ' + hk + ' : 3', key: 'si' + [r, h, hk] };
    }
    if (kind === 'kuppel') {
      g += '<path d="M' + n2(cx - rx) + ' ' + n2(yt) + ' A' + n2(rx) + ' ' + n2(Math.min(rx, yt - 2)) + ' 0 0 1 ' + n2(cx + rx) + ' ' + n2(yt) + ' A' + n2(rx) + ' ' + n2(ry) + ' 0 0 1 ' + n2(cx - rx) + ' ' + n2(yt) + '" fill="#dbe5ff" stroke="#111" stroke-width="0.4"/>' + ell(cx, yt, rx, ry, true).replace(/stroke-width="0.4"\/>/, 'stroke-width="0.3" stroke-dasharray="1 0.8"/>');
      return { svg: svgMM(W, H, g + labs), V: r * r * PI * h + 2 / 3 * r * r * r * PI, O: r * r * PI + 2 * r * PI * h + 2 * r * r * PI, txt: 'Zylinder mit Halbkugel', calcV: r + '² · π · ' + h + ' + 2/3 · ' + r + '³ · π', key: 'ku' + [r, h] };
    }
    // Hohlzylinder (Rohr): Außenradius r, Innenradius ri
    const ri = R(rng, 1, r - 1);
    g += ell(cx, yt, rx, ry, false) + '<ellipse cx="' + n2(cx) + '" cy="' + n2(yt) + '" rx="' + n2(ri * s) + '" ry="' + n2(0.3 * ri * s) + '" fill="#fff" stroke="#111" stroke-width="0.4"/>' + L([cx, yt], [cx - ri * s, yt], { c: '#1d4ed8', w: 0.3 }) + lab([cx - ri * s / 2, yt - 1.2], ri + ' cm', { fill: '#1d4ed8', fs: 2.5 });
    return { svg: svgMM(W, H, g + labs), V: (r * r - ri * ri) * PI * h, O: 2 * (r * r - ri * ri) * PI + 2 * r * PI * h + 2 * ri * PI * h, txt: 'Hohlzylinder', calcV: '(' + r + '² − ' + ri + '²) · π · ' + h, key: 'ho' + [r, ri, h], ri, r, h };
  }
  const drehVol = (n, kinds) => ({ type: 'fn', fn: (rng) => {
    const its = M.uniq(n, () => dreh(rng, rng.pick(kinds)), x => x.key);
    const cell = (x, s) => '<div class="mi"><b>' + x.txt + '</b><br>' + x.svg + '<br>V ≈ ' + (s ? UB.sol(x.calcV + ' ≈ ' + F2(x.V) + ' cm³') : UB.blank(6)) + '</div>';
    return { title: 'Volumen zusammengesetzter Körper', instr: 'Rechne mit π ≈ 3,14 und runde auf zwei Dezimalstellen.', body: '<div class="mgrid c2">' + its.map(x => cell(x, false)).join('') + '</div>', sol: '<div class="mgrid c2">' + its.map(x => cell(x, true)).join('') + '</div>' };
  } });
  const drehOber = (n, kinds) => ({ type: 'fn', fn: (rng) => {
    const its = M.uniq(n, () => dreh(rng, rng.pick(kinds)), x => x.key);
    const how = (x) => x.txt === 'Zylinder mit Kegel' ? 'Boden + Zylindermantel + Kegelmantel (s ≈ ' + F2(x.sK) + ' cm)' : x.txt === 'Zylinder mit Halbkugel' ? 'Boden + Zylindermantel + Halbkugel (2 · r² · π)' : '2 Ringe + Außenmantel + Innenmantel';
    const cell = (x, s) => '<div class="mi"><b>' + x.txt + '</b><br>' + x.svg + '<br>O ≈ ' + (s ? UB.sol(F2(x.O) + ' cm²') + '<br><small>' + how(x) + '</small>' : UB.blank(6)) + '</div>';
    return { title: 'Oberfläche zusammengesetzter Körper', instr: 'Überlege genau, welche Flächen außen liegen (die Berührfläche zwischen den Teilen gehört nicht dazu). π ≈ 3,14; runde auf zwei Dezimalstellen.', body: '<div class="mgrid c2">' + its.map(x => cell(x, false)).join('') + '</div>', sol: '<div class="mgrid c2">' + its.map(x => cell(x, true)).join('') + '</div>' };
  } });
  const DICHTE = [['Stahl', 7.8], ['Kupfer', 8.9], ['Beton', 2.4], ['Kunststoff', 1.2]];
  const TXD = [
    (r) => { const [m, d] = r.pick(DICHTE), ra = R(r, 3, 8), ri = R(r, 1, ra - 1), l = R(r, 2, 10) * 10; const V = (ra * ra - ri * ri) * PI * l;
      return { q: 'Ein Rohr aus ' + m + ' (' + F(d) + ' g/cm³) ist ' + l + ' cm lang, Außenradius ' + ra + ' cm, Innenradius ' + ri + ' cm. Wie schwer ist es?', a: 'V = (' + ra + '² − ' + ri + '²) · 3,14 · ' + l + ' ≈ ' + F2(V) + ' cm³; m ≈ ' + F2(V * d) + ' g ≈ ' + F2(V * d / 1000) + ' kg' }; },
    (r) => { const d = R(r, 3, 6), h = R(r, 6, 12), hk = R(r, 2, 4); const rr = d / 2, V = rr * rr * PI * h + rr * rr * PI * hk / 3;
      return { q: 'Ein Getreidesilo besteht aus einem Zylinder (Durchmesser ' + d + ' m, Höhe ' + h + ' m) mit einem kegelförmigen Dach (Höhe ' + hk + ' m). Wie viele m³ fasst es?', a: F(rr) + '² · 3,14 · ' + h + ' + ' + F(rr) + '² · 3,14 · ' + hk + ' : 3 ≈ ' + F2(V) + ' m³' }; },
    (r) => { const rr = R(r, 2, 5), h = R(r, 6, 14); const V = rr * rr * PI * h + 2 / 3 * rr ** 3 * PI;
      return { q: 'Eine Gasflasche besteht aus einem Zylinder (r = ' + rr + ' dm, h = ' + h + ' dm) und einer aufgesetzten Halbkugel. Wie viele Liter fasst sie?', a: rr + '² · 3,14 · ' + h + ' + 2/3 · ' + rr + '³ · 3,14 ≈ ' + F2(V) + ' dm³ = ' + F2(V) + ' l' }; },
    (r) => { const a = R(r, 4, 10), rr = R(r, 1, Math.floor(a / 2) - 1), [m, d] = r.pick(DICHTE); const V = a ** 3 - rr * rr * PI * a;
      return { q: 'Durch einen Würfel aus ' + m + ' (Kante ' + a + ' cm, Dichte ' + F(d) + ' g/cm³) wird ein zylindrisches Loch (r = ' + rr + ' cm) ganz durchgebohrt. Wie viel cm³ bleiben übrig, wie schwer ist der Körper?', a: a + '³ − ' + rr + '² · 3,14 · ' + a + ' ≈ ' + F2(V) + ' cm³; m ≈ ' + F2(V * d) + ' g' }; }
  ];
  const drehText = (n) => task({ title: 'Sachaufgaben', instr: 'Skizze, Rechnung, Antwort. π ≈ 3,14; runde auf zwei Dezimalstellen.', n, mode: 'lines', lines: 2, gen: (rng) => M.pickT(rng, TXD, 'TXD') });
  UB.simple({
    id: 'm-zuskoerper', fach: 'mathe', title: 'Zusammengesetzte Körper und Hohlkörper', area: 'geometrie', klassen: [4], img: 'MiniHoS_Forschen_Lupe',
    merk: '<b>Volumen</b>: in bekannte Körper zerlegen und addieren (Zylinder + Kegel, Zylinder + Halbkugel, Quader + Pyramide …). <b>Hohlkörper</b>: äußeren Körper minus Hohlraum, z. B. Rohr: V = (R² − r²) · π · h. <b>Oberfläche</b>: nur die Flächen außen zählen; die Berührfläche zwischen zwei Teilen fällt weg. Halbkugel: Volumen 2/3 · r³ · π, gekrümmte Fläche 2 · r² · π. <b>Masse</b> = Volumen · Dichte. π ≈ 3,14.',
    pools: {},
    levels: {
      1: { ichkann: ['Du berechnest das Volumen von Haus- und Turmformen.', 'Du berechnest das Volumen von Zylinder mit Kegel oder Halbkugel.'], tasks: [hausTask(2), drehVol(2, ['silo', 'kuppel'])] },
      2: { ichkann: ['Du berechnest Hohlkörper.', 'Du berechnest Oberflächen zusammengesetzter Körper.'], tasks: [drehVol(2, ['rohr']), drehOber(2, ['silo', 'kuppel', 'rohr'])] },
      3: { ichkann: ['Du löst Sachaufgaben mit zusammengesetzten Körpern und Hohlkörpern.'], tasks: [drehText(4)] }
    }
  });
  // ================================================================ Stufe 4 · Profi
  const { L4, text } = M;
  const TXQ4 = [
    (r) => { const l = R(r, 8, 20), b = R(r, 4, 10), t = R(r, 12, 20) / 10, p = r.pick([200, 250, 400, 500]); const V = round(l * b * t, 2), min = V * 1000 / p; return { q: 'Ein Becken (' + l + ' m × ' + b + ' m, ' + F(t) + ' m tief) wird mit einer Pumpe gefüllt, die ' + p + ' Liter pro Minute schafft. Wie lange dauert das Füllen?', a: 'V = ' + F(V) + ' m³ = ' + F(V * 1000) + ' l; ' + F(V * 1000) + ' : ' + p + ' = ' + F(round(min, 2)) + ' min ≈ ' + Math.floor(min / 60) + ' h ' + Math.round(min % 60) + ' min' }; },
    (r) => { const a = R(r, 6, 12), b = R(r, 4, 8), c = R(r, 3, 6), d = r.pick([40, 50, 60]); const O = a * b + 2 * a * c + 2 * b * c; return { q: 'Ein oben offener Kasten (' + a + ' dm × ' + b + ' dm, ' + c + ' dm hoch) wird außen gestrichen (Boden und vier Seiten). Eine Dose Farbe reicht für ' + d + ' dm². Wie viele Dosen braucht man?', a: 'O = ' + a + ' · ' + b + ' + 2 · ' + a + ' · ' + c + ' + 2 · ' + b + ' · ' + c + ' = ' + O + ' dm²; ' + O + ' : ' + d + ' ≈ ' + F(round(O / d, 2)) + ' → ' + Math.ceil(O / d) + ' Dosen' }; },
    (r) => { const a = R(r, 4, 10), b = R(r, 4, 9), c1 = R(r, 2, 5), b2 = R(r, 2, b - 1), c2 = R(r, 2, 6); const V = a * b * c1 + a * b2 * c2; return { q: 'Ein Körper besteht aus zwei Quadern: unten ' + a + ' cm × ' + b + ' cm × ' + c1 + ' cm, darauf ein Quader ' + a + ' cm × ' + b2 + ' cm. Das Gesamtvolumen ist ' + V + ' cm³. Wie hoch ist der obere Quader?', a: '(' + V + ' − ' + a * b * c1 + ') : (' + a + ' · ' + b2 + ') = ' + c2 + ' cm' }; }
  ];
  L4('m-quaderkoerper', ['Du berechnest Volumen und Oberfläche zusammengesetzter und ausgehöhlter Körper.', 'Du löst mehrstufige Sachaufgaben und rechnest auf fehlende Maße zurück.'],
    [qOber(2, ['hohl', 'stufe', 'turm']), text('Sachaufgaben mit mehreren Schritten', 'Fertige eine Skizze an und schreibe die Rechnung auf.', TXQ4, 'q4', 3)]);

  const TXD4 = [
    (r) => { const R0 = R(r, 4, 9), ri = R(r, 2, R0 - 1), h = R(r, 2, 8) * 10; const V = round((R0 * R0 - ri * ri) * PI * h, 2); return { q: 'Ein Rohr ist ' + h + ' cm lang und hat den Außenradius ' + R0 + ' cm. Das Material hat ein Volumen von ' + F2(V) + ' cm³. Wie groß ist der Innenradius? Wie dick ist die Wand?', a: 'r² = ' + R0 + '² − ' + F2(V) + ' : (3,14 · ' + h + ') = ' + ri * ri + ' → r = ' + ri + ' cm; Wand ' + (R0 - ri) + ' cm' }; },
    (r) => { const rr = R(r, 2, 4), h = R(r, 8, 14); const V = rr * rr * PI * h / 3 + 2 / 3 * rr ** 3 * PI; return { q: 'Eine Eistüte (Kegel, r = ' + rr + ' cm, h = ' + h + ' cm) ist ganz mit Eis gefüllt, darauf sitzt eine Halbkugel Eis. Wie viel cm³ Eis sind das? Wie viel Prozent davon stecken in der Tüte?', a: 'Kegel ' + F2(rr * rr * PI * h / 3) + ' cm³ + Halbkugel ' + F2(2 / 3 * rr ** 3 * PI) + ' cm³ = ' + F2(V) + ' cm³; ' + F(round(rr * rr * PI * h / 3 / V * 100, 1)) + ' % in der Tüte' }; },
    (r) => { const a = R(r, 2, 10) * 2; const rr = a / 2, Vk = 4 / 3 * rr ** 3 * PI; return { q: 'In einen Würfel (Kante ' + a + ' cm) passt genau eine Kugel. Wie viel Prozent des Würfels füllt die Kugel aus?', a: 'Würfel ' + a ** 3 + ' cm³, Kugel ' + F2(Vk) + ' cm³ → ' + F(round(Vk / a ** 3 * 100, 2)) + ' % (für jede Würfelgröße gleich!)' }; },
    (r) => { const d = R(r, 6, 12), h = R(r, 10, 20), k = R(r, 2, 5); const rr = d / 2, V = rr * rr * PI * h, Vk = 4 / 3 * PI; return { q: 'Ein zylindrisches Glas (Durchmesser ' + d + ' cm) ist bis ' + h + ' cm hoch mit Wasser gefüllt. Es werden ' + k + ' Kugeln mit r = 1 cm hineingelegt. Um wie viel steigt der Wasserstand?', a: k + ' · 4/3 · 1³ · 3,14 ≈ ' + F2(k * Vk) + ' cm³; ' + F2(k * Vk) + ' : (' + F(rr) + '² · 3,14) ≈ ' + F2(k * Vk / (rr * rr * PI)) + ' cm' }; }
  ];
  L4('m-zuskoerper', ['Du rechnest bei Hohlkörpern auf fehlende Maße zurück.', 'Du vergleichst Volumina und rechnest mit Anteilen.', 'Du berechnest Oberflächen zusammengesetzter Körper.'],
    [text('Sachaufgaben mit mehreren Schritten', 'Skizze, Rechnung, Antwort. π ≈ 3,14; runde auf zwei Dezimalstellen.', TXD4, 'd4', 3), drehOber(2, ['silo', 'kuppel', 'rohr'])]);


  // ================================================================ Mehr Sachaufgaben (Pool-Erweiterung)
  TXQ.push(
    (r) => { const a = R(r, 6, 12), b = R(r, 4, 6), c = R(r, 3, 5); const Vi = (a - 2) * (b - 2) * (c - 1); return { q: 'Ein Blumentrog aus Beton ist außen ' + a + ' dm lang, ' + b + ' dm breit und ' + c + ' dm hoch. Wände und Boden sind 1 dm dick. Wie viel Erde passt hinein? Wie viel Beton wurde verbaut?', a: 'innen: ' + (a - 2) + ' · ' + (b - 2) + ' · ' + (c - 1) + ' = ' + Vi + ' dm³ = ' + Vi + ' l Erde; Beton: ' + a * b * c + ' − ' + Vi + ' = ' + (a * b * c - Vi) + ' dm³' }; },
    (r) => { const a = R(r, 8, 14), b = R(r, 7, 12), h = R(r, 5, 8), g = R(r, 3, 5), t = R(r, 5, 7); return { q: 'Ein Gebäude besteht aus einem Haus (' + a + ' m × ' + b + ' m, ' + h + ' m hoch) und einer angebauten Garage (' + g + ' m × ' + t + ' m, 3 m hoch). Wie groß ist der umbaute Raum?', a: a + ' · ' + b + ' · ' + h + ' + ' + g + ' · ' + t + ' · 3 = ' + F(a * b * h + g * t * 3) + ' m³' }; },
    (r) => { const a = R(r, 6, 12), s = R(r, 2, Math.floor(a / 2)); return { q: 'Durch einen Holzwürfel mit ' + a + ' cm Kantenlänge wird ein quadratisches Loch (' + s + ' cm × ' + s + ' cm) ganz durchgesägt. Wie groß ist das Restvolumen?', a: a + '³ − ' + s + ' · ' + s + ' · ' + a + ' = ' + a ** 3 + ' − ' + s * s * a + ' = ' + (a ** 3 - s * s * a) + ' cm³' }; }
  );
  TXD.push(
    (r) => { const R0 = R(r, 5, 10), ri = R(r, 2, R0 - 1), h = R(r, 10, 40); return { q: 'Ein Betonrohr ist ' + h + ' dm lang, hat einen Außenradius von ' + R0 + ' dm und einen Innenradius von ' + ri + ' dm. Wie viel dm³ Beton braucht man?', a: 'V = (' + R0 + '² − ' + ri + '²) · 3,14 · ' + h + ' ≈ ' + F2((R0 * R0 - ri * ri) * PI * h) + ' dm³' }; },
    (r) => { const h = R(r, 12, 17), rr = 0.4; return { q: 'Ein Bleistift ist ein Zylinder (Durchmesser 8 mm, ' + h + ' cm lang) mit einer kegelförmigen Spitze (2 cm hoch). Wie groß ist sein Volumen?', a: '0,4² · 3,14 · ' + h + ' + 0,4² · 3,14 · 2 : 3 ≈ ' + F2(rr * rr * PI * h + rr * rr * PI * 2 / 3) + ' cm³' }; },
    (r) => { const rr = R(r, 8, 15); const V = 2 / 3 * rr ** 3 * PI; return { q: 'Eine Salatschüssel hat die Form einer Halbkugel mit dem Innenradius ' + rr + ' cm. Wie viel Liter passen hinein?', a: 'V = 2/3 · ' + rr + '³ · 3,14 ≈ ' + F2(V) + ' cm³ ≈ ' + F2(V / 1000) + ' l' }; }
  );
  TXQ4.push(
    (r) => { const l = R(r, 3, 6), b = R(r, 2, 4), h = R(r, 3, 8) / 10; const V = l * b * h / 2; return { q: 'Eine keilförmige Rampe aus Beton (dreiseitiges Prisma) ist ' + l + ' m lang, ' + b + ' m breit und an der höchsten Stelle ' + F(h) + ' m hoch. Wie viel m³ Beton braucht man? Wie viel kostet er bei 120 € pro m³?', a: 'V = ' + l + ' · ' + b + ' · ' + F(h) + ' : 2 = ' + F(V) + ' m³; ' + F(V) + ' · 120 = ' + F(round(V * 120, 2)) + ' €' }; },
    (r) => { const a = R(r, 4, 8) * 10, b = R(r, 3, 5) * 10, h = R(r, 2, 5) * 10, c = R(r, 5, 10) * 10, d = R(r, 3, 6) * 10; return { q: 'Ein Aquarium (' + a + ' cm × ' + b + ' cm) ist ' + h + ' cm hoch mit Wasser gefüllt. Das Wasser wird in ein anderes Becken (' + c + ' cm × ' + d + ' cm) umgefüllt. Wie hoch steht es dort?', a: 'V = ' + F(a * b * h) + ' cm³; ' + F(a * b * h) + ' : (' + c + ' · ' + d + ') ≈ ' + F2(a * b * h / (c * d)) + ' cm' }; },
    (r) => { const L = r.pick([60, 80, 120]), B = r.pick([40, 60, 80]), H = r.pick([40, 50, 60]), a = r.pick([20, 30]), b = r.pick([20, 40]), c = r.pick([10, 25]); const x = Math.floor(L / a), y = Math.floor(B / b), z = Math.floor(H / c); return { q: 'In eine Kiste (' + L + ' cm × ' + B + ' cm × ' + H + ' cm) sollen Schachteln (' + a + ' cm × ' + b + ' cm × ' + c + ' cm) gestellt werden, alle gleich ausgerichtet. Wie viele passen hinein?', a: x + ' · ' + y + ' · ' + z + ' = ' + x * y * z + ' Schachteln' }; }
  );
  TXD4.push(
    (r) => { const rr = R(r, 2, 6), h = R(r, 5, 12); return { q: 'Ein kegelförmiges und ein zylinderförmiges Glas haben denselben Radius (' + rr + ' cm) und dieselbe Höhe (' + h + ' cm). Wie oft muss man das Kegelglas ausleeren, bis das Zylinderglas voll ist?', a: 'V(Zylinder) ≈ ' + F2(rr * rr * PI * h) + ' cm³, V(Kegel) ≈ ' + F2(rr * rr * PI * h / 3) + ' cm³ – dreimal' }; },
    (r) => { const rr = R(r, 2, 5); const box = (4 * rr) * (6 * rr) * (2 * rr), balls = 6 * 4 / 3 * rr ** 3 * PI; return { q: 'Sechs Kugeln (r = ' + rr + ' cm) liegen in zwei Reihen zu je drei in einer genau passenden Schachtel (' + 4 * rr + ' cm × ' + 6 * rr + ' cm × ' + 2 * rr + ' cm). Wie viel Prozent der Schachtel sind leer?', a: 'Schachtel ' + F(box) + ' cm³, Kugeln ≈ ' + F2(balls) + ' cm³; leer ≈ ' + F(round((box - balls) / box * 100, 1)) + ' %' }; }
  );
})();
