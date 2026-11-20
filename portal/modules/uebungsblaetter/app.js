/* Übungsblatt-Werkstatt – Oberfläche, Vorschau, Druck */
(function () {
  'use strict';
  const { esc } = UB;
  const $ = (id) => document.getElementById(id);
  const IMG = (name) => '/assets/minihos/' + name + '.webp';
  const BLATT_COUNT = 6;
  const params = new URLSearchParams(location.search);
  const showDrafts = params.has('entwurf') || params.has('lehrer');

  const state = { fach: 'deutsch', klasse: 1, topic: null, level: 1, blatt: 1, variant: null, view: 'blatt', merkheft: false, format: 'blatt' };
  const fachOf = (t) => t.fach || 'deutsch';

  // ------------------------------------------------------------------
  // Adresse: #thema-stufe-blatt  bzw. #thema-stufe-v123456 ; ?klasse=2
  // ------------------------------------------------------------------
  function readHash() {
    const mh = location.hash.match(/^#merkheft(?:-(mathe|englisch))?(?:-(\d))?$/);
    if (mh) { state.merkheft = true; state.fach = mh[1] || 'deutsch'; if (mh[2] && +mh[2] >= 1 && +mh[2] <= 4) state.klasse = +mh[2]; return; }
    if (['#mathe', '#deutsch', '#englisch'].includes(location.hash)) { state.fach = location.hash.slice(1); state.topic = null; state.merkheft = false; return; }
    state.merkheft = false;
    const m = location.hash.replace('#', '').match(/^([a-z0-9-]+?)(?:-(\d))?(?:-(\d+|v\d+))?(?:-(domino|memory|trimino))?$/);
    if (!m) return;
    const t = UB.topics.find(x => x.id === m[1]);
    if (!t || (t.review && !showDrafts)) return;
    state.topic = t.id;
    state.fach = fachOf(t);
    if (m[2] && +m[2] >= 1 && +m[2] <= 3) state.level = +m[2];
    state.format = m[4] || 'blatt';
    if (m[3]) {
      if (m[3].startsWith('v')) { state.variant = m[3].slice(1); state.blatt = null; }
      else if (+m[3] >= 1 && +m[3] <= BLATT_COUNT) { state.blatt = +m[3]; state.variant = null; }
    }
    const k = +(params.get('klasse') || 0);
    state.klasse = t.klassen.includes(k) ? k : t.klassen[0];
  }
  function writeHash() {
    if (state.merkheft) { history.replaceState(null, '', location.pathname + (showDrafts ? '?entwurf=1' : '') + '#merkheft-' + (state.fach !== 'deutsch' ? state.fach + '-' : '') + state.klasse); return; }
    if (!state.topic) return;
    const h = '#' + state.topic + '-' + state.level + '-' + (state.variant ? 'v' + state.variant : state.blatt) + (state.format !== 'blatt' ? '-' + state.format : '');
    history.replaceState(null, '', location.pathname + (showDrafts ? '?entwurf=1' : '') + h);
  }
  const shareUrl = () => location.origin + '/uebungsblaetter/' + (showDrafts ? '?entwurf=1' : '') + location.hash;

  // ------------------------------------------------------------------
  // Katalog
  // ------------------------------------------------------------------
  function visibleTopics() {
    return UB.topics.filter(t => fachOf(t) === state.fach && t.klassen.includes(state.klasse) && (!t.review || showDrafts));
  }
  function renderCatalog() {
    const list = visibleTopics();
    let html = list.some(t => t.merk) ? '<button type="button" class="cat-item merkheft' + (state.merkheft ? ' current' : '') + '" data-merkheft="1"><img src="' + IMG('MiniHoS_Original_Notizbuch') + '" alt=""><span><b>Merkheft</b><small>alle Regeln der ' + state.klasse + '. Klasse auf einen Blick</small></span></button>' : '';
    Object.keys(UB.AREAS).forEach(area => {
      const ts = list.filter(t => t.area === area);
      if (!ts.length) return;
      html += '<div class="cat-area">' + esc(UB.AREAS[area]) + '</div>';
      html += ts.map(t => '<button type="button" class="cat-item' + (t.id === state.topic ? ' current' : '') + '" data-topic="' + t.id + '">' +
        '<img src="' + IMG(t.img) + '" alt="" loading="lazy"><span><b>' + esc(t.title) + '</b><small>' + (t.klassen.length > 1 ? t.klassen[0] + '.–' + t.klassen[t.klassen.length - 1] + '.' : t.klassen[0] + '.') + ' Klasse' +
        (t.review ? ' · <span class="draft">Entwurf</span>' : '') + '</small></span></button>').join('');
    });
    if (!list.length) html = '<p class="cat-empty">Für die ' + state.klasse + '. Klasse kommen bald Themen dazu.</p>';
    const q = ($('catSearch') && $('catSearch').value) || '';
    $('catalog').innerHTML = '<input type="search" class="cat-search" id="catSearch" placeholder="Thema suchen …" aria-label="Thema suchen">' + html;
    const inp = $('catSearch');
    inp.value = q;
    const filter = () => {
      const v = inp.value.trim().toLowerCase();
      $('catalog').querySelectorAll('[data-topic]').forEach(btn => {
        const t = UB.topics.find(x => x.id === btn.dataset.topic);
        btn.hidden = !!v && !(t.title + ' ' + t.id + ' ' + (t.merk || '')).toLowerCase().includes(v);
      });
      $('catalog').querySelectorAll('.cat-area').forEach(h => {
        let n = h.nextElementSibling, any = false;
        while (n && !n.classList.contains('cat-area')) { if (n.dataset.topic && !n.hidden) any = true; n = n.nextElementSibling; }
        h.hidden = !any;
      });
    };
    inp.addEventListener('input', filter);
    if (q) filter();
    $('catalog').querySelectorAll('[data-topic]').forEach(b => b.addEventListener('click', () => {
      state.topic = b.dataset.topic; state.blatt = 1; state.variant = null; state.merkheft = false; render();
    }));
    const mb = $('catalog').querySelector('[data-merkheft]');
    if (mb) mb.addEventListener('click', () => { state.merkheft = true; render(); });
  }

  // ------------------------------------------------------------------
  // Blatt bauen
  // ------------------------------------------------------------------
  function seedText() {
    return state.topic + '|' + state.level + '|' + (state.variant ? 'v' + state.variant : 'b' + state.blatt);
  }
  function buildSheet(t, solution) {
    const code = state.topic + '-' + state.level + '-' + (state.variant ? 'v' + state.variant : state.blatt) + (state.format !== 'blatt' ? '-' + state.format : '');
    const blattLabel = state.variant ? 'Zusatzblatt ' + state.variant : 'Blatt ' + state.blatt;
    if (state.format !== 'blatt') return UB.cards.build(t, { format: state.format, level: state.level, klasse: state.klasse, fach: fachOf(t), seed: seedText(), solution, code, meta: (state.variant ? 'Zusatzset ' + state.variant : 'Set ' + state.blatt) });
    const rng = UB.makeRng(seedText());
    const tasks = t.build(state.level, rng);
    const img = solution ? 'MiniHoS_Lob_Pokal' : t.img;
    let html = '<article class="sheet fach-' + fachOf(t) + (solution ? ' solution' : '') + '">' +
      '<header class="sh-head"><div><div class="sh-kicker">' + UB.FACH[fachOf(t)] + ' · ' + state.klasse + '. Klasse · ' + esc(UB.LEVEL_NAMES[state.level]) + '</div>' +
      '<h1>' + esc(t.title) + '</h1><div class="sh-meta">' + esc(blattLabel) + '</div></div>' +
      '<img class="sh-img" src="' + IMG(img) + '" alt=""></header>';
    if (!solution) html += t.lang === 'en' ? '<div class="sh-name"><span>Name:</span><span class="short">Class:</span><span class="short">Date:</span></div>' : '<div class="sh-name"><span>Name:</span><span class="short">Klasse:</span><span class="short">Datum:</span></div>';
    tasks.forEach((task, i) => {
      html += '<section class="task"><h3><span class="nr">' + (i + 1) + '</span>' + esc(task.title) + '</h3>' +
        (task.instr ? '<p class="instr">' + esc(task.instr) + '</p>' : '') + (solution ? task.sol : task.body) + '</section>';
    });
    html += '<div class="sh-spacer"></div>';
    if (!solution) {
      html += '<div class="sh-ichkann"><b>Das kannst du jetzt – kreuze an:</b><table>' +
        t.levels[state.level].ichkann.map(s => '<tr><td>' + esc(s) + '</td><td class="self">☐ sicher&nbsp; ☐ fast&nbsp; ☐ noch nicht</td></tr>').join('') + '</table></div>';
    }
    html += '<footer class="sh-foot"><span>chatisthisreal.at/uebungsblaetter</span><span>Code: ' + esc(code) + '</span></footer></article>';
    return html;
  }

  // ------------------------------------------------------------------
  // Merkheft: alle Merkkästen der Klasse, automatisch auf A4-Seiten verteilt
  // ------------------------------------------------------------------
  function merkPage(nr, body) {
    return '<article class="sheet merkheft fach-' + state.fach + '"><header class="sh-head"><div><div class="sh-kicker">' + UB.FACH[state.fach] + ' · ' + state.klasse + '. Klasse</div>' +
      '<h1>Merkheft</h1><div class="sh-meta">Seite ' + nr + ' von %TOTAL%</div></div><img class="sh-img" src="' + IMG(nr === 1 ? 'MiniHoS_Original_Notizbuch' : 'MiniHoS_Erklaeren_Tafel-Idee') + '" alt=""></header>' +
      '<div class="mh-body">' + body + '</div><div class="sh-spacer"></div><footer class="sh-foot"><span>chatisthisreal.at/uebungsblaetter</span><span>Merkheft ' + state.klasse + '. Klasse</span></footer></article>';
  }
  function buildMerkheft() {
    const list = visibleTopics().filter(t => t.merk);
    const blocks = [];
    Object.keys(UB.AREAS).forEach(area => {
      const ts = list.filter(t => t.area === area);
      if (!ts.length) return;
      ts.forEach((t, i) => blocks.push((i === 0 ? '<div class="mh-area">' + esc(UB.AREAS[area]) + '</div>' : '') +
        '<section class="mh-box"><h3><img src="' + IMG(t.img) + '" alt="">' + esc(t.title) + '<span class="mh-ok">☐ verstanden</span></h3><div>' + t.merk + '</div></section>'));
    });
    const meas = document.createElement('div');
    meas.style.cssText = 'position:absolute;left:-10000px;top:0;visibility:hidden';
    document.body.appendChild(meas);
    const pages = []; let cur = [];
    blocks.forEach(b => {
      meas.innerHTML = merkPage(1, cur.concat([b]).join(''));
      if (cur.length && meas.firstChild.offsetHeight > 1123) { pages.push(cur); cur = [b]; } else cur.push(b);
    });
    if (cur.length) pages.push(cur);
    meas.remove();
    return pages.map((p, i) => merkPage(i + 1, p.join(''))).join('').replace(/%TOTAL%/g, pages.length);
  }

  // ------------------------------------------------------------------
  // Darstellung
  // ------------------------------------------------------------------
  function render() {
    document.querySelectorAll('#klasseSeg button').forEach(b => b.classList.toggle('active', +b.dataset.klasse === state.klasse));
    document.querySelectorAll('#fachSeg button').forEach(b => b.classList.toggle('active', b.dataset.fach === state.fach));
    ['deutsch', 'mathe', 'englisch'].forEach(f => document.body.classList.toggle('subject-' + f, state.fach === f));
    const fb = $('fachBadge'); if (fb) { fb.textContent = UB.FACH[state.fach]; fb.className = 'badge-main is-' + state.fach; }
  document.querySelectorAll('#levelSeg button').forEach(b => b.classList.toggle('active', +b.dataset.level === state.level));
    document.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('active', b.dataset.view === state.view));
    $('blattBtns').innerHTML = Array.from({ length: BLATT_COUNT }, (_, i) => '<button type="button" data-blatt="' + (i + 1) + '" class="' + (!state.variant && state.blatt === i + 1 ? 'active' : '') + '">' + (i + 1) + '</button>').join('');
    $('blattBtns').querySelectorAll('[data-blatt]').forEach(b => b.addEventListener('click', () => { state.blatt = +b.dataset.blatt; state.variant = null; state.merkheft = false; render(); }));
    renderCatalog();

    if (state.merkheft) {
      ['printSolBtn', 'poolBtn', 'variantBtn'].forEach(id => { $(id).disabled = true; });
      ['printBtn', 'linkBtn'].forEach(id => { $(id).disabled = false; });
      $('previewScale').innerHTML = buildMerkheft();
      const n = $('previewScale').querySelectorAll('.sheet').length;
      $('sheetInfo').textContent = 'Merkheft · ' + state.klasse + '. Klasse · ' + n + (n === 1 ? ' Seite' : ' Seiten');
      setMsg('Alle Regeln der ' + state.klasse + '. Klasse. Drucke das Merkheft aus und hake ab, was du verstanden hast.', '');
      writeHash();
      fitPreview();
      return;
    }
    const t = UB.topics.find(x => x.id === state.topic);
    const hasTopic = !!t && t.klassen.includes(state.klasse);
    ['printBtn', 'printSolBtn', 'linkBtn', 'poolBtn', 'variantBtn'].forEach(id => { $(id).disabled = !hasTopic; });
    if (!hasTopic) {
      $('previewScale').innerHTML = '';
      $('sheetInfo').textContent = '';
      setMsg('Wähle links ein Thema, dann Stufe und Blatt.', '');
      return;
    }
    const av = UB.cards.available(t, state.level);
    if (state.format !== 'blatt' && !av[state.format]) state.format = 'blatt';
    document.querySelectorAll('#formatSeg button').forEach(b => { const f = b.dataset.format, off = f !== 'blatt' && !av[f]; b.classList.toggle('off', off); b.setAttribute('aria-disabled', off ? 'true' : 'false'); b.classList.toggle('active', f === state.format); b.title = off ? 'Für dieses Thema und diese Stufe nicht möglich' : ''; });
    const cardsMode = state.format !== 'blatt';
    document.querySelector('[data-view="blatt"]').textContent = cardsMode ? 'Karten' : 'Übungsblatt';
    $('printBtn').textContent = cardsMode ? 'Karten drucken' : 'Blatt drucken';
    $('previewScale').innerHTML = buildSheet(t, state.view === 'loesung');
    if (cardsMode) UB.cards.fit($('previewScale'));
    $('sheetInfo').textContent = t.title + ' · ' + UB.LEVEL_NAMES[state.level] + ' · ' + (cardsMode ? UB.cards.FORMATS[state.format].label + ' · ' : '') + (state.variant ? 'Zusatz ' + state.variant : (cardsMode ? 'Set ' : 'Blatt ') + state.blatt);
    setMsg(t.review ? 'Entwurf: Dieses Thema ist noch nicht freigegeben. Bitte in der Lehrer-Ansicht prüfen.' : cardsMode ? 'In 100 % drucken (am besten auf dickeres Papier) und entlang der Strichlinien ausschneiden. Die Lösung dient zur Selbstkontrolle.' :
      (state.variant ? 'Zusatzblatt zum Weiterüben. Über „Link kopieren“ kommst du später wieder genau zu diesem Blatt.' : 'Tipp: Erst selbst lösen, dann mit der Lösung vergleichen.'), t.review ? 'warn' : '');
    writeHash();
    fitPreview();
  }
  function setMsg(text, kind) { const el = $('msg'); el.className = 'hos-feedback' + (kind ? ' ' + kind : ''); el.textContent = text; }

  function fitPreview() {
    const scroll = $('previewScroll'), scale = $('previewScale');
    const sheet = scale.querySelector('.sheet');
    if (!sheet) return;
    scale.style.transform = 'none';
    scale.style.height = 'auto';
    const w = sheet.offsetWidth, h = scale.scrollHeight;
    const f = Math.min(1, (scroll.clientWidth - 26) / w);
    scale.style.transform = 'scale(' + f + ')';
    scale.style.width = w + 'px';
    scale.style.height = (h * f) + 'px';
    scale.style.marginLeft = Math.max(0, (scroll.clientWidth - 24 - w * f) / 2) + 'px';
  }
  window.addEventListener('resize', fitPreview);

  // ------------------------------------------------------------------
  // Druck, Link, Lehrer-Ansicht
  // ------------------------------------------------------------------
  function doPrint(solution) {
    const t = UB.topics.find(x => x.id === state.topic);
    if (state.merkheft) $('printArea').innerHTML = buildMerkheft();
    else if (!t) return;
    else if (state.format !== 'blatt') {
      // Karten erst sichtbar (außerhalb des Bildschirms) setzen, Schrift anpassen, dann drucken
      const tmp = document.createElement('div'); tmp.style.cssText = 'position:absolute;left:-10000px;top:0';
      tmp.innerHTML = buildSheet(t, solution); document.body.appendChild(tmp); UB.cards.fit(tmp);
      $('printArea').innerHTML = tmp.innerHTML; tmp.remove();
    } else $('printArea').innerHTML = buildSheet(t, solution);
    const imgs = Array.from($('printArea').querySelectorAll('img'));
    Promise.all(imgs.map(im => im.complete ? 0 : new Promise(r => { im.onload = im.onerror = r; }))).then(() => window.print());
  }
  $('printBtn').addEventListener('click', () => doPrint(false));
  $('printSolBtn').addEventListener('click', () => doPrint(true));

  $('linkBtn').addEventListener('click', () => {
    const url = shareUrl();
    const done = () => setMsg('Link kopiert: ' + url, 'good');
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, () => setMsg('Link: ' + url, ''));
    else setMsg('Link: ' + url, '');
  });

  $('poolBtn').addEventListener('click', () => {
    const t = UB.topics.find(x => x.id === state.topic);
    if (!t) return;
    $('poolTitle').textContent = 'Lehrer-Ansicht: ' + t.title + (t.review ? ' (Entwurf)' : '');
    $('poolBody').innerHTML = '<p class="hos-muted">Alle Sätze und Wörter, aus denen die Blätter zusammengesetzt werden, mit Lösungen.</p><div class="sheet" style="width:auto;min-height:0;padding:0">' + t.pool() + '</div>';
    $('poolDialog').showModal();
  });
  $('poolClose').addEventListener('click', () => $('poolDialog').close());

  // ------------------------------------------------------------------
  // Steuerung
  // ------------------------------------------------------------------
  document.querySelectorAll('#klasseSeg button').forEach(b => b.addEventListener('click', () => {
    state.klasse = +b.dataset.klasse;
    const t = UB.topics.find(x => x.id === state.topic);
    if (!state.merkheft && (!t || !t.klassen.includes(state.klasse))) { state.topic = null; history.replaceState(null, '', location.pathname + location.search); }
    render();
  }));
  document.querySelectorAll('#levelSeg button').forEach(b => b.addEventListener('click', () => { state.level = +b.dataset.level; state.merkheft = false; render(); }));
  document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => { state.view = b.dataset.view; render(); }));
  document.querySelectorAll('#fachSeg button').forEach(b => b.addEventListener('click', () => {
    if (state.fach === b.dataset.fach) return;
    state.fach = b.dataset.fach; state.topic = null; state.merkheft = false;
    history.replaceState(null, '', location.pathname + (showDrafts ? '?entwurf=1' : '') + '#' + state.fach);
    render();
  }));
  document.querySelectorAll('#formatSeg button').forEach(b => b.addEventListener('click', () => {
    const t = UB.topics.find(x => x.id === state.topic);
    if (!t || state.merkheft) { setMsg('Wähle zuerst links ein Thema, dann das Format.', 'warn'); return; }
    if (b.classList.contains('off')) {
      const name = UB.cards.FORMATS[b.dataset.format].label;
      setMsg(name + ' gibt es für „' + t.title + '“ auf ' + UB.LEVEL_NAMES[state.level] + ' nicht: Die Aufgaben sind dafür zu lang oder haben zu wenige verschiedene Antworten.' + (b.dataset.format === 'trimino' ? ' Probiere eine andere Stufe oder Domino/Memory.' : ''), 'warn');
      return;
    }
    state.format = b.dataset.format; render();
  }));
  $('variantBtn').addEventListener('click', () => { state.variant = String(100000 + Math.floor(Math.random() * 900000)); state.blatt = null; state.view = 'blatt'; render(); });
  window.addEventListener('hashchange', () => { readHash(); render(); });

  readHash();
  render();
})();
