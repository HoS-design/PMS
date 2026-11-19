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

  const parse = (s) => {
    const m = s.match(/^(.*)\[(.+?)\](.*)$/);
    return { before: m[1], mark: m[2], after: m[3] };
  };
  const marked = (s) => { const p = parse(s); return esc(p.before) + '<u><b>' + esc(p.mark) + '</b></u>' + esc(p.after); };
  const gapped = (s, w) => { const p = parse(s); return esc(p.before) + blank(w || 8) + esc(p.after); };
  const plain = (s) => s.replace(/[\[\]]/g, '');

  // mindestens ein Satz je Fall (soweit die Stufe sie verwendet)
  function pickSentences(rng, n, cases) {
    const pool = SENTENCES.filter(x => cases.includes(x.c) && !rng.used.has(x.s));
    const first = cases.map(c => rng.pick(pool.filter(x => x.c === c)));
    const rest = rng.sample(pool.filter(x => !first.includes(x)), n - first.length);
    const all = first.concat(rest);
    all.forEach(x => rng.used.add(x.s));
    return rng.shuffle(all);
  }

  function taskBestimmen(level, rng) {
    const cases = [1, 2, 3, 4];
    const its = pickSentences(rng, 8, cases);
    const head = level === 1 ? 'Frage' : (level === 2 ? 'Fall und Frage' : 'Fall');
    return {
      title: level === 1 ? 'Wie fragst du nach dem markierten Satzteil?' : 'Bestimme den Fall.',
      instr: level === 1 ? 'Schreibe die passende Frage dazu: Wer oder was? · Wessen? · Wem? · Wen oder was?' :
        (level === 2 ? 'Frage nach dem markierten Satzteil. Schreibe den Fall und die Frage auf.' : 'Schreibe den Fachbegriff auf: Nominativ, Genitiv, Dativ oder Akkusativ.'),
      body: table(['Satz', head], its.map(x => [marked(x.s), blank(9)])),
      sol: table(['Satz', head], its.map(x => [marked(x.s), sol(level === 2 ? CASES[x.c].de + ' – ' + CASES[x.c].frage : esc(cname(x.c, level)))]))
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
    const ns = rng.sample(NOUNS, 3);
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
    id: 'faelle',
    merk: '<b>1. Fall</b> (Nominativ): Wer oder was? – der Hund. <b>2. Fall</b> (Genitiv): Wessen? – des Hundes. <b>3. Fall</b> (Dativ): Wem? – dem Hund. <b>4. Fall</b> (Akkusativ): Wen oder was? – den Hund. Frage immer mit dem ganzen Satz: <i>Wem</i> hilft Max? – seinem Freund (3. Fall).',
    title: 'Die vier Fälle',
    area: 'sprache',
    klassen: [1, 2],
    img: 'MiniHoS_Forschen_Lupe',
    levels: {
      1: { ichkann: ['Du kannst mit den Fragen Wer oder was?, Wessen?, Wem? und Wen oder was? nach Satzteilen fragen.', 'Du kannst die richtige Form eines Nomens auswählen.'] },
      2: { ichkann: ['Du kannst den 1. bis 4. Fall bestimmen.', 'Du kannst Nomen in den 3. und 4. Fall setzen.', 'Du kannst Nomen in allen vier Fällen aufschreiben.'] },
      3: { ichkann: ['Du kennst die Fachbegriffe Nominativ, Genitiv, Dativ und Akkusativ.', 'Du kannst Nomen in jeden Fall setzen.', 'Du kannst eine Deklinationstabelle ausfüllen.'] }
    },
    build(level, rng) {
      if (level === 1) return [taskBestimmen(1, rng), taskAuswahl(rng)];
      if (level === 2) return [taskBestimmen(2, rng), taskEinsetzen(2, rng), taskTabelle(2, rng)];
      return [taskBestimmen(3, rng), taskEinsetzen(3, rng), taskTabelle(3, rng)];
    },
    pool() {
      return table(['Satz', 'Fall', '1. Fall'], SENTENCES.map(x => [marked(x.s), CASES[x.c].de + ' (' + CASES[x.c].fach + ')', esc(x.nom)])) +
        table(['1. Fall', '2. Fall', '3. Fall', '4. Fall'], NOUNS.map(n => n.map(esc)));
    }
  });
})();
