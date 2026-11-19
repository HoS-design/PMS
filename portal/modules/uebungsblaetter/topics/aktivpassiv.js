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
    id: 'aktiv-passiv',
    title: 'Aktiv und Passiv',
    area: 'sprache',
    klassen: [3, 4],
    img: 'MiniHoS_Erklaeren_Tafel-Idee',
    levels: {
      1: { ichkann: ['Du kannst Aktiv- und Passivsätze unterscheiden.', 'Du weißt, wie man das Passiv bildet.'] },
      2: { ichkann: ['Du kannst Sätze im Präsens vom Aktiv ins Passiv umformen.', 'Du kannst Passivsätze ins Aktiv umformen.'] },
      3: { ichkann: ['Du kannst das Vorgangspassiv in Präsens, Präteritum und Perfekt bilden.', 'Du kannst Sätze mit „man“ ins Passiv setzen.'] }
    },
    build(level, rng) {
      if (level === 1) return [taskErkennen(1, rng), taskMerk(1)];
      if (level === 2) return [taskErkennen(2, rng), taskUmformen(2, rng, 'ap'), taskUmformen(2, rng, 'pa')];
      return [taskUmformen(3, rng, 'ap'), taskUmformen(3, rng, 'pa'), taskMerk(3)];
    },
    pool() {
      return table(['Aktiv', 'Passiv', 'Zeitform'], PAIRS.map(x => [esc(x.a), esc(x.p), T[x.t] + (x.man ? ' (man)' : '')]));
    }
  });
})();
