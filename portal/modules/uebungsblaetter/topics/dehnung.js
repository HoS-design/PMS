/* Dehnung und Schärfung – 1. Klasse */
UB.simple({
  id: 'dehnung-schaerfung', title: 'Lange und kurze Selbstlaute', area: 'rechtschreibung', klassen: [1], img: 'MiniHoS_Gesicht_Lachen',
  merk: '<b>Kurzer Selbstlaut</b> (Schärfung): Danach folgen meist zwei Mitlaute. Hört man nur einen, wird er verdoppelt: Sonne, Mutter, Teller. Statt kk schreibt man <b>ck</b> (Zucker), statt zz schreibt man <b>tz</b> (Katze). <b>Langer Selbstlaut</b> (Dehnung): Meist bleibt er unmarkiert (Ofen, Hase). Langes i schreibt man meist <b>ie</b> (Biene). Manchmal steht ein <b>Dehnungs-h</b> vor l, m, n, r (Zahn, fahren, Stuhl) oder ein <b>doppelter Selbstlaut</b> (Meer, Haar, Boot).',
  pools: {
    wahl: `Die {Sonne|Sone} scheint.
Meine {Mutter|Muter} kocht.
Der {Wecker|Weker} klingelt.
Die {Katze|Kaze} schnurrt.
Ich esse {Zucker|Zuker}.
Im Sommer ist die {Hitze|Hize} groß.
Ich trinke {Tee|Te}.
Sie hat lange {Haare|Hare}.
Im Wald wächst {Moos|Mos}.
Wir gehen in den {Zoo|Zo}.
Ich putze meine {Zähne|Zäne}.
Wir {fahren|faren} nach Wien.
Der {Stuhl|Stul} wackelt.
Die {Biene|Bine} summt.
Ich {spiele|spile} Fußball.
Der {Brief|Brif} ist angekommen.
Die {Milch|Mielch} ist kalt.
Das {Kind|Kiend} lacht.
Der {Teller|Teler} ist leer.
Die {Brücke|Brüke} ist lang.
Er {wohnt|wont} in Linz.
Die {Uhr|Ur} geht nach.`,
    sort: `Sonne|K
Mutter|K
Wecker|K
Katze|K
Teller|K
Brücke|K
Hütte|K
Kamm|K
Ofen|L
Hase|L
Biene|L
Zahn|L
Stuhl|L
Haar|L
Boot|L
Schule|L`,
    markierung: `Zahn|H
fahren|H
Stuhl|H
Uhr|H
wohnen|H
Kohle|H
Meer|D
Haar|D
Boot|D
Tee|D
Moos|D
Zoo|D
Biene|I
Lied|I
spielen|I
Wiese|I
Riese|I
Brief|I`
  },
  levels: {
    1: {
      ichkann: ['Du hörst, ob ein Selbstlaut kurz oder lang ist.', 'Du schreibst Wörter mit doppelten Mitlauten, ck und tz richtig.'],
      tasks: [
        { type: 'gap', pool: 'wahl', n: 10, filter: x => !/Zähne|fahren|Stuhl|wohnt|Uhr/.test(x.q), title: 'Welche Schreibung ist richtig?', instr: 'Kreise das richtig geschriebene Wort ein.' },
        { type: 'sort', pool: 'sort', cover: true, keys: ['K', 'L'], n: 10, title: 'Kurz oder lang?', instr: 'Sprich die Wörter deutlich. Ist der betonte Selbstlaut kurz oder lang?', opts: [['K', 'kurzer Selbstlaut'], ['L', 'langer Selbstlaut']] }
      ]
    },
    2: {
      ichkann: ['Du erkennst die Zeichen für lange Selbstlaute: ie, h und Doppel-Selbstlaut.', 'Du schreibst Wörter mit Dehnung und Schärfung richtig.'],
      tasks: [
        { type: 'gap', pool: 'wahl', n: 10, title: 'Welche Schreibung ist richtig?', instr: 'Kreise das richtig geschriebene Wort ein.' },
        { type: 'sort', pool: 'markierung', cover: true, keys: ['H', 'D', 'I'], n: 12, title: 'Wie wird der lange Selbstlaut gezeigt?', instr: 'Ordne die Wörter.', opts: [['H', 'mit h'], ['D', 'doppelter Selbstlaut'], ['I', 'ie']] }
      ]
    },
    3: {
      ichkann: ['Du kennst die Fachbegriffe Dehnung und Schärfung.', 'Du kannst Wörter nach Rechtschreibregeln ordnen.'],
      tasks: [
        { type: 'sort', pool: 'sort', cover: true, keys: ['K', 'L'], n: 10, title: 'Dehnung oder Schärfung?', instr: 'Ordne nach der Länge des betonten Vokals.', opts: [['K', 'Schärfung (kurzer Vokal)'], ['L', 'Dehnung (langer Vokal)']] },
        { type: 'sort', pool: 'markierung', cover: true, keys: ['H', 'D', 'I'], n: 11, title: 'Kennzeichen der Dehnung', instr: 'Ordne die Wörter.', opts: [['H', 'Dehnungs-h'], ['D', 'Doppelvokal'], ['I', 'ie']] },
        { type: 'gap', pool: 'wahl', n: 4, title: 'Richtig geschrieben?', instr: 'Kreise ein.' }
      ]
    }
  }
});
