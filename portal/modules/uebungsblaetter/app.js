/* Übungsblatt-Werkstatt – Oberfläche, Vorschau, Druck */
(function () {
  'use strict';
  const { esc } = UB;
  const $ = (id) => document.getElementById(id);
  const IMG = (name) => '/assets/minihos/' + name + '.webp';
  const BLATT_COUNT = 6;
  const params = new URLSearchParams(location.search);
  const showDrafts = params.has('entwurf') || params.has('lehrer');

  const state = { klasse: 1, topic: null, level: 1, blatt: 1, variant: null, view: 'blatt' };

  // ------------------------------------------------------------------
  // Adresse: #thema-stufe-blatt  bzw. #thema-stufe-v123456 ; ?klasse=2
  // ------------------------------------------------------------------
  function readHash() {
    const m = location.hash.replace('#', '').match(/^([a-z0-9-]+?)(?:-(\d))?(?:-(\d+|v\d+))?$/);
    if (!m) return;
    const t = UB.topics.find(x => x.id === m[1]);
    if (!t || (t.review && !showDrafts)) return;
    state.topic = t.id;
    if (m[2] && +m[2] >= 1 && +m[2] <= 3) state.level = +m[2];
    if (m[3]) {
      if (m[3].startsWith('v')) { state.variant = m[3].slice(1); state.blatt = null; }
      else if (+m[3] >= 1 && +m[3] <= BLATT_COUNT) { state.blatt = +m[3]; state.variant = null; }
    }
    const k = +(params.get('klasse') || 0);
    state.klasse = t.klassen.includes(k) ? k : t.klassen[0];
  }
  function writeHash() {
    if (!state.topic) return;
    const h = '#' + state.topic + '-' + state.level + '-' + (state.variant ? 'v' + state.variant : state.blatt);
    history.replaceState(null, '', location.pathname + (showDrafts ? '?entwurf=1' : '') + h);
  }
  const shareUrl = () => location.origin + '/uebungsblaetter/' + (showDrafts ? '?entwurf=1' : '') + location.hash;

  // ------------------------------------------------------------------
  // Katalog
  // ------------------------------------------------------------------
  function visibleTopics() {
    return UB.topics.filter(t => t.klassen.includes(state.klasse) && (!t.review || showDrafts));
  }
  function renderCatalog() {
    const list = visibleTopics();
    let html = '';
    Object.keys(UB.AREAS).forEach(area => {
      const ts = list.filter(t => t.area === area);
      if (!ts.length) return;
      html += '<div class="cat-area">' + esc(UB.AREAS[area]) + '</div>';
      html += ts.map(t => '<button type="button" class="cat-item' + (t.id === state.topic ? ' current' : '') + '" data-topic="' + t.id + '">' +
        '<img src="' + IMG(t.img) + '" alt="" loading="lazy"><span><b>' + esc(t.title) + '</b><small>' + (t.klassen.length > 1 ? t.klassen[0] + '.–' + t.klassen[t.klassen.length - 1] + '.' : t.klassen[0] + '.') + ' Klasse' +
        (t.review ? ' · <span class="draft">Entwurf</span>' : '') + '</small></span></button>').join('');
    });
    if (!list.length) html = '<p class="cat-empty">Für die ' + state.klasse + '. Klasse kommen bald Themen dazu.</p>';
    $('catalog').innerHTML = html;
    $('catalog').querySelectorAll('[data-topic]').forEach(b => b.addEventListener('click', () => {
      state.topic = b.dataset.topic; state.blatt = 1; state.variant = null; render();
    }));
  }

  // ------------------------------------------------------------------
  // Blatt bauen
  // ------------------------------------------------------------------
  function seedText() {
    return state.topic + '|' + state.level + '|' + (state.variant ? 'v' + state.variant : 'b' + state.blatt);
  }
  function buildSheet(t, solution) {
    const rng = UB.makeRng(seedText());
    const tasks = t.build(state.level, rng);
    const code = state.topic + '-' + state.level + '-' + (state.variant ? 'v' + state.variant : state.blatt);
    const blattLabel = state.variant ? 'Zusatzblatt ' + state.variant : 'Blatt ' + state.blatt;
    const img = solution ? 'MiniHoS_Lob_Pokal' : t.img;
    let html = '<article class="sheet' + (solution ? ' solution' : '') + '">' +
      '<header class="sh-head"><div><div class="sh-kicker">Deutsch · ' + state.klasse + '. Klasse · ' + esc(UB.LEVEL_NAMES[state.level]) + '</div>' +
      '<h1>' + esc(t.title) + '</h1><div class="sh-meta">' + esc(blattLabel) + '</div></div>' +
      '<img class="sh-img" src="' + IMG(img) + '" alt=""></header>';
    if (!solution) html += '<div class="sh-name"><span>Name:</span><span class="short">Klasse:</span><span class="short">Datum:</span></div>';
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
  // Darstellung
  // ------------------------------------------------------------------
  function render() {
    document.querySelectorAll('#klasseSeg button').forEach(b => b.classList.toggle('active', +b.dataset.klasse === state.klasse));
    document.querySelectorAll('#levelSeg button').forEach(b => b.classList.toggle('active', +b.dataset.level === state.level));
    document.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('active', b.dataset.view === state.view));
    $('blattBtns').innerHTML = Array.from({ length: BLATT_COUNT }, (_, i) => '<button type="button" data-blatt="' + (i + 1) + '" class="' + (!state.variant && state.blatt === i + 1 ? 'active' : '') + '">' + (i + 1) + '</button>').join('');
    $('blattBtns').querySelectorAll('[data-blatt]').forEach(b => b.addEventListener('click', () => { state.blatt = +b.dataset.blatt; state.variant = null; render(); }));
    renderCatalog();

    const t = UB.topics.find(x => x.id === state.topic);
    const hasTopic = !!t && t.klassen.includes(state.klasse);
    ['printBtn', 'printSolBtn', 'linkBtn', 'poolBtn', 'variantBtn'].forEach(id => { $(id).disabled = !hasTopic; });
    if (!hasTopic) {
      $('previewScale').innerHTML = '';
      $('sheetInfo').textContent = '';
      setMsg('Wähle links ein Thema, dann Stufe und Blatt.', '');
      return;
    }
    $('previewScale').innerHTML = buildSheet(t, state.view === 'loesung');
    $('sheetInfo').textContent = t.title + ' · ' + UB.LEVEL_NAMES[state.level] + ' · ' + (state.variant ? 'Zusatzblatt ' + state.variant : 'Blatt ' + state.blatt);
    setMsg(t.review ? 'Entwurf: Dieses Thema ist noch nicht freigegeben. Bitte in der Lehrer-Ansicht prüfen.' :
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
    const w = sheet.offsetWidth, h = sheet.offsetHeight;
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
    if (!t) return;
    $('printArea').innerHTML = buildSheet(t, solution);
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
    if (!t || !t.klassen.includes(state.klasse)) { state.topic = null; history.replaceState(null, '', location.pathname + location.search); }
    render();
  }));
  document.querySelectorAll('#levelSeg button').forEach(b => b.addEventListener('click', () => { state.level = +b.dataset.level; render(); }));
  document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => { state.view = b.dataset.view; render(); }));
  $('variantBtn').addEventListener('click', () => { state.variant = String(100000 + Math.floor(Math.random() * 900000)); state.blatt = null; state.view = 'blatt'; render(); });
  window.addEventListener('hashchange', () => { readHash(); render(); });

  readHash();
  render();
})();
