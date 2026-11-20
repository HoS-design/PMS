/* Wortbildung – 2. Klasse */
UB.simple({
  id: 'wortbildung', title: 'Wortbildung', area: 'sprache', klassen: [2], img: 'MiniHoS_Basteln_Schere',
  merk: '<b>Zusammensetzung</b> (Kompositum): Zwei Wörter werden verbunden – Schreib + Tisch = Schreibtisch. Das Grundwort steht hinten und bestimmt die Wortart und den Artikel, das Bestimmungswort steht vorne. <b>Ableitung</b>: Ein Wort bekommt eine Vorsilbe (Präfix: ver-, be-, un-, ent-) oder Nachsilbe (Suffix: -ung, -heit, -keit, -lich, -ig). Mit -ung, -heit, -keit, -nis, -schaft entstehen Nomen: wohnen → die Wohnung. <b>Wortfamilie</b>: Wörter mit demselben Wortstamm – fahren, Fahrer, Abfahrt, Fahrrad.',
  pools: {
    art: `der Schreibtisch|Z
die Freiheit|A
verkaufen|A
die Haustür|Z
das Lesebuch|Z
die Bäckerei|A
unfreundlich|A
die Großstadt|Z
die Wohnung|A
die Kindheit|A
der Spielplatz|Z
ehrlich|A
der Kühlschrank|Z
die Übung|A
das Hochhaus|Z
die Schönheit|A
der Fußball|Z
die Lehrerin|A
der Regenschirm|Z
lesbar|A
die Ungeduld|A
das Schwimmbad|Z`,
    nomen: `wohnen :: -ung => die Wohnung
üben :: -ung => die Übung
frei :: -heit => die Freiheit
krank :: -heit => die Krankheit
dunkel :: -heit => die Dunkelheit
heiter :: -keit => die Heiterkeit
ehrlich :: -keit => die Ehrlichkeit
freundlich :: -keit => die Freundlichkeit
erleben :: -nis => das Erlebnis
ergeben :: -nis => das Ergebnis
Freund :: -schaft => die Freundschaft
Mann :: -schaft => die Mannschaft
leiten :: -ung => die Leitung
sauber :: -keit => die Sauberkeit
schön :: -heit => die Schönheit
erlauben :: -nis => die Erlaubnis
zeichnen :: -ung => die Zeichnung
faul :: -heit => die Faulheit
traurig :: -keit => die Traurigkeit
geheim :: -nis => das Geheimnis
Land :: -schaft => die Landschaft
meinen :: -ung => die Meinung
gesund :: -heit => die Gesundheit
pünktlich :: -keit => die Pünktlichkeit`,
    familie: `Fahrer|F
Fahrt|F
Abfahrt|F
Fahrrad|F
fahrbar|F
Vorfahrt|F
Spieler|S
Spielplatz|S
verspielt|S
Spielzeug|S
spielerisch|S
Schrift|W
Schreiber|W
Unterschrift|W
beschreiben|W
schriftlich|W
Schreibheft|W`,
    zerlegen: `das Klassenzimmer => Klasse + Zimmer (Nomen + Nomen)
der Schreibtisch => schreiben + Tisch (Verb + Nomen)
die Großstadt => groß + Stadt (Adjektiv + Nomen)
das Lesebuch => lesen + Buch (Verb + Nomen)
der Rotstift => rot + Stift (Adjektiv + Nomen)
die Zahnbürste => Zahn + Bürste (Nomen + Nomen)
das Schwimmbad => schwimmen + Bad (Verb + Nomen)
das Hochhaus => hoch + Haus (Adjektiv + Nomen)
der Spielplatz => spielen + Platz (Verb + Nomen)
eiskalt => Eis + kalt (Nomen + Adjektiv)
der Kühlschrank => kühlen + Schrank (Verb + Nomen)
hellblau => hell + blau (Adjektiv + Adjektiv)
die Turnhalle => turnen + Halle (Verb + Nomen)
der Blumentopf => Blume + Topf (Nomen + Nomen)
die Kleinstadt => klein + Stadt (Adjektiv + Nomen)
der Waschlappen => waschen + Lappen (Verb + Nomen)
das Fahrrad => fahren + Rad (Verb + Nomen)
der Schneeball => Schnee + Ball (Nomen + Nomen)
das Rotkraut => rot + Kraut (Adjektiv + Nomen)
zuckersüß => Zucker + süß (Nomen + Adjektiv)
dunkelgrün => dunkel + grün (Adjektiv + Adjektiv)`
  },
  levels: {
    1: {
      ichkann: ['Du kannst zusammengesetzte und abgeleitete Wörter unterscheiden.', 'Du kannst mit Nachsilben Nomen bilden.'],
      tasks: [
        { type: 'choice', pool: 'art', cover: true, keys: ['Z', 'A'], n: 8, head: 'Wort', title: 'Wie ist das Wort gebaut?', instr: 'Kreuze an.', opts: [['Z', 'zusammengesetzt'], ['A', 'abgeleitet (Vor- oder Nachsilbe)']] },
        { type: 'pair', pool: 'nomen', n: 8, inline: true, head: 'Wort → Nachsilbe', col: 'Nomen mit Artikel', filter: x => /-ung|-heit|-schaft/.test(x.raw), title: 'Bilde Nomen.', instr: 'Hänge die Nachsilbe an und schreibe das Nomen mit Artikel auf.' }
      ]
    },
    2: {
      ichkann: ['Du kannst Wörter zusammensetzen und zerlegen.', 'Du kannst Wörter einer Wortfamilie erkennen.', 'Du kannst mit Nachsilben Nomen bilden.'],
      tasks: [
        { type: 'sort', pool: 'familie', cover: true, keys: ['F', 'S', 'W'], n: 10, title: 'Wortfamilien', instr: 'Ordne jedes Wort seiner Wortfamilie zu.', opts: [['F', 'fahren'], ['S', 'spielen'], ['W', 'schreiben']] },
        { type: 'pair', pool: 'nomen', n: 5, inline: true, head: 'Wort → Nachsilbe', col: 'Nomen mit Artikel', title: 'Bilde Nomen.', instr: 'Achtung: Nomen schreibst du groß.' },
        { type: 'pair', pool: 'zerlegen', n: 4, inline: true, filter: x => /Nomen \+ Nomen|Verb \+ Nomen|Adjektiv \+ Nomen/.test(x.a), head: 'Zusammensetzung', col: 'Bestandteile', title: 'Zerlege die Wörter.', instr: 'Schreibe die Bestandteile in der Grundform auf.' }
      ]
    },
    3: {
      ichkann: ['Du kennst die Fachbegriffe Kompositum, Ableitung, Präfix, Suffix und Wortstamm.', 'Du kannst Komposita nach Wortarten zerlegen.'],
      tasks: [
        { type: 'pair', pool: 'zerlegen', n: 5, inline: true, head: 'Kompositum', col: 'Bestandteile (Wortarten)', title: 'Zerlege die Komposita.', instr: 'Schreibe die Bestandteile und ihre Wortarten auf, z. B. Haus + Tür (Nomen + Nomen).' },
        { type: 'pair', pool: 'nomen', n: 5, inline: true, head: 'Wort → Suffix', col: 'Ableitung', title: 'Ableitungen mit Suffix', instr: 'Bilde das Nomen mit Artikel.' },
        { type: 'choice', pool: 'art', cover: true, keys: ['Z', 'A'], n: 6, head: 'Wort', title: 'Kompositum oder Ableitung?', instr: 'Kreuze an.', opts: [['Z', 'Kompositum'], ['A', 'Ableitung']] }
      ]
    }
  }
});
