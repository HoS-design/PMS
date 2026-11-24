/* das oder dass – 2. Klasse
   t: A = Artikel, R = Relativpronomen, D = Demonstrativpronomen, K = Konjunktion */
(function () {
  const { esc, lines, sol, blank, table, box } = UB;

  const TYPES = {
    A: { de: 'Begleiter (Artikel)', fach: 'Artikel', probe: 'Ersatzprobe: ein / dieses' },
    R: { de: 'bezügliches Fürwort', fach: 'Relativpronomen', probe: 'Ersatzprobe: welches' },
    D: { de: 'hinweisendes Fürwort', fach: 'Demonstrativpronomen', probe: 'Ersatzprobe: dieses' },
    K: { de: 'Bindewort', fach: 'Konjunktion', probe: 'kein Ersatz möglich' }
  };

  const ITEMS = [
    { s: '___ Fahrrad steht im Hof.', t: 'A' },
    { s: 'Ich lese ___ Buch über Drachen.', t: 'A' },
    { s: '___ Wetter ist heute schön.', t: 'A' },
    { s: 'Wir füttern ___ Pferd.', t: 'A' },
    { s: 'Gib mir bitte ___ Heft!', t: 'A' },
    { s: '___ Kind lacht laut.', t: 'A' },
    { s: 'Wo liegt ___ Lineal?', t: 'A' },
    { s: '___ Fenster ist offen.', t: 'A' },
    { s: 'Das Buch, ___ ich gerade lese, ist spannend.', t: 'R' },
    { s: 'Das Haus, ___ am Waldrand steht, ist sehr alt.', t: 'R' },
    { s: 'Das Geschenk, ___ Mia bekommen hat, ist toll.', t: 'R' },
    { s: 'Das Lied, ___ wir singen, kennt jeder.', t: 'R' },
    { s: 'Das Fahrrad, ___ ich mir wünsche, ist rot.', t: 'R' },
    { s: 'Das Mädchen, ___ neben mir sitzt, heißt Emma.', t: 'R' },
    { s: 'Das Spiel, ___ wir gestern gespielt haben, war lustig.', t: 'R' },
    { s: '___ habe ich nicht gewusst.', t: 'D' },
    { s: '___ ist mein Lieblingsspiel.', t: 'D' },
    { s: '___ glaube ich dir nicht.', t: 'D' },
    { s: 'Hast du ___ wirklich selbst gebaut?', t: 'D' },
    { s: 'Ich hoffe, ___ du morgen kommst.', t: 'K' },
    { s: 'Mama sagt, ___ das Essen fertig ist.', t: 'K' },
    { s: 'Wir wissen, ___ die Prüfung schwer wird.', t: 'K' },
    { s: 'Es ist schön, ___ du da bist.', t: 'K' },
    { s: 'Paul glaubt, ___ es morgen schneit.', t: 'K' },
    { s: 'Ich freue mich, ___ die Ferien beginnen.', t: 'K' },
    { s: 'Lena merkt, ___ ihr Heft fehlt.', t: 'K' },
    { s: 'Es ist wichtig, ___ wir pünktlich sind.', t: 'K' },
    { s: '___ Auto ist schnell.', t: 'A' },
    { s: 'Ich trinke ___ Glas Milch aus.', t: 'A' },
    { s: 'Wo ist ___ Buch hingekommen?', t: 'A' },
    { s: '___ Pferd frisst Heu.', t: 'A' },
    { s: 'Hast du ___ Licht ausgemacht?', t: 'A' },
    { s: 'Wir besuchen ___ Museum.', t: 'A' },
    { s: '___ Zimmer ist aufgeräumt.', t: 'A' },
    { s: 'Ich höre ___ Radio.', t: 'A' },
    { s: 'Das Bild, ___ an der Wand hängt, hat Mia gemalt.', t: 'R' },
    { s: 'Das Kind, ___ im Sand spielt, ist mein Bruder.', t: 'R' },
    { s: 'Das Auto, ___ vor dem Haus parkt, gehört uns.', t: 'R' },
    { s: 'Das Lied, ___ du singst, kenne ich.', t: 'R' },
    { s: 'Das Brot, ___ Papa gebacken hat, ist noch warm.', t: 'R' },
    { s: 'Das Spiel, ___ morgen stattfindet, wird spannend.', t: 'R' },
    { s: '___ war eine tolle Idee!', t: 'D' },
    { s: '___ stimmt nicht.', t: 'D' },
    { s: 'Wer hat ___ gesagt?', t: 'D' },
    { s: '___ macht mir Spaß.', t: 'D' },
    { s: 'Ich weiß, ___ du das kannst.', t: 'K' },
    { s: 'Er sagt, ___ er krank ist.', t: 'K' },
    { s: 'Wir hoffen, ___ es nicht regnet.', t: 'K' },
    { s: 'Sie freut sich, ___ du kommst.', t: 'K' },
    { s: 'Ich glaube nicht, ___ er recht hat.', t: 'K' },
    { s: 'Max ist so müde, ___ er sofort einschläft.', t: 'K' },
    { s: 'Es stimmt, ___ wir morgen frei haben.', t: 'K' },
    { s: 'Mama sagt, ___ wir leise sein sollen.', t: 'K' },
    { s: 'Ich habe gehört, ___ du umziehst.', t: 'K' }
  ];

  const JOIN = [
    { a: 'Mia weiß es.', b: 'Der Test ist morgen.', s: 'Mia weiß, dass der Test morgen ist.' },
    { a: 'Ich hoffe es.', b: 'Du wirst bald gesund.', s: 'Ich hoffe, dass du bald gesund wirst.' },
    { a: 'Papa sagt es.', b: 'Das Essen ist fertig.', s: 'Papa sagt, dass das Essen fertig ist.' },
    { a: 'Wir glauben es.', b: 'Unsere Mannschaft gewinnt.', s: 'Wir glauben, dass unsere Mannschaft gewinnt.' },
    { a: 'Lena merkt es.', b: 'Ihr Fahrrad ist weg.', s: 'Lena merkt, dass ihr Fahrrad weg ist.' },
    { a: 'Es freut mich.', b: 'Du hilfst mir.', s: 'Es freut mich, dass du mir hilfst.' },
    { a: 'Ben erzählt es.', b: 'Sein Hund kann Kunststücke.', s: 'Ben erzählt, dass sein Hund Kunststücke kann.' },
    { a: 'Die Lehrerin erklärt es.', b: 'Der Ausflug findet morgen statt.', s: 'Die Lehrerin erklärt, dass der Ausflug morgen stattfindet.' },
    { a: 'Ich glaube es.', b: 'Morgen scheint die Sonne.', s: 'Ich glaube, dass morgen die Sonne scheint.' },
    { a: 'Lena sagt es.', b: 'Sie hat keine Zeit.', s: 'Lena sagt, dass sie keine Zeit hat.' },
    { a: 'Wir wissen es.', b: 'Der Test ist schwer.', s: 'Wir wissen, dass der Test schwer ist.' },
    { a: 'Es ist schön.', b: 'Du bist hier.', s: 'Es ist schön, dass du hier bist.' },
    { a: 'Paul hofft es.', b: 'Seine Mannschaft gewinnt.', s: 'Paul hofft, dass seine Mannschaft gewinnt.' },
    { a: 'Mama merkt es.', b: 'Der Kuchen ist verbrannt.', s: 'Mama merkt, dass der Kuchen verbrannt ist.' },
    { a: 'Ich habe es gehört.', b: 'Ihr zieht um.', s: 'Ich habe gehört, dass ihr umzieht.' },
    { a: 'Tom verspricht es.', b: 'Er kommt pünktlich.', s: 'Tom verspricht, dass er pünktlich kommt.' },
    { a: 'Es ärgert mich.', b: 'Der Bus ist schon weg.', s: 'Es ärgert mich, dass der Bus schon weg ist.' },
    { a: 'Die Ärztin meint es.', b: 'Ich soll viel trinken.', s: 'Die Ärztin meint, dass ich viel trinken soll.' }
  ];

  // Stufe 4: mehrere Lücken in einem Satz (Reihenfolge der Typen = Reihenfolge der Lücken)
  const MULTI = [
    { s: 'Ich hoffe, ___ ___ Wetter morgen schön ist.', t: 'KA' },
    { s: 'Ich glaube, ___ ___ Buch, ___ du liest, spannend ist.', t: 'KAR' },
    { s: '___ du ___ geschafft hast, freut mich.', t: 'KD' },
    { s: 'Weißt du, ___ ___ Konzert abgesagt wurde?', t: 'KA' },
    { s: '___ Lied, ___ wir singen, zeigt, ___ wir gut geübt haben.', t: 'ARK' },
    { s: 'Mia sagt, ___ ___ Kätzchen, ___ im Garten sitzt, ihr gehört.', t: 'KAR' },
    { s: 'Es ist klar, ___ ___ so nicht weitergeht.', t: 'KD' },
    { s: '___ ___ stimmt, glaube ich nicht.', t: 'KD' },
    { s: 'Ich merke, ___ ___ Fenster offen ist.', t: 'KA' },
    { s: 'Papa meint, ___ ___ Auto, ___ vor dem Haus steht, zu teuer war.', t: 'KAR' },
    { s: '___ Schönste ist, ___ wir morgen frei haben.', t: 'AK' },
    { s: 'Wir wissen, ___ ___ Spiel, ___ morgen stattfindet, schwierig wird.', t: 'KAR' },
    { s: 'Hast du gehört, ___ ___ Schwimmbad renoviert wird?', t: 'KA' },
    { s: '___ Mädchen, ___ uns geholfen hat, hat gesagt, ___ es Emma heißt.', t: 'ARK' },
    { s: '___ habe ich gewusst, ___ du ___ schaffst!', t: 'DKD' }
  ];
  const JOIN4 = [
    { a: 'Der Test ist morgen.', b: 'Mia weiß es.', s: 'Dass der Test morgen ist, weiß Mia.' },
    { a: 'Du hilfst mir.', b: 'Es freut mich.', s: 'Dass du mir hilfst, freut mich.' },
    { a: 'Der Bus ist schon weg.', b: 'Es ärgert mich.', s: 'Dass der Bus schon weg ist, ärgert mich.' },
    { a: 'Ihr zieht um.', b: 'Ich habe es gehört.', s: 'Dass ihr umzieht, habe ich gehört.' },
    { a: 'Sein Hund kann Kunststücke.', b: 'Ben erzählt es stolz.', s: 'Dass sein Hund Kunststücke kann, erzählt Ben stolz.' },
    { a: 'Der Kuchen ist verbrannt.', b: 'Mama merkt es zu spät.', s: 'Dass der Kuchen verbrannt ist, merkt Mama zu spät.' },
    { a: 'Wir haben gewonnen.', b: 'Niemand hat es erwartet.', s: 'Dass wir gewonnen haben, hat niemand erwartet.' },
    { a: 'Du kommst morgen.', b: 'Es ist schön.', s: 'Dass du morgen kommst, ist schön.' }
  ];
  const fillMulti = (x, show) => {
    let i = 0;
    return esc(x.s).replace(/___/g, (m, off) => {
      const t = x.t[i++]; if (!show) return blank(4);
      const w = t === 'K' ? 'dass' : 'das';
      return sol(esc(off === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w));
    });
  };

  function taskMulti(rng) {
    const its = rng.fresh(MULTI, 6, x => x.s);
    return {
      title: 'das oder dass? Mehrere Lücken',
      instr: 'In jedem Satz fehlt das oder dass mehrmals. Mach bei jeder Lücke die Ersatzprobe.',
      body: its.map(x => '<div class="item">' + fillMulti(x) + '</div>').join(''),
      sol: its.map(x => '<div class="item">' + fillMulti(x, true) + ' <span class="hint">(' + x.t.split('').map(t => esc(TYPES[t].fach)).join(', ') + ')</span></div>').join('')
    };
  }

  function taskVorne(rng) {
    const its = rng.fresh(JOIN4, 3, x => x.s);
    return {
      title: 'Beginne mit „Dass …“.',
      instr: 'Verbinde die Sätze. Der dass-Satz steht vorne, danach folgen Beistrich und Verb. Das Wort „es“ fällt meist weg.',
      body: its.map(x => '<div class="item">' + esc(x.a) + ' ' + esc(x.b) + '</div>' + lines(1)).join(''),
      sol: its.map(x => '<div class="item">' + esc(x.a) + ' ' + esc(x.b) + '<br>' + sol(esc(x.s)) + '</div>').join('')
    };
  }

  const answer = (t) => t === 'K' ? 'dass' : 'das';
  const fill = (s, w, cap) => {
    const start = s.startsWith('___');
    const a = w ? (start ? w.charAt(0).toUpperCase() + w.slice(1) : w) : null;
    return esc(s).replace('___', a ? sol(esc(a)) : blank(4));
  };

  function taskEinsetzen(level, rng) {
    const types = level === 1 ? ['A', 'K'] : (level === 2 ? ['A', 'R', 'K'] : ['A', 'R', 'D', 'K']);
    const nItems = level === 1 ? 8 : (level === 4 ? 5 : 9);
    if (level === 4) level = 3;
    const pool = ITEMS.filter(x => types.includes(x.t));
    const first = types.map(t => rng.pick(pool.filter(x => x.t === t)));
    const its = rng.shuffle(first.concat(rng.sample(pool.filter(x => !first.includes(x)), nItems - first.length)));
    if (level < 3) {
      return {
        title: 'das oder dass?',
        instr: level === 1 ? 'Setze das oder dass ein. Tipp: Kannst du „ein“ einsetzen, schreibst du das.' : 'Setze das oder dass ein. Mach die Ersatzprobe mit „ein“, „dieses“ oder „welches“.',
        body: its.map(x => '<div class="item">' + fill(x.s) + '</div>').join(''),
        sol: its.map(x => '<div class="item">' + fill(x.s, answer(x.t)) + ' <span class="hint">(' + esc(TYPES[x.t].de) + ')</span></div>').join('')
      };
    }
    return {
      title: 'das oder dass? Bestimme auch die Wortart.',
      instr: 'Setze ein und schreibe dazu: Artikel, Relativpronomen, Demonstrativpronomen oder Konjunktion.',
      body: table(['Satz', 'Wortart'], its.map(x => [fill(x.s), blank(10)])),
      sol: table(['Satz', 'Wortart'], its.map(x => [fill(x.s, answer(x.t)), sol(esc(TYPES[x.t].fach))]))
    };
  }

  function taskVerbinden(level, rng) {
    const its = rng.fresh(JOIN, 3, x => x.s);
    return {
      title: 'Verbinde zu einem Satz mit „dass“.',
      instr: 'Achte darauf: Im dass-Satz steht das Verb am Ende. Vor „dass“ steht ein Beistrich.',
      body: its.map(x => '<div class="item">' + esc(x.a) + ' ' + esc(x.b) + '</div>' + lines(1)).join(''),
      sol: its.map(x => '<div class="item">' + esc(x.a) + ' ' + esc(x.b) + '<br>' + sol(esc(x.s)) + '</div>').join('')
    };
  }

  function taskRegel(level) {
    return {
      title: 'Die Regel',
      instr: 'Ergänze den Merksatz.',
      body: '<div class="item">„dass“ ist ein ' + blank(8) + '. Man kann es <b>nicht</b> durch ' + blank(5) + ', ' + blank(5) + ' oder ' + blank(5) + ' ersetzen.</div>' +
        '<div class="item">Vor „dass“ steht immer ein ' + blank(7) + '.</div>',
      sol: '<div class="item">„dass“ ist ein ' + sol(level === 3 ? 'Bindewort (Konjunktion)' : 'Bindewort') + '. Man kann es nicht durch ' + sol('ein') + ', ' + sol('dieses') + ' oder ' + sol('welches') + ' ersetzen.</div>' +
        '<div class="item">Vor „dass“ steht immer ein ' + sol('Beistrich') + '.</div>'
    };
  }

  UB.register({
    id: 'das-dass',
    merk: '<b>das</b> kann man ersetzen: Artikel → „ein/dieses“ (das Buch), hinweisendes Fürwort → „dieses“ (Das glaube ich nicht.), bezügliches Fürwort → „welches“ (das Buch, das ich lese). <b>dass</b> ist ein Bindewort (Konjunktion) und lässt sich nicht ersetzen: Ich hoffe, dass du kommst. Vor „dass“ steht ein Beistrich.',
    title: 'das oder dass',
    area: 'rechtschreibung',
    klassen: [2],
    img: 'MiniHoS_Rosa_Idee-Gluehbirne',
    levels: {
      1: { ichkann: ['Du kannst „das“ als Begleiter und „dass“ als Bindewort unterscheiden.', 'Du kennst die Ersatzprobe mit „ein“.'] },
      2: { ichkann: ['Du kannst „das“ und „dass“ mit der Ersatzprobe richtig schreiben.', 'Du kannst zwei Sätze mit „dass“ verbinden.'] },
      3: { ichkann: ['Du kannst „das“ als Artikel, Relativpronomen oder Demonstrativpronomen bestimmen.', 'Du kannst „dass“ als Konjunktion erkennen und richtig verwenden.'] },
      4: { ichkann: ['Du setzt das und dass auch in Sätzen mit mehreren Lücken richtig.', 'Du bestimmst jedes das als Artikel, Relativpronomen oder Demonstrativpronomen.', 'Du bildest Satzgefüge, die mit „Dass …“ beginnen.'] }
    },
    build(level, rng) {
      if (level === 1) return [taskEinsetzen(1, rng), taskRegel(1)];
      if (level === 2) return [taskEinsetzen(2, rng), taskVerbinden(2, rng), taskRegel(2)];
      if (level === 4) return [taskMulti(rng), taskEinsetzen(4, rng), taskVorne(rng)];
      return [taskEinsetzen(3, rng), taskVerbinden(3, rng)];
    },
    pool() {
      return table(['Satz', 'Lösung', 'Wortart'], ITEMS.map(x => [fill(x.s), esc(answer(x.t)), esc(TYPES[x.t].fach)])) +
        table(['Satz 1', 'Satz 2', 'Lösung'], JOIN.map(x => [esc(x.a), esc(x.b), esc(x.s)]));
    }
  });

  // ---------------------------------------------------------------- mehr Varianten für die sechs Blätter
  ITEMS.push(
    { s: '___ Brot ist frisch.', t: 'A' },
    { s: 'Ich putze ___ Fahrrad.', t: 'A' },
    { s: '___ Wasser im See ist warm.', t: 'A' },
    { s: 'Kennst du ___ Märchen vom Froschkönig?', t: 'A' },
    { s: 'Das Pferd, ___ auf der Weide steht, heißt Blitz.', t: 'R' },
    { s: 'Das Handy, ___ ich verloren habe, ist wieder da.', t: 'R' },
    { s: 'Das Zelt, ___ wir aufgebaut haben, ist undicht.', t: 'R' },
    { s: 'Das Eis, ___ ich gekauft habe, schmilzt schon.', t: 'R' },
    { s: '___ weiß ich schon lange.', t: 'D' },
    { s: '___ habe ich dir doch gesagt!', t: 'D' },
    { s: 'Ich hoffe, ___ du gewinnst.', t: 'K' },
    { s: 'Mama sagt, ___ das Essen fertig ist.', t: 'K' },
    { s: 'Es ist schön, ___ du da bist.', t: 'K' },
    { s: 'Ich habe gehört, ___ es morgen schneit.', t: 'K' },
    { s: 'Er rennt so schnell, ___ ihn niemand einholt.', t: 'K' }
  );
  MULTI.push(
    { s: 'Ich weiß, ___ ___ Spiel um drei beginnt.', t: 'KA' },
    { s: '___ Bild, ___ du gemalt hast, gefällt mir.', t: 'AR' },
    { s: '___ glaube ich nicht, ___ er ___ gesagt hat.', t: 'DKD' },
    { s: 'Sie hofft, ___ ___ Paket morgen ankommt.', t: 'KA' },
    { s: '___ Kind, ___ dort spielt, ist mein Cousin.', t: 'AR' },
    { s: 'Wusstest du, ___ ___ Museum heute geschlossen ist?', t: 'KA' }
  );
  JOIN4.push(
    { a: 'Es regnet schon wieder.', b: 'Es stört mich.', s: 'Dass es schon wieder regnet, stört mich.' },
    { a: 'Du kommst zu meiner Party.', b: 'Es freut mich.', s: 'Dass du zu meiner Party kommst, freut mich.' },
    { a: 'Der Film ist so spannend.', b: 'Ich hätte es nicht gedacht.', s: 'Dass der Film so spannend ist, hätte ich nicht gedacht.' },
    { a: 'Wir haben gewonnen.', b: 'Es ist toll.', s: 'Dass wir gewonnen haben, ist toll.' }
  );
})();
