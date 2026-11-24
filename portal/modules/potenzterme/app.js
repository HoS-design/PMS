/* Potenzterme-Trainer – Oberfläche: Üben (adaptiv), Selbsttest, Meine Ergebnisse (lokal gespeichert) */
(function () {
  'use strict';
  var PT = window.PT, $ = function (id) { return document.getElementById(id); };
  var H = PT.html, rnd = Math.random;
  var STORE = 'hos-potenzterme-v1', GOAL = 10, TEST_LEN = 12;

  /* ---------- Speicher (lokal, pro Gerät/Browser) ---------- */
  function load() {
    try { var d = JSON.parse(localStorage.getItem(STORE)); if (d && d.areas) return d; } catch (e) { /* kein Speicher */ }
    return { name: '', areas: {}, weights: {}, tests: [], log: [] };
  }
  var data = load();
  PT.AREAS.forEach(function (a) { data.areas[a.id] = data.areas[a.id] || { points: 0, right: 0, wrong: 0 }; });
  function save() { try { localStorage.setItem(STORE, JSON.stringify(data)); } catch (e) { /* ignorieren */ } }

  /* ---------- Inhalte ---------- */
  var MERKE = {
    termarten: '<h2>Merke: Termarten</h2><div class="hos-merke"><p><b>Monom</b> = 1 Glied, <b>Binom</b> = 2 Glieder, <b>Polynom</b> = 3 oder mehr Glieder.</p><p>Glieder werden durch <b>+</b> oder <b>−</b> getrennt. Ein Malpunkt trennt nicht!</p><p>Ein <b>Potenzterm</b> enthält <b>mindestens eine Potenz</b>.</p></div>' +
      '<div class="pt-ex"><div>7a<small>Monom</small></div><div>2x + 9<small>Binom</small></div><div>4x + 3y − 2<small>Polynom</small></div></div>',
    addsub: '<h2>Merke: Plus und Minus</h2><div class="hos-merke"><p>Nur Potenzen mit <b>gleicher Basis</b> und <b>gleicher Hochzahl</b> dürfen addiert und subtrahiert werden.</p><p>Rechne mit den Zahlen davor. <b>Die Hochzahl bleibt gleich!</b></p></div>' +
      '<div class="pt-ex"><div>3x<sup>2</sup> + 5x<sup>2</sup> = 8x<sup>2</sup><small>✓ gleichartig</small></div><div>3x<sup>2</sup> + 5x<sup>3</sup><small>✗ bleibt so</small></div><div>x<sup>2</sup> = 1x<sup>2</sup><small>unsichtbare 1</small></div></div>',
    muldiv: '<h2>Merke: Mal und Durch</h2><div class="hos-merke"><p><b>Mal:</b> Die Zahlen werden multipliziert, Hochzahlen <b>addieren</b>.</p><p><b>Durch:</b> Die Zahlen werden dividiert, Hochzahlen <b>subtrahieren</b>.</p><p>Variablen in <b>alphabetischer Reihenfolge</b> anschreiben. Minus · Minus = Plus.</p></div>' +
      '<div class="pt-ex"><div>x<sup>2</sup> · x<sup>3</sup> = x<sup>5</sup><small>2 + 3</small></div><div>3b · 2a<sup>2</sup> = 6a<sup>2</sup>b<small>alphabetisch</small></div><div>12a<sup>5</sup> : (−4a<sup>2</sup>) = −3a<sup>3</sup><small>5 − 2</small></div><div>x = x<sup>1</sup><small>unsichtbare 1</small></div></div>',
    mix: '<h2>Merke: Alles im Überblick</h2><div class="hos-merke"><p><b>+ und −:</b> nur Gleichartiges, Hochzahl bleibt.</p><p><b>· :</b> Zahlen rechnen, Hochzahlen <b>+</b> bzw. <b>−</b>.</p><p><b>Termart:</b> Glieder zählen (Monom, Binom, Polynom).</p></div>' +
      '<div class="pt-ex"><div>2x<sup>3</sup> + 6x<sup>3</sup> = 8x<sup>3</sup></div><div>2x<sup>3</sup> · 6x<sup>3</sup> = 12x<sup>6</sup></div></div>'
  };
  var CAN = {
    termarten: 'Du kannst Monome, Binome und Polynome unterscheiden und Potenzterme erkennen.',
    addsub: 'Du kannst Potenzterme addieren und subtrahieren.',
    muldiv: 'Du kannst Potenzterme multiplizieren und dividieren.'
  };
  function areaOfSkill(s) {
    if (s.indexOf('art-') === 0) return 'termarten';
    if (/^(gleichartig|add)/.test(s)) return 'addsub';
    return s === 'vergleich' ? 'mix' : 'muldiv';
  }

  /* ---------- Zustand ---------- */
  var state = { mode: 'learn', area: 0, task: null, skill: null, tries: 0, done: false, choice: -1, queue: [], sinceQueue: 0, streak: 0, test: null };

  /* Adaptive Auswahl: falsch Beantwortetes bekommt mehr Gewicht */
  function weight(s) { return data.weights[s] || 1; }
  function pickSkill(skills) {
    if (state.queue.length && state.sinceQueue >= 2) { state.sinceQueue = 0; return state.queue.shift(); }
    var total = skills.reduce(function (t, s) { return t + weight(s); }, 0), r = rnd() * total;
    for (var i = 0; i < skills.length; i++) { r -= weight(skills[i]); if (r <= 0) return skills[i]; }
    return skills[skills.length - 1];
  }

  /* ---------- Darstellung ---------- */
  function feedback(text, cls) { var f = $('feedback'); f.className = 'hos-feedback' + (cls ? ' ' + cls : ''); f.innerHTML = text; }
  function say(t) { $('hos-say').innerHTML = t || ''; }
  function setImg(n) { $('hos-img').src = '/assets/minihos/MiniHoS_' + n + '.webp'; }

  function renderTop() {
    $('mode-learn').classList.toggle('active', state.mode === 'learn');
    $('mode-test').classList.toggle('active', state.mode === 'test');
    var nav = $('areas'); nav.innerHTML = '';
    if (state.mode === 'learn') {
      PT.AREAS.forEach(function (a, i) {
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'hos-step' + (i === state.area ? ' current' : '') + (data.areas[a.id].points >= GOAL ? ' done' : '');
        b.textContent = a.short + (data.areas[a.id].points >= GOAL ? ' ✓' : '');
        b.onclick = function () { state.area = i; state.queue = []; nextTask(); };
        nav.appendChild(b);
      });
    }
    var res = document.createElement('button');
    res.type = 'button'; res.className = 'hos-step' + (state.mode === 'results' ? ' current' : '');
    res.textContent = '📋 Meine Ergebnisse'; res.onclick = showResults;
    nav.appendChild(res);
    var bar = $('progress').firstElementChild;
    if (state.mode === 'learn') {
      var ad = data.areas[PT.AREAS[state.area].id];
      $('stat-a').innerHTML = 'Punkte: <b>' + Math.min(ad.points, GOAL) + ' / ' + GOAL + '</b>';
      $('stat-b').innerHTML = 'Serie: <b>' + state.streak + '</b>';
      bar.style.width = Math.min(100, ad.points / GOAL * 100) + '%';
      $('progress').hidden = false; $('stat-a').hidden = false; $('stat-b').hidden = false;
    } else if (state.mode === 'test' && state.test && !state.test.finished) {
      $('stat-a').innerHTML = 'Frage <b>' + (state.test.i + 1) + ' / ' + state.test.items.length + '</b>';
      $('stat-b').hidden = true; $('stat-a').hidden = false; $('progress').hidden = false;
      bar.style.width = (state.test.i / state.test.items.length * 100) + '%';
    } else {
      $('stat-a').hidden = true; $('stat-b').hidden = true; $('progress').hidden = true;
    }
  }

  function renderTask(counter) {
    var t = state.task, html = '';
    if (counter) html += '<div class="pt-counter">' + counter + '</div>';
    html += '<p class="pt-prompt">' + t.prompt + '</p><div class="pt-expr">' + H(t.expr) + '</div>';
    if (t.type === 'choice') {
      html += '<div class="pt-choices">' + t.options.map(function (o, i) {
        return '<button type="button" class="hos-btn pt-choice" data-i="' + i + '"><span>' + H(o) + '</span></button>';
      }).join('') + '</div><div class="hos-muted">Tasten 1–' + t.options.length + ' wählen</div>';
    } else {
      html += '<div class="pt-inputrow"><span>=</span><input id="answer" type="text" autocomplete="off" spellcheck="false" aria-label="Deine Antwort"></div>' +
        '<div class="pt-preview" id="preview">Hochzahl: Taste ² oder ^ tippen (x^2)</div><div class="pt-keys">' +
        ['x', 'y', 'a', 'b', 'z', 'm'].map(function (k) { return '<button type="button" class="hos-btn soft" data-k="' + k + '">' + k + '</button>'; }).join('') +
        ['²', '³', '⁴', '⁵', '⁶'].map(function (k) { return '<button type="button" class="hos-btn sup" data-k="' + k + '">' + k + '</button>'; }).join('') +
        '<button type="button" class="hos-btn soft" data-k="+">+</button><button type="button" class="hos-btn soft" data-k="−">−</button>' +
        '<button type="button" class="hos-btn soft" data-k="⌫">⌫</button></div>';
    }
    $('task').innerHTML = html;
    if (t.type === 'choice') {
      Array.prototype.forEach.call(document.querySelectorAll('.pt-choice'), function (b) {
        b.onclick = function () { choose(Number(b.dataset.i)); };
      });
    } else {
      var inp = $('answer');
      inp.oninput = preview;
      Array.prototype.forEach.call(document.querySelectorAll('[data-k]'), function (b) {
        b.onclick = function () {
          var k = b.dataset.k, s = inp.selectionStart, e = inp.selectionEnd, v = inp.value;
          if (k === '⌫') { if (s === e && s > 0) s--; inp.value = v.slice(0, s) + v.slice(e); inp.setSelectionRange(s, s); }
          else { inp.value = v.slice(0, s) + k + v.slice(e); inp.setSelectionRange(s + k.length, s + k.length); }
          inp.focus(); preview();
        };
      });
      setTimeout(function () { inp.focus(); }, 30);
    }
  }

  function preview() {
    var v = $('answer').value, p = PT.parse(v);
    $('preview').innerHTML = v.trim() ? (p.ok ? 'Du schreibst: <b>' + H(PT.sumText(p.list)) + '</b>' : p.error) : 'Hochzahl: Taste ² oder ^ tippen (x^2)';
  }

  function choose(i) {
    if (state.done) return;
    state.choice = i;
    Array.prototype.forEach.call(document.querySelectorAll('.pt-choice'), function (b) { b.classList.toggle('sel', Number(b.dataset.i) === i); });
    if (state.mode === 'learn' || state.mode === 'test') check();
  }

  function buttons(checking) {
    $('btn-check').hidden = !checking; $('btn-next').hidden = checking;
    $('btn-hint').hidden = state.mode !== 'learn' || !checking;
  }

  /* ---------- Üben ---------- */
  function nextTask() {
    state.mode = 'learn';
    var area = PT.AREAS[state.area];
    state.skill = pickSkill(area.skills); state.sinceQueue++;
    state.task = PT.gen(state.skill, rnd); state.tries = 0; state.done = false; state.choice = -1;
    $('side').innerHTML = MERKE[area.id]; setImg('Mathe_Taschenrechner'); say('');
    renderTop(); renderTask(area.title); buttons(true);
    feedback('Löse die Aufgabe. Du hast zwei Versuche.');
  }

  function check() {
    if (state.done) return;
    var t = state.task, ok, msg = '';
    if (t.type === 'choice') {
      if (state.choice < 0) { feedback('Wähle zuerst eine Antwort.', 'warn'); return; }
      ok = state.choice === t.answer;
    } else {
      var r = PT.check(t, $('answer').value);
      if (r.status === 'invalid' || r.status === 'unsimplified' || r.status === 'order') { feedback(r.message, 'warn'); return; }
      ok = r.status === 'correct'; msg = r.message || '';
    }
    if (state.mode === 'test') return testAnswer(ok);
    state.tries++;
    var ad = data.areas[PT.AREAS[state.area].id], sk = state.skill;
    if (ok) {
      state.done = true; state.streak++;
      ad.right++; ad.points += state.tries === 1 ? 1 : 0.5;
      data.weights[sk] = Math.max(1, weight(sk) - 0.5);
      markChoice(true);
      var praise = state.streak >= 5 ? '🔥 ' + state.streak + ' richtig hintereinander!' : pick(['Richtig! 👍', 'Super!', 'Genau so!', 'Stark!']);
      feedback(praise + ' ' + H(t.explain), 'good');
      if (ad.points >= GOAL && ad.points - (state.tries === 1 ? 1 : 0.5) < GOAL) { setImg('Lob_Pokal'); say('Bereich geschafft! Probier jetzt den Selbsttest.'); }
      else { setImg('Lob_Daumen-Hoch'); say(''); }
      buttons(false);
    } else if (state.tries < 2) {
      state.streak = 0;
      if (t.type === 'choice') markChoice(false, true);
      feedback((msg || 'Noch nicht richtig.') + ' Versuch es noch einmal!', 'warn');
      setImg('Gesicht_Nachdenken-Idee'); say(H(t.hint));
    } else {
      state.done = true; state.streak = 0; ad.wrong++;
      data.weights[sk] = Math.min(6, weight(sk) + 2);
      state.queue.push(sk);
      markChoice(false);
      var sol = t.type === 'choice' ? t.options[t.answer] : PT.sumText(t.solution);
      feedback('Richtig wäre: <b>' + H(sol) + '</b>. ' + H(t.explain) + ' Diese Art kommt bald noch einmal.', 'bad');
      buttons(false);
    }
    data.log.push({ d: Date.now(), s: sk, ok: ok }); if (data.log.length > 400) data.log = data.log.slice(-400);
    save(); renderTop();
  }
  function markChoice(ok, keep) {
    var t = state.task; if (t.type !== 'choice') { var i = $('answer'); if (i && state.done) i.readOnly = true; return; }
    Array.prototype.forEach.call(document.querySelectorAll('.pt-choice'), function (b) {
      var i = Number(b.dataset.i);
      b.classList.remove('good', 'bad');
      if (i === state.choice && !ok) b.classList.add('bad');
      if (state.done && i === t.answer) b.classList.add('good');
      if (keep && i === state.choice) b.disabled = true;
    });
  }
  function pick(a) { return a[Math.floor(rnd() * a.length)]; }

  /* ---------- Selbsttest ---------- */
  function testSetup() {
    state.mode = 'test'; state.test = null; renderTop(); buttons(true); $('btn-check').hidden = true;
    $('side').innerHTML = '<h2>Selbsttest</h2><div class="hos-merke"><p>' + TEST_LEN + ' Fragen, gemischt aus deinen Bereichen.</p><p><b>Keine Tipps</b>, <b>ein Versuch</b> pro Frage.</p><p>Am Ende siehst du, was du schon kannst. Das Ergebnis wird auf diesem Gerät gespeichert.</p></div>';
    setImg('Lob_Checkliste'); say('Zeig, was du kannst!');
    $('task').innerHTML = '<div class="pt-setup"><p class="pt-prompt">Selbsttest starten</p>' +
      '<label>Dein Name: <input id="t-name" type="text" maxlength="40" value="' + (data.name || '').replace(/"/g, '&quot;') + '" style="flex:1"></label>' +
      '<label><input type="checkbox" class="t-area" value="termarten" checked> Termarten (Monom, Binom, Polynom) & Potenzterme</label>' +
      '<label><input type="checkbox" class="t-area" value="addsub" checked> Potenzterme addieren / subtrahieren</label>' +
      '<label><input type="checkbox" class="t-area" value="muldiv" checked> Potenzterme multiplizieren / dividieren</label>' +
      '<button id="t-start" type="button" class="hos-btn primary">Test starten →</button></div>';
    feedback('Wähle die Bereiche und starte den Test.');
    $('t-start').onclick = function () {
      var areas = Array.prototype.filter.call(document.querySelectorAll('.t-area'), function (c) { return c.checked; }).map(function (c) { return c.value; });
      if (!areas.length) { feedback('Wähle mindestens einen Bereich.', 'warn'); return; }
      data.name = $('t-name').value.trim(); save();
      startTest(areas);
    };
  }
  function startTest(areas) {
    var items = [];
    for (var i = 0; i < TEST_LEN; i++) {
      var a = areas[i % areas.length], skills = PT.AREAS.filter(function (x) { return x.id === a; })[0].skills;
      var sk = skills[Math.floor(rnd() * skills.length)];
      items.push({ area: a, skill: sk, task: PT.gen(sk, rnd), ok: null, given: '' });
    }
    items.sort(function () { return rnd() - 0.5; });
    state.test = { areas: areas, items: items, i: 0, finished: false };
    $('side').innerHTML = '<h2>Selbsttest läuft</h2><div class="hos-merke"><p>Keine Tipps – du schaffst das!</p><p>Lies jede Aufgabe genau: <b>Plus</b> oder <b>Mal</b>?</p></div>';
    setImg('Mathe_Taschenrechner'); say('');
    showTestItem();
  }
  function showTestItem() {
    var it = state.test.items[state.test.i];
    state.task = it.task; state.done = false; state.choice = -1;
    renderTop(); renderTask(''); buttons(true); feedback('Ein Versuch. Mit Enter oder „Prüfen“ abgeben.');
  }
  function testAnswer(ok) {
    var it = state.test.items[state.test.i];
    it.ok = ok; it.given = state.task.type === 'choice' ? state.task.options[state.choice] : $('answer').value;
    state.done = true;
    state.test.i++;
    if (state.test.i >= state.test.items.length) finishTest(); else showTestItem();
  }
  function finishTest() {
    var T = state.test; T.finished = true;
    var right = T.items.filter(function (x) { return x.ok; }).length, n = T.items.length;
    var per = {};
    T.items.forEach(function (x) { per[x.area] = per[x.area] || [0, 0]; per[x.area][1]++; if (x.ok) per[x.area][0]++; });
    var entry = { d: Date.now(), name: data.name, right: right, n: n, per: per };
    data.tests.push(entry); if (data.tests.length > 50) data.tests = data.tests.slice(-50);
    // Fehler fließen ins adaptive Üben ein
    T.items.forEach(function (x) { if (!x.ok) data.weights[x.skill] = Math.min(6, weight(x.skill) + 2); });
    save(); renderTop(); buttons(false); $('btn-next').hidden = true;
    var pct = right / n;
    setImg(pct >= 0.85 ? 'Lob_Pokal' : pct >= 0.5 ? 'Lob_Daumen-Hoch' : 'Gesicht_Nachdenken-Idee');
    say(pct >= 0.85 ? 'Ausgezeichnet!' : pct >= 0.5 ? 'Gut gemacht – üb die Fehler noch einmal.' : 'Übe die markierten Bereiche und probier es nochmal.');
    $('side').innerHTML = '<h2>Ergebnis gespeichert ✓</h2><div class="hos-merke"><p>Dein Ergebnis ist auf diesem Gerät gespeichert. Du findest es unter <b>📋 Meine Ergebnisse</b>.</p></div>';
    var wrong = T.items.filter(function (x) { return !x.ok; });
    var weakest = Object.keys(per).sort(function (a, b) { return per[a][0] / per[a][1] - per[b][0] / per[b][1]; })[0];
    $('task').innerHTML = '<div class="pt-res"><div class="pt-score"><b>' + right + ' / ' + n + '</b><span>Punkte · ' + Math.round(pct * 100) + ' %<br>' + fmtDate(entry.d) + (entry.name ? ' · ' + esc(entry.name) : '') + '</span></div>' +
      canTable(per) +
      (wrong.length ? '<div><b>Das solltest du noch üben:</b><div class="pt-wrong">' + wrong.map(function (x) {
        var sol = x.task.type === 'choice' ? x.task.options[x.task.answer] : PT.sumText(x.task.solution);
        return '<div>' + H(x.task.expr) + ' → richtig: <b>' + H(sol) + '</b>' + (x.given ? ' <span class="no">(du: ' + H(x.given) + ')</span>' : '') + '</div>';
      }).join('') + '</div></div>' : '<div class="ok"><b>Alles richtig! 🏆</b></div>') +
      '<div style="display:flex;gap:8px;justify-content:center"><button id="r-practice" class="hos-btn primary" type="button">Fehler üben</button><button id="r-again" class="hos-btn" type="button">Neuer Test</button></div></div>';
    feedback('Test beendet: ' + right + ' von ' + n + ' richtig.', pct >= 0.5 ? 'good' : 'warn');
    $('r-again').onclick = testSetup;
    $('r-practice').onclick = function () { state.area = PT.AREAS.map(function (a) { return a.id; }).indexOf(weakest); nextTask(); };
  }
  function canTable(per) {
    return '<table class="pt-can">' + Object.keys(per).map(function (a) {
      var r = per[a][0] / per[a][1], cls = r >= 0.8 ? 'ok' : r >= 0.5 ? 'mid' : 'no', sym = r >= 0.8 ? '✓ sicher' : r >= 0.5 ? '◐ teilweise' : '✗ noch üben';
      return '<tr><td>' + CAN[a] + '</td><td class="' + cls + '">' + per[a][0] + '/' + per[a][1] + ' ' + sym + '</td></tr>';
    }).join('') + '</table>';
  }

  /* ---------- Meine Ergebnisse ---------- */
  function showResults() {
    state.mode = 'results'; renderTop(); buttons(false); $('btn-next').hidden = true;
    setImg('Lob_Klemmbrett'); say(data.name ? 'Hallo ' + esc(data.name) + '!' : '');
    $('side').innerHTML = '<h2>Üben – mein Fortschritt</h2><table class="pt-can">' + PT.AREAS.map(function (a) {
      var d = data.areas[a.id];
      return '<tr><td>' + a.title + '<br><span class="hos-muted">' + d.right + ' richtig · ' + d.wrong + ' falsch</span></td><td class="' + (d.points >= GOAL ? 'ok' : 'mid') + '">' + Math.min(d.points, GOAL) + '/' + GOAL + (d.points >= GOAL ? ' ✓' : '') + '</td></tr>';
    }).join('') + '</table>';
    var tests = data.tests.slice().reverse();
    $('task').innerHTML = '<div class="pt-res"><p class="pt-prompt">📋 Meine Selbsttests</p>' +
      (tests.length ? '<div class="pt-wrong" style="max-height:260px">' + tests.map(function (t) {
        var pct = t.right / t.n;
        return '<div><b class="' + (pct >= 0.8 ? 'ok' : pct >= 0.5 ? 'mid' : 'no') + '">' + t.right + '/' + t.n + '</b> · ' + fmtDate(t.d) + (t.name ? ' · ' + esc(t.name) : '') + '</div>';
      }).join('') + '</div>' + '<div><b>Letzter Test – was du kannst:</b>' + canTable(tests[0].per) + '</div>'
        : '<p class="hos-muted">Noch kein Selbsttest gemacht.</p>') +
      '<div style="display:flex;gap:8px;justify-content:center"><button id="r-learn" class="hos-btn primary" type="button">Weiter üben</button><button id="r-test" class="hos-btn" type="button">Selbsttest</button><button id="r-reset" class="hos-btn warn" type="button">Alles löschen</button></div></div>';
    feedback('Die Ergebnisse sind nur auf diesem Gerät in diesem Browser gespeichert.');
    $('r-learn').onclick = nextTask; $('r-test').onclick = testSetup;
    $('r-reset').onclick = function () {
      if ($('r-reset').dataset.sure) { var n = data.name; data = { name: n, areas: {}, weights: {}, tests: [], log: [] }; PT.AREAS.forEach(function (a) { data.areas[a.id] = { points: 0, right: 0, wrong: 0 }; }); save(); showResults(); }
      else { $('r-reset').dataset.sure = 1; $('r-reset').textContent = 'Wirklich löschen?'; }
    };
  }

  function fmtDate(ms) { var d = new Date(ms); return d.toLocaleDateString('de-AT') + ', ' + d.toLocaleTimeString('de-AT', { hour: '2-digit', minute: '2-digit' }); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------- Steuerung ---------- */
  $('mode-learn').onclick = nextTask;
  $('mode-test').onclick = testSetup;
  $('btn-check').onclick = check;
  $('btn-next').onclick = nextTask;
  $('btn-hint').onclick = function () { if (state.task && !state.done) { setImg('Gesicht_Nachdenken-Idee'); say(H(state.task.hint)); } };
  document.addEventListener('keydown', function (e) {
    if (e.target && e.target.id === 't-name') return;
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!$('btn-next').hidden) nextTask(); else if (!$('btn-check').hidden) check();
    } else if (state.task && state.task.type === 'choice' && !state.done && /^[1-5]$/.test(e.key) && (state.mode === 'learn' || state.mode === 'test')) {
      var i = Number(e.key) - 1; if (i < state.task.options.length) choose(i);
    }
  });
  nextTask();
})();
