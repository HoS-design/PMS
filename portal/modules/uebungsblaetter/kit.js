/* =====================================================================
   Übungsblatt-Baukasten
   Themen werden mit UB.simple({...}) beschrieben: Satzpools + Aufgaben je
   Stufe. Die Aufgabentypen bauen Blatt, Lösung und Lehrer-Ansicht selbst.

   Schreibweisen in allen Texten:
     **Wort**        unterstrichen und fett (markiertes Satzglied usw.)
     [Lösung]        Lücke, Lösung erscheint auf dem Lösungsblatt
     [Lösung:Hilfe]  Lücke mit Hilfe in Klammern dahinter, z. B. [ging:gehen]
     {richtig|falsch|falsch}  zum Einkreisen (die erste Möglichkeit ist richtig,
                              angezeigt wird alphabetisch)

   Pool-Zeilen (eine Zeile = ein Baustein, # = Kommentar):
     choice / sort:  Text|KEY
     pair:           Aufgabe :: Hilfe => Lösung      (Hilfe ist optional)
     ab:             Satz A || Satz B || a oder b || Begründung
     order:          Teil 1 >> Teil 2 >> Teil 3       (richtige Reihenfolge)
     write:          Schreibauftrag => Hinweis 1 ; Hinweis 2
     gap:            Satz mit [Lücken] oder {Auswahl|...}
   ===================================================================== */
(function () {
  'use strict';
  const { esc, lines, sol, blank, table, box } = UB;

  // ---------------------------------------------------------------- Markup
  function mark(s, solution, bw) {
    let h = esc(s);
    h = h.replace(/\*\*(.+?)\*\*/g, '<b class="mk">$1</b>');
    h = h.replace(/\{([^{}]+)\}/g, (m, inner) => {
      const parts = inner.split('|');
      const right = parts[0];
      const shown = parts.slice().sort((a, b) => a.localeCompare(b, 'de'));
      return '<span class="ch">' + shown.map(p => {
        if (!solution) return p;
        return p === right ? '<span class="sol">' + p + '</span>' : '<span class="ch-off">' + p + '</span>';
      }).join(' / ') + '</span>';
    });
    h = h.replace(/\[([^\[\]]+)\]/g, (m, inner) => {
      const i = inner === ':' ? -1 : inner.indexOf(':');  // „[:]“ = Lücke für einen Doppelpunkt
      const ans = i < 0 ? inner : inner.slice(0, i);
      const hint = i < 0 ? '' : inner.slice(i + 1);
      const w = bw || Math.max(3, Math.round(ans.length * 0.62) + 2);
      return (solution ? sol(ans) : blank(w)) + (hint ? ' <span class="hint">(' + hint + ')</span>' : '');
    });
    return h;
  }
  const answersOf = (s) => (s.match(/\[([^\[\]]+)\]/g) || []).map(x => x === '[:]' ? ':' : x.slice(1, -1).split(':')[0]);

  // ---------------------------------------------------------------- Pools
  function parseLines(src) {
    if (Array.isArray(src)) return src;
    return src.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
  }
  const PARSE = {
    choice: (l) => { const i = l.lastIndexOf('|'); return { raw: l, q: l.slice(0, i).trim(), k: l.slice(i + 1).trim() }; },
    pair: (l) => {
      const [left, a] = l.split(' => ');
      const [q, hint] = left.split(' :: ');
      return { raw: l, q: q.trim(), hint: hint ? hint.trim() : '', a: (a || '').trim() };
    },
    ab: (l) => { const p = l.split(' || ').map(x => x.trim()); return { raw: l, a: p[0], b: p[1], k: p[2], why: p[3] || '' }; },
    order: (l) => ({ raw: l, parts: l.split(' >> ').map(x => x.trim()) }),
    write: (l) => { const [q, a] = l.split(' => '); return { raw: l, q: q.trim(), a: a ? a.split(' ; ').map(x => x.trim()) : [] }; },
    gap: (l) => ({ raw: l, q: l })
  };
  PARSE.sort = PARSE.choice;
  PARSE.error = PARSE.pair;

  function itemsFor(def, spec) {
    const kind = spec.type;
    const src = def.pools[spec.pool];
    if (!src) throw new Error('Pool fehlt: ' + spec.pool);
    let its = parseLines(src).map(PARSE[kind] || PARSE.gap);
    if (spec.keys) its = its.filter(x => spec.keys.includes(x.k));
    if (spec.filter) its = its.filter(spec.filter);
    return its;
  }
  const keyOf = (x) => (x.q || x.raw).replace(/\*\*/g, '');
  function pick(def, spec, rng) {
    const its = itemsFor(def, spec);
    const n = spec.n || 6;
    if (spec.cover && spec.keys) {
      // Jede Kategorie mindestens einmal – aber über die 6 Blätter verteilt (fresh mit gleichbleibender Liste),
      // nicht pro Blatt zufällig, sonst landen seltene Kategorien immer auf denselben Sätzen.
      const first = [];
      spec.keys.forEach(k => {
        if (first.length >= n) return;
        const c = its.filter(x => x.k === k);
        if (!c.some(x => !rng.used.has(keyOf(x)))) return;
        const x = rng.fresh(c, 1, keyOf)[0];
        if (x && !first.includes(x)) first.push(x);
      });
      const rest = rng.fresh(its, n - first.length, keyOf).filter(x => !first.includes(x));
      return rng.shuffle(first.concat(rest));
    }
    return rng.fresh(its, n, keyOf);
  }
  const optLabel = (spec, k) => { const o = (spec.opts || []).find(o => o[0] === k); return o ? o[1] : k; };

  // ---------------------------------------------------------------- Aufgabentypen
  const T = {};

  T.choice = (def, spec, rng) => {
    const its = pick(def, spec, rng);
    const en = def.lang === 'en', head = spec.head || (en ? 'Sentence' : 'Satz');
    if (spec.asText) {
      const col = spec.col || (en ? 'Answer' : 'Lösung');
      return {
        body: table([head, col], its.map(x => [mark(x.q), blank(spec.w || 9)])),
        sol: table([head, col], its.map(x => [mark(x.q), sol(esc(optLabel(spec, x.k)))]))
      };
    }
    const opts = spec.opts;
    const h = [head].concat(opts.map(o => esc(o[1])));
    return {
      body: table(h, its.map(x => [mark(x.q)].concat(opts.map(() => box))), 'center-cols'),
      sol: table(h, its.map(x => [mark(x.q)].concat(opts.map(o => o[0] === x.k ? sol('✗') : ''))), 'center-cols')
    };
  };

  T.gap = (def, spec, rng) => {
    const its = pick(def, spec, rng);
    const cls = 'gapwrap' + (spec.cols2 ? ' cols2' : '');
    let wb = '';
    if (spec.wordbox) {
      const words = [];
      its.forEach(x => answersOf(x.q).forEach(a => words.push(a)));
      wb = '<div class="wordbox">' + rng.shuffle(words).map(esc).join(' · ') + '</div>';
    }
    return {
      body: wb + '<div class="' + cls + '">' + its.map(x => '<div class="item">' + mark(x.q, false, spec.bw) + '</div>').join('') + '</div>',
      sol: wb + '<div class="' + cls + '">' + its.map(x => '<div class="item">' + mark(x.q, true) + '</div>').join('') + '</div>'
    };
  };

  function diffCount(a, b) {
    const x = a.split(/\s+/), y = b.split(/\s+/);
    if (x.length !== y.length) return 0;
    return x.filter((w, i) => w !== y[i]).length;
  }
  T.pair = (def, spec, rng) => {
    const its = pick(def, spec, rng);
    const hintOf = (x) => {
      let h = x.hint;
      if (spec.type === 'error' && spec.count !== false && def.lang !== 'en') { const n = diffCount(x.q, x.a); if (n) h = (h ? h + ', ' : '') + n + (def.lang === 'en' ? (n === 1 ? ' mistake' : ' mistakes') : ' Fehler'); }
      return h ? ' <span class="hint">→ ' + esc(h) + '</span>' : '';
    };
    if (spec.inline) {
      const head = [spec.head || (def.lang === 'en' ? 'Task' : 'Aufgabe'), spec.col || (def.lang === 'en' ? 'Answer' : 'Lösung')];
      return {
        body: table(head, its.map(x => [mark(x.q) + hintOf(x), ''])),
        sol: table(head, its.map(x => [mark(x.q) + hintOf(x), sol(esc(x.a))]))
      };
    }
    const nl = spec.lines || 1;
    return {
      body: its.map(x => '<div class="item">' + mark(x.q) + hintOf(x) + '</div>' + lines(nl)).join(''),
      sol: its.map(x => '<div class="item">' + mark(x.q) + hintOf(x) + '<br>' + sol(esc(x.a)) + '</div>').join('')
    };
  };
  T.error = T.pair;

  T.sort = (def, spec, rng) => {
    const its = pick(def, spec, rng);
    const cats = spec.opts;
    const by = cats.map(c => its.filter(x => x.k === c[0]));
    const rows = Math.max(1, ...by.map(a => a.length));
    const head = cats.map(c => esc(c[1]));
    const emptyRows = Array.from({ length: rows }, () => cats.map(() => ''));
    const solRows = Array.from({ length: rows }, (_, r) => by.map(a => a[r] ? sol(esc(a[r].q)) : ''));
    const wb = '<div class="wordbox">' + rng.shuffle(its).map(x => esc(x.q)).join(' · ') + '</div>';
    return { body: wb + table(head, emptyRows, 'even'), sol: wb + table(head, solRows, 'even') };
  };

  T.ab = (def, spec, rng) => {
    // a und b zufällig vertauschen, damit die richtige Lösung nicht immer an derselben Stelle steht
    const its = pick(def, spec, rng).map(x => rng.next() < 0.5 ? Object.assign({}, x, { a: x.b, b: x.a, k: x.k === 'a' ? 'b' : 'a' }) : x);
    const one = (x, solution) => '<div class="ab">' +
      ['a', 'b'].map(k => '<div class="ab-opt">' + (solution ? (x.k === k ? sol('✗') : '<span class="cbox"></span>') : box) +
        ' <b>' + k.toUpperCase() + '</b> ' + mark(x[k]) + '</div>').join('') +
      (solution && x.why ? '<div class="hint">' + esc(x.why) + '</div>' : '') + '</div>';
    return { body: its.map(x => one(x, false)).join(''), sol: its.map(x => one(x, true)).join('') };
  };

  T.order = (def, spec, rng) => {
    const its = pick(def, spec, rng);
    const blocks = its.map(x => {
      let idx = x.parts.map((p, i) => i);
      for (let t = 0; t < 5; t++) { idx = rng.shuffle(idx); if (idx.some((v, i) => v !== i)) break; }
      return idx.map(i => ({ p: x.parts[i], n: i + 1 }));
    });
    const render = (solution) => blocks.map(b => '<div class="orderbox">' + b.map(o =>
      '<div class="item ord">' + (solution ? '<span class="numbox sol-num">' + sol(o.n) + '</span>' : '<span class="numbox"></span>') + ' ' + mark(o.p) + '</div>').join('') + '</div>').join('');
    return { body: render(false), sol: render(true) };
  };

  T.write = (def, spec, rng) => {
    const x = pick(def, Object.assign({}, spec, { n: 1 }), rng)[0];
    const check = spec.check ? '<div class="checklist"><b>' + (def.lang === 'en' ? 'Checklist:' : 'Checkliste:') + '</b> ' + spec.check.map(c => '☐ ' + esc(c)).join('&nbsp;&nbsp; ') + '</div>' : '';
    const plan = spec.plan ? table(def.lang === 'en' ? ['Part', 'Notes'] : ['Teil', 'Stichwörter'], spec.plan.map(r => ['<b>' + esc(r[0]) + '</b><br><span class="hint">' + esc(r[1]) + '</span>', '']), 'plan') : '';
    const note = spec.note ? '<div class="item"><b>' + esc(spec.note) + '</b></div>' : '';
    return {
      body: '<div class="prompt">' + mark(x.q) + '</div>' + check + plan + note + (spec.lines === 0 ? '' : lines(spec.lines || 10)),
      sol: '<div class="prompt">' + mark(x.q) + '</div>' +
        '<div class="item"><b>Darauf kommt es an:</b></div><ul class="solist">' +
        Array.from(new Set(x.a.concat(spec.check || []))).map(c => '<li>' + sol(esc(c)) + '</li>').join('') + '</ul>'
    };
  };

  // Beistriche setzen: Pool-Sätze stehen MIT Beistrichen, auf dem Blatt fehlen sie
  T.commas = (def, spec, rng) => {
    const its = pick(def, spec, rng);
    const strip = (q) => mark(q.replace(/,/g, ''));
    const solv = (q) => mark(q).replace(/,/g, '<span class="sol comma">,</span>');
    return {
      body: its.map(x => '<div class="item roomy">' + strip(x.q) + '</div>').join(''),
      sol: its.map(x => '<div class="item roomy">' + solv(x.q) + '</div>').join('')
    };
  };
  T.fn = (def, spec, rng, level) => spec.fn(rng, level);
  T.merk = (def, spec) => ({ body: '<div class="merk">' + spec.html + '</div>', sol: '<div class="merk">' + spec.html + '</div>' });
  T.text = (def, spec) => ({ body: spec.html, sol: spec.solHtml || spec.html });

  // ---------------------------------------------------------------- Lehrer-Ansicht
  function poolView(def) {
    const specs = [];
    Object.values(def.levels).forEach(l => (l.tasks || []).forEach(s => (s.oneOf || [s]).forEach(x => { if (x && x.pool) specs.push(x); })));
    let html = '';
    Object.keys(def.pools).forEach(name => {
      const users = specs.filter(s => s.pool === name);
      if (!users.length) return;
      const kind = users[0].type;
      const its = parseLines(def.pools[name]).map(PARSE[kind] || PARSE.gap);
      html += '<h4 class="pool-h">' + esc(name) + ' (' + its.length + ')</h4>';
      if (kind === 'choice' || kind === 'sort') {
        const label = (k) => Array.from(new Set(users.map(s => optLabel(s, k)))).join(' / ');
        html += table(['Baustein', 'Lösung'], its.map(x => [mark(x.q), esc(label(x.k))]));
      } else if (kind === 'pair' || kind === 'error') {
        html += table(['Aufgabe', 'Lösung'], its.map(x => [mark(x.q) + (x.hint ? ' <span class="hint">→ ' + esc(x.hint) + '</span>' : ''), esc(x.a)]));
      } else if (kind === 'ab') {
        html += table(['A', 'B', 'Besser', 'Warum'], its.map(x => [mark(x.a), mark(x.b), x.k.toUpperCase(), esc(x.why)]));
      } else if (kind === 'order') {
        html += its.map(x => '<ol class="pool-ol">' + x.parts.map(p => '<li>' + mark(p) + '</li>').join('') + '</ol>').join('');
      } else if (kind === 'write') {
        html += table(['Schreibauftrag', 'Hinweise'], its.map(x => [mark(x.q), esc(x.a.join(' · '))]));
      } else if (kind === 'commas') {
        html += its.map(x => '<div class="item">' + mark(x.q).replace(/,/g, '<span class="sol comma">,</span>') + '</div>').join('');
      } else {
        html += its.map(x => '<div class="item">' + mark(x.q, true) + '</div>').join('');
      }
    });
    return html;
  }

  // ---------------------------------------------------------------- Frage-Antwort-Paare (Domino, Memory, Trimino)
  // Frage-Markup: Lücke als Strich, Auswahl als (a / b), **x** fett
  function markQ(s) {
    let h = esc(s).replace(/\*\*(.+?)\*\*/g, '<b class="mk">$1</b>');
    h = h.replace(/\{([^{}]+)\}/g, (m, inner) => '(' + inner.split('|').slice().sort((a, b) => a.localeCompare(b, 'de')).join(' / ') + ')');
    h = h.replace(/\[([^\[\]]+)\]/g, (m, inner) => { const i = inner === ':' ? -1 : inner.indexOf(':'); return '<span class="cgap"></span>' + (i < 0 ? '' : ' <span class="hint">(' + inner.slice(i + 1) + ')</span>'); });
    return h;
  }
  // Karten-Antwort aus einer Mathe-Lösung: nur das Ergebnis, nicht die ganze Rechnung mit den Zahlen der Angabe
  // („16 950 : 7 = 2421 Rest 3“ → „2421 Rest 3“; „3 · 125 = 375 – Er fährt 375 km.“ → „Er fährt 375 km.“)
  function cardResult(a, q) {
    const numsOf = h => (plainOf(h).replace(/(\d) (?=\d{3}\b)/g, '$1').match(/\d+(?:,\d+)?/g) || []);
    const qn = new Set(numsOf(q));
    // Antwortsatz nach dem Gedankenstrich
    const d = a.lastIndexOf(' – ');
    if (d > 0 && !/<[^>]*$/.test(a.slice(0, d))) { const tail = a.slice(d + 3).trim(); if (tail) return tail; }
    // letztes „=“ außerhalb von HTML-Tags
    let depth = 0, last = -1;
    for (let i = 0; i < a.length; i++) { const ch = a[i]; if (ch === '<') depth++; else if (ch === '>') depth--; else if (ch === '=' && depth === 0) last = i; }
    if (last > 0) { const pre = a.slice(0, last); if (numsOf(pre).some(n => qn.has(n))) return a.slice(last + 1).trim(); }
    return a;
  }
  function specPairs(def, spec, rng, level) {
    const out = [];
    if (spec.type === 'fn') {
      if (!spec.gen || spec.pmode === 'grid') return out;
      for (let i = 0; i < (spec.n || 6); i++) {
        let it; try { it = spec.gen(rng, level, i); } catch (e) { continue; }
        if (!it || it.a == null) continue;
        const a = Array.isArray(it.a) ? (it.a.length === 1 ? it.a[0] : null) : it.a;
        if (a == null) continue;
        const n = (it.q.match(/\{\?\}/g) || []).length;
        if (n > 1) continue;
        const q = n === 1 ? it.q.replace('{?}', '<span class="cgap"></span>') : (spec.pmode === 'inline' ? it.q + (/=/.test(plainOf(it.q)) ? ' → <span class="cgap"></span>' : ' = <span class="cgap"></span>') : it.q);
        out.push({ q, a: cardResult(String(a), it.q), instr: spec.pinstr || '' });
      }
      return out;
    }
    if (!spec.pool || !def.pools[spec.pool]) return out;
    let its; try { its = itemsFor(def, spec); } catch (e) { return out; }
    its = rng.shuffle(its.slice());
    const ins = spec.instr || '';
    if (spec.type === 'gap') its.forEach(x => {
      const g = (x.q.match(/\[[^\[\]]+\]/g) || []).length, c = (x.q.match(/\{[^{}]+\}/g) || []).length;
      if (g + c !== 1) return;
      if (g) out.push({ q: markQ(x.q), a: esc(answersOf(x.q)[0]), instr: ins });
      else {
        // Auswahl {richtig|falsch}: Auf Karten nur, wenn auch die Gegenkarte im Set liegt (grp = gleiche Auswahl) –
        // sonst sucht man einfach das Wort, das in der Klammer steht. Nur Groß/Klein verschieden → Wort in GROSSBUCHSTABEN.
        const opts = x.q.match(/\{([^{}]+)\}/)[1].split('|'), right = opts[0], lo = v => v.toLowerCase();
        const caps = opts.length > 1 && opts.every(o => lo(o) === lo(right));
        if (caps && !/[A-Za-zÄÖÜäöüß0-9]/.test(x.q.slice(0, x.q.indexOf('{')).replace(/\*\*/g, ''))) return; // Satzanfang ist immer groß
        const q = caps ? markQ(x.q.replace(/\{[^{}]+\}/, '\u0001')).replace('\u0001', '<b class="ccaps">' + esc(right.toUpperCase()) + '</b>') : markQ(x.q);
        out.push({ q, a: esc(right), caps, opt: true, grp: (caps ? 'c:' : 's:') + opts.map(lo).sort().join('|'),
          instr: caps ? 'Wird das Wort in GROSSBUCHSTABEN groß oder klein geschrieben? Suche die passende Schreibung.' : 'Welche Möglichkeit ist richtig? Achtung: Auch die anderen Möglichkeiten gibt es als Karte.' });
      }
    });
    if (spec.type === 'pair' || spec.type === 'error') its.forEach(x => { if (x.a && !/\[|\{/.test(x.q)) out.push({ q: markQ(x.q) + (x.hint ? ' <span class="hint">→ ' + esc(x.hint) + '</span>' : ''), a: esc(x.a), instr: ins, grp: spec.cardGrp ? spec.cardGrp(x) : undefined }); });
    if ((spec.type === 'choice' || spec.type === 'sort') && spec.opts) its.forEach(x => { if (!/\[/.test(x.q)) out.push({ q: markQ(x.q), a: esc(optLabel(spec, x.k)), instr: ins }); });
    return out;
  }
  const plainOf = (h) => String(h).replace(/<svg[\s\S]*?<\/svg>/g, '▣').replace(/<[^>]+>/g, '').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
  // Paare einer Stufe sammeln: eindeutige Antworten und Fragen, mehrere Durchläufe
  function collectPairs(def, level, rng, want) {
    const specs = [];
    (def.levels[level].tasks || []).concat(def.levels[level].cards || []).forEach(s => (s.oneOf || [s]).forEach(x => specs.push(x)));
    const seenA = new Set(), seenQ = new Set(), res = [];
    for (let round = 0; round < 12 && res.length < want; round++) {
      specs.forEach(sp => specPairs(def, sp, rng, level).forEach(p => {
        const ka = p.caps ? plainOf(p.a) : plainOf(p.a).toLowerCase(), kq = plainOf(p.q).toLowerCase();
        if (!ka || !kq || seenA.has(ka) || seenQ.has(kq)) return;
        seenA.add(ka); seenQ.add(kq); res.push(p);
      }));
    }
    return rng.shuffle(res);
  }
  UB.plainOf = plainOf;

  // ---------------------------------------------------------------- Registrieren
  UB.mark = mark;
  UB.simple = function (def) {
    def.build = function (level, rng) {
      return (def.levels[level].tasks || []).map(spec0 => {
        // Varianten (oneOf) über die 6 Blätter verteilen: jede Variante bekommt eine Gruppe benachbarter Blätter,
        // innerhalb der Gruppe teilen sich die Blätter den Pool der Variante (rng.dealSub).
        let spec = spec0;
        if (spec0.oneOf) {
          const m = spec0.oneOf.length;
          if (rng.deal) {
            const perm = UB.makeRng(rng.deal.deck + '|oneOf|' + spec0.oneOf.map(s => s.pool || s.title || '').join('/')).shuffle(spec0.oneOf.map((s, i) => i));
            const sl = rng.deal.slot % 6, g = Math.floor(sl * m / 6), first = Math.ceil(g * 6 / m), last = Math.ceil((g + 1) * 6 / m);
            spec = spec0.oneOf[perm[g]];
            rng.dealSub = { slot: sl - first, count: last - first };
          } else spec = rng.pick(spec0.oneOf);
        }
        const t = T[spec.type](def, spec, rng, level);
        rng.dealSub = null;
        return { title: t.title || spec.title, instr: t.instr || spec.instr || '', body: t.body, sol: t.sol };
      });
    };
    def.pairs = (level, rng, want) => collectPairs(def, level, rng, want || 40);
    def.pool = def.pool || (def.fach === 'mathe' ? (() => '<p>Die Aufgaben dieses Themas werden für jedes Blatt neu erzeugt, die Lösungen berechnet das Programm. Blatt 1–6 sind fest, „Neue Variante“ liefert beliebig viele weitere Blätter.</p>') : (() => poolView(def)));
    UB.register(def);
  };
})();
