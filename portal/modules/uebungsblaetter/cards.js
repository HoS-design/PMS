/* Kärtchen zum Ausdrucken und Ausschneiden: Domino, Memory, Trimino.
   Die Frage-Antwort-Paare kommen aus den Übungsblatt-Themen (def.pairs).
   Alle Maße in mm; ausgedruckt in 100 % passen die Karten auf eine A4-Seite. */
(function () {
  'use strict';
  const { esc } = UB;
  const plain = (h) => UB.plainOf(h);
  const svgW = (h) => Math.max(0, ...(String(h).match(/<svg[^>]*width="([\d.]+)mm"/g) || []).map(s => +s.match(/width="([\d.]+)mm"/)[1]));
  const hasSvg = (h) => /<svg/.test(h);

  const FORMATS = {
    domino: { label: 'Domino', n: 14, min: 10, fits: (p) => plain(p.q).length <= 80 && plain(p.a).length <= 34 && !hasSvg(p.q + p.a) && !/<table/.test(p.q + p.a) },
    memory: { label: 'Memory', n: 12, min: 8, dupA: true, fits: (p) => plain(p.q).length <= 100 && plain(p.a).length <= 60 && !hasSvg(p.a) && svgW(p.q) <= 40 && !/<table/.test(p.q + p.a) },
    trimino: { label: 'Trimino', n: 18, min: 9, fits: (p) => plain(p.q).length <= 21 && plain(p.a).length <= 14 && !hasSvg(p.q + p.a) && !/<table|<div/.test(p.q + p.a) }
  };

  // Karten sind nur sinnvoll, wenn man die Antwort nicht einfach am gleichen Wort erkennt:
  // – Antwort steht schon in der Frage (z. B. Satz → derselbe Satz richtig geschrieben) → weg
  // – Frage und Antwort fast wortgleich (Ihr öffnet die Fenster. → Öffnet die Fenster!) → weg
  // – Paare mit Gruppe (grp: gleiches Wort in mehreren Formen, ist/isst …) kommen nur zu zweit oder mehr aufs Blatt
  const words = h => plain(h).toLowerCase().replace(/[^a-zäöüß0-9]+/g, ' ').trim();
  function leak(p) {
    if (p.caps || p.opt) return false; // Auswahl-Paare: Gegenkarte liegt im Set (grp)
    const a = words(p.a), q = words(p.q);
    if (!a || (' ' + q + ' ').includes(' ' + a + ' ')) return true;
    const wa = a.split(' '), wq = q.split(' ');
    if (wa.length >= 3) { const sq = new Set(wq), inter = new Set(wa.filter(w => sq.has(w))).size, uni = new Set(wa.concat(wq)).size; if (inter / uni >= 0.6) return true; }
    return false;
  }
  function pairsFor(t, level, seed, fmt) {
    if (!t.pairs) return [];
    const F = FORMATS[fmt], seenA = new Map(), seenQ = new Set(), cand = [];
    // mehrere Durchgänge (manche Generatoren liefern pro Durchgang nur wenige passende Paare)
    for (let round = 0; round < 4 && cand.length < F.n * 3; round++) {
      let raw = [];
      try { raw = t.pairs(level, UB.makeRng(seed + (round ? '|r' + round : '')), 80) || []; } catch (e) { break; }
      raw.forEach(p => {
        if (!F.fits(p) || leak(p) || selfLeak(p)) return;
        const ka = p.caps ? plain(p.a) : plain(p.a).toLowerCase(), kq = plain(p.q).toLowerCase().replace(/\s*[=→]\s*$/, '');
        // Memory: dieselbe Antwort höchstens zweimal (dem/den …), sonst nur „sortieren“ statt Memory
        if (!ka || !kq || (seenA.get(ka) || 0) >= (F.dupA ? 2 : 1) || seenQ.has(kq) || seenQ.has(ka.toLowerCase()) || seenA.has(kq)) return;
        seenA.set(ka, (seenA.get(ka) || 0) + 1); seenQ.add(kq); cand.push(p);
      });
    }
    const groups = {}, free = [], out = [];
    cand.forEach(p => { if (p.grp) (groups[p.grp] = groups[p.grp] || []).push(p); else free.push(p); });
    // Gruppe nur mit mindestens zwei verschiedenen Antworten; verschiedene Antworten zuerst
    const key = p => p.caps ? plain(p.a) : plain(p.a).toLowerCase();
    Object.values(groups).forEach(g => {
      const first = [], rest = [], seen = new Set();
      g.forEach(p => { if (seen.has(key(p))) rest.push(p); else { seen.add(key(p)); first.push(p); } });
      const room = F.n - out.length;
      if (first.length >= 2 && room >= 2) out.push(...first.concat(rest).slice(0, Math.min(F.dupA ? 4 : 3, room)));
    });
    free.forEach(p => { if (out.length < F.n) out.push(p); });
    return UB.makeRng(seed + '|mix').shuffle(out);
  }
  // Lässt sich ein Set ohne Wissen lösen? Für jede Frage: Hat genau eine Antwortkarte die meisten gleichen Wortanfänge
  // (z. B. „Der Gärtner gießt die Blumen.“ ⇒ „Die Blumen werden vom Gärtner gegossen.“)? Dann findet man sie durch Vergleichen.
  const STOP = new Set('der die das den dem des ein eine einen einem einer eines und oder ist sind war hat haben wird werden er sie es ich du wir ihr mit von zu im in am an auf für nicht wie als sich'.split(' '));
  const toks = h => plain(h).toLowerCase().replace(/(\d) (?=\d{3}\b)/g, '$1').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, ' ').split(' ').filter(w => w.length >= 3 && !STOP.has(w));
  // gleicher Wortstamm: gemeinsamer Anfang ≥ 3 Zeichen und ≥ 60 % des kürzeren Worts (Haus/Häuser, geht/gehe, Gra?/Gras)
  const same = (x, y) => { let k = 0; while (k < x.length && k < y.length && x[k] === y[k]) k++; return k >= 3 && k >= 0.6 * Math.min(x.length, y.length); };
  const overlap = (qa, aa) => aa.filter(a => qa.some(q => same(q, a))).length;
  // Paar verrät sich selbst (Antwort enthält ein Wort der Frage)? Gruppen (Zeitformen, Fälle, Groß/Klein, Auswahl) sind bewusst so gebaut.
  // Wortanfang mit Fragezeichen („der Ku?“, „na?“): steckt er am Anfang eines Antwortworts, verrät sich das Paar
  const frags = h => (plain(h).match(/[A-Za-zÄÖÜäöüß]+\?/g) || []).map(w => w.slice(0, -1).toLowerCase());
  const fragLeak = p => { const f = frags(p.q); if (!f.length) return false; const aw = plain(p.a).toLowerCase().split(/[^a-zäöüß]+/); return f.some(x => aw.some(w => w.length > x.length && w.startsWith(x))); };
  // Ziffern verraten das Ergebnis: 26 km² → 2600, 58 870 ≈ 58 900, 3 ZT + 3 T + 8 H … → 33 893, T36 → … 36
  const numsOf = h => (plain(h).replace(/(\d)[\s\u2009\u202f](?=\d{3}(?!\d))/g, '$1').match(/\d+(?:,\d+)?/g) || []).map(n => n.replace(',', ''));
  function numLeak(p) {
    const Q = numsOf(p.q), A = numsOf(p.a);
    if (!Q.length || !A.length) return false;
    const strip = n => { const t = n.replace(/^0+/, '').replace(/0+$/, ''); return { t, z: t.length < n.replace(/^0+/, '').length }; };
    const qs = Q.map(strip), as = A.map(strip);
    for (const a of as) for (const q of qs) {
      if (!a.t || !q.t) continue;
      if (a.t === q.t && (a.t.length >= 2 || a.z || q.z)) return true;
      let k = 0; while (k < a.t.length && k < q.t.length && a.t[k] === q.t[k]) k++;
      if (k >= 2 && k >= 0.6 * Math.min(a.t.length, q.t.length)) return true;
    }
    const cat = Q.join('').replace(/0/g, ''), ca = A.join('').replace(/0/g, '');
    if ((ca.length >= 3 || (Q.length >= 2 && ca.length >= 2)) && cat.includes(ca)) return true; // 6 l 3 dl → 6,3
    if (/≈/.test(plain(p.q))) return true;
    // alle Zahlen der Antwort stehen schon in der Angabe (Kinokarte 6 € → P = 6 · n)
    if (A.every(a => Q.includes(a))) return true; // Runden: die nächstgelegene Zahl findet man ohne Rundungsregel
    // Runden/Schätzen: Ergebnis liegt ganz nah an einer Zahl der Angabe → man findet es über die Größe
    const val = h => (plain(h).replace(/(\d)[\s\u2009\u202f](?=\d{3}(?!\d))/g, '$1').match(/\d+(?:,\d+)?/g) || []).map(n => parseFloat(n.replace(',', '.')));
    const qv = val(p.q).filter(v => v >= 5), av = val(p.a);
    return av.some(a => qv.some(q => a !== q && Math.abs(a - q) / q < 0.04));
  }
  const selfLeak = p => !p.grp && !p.caps && !p.opt && (overlap(toks(p.q), toks(p.a)) > 0 || fragLeak(p) || numLeak(p));
  function guessable(ps) {
    if (!ps.length) return 1;
    const A = ps.map(p => toks(p.a));
    let g = 0;
    ps.forEach((p, i) => {
      if (p.grp && ps.some((o, j) => j !== i && o.grp === p.grp)) return; // Gegenkarte im Set: Wortvergleich hilft nicht
      const q = toks(p.q), sc = A.map(a => overlap(q, a)), mx = Math.max(...sc);
      if (mx > 0 && sc[i] === mx && sc.filter(x => x === mx).length === 1) g++;
    });
    return g / ps.length;
  }
  // Karten eines Blatts; fällt ein Set zu klein aus, mit abgeleitetem Startwert nachziehen (gleiches Blatt → gleiches Ergebnis)
  function setFor(t, level, seed, fmt) {
    const F = FORMATS[fmt]; let ps = [];
    for (let r = 0; r < 6 && ps.length < F.n; r++) { const x = pairsFor(t, level, seed + '|' + fmt + (r ? '|n' + r : ''), fmt).slice(0, F.n); if (x.length > ps.length) ps = x; }
    return ps;
  }
  // Welche Formate sind für Thema + Stufe möglich? (einmal pro Thema/Stufe berechnet)
  // Nur wenn genug Paare da sind UND man sie nicht einfach durch Wortvergleich zuordnen kann – sonst lieber nur das Arbeitsblatt.
  const MAX_GUESS = 0.25;
  const availCache = {};
  function available(t, level) {
    const k = t.id + '|' + level;
    if (!availCache[k]) {
      availCache[k] = {};
      Object.keys(FORMATS).forEach(f => {
        const sets = ['avail|', 'b1|', 'b2|'].map(s => pairsFor(t, level, s + k + '|' + f, f).slice(0, FORMATS[f].n));
        availCache[k][f] = sets.every(ps => ps.length >= FORMATS[f].min && guessable(ps) <= MAX_GUESS);
      });
    }
    return availCache[k];
  }

  // ---------------------------------------------------------------- Blattrahmen
  function page(o, inner) {
    return '<article class="sheet cardsheet fach-' + o.fach + (o.solution ? ' solution' : '') + '">' +
      '<header class="sh-head"><div><div class="sh-kicker">' + UB.FACH[o.fach] + ' · ' + o.klasse + '. Klasse · ' + esc(UB.LEVEL_NAMES[o.level]) + '</div>' +
      '<h1>' + esc(o.heading) + '</h1><div class="sh-meta">' + esc(o.meta) + '</div></div>' +
      '<img class="sh-img" src="/assets/minihos/' + (o.solution ? 'MiniHoS_Lob_Medaille' : 'MiniHoS_Basteln_Schere') + '.webp" alt=""></header>' +
      (o.instr ? '<p class="instr cards-instr">' + o.instr + (o.hints && !o.solution ? '<br><span class="cards-hint">Zu den Aufgaben: ' + esc(o.hints) + '</span>' : '') + '</p>' : '') + inner +
      '<div class="sh-spacer"></div><footer class="sh-foot"><span>chatisthisreal.at/uebungsblaetter</span><span>Code: ' + esc(o.code) + '</span></footer></article>';
  }
  const sizeCls = (h, lim) => { const n = plain(h).length; return n > lim * 1.6 ? ' xs' : n > lim ? ' sm' : ''; };

  // ---------------------------------------------------------------- Domino
  function domino(ps, o) {
    const n = ps.length;
    const cards = ps.map((p, k) => ({ a: ps[(k + n - 1) % n].a, q: p.q, k }));
    const card = (c, num) => '<div class="dom">' + (num != null ? '<span class="cnum">' + num + '</span>' : '') + '<div class="dom-a' + sizeCls(c.a, 14) + '"><div>' + c.a + '</div></div><div class="dom-q' + sizeCls(c.q, 34) + '"><div>' + c.q + '</div></div></div>';
    if (!o.solution) {
      return page(Object.assign({}, o, { heading: 'Domino: ' + o.title, instr: 'Schneide die Karten entlang der Strichlinien aus. Beginne mit einer beliebigen Karte: Suche zur Aufgabe rechts die Karte, auf der links die passende Lösung steht, und lege sie an. Am Ende schließt sich der Kreis.' }),
        '<div class="cards-grid dom-grid">' + o.rng.shuffle(cards.slice()).map(c => card(c)).join('') + '</div>');
    }
    return page(Object.assign({}, o, { heading: 'Domino: ' + o.title, instr: 'Richtige Reihenfolge (die Kette ist geschlossen: nach der letzten Karte folgt wieder die erste).' }),
      '<div class="cards-grid dom-grid sol">' + cards.map((c, i) => card(c, i + 1)).join('') + '</div>');
  }

  // ---------------------------------------------------------------- Memory
  function memory(ps, o) {
    const cards = [];
    ps.forEach((p, i) => { cards.push({ t: 'q', h: p.q, i }); cards.push({ t: 'a', h: p.a, i }); });
    const card = (c) => '<div class="mem mem-' + c.t + sizeCls(c.h, c.t === 'q' ? 40 : 22) + '"><span class="mem-tag">' + (c.t === 'q' ? '?' : '!') + '</span><div>' + c.h + '</div></div>';
    if (!o.solution) {
      return page(Object.assign({}, o, { heading: 'Memory: ' + o.title, instr: 'Schneide die Karten aus und lege sie verdeckt auf. Abwechselnd werden zwei Karten umgedreht: Passen Aufgabe (?) und Lösung (!) zusammen, darfst du das Paar behalten.' }),
        '<div class="cards-grid mem-grid">' + o.rng.shuffle(cards).map(card).join('') + '</div>');
    }
    return page(Object.assign({}, o, { heading: 'Memory: ' + o.title, instr: 'Diese Karten gehören zusammen:' }),
      UB.table(['', 'Aufgabe', 'Lösung'], ps.map((p, i) => [String(i + 1), p.q, '<span class="sol">' + p.a + '</span>'])));
  }

  // ---------------------------------------------------------------- Trimino (Tarsia-Puzzle)
  function triGeom(N, s) {
    const h = s * Math.sqrt(3) / 2, tris = [];
    for (let r = 0; r < N; r++) {
      const L = (N - r - 1) * s / 2, yt = r * h, yb = (r + 1) * h;
      for (let j = 0; j <= r; j++) tris.push({ up: true, v: [[L + j * s + s / 2, yt], [L + (j + 1) * s, yb], [L + j * s, yb]] });            // im Uhrzeigersinn
      for (let j = 0; j < r; j++) tris.push({ up: false, v: [[L + j * s + s / 2, yt], [L + (j + 1) * s + s / 2, yt], [L + (j + 1) * s, yb]] });
    }
    return { tris, W: N * s, H: N * h };
  }
  const ekey = (p, q) => { const a = p.map(x => x.toFixed(2)).join(','), b = q.map(x => x.toFixed(2)).join(','); return a < b ? a + '|' + b : b + '|' + a; };
  function trimino(ps, o) {
    const N = ps.length >= 18 ? 4 : 3, s = N === 4 ? 44 : 56;
    const { tris, W, H } = triGeom(N, s);
    // innere Kanten finden und je ein Paar zuordnen
    const edges = {};
    tris.forEach((t, ti) => t.v.forEach((p, i) => { const k = ekey(p, t.v[(i + 1) % 3]); (edges[k] = edges[k] || []).push([ti, i]); }));
    const inner = Object.values(edges).filter(e => e.length === 2);
    // beim Trimino ohne „= ___“ am Ende, damit der Text auf die Kante passt
    const use = ps.slice(0, inner.length).map(p => ({ q: p.q.replace(/\s*=\s*<span class="cgap"><\/span>\s*$/, ''), a: p.a }));
    const labels = tris.map(() => ['', '', '']);
    inner.forEach((e, k) => { const p = use[k], flip = o.rng.int(2); labels[e[0][0]][e[0][1]] = flip ? p.a : p.q; labels[e[1][0]][e[1][1]] = flip ? p.q : p.a; });
    const fs = N === 4 ? 3.3 : 3.8;
    const sideText = (P, Q, C, html) => {
      if (!html) return '';
      const m = [(P[0] + Q[0]) / 2, (P[1] + Q[1]) / 2], nv = [m[0] - C[0], m[1] - C[1]], nl = Math.hypot(nv[0], nv[1]), n = [nv[0] / nl, nv[1] / nl];
      // Textfeld 0,6–8,6 mm tief und mittig 50 % der Kante breit: Felder benachbarter Kanten überlappen nie
      const d = 4.6, c = [m[0] - n[0] * d, m[1] - n[1] * d], th = Math.atan2(-n[0], n[1]) * 180 / Math.PI, w = s * 0.5, hh = 8;
      return '<g transform="translate(' + c[0].toFixed(2) + ' ' + c[1].toFixed(2) + ') rotate(' + th.toFixed(2) + ')"><foreignObject x="' + (-w / 2) + '" y="' + (-hh / 2) + '" width="' + w + '" height="' + hh + '"><div xmlns="http://www.w3.org/1999/xhtml" class="tri-t" style="width:' + (w * 10) + 'px;height:' + (hh * 10) + 'px;font-size:' + (fs * 10) + 'px"><div>' + html + '</div></div></foreignObject></g>';
    };
    const draw = (assign) => {
      let g = '';
      assign.forEach(({ slot, piece, shift }) => {
        const v = tris[slot].v, C = [(v[0][0] + v[1][0] + v[2][0]) / 3, (v[0][1] + v[1][1] + v[2][1]) / 3];
        g += '<polygon points="' + v.map(p => (p[0] + 2).toFixed(2) + ',' + (p[1] + 2).toFixed(2) + '').join(' ') + '" fill="' + (o.solution ? '#fff' : '#fff') + '" stroke="#555" stroke-width="0.3" stroke-dasharray="' + (o.solution ? '0' : '1.4 0.9') + '"/>';
        for (let i = 0; i < 3; i++) { const lbl = labels[piece][(i + 3 - shift) % 3]; const P = v[i], Q = v[(i + 1) % 3]; g += sideText([P[0] + 2, P[1] + 2], [Q[0] + 2, Q[1] + 2], [C[0] + 2, C[1] + 2], lbl); }
      });
      return '<svg class="trisvg" width="' + (W + 4) + 'mm" height="' + (H + 4) + 'mm" viewBox="0 0 ' + (W + 4) + ' ' + (H + 4) + '">' + g + '</svg>';
    };
    if (o.solution) {
      return page(Object.assign({}, o, { heading: 'Trimino: ' + o.title, instr: 'So liegen die Teile richtig: An jeder inneren Kante treffen Aufgabe und Lösung zusammen.' }),
        '<div class="tri-wrap">' + draw(tris.map((t, i) => ({ slot: i, piece: i, shift: 0 }))) + '</div>');
    }
    const order = o.rng.shuffle(tris.map((t, i) => i));
    return page(Object.assign({}, o, { heading: 'Trimino: ' + o.title, instr: 'Schneide die ' + tris.length + ' Dreiecke aus. Lege sie so zusammen, dass an jeder Kante eine Aufgabe und ihre Lösung aneinanderstoßen. Es entsteht ein großes Dreieck; Kanten ohne Text liegen außen.' }),
      '<div class="tri-wrap">' + draw(tris.map((t, i) => ({ slot: i, piece: order[i], shift: o.rng.int(3) }))) + '</div>');
  }

  function build(t, info) {
    const F = FORMATS[info.format];
    const ps = setFor(t, info.level, info.seed, info.format);
    const hints = Array.from(new Set(ps.map(p => p.instr).filter(Boolean))).join(' ');
    const o = Object.assign({}, info, { title: t.title, img: t.img, hints: hints.length > 260 ? '' : hints, rng: UB.makeRng(info.seed + '|' + info.format + '|lay') });
    if (ps.length < F.min) return page(Object.assign({}, o, { heading: F.label + ': ' + t.title, instr: 'Für dieses Thema und diese Stufe gibt es zu wenige passende Aufgaben für ein ' + F.label + '.' }), '');
    if (info.format === 'domino') return domino(ps, o);
    if (info.format === 'memory') return memory(ps, o);
    return trimino(ps, o);
  }

  // Schrift dort verkleinern, wo Text nicht in Karte bzw. Kante passt (Element muss sichtbar gelayoutet sein)
  function fit(root) {
    root.querySelectorAll('.tri-t > div, .dom-q > div, .dom-a > div, .mem > div').forEach(el => {
      const par = el.parentElement, cs = getComputedStyle(par);
      const H = par.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom), W = par.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      let f = parseFloat(getComputedStyle(el).fontSize), k = 0;
      while ((el.scrollHeight > H + 0.5 || el.scrollWidth > W + 0.5) && k++ < 14) { f *= 0.9; el.style.fontSize = f + 'px'; }
    });
  }

  UB.cards = { guessable, setFor, FORMATS, available, build, pairsFor, fit };
})();
