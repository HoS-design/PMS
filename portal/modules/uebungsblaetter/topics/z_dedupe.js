/* Zum Schluss: doppelte Zeilen in allen Aufgabensammlungen entfernen (entstehen, wenn Erweiterungen dieselbe Zeile ergänzen) */
(function () {
  UB.topics.forEach(t => {
    if (!t.pools) return;
    Object.keys(t.pools).forEach(k => {
      if (typeof t.pools[k] !== 'string') return;
      const seen = new Set();
      t.pools[k] = t.pools[k].split('\n').filter(l => { const x = l.trim(); if (!x) return false; if (seen.has(x)) return false; seen.add(x); return true; }).join('\n');
    });
  });
})();
