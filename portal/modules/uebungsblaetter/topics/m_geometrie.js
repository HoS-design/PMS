/* Mathematik – Geometrie: Dreiecks- und Viereckskonstruktionen, Koordinatensystem, Achsenspiegelung.
   Alle Rechnungen in cm (y nach oben); Zeichnungen maßstabsgetreu in mm (Druck in 100 % → Längen stimmen).
   Klassen (fig, alt, ext, alab, pt …) und data-Attribute dienen der automatischen Prüfung. */
(function () {
  const M = UB.M, { R, fmt, round } = M;
  const F1 = (x) => fmt(round(x, 1));
  const DEG = Math.PI / 180;
  // ---------- Vektorrechnung (cm, y nach oben)
  const sub = (p, q) => [p[0] - q[0], p[1] - q[1]], add = (p, q) => [p[0] + q[0], p[1] + q[1]], mul = (p, k) => [p[0] * k, p[1] * k];
  const dot = (p, q) => p[0] * q[0] + p[1] * q[1], len = (p) => Math.hypot(p[0], p[1]), unit = (p) => mul(p, 1 / (len(p) || 1));
  const dist = (p, q) => len(sub(p, q));
  const angAt = (p, q, r) => Math.acos(Math.max(-1, Math.min(1, dot(sub(p, q), sub(r, q)) / (dist(p, q) * dist(r, q))))) / DEG;
  const footOn = (P, A, B) => { const d = sub(B, A), t = dot(sub(P, A), d) / dot(d, d); return { F: add(A, mul(d, t)), t }; };
  const circum = (A, B, C) => {
    const d = 2 * (A[0] * (B[1] - C[1]) + B[0] * (C[1] - A[1]) + C[0] * (A[1] - B[1]));
    const s = (p) => p[0] * p[0] + p[1] * p[1];
    const U = [(s(A) * (B[1] - C[1]) + s(B) * (C[1] - A[1]) + s(C) * (A[1] - B[1])) / d, (s(A) * (C[0] - B[0]) + s(B) * (A[0] - C[0]) + s(C) * (B[0] - A[0])) / d];
    return { U, r: dist(U, A) };
  };
  const incircle = (A, B, C) => { const a = dist(B, C), b = dist(A, C), c = dist(A, B), p = a + b + c, s = p / 2; return { I: [(a * A[0] + b * B[0] + c * C[0]) / p, (a * A[1] + b * B[1] + c * C[1]) / p], r: Math.sqrt(s * (s - a) * (s - b) * (s - c)) / s }; };
  const orthocenter = (A, B, C) => { const { U } = circum(A, B, C); return sub(add(add(A, B), C), mul(U, 2)); };

  // ---------- SVG-Bausteine (mm, y nach unten)
  const n2 = (x) => x.toFixed(2);
  const svgMM = (w, h, inner, cls) => '<svg class="mfig ' + (cls || '') + '" width="' + w + 'mm" height="' + h + 'mm" viewBox="0 0 ' + w + ' ' + h + '" aria-hidden="true">' + inner + '</svg>';
  const T = (p, t, o) => { o = o || {}; return '<text x="' + n2(p[0]) + '" y="' + n2(p[1]) + '" font-size="' + (o.fs || 3.6) + '" text-anchor="' + (o.a || 'middle') + '"' + (o.fill ? ' fill="' + o.fill + '"' : '') + (o.b ? ' font-weight="700"' : '') + (o.cls ? ' class="' + o.cls + '"' : '') + (o.data || '') + ' stroke="#fff" stroke-width="0.7" paint-order="stroke" stroke-linejoin="round">' + t + '</text>'; };
  const L = (p, q, o) => { o = o || {}; return '<line x1="' + n2(p[0]) + '" y1="' + n2(p[1]) + '" x2="' + n2(q[0]) + '" y2="' + n2(q[1]) + '" stroke="' + (o.c || '#111') + '" stroke-width="' + (o.w || 0.45) + '"' + (o.d ? ' stroke-dasharray="' + o.d + '"' : '') + (o.cls ? ' class="' + o.cls + '"' : '') + '/>'; };
  const C = (p, r, o) => { o = o || {}; return '<circle cx="' + n2(p[0]) + '" cy="' + n2(p[1]) + '" r="' + n2(r) + '" fill="' + (o.f || 'none') + '" stroke="' + (o.c || '#111') + '" stroke-width="' + (o.w || 0.35) + '"' + (o.cls ? ' class="' + o.cls + '"' : '') + (o.data || '') + '/>'; };
  const PL = (pts, o) => { o = o || {}; return '<polygon points="' + pts.map(p => n2(p[0]) + ',' + n2(p[1])).join(' ') + '" fill="' + (o.f || 'none') + '" stroke="' + (o.c || '#111') + '" stroke-width="' + (o.w || 0.5) + '"' + (o.cls ? ' class="' + o.cls + '"' : '') + '/>'; };
  const sdir = (from, to) => Math.atan2(-(to[1] - from[1]), to[0] - from[0]) / DEG;      // Richtung in Grad (Bildschirm, gegen Uhrzeigersinn)
  const spt = (m, r, a) => [m[0] + r * Math.cos(a * DEG), m[1] - r * Math.sin(a * DEG)];
  const ARC = (m, r, a1, a2, o) => { o = o || {}; const p1 = spt(m, r, a1), p2 = spt(m, r, a2), large = ((a2 - a1 + 360) % 360) > 180 ? 1 : 0; return '<path d="M' + n2(p1[0]) + ' ' + n2(p1[1]) + ' A' + n2(r) + ' ' + n2(r) + ' 0 ' + large + ' 0 ' + n2(p2[0]) + ' ' + n2(p2[1]) + '" fill="none" stroke="' + (o.c || '#1d4ed8') + '" stroke-width="' + (o.w || 0.3) + '"/>'; };
  // rechter Winkel bei q, Schenkel in Richtung t1 und t2 (mm)
  const rightMark = (q, t1, t2, col) => { const u = unit(sub(t1, q)), v = unit(sub(t2, q)), k = 3; const a = add(q, mul(u, k)), b = add(add(q, mul(u, k)), mul(v, k)), c = add(q, mul(v, k)), m = add(q, mul(add(u, v), k / 2)); return '<path d="M' + n2(a[0]) + ' ' + n2(a[1]) + ' L' + n2(b[0]) + ' ' + n2(b[1]) + ' L' + n2(c[0]) + ' ' + n2(c[1]) + '" fill="none" stroke="' + (col || '#c62828') + '" stroke-width="0.35"/><circle cx="' + n2(m[0]) + '" cy="' + n2(m[1]) + '" r="0.45" fill="' + (col || '#c62828') + '"/>'; };
  // Innenwinkel bei q zwischen p und r (mm); Beschriftung auf der Winkelhalbierenden
  function angleMark(p, q, r, deg) {
    if (Math.abs(deg - 90) < 0.3) return rightMark(q, p, r) + T(add(q, mul(unit(add(unit(sub(p, q)), unit(sub(r, q)))), 8.5)), '90°', { fs: 2.8, fill: '#c62828', cls: 'alab', data: ' data-at="' + n2(q[0]) + ',' + n2(q[1]) + '"' }).replace('>90°', ' dy="1">90°');
    let a1 = sdir(q, p), a2 = sdir(q, r); let d = ((a2 - a1) % 360 + 360) % 360; if (d > 180) { [a1, a2] = [a2, a1]; d = 360 - d; }
    const rr = Math.min(16, Math.max(8.5, 3.6 / Math.sin(d / 2 * DEG)));
    const lp = spt(q, rr, a1 + d / 2);
    return ARC(q, 5, a1, a1 + d, { c: '#c62828', w: 0.35 }) + T([lp[0], lp[1] + 1], Math.round(deg) + '°', { fs: 2.8, fill: '#c62828', cls: 'alab', data: ' data-at="' + n2(q[0]) + ',' + n2(q[1]) + '"' });
  }
  const vlabel = (p, g, t) => { const v = unit(sub(p, g)); return T([p[0] + v[0] * 3.8, p[1] + v[1] * 3.8 + 1.3], t, { b: true }); };
  const slabel = (p, q, g, t) => { const m = add(p, mul(sub(q, p), 0.4)), v = unit(sub(m, g)); return T([m[0] + v[0] * 3.4, m[1] + v[1] * 3.4 + 1.2], t, { fs: 3.2 }); };
  const sub2 = (b, s) => b + '<tspan font-size="2.3" dy="0.8">' + s + '</tspan>';

  // cm-Punkte in einen Rahmen W×H (mm) einpassen; ok=false, wenn es (mit Rand) nicht passt
  function frame(ptsCm, W, H, margin) {
    margin = margin == null ? 7 : margin;
    const xs = ptsCm.map(p => p[0]), ys = ptsCm.map(p => p[1]);
    const w = (Math.max(...xs) - Math.min(...xs)) * 10, h = (Math.max(...ys) - Math.min(...ys)) * 10;
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    return { ok: w <= W - 2 * margin && h <= H - 2 * margin, P: (p) => [W / 2 + (p[0] - cx) * 10, H / 2 - (p[1] - cy) * 10] };
  }
  const kfeld = (h) => '<div class="kfeld" style="height:' + h + 'mm"></div>';
  const solBox = (h, svgInner, W) => '<div class="kfeld sol-box" style="height:' + h + 'mm">' + svgMM(W || 180, h, svgInner) + '</div>';
  const W0 = 180;

  // Zeichenwerkzeuge für andere Geometrie-Themen
  UB.G = { sub, add, mul, dot, len, unit, dist, angAt, footOn, circum, n2, svgMM, T, L, C, PL, sdir, spt, ARC, rightMark, angleMark, vlabel, slabel, frame, kfeld, solBox, DEG, F1 };

  // ================================================================ Dreiecke
  function rawTriangle(kind, rng) {
    const A = [0, 0];
    if (kind === 'SSS') {
      const a = R(rng, 35, 80) / 10, b = R(rng, 35, 80) / 10, c = R(rng, 50, 95) / 10;
      if (a + b <= c + 0.8 || a + c <= b + 0.8 || b + c <= a + 0.8) return null;
      const x = (b * b + c * c - a * a) / (2 * c); return { A, B: [c, 0], C: [x, Math.sqrt(b * b - x * x)], given: 'a = ' + F1(a) + ' cm, b = ' + F1(b) + ' cm, c = ' + F1(c) + ' cm' };
    }
    if (kind === 'SWS') {
      const b = R(rng, 35, 70) / 10, c = R(rng, 50, 90) / 10, al = R(rng, 7, 24) * 5;
      return { A, B: [c, 0], C: [b * Math.cos(al * DEG), b * Math.sin(al * DEG)], given: 'b = ' + F1(b) + ' cm, c = ' + F1(c) + ' cm, α = ' + al + '°' };
    }
    if (kind === 'WSW') {
      const c = R(rng, 55, 95) / 10, al = R(rng, 5, 22) * 5, be = R(rng, 5, 22) * 5;
      if (al + be > 155 || al + be < 50) return null;
      const ga = 180 - al - be, b = c * Math.sin(be * DEG) / Math.sin(ga * DEG);
      return { A, B: [c, 0], C: [b * Math.cos(al * DEG), b * Math.sin(al * DEG)], given: 'c = ' + F1(c) + ' cm, α = ' + al + '°, β = ' + be + '°' };
    }
    // THALES: rechter Winkel bei C, Hypotenuse c, Kathete a
    const c = R(rng, 60, 95) / 10, a = R(rng, 25, Math.floor(c * 10 * 0.88)) / 10;
    const q = a * a / c; return { A, B: [c, 0], C: [c - q, Math.sqrt(a * a - q * q)], given: 'c = ' + F1(c) + ' cm, a = ' + F1(a) + ' cm, γ = 90°' };
  }
  // Höhe von V auf die Gerade Q1Q2 zeichnen (mm-Punkte); bei Fußpunkt außerhalb: Verlängerung strichliert
  function altitude(V, Q1, Q2, name, avoid) {
    const { F, t } = footOn(V, Q1, Q2);
    let s = '';
    if (t < -0.001 || t > 1.001) { const E = t < 0 ? Q1 : Q2, ext = add(F, mul(unit(sub(F, E)), 4)); s += L(E, ext, { c: '#555', w: 0.3, d: '1.4 1', cls: 'ext' }); }
    s += L(V, F, { c: '#1d4ed8', w: 0.45, cls: 'alt' });
    const far = dist(F, Q1) > dist(F, Q2) ? Q1 : Q2;
    s += rightMark(F, far, V, '#1d4ed8');
    if (name) { const m = [0.5, 0.3, 0.7].map(k => add(V, mul(sub(F, V), k))).sort((x, y) => avoid ? dist(y, avoid) - dist(x, avoid) : 0)[0], side = unit(sub(F, far)), lp = add(m, mul(side, 3)); s += T([lp[0], lp[1] + 1], sub2('h', name), { fs: 3, fill: '#1d4ed8', a: side[0] < -0.3 ? 'end' : side[0] > 0.3 ? 'start' : 'middle' }); }
    return { s, F, t };
  }
  // Dreieck zeichnen: opts.heights = ['c'] | ['a','b','c'], opts.special = 'U'|'I'|'S'|'H'
  function buildTriangle(kind, rng, H, opts) {
    opts = opts || {};
    for (let tries = 0; tries < 300; tries++) {
      const tr = rawTriangle(kind, rng); if (!tr) continue;
      const { A, B } = tr, Cc = tr.C;
      if (Cc[1] < 1.6) continue;
      const a = dist(B, Cc), b = dist(A, Cc), c = dist(A, B);
      const al = angAt(B, A, Cc), be = angAt(A, B, Cc), ga = angAt(A, Cc, B);
      if (Math.min(al, be, ga) < 22) continue;              // zu spitze Dreiecke sind schlecht zeichen- und messbar
      // für den Rahmen relevante Zusatzpunkte (cm)
      const extra = [];
      const feet = {}; [['a', A, B, Cc], ['b', B, A, Cc], ['c', Cc, A, B]].forEach(([n, V, Q1, Q2]) => { feet[n] = footOn(V, Q1, Q2).F; });
      (opts.heights || []).forEach(n => extra.push(feet[n]));
      let sp = null;
      if (opts.special === 'U') { sp = circum(A, B, Cc); extra.push([sp.U[0] - sp.r, sp.U[1] - sp.r], [sp.U[0] + sp.r, sp.U[1] + sp.r]); }
      if (opts.special === 'I') sp = incircle(A, B, Cc);
      if (opts.special === 'S') sp = { S: mul(add(add(A, B), Cc), 1 / 3) };
      if (opts.special === 'H') { sp = { H: orthocenter(A, B, Cc) }; extra.push(sp.H, feet.a, feet.b, feet.c); }
      if (kind === 'THALES') extra.push([c / 2, c / 2 + 0.1], [-0.1, 0], [c + 0.1, 0]);
      if (kind === 'SSS') { const wA = Math.atan2(Cc[1], Cc[0]), wB = Math.atan2(Cc[1], Cc[0] - c); [-1, 1].forEach(sg => { extra.push([b * Math.cos(wA + sg * 8 * DEG), b * Math.sin(wA + sg * 8 * DEG)], [c + a * Math.cos(wB + sg * 8 * DEG), a * Math.sin(wB + sg * 8 * DEG)]); }); }
      if (opts.obtuse === true && Math.max(al, be, ga) < 100) continue;
      if (opts.obtuse === false && Math.max(al, be, ga) > 80) continue;
      const fr = frame([A, B, Cc, ...extra], W0, H, opts.special === 'U' ? 6 : 8); if (!fr.ok) continue;
      const P = fr.P, pA = P(A), pB = P(B), pC = P(Cc), G = mul(add(add(pA, pB), pC), 1 / 3);
      let s = '';
      if (kind === 'SSS') { const d1 = sdir(pA, pC), d2 = sdir(pB, pC); s += ARC(pA, b * 10, d1 - 8, d1 + 8) + ARC(pB, a * 10, d2 - 8, d2 + 8); }
      if (kind === 'THALES') { const Mt = mul(add(pA, pB), 0.5); s += ARC(Mt, c * 5, 0, 180, { w: 0.25 }) + C(Mt, 0.6, { f: '#1d4ed8', c: '#1d4ed8' }) + ARC(pB, a * 10, sdir(pB, pC) - 10, sdir(pB, pC) + 10); }
      s += PL([pA, pB, pC], { f: '#f3f6ff', cls: 'fig' });
      // Höhen
      const hv = {};
      const altDefs = { a: [pA, pB, pC], b: [pB, pA, pC], c: [pC, pA, pB] };
      if (opts.special === 'H') {
        const pH = P(sp.H);
        ['a', 'b', 'c'].forEach(n => { const [V, Q1, Q2] = altDefs[n]; const al2 = altitude(V, Q1, Q2, n, pH); s += al2.s;
          const ss = dot(sub(pH, V), sub(al2.F, V)) / dot(sub(al2.F, V), sub(al2.F, V));
          if (ss > 1.001) s += L(al2.F, pH, { c: '#1d4ed8', w: 0.3, d: '1.4 1', cls: 'altx' }); if (ss < -0.001) s += L(V, pH, { c: '#1d4ed8', w: 0.3, d: '1.4 1', cls: 'altx' }); });
        s += C(pH, 0.9, { f: '#c62828', c: '#c62828', cls: 'pt', data: ' data-k="H"' }) + T([pH[0] + 3, pH[1] - 2], 'H', { b: true, fill: '#c62828' });
      } else (opts.heights || []).forEach(n => { const [V, Q1, Q2] = altDefs[n]; s += altitude(V, Q1, Q2, n).s; hv[n] = dist(V, footOn(V, Q1, Q2).F) / 10; });
      if (opts.special === 'U') { const pU = P(sp.U); [[pA, pB], [pB, pC], [pC, pA]].forEach(([p, q]) => { const m = mul(add(p, q), 0.5), d = unit([-(q[1] - p[1]), q[0] - p[0]]); s += L(add(m, mul(d, -14)), add(m, mul(d, 14)), { c: '#1d4ed8', w: 0.3, d: '1.2 0.8' }); });
        s += C(pU, sp.r * 10, { c: '#c62828', w: 0.4, cls: 'circ', data: ' data-k="U"' }) + C(pU, 0.8, { f: '#c62828', c: '#c62828', cls: 'pt', data: ' data-k="U"' }) + T([pU[0] + 3, pU[1] - 2], 'U', { b: true, fill: '#c62828' }); }
      if (opts.special === 'I') { const pI = P(sp.I); [pA, pB, pC].forEach(v => { s += L(v, add(pI, mul(unit(sub(pI, v)), 6)), { c: '#1d4ed8', w: 0.3, d: '1.2 0.8' }); });
        s += C(pI, sp.r * 10, { c: '#c62828', w: 0.4, cls: 'circ', data: ' data-k="I"' }) + C(pI, 0.8, { f: '#c62828', c: '#c62828', cls: 'pt', data: ' data-k="I"' }) + T([pI[0] + 2.5, pI[1] - 1.5], 'I', { b: true, fill: '#c62828' }); }
      if (opts.special === 'S') { const pS = P(sp.S); [[pA, pB, pC], [pB, pC, pA], [pC, pA, pB]].forEach(([p, q, r]) => { s += L(r, mul(add(p, q), 0.5), { c: '#1d4ed8', w: 0.3 }) + C(mul(add(p, q), 0.5), 0.5, { f: '#1d4ed8', c: '#1d4ed8' }); });
        s += C(pS, 0.9, { f: '#c62828', c: '#c62828', cls: 'pt', data: ' data-k="S"' }) + T([pS[0] + 3, pS[1] - 2], 'S', { b: true, fill: '#c62828' }); }
      s += angleMark(pB, pA, pC, al) + angleMark(pA, pB, pC, be) + angleMark(pA, pC, pB, ga);
      s += vlabel(pA, G, 'A') + vlabel(pB, G, 'B') + vlabel(pC, G, 'C');
      s += slabel(pB, pC, G, 'a') + slabel(pA, pC, G, 'b') + slabel(pA, pB, G, 'c');
      return { tr, svg: s, a, b, c, al, be, ga, hv, sp };
    }
    throw new Error('Kein passendes Dreieck für ' + kind);
  }
  const KIND = { SSS: ['Dreieck aus drei Seiten (SSS)'], SWS: ['Dreieck nach SWS'], WSW: ['Dreieck nach WSW'], THALES: ['Rechtwinkeliges Dreieck (Thaleskreis)'] };
  const dreieck = (kinds, H, heights) => ({ type: 'fn', fn: (rng) => {
    const kind = rng.pick(kinds); const d = buildTriangle(kind, rng, H, { heights: heights ? ['c'] : [] });
    const m = { a: 'a ≈ ' + F1(d.a) + ' cm', b: 'b ≈ ' + F1(d.b) + ' cm', al: 'α ≈ ' + Math.round(d.al) + '°', be: 'β ≈ ' + Math.round(d.be) + '°', ga: 'γ ≈ ' + Math.round(d.ga) + '°' };
    const missing = kind === 'SSS' ? [m.al, m.be, m.ga] : kind === 'SWS' ? [m.a, m.be, m.ga] : kind === 'WSW' ? [m.a, m.b, m.ga] : [m.b, m.al, m.be];
    if (heights) missing.push('h' + '<sub>c</sub> ≈ ' + F1(d.hv.c) + ' cm');
    return {
      title: KIND[kind][0],
      instr: 'Konstruiere das Dreieck ABC: ' + d.tr.given + '. Miss die fehlenden Seiten und Winkel' + (heights ? '. Zeichne die Höhe auf die Seite c ein und miss sie' : '') + '.',
      body: kfeld(H) + '<div class="mi">Gemessen: ' + UB.blank(24) + '</div>',
      sol: solBox(H, d.svg) + '<div class="mi">' + UB.sol(missing.join(' · ')) + ' <span class="hint">(Messwerte, ±1 mm bzw. ±1°)</span></div>'
    };
  } });
  const besonderePunkte = (H, which) => ({ type: 'fn', fn: (rng) => {
    const k = which || rng.pick(['U', 'I', 'S', 'H']);
    const d = buildTriangle('SSS', rng, H, { special: k, obtuse: k === 'H' ? rng.pick([true, false]) : undefined });
    const info = k === 'U' ? 'U ist der Schnittpunkt der Streckensymmetralen; Umkreisradius r ≈ ' + F1(d.sp.r) + ' cm'
      : k === 'I' ? 'I ist der Schnittpunkt der Winkelsymmetralen; Inkreisradius ρ ≈ ' + F1(d.sp.r) + ' cm'
      : k === 'S' ? 'S ist der Schnittpunkt der Schwerlinien (Ecke → Seitenmitte)'
      : 'H ist der Schnittpunkt der Höhen' + (Math.max(d.al, d.be, d.ga) > 90 ? ' – das Dreieck ist stumpfwinkelig, darum liegt H außerhalb (Höhen verlängern!)' : '');
    const ask = k === 'U' ? 'Konstruiere den Umkreismittelpunkt U und zeichne den Umkreis. Miss den Radius.' : k === 'I' ? 'Konstruiere den Inkreismittelpunkt I und zeichne den Inkreis. Miss den Radius.' : k === 'S' ? 'Konstruiere den Schwerpunkt S.' : 'Zeichne alle drei Höhen ein und bestimme den Höhenschnittpunkt H.';
    return { title: 'Besondere Punkte im Dreieck', instr: 'Konstruiere das Dreieck ABC: ' + d.tr.given + '. ' + ask, body: kfeld(H) + (k === 'U' || k === 'I' ? '<div class="mi">Radius: ' + UB.blank(5) + '</div>' : ''), sol: solBox(H, d.svg) + '<div class="mi">' + UB.sol(info) + '</div>' };
  } });

  UB.simple({
    id: 'm-dreieckkonstruktion', fach: 'mathe', title: 'Dreiecke konstruieren', area: 'geometrie', klassen: [2, 3], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: 'Beschriftung: Eckpunkte A, B, C gegen den Uhrzeigersinn; Seite a liegt gegenüber von A, b gegenüber von B, c gegenüber von C; Winkel α bei A, β bei B, γ bei C. Winkelsumme: 180°. <b>SSS</b>: c zeichnen, Kreisbögen um A (Radius b) und um B (Radius a). <b>SWS</b>: c zeichnen, α bei A antragen, b auf dem Schenkel abtragen. <b>WSW</b>: c zeichnen, α bei A und β bei B antragen – der Schnittpunkt ist C. <b>Thaleskreis</b>: Jeder Winkel im Halbkreis über AB ist 90°. <b>Höhe</b>: Normale von einer Ecke auf die gegenüberliegende Seite (bei stumpfen Winkeln auf deren Verlängerung). Umkreismittelpunkt U: Schnitt der Streckensymmetralen. Inkreismittelpunkt I: Schnitt der Winkelsymmetralen. Schwerpunkt S: Schnitt der Schwerlinien. Höhenschnittpunkt H: Schnitt der Höhen.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst ein Dreieck aus drei Seiten konstruieren.', 'Du kannst Winkel genau messen.'], tasks: [dreieck(['SSS'], 78), dreieck(['SSS'], 78)] },
      2: { ichkann: ['Du kannst Dreiecke nach SWS und WSW konstruieren.', 'Du kannst eine Höhe richtig einzeichnen – auch außerhalb des Dreiecks.'], tasks: [dreieck(['SWS'], 76, true), dreieck(['WSW'], 76)] },
      3: { ichkann: ['Du kannst U, I, S und H im Dreieck konstruieren.', 'Du kannst den Thaleskreis nutzen.'], tasks: [besonderePunkte(86), dreieck(['THALES'], 64)] }
    }
  });

  // ================================================================ Vierecke
  function rawQuad(kind, rng) {
    const r1 = (a, b) => R(rng, a, b) / 10;
    if (kind === 'rechteck') { const a = r1(50, 110), b = r1(25, 55); return { pts: [[0, 0], [a, 0], [a, b], [0, b]], given: 'a = ' + F1(a) + ' cm, b = ' + F1(b) + ' cm', name: 'Rechteck', art: 'das', ask: 'Zeichne die Diagonale e ein und miss sie.', diags: ['e'] }; }
    if (kind === 'quadrat') { const a = r1(30, 60); return { pts: [[0, 0], [a, 0], [a, a], [0, a]], given: 'a = ' + F1(a) + ' cm', name: 'Quadrat', art: 'das', ask: 'Zeichne die Diagonale e ein und miss sie.', diags: ['e'] }; }
    if (kind === 'parallelogramm') { const a = r1(55, 95), b = r1(30, 50), al = R(rng, 8, 15) * 5, D = [b * Math.cos(al * DEG), b * Math.sin(al * DEG)]; return { pts: [[0, 0], [a, 0], add([a, 0], D), D], given: 'a = ' + F1(a) + ' cm, b = ' + F1(b) + ' cm, α = ' + al + '°', name: 'Parallelogramm', art: 'das', ask: 'Zeichne die Diagonalen e und f ein und miss sie.', diags: ['e', 'f'] }; }
    if (kind === 'raute') { const a = r1(35, 55), al = R(rng, 8, 14) * 5, D = [a * Math.cos(al * DEG), a * Math.sin(al * DEG)]; return { pts: [[0, 0], [a, 0], add([a, 0], D), D], given: 'a = ' + F1(a) + ' cm, α = ' + al + '°', name: 'Raute', art: 'die', ask: 'Zeichne die Diagonalen e und f ein und miss sie.', diags: ['e', 'f'] }; }
    if (kind === 'trapez') {
      const a = r1(70, 110), b = r1(30, 50), be = R(rng, 11, 16) * 5, c = r1(25, 55);
      const Cp = [a - b * Math.cos(be * DEG), b * Math.sin(be * DEG)], Dp = [Cp[0] - c, Cp[1]];
      if (Dp[0] < -1.5 || c > a - 1.5) return null;
      return { pts: [[0, 0], [a, 0], Cp, Dp], given: 'a = ' + F1(a) + ' cm, b = ' + F1(b) + ' cm, c = ' + F1(c) + ' cm, β = ' + be + '°, a ∥ c', name: 'Trapez', art: 'das', ask: 'Zeichne die Höhe h ein. Miss d und h.', height: true, diags: [] };
    }
    const e = r1(60, 100), f = r1(30, 55);
    return { pts: [[0, 0], [e / 2, -f / 2], [e, 0], [e / 2, f / 2]], given: 'e = ' + F1(e) + ' cm, f = ' + F1(f) + ' cm (Diagonalen)', name: 'Raute', art: 'die', ask: 'Miss die Seitenlänge a und die Winkel α und β.', diags: ['e', 'f'], fromDiag: true };
  }
  const viereckTask = (kinds, H) => ({ type: 'fn', fn: (rng) => {
    let v, fr; for (let t = 0; t < 200; t++) { v = rawQuad(rng.pick(kinds), rng); if (!v) continue; fr = frame(v.pts, W0, H, 8); if (fr.ok) break; }
    const Q = v.pts, P = Q.map(fr.P), G = mul(P.reduce((s, p) => add(s, p), [0, 0]), 1 / 4);
    let s = PL(P, { f: '#f3f6ff', cls: 'fig' });
    const meas = [];
    if (v.diags.includes('e')) { s += L(P[0], P[2], { c: '#1d4ed8', w: 0.35, d: '1.4 0.8' }); meas.push('e ≈ ' + F1(dist(Q[0], Q[2])) + ' cm'); }
    if (v.diags.includes('f')) { s += L(P[1], P[3], { c: '#1d4ed8', w: 0.35, d: '1.4 0.8' }); meas.push('f ≈ ' + F1(dist(Q[1], Q[3])) + ' cm'); }
    if (v.fromDiag) { const Mi = mul(add(P[0], P[2]), 0.5); s += rightMark(Mi, P[2], P[3], '#1d4ed8'); meas.unshift('a ≈ ' + F1(dist(Q[0], Q[1])) + ' cm', 'α ≈ ' + Math.round(angAt(Q[3], Q[0], Q[1])) + '°', 'β ≈ ' + Math.round(angAt(Q[0], Q[1], Q[2])) + '°'); meas.splice(3); }
    if (v.height) { const al = altitude(P[2], P[0], P[1], ''); s += al.s; const lp = mul(add(P[2], al.F), 0.5); s += T([lp[0] + 1.6, lp[1] + 1], 'h', { fs: 3, fill: '#1d4ed8', a: 'start' }); meas.push('d ≈ ' + F1(dist(Q[3], Q[0])) + ' cm', 'h ≈ ' + F1(Q[2][1]) + ' cm'); }
    for (let i = 0; i < 4; i++) s += angleMark(P[(i + 3) % 4], P[i], P[(i + 1) % 4], angAt(Q[(i + 3) % 4], Q[i], Q[(i + 1) % 4]));
    ['A', 'B', 'C', 'D'].forEach((n, i) => { s += vlabel(P[i], G, n); });
    ['a', 'b', 'c', 'd'].forEach((n, i) => { s += slabel(P[i], P[(i + 1) % 4], G, n); });
    return { title: v.name + ' konstruieren', instr: 'Konstruiere ' + v.art + ' ' + v.name + ' ABCD: ' + v.given + '. ' + v.ask, body: kfeld(H) + '<div class="mi">Gemessen: ' + UB.blank(16) + '</div>', sol: solBox(H, s) + '<div class="mi">' + UB.sol(meas.join(' · ')) + ' <span class="hint">(Messwerte, ±1 mm bzw. ±1°)</span></div>' };
  } });
  UB.simple({
    id: 'm-viereckkonstruktion', fach: 'mathe', title: 'Vierecke konstruieren', area: 'geometrie', klassen: [1, 2, 3], img: 'MiniHoS_Lob_Checkliste',
    merk: 'Beschriftung gegen den Uhrzeigersinn: A, B, C, D; Seiten a = AB, b = BC, c = CD, d = DA; Diagonalen e = AC, f = BD; Winkel α bei A, β bei B, γ bei C, δ bei D. Winkelsumme im Viereck: 360°. <b>Rechteck</b>: vier rechte Winkel, gegenüberliegende Seiten gleich lang. <b>Quadrat</b>: alle Seiten gleich lang, vier rechte Winkel. <b>Parallelogramm</b>: gegenüberliegende Seiten parallel und gleich lang; nebeneinanderliegende Winkel ergeben 180°. <b>Raute</b>: alle Seiten gleich lang, die Diagonalen halbieren einander und stehen normal aufeinander. <b>Trapez</b>: zwei parallele Seiten (a ∥ c); die Höhe h ist der Normalabstand der Parallelen.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Rechteck und Quadrat genau zeichnen.', 'Du kannst Strecken genau messen.'], tasks: [viereckTask(['rechteck'], 74), viereckTask(['quadrat'], 74)] },
      2: { ichkann: ['Du kannst Parallelogramm und Raute konstruieren.'], tasks: [viereckTask(['parallelogramm'], 74), viereckTask(['raute'], 74)] },
      3: { ichkann: ['Du kannst Trapeze konstruieren und die Höhe einzeichnen.', 'Du kannst eine Raute aus den Diagonalen konstruieren.'], tasks: [viereckTask(['trapez'], 72), viereckTask(['rauteD'], 72)] }
    }
  });

  // ================================================================ Koordinatensystem
  const FIGS = [
    ['Rechteck', (a, b) => [[0, 0], [a + 2, 0], [a + 2, b], [0, b]]],
    ['Quadrat', (a) => [[0, 0], [a, 0], [a, a], [0, a]]],
    ['Parallelogramm', (a, b, s) => [[0, 0], [a, 0], [a + s, b], [s, b]]],
    ['rechtwinkeliges Dreieck', (a, b) => [[0, 0], [a + 1, 0], [0, b + 1]]],
    ['gleichschenkeliges Dreieck', (a, b) => [[0, 0], [2 * a, 0], [a, b + 1]]],
    ['Trapez', (a, b, s) => [[0, 0], [a + 2, 0], [a + 2 - s, b], [s, b]]],
    ['Deltoid', (a, b) => [[a, 0], [2 * a, b], [a, 2 * b + 2], [0, b]]]
  ];
  function grid(minX, maxX, minY, maxY, u) {
    const W = (maxX - minX) * u + 10, H = (maxY - minY) * u + 9, ox = 5 - minX * u, oy = 4 + maxY * u;
    const P = (p) => [ox + p[0] * u, oy - p[1] * u];
    let s = '';
    for (let x = minX; x <= maxX; x++) s += L(P([x, minY]), P([x, maxY]), { c: '#d4d4d4', w: 0.2 });
    for (let y = minY; y <= maxY; y++) s += L(P([minX, y]), P([maxX, y]), { c: '#d4d4d4', w: 0.2 });
    s += L(P([minX, 0]), P([maxX + 0.5, 0]), { w: 0.4, cls: 'xaxis' }) + L(P([0, minY]), P([0, maxY + 0.5]), { w: 0.4, cls: 'yaxis' });
    for (let x = minX; x <= maxX; x++) if (x) s += T([P([x, 0])[0], P([x, 0])[1] + 3.1], fmt(x), { fs: 2.3 });
    for (let y = minY; y <= maxY; y++) if (y) s += T([P([0, y])[0] - 1.3, P([0, y])[1] + 0.9], fmt(y), { fs: 2.3, a: 'end' });
    s += T([P([0, 0])[0] - 1.3, P([0, 0])[1] + 3.1], '0', { fs: 2.3, a: 'end' }) + T([P([maxX, 0])[0] + 2.6, P([maxX, 0])[1] - 1.2], 'x', { fs: 3 }) + T([P([0, maxY])[0] + 1.6, P([0, maxY])[1] - 1.2], 'y', { fs: 3, a: 'start' });
    return { W, H, P, s, u, ox, oy };
  }
  const koordTask = (mode) => ({ type: 'fn', fn: (rng, level) => {
    const neg = level === 3;
    const [minX, maxX, minY, maxY] = neg ? [-6, 6, -4, 4] : [0, 12, 0, 8];
    const its = M.uniq(2, () => { for (let tr = 0; tr < 30; tr++) {
      const [name, fn] = rng.pick(FIGS);
      const base = fn(R(rng, 2, 4), R(rng, 2, 3), R(rng, 1, 2));
      const bx0 = Math.min(...base.map(p => p[0])), bx1 = Math.max(...base.map(p => p[0])), by0 = Math.min(...base.map(p => p[1])), by1 = Math.max(...base.map(p => p[1]));
      const opts = [];
      for (let dx = minX - bx0; dx <= maxX - bx1; dx++) for (let dy = minY - by0; dy <= maxY - by1; dy++) {
        const pts = base.map(p => [p[0] + dx, p[1] + dy]);
        if (neg && !(pts.some(p => p[0] < 0) && pts.some(p => p[1] < 0) && pts.some(p => p[0] > 0))) continue;
        if (pts.some(p => p[0] === 0 || p[1] === 0)) continue;
        opts.push(pts);
      }
      if (opts.length) return { name, pts: rng.pick(opts) };
    } }, x => x.name);
    const names = ['A', 'B', 'C', 'D'];
    const cell = (it, s2) => {
      const g = grid(minX, maxX, minY, maxY, 5.5); let s = g.s;
      const P = it.pts.map(g.P), G = mul(P.reduce((a, p) => add(a, p), [0, 0]), 1 / P.length);
      if (s2) s += PL(P, { c: '#c62828', w: 0.5, f: 'rgba(198,40,40,0.08)', cls: 'fig' });
      if (s2 || mode === 'lesen') P.forEach((p, i) => { const v = unit(sub(p, G)); s += C(p, 0.8, { f: s2 ? '#c62828' : '#111', c: s2 ? '#c62828' : '#111', cls: 'pt', data: ' data-xy="' + it.pts[i].join(',') + '"' }) + T([p[0] + v[0] * 3, p[1] + v[1] * 3 + 1.1], names[i], { fs: 3, b: true }); });
      const coords = it.pts.map((p, i) => names[i] + '(' + fmt(p[0]) + ' | ' + fmt(p[1]) + ')').join(', ');
      const fig = svgMM(g.W, g.H, s, 'koord');
      if (mode === 'lesen') return '<div class="mi">' + fig + '<br>' + (s2 ? UB.sol(coords) : it.pts.map((p, i) => names[i] + '(' + UB.blank(1.2) + '|' + UB.blank(1.2) + ')').join(' ')) + '</div>';
      return '<div class="mi">' + coords + '<br>' + fig + '<br>Figur: ' + (s2 ? UB.sol(it.name) : UB.blank(10)) + '</div>';
    };
    const mk = (s2) => '<div class="mgrid c2">' + its.map(it => cell(it, s2)).join('') + '</div>';
    return mode === 'lesen'
      ? { title: 'Koordinaten ablesen', instr: 'Schreibe die Koordinaten der Punkte auf.', body: mk(false), sol: mk(true) }
      : { title: 'Punkte eintragen', instr: 'Trage die Punkte ein und verbinde sie der Reihe nach. Welche Figur entsteht?', body: mk(false), sol: mk(true) };
  } });
  UB.simple({
    id: 'm-koordinaten', fach: 'mathe', title: 'Koordinatensystem', area: 'geometrie', klassen: [1, 2, 3], img: 'MiniHoS_Forschen_Lupe',
    merk: 'Ein Punkt hat zwei <b>Koordinaten</b>: P(x | y). Zuerst gehst du die x-Achse entlang nach rechts (bei negativen Zahlen nach links), dann parallel zur y-Achse nach oben (bei negativen Zahlen nach unten). Der Ursprung ist O(0 | 0). Merkspruch: „Erst durch den Flur (x), dann die Treppe hinauf (y).“',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Punkte in ein Koordinatensystem eintragen.', 'Du erkennst die Figur, die entsteht.'], tasks: [koordTask('eintragen'), koordTask('lesen')] },
      2: { ichkann: ['Du kannst Koordinaten sicher ablesen und eintragen.'], tasks: [koordTask('lesen'), koordTask('eintragen')] },
      3: { ichkann: ['Du kannst mit negativen Koordinaten arbeiten.'], tasks: [koordTask('eintragen'), koordTask('lesen')] }
    }
  });

  // ================================================================ Achsenspiegelung
  const spiegel = (axis) => ({ type: 'fn', fn: (rng) => {
    const N = 14, u = 5, m = 5;
    const area2 = (pts) => Math.abs(pts.reduce((s, p, i) => { const q = pts[(i + 1) % pts.length]; return s + p[0] * q[1] - q[0] * p[1]; }, 0)) / 2;
    const gen = () => {
      for (let t = 0; t < 400; t++) {
        const k = R(rng, 4, 6), pts = [];
        for (let z = 0; z < 200 && pts.length < k; z++) {
          const p = axis === 'v' ? [R(rng, 1, 6), R(rng, 1, N - 1)] : axis === 'h' ? [R(rng, 1, N - 1), R(rng, 1, 6)] : [R(rng, 1, N - 2), R(rng, 2, N - 1)];
          if (axis === 'd' && p[1] <= p[0]) continue;
          if (!pts.some(q => q[0] === p[0] && q[1] === p[1])) pts.push(p);
        }
        const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length, cy = pts.reduce((s, p) => s + p[1], 0) / pts.length;
        pts.sort((p, q) => Math.atan2(p[1] - cy, p[0] - cx) - Math.atan2(q[1] - cy, q[0] - cx));
        if (area2(pts) >= 8) return pts;
      }
    };
    const its = M.uniq(2, gen, p => JSON.stringify(p));
    const mirror = (p) => axis === 'v' ? [N - p[0], p[1]] : axis === 'h' ? [p[0], N - p[1]] : [p[1], p[0]];
    const P = (p) => [m + p[0] * u, m + (N - p[1]) * u];
    const cell = (pts, s2) => {
      let s = '';
      for (let i = 0; i <= N; i++) s += L(P([i, 0]), P([i, N]), { c: '#d4d4d4', w: 0.2 }) + L(P([0, i]), P([N, i]), { c: '#d4d4d4', w: 0.2 });
      const ax = axis === 'v' ? [P([N / 2, -0.4]), P([N / 2, N + 0.4])] : axis === 'h' ? [P([-0.4, N / 2]), P([N + 0.4, N / 2])] : [P([-0.4, -0.4]), P([N + 0.4, N + 0.4])];
      s += L(ax[0], ax[1], { c: '#1d4ed8', w: 0.6, cls: 'axis' });
      s += axis === 'v' ? T([ax[1][0] + 1.6, ax[1][1] + 2.4], 's', { fs: 3.4, fill: '#1d4ed8', b: true, a: 'start' }) : axis === 'h' ? T([ax[1][0] - 0.5, ax[1][1] - 1.4], 's', { fs: 3.4, fill: '#1d4ed8', b: true, a: 'end' }) : T([ax[1][0] - 3.2, ax[1][1] + 1.2], 's', { fs: 3.4, fill: '#1d4ed8', b: true });
      s += PL(pts.map(P), { f: '#e3eaff', c: '#111', w: 0.5, cls: 'fig' });
      if (s2) s += PL(pts.map(mirror).map(P), { f: 'rgba(198,40,40,0.1)', c: '#c62828', w: 0.5, cls: 'mir' });
      return svgMM(N * u + 2 * m, N * u + 2 * m, s);
    };
    const mk = (s2) => '<div class="mgrid c2">' + its.map(pts => '<div class="mi">' + cell(pts, s2) + '</div>').join('') + '</div>' + (s2 ? '<div class="mi">' + UB.sol('Rot: die gespiegelte Figur. Jeder Bildpunkt ist gleich weit von s entfernt wie sein Originalpunkt.') + '</div>' : '');
    const where = axis === 'v' ? 'an der senkrechten Achse s' : axis === 'h' ? 'an der waagrechten Achse s' : 'an der schrägen Achse s';
    return { title: 'Achsenspiegelung', instr: 'Spiegle die Figur ' + where + '. Zähle die Kästchen bis zur Achse' + (axis === 'd' ? ' – bei der schrägen Achse diagonal durch die Kästchen.' : '.'), body: mk(false), sol: mk(true) };
  } });
  UB.simple({
    id: 'm-symmetrie', fach: 'mathe', title: 'Achsenspiegelung', area: 'geometrie', klassen: [1, 2], img: 'MiniHoS_Gesicht_Zwinkern',
    merk: 'Bei der <b>Achsenspiegelung</b> hat jeder Bildpunkt denselben Abstand von der Spiegelachse wie der ursprüngliche Punkt; die Verbindungsstrecke steht normal (im rechten Winkel) auf der Achse. Die Figur wird „umgeklappt“: Längen und Winkel bleiben gleich, der Umlaufsinn ändert sich. Eine Figur ist <b>achsensymmetrisch</b>, wenn sie durch Spiegelung auf sich selbst abgebildet wird.',
    pools: {},
    levels: {
      1: { ichkann: ['Du kannst Figuren an einer senkrechten Achse spiegeln.'], tasks: [spiegel('v'), spiegel('v')] },
      2: { ichkann: ['Du kannst Figuren an einer waagrechten Achse spiegeln.'], tasks: [spiegel('h'), spiegel('v')] },
      3: { ichkann: ['Du kannst Figuren an einer schrägen Achse spiegeln.'], tasks: [spiegel('d'), spiegel('h')] }
    }
  });
})();
