/* =====================================================================
   Mathe-Baukasten: Zahlen formatieren, Aufgaben erzeugen, Kästchen,
   schriftliches Rechnen und einfache Zeichnungen (SVG, druckt sicher).
   Alle Lösungen werden hier berechnet, nicht von Hand eingetragen.
   ===================================================================== */
(function () {
  'use strict';
  const { esc, sol, lines, table, blank } = UB;
  const NB = ' ';
  const MINUS = '−';

  // ------------------------------------------------------------- Zahlen
  const R = (rng, a, b) => a + rng.int(b - a + 1);           // ganze Zahl a..b
  const round = (x, d) => { const f = Math.pow(10, d); return Math.round((x + Number.EPSILON) * f) / f; };
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; };
  const lcm = (a, b) => a / gcd(a, b) * b;

  // österreichische Schreibweise: Dezimalkomma, schmale Leerzeichen ab 10 000
  function fmt(x, dec) {
    if (typeof x === 'string') return x;
    const neg = x < 0; x = Math.abs(x);
    let s = dec === undefined ? String(round(x, 6)) : x.toFixed(dec);
    if (s.includes('e')) s = x.toFixed(6).replace(/0+$/, '');
    let [i, f] = s.split('.');
    if (i.length > 4) i = i.replace(/\B(?=(\d{3})+(?!\d))/g, NB);
    return (neg ? MINUS : '') + i + (f ? ',' + f : '');
  }
  const frac = (z, n) => '<span class="fr"><span>' + z + '</span><span>' + n + '</span></span>';
  const fracR = (z, n) => { const g = gcd(z, n); return n / g === 1 ? fmt(z / g) : frac(z / g, n / g); };   // gekürzt
  const mixed = (z, n) => { const g = gcd(z, n); z /= g; n /= g; if (z < n || n === 1) return n === 1 ? fmt(z) : frac(z, n); const w = Math.floor(z / n), r = z % n; return r ? w + '&#8239;' + frac(r, n) : fmt(w); };

  // ------------------------------------------------------------- Kästchen
  const karo = (cols, rows) => '<svg class="karo" width="' + cols * 5 + 'mm" height="' + rows * 5 + 'mm" viewBox="0 0 ' + cols * 5 + ' ' + rows * 5 + '" aria-hidden="true">' +
    '<defs><pattern id="k5" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M5 0H0V5" fill="none" stroke="#b9b9b9" stroke-width="0.22"/></pattern></defs>' +
    '<rect x="0" y="0" width="' + cols * 5 + '" height="' + rows * 5 + '" fill="url(#k5)" stroke="#9a9a9a" stroke-width="0.3"/></svg>';

  // Schriftliches Rechnen im Kästchenraster.
  // rows: Zeilen als Strings (rechtsbündig), op: Rechenzeichen vor der letzten Eingabezeile,
  // lineAfter: Index, nach dem der Strich kommt, solRows: Zeilen, die erst auf dem Lösungsblatt stehen
  function grid(spec, solution) {
    const all = spec.rows.concat(solution ? spec.solRows : spec.solRows.map(() => ''));
    const shift = spec.shift || all.map(() => 0);
    const width = spec.cols || Math.max(...all.map((r, i) => r.length + (shift[i] || 0))) + 2;
    const h = all.length + (spec.extra || 0);
    let t = '';
    all.forEach((r, ri) => {
      const isSol = ri >= spec.rows.length;
      const end = width - (shift[ri] || 0);
      [...r].forEach((ch, ci) => {
        const x = (end - r.length + ci) * 5 + 2.5, y = ri * 5 + 3.9;
        t += '<text x="' + x + '" y="' + y + '"' + (isSol ? ' class="gs"' : '') + '>' + esc(ch) + '</text>';
      });
    });
    if (spec.op) t += '<text x="2.5" y="' + ((spec.opRow || spec.rows.length - 1) * 5 + 3.9) + '">' + esc(spec.op) + '</text>';
    const lineY = ((spec.lineAfter === undefined ? spec.rows.length - 1 : spec.lineAfter) + 1) * 5;
    const lines2 = (spec.lines2 || []).map(i => '<line x1="0" x2="' + width * 5 + '" y1="' + (i + 1) * 5 + '" y2="' + (i + 1) * 5 + '" stroke="#111" stroke-width="0.4"/>').join('');
    return '<svg class="karo grid" width="' + width * 5 + 'mm" height="' + h * 5 + 'mm" viewBox="0 0 ' + width * 5 + ' ' + h * 5 + '" aria-hidden="true">' +
      '<defs><pattern id="k5" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M5 0H0V5" fill="none" stroke="#b9b9b9" stroke-width="0.22"/></pattern></defs>' +
      '<rect x="0" y="0" width="' + width * 5 + '" height="' + h * 5 + '" fill="url(#k5)" stroke="#9a9a9a" stroke-width="0.3"/>' +
      '<line x1="0" x2="' + width * 5 + '" y1="' + lineY + '" y2="' + lineY + '" stroke="#111" stroke-width="0.4"/>' + lines2 + t + '</svg>';
  }

  // ------------------------------------------------------------- Aufgaben
  // spec: { title, instr, n, cols, gen(rng, level, i) → {q, a, key?}, mode: 'inline'|'lines'|'karo'|'grid', w, lines, karo:[c,r] }
  function items(spec, rng, level) {
    const out = [];
    for (let i = 0; i < spec.n; i++) {
      let it, tries = 0;
      do { it = spec.gen(rng, level, i); tries++; } while (tries < 30 && (rng.used.has('M:' + (it.key || it.q)) || out.some(o => (o.key || o.q) === (it.key || it.q))));
      rng.used.add('M:' + (it.key || it.q));
      out.push(it);
    }
    return out;
  }
  const fill = (q, ans, w) => {
    const arr = Array.isArray(ans) ? ans : [ans]; let i = 0;
    return (q.includes('{?}') ? q : q + ' = {?}').replace(/\{\?\}/g, () => { const a = arr[i++]; return ans === null ? blank(w || 4) : sol(a); });
  };

  function task(spec) {
    return {
      type: 'fn',
      fn: (rng, level) => {
        const its = items(spec, rng, level);
        const mode = spec.mode || 'inline';
        const cols = spec.cols || 2;
        let body, solH;
        if (mode === 'inline') {
          const cell = (it, s) => '<div class="mi">' + (spec.num === false ? '' : '') + fill(it.q, s ? it.a : null, it.w || spec.w) + '</div>';
          body = '<div class="mgrid c' + cols + '">' + its.map(it => cell(it, false)).join('') + '</div>';
          solH = '<div class="mgrid c' + cols + '">' + its.map(it => cell(it, true)).join('') + '</div>';
        } else if (mode === 'grid') {
          const cell = (it, s) => '<div class="mi">' + (it.label ? '<div class="ml">' + it.label + '</div>' : '') + grid(it.grid, s) + (s && it.a ? '<div class="ma">' + sol(it.a) + '</div>' : '') + '</div>';
          body = '<div class="mgrid c' + cols + '">' + its.map(it => cell(it, false)).join('') + '</div>';
          solH = '<div class="mgrid c' + cols + '">' + its.map(it => cell(it, true)).join('') + '</div>';
        } else {
          const after = mode === 'karo' ? (spec.karo ? karo(spec.karo[0], spec.karo[1]) : karo(34, 4)) : lines(spec.lines || 2);
          const cell = (it, s) => '<div class="mi tx">' + (its.length > 1 ? '<b class="mlet">' + 'abcdefghij'[its.indexOf(it)] + ')</b> ' : '') + it.q + (s ? '<div class="ma">' + sol(it.a) + '</div>' : after) + '</div>';
          body = '<div class="mgrid c' + (spec.cols || 1) + '">' + its.map(it => cell(it, false)).join('') + '</div>';
          solH = '<div class="mgrid c' + (spec.cols || 1) + '">' + its.map(it => cell(it, true)).join('') + '</div>';
        }
        return { title: spec.title, instr: spec.instr || '', body, sol: solH };
      }
    };
  }

  // Merk- oder Infokasten als Aufgabe ohne Lösungsteil
  const info = (title, html) => ({ type: 'merk', title, html });

  // ------------------------------------------------------------- Zeichnungen
  function svgBox(w, h, inner) { return '<svg class="mfig" width="' + w + 'mm" height="' + h + 'mm" viewBox="0 0 ' + w + ' ' + h + '" aria-hidden="true">' + inner + '</svg>'; }
  const lbl = (x, y, t, a) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (a || 'middle') + '" font-size="3.6">' + t + '</text>';
  // Rechteck (nicht maßstabsgetreu) mit Beschriftung der Seiten
  function rect(a, b, la, lb) {
    const W = 34, H = Math.max(10, Math.min(24, 34 * (b / a)));
    return svgBox(W + 14, H + 10, '<rect x="7" y="2" width="' + W + '" height="' + H + '" fill="#f3f6ff" stroke="#111" stroke-width="0.45"/>' +
      lbl(7 + W / 2, H + 7, la) + lbl(W + 8.5, 2 + H / 2 + 1.2, lb, 'start'));
  }
  // Quader in Schrägriss
  function cuboid(la, lb, lc) {
    const a = 28, b = 10, c = 18, ox = 4, oy = 4 + b * 0.6;
    const P = (x, y) => (ox + x) + ',' + (oy + y);
    const dx = b * 0.7, dy = -b * 0.6;
    const front = [P(0, c), P(a, c), P(a, 0), P(0, 0)].join(' ');
    const top = [P(0, 0), P(a, 0), P(a + dx, dy), P(dx, dy)].join(' ');
    const side = [P(a, c), P(a + dx, c + dy), P(a + dx, dy), P(a, 0)].join(' ');
    return svgBox(a + dx + 16, c + 21, '<polygon points="' + front + '" fill="#f3f6ff" stroke="#111" stroke-width="0.45"/>' +
      '<polygon points="' + top + '" fill="#e3eaff" stroke="#111" stroke-width="0.45"/><polygon points="' + side + '" fill="#d6e0fb" stroke="#111" stroke-width="0.45"/>' +
      lbl(ox + a / 2, oy + c + 5, la) + lbl(ox + a + dx / 2 + 3, oy + c + dy / 2 + 2, lb, 'start') + lbl(ox + a + dx + 2, oy + c / 2 + dy / 2 + 1, lc, 'start'));
  }
  // Winkel mit Schenkeln, deg in Grad
  function angle(deg) {
    const r = 22, cx = 26, cy = deg <= 180 ? 24 : 26, rad = deg * Math.PI / 180;
    const x2 = cx + r * Math.cos(-rad), y2 = cy + r * Math.sin(-rad);
    const arcR = 7, large = deg > 180 ? 1 : 0;
    const ax = cx + arcR * Math.cos(-rad), ay = cy + arcR * Math.sin(-rad);
    return svgBox(52, deg <= 180 ? 28 : 52, '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + r) + '" y2="' + cy + '" stroke="#111" stroke-width="0.5"/>' +
      '<line x1="' + cx + '" y1="' + cy + '" x2="' + x2.toFixed(2) + '" y2="' + y2.toFixed(2) + '" stroke="#111" stroke-width="0.5"/>' +
      '<path d="M' + (cx + arcR) + ' ' + cy + ' A' + arcR + ' ' + arcR + ' 0 ' + large + ' 0 ' + ax.toFixed(2) + ' ' + ay.toFixed(2) + '" fill="none" stroke="#1d4ed8" stroke-width="0.45"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="0.8" fill="#111"/>');
  }
  // Rechtwinkeliges Dreieck mit Beschriftung (Pythagoras)
  function rtri(la, lb, lc) {
    return svgBox(48, 32, '<polygon points="6,26 40,26 6,6" fill="#f3f6ff" stroke="#111" stroke-width="0.45"/>' +
      '<rect x="6" y="22.5" width="3.5" height="3.5" fill="none" stroke="#111" stroke-width="0.3"/>' +
      lbl(23, 30.5, la) + lbl(3, 17, lb, 'end') + lbl(25, 14, lc, 'start'));
  }
  // Zahlenstrahl mit Markierungen
  function numberLine(start, step, count, marks) {
    const W = 170, x0 = 6, dx = (W - 12) / (count - 1);
    let s = '<line x1="2" y1="13" x2="' + (W - 1) + '" y2="13" stroke="#111" stroke-width="0.45"/><path d="M' + (W - 1) + ' 13 l-2.5 -1.5 v3 z" fill="#111"/>';
    for (let i = 0; i < count; i++) {
      const x = x0 + i * dx;
      const big = i % (marks.labelEvery || 1) === 0;
      s += '<line x1="' + x + '" y1="' + (big ? 10.5 : 11.5) + '" x2="' + x + '" y2="' + (big ? 15.5 : 14.5) + '" stroke="#111" stroke-width="' + (big ? 0.45 : 0.3) + '"/>';
      if (big) s += lbl(x, 20.5, fmt(start + i * step));
    }
    (marks.arrows || []).forEach((m, k) => {
      const x = x0 + ((m.v - start) / step) * dx;
      s += '<path d="M' + x + ' 5 v4" stroke="#1d4ed8" stroke-width="0.5"/><path d="M' + x + ' 10 l-1.3 -2 h2.6 z" fill="#1d4ed8"/>' + lbl(x, 4, '<tspan font-weight="700" fill="#1d4ed8">' + m.t + '</tspan>');
    });
    return svgBox(W, 23, s);
  }

  UB.M = { R, round, gcd, lcm, fmt, frac, fracR, mixed, karo, grid, task, info, rect, cuboid, angle, rtri, numberLine, NB, MINUS };
})();
