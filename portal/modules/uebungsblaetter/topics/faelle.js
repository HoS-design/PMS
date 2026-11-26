/* Die vier Fälle – 1. und 2. Klasse
   Pool: fertige Sätze, der markierte Satzteil steht in [eckigen Klammern],
   c = Fall (1–4), nom = Grundform (1. Fall) für Einsetzaufgaben. */
(function () {
  const { esc, lines, sol, blank, table, box } = UB;

  const CASES = {
    1: { frage: 'Wer oder was?', de: '1. Fall', fach: 'Nominativ' },
    2: { frage: 'Wessen?', de: '2. Fall', fach: 'Genitiv' },
    3: { frage: 'Wem?', de: '3. Fall', fach: 'Dativ' },
    4: { frage: 'Wen oder was?', de: '4. Fall', fach: 'Akkusativ' }
  };
  const cname = (c, level) => level === 1 ? CASES[c].frage : (level === 2 ? CASES[c].de : CASES[c].fach);

  const SENTENCES = [
    { s: '[Der Hund] bellt laut.', c: 1, nom: 'der Hund' },
    { s: 'Ich sehe [den Hund] im Garten.', c: 4, nom: 'der Hund' },
    { s: 'Die Leine [des Hundes] ist rot.', c: 2, nom: 'der Hund' },
    { s: 'Lena gibt [dem Hund] einen Knochen.', c: 3, nom: 'der Hund' },
    { s: '[Meine Schwester] liest gern Comics.', c: 1, nom: 'meine Schwester' },
    { s: 'Wir besuchen [unsere Großmutter].', c: 4, nom: 'unsere Großmutter' },
    { s: 'Das Fahrrad [meines Bruders] ist neu.', c: 2, nom: 'mein Bruder' },
    { s: 'Max hilft [seinem Freund].', c: 3, nom: 'sein Freund' },
    { s: '[Die Lehrerin] erklärt die Aufgabe.', c: 1, nom: 'die Lehrerin' },
    { s: 'Die Kinder hören [der Lehrerin] zu.', c: 3, nom: 'die Lehrerin' },
    { s: 'Ich kaufe [einen Apfel].', c: 4, nom: 'ein Apfel' },
    { s: 'Der Name [der Katze] ist Mimi.', c: 2, nom: 'die Katze' },
    { s: '[Das Baby] schläft tief.', c: 1, nom: 'das Baby' },
    { s: 'Paul schenkt [seiner Mutter] Blumen.', c: 3, nom: 'seine Mutter' },
    { s: 'Mia sucht [ihren Schlüssel].', c: 4, nom: 'ihr Schlüssel' },
    { s: 'Das Dach [des Hauses] ist kaputt.', c: 2, nom: 'das Haus' },
    { s: '[Der Bus] kommt zu spät.', c: 1, nom: 'der Bus' },
    { s: 'Das Geschenk gefällt [meinem Opa].', c: 3, nom: 'mein Opa' },
    { s: 'Wir bauen [einen Schneemann].', c: 4, nom: 'ein Schneemann' },
    { s: 'Die Farbe [des Balls] ist blau.', c: 2, nom: 'der Ball' },
    { s: '[Unser Nachbar] mäht den Rasen.', c: 1, nom: 'unser Nachbar' },
    { s: 'Der Trainer gratuliert [der Mannschaft].', c: 3, nom: 'die Mannschaft' },
    { s: 'Emma füttert [die Hasen].', c: 4, nom: 'die Hasen' },
    { s: 'Ben ruft [seinen Hund].', c: 4, nom: 'sein Hund' },
    { s: 'Der Pullover gehört [meiner Schwester].', c: 3, nom: 'meine Schwester' },
    { s: 'Die Seiten [des Buches] sind zerknittert.', c: 2, nom: 'das Buch' },
    { s: '[Die Sonne] scheint hell.', c: 1, nom: 'die Sonne' },
    { s: 'Der Arzt untersucht [das Kind].', c: 4, nom: 'das Kind' },
    { s: 'Die Mütze [des Mädchens] liegt im Schnee.', c: 2, nom: 'das Mädchen' },
    { s: 'Wir danken [dem Busfahrer].', c: 3, nom: 'der Busfahrer' },
    { s: '[Ein Vogel] singt auf dem Dach.', c: 1, nom: 'ein Vogel' },
    { s: 'Opa liest [die Zeitung].', c: 4, nom: 'die Zeitung' }
  ];

  // Deklination (Einzahl): 1., 2., 3., 4. Fall
  const NOUNS = [
    ['der Hund', 'des Hundes', 'dem Hund', 'den Hund'],
    ['die Katze', 'der Katze', 'der Katze', 'die Katze'],
    ['das Kind', 'des Kindes', 'dem Kind', 'das Kind'],
    ['der Lehrer', 'des Lehrers', 'dem Lehrer', 'den Lehrer'],
    ['die Schule', 'der Schule', 'der Schule', 'die Schule'],
    ['das Fahrrad', 'des Fahrrads', 'dem Fahrrad', 'das Fahrrad'],
    ['der Baum', 'des Baumes', 'dem Baum', 'den Baum'],
    ['die Blume', 'der Blume', 'der Blume', 'die Blume'],
    ['das Haus', 'des Hauses', 'dem Haus', 'das Haus'],
    ['der Freund', 'des Freundes', 'dem Freund', 'den Freund'],
    ['die Tasche', 'der Tasche', 'der Tasche', 'die Tasche'],
    ['das Buch', 'des Buches', 'dem Buch', 'das Buch'],
    ['der Garten', 'des Gartens', 'dem Garten', 'den Garten'],
    ['ein Apfel', 'eines Apfels', 'einem Apfel', 'einen Apfel'],
    ['eine Jacke', 'einer Jacke', 'einer Jacke', 'eine Jacke'],
    ['ein Heft', 'eines Heftes', 'einem Heft', 'ein Heft']
  ];

  // Stufe 4: Präpositionen, Wechselpräpositionen, Begleiter + Adjektiv
  const SENT4 = [
    { s: 'Wegen [des starken Regens] fällt der Ausflug aus.', c: 2, nom: 'der starke Regen' },
    { s: 'Trotz [der großen Hitze] spielen die Kinder Fußball.', c: 2, nom: 'die große Hitze' },
    { s: 'Wir gehen mit [unserem kleinen Bruder] ins Kino.', c: 3, nom: 'unser kleiner Bruder' },
    { s: 'Lena läuft durch [den dunklen Wald].', c: 4, nom: 'der dunkle Wald' },
    { s: 'Die Katze springt auf [den hohen Schrank].', c: 4, nom: 'der hohe Schrank' },
    { s: 'Die Katze schläft auf [dem hohen Schrank].', c: 3, nom: 'der hohe Schrank' },
    { s: 'Das ist das Fahrrad [meiner älteren Schwester].', c: 2, nom: 'meine ältere Schwester' },
    { s: 'Der Lehrer erklärt [den neuen Schülern] die Hausordnung.', c: 3, nom: 'die neuen Schüler' },
    { s: '[Der freundliche Busfahrer] wartet auf uns.', c: 1, nom: 'der freundliche Busfahrer' },
    { s: 'Wir bedanken uns bei [der netten Nachbarin].', c: 3, nom: 'die nette Nachbarin' },
    { s: 'Ohne [einen warmen Mantel] frierst du.', c: 4, nom: 'ein warmer Mantel' },
    { s: 'Während [des langen Winters] bleibt der Bär in seiner Höhle.', c: 2, nom: 'der lange Winter' },
    { s: 'Max stellt die Vase auf [den runden Tisch].', c: 4, nom: 'der runde Tisch' },
    { s: 'Die Vase steht auf [dem runden Tisch].', c: 3, nom: 'der runde Tisch' },
    { s: 'Mia schreibt [ihrer besten Freundin] eine Karte.', c: 3, nom: 'ihre beste Freundin' },
    { s: 'Ich kenne [den neuen Trainer] noch nicht.', c: 4, nom: 'der neue Trainer' },
    { s: '[Die kleinen Kinder] bauen eine Sandburg.', c: 1, nom: 'die kleinen Kinder' },
    { s: 'Statt [eines teuren Geschenks] bastelt Ben eine Karte.', c: 2, nom: 'ein teures Geschenk' },
    { s: 'Die Kinder laufen um [das alte Haus].', c: 4, nom: 'das alte Haus' },
    { s: 'Gegen [den starken Wind] kommt der Radfahrer kaum an.', c: 4, nom: 'der starke Wind' },
    { s: 'Nach [dem spannenden Spiel] feiern die Fans.', c: 3, nom: 'das spannende Spiel' },
    { s: 'Die Ergebnisse [der letzten Schularbeit] sind gut.', c: 2, nom: 'die letzte Schularbeit' },
    { s: 'Das Bild hängt an [der weißen Wand].', c: 3, nom: 'die weiße Wand' },
    { s: 'Paul hängt das Bild an [die weiße Wand].', c: 4, nom: 'die weiße Wand' },
    { s: '[Ein großer Hund] bellt am Gartenzaun.', c: 1, nom: 'ein großer Hund' },
    { s: 'Wir fahren mit [dem neuen Zug] nach Wien.', c: 3, nom: 'der neue Zug' }
  ];
  const FEHLER4 = [
    ['Wegen dem Regen bleiben wir zu Hause.', 'Wegen des Regens bleiben wir zu Hause.'],
    ['Trotz dem Lärm kann ich schlafen.', 'Trotz des Lärms kann ich schlafen.'],
    ['Ich helfe den Mann beim Tragen.', 'Ich helfe dem Mann beim Tragen.'],
    ['Ich frage dem Lehrer um Rat.', 'Ich frage den Lehrer um Rat.'],
    ['Der Pullover gehört meinen Bruder.', 'Der Pullover gehört meinem Bruder.'],
    ['Ich gratuliere dich zum Geburtstag.', 'Ich gratuliere dir zum Geburtstag.'],
    ['Lena ruft ihrem Hund.', 'Lena ruft ihren Hund.'],
    ['Während dem Unterricht ist das Handy aus.', 'Während des Unterrichts ist das Handy aus.'],
    ['Mit meinen besten Freund fahre ich ans Meer.', 'Mit meinem besten Freund fahre ich ans Meer.'],
    ['Ich lege das Buch auf dem Tisch.', 'Ich lege das Buch auf den Tisch.'],
    ['Das Bild hängt an die Wand.', 'Das Bild hängt an der Wand.'],
    ['Wir danken den Busfahrer.', 'Wir danken dem Busfahrer.']
  ];
  const ADJ4 = [
    ['der kleine Hund', 'des kleinen Hundes', 'dem kleinen Hund', 'den kleinen Hund'],
    ['die alte Frau', 'der alten Frau', 'der alten Frau', 'die alte Frau'],
    ['das neue Buch', 'des neuen Buches', 'dem neuen Buch', 'das neue Buch'],
    ['ein großer Baum', 'eines großen Baumes', 'einem großen Baum', 'einen großen Baum'],
    ['eine rote Jacke', 'einer roten Jacke', 'einer roten Jacke', 'eine rote Jacke'],
    ['ein kleines Kind', 'eines kleinen Kindes', 'einem kleinen Kind', 'ein kleines Kind'],
    ['die netten Kinder', 'der netten Kinder', 'den netten Kindern', 'die netten Kinder'],
    ['mein bester Freund', 'meines besten Freundes', 'meinem besten Freund', 'meinen besten Freund']
  ];

  const parse = (s) => {
    const m = s.match(/^(.*)\[(.+?)\](.*)$/);
    return { before: m[1], mark: m[2], after: m[3] };
  };
  const marked = (s) => { const p = parse(s); return esc(p.before) + '<u><b>' + esc(p.mark) + '</b></u>' + esc(p.after); };
  const gapped = (s, w) => { const p = parse(s); return esc(p.before) + blank(w || 8) + esc(p.after); };
  const plain = (s) => s.replace(/[\[\]]/g, '');

  // mindestens ein Satz je Fall (soweit die Stufe sie verwendet)
  function pickSentences(rng, n, cases) {
    const pool = SENTENCES.filter(x => cases.includes(x.c));
    const first = [];
    cases.forEach(c => { const x = rng.fresh(pool.filter(y => y.c === c), 1, y => y.s)[0]; if (x && !first.includes(x)) first.push(x); });
    const rest = rng.fresh(pool, n - first.length, y => y.s).filter(x => !first.includes(x));
    const all = first.concat(rest);
    all.forEach(x => rng.used.add(x.s));
    return rng.shuffle(all);
  }

  function taskBestimmen(level, rng) {
    const cases = [1, 2, 3, 4];
    const its = level === 4 ? pick4(rng, 6) : pickSentences(rng, 8, cases);
    const head = level === 1 ? 'Frage' : (level === 2 ? 'Fall und Frage' : 'Fall');
    return {
      title: level === 1 ? 'Wie fragst du nach dem markierten Satzteil?' : 'Bestimme den Fall.',
      instr: level === 1 ? 'Schreibe die passende Frage dazu: Wer oder was? · Wessen? · Wem? · Wen oder was?' :
        (level === 2 ? 'Frage nach dem markierten Satzteil. Schreibe den Fall und die Frage auf.' : 'Schreibe den Fachbegriff auf: Nominativ, Genitiv, Dativ oder Akkusativ.'),
      body: table(['Satz', head], its.map(x => [marked(x.s), blank(9)])),
      sol: table(['Satz', head], its.map(x => [marked(x.s), sol(level === 2 ? CASES[x.c].de + ' – ' + CASES[x.c].frage : esc(cname(x.c, level)))]))
    };
  }

  function pick4(rng, n) {
    const pool = SENT4;
    const first = [];
    [1, 2, 3, 4].forEach(c => { const x = rng.fresh(pool.filter(y => y.c === c), 1, y => y.s)[0]; if (x && !first.includes(x)) first.push(x); });
    const all = rng.shuffle(first.concat(rng.fresh(pool, n - first.length, y => y.s).filter(x => !first.includes(x))));
    all.forEach(x => rng.used.add(x.s));
    return all;
  }

  function taskEinsetzen4(rng) {
    const its = pick4(rng, 4);
    return {
      title: 'Setze im richtigen Fall ein.',
      instr: 'Begleiter, Adjektiv und Nomen müssen zusammenpassen. Achte auf die Präposition!',
      body: its.map(x => '<div class="item">' + gapped(x.s, 11) + ' <span class="hint">(' + esc(x.nom) + ')</span></div>').join(''),
      sol: its.map(x => '<div class="item">' + esc(parse(x.s).before) + sol(esc(parse(x.s).mark)) + esc(parse(x.s).after) + ' <span class="hint">(' + esc(CASES[x.c].fach) + ')</span></div>').join('')
    };
  }

  function taskFehler4(rng) {
    const its = rng.fresh(FEHLER4, 4, x => x[0]);
    return {
      title: 'Finde den Fehler.',
      instr: 'In jedem Satz steht ein Satzteil im falschen Fall. Schreibe den Satz richtig.',
      body: its.map(x => '<div class="item">' + esc(x[0]) + '</div>' + lines(1)).join(''),
      sol: its.map(x => '<div class="item">' + esc(x[0]) + '<br>' + sol(esc(x[1])) + '</div>').join('')
    };
  }

  function taskTabelle4(rng) {
    const ns = rng.fresh(ADJ4, 3, x => '#adj4#' + x[0]);
    const head = [''].concat(ns.map(n => '<b>' + esc(n[0]) + '</b>'));
    return {
      title: 'Begleiter, Adjektiv und Nomen',
      instr: 'Setze die Wortgruppen in alle vier Fälle.',
      body: table(head, [1, 2, 3, 4].map(c => [CASES[c].fach].concat(ns.map(n => c === 1 ? esc(n[0]) : '')))),
      sol: table(head, [1, 2, 3, 4].map(c => [CASES[c].fach].concat(ns.map(n => c === 1 ? esc(n[0]) : sol(esc(n[c - 1]))))))
    };
  }

  function taskAuswahl(rng) {
    // Stufe 1: richtige Form ankreuzen (Formen aus der Deklinationstabelle)
    const its = rng.fresh(SENTENCES.filter(x => NOUNS.some(n => n.includes(x.s.match(/\[(.+?)\]/)[1]))), 5, x => x.s);
    const rows = its.map(x => {
      const right = parse(x.s).mark;
      const noun = NOUNS.find(n => n.includes(right));
      const opts = rng.shuffle(Array.from(new Set(noun)));
      return { x, right, opts };
    });
    return {
      title: 'Welche Form passt?',
      instr: 'Kreuze die richtige Form an.',
      body: rows.map(r => '<div class="item">' + gapped(r.x.s) + '<div class="opts">' + r.opts.map(o => box + ' ' + esc(o)).join('&nbsp;&nbsp;&nbsp;') + '</div></div>').join(''),
      sol: rows.map(r => '<div class="item">' + esc(plain(r.x.s)) + ' ' + sol('(' + esc(r.right) + ')') + '</div>').join('')
    };
  }

  function taskEinsetzen(level, rng) {
    const its = pickSentences(rng, level === 3 ? 6 : 5, level === 2 ? [3, 4] : [2, 3, 4]);
    return {
      title: 'Setze im richtigen Fall ein.',
      instr: 'Das Wort in Klammern steht im 1. Fall. Verändere es so, dass es in den Satz passt.',
      body: its.map(x => '<div class="item">' + gapped(x.s, 9) + ' <span class="hint">(' + esc(x.nom) + ')</span></div>').join(''),
      sol: its.map(x => '<div class="item">' + esc(parse(x.s).before) + sol(esc(parse(x.s).mark)) + esc(parse(x.s).after) + ' <span class="hint">(' + esc(cname(x.c, level === 3 ? 3 : 2)) + ')</span></div>').join('')
    };
  }

  function taskTabelle(level, rng) {
    const ns = rng.fresh(NOUNS, 3, x => '#nomen#' + x[0]);
    const head = [''].concat(ns.map(n => '<b>' + esc(n[0]) + '</b>'));
    const label = (c) => level === 3 ? CASES[c].fach : CASES[c].de + ' <span class="hint">' + CASES[c].frage + '</span>';
    return {
      title: 'Fülle die Tabelle aus.',
      instr: 'Setze die Wörter in alle vier Fälle.',
      body: table(head, [1, 2, 3, 4].map(c => [label(c)].concat(ns.map(n => c === 1 ? esc(n[0]) : '')))),
      sol: table(head, [1, 2, 3, 4].map(c => [label(c)].concat(ns.map(n => c === 1 ? esc(n[0]) : sol(esc(n[c - 1]))))))
    };
  }

  UB.register({
    pairs(level, rng) {
      const out = [], seen = new Set();
      NOUNS.forEach(n => [1, 2, 3, 4].forEach(c => { const a = n[c - 1]; if (seen.has(a)) return; seen.add(a); out.push({ q: '<b>' + esc(n[0]) + '</b> · ' + esc(cname(c, level)) + ': <span class="cgap"></span>', a: esc(a), grp: 'n:' + n[0] }); }));
      return rng.shuffle(out);
    },
    id: 'faelle',
    merk: '<b>1. Fall</b> (Nominativ): Wer oder was? – der Hund. <b>2. Fall</b> (Genitiv): Wessen? – des Hundes. <b>3. Fall</b> (Dativ): Wem? – dem Hund. <b>4. Fall</b> (Akkusativ): Wen oder was? – den Hund. Frage immer mit dem ganzen Satz: <i>Wem</i> hilft Max? – seinem Freund (3. Fall).',
    title: 'Die vier Fälle',
    area: 'sprache',
    klassen: [1, 2],
    img: 'MiniHoS_Rosa_Nachdenken-Frage',
    levels: {
      1: { ichkann: ['Du kannst mit den Fragen Wer oder was?, Wessen?, Wem? und Wen oder was? nach Satzteilen fragen.', 'Du kannst die richtige Form eines Nomens auswählen.'] },
      2: { ichkann: ['Du kannst den 1. bis 4. Fall bestimmen.', 'Du kannst Nomen in den 3. und 4. Fall setzen.', 'Du kannst Nomen in allen vier Fällen aufschreiben.'] },
      3: { ichkann: ['Du kennst die Fachbegriffe Nominativ, Genitiv, Dativ und Akkusativ.', 'Du kannst Nomen in jeden Fall setzen.', 'Du kannst eine Deklinationstabelle ausfüllen.'] },
      4: { ichkann: ['Du bestimmst den Fall auch nach Präpositionen (wegen, trotz, mit, durch, auf …).', 'Du setzt Wortgruppen mit Adjektiv richtig in jeden Fall.', 'Du findest und verbesserst typische Fallfehler.'] }
    },
    build(level, rng) {
      if (level === 1) return [taskBestimmen(1, rng), taskAuswahl(rng)];
      if (level === 2) return [taskBestimmen(2, rng), taskEinsetzen(2, rng), taskTabelle(2, rng)];
      if (level === 4) return [taskBestimmen(4, rng), taskEinsetzen4(rng), rng.next() < 0.5 ? taskFehler4(rng) : taskTabelle4(rng)];
      return [taskBestimmen(3, rng), taskEinsetzen(3, rng), taskTabelle(3, rng)];
    },
    pool() {
      return table(['Satz', 'Fall', '1. Fall'], SENTENCES.map(x => [marked(x.s), CASES[x.c].de + ' (' + CASES[x.c].fach + ')', esc(x.nom)])) +
        table(['1. Fall', '2. Fall', '3. Fall', '4. Fall'], NOUNS.map(n => n.map(esc)));
    }
  });

  // ---------------------------------------------------------------- mehr Varianten für die sechs Blätter
  SENTENCES.push(
    { s: '[Der Briefträger] bringt die Post.', c: 1, nom: 'der Briefträger' },
    { s: 'Ich rufe [meine Freundin] an.', c: 4, nom: 'meine Freundin' },
    { s: 'Das Fell [der Katze] ist weich.', c: 2, nom: 'die Katze' },
    { s: 'Wir helfen [dem alten Mann].', c: 3, nom: 'der alte Mann' },
    { s: '[Die Kinder] spielen im Hof.', c: 1, nom: 'die Kinder' },
    { s: 'Papa wäscht [das Auto].', c: 4, nom: 'das Auto' },
    { s: 'Der Schwanz [des Pferdes] ist lang.', c: 2, nom: 'das Pferd' },
    { s: 'Lisa schreibt [ihrer Oma] einen Brief.', c: 3, nom: 'ihre Oma' },
    { s: '[Mein Onkel] wohnt in Linz.', c: 1, nom: 'mein Onkel' },
    { s: 'Tom trägt [eine Brille].', c: 4, nom: 'eine Brille' },
    { s: 'Die Tür [des Klassenzimmers] steht offen.', c: 2, nom: 'das Klassenzimmer' },
    { s: 'Die Jacke passt [meinem Bruder] nicht.', c: 3, nom: 'mein Bruder' },
    { s: '[Der Zug] hat Verspätung.', c: 1, nom: 'der Zug' },
    { s: 'Wir pflanzen [einen Baum].', c: 4, nom: 'ein Baum' },
    { s: 'Der Ball [des Jungen] liegt im Teich.', c: 2, nom: 'der Junge' },
    { s: 'Ich gebe [der Lehrerin] das Heft.', c: 3, nom: 'die Lehrerin' },
    { s: '[Die Katze] fängt eine Maus.', c: 1, nom: 'die Katze' },
    { s: 'Mama backt [einen Kuchen].', c: 4, nom: 'ein Kuchen' },
    { s: 'Das Spielzeug [des Babys] ist bunt.', c: 2, nom: 'das Baby' },
    { s: 'Wir winken [dem Kapitän].', c: 3, nom: 'der Kapitän' },
    { s: '[Ein Eichhörnchen] klettert auf den Baum.', c: 1, nom: 'ein Eichhörnchen' },
    { s: 'Ich verliere [meinen Handschuh].', c: 4, nom: 'mein Handschuh' },
    { s: 'Die Blätter [des Baumes] werden gelb.', c: 2, nom: 'der Baum' },
    { s: 'Ben leiht [seiner Freundin] ein Buch.', c: 3, nom: 'seine Freundin' }
  );
  NOUNS.push(
    ['der Vogel', 'des Vogels', 'dem Vogel', 'den Vogel'],
    ['die Lampe', 'der Lampe', 'der Lampe', 'die Lampe'],
    ['das Pferd', 'des Pferdes', 'dem Pferd', 'das Pferd'],
    ['der Tisch', 'des Tisches', 'dem Tisch', 'den Tisch'],
    ['die Straße', 'der Straße', 'der Straße', 'die Straße'],
    ['das Fenster', 'des Fensters', 'dem Fenster', 'das Fenster'],
    ['ein Bleistift', 'eines Bleistifts', 'einem Bleistift', 'einen Bleistift'],
    ['eine Freundin', 'einer Freundin', 'einer Freundin', 'eine Freundin']
  );
  SENT4.push(
    { s: 'Wir gehen durch [den dunklen Wald].', c: 4, nom: 'der dunkle Wald' },
    { s: 'Der Hund schläft unter [dem großen Tisch].', c: 3, nom: 'der große Tisch' },
    { s: 'Trotz [des starken Regens] spielten wir weiter.', c: 2, nom: 'der starke Regen' },
    { s: 'Ich kaufe ein Geschenk für [meine kleine Schwester].', c: 4, nom: 'meine kleine Schwester' },
    { s: 'Wir wohnen neben [einem alten Bauernhof].', c: 3, nom: 'ein alter Bauernhof' },
    { s: 'Die Katze springt auf [das weiche Sofa].', c: 4, nom: 'das weiche Sofa' },
    { s: 'Während [der langen Fahrt] schlief ich ein.', c: 2, nom: 'die lange Fahrt' },
    { s: '[Der freundliche Busfahrer] wartet auf uns.', c: 1, nom: 'der freundliche Busfahrer' },
    { s: 'Ich gehe mit [meinem besten Freund] ins Kino.', c: 3, nom: 'mein bester Freund' },
    { s: 'Wir sitzen auf [der warmen Bank].', c: 3, nom: 'die warme Bank' },
    { s: 'Ohne [meinen neuen Schal] friere ich.', c: 4, nom: 'mein neuer Schal' },
    { s: 'Wegen [eines kaputten Reifens] kamen wir zu spät.', c: 2, nom: 'ein kaputter Reifen' }
  );
  FEHLER4.push(
    ['Ich warte auf meinem Freund.', 'Ich warte auf meinen Freund.'],
    ['Mit den neuen Fahrrad fahre ich schnell.', 'Mit dem neuen Fahrrad fahre ich schnell.'],
    ['Das Auto von meinen Vater ist rot.', 'Das Auto meines Vaters ist rot.'],
    ['Ich bedanke mich bei die Lehrerin.', 'Ich bedanke mich bei der Lehrerin.'],
    ['Wir gehen in den Garten und spielen in den Garten.', 'Wir gehen in den Garten und spielen im Garten.'],
    ['Sie schenkt ihren Bruder ein Buch.', 'Sie schenkt ihrem Bruder ein Buch.']
  );
  ADJ4.push(
    ['der alte Mann', 'des alten Mannes', 'dem alten Mann', 'den alten Mann'],
    ['das bunte Bild', 'des bunten Bildes', 'dem bunten Bild', 'das bunte Bild'],
    ['eine nette Lehrerin', 'einer netten Lehrerin', 'einer netten Lehrerin', 'eine nette Lehrerin'],
    ['unser neues Auto', 'unseres neuen Autos', 'unserem neuen Auto', 'unser neues Auto']
  );
})();
