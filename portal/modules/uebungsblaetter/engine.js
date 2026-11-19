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
    // Jeder Baustein nur einmal pro Blatt: fresh() wählt nur noch Unbenutztes aus
    rng.used = new Set();
    rng.fresh = (arr, n, key) => {
      const k = key || ((x) => typeof x === 'string' ? x : JSON.stringify(x));
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
      lesen: 'Lesen'
    },
    LEVEL_NAMES: { 1: 'Stufe 1 · leicht', 2: 'Stufe 2 · mittel', 3: 'Stufe 3 · schwer' }
  };
})();
