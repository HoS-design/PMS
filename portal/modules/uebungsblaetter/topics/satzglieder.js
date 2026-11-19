/* Satzglieder – 1. und 2. Klasse (ENTWURF: vor der Freigabe Pool prüfen lassen)
   Begriffe nach „Deutschstunde 1“: Subjekt (S), Prädikat (P), Objekt im 3. Fall (O3),
   Objekt im 4. Fall (O4), Zeit-/Orts-/Art-/Begründungsergänzung (ZE, OE, AE, BE).
   Nur eindeutige Sätze: keine Präpositionalobjekte, kein „sein“, keine Attribute
   als eigene Glieder, einteilige Prädikate. Format: „Teil|Rolle“, getrennt durch „ / “. */
(function () {
  const { esc, lines, sol, blank, table } = UB;

  const ROLES = {
    S: { frage: 'Wer oder was?', de: 'Subjekt', kurz: 'S', fach: 'Subjekt' },
    P: { frage: 'Was tut …?', de: 'Prädikat', kurz: 'P', fach: 'Prädikat' },
    O3: { frage: 'Wem?', de: 'Objekt im 3. Fall', kurz: 'O3', fach: 'Dativobjekt' },
    O4: { frage: 'Wen oder was?', de: 'Objekt im 4. Fall', kurz: 'O4', fach: 'Akkusativobjekt' },
    ZE: { frage: 'Wann?', de: 'Zeitergänzung', kurz: 'ZE', fach: 'Temporaladverbial' },
    OE: { frage: 'Wo?', de: 'Ortsergänzung', kurz: 'OE', fach: 'Lokaladverbial' },
    AE: { frage: 'Wie?', de: 'Artergänzung', kurz: 'AE', fach: 'Modaladverbial' },
    BE: { frage: 'Warum?', de: 'Begründungsergänzung', kurz: 'BE', fach: 'Kausaladverbial' }
  };

  const POOL = [
    'Lena|S / schenkt|P / ihrer Oma|O3 / einen Blumenstrauß|O4',
    'Am Montag|ZE / schreibt|P / die Klasse|S / einen Test|O4',
    'Der Hund|S / bringt|P / seinem Besitzer|O3 / den Ball|O4',
    'Im Garten|OE / spielen|P / die Kinder|S / Fußball|O4',
    'Max|S / hilft|P / seinem Bruder|O3',
    'Die Lehrerin|S / erklärt|P / den Schülern|O3 / die Aufgabe|O4',
    'Gestern|ZE / kaufte|P / Mia|S / ein neues Fahrrad|O4',
    'Mein Opa|S / erzählt|P / spannende Geschichten|O4',
    'Der Bäcker|S / verkauft|P / frisches Brot|O4',
    'Am Abend|ZE / las|P / Paul|S / seiner Schwester|O3 / ein Märchen|O4',
    'Die Katze|S / schläft|P / auf dem Sofa|OE',
    'Leise|AE / öffnete|P / Emma|S / die Tür|O4',
    'Die Mannschaft|S / gewann|P / das Spiel|O4',
    'Im Sommer|ZE / schwimmen|P / wir|S / im See|OE',
    'Der Postbote|S / bringt|P / uns|O3 / ein Paket|O4',
    'Sorgfältig|AE / malt|P / Sophie|S / ein Bild|O4',
    'Nach der Schule|ZE / treffen|P / die Freunde|S / ihren Trainer|O4',
    'Wegen der Kälte|BE / trägt|P / Anna|S / eine Mütze|O4',
    'Jonas|S / gibt|P / dem Lehrer|O3 / sein Heft|O4',
    'Im Wald|OE / sammeln|P / die Kinder|S / Pilze|O4',
    'Die Großmutter|S / strickt|P / ihrem Enkel|O3 / einen Schal|O4',
    'Morgen|ZE / besucht|P / unsere Klasse|S / das Museum|O4',
    'Wegen des Regens|BE / spielten|P / wir|S / in der Turnhalle|OE',
    'Am Wochenende|ZE / besuchten|P / wir|S / unsere Großmutter|O4',
    'Der Trainer|S / lobt|P / die Spielerinnen|O4',
    'Im Zoo|OE / füttert|P / der Tierpfleger|S / die Affen|O4',
    'Aufmerksam|AE / hört|P / die Klasse|S / dem Vortrag|O3 / zu|P'
  ].filter(s => !s.includes('zu|P')) // zweiteilige Prädikate erst später
    .map(s => s.split(' / ').map(p => { const [text, role] = p.split('|'); return { text, role }; }));

  const sentence = (parts) => { const t = parts.map(p => p.text).join(' '); return t + '.'; };
  const withBars = (parts) => parts.map(p => esc(p.text)).join(' <b class="bar">|</b> ') + '.';
  const levelRoles = { 1: ['S', 'P'], 2: ['S', 'P', 'O3', 'O4'], 3: ['S', 'P', 'O3', 'O4', 'ZE', 'OE', 'AE', 'BE'] };
  const pickPool = (level) => POOL.filter(parts => parts.every(p => levelRoles[level === 1 ? 2 : level].includes(p.role)) || level === 3);

  function taskAbgrenzen(level, rng) {
    const its = rng.fresh(pickPool(level), 4, sentence);
    return {
      title: 'Grenze die Satzglieder ab.',
      instr: 'Mach die Verschiebeprobe. Zeichne Striche zwischen die Satzglieder und schreibe die Anzahl ins Kästchen.',
      body: its.map(p => '<div class="item roomy">' + esc(sentence(p)) + ' <span class="numbox"></span></div>').join(''),
      sol: its.map(p => '<div class="item">' + sol(withBars(p)) + ' <span class="hint">(' + p.length + ' Satzglieder)</span></div>').join('')
    };
  }

  function taskBestimmen(level, rng) {
    const its = rng.fresh(pickPool(level), 4, sentence);
    const label = (r) => level === 1 ? (r === 'S' || r === 'P' ? ROLES[r].de : '–') : (level === 2 ? ROLES[r].kurz : ROLES[r].fach);
    const instr = level === 1 ? 'Die Satzglieder sind schon getrennt. Schreibe S (Subjekt) oder P (Prädikat) darunter. Frage: Wer oder was? – Was tut …?' :
      (level === 2 ? 'Schreibe die Abkürzung unter jedes Satzglied: S, P, O3 oder O4.' : 'Schreibe den Fachbegriff unter jedes Satzglied (z. B. Subjekt, Dativobjekt, Temporaladverbial).');
    const row = (parts, filled) => '<div class="sg-row">' + parts.map(p => '<span class="sg"><span class="sg-t">' + esc(p.text) + '</span><span class="sg-l">' +
      (filled ? ((level === 1 && !['S', 'P'].includes(p.role)) ? '' : sol(esc(label(p.role)))) : '&nbsp;') + '</span></span>').join('') + '<span class="sg-dot">.</span></div>';
    return {
      title: 'Bestimme die Satzglieder.',
      instr,
      body: its.map(p => row(p, false)).join(''),
      sol: its.map(p => row(p, true)).join('')
    };
  }

  function taskUmstellen(level, rng) {
    const its = rng.fresh(pickPool(level).filter(p => p.length >= 3), 2, sentence).map(p => {
      const start = rng.pick(p.filter(x => x.role !== 'P' && x !== p[0]));
      return { p, start };
    });
    const capFirst = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return {
      title: 'Stelle die Sätze um.',
      instr: 'Beginne mit dem unterstrichenen Satzglied. Das Prädikat bleibt an zweiter Stelle.',
      body: its.map(x => '<div class="item">' + x.p.map(q => q === x.start ? '<u><b>' + esc(q.text) + '</b></u>' : esc(q.text)).join(' ') + '.</div>' + lines(1)).join(''),
      sol: its.map(x => {
        const subj = x.p.find(q => q.role === 'S');
        // Nach dem Prädikat folgt zuerst das Subjekt, dann die übrigen Satzglieder in alter Reihenfolge
        const parts = [x.start, x.p.find(q => q.role === 'P')].concat(subj && subj !== x.start ? [subj] : [], x.p.filter(q => q !== x.start && q.role !== 'P' && q !== subj));
        const txt = parts.map((q, i) => i === 0 ? capFirst(q.text) : (q === x.p[0] && isLowerable(q.text) ? lower(q.text) : q.text)).join(' ') + '.';
        return '<div class="item">' + sol(esc(txt)) + '</div>';
      }).join('')
    };
  }
  // Satzanfänge wie „Am Montag“, „Leise“, „Gestern“ werden mitten im Satz klein; Nomen/Namen/Artikel+Nomen bleiben
  const LOWER_START = ['Am', 'Im', 'Nach', 'Wegen', 'Gestern', 'Morgen', 'Leise', 'Sorgfältig', 'Die', 'Der', 'Das', 'Mein', 'Unsere'];
  function isLowerable(t) { return LOWER_START.includes(t.split(' ')[0]); }
  function lower(t) { return t.charAt(0).toLowerCase() + t.slice(1); }

  function taskBauplan(rng) {
    const p = rng.pick(POOL.filter(x => x.length >= 4));
    const plan = p.map(x => ROLES[x.role].kurz === 'P' ? 'P' : ROLES[x.role].frage).join(' – ');
    return {
      title: 'Satzbauplan',
      instr: 'Schreibe einen eigenen Satz nach diesem Bauplan.',
      body: '<div class="item"><b>' + esc(plan) + '</b></div>' + lines(2),
      sol: '<div class="item">Eigene Lösung. Beispiel: ' + sol(esc(sentence(p))) + '</div>'
    };
  }

  UB.register({
    id: 'satzglieder',
    merk: '<b>Satzglieder</b> findest du mit der Verschiebeprobe: Was beim Umstellen zusammenbleibt, ist ein Satzglied. <b>Subjekt</b>: Wer oder was? <b>Prädikat</b>: Was tut …? (steht im Aussagesatz an 2. Stelle). <b>Objekt im 3. Fall</b> (Dativobjekt): Wem? <b>Objekt im 4. Fall</b> (Akkusativobjekt): Wen oder was? <b>Zeitergänzung</b>: Wann? Wie lange? <b>Ortsergänzung</b>: Wo? Wohin? Woher? <b>Art-und-Weise-Ergänzung</b>: Wie? <b>Begründungsergänzung</b>: Warum?',
    title: 'Satzglieder',
    area: 'sprache',
    klassen: [1, 2],
    img: 'MiniHoS_Forschen_Lupe',
    review: true,
    levels: {
      1: { ichkann: ['Du kannst Satzglieder mit der Verschiebeprobe abgrenzen.', 'Du kannst Subjekt und Prädikat bestimmen.'] },
      2: { ichkann: ['Du kannst Subjekt, Prädikat, Objekt im 3. Fall und Objekt im 4. Fall bestimmen.', 'Du kannst Sätze umstellen.'] },
      3: { ichkann: ['Du kannst alle Satzglieder mit Fachbegriffen bestimmen.', 'Du kannst Sätze nach einem Satzbauplan bilden.'] }
    },
    build(level, rng) {
      if (level === 1) return [taskAbgrenzen(1, rng), taskBestimmen(1, rng)];
      if (level === 2) return [taskAbgrenzen(2, rng), taskBestimmen(2, rng), taskUmstellen(2, rng)];
      return [taskBestimmen(3, rng), taskUmstellen(3, rng), taskBauplan(rng)];
    },
    pool() {
      return table(['Satz mit Satzgliedern', 'Bestimmung'], POOL.map(p => [withBars(p), p.map(x => ROLES[x.role].kurz).join(' – ')])) +
        '<p class="hint">Abkürzungen: ' + Object.keys(ROLES).map(k => ROLES[k].kurz + ' = ' + ROLES[k].de + ' (' + ROLES[k].fach + ')').join(', ') + '</p>';
    }
  });
})();
