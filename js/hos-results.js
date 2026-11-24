/* HoS-Ergebnisse: gemeinsames Modul zum lokalen Speichern von Fortschritt und Ergebnissen.
   Gespeichert wird nur im Browser des Geräts (localStorage), damit SuS zeigen können, was sie gemacht haben.

   Einbinden:   <script src="/js/hos-results.js"></script>
   Benutzen:    HoSResults.init({ app: 'zeitformenquiz', title: 'Zeitformen-Quiz' });
                HoSResults.answer(true, 'Perfekt');          // eine beantwortete Aufgabe (richtig/falsch, Bereich)
                HoSResults.round({ score: 8, total: 10, label: 'Test', wrong: ['…'] });  // Runde/Test beendet
                HoSResults.done('Level 3');                  // etwas abgeschlossen (Level, Station, Kapitel)
                HoSResults.save('stand', {...}); HoSResults.load('stand')   // Zwischenstand
*/
(function () {
  'use strict';
  var PREFIX = 'hos-results:';
  var cfg = null, data = null;

  function blank() { return { name: '', answers: { right: 0, wrong: 0 }, areas: {}, rounds: [], done: {}, state: {}, first: 0, last: 0 }; }
  function read(app) {
    try {
      var d = JSON.parse(localStorage.getItem(PREFIX + app) || 'null');
      if (d && typeof d === 'object') { var b = blank(); for (var k in b) if (d[k] === undefined) d[k] = b[k]; return d; }
    } catch (e) { /* kein Speicher */ }
    return blank();
  }
  function write() {
    if (!cfg) return;
    try { localStorage.setItem(PREFIX + cfg.app, JSON.stringify(data)); } catch (e) { /* Speicher voll/gesperrt */ }
  }
  function touch() { var now = Date.now(); if (!data.first) data.first = now; data.last = now; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fmt(ms) {
    var d = new Date(ms);
    return d.toLocaleDateString('de-AT') + ', ' + d.toLocaleTimeString('de-AT', { hour: '2-digit', minute: '2-digit' });
  }
  function pct(r, t) { return t ? Math.round(r / t * 100) : 0; }
  function tone(p) { return p >= 80 ? 'ok' : p >= 50 ? 'mid' : 'no'; }

  var CSS = '' +
    '.hosr-btn{font:inherit;font-weight:800;font-size:.9rem;padding:7px 12px;border-radius:999px;border:1px solid #d6d3d1;background:#fff;color:#1f2937;cursor:pointer;white-space:nowrap}' +
    '.hosr-btn:hover{background:#f5f5f4}.hosr-btn.hosr-float{position:fixed;right:12px;bottom:12px;z-index:9998;box-shadow:0 4px 14px rgba(0,0,0,.15)}' +
    '.hosr-ov{position:fixed;inset:0;background:rgba(15,23,42,.4);display:flex;align-items:center;justify-content:center;z-index:9999;padding:14px;font-family:inherit}' +
    '.hosr-card{background:#fff;color:#1f2937;width:min(640px,100%);max-height:92vh;overflow:auto;border-radius:18px;padding:18px 20px;box-shadow:0 20px 60px rgba(0,0,0,.3);text-align:left}' +
    '.hosr-card h2,.hosr-card h3{color:#1f2937;border:0;padding:0;background:none;text-transform:none;letter-spacing:0;font-family:inherit}.hosr-card h2{margin:0 0 2px;font-size:1.25rem}.hosr-card h3{margin:14px 0 6px;font-size:1rem}' +
    '.hosr-mut{color:#6b7280;font-size:.85rem}.hosr-kpis{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}' +
    '.hosr-kpi{border:1px solid #e7e5e4;background:#fafaf9;border-radius:999px;padding:5px 11px;font-size:.9rem}' +
    '.hosr-name{display:flex;gap:8px;align-items:center;margin-top:8px;font-weight:700}.hosr-name input{flex:1;font:inherit;padding:6px 10px;border:2px solid #e7e5e4;border-radius:10px}' +
    '.hosr-t{width:100%;border-collapse:collapse;font-size:.92rem}.hosr-t td{padding:5px 6px;border-bottom:1px solid #f0efed;vertical-align:top}.hosr-t td.r{text-align:right;font-weight:800;white-space:nowrap}' +
    '.hosr-list{max-height:220px;overflow:auto;border:1px solid #e7e5e4;border-radius:10px;padding:2px 8px}' +
    '.hosr-list details{padding:5px 0;border-bottom:1px solid #f0efed}.hosr-list details:last-child{border:0}.hosr-list summary{cursor:pointer}.hosr-list ul{margin:4px 0 0;padding-left:20px;font-size:.88rem}' +
    '.hosr-ok{color:#15803d}.hosr-mid{color:#b45309}.hosr-no{color:#b91c1c}' +
    '.hosr-act{display:flex;gap:8px;margin-top:14px;align-items:center}.hosr-act span{flex:1}' +
    '.hosr-act button{font:inherit;font-weight:800;padding:8px 14px;border-radius:12px;border:1px solid #d6d3d1;background:#fff;cursor:pointer}' +
    '.hosr-act .hosr-close{background:#1f2937;color:#fff;border-color:#1f2937}.hosr-act .hosr-del{background:#fffbeb;border-color:#fcd34d;color:#92400e}' +
    '.hosr-done{display:flex;flex-wrap:wrap;gap:5px}.hosr-done span{background:#f0fdf4;border:1px solid #bbf7d0;color:#15803d;border-radius:999px;padding:3px 9px;font-size:.85rem;font-weight:700}' +
    '@media print{.hosr-btn{display:none}}';

  function addButton() {
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'hosr-btn'; b.id = 'hosr-open'; b.textContent = '📋 Meine Ergebnisse';
    b.addEventListener('click', show);
    var slot = cfg.mount && document.querySelector(cfg.mount) || document.querySelector('.header-actions');
    if (slot) slot.insertBefore(b, slot.firstChild);
    else { b.classList.add('hosr-float'); document.body.appendChild(b); }
  }

  function show() {
    close();
    var a = data.answers, total = a.right + a.wrong;
    var areas = Object.keys(data.areas);
    var rounds = data.rounds.slice().reverse();
    var doneKeys = Object.keys(data.done);
    var h = '<div class="hosr-card" role="dialog" aria-label="Meine Ergebnisse">' +
      '<h2>📋 Meine Ergebnisse</h2><div class="hosr-mut">' + esc(cfg.title || document.title) + '</div>' +
      '<label class="hosr-name">Name: <input id="hosr-name" maxlength="40" value="' + esc(data.name) + '" placeholder="Dein Name"></label>' +
      '<div class="hosr-kpis">' +
      (total ? '<span class="hosr-kpi">Aufgaben: <b>' + total + '</b></span><span class="hosr-kpi">Richtig: <b class="hosr-' + tone(pct(a.right, total)) + '">' + a.right + ' (' + pct(a.right, total) + ' %)</b></span>' : '') +
      (data.rounds.length ? '<span class="hosr-kpi">Runden/Tests: <b>' + data.rounds.length + '</b></span>' : '') +
      (data.first ? '<span class="hosr-kpi">Seit: <b>' + fmt(data.first) + '</b></span><span class="hosr-kpi">Zuletzt: <b>' + fmt(data.last) + '</b></span>' : '') +
      '</div>';
    if (!total && !data.rounds.length && !doneKeys.length) h += '<p class="hosr-mut">Noch nichts gespeichert. Leg los – deine Ergebnisse erscheinen hier.</p>';
    if (doneKeys.length) {
      h += '<h3>✓ Geschafft</h3><div class="hosr-done">' + doneKeys.map(function (k) { return '<span>' + esc(k) + '</span>'; }).join('') + '</div>';
    }
    if (areas.length > 1 || (areas.length === 1 && areas[0] !== '')) {
      h += '<h3>Nach Bereich</h3><table class="hosr-t">' + areas.filter(function (k) { return k; }).map(function (k) {
        var r = data.areas[k], t = r[0] + r[1], p = pct(r[0], t);
        return '<tr><td>' + esc(k) + '</td><td class="r hosr-' + tone(p) + '">' + r[0] + ' / ' + t + ' (' + p + ' %)</td></tr>';
      }).join('') + '</table>';
    }
    if (rounds.length) {
      h += '<h3>Runden und Tests</h3><div class="hosr-list">' + rounds.map(function (r) {
        var p = r.total ? pct(r.score, r.total) : null;
        var head = (r.total ? '<b class="hosr-' + tone(p) + '">' + r.score + ' / ' + r.total + '</b> (' + p + ' %)' : '<b>' + esc(r.score) + '</b>') +
          (r.label ? ' · ' + esc(r.label) : '') + ' · ' + fmt(r.d) + (r.name ? ' · ' + esc(r.name) : '');
        var wrong = r.wrong && r.wrong.length ? '<ul>' + r.wrong.map(function (w) { return '<li>' + esc(w) + '</li>'; }).join('') + '</ul>' : '';
        return wrong ? '<details><summary>' + head + '</summary>' + wrong + '</details>' : '<details><summary style="list-style:none">' + head + '</summary></details>';
      }).join('') + '</div>';
    }
    h += '<div class="hosr-act"><button type="button" class="hosr-del" id="hosr-del">Ergebnisse löschen</button><span></span>' +
      '<button type="button" class="hosr-close" id="hosr-close">Schließen</button></div>' +
      '<p class="hosr-mut" style="margin:10px 0 0">Gespeichert nur auf diesem Gerät in diesem Browser.</p></div>';
    var ov = document.createElement('div'); ov.className = 'hosr-ov'; ov.id = 'hosr-ov'; ov.innerHTML = h;
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    ov.addEventListener('keydown', function (e) { e.stopPropagation(); if (e.key === 'Escape') close(); });
    document.body.appendChild(ov);
    var inp = document.getElementById('hosr-name');
    inp.addEventListener('input', function () { data.name = inp.value.trim(); write(); });
    document.getElementById('hosr-close').addEventListener('click', close);
    var del = document.getElementById('hosr-del');
    del.addEventListener('click', function () {
      if (!del.dataset.sure) { del.dataset.sure = '1'; del.textContent = 'Wirklich alles löschen?'; return; }
      var n = data.name; data = blank(); data.name = n; write();
      if (typeof cfg.onReset === 'function') { try { cfg.onReset(); } catch (e) { /* ignorieren */ } }
      show();
    });
    document.getElementById('hosr-close').focus();
  }
  function close() { var o = document.getElementById('hosr-ov'); if (o) o.remove(); }

  var api = {
    init: function (options) {
      cfg = options || {}; data = read(cfg.app);
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addButton); else addButton();
      return api;
    },
    answer: function (ok, area) {
      if (!cfg) return;
      touch();
      if (ok) data.answers.right++; else data.answers.wrong++;
      var k = area || '';
      data.areas[k] = data.areas[k] || [0, 0];
      data.areas[k][ok ? 0 : 1]++;
      write();
    },
    round: function (r) {
      if (!cfg || !r) return;
      touch();
      data.rounds.push({ d: Date.now(), name: data.name, score: r.score, total: r.total || 0, label: r.label || '', wrong: (r.wrong || []).slice(0, 30) });
      if (data.rounds.length > 60) data.rounds = data.rounds.slice(-60);
      write();
    },
    done: function (label) { if (!cfg || !label) return; touch(); data.done[label] = Date.now(); write(); },
    isDone: function (label) { return !!(data && data.done[label]); },
    save: function (key, value) { if (!cfg) return; data.state[key] = value; touch(); write(); },
    load: function (key, fallback) { return data && data.state[key] !== undefined ? data.state[key] : fallback; },
    name: function () { return data ? data.name : ''; },
    show: show
  };
  window.HoSResults = api;
})();
