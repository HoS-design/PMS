/* =====================================================================
   Übungsblatt-Werkstatt – Kern
   Themen registrieren sich mit UB.register({...}) (siehe topics/*.js).

   Ein Thema liefert:
     id, title, area, klassen: [1,2], img: 'MiniHoS_…', review: true|false,
     levels: { 1: { ichkann: [...] }, 2: {...}, 3: {...} },
     build(level, rng) -> [ { title, instr, body, sol } ]   (HTML-Strings)
     pool() -> HTML für die Lehrer-Ansicht (alle Sätze mit Lösungen)
   Alle Sätze stehen fertig in den Themen-Dateien; der Zufall wählt nur aus
   und mischt. Blatt 1–6 nutzen einen festen Startwert (immer gleich),
   „Neue Variante“ einen neuen.
   ===================================================================== */
(function () {
  'use strict';

  const topics = [];

  // --- Zufall mit Startwert -------------------------------------------
  function hashString(s) {
    let h = 1779033703 ^ s.length;
    for (let i = 0; i < s.length; i++) {
      h = Math.imul(h ^ s.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    return (h >>> 0);
  }
  function makeRng(seedText) {
    let a = hashString(seedText);
    const next = function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const rng = {
      next,
      int: (n) => Math.floor(next() * n),
      pick: (arr) => arr[Math.floor(next() * arr.length)],
      shuffle: (arr) => {
        const a2 = arr.slice();
        for (let i = a2.length - 1; i > 0; i--) { const j = Math.floor(next() * (i + 1)); [a2[i], a2[j]] = [a2[j], a2[i]]; }
        return a2;
      }
    };
    rng.sample = (arr, n) => rng.shuffle(arr).slice(0, Math.min(n, arr.length));
    // Jeder Baustein nur einmal pro Blatt: fresh() wählt nur noch Unbenutztes aus.
    // Blatt 1–6 eines Themas teilen sich einen gemeinsam gemischten Stapel: jedes Blatt bekommt einen eigenen Abschnitt,
    // damit sich die sechs Blätter so wenig wie möglich überschneiden. (Seed „thema|stufe|b3“ bzw. „…|v123456“.)
    rng.used = new Set();
    const sm = /^(.*)\|(b|v)(\d+)$/.exec(seedText);
    const deal = sm ? (sm[2] === 'b' ? { deck: sm[1] + '|b', slot: +sm[3] - 1 } : { deck: sm[1] + '|v' + Math.floor(+sm[3] / 6), slot: +sm[3] % 6 }) : null;
    const taken = {};
    rng.fresh = (arr, n, key) => {
      const k = key || ((x) => typeof x === 'string' ? x : JSON.stringify(x));
      if (deal && arr.length > n) {
        // Stapel: eindeutige Schlüssel, für alle sechs Blätter gleich gemischt
        const keys = []; const byKey = {};
        arr.forEach(x => { const kk = k(x); if (!byKey[kk]) { byKey[kk] = []; keys.push(kk); } byKey[kk].push(x); });
        const lk = hashString(keys.join('\u0001'));
        const deck = makeRng(deal.deck + '|' + lk + '|deck').shuffle(keys);
        const N = deck.length, seg = Math.ceil(N / 6);
        const start = (deal.slot * seg + (taken[lk] || 0)) % N;
        const out = []; let i = 0;
        while (out.length < n && i < N) {
          const kk = deck[(start + i) % N]; i++;
          if (rng.used.has(kk)) continue;
          out.push(rng.pick(byKey[kk]));
        }
        taken[lk] = (taken[lk] || 0) + i;
        if (out.length < n) rng.shuffle(arr).forEach(x => { if (out.length < n && !out.includes(x)) out.push(x); });
        out.forEach(x => rng.used.add(k(x)));
        return rng.shuffle(out);
      }
      const free = arr.filter(x => !rng.used.has(k(x)));
      const out = [];
      // gleiche Schlüssel (z. B. derselbe Satz mit anderer Markierung) nur einmal nehmen
      rng.shuffle(free).forEach(x => { if (out.length < n && !out.some(y => k(y) === k(x))) out.push(x); });
      if (out.length < n) rng.shuffle(arr).forEach(x => { if (out.length < n && !out.includes(x)) out.push(x); });
      out.forEach(x => rng.used.add(k(x)));
      return out;
    };
    return rng;
  }

  // --- Bausteine für Blätter -------------------------------------------
  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const lines = (n, cls) => '<div class="wlines' + (cls ? ' ' + cls : '') + '">' + '<div class="wline"></div>'.repeat(n) + '</div>';
  const sol = (s) => '<span class="sol">' + s + '</span>';
  const blank = (w) => '<span class="blank" style="min-width:' + (w || 7) + 'em"></span>';
  const box = '<span class="cbox"></span>';
  const NAMES = ['Lena', 'Max', 'Mia', 'Noah', 'Emma', 'Ben', 'Lea', 'Paul', 'Sophie', 'Jonas', 'Anna', 'Luca', 'Elias', 'Hanna', 'Amir', 'Lara'];

  // Tabelle: head = [..], rows = [[..],..]; Zellen sind HTML
  function table(head, rows, cls) {
    return '<table class="ubt' + (cls ? ' ' + cls : '') + '"><thead><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' +
      rows.map(r => '<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table>';
  }

  window.UB = {
    register: (t) => topics.push(t),
    topics,
    makeRng, esc, lines, sol, blank, box, table, NAMES,
    AREAS: {
      sprache: 'Sprachbetrachtung',
      rechtschreibung: 'Rechtschreibung',
      schreiben: 'Texte und Schreiben',
      lesen: 'Lesen',
      zahlen: 'Zahlen und Rechnen',
      variablen: 'Terme, Gleichungen, Funktionen',
      geometrie: 'Figuren und Körper',
      daten: 'Daten und Zufall',
      'e-grammar': 'Grammar',
      'e-words': 'Words and phrases',
      'e-writing': 'Writing'
    },
    FACH: { deutsch: 'Deutsch', mathe: 'Mathematik', englisch: 'Englisch' },
    LEVEL_NAMES: { 1: 'Stufe 1 · leicht', 2: 'Stufe 2 · mittel', 3: 'Stufe 3 · schwer', 4: 'Stufe 4 · Profi' }
  };
})();
