/* Verben: Personalformen, Befehlsform – 1. Klasse */
(function () {
  const { esc, sol, table } = UB;
  const PARA = [
    'spielen|spiele|spielst|spielt|spielen|spielt|spielen',
    'fahren|fahre|fährst|fährt|fahren|fahrt|fahren',
    'lesen|lese|liest|liest|lesen|lest|lesen',
    'sein|bin|bist|ist|sind|seid|sind',
    'haben|habe|hast|hat|haben|habt|haben',
    'laufen|laufe|läufst|läuft|laufen|lauft|laufen',
    'nehmen|nehme|nimmst|nimmt|nehmen|nehmt|nehmen',
    'essen|esse|isst|isst|essen|esst|essen',
    'wissen|weiß|weißt|weiß|wissen|wisst|wissen',
    'tanzen|tanze|tanzt|tanzt|tanzen|tanzt|tanzen',
    'arbeiten|arbeite|arbeitest|arbeitet|arbeiten|arbeitet|arbeiten',
    'sprechen|spreche|sprichst|spricht|sprechen|sprecht|sprechen',
    'werden|werde|wirst|wird|werden|werdet|werden',
    'schlafen|schlafe|schläfst|schläft|schlafen|schlaft|schlafen'
  ].map(l => l.split('|'));
  const PERS = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie'];

  function paradigm(rng, level) {
    const vs = rng.fresh(PARA.filter(p => level === 3 || !['wissen', 'werden', 'arbeiten'].includes(p[0])), 2, p => p[0]);
    const mk = (solution) => table(['Person'].concat(vs.map(v => '<b>' + esc(v[0]) + '</b>')),
      PERS.map((p, i) => [esc(p)].concat(vs.map(v => solution ? sol(esc(p.split('/')[0] === 'er' ? 'er ' + v[i + 1] : p + ' ' + v[i + 1])) : ''))), 'even');
    return {
      title: level === 3 ? 'Konjugiere im Präsens.' : 'Bilde alle Personalformen.',
      instr: 'Schreibe das Fürwort und die passende Verbform in jede Zeile.',
      body: mk(false), sol: mk(true)
    };
  }

  UB.simple({
    id: 'verben', title: 'Verben', area: 'sprache', klassen: [1], img: 'MiniHoS_Jubeln_Sprung',
    merk: '<b>Verben</b> sagen, was jemand tut oder was geschieht. Die <b>Nennform</b> (Infinitiv) endet auf -en oder -n: spielen, sein. Im Satz steht die <b>Personalform</b>: ich spiele, du spielst, er spielt … Manche Verben ändern dabei den Selbstlaut: ich fahre – du fährst, ich lese – du liest. Mit der <b>Befehlsform</b> (Imperativ) fordert man auf: Lies! Komm! Seid leise!',
    pools: {
      form: `spielen :: du => du spielst
lachen :: wir => wir lachen
malen :: ihr => ihr malt
fahren :: du => du fährst
lesen :: er => er liest
haben :: du => du hast
sein :: ihr => ihr seid
laufen :: sie (Einzahl) => sie läuft
nehmen :: du => du nimmst
geben :: er => er gibt
essen :: du => du isst
schlafen :: es => es schläft
sprechen :: er => er spricht
helfen :: du => du hilfst
tragen :: sie (Einzahl) => sie trägt
wissen :: ich => ich weiß
werden :: du => du wirst
tanzen :: du => du tanzt
rechnen :: er => er rechnet
sehen :: du => du siehst`,
      befehl: `Du räumst dein Zimmer auf. => Räum dein Zimmer auf!
Du liest den Text. => Lies den Text!
Ihr seid leise. => Seid leise!
Du gibst mir das Buch. => Gib mir das Buch!
Du hilfst mir. => Hilf mir!
Ihr kommt pünktlich. => Kommt pünktlich!
Du nimmst einen Schirm mit. => Nimm einen Schirm mit!
Du isst dein Gemüse. => Iss dein Gemüse!
Du sprichst lauter. => Sprich lauter!
Ihr öffnet die Fenster. => Öffnet die Fenster!
Du bist vorsichtig. => Sei vorsichtig!
Du wartest hier. => Warte hier!
Ihr schreibt das Datum auf. => Schreibt das Datum auf!
Du siehst genau hin. => Sieh genau hin!
Du hörst gut zu. => Hör gut zu!
Ihr wascht euch die Hände. => Wascht euch die Hände!
Du nimmst Platz. => Nimm Platz!
Du triffst den Ball. => Triff den Ball!
Du vergisst das Heft nicht. => Vergiss das Heft nicht!
Du wirfst den Ball. => Wirf den Ball!
Du läufst schneller. => Lauf schneller!
Du fährst vorsichtig. => Fahr vorsichtig!
Du hilfst deiner Schwester. => Hilf deiner Schwester!
Ihr bleibt hier. => Bleibt hier!`,
      art: `Wir **gehen** heute ins Kino.|P
Ich möchte heute **schwimmen**.|N
Lena **schreibt** einen Brief.|P
Wir wollen morgen **wandern**.|N
**Komm** bitte schnell her!|B
Du **trinkst** zu wenig.|P
Max kann gut **zeichnen**.|N
**Hört** mir bitte zu!|B
Die Kinder **lachen** laut.|P
Ich muss noch Vokabeln **lernen**.|N
**Lies** den Text genau!|B
Ihr **seid** sehr fleißig.|P
Darf ich draußen **spielen**?|N
**Sei** bitte vorsichtig!|B
Ich will heute **lesen**.|N
Sie **schwimmt** jeden Tag.|P
**Bleib** hier!|B
Wir können morgen **kommen**.|N
Du **spielst** sehr gut.|P
**Gebt** mir eure Hefte!|B
Ich möchte ein Eis **essen**.|N
Er **liest** ein Buch.|P
**Hilf** mir bitte!|B
Wir **fahren** nach Wien.|P`
    },
    levels: {
      1: {
        ichkann: ['Du kannst zur Nennform die passende Personalform bilden.', 'Du kannst Sätze in die Befehlsform setzen.'],
        tasks: [
          { type: 'pair', pool: 'form', n: 6, inline: true, head: 'Nennform → Person', col: 'Personalform', filter: x => !/wissen|werden|sprechen|helfen/.test(x.q), title: 'Bilde die Personalform.', instr: 'Schreibe das Fürwort und die richtige Verbform auf.' },
          { type: 'fn', fn: paradigm, title: '' },
          { type: 'pair', pool: 'befehl', n: 3, title: 'Befehlsform', instr: 'Schreibe den Satz als Aufforderung mit Rufzeichen.' }
        ]
      },
      2: {
        ichkann: ['Du kannst Personalformen auch bei schwierigen Verben bilden.', 'Du kannst Nennform, Personalform und Befehlsform unterscheiden.', 'Du kannst die Befehlsform bilden.'],
        tasks: [
          { type: 'pair', pool: 'form', n: 6, inline: true, head: 'Nennform → Person', col: 'Personalform', title: 'Bilde die Personalform.', instr: 'Achtung: Bei manchen Verben ändert sich der Selbstlaut.' },
          { type: 'choice', pool: 'art', cover: true, keys: ['N', 'P', 'B'], n: 5, title: 'Welche Verbform ist das?', instr: 'Kreuze an.', opts: [['N', 'Nennform'], ['P', 'Personalform'], ['B', 'Befehlsform']] },
          { type: 'pair', pool: 'befehl', n: 3, title: 'Befehlsform', instr: 'Schreibe den Satz als Aufforderung mit Rufzeichen.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Verben im Präsens konjugieren.', 'Du kennst die Fachbegriffe Infinitiv, finite Verbform (Personalform) und Imperativ.'],
        tasks: [
          { type: 'fn', fn: paradigm, title: '' },
          { type: 'choice', pool: 'art', cover: true, keys: ['N', 'P', 'B'], n: 5, title: 'Bestimme die Verbform.', instr: 'Kreuze an.', opts: [['N', 'Infinitiv'], ['P', 'finite Verbform'], ['B', 'Imperativ']] },
          { type: 'pair', pool: 'befehl', n: 3, filter: x => /^Du (gibst|hilfst|nimmst|isst|sprichst|siehst|liest|triffst|vergisst|wirfst)/.test(x.q), title: 'Imperativ', instr: 'Achtung: Bei diesen Verben ändert sich der Selbstlaut auch im Imperativ.' }
        ]
      }
    }
  });
})();
