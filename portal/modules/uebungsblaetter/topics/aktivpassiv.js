/* Aktiv und Passiv – 3. Klasse
   Fertige Satzpaare (Aktiv ↔ Vorgangspassiv), t = Zeitform, man = Satz mit „man“ (nur Stufe 3). */
(function () {
  const { esc, lines, sol, blank, table, box } = UB;

  const T = { pr: 'Präsens', pt: 'Präteritum', pf: 'Perfekt' };
  const PAIRS = [
    { a: 'Der Koch bereitet die Suppe zu.', p: 'Die Suppe wird vom Koch zubereitet.', t: 'pr' },
    { a: 'Die Klasse schreibt einen Test.', p: 'Ein Test wird von der Klasse geschrieben.', t: 'pr' },
    { a: 'Lisa öffnet das Fenster.', p: 'Das Fenster wird von Lisa geöffnet.', t: 'pr' },
    { a: 'Die Polizei kontrolliert die Ausweise.', p: 'Die Ausweise werden von der Polizei kontrolliert.', t: 'pr' },
    { a: 'Der Lehrer erklärt die Regel.', p: 'Die Regel wird vom Lehrer erklärt.', t: 'pr' },
    { a: 'Die Schüler präsentieren das Referat.', p: 'Das Referat wird von den Schülern präsentiert.', t: 'pr' },
    { a: 'Die Ärztin untersucht den Patienten.', p: 'Der Patient wird von der Ärztin untersucht.', t: 'pr' },
    { a: 'Der Gärtner gießt die Blumen.', p: 'Die Blumen werden vom Gärtner gegossen.', t: 'pr' },
    { a: 'Die Bäckerin backt das Brot.', p: 'Das Brot wird von der Bäckerin gebacken.', t: 'pr' },
    { a: 'Der Mechaniker reparierte das Fahrrad.', p: 'Das Fahrrad wurde vom Mechaniker repariert.', t: 'pt' },
    { a: 'Der Hund biss den Postboten.', p: 'Der Postbote wurde vom Hund gebissen.', t: 'pt' },
    { a: 'Der Sturm zerstörte das Dach.', p: 'Das Dach wurde vom Sturm zerstört.', t: 'pt' },
    { a: 'Die Feuerwehr rettete die Katze.', p: 'Die Katze wurde von der Feuerwehr gerettet.', t: 'pt' },
    { a: 'Die Kinder schmückten den Christbaum.', p: 'Der Christbaum wurde von den Kindern geschmückt.', t: 'pt' },
    { a: 'Der Bürgermeister eröffnete das Fest.', p: 'Das Fest wurde vom Bürgermeister eröffnet.', t: 'pt' },
    { a: 'Der Wind hat das Schild umgeworfen.', p: 'Das Schild ist vom Wind umgeworfen worden.', t: 'pf' },
    { a: 'Die Firma hat die Pakete geliefert.', p: 'Die Pakete sind von der Firma geliefert worden.', t: 'pf' },
    { a: 'Die Klasse hat das Klassenzimmer geschmückt.', p: 'Das Klassenzimmer ist von der Klasse geschmückt worden.', t: 'pf' },
    { a: 'Der Tischler hat den Tisch gebaut.', p: 'Der Tisch ist vom Tischler gebaut worden.', t: 'pf' },
    { a: 'Man baut eine neue Schule.', p: 'Eine neue Schule wird gebaut.', t: 'pr', man: true },
    { a: 'Man sperrte die Straße.', p: 'Die Straße wurde gesperrt.', t: 'pt', man: true },
    { a: 'Man hat den Dieb gefasst.', p: 'Der Dieb ist gefasst worden.', t: 'pf', man: true }
  ];

  // Stufe 4: Plusquamperfekt, Futur I, Modalverben, Passiv ohne Subjekt
  const T4 = { pr: 'Präsens', pt: 'Präteritum', pq: 'Plusquamperfekt', f1: 'Futur I', mod: 'mit Modalverb' };
  const PAIRS4 = [
    { a: 'Der Arzt hatte den Patienten bereits untersucht.', p: 'Der Patient war vom Arzt bereits untersucht worden.', t: 'pq' },
    { a: 'Die Feuerwehr hatte das Feuer schnell gelöscht.', p: 'Das Feuer war von der Feuerwehr schnell gelöscht worden.', t: 'pq' },
    { a: 'Die Stadt hatte den Park neu gestaltet.', p: 'Der Park war von der Stadt neu gestaltet worden.', t: 'pq' },
    { a: 'Die Gemeinde wird die Straße erneuern.', p: 'Die Straße wird von der Gemeinde erneuert werden.', t: 'f1' },
    { a: 'Der Architekt wird das Museum planen.', p: 'Das Museum wird vom Architekten geplant werden.', t: 'f1' },
    { a: 'Der Hausmeister muss die Heizung reparieren.', p: 'Die Heizung muss vom Hausmeister repariert werden.', t: 'mod' },
    { a: 'Die Schüler sollen die Aufgabe bis morgen lösen.', p: 'Die Aufgabe soll von den Schülern bis morgen gelöst werden.', t: 'mod' },
    { a: 'Die Lehrerin darf die Ergebnisse noch nicht veröffentlichen.', p: 'Die Ergebnisse dürfen von der Lehrerin noch nicht veröffentlicht werden.', t: 'mod' },
    { a: 'Der Trainer kann das Spiel verschieben.', p: 'Das Spiel kann vom Trainer verschoben werden.', t: 'mod' },
    { a: 'Man kann das Fenster nicht öffnen.', p: 'Das Fenster kann nicht geöffnet werden.', t: 'mod', man: true },
    { a: 'Man wird die Gewinner morgen verständigen.', p: 'Die Gewinner werden morgen verständigt werden.', t: 'f1', man: true },
    { a: 'Man hilft dem verletzten Radfahrer.', p: 'Dem verletzten Radfahrer wird geholfen.', t: 'pr', man: true },
    { a: 'Man dankte den Helferinnen.', p: 'Den Helferinnen wurde gedankt.', t: 'pt', man: true },
    { a: 'Man hatte die Brücke gesperrt.', p: 'Die Brücke war gesperrt worden.', t: 'pq', man: true }
  ];
  const ZUSTAND = [
    ['Das Geschäft ist heute geschlossen.', 'Z'], ['Das Geschäft wird um 18 Uhr geschlossen.', 'V'],
    ['Die Straße ist gesperrt.', 'Z'], ['Die Straße wird wegen des Festes gesperrt.', 'V'],
    ['Der Tisch ist schon gedeckt.', 'Z'], ['Der Tisch wird gerade gedeckt.', 'V'],
    ['Das Fenster ist geöffnet.', 'Z'], ['Die Briefe werden morgen verschickt.', 'V'],
    ['Das Auto ist repariert.', 'Z'], ['Das Auto wird in der Werkstatt repariert.', 'V'],
    ['Die Hausübung ist erledigt.', 'Z'], ['Die Wäsche wird aufgehängt.', 'V']
  ];

  function taskUmformen4(rng, dir) {
    const pool = PAIRS4.filter(x => dir === 'pa' ? !x.man : true);
    const its = rng.fresh(pool, dir === 'ap' ? 3 : 2, x => x.a);
    const from = (x) => dir === 'ap' ? x.a : x.p, to = (x) => dir === 'ap' ? x.p : x.a;
    return {
      title: dir === 'ap' ? 'Forme ins Passiv um.' : 'Forme ins Aktiv um.',
      instr: dir === 'ap' ? 'Die Zeitform bleibt gleich. Plusquamperfekt: war … worden, Futur I: wird … werden, Modalverb: muss/soll/kann … werden.' : 'Wer handelt? Diese Person oder Sache wird zum Subjekt. Die Zeitform bleibt gleich.',
      body: its.map(x => '<div class="item">' + esc(from(x)) + ' <span class="hint">(' + T4[x.t] + ')</span></div>' + lines(1)).join(''),
      sol: its.map(x => '<div class="item">' + esc(from(x)) + '<br>' + sol(esc(to(x))) + '</div>').join('')
    };
  }

  function taskZustand(rng) {
    const zs = rng.shuffle(rng.fresh(ZUSTAND.filter(x => x[1] === 'Z'), 3, x => '#zustand#' + x[0]).concat(rng.fresh(ZUSTAND.filter(x => x[1] === 'V'), 2, x => '#zustand#' + x[0])));
    return {
      title: 'Vorgang oder Zustand?',
      instr: 'Vorgangspassiv (werden + Partizip II): Etwas geschieht gerade. Zustandspassiv (sein + Partizip II): Das Ergebnis ist schon da. Kreuze an.',
      body: table(['Satz', 'Vorgang', 'Zustand'], zs.map(x => [esc(x[0]), box, box]), 'center-cols'),
      sol: table(['Satz', 'Vorgang', 'Zustand'], zs.map(x => [esc(x[0]), x[1] === 'V' ? sol('✗') : '', x[1] === 'Z' ? sol('✗') : '']), 'center-cols')
    };
  }

  function taskErkennen(level, rng) {
    const ps = rng.fresh(PAIRS.filter(x => level === 3 || !x.man), level === 1 ? 8 : 6, x => x.a);
    const its = ps.map((x, i) => ({ s: i % 2 ? x.p : x.a, isP: !!(i % 2) }));
    const sh = rng.shuffle(its);
    return {
      title: 'Aktiv oder Passiv?',
      instr: 'Kreuze an.',
      body: table(['Satz', 'Aktiv', 'Passiv'], sh.map(x => [esc(x.s), box, box]), 'center-cols'),
      sol: table(['Satz', 'Aktiv', 'Passiv'], sh.map(x => [esc(x.s), x.isP ? '' : sol('✗'), x.isP ? sol('✗') : '']), 'center-cols')
    };
  }

  function taskUmformen(level, rng, dir) {
    const pool = PAIRS.filter(x => (level === 2 ? x.t === 'pr' : true) && (level === 3 || !x.man) && (dir === 'pa' ? !x.man : true));
    const its = rng.fresh(pool, level === 3 ? 4 : 3, x => x.a);
    const from = (x) => dir === 'ap' ? x.a : x.p;
    const to = (x) => dir === 'ap' ? x.p : x.a;
    return {
      title: dir === 'ap' ? 'Forme ins Passiv um.' : 'Forme ins Aktiv um.',
      instr: dir === 'ap' ? (level === 3 ? 'Die Zeitform bleibt gleich. Präsens: wird …, Präteritum: wurde …, Perfekt: ist … worden.' : 'Das Objekt im 4. Fall wird zum Subjekt. Verwende „wird“ oder „werden“ und „von“.') : 'Wer handelt? Diese Person oder Sache wird zum Subjekt.',
      body: its.map(x => '<div class="item">' + esc(from(x)) + (level === 3 ? ' <span class="hint">(' + T[x.t] + ')</span>' : '') + '</div>' + lines(1)).join(''),
      sol: its.map(x => '<div class="item">' + esc(from(x)) + '<br>' + sol(esc(to(x))) + '</div>').join('')
    };
  }

  function taskMerk(level) {
    return {
      title: 'Ergänze den Merksatz.',
      instr: '',
      body: '<div class="item">Das ' + (level === 3 ? 'Vorgangspassiv' : 'Passiv') + ' bildet man mit ' + blank(6) + ' und dem ' + blank(9) + '.</div>' +
        '<div class="item">Wer etwas tut, kann im Passiv mit ' + blank(4) + ' angegeben werden – man kann es aber auch weglassen.</div>',
      sol: '<div class="item">Das ' + (level === 3 ? 'Vorgangspassiv' : 'Passiv') + ' bildet man mit ' + sol('werden') + ' und dem ' + sol(level === 3 ? 'Partizip II' : '2. Mittelwort') + '.</div>' +
        '<div class="item">Wer etwas tut, kann im Passiv mit ' + sol('von') + ' angegeben werden – man kann es aber auch weglassen.</div>'
    };
  }

  UB.register({
    pairs(level, rng) {
      return rng.shuffle(PAIRS.filter(x => level === 1 ? x.t === 'pr' : true).map(x => ({ q: esc(x.a) + ' <span class="hint">(Passiv)</span>', a: esc(x.p) })));
    },
    id: 'aktiv-passiv',
    merk: '<b>Aktiv</b>: Wer handelt, steht im Mittelpunkt – Der Koch bereitet die Suppe zu. <b>Passiv</b>: Die Handlung steht im Mittelpunkt – Die Suppe wird (vom Koch) zubereitet. Bildung (Vorgangspassiv): werden + 2. Mittelwort (Partizip II). Präsens: wird gerettet – Präteritum: wurde gerettet – Perfekt: ist gerettet worden. Das Objekt im 4. Fall des Aktivsatzes wird zum Subjekt des Passivsatzes.',
    title: 'Aktiv und Passiv',
    area: 'sprache',
    klassen: [3, 4],
    img: 'MiniHoS_Rosa_Tafel',
    levels: {
      1: { ichkann: ['Du kannst Aktiv- und Passivsätze unterscheiden.', 'Du weißt, wie man das Passiv bildet.'] },
      2: { ichkann: ['Du kannst Sätze im Präsens vom Aktiv ins Passiv umformen.', 'Du kannst Passivsätze ins Aktiv umformen.'] },
      3: { ichkann: ['Du kannst das Vorgangspassiv in Präsens, Präteritum und Perfekt bilden.', 'Du kannst Sätze mit „man“ ins Passiv setzen.'] },
      4: { ichkann: ['Du bildest das Passiv auch im Plusquamperfekt, im Futur I und mit Modalverben.', 'Du formst Passivsätze ins Aktiv um.', 'Du unterscheidest Vorgangspassiv und Zustandspassiv.'] }
    },
    build(level, rng) {
      if (level === 1) return [taskErkennen(1, rng), taskMerk(1)];
      if (level === 2) return [taskErkennen(2, rng), taskUmformen(2, rng, 'ap'), taskUmformen(2, rng, 'pa')];
      if (level === 4) return [taskUmformen4(rng, 'ap'), taskUmformen4(rng, 'pa'), taskZustand(rng)];
      return [taskUmformen(3, rng, 'ap'), taskUmformen(3, rng, 'pa'), taskMerk(3)];
    },
    pool() {
      return table(['Aktiv', 'Passiv', 'Zeitform'], PAIRS.map(x => [esc(x.a), esc(x.p), T[x.t] + (x.man ? ' (man)' : '')]));
    }
  });

  // ---------------------------------------------------------------- mehr Varianten für die sechs Blätter
  PAIRS.push(
    { a: 'Der Briefträger bringt die Pakete.', p: 'Die Pakete werden vom Briefträger gebracht.', t: 'pr' },
    { a: 'Die Mutter wäscht die Wäsche.', p: 'Die Wäsche wird von der Mutter gewaschen.', t: 'pr' },
    { a: 'Der Hausmeister repariert die Tür.', p: 'Die Tür wird vom Hausmeister repariert.', t: 'pr' },
    { a: 'Die Kinder malen ein Bild.', p: 'Ein Bild wird von den Kindern gemalt.', t: 'pr' },
    { a: 'Der Bauer erntet die Kartoffeln.', p: 'Die Kartoffeln werden vom Bauern geerntet.', t: 'pr' },
    { a: 'Die Trainerin lobt die Spielerinnen.', p: 'Die Spielerinnen werden von der Trainerin gelobt.', t: 'pr' },
    { a: 'Der Dieb stahl die Tasche.', p: 'Die Tasche wurde vom Dieb gestohlen.', t: 'pt' },
    { a: 'Die Lehrerin korrigierte die Tests.', p: 'Die Tests wurden von der Lehrerin korrigiert.', t: 'pt' },
    { a: 'Ein Blitz traf den Baum.', p: 'Der Baum wurde von einem Blitz getroffen.', t: 'pt' },
    { a: 'Die Schüler sammelten das Altpapier.', p: 'Das Altpapier wurde von den Schülern gesammelt.', t: 'pt' },
    { a: 'Oma strickte den Schal.', p: 'Der Schal wurde von Oma gestrickt.', t: 'pt' },
    { a: 'Die Katze hat die Maus gefangen.', p: 'Die Maus ist von der Katze gefangen worden.', t: 'pf' },
    { a: 'Der Maler hat die Wand gestrichen.', p: 'Die Wand ist vom Maler gestrichen worden.', t: 'pf' },
    { a: 'Die Polizei hat den Täter verhaftet.', p: 'Der Täter ist von der Polizei verhaftet worden.', t: 'pf' },
    { a: 'Man räumt die Klasse auf.', p: 'Die Klasse wird aufgeräumt.', t: 'pr', man: true },
    { a: 'Man verschob das Spiel.', p: 'Das Spiel wurde verschoben.', t: 'pt', man: true },
    { a: 'Man hat das Fenster geputzt.', p: 'Das Fenster ist geputzt worden.', t: 'pf', man: true }
  );
  PAIRS4.push(
    { a: 'Der Koch hatte das Essen schon vorbereitet.', p: 'Das Essen war vom Koch schon vorbereitet worden.', t: 'pq' },
    { a: 'Die Klasse hatte das Plakat gestaltet.', p: 'Das Plakat war von der Klasse gestaltet worden.', t: 'pq' },
    { a: 'Die Firma wird das neue Handy vorstellen.', p: 'Das neue Handy wird von der Firma vorgestellt werden.', t: 'f1' },
    { a: 'Die Gemeinde wird einen Spielplatz bauen.', p: 'Ein Spielplatz wird von der Gemeinde gebaut werden.', t: 'f1' },
    { a: 'Der Tierarzt muss den Hund impfen.', p: 'Der Hund muss vom Tierarzt geimpft werden.', t: 'mod' },
    { a: 'Die Kinder sollen das Zimmer aufräumen.', p: 'Das Zimmer soll von den Kindern aufgeräumt werden.', t: 'mod' },
    { a: 'Man muss die Rechnung bis Freitag bezahlen.', p: 'Die Rechnung muss bis Freitag bezahlt werden.', t: 'mod', man: true },
    { a: 'Man hatte die Gäste herzlich begrüßt.', p: 'Die Gäste waren herzlich begrüßt worden.', t: 'pq', man: true },
    { a: 'Man wird das Ergebnis bald bekannt geben.', p: 'Das Ergebnis wird bald bekannt gegeben werden.', t: 'f1', man: true },
    { a: 'Man widerspricht dem Trainer nicht.', p: 'Dem Trainer wird nicht widersprochen.', t: 'pr', man: true }
  );
  ZUSTAND.push(
    ['Die Tür ist abgesperrt.', 'Z'], ['Die Tür wird jeden Abend abgesperrt.', 'V'],
    ['Das Essen ist schon gekocht.', 'Z'], ['Das Essen wird gerade gekocht.', 'V'],
    ['Der Rasen ist gemäht.', 'Z'], ['Der Rasen wird jeden Samstag gemäht.', 'V']
  );
})();
