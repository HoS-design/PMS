/* Zeitformen – 1. und 2. Klasse
   Alle Formen werden aus einer geprüften Verbtabelle gebildet (3. Person Singular).
   Satzergänzungen sind so gewählt, dass sie in allen Zeitformen passen
   (keine trennbaren Verben). */
(function () {
  const { esc, lines, sol, blank, table, box } = UB;

  const TENSES = {
    pr: { de: 'Gegenwart', fach: 'Präsens' },
    pt: { de: 'Mitvergangenheit', fach: 'Präteritum' },
    pf: { de: 'Vergangenheit', fach: 'Perfekt' },
    pq: { de: 'Vorvergangenheit', fach: 'Plusquamperfekt' },
    f1: { de: 'Zukunft', fach: 'Futur I' },
    f2: { de: 'vollendete Zukunft', fach: 'Futur II' }
  };
  const LEVEL_TENSES = { 1: ['pr', 'pt', 'pf'], 2: ['pr', 'pt', 'pf', 'f1'], 3: ['pr', 'pt', 'pf', 'pq', 'f1', 'f2'] };
  const tname = (t, level) => level === 1 ? TENSES[t].de : (level === 2 ? TENSES[t].de + ' (' + TENSES[t].fach + ')' : TENSES[t].fach);

  // inf, pr (er/sie), pt, p2 (Partizip II), aux (hat/ist), rest = passende Satzergänzungen
  const VERBS = [
    { inf: 'laufen', pr: 'läuft', pt: 'lief', p2: 'gelaufen', aux: 'ist', rest: ['zur Haltestelle', 'durch den Park'] },
    { inf: 'rennen', pr: 'rennt', pt: 'rannte', p2: 'gerannt', aux: 'ist', rest: ['zum Bus', 'durch den Garten'] },
    { inf: 'rufen', pr: 'ruft', pt: 'rief', p2: 'gerufen', aux: 'hat', rest: ['laut nach dem Hund', 'die Feuerwehr'] },
    { inf: 'schreiben', pr: 'schreibt', pt: 'schrieb', p2: 'geschrieben', aux: 'hat', rest: ['einen Brief', 'eine Nachricht'] },
    { inf: 'lesen', pr: 'liest', pt: 'las', p2: 'gelesen', aux: 'hat', rest: ['ein spannendes Buch', 'die Zeitung'] },
    { inf: 'fahren', pr: 'fährt', pt: 'fuhr', p2: 'gefahren', aux: 'ist', rest: ['mit dem Rad zur Schule', 'nach Graz'] },
    { inf: 'essen', pr: 'isst', pt: 'aß', p2: 'gegessen', aux: 'hat', rest: ['einen Apfel', 'eine Semmel'] },
    { inf: 'trinken', pr: 'trinkt', pt: 'trank', p2: 'getrunken', aux: 'hat', rest: ['ein Glas Milch', 'einen Tee'] },
    { inf: 'schwimmen', pr: 'schwimmt', pt: 'schwamm', p2: 'geschwommen', aux: 'ist', rest: ['im See', 'ans Ufer'] },
    { inf: 'finden', pr: 'findet', pt: 'fand', p2: 'gefunden', aux: 'hat', rest: ['den Schlüssel', 'eine Münze'] },
    { inf: 'spielen', pr: 'spielt', pt: 'spielte', p2: 'gespielt', aux: 'hat', rest: ['mit dem Ball', 'Fußball'] },
    { inf: 'kaufen', pr: 'kauft', pt: 'kaufte', p2: 'gekauft', aux: 'hat', rest: ['ein Geschenk', 'frisches Brot'] },
    { inf: 'malen', pr: 'malt', pt: 'malte', p2: 'gemalt', aux: 'hat', rest: ['ein Bild', 'einen Drachen'] },
    { inf: 'singen', pr: 'singt', pt: 'sang', p2: 'gesungen', aux: 'hat', rest: ['ein Lied', 'im Chor'] },
    { inf: 'springen', pr: 'springt', pt: 'sprang', p2: 'gesprungen', aux: 'ist', rest: ['über den Bach', 'ins Wasser'] },
    { inf: 'fliegen', pr: 'fliegt', pt: 'flog', p2: 'geflogen', aux: 'ist', rest: ['nach Wien', 'in den Urlaub'] },
    { inf: 'helfen', pr: 'hilft', pt: 'half', p2: 'geholfen', aux: 'hat', rest: ['der Nachbarin', 'einem Freund'] },
    { inf: 'bauen', pr: 'baut', pt: 'baute', p2: 'gebaut', aux: 'hat', rest: ['eine Sandburg', 'einen Schneemann'] },
    { inf: 'schlafen', pr: 'schläft', pt: 'schlief', p2: 'geschlafen', aux: 'hat', rest: ['lange', 'im Zelt'] },
    { inf: 'kommen', pr: 'kommt', pt: 'kam', p2: 'gekommen', aux: 'ist', rest: ['zu spät', 'pünktlich'] },
    { inf: 'gehen', pr: 'geht', pt: 'ging', p2: 'gegangen', aux: 'ist', rest: ['in die Bibliothek', 'nach Hause'] },
    { inf: 'sehen', pr: 'sieht', pt: 'sah', p2: 'gesehen', aux: 'hat', rest: ['einen Film', 'den Regenbogen'] },
    { inf: 'werfen', pr: 'wirft', pt: 'warf', p2: 'geworfen', aux: 'hat', rest: ['den Ball', 'einen Schneeball'] },
    { inf: 'tragen', pr: 'trägt', pt: 'trug', p2: 'getragen', aux: 'hat', rest: ['die Schultasche', 'einen Korb'] },
    { inf: 'lachen', pr: 'lacht', pt: 'lachte', p2: 'gelacht', aux: 'hat', rest: ['laut', 'über den Witz'] },
    { inf: 'suchen', pr: 'sucht', pt: 'suchte', p2: 'gesucht', aux: 'hat', rest: ['das Heft', 'den Hamster'] },
    { inf: 'gewinnen', pr: 'gewinnt', pt: 'gewann', p2: 'gewonnen', aux: 'hat', rest: ['das Spiel', 'einen Preis'] }
  ];

  function form(v, t, name, rest) {
    const sein = v.aux === 'ist';
    switch (t) {
      case 'pr': return name + ' ' + v.pr + ' ' + rest + '.';
      case 'pt': return name + ' ' + v.pt + ' ' + rest + '.';
      case 'pf': return name + ' ' + (sein ? 'ist' : 'hat') + ' ' + rest + ' ' + v.p2 + '.';
      case 'pq': return name + ' ' + (sein ? 'war' : 'hatte') + ' ' + rest + ' ' + v.p2 + '.';
      case 'f1': return name + ' wird ' + rest + ' ' + v.inf + '.';
      case 'f2': return name + ' wird ' + rest + ' ' + v.p2 + ' ' + (sein ? 'sein' : 'haben') + '.';
    }
  }

  function items(rng, n) {
    return rng.fresh(VERBS, n, v => v.inf).map(v => ({ v, name: rng.pick(UB.NAMES), rest: rng.pick(v.rest) }));
  }

  function taskBestimmen(level, rng) {
    const ts = LEVEL_TENSES[level];
    const its = items(rng, level === 1 ? 6 : 6).map((it, i) => Object.assign(it, { t: ts[i % ts.length] }));
    const shuffled = rng.shuffle(its);
    const choices = ts.map(t => tname(t, level));
    return {
      title: 'Welche Zeitform ist das?',
      instr: level === 1 ? 'Kreuze die richtige Zeitform an.' : 'Schreibe die Zeitform auf die Linie.',
      body: level === 1
        ? table(['Satz'].concat(choices), shuffled.map(it => [esc(form(it.v, it.t, it.name, it.rest))].concat(choices.map(() => box))), 'center-cols')
        : table(['Satz', 'Zeitform'], shuffled.map(it => [esc(form(it.v, it.t, it.name, it.rest)), blank(9)])),
      sol: level === 1
        ? table(['Satz'].concat(choices), shuffled.map(it => [esc(form(it.v, it.t, it.name, it.rest))].concat(ts.map(t => t === it.t ? sol('✗') : ''))), 'center-cols')
        : table(['Satz', 'Zeitform'], shuffled.map(it => [esc(form(it.v, it.t, it.name, it.rest)), sol(esc(tname(it.t, level)))]))
    };
  }

  function taskUmformen(level, rng) {
    const ts = LEVEL_TENSES[level].filter(t => t !== 'pr');
    const its = items(rng, 3).map(it => Object.assign(it, { t: rng.pick(ts) }));
    return {
      title: 'Setze in die angegebene Zeitform.',
      instr: 'Schreibe den ganzen Satz neu.',
      body: its.map(it => '<div class="item"><div>' + esc(form(it.v, 'pr', it.name, it.rest)) + ' <span class="hint">→ ' + esc(tname(it.t, level)) + '</span></div>' + lines(1) + '</div>').join(''),
      sol: its.map(it => '<div class="item"><div>' + esc(form(it.v, 'pr', it.name, it.rest)) + ' <span class="hint">→ ' + esc(tname(it.t, level)) + '</span></div><div>' + sol(esc(form(it.v, it.t, it.name, it.rest))) + '</div></div>').join('')
    };
  }

  function taskEinsetzen(level, rng) {
    // Stufe 1: Verbform in der Mitvergangenheit einsetzen (Auswahl vorgegeben)
    const its = items(rng, 5);
    const forms = rng.shuffle(its.map(it => it.v.pt));
    return {
      title: 'Erzähle in der Mitvergangenheit.',
      instr: 'Setze die passende Form aus dem Kasten ein.',
      body: '<div class="wordbox">' + forms.map(esc).join(' · ') + '</div>' +
        its.map(it => '<div class="item">' + esc(it.name) + ' ' + blank(6) + ' ' + esc(it.rest) + '. <span class="hint">(' + esc(it.v.inf) + ')</span></div>').join(''),
      sol: its.map(it => '<div class="item">' + esc(it.name) + ' ' + sol(esc(it.v.pt)) + ' ' + esc(it.rest) + '.</div>').join('')
    };
  }

  function taskStammformen(level, rng) {
    const vs = rng.fresh(VERBS, 5, v => v.inf);
    const head = level === 3 ? ['Infinitiv', 'Präteritum', 'Partizip II'] : ['Nennform', 'Mitvergangenheit', '2. Mittelwort'];
    // Stufe 2: Nennform vorgegeben; Stufe 3: eine zufällige Spalte vorgegeben
    const given = vs.map(() => level === 3 ? rng.int(3) : 0);
    const cells = (v) => [v.inf, v.pt, (v.aux === 'ist' ? 'ist ' : 'hat ') + v.p2];
    return {
      title: 'Die Stammformen',
      instr: level === 3 ? 'Ergänze die fehlenden Stammformen.' : 'Ergänze Mitvergangenheit und 2. Mittelwort (mit hat/ist).',
      body: table(head, vs.map((v, i) => cells(v).map((c, k) => k === given[i] ? '<b>' + esc(c) + '</b>' : ''))),
      sol: table(head, vs.map((v, i) => cells(v).map((c, k) => k === given[i] ? '<b>' + esc(c) + '</b>' : sol(esc(c)))))
    };
  }

  function taskSelbst(level, rng) {
    const ex = items(rng, 2);
    return {
      title: 'Jetzt bist du dran.',
      instr: 'Schreibe je einen eigenen Satz im Plusquamperfekt und im Futur II.',
      body: '<div class="item"><span class="hint">Plusquamperfekt:</span></div>' + lines(1) + '<div class="item"><span class="hint">Futur II:</span></div>' + lines(1),
      sol: '<div class="item">Eigene Lösung. Beispiele:</div><div class="item">' + sol(esc(form(ex[0].v, 'pq', ex[0].name, ex[0].rest))) + '</div><div class="item">' + sol(esc(form(ex[1].v, 'f2', ex[1].name, ex[1].rest))) + '</div>'
    };
  }

  UB.register({
    id: 'zeitformen',
    merk: '<b>Gegenwart</b> (Präsens): ich spiele. <b>Mitvergangenheit</b> (Präteritum): ich spielte, ich ging – Erzählzeit. <b>Vergangenheit</b> (Perfekt): ich habe gespielt, ich bin gegangen – mit haben/sein + 2. Mittelwort. <b>Vorvergangenheit</b> (Plusquamperfekt): ich hatte gespielt, ich war gegangen – geschah vor etwas anderem Vergangenem. <b>Zukunft</b> (Futur I): ich werde spielen. <b>Vollendete Zukunft</b> (Futur II): ich werde gespielt haben. <b>Stammformen</b>: Nennform – Mitvergangenheit – 2. Mittelwort (gehen – ging – gegangen).',
    title: 'Zeitformen',
    area: 'sprache',
    klassen: [1, 2],
    img: 'MiniHoS_Erklaeren_Tafel-Idee',
    levels: {
      1: { ichkann: ['Du kannst Gegenwart, Mitvergangenheit und Vergangenheit unterscheiden.', 'Du kannst Verben in der Mitvergangenheit einsetzen.'] },
      2: { ichkann: ['Du kennst vier Zeitformen und ihre Namen.', 'Du kannst Sätze in eine andere Zeitform setzen.', 'Du kannst die Stammformen von Verben bilden.'] },
      3: { ichkann: ['Du kennst alle sechs Zeitformen mit Fachbegriffen.', 'Du kannst Sätze in jede Zeitform setzen.', 'Du kannst eigene Sätze im Plusquamperfekt und Futur II bilden.'] }
    },
    build(level, rng) {
      if (level === 1) return [taskBestimmen(1, rng), taskEinsetzen(1, rng), taskUmformen(1, rng)];
      if (level === 2) return [taskBestimmen(2, rng), taskUmformen(2, rng), taskStammformen(2, rng)];
      // Stufe 3: abwechselnd Stammformen oder eigene Sätze, damit das Blatt auf eine Seite passt
      return [taskBestimmen(3, rng), taskUmformen(3, rng), rng.next() < 0.5 ? taskStammformen(3, rng) : taskSelbst(3, rng)];
    },
    pool() {
      return table(['Infinitiv', 'Präsens', 'Präteritum', 'Perfekt', 'Satzergänzungen'],
        VERBS.map(v => [esc(v.inf), esc(v.pr), esc(v.pt), esc((v.aux === 'ist' ? 'ist ' : 'hat ') + v.p2), esc(v.rest.join(' / '))])) +
        '<p class="hint">Beispiel für alle Formen: ' + Object.keys(TENSES).map(t => esc(TENSES[t].fach) + ': ' + esc(form(VERBS[0], t, 'Lena', VERBS[0].rest[0]))).join('<br>') + '</p>';
    }
  });
})();
