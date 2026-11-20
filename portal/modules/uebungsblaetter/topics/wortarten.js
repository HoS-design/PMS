/* Wortarten – 1./2. Klasse */
UB.simple({
  id: 'wortarten', title: 'Wortarten', area: 'sprache', klassen: [1, 2], img: 'MiniHoS_Ordnen_Ordner',
  merk: '<b>Nomen</b> (Hund, Freude) schreibt man groß, sie haben einen Artikel. <b>Verben</b> (laufen, ist) sagen, was jemand tut oder was geschieht. <b>Adjektive</b> (groß, leise) sagen, wie etwas ist. <b>Artikel</b>: der, die, das, ein, eine. <b>Pronomen</b> stehen für ein Nomen: ich, du, er, sie, es, wir, ihr, mein … <b>Präpositionen</b> zeigen Verhältnisse: auf, unter, mit, nach, wegen … <b>Konjunktionen</b> verbinden: und, oder, aber, weil, dass … <b>Adverbien</b> sagen wann, wo, wie: heute, dort, gern …',
  pools: {
    woerter: `Hund|N
Schule|N
Freude|N
Fahrrad|N
Wald|N
Angst|N
Lehrerin|N
Sonne|N
Geburtstag|N
Fenster|N
laufen|V
schreiben|V
lachen|V
spielen|V
essen|V
schwimmen|V
denken|V
helfen|V
bauen|V
schlafen|V
groß|A
leise|A
bunt|A
freundlich|A
kalt|A
schnell|A
müde|A
lustig|A
schwer|A
hell|A
der|Art
die|Art
das|Art
ein|Art
eine|Art
ich|P
du|P
er|P
wir|P
ihr|P
sie|P
mein|P
euer|P`,
    markiert: `Der **Hund** bellt im Garten.|N
Die **Kinder** spielen im Hof.|N
Meine **Oma** backt einen Kuchen.|N
Wir haben große **Freude**.|N
Der **Schnee** glitzert in der Sonne.|N
Lena **liest** ein spannendes Buch.|V
Die Vögel **singen** am Morgen.|V
Max **rennt** zum Bus.|V
Wir **bauen** eine Sandburg.|V
Der Bäcker **verkauft** Brot.|V
Das **alte** Haus steht leer.|A
Die Suppe ist **heiß**.|A
Ein **kleiner** Vogel sitzt am Fenster.|A
Mein Bruder ist sehr **mutig**.|A
Der **grüne** Apfel schmeckt sauer.|A
**Die** Katze schläft auf dem Sofa.|Art
Ich habe **einen** Brief bekommen.|Art
**Er** wohnt in Graz.|P
Morgen besuchen **wir** den Zoo.|P
Hast **du** mein Heft gesehen?|P
Das ist **unser** Klassenzimmer.|P
Die Katze liegt **unter** dem Tisch.|Prä
Ich fahre **mit** dem Rad zur Schule.|Prä
**Nach** dem Essen gehen wir spazieren.|Prä
Das Bild hängt **über** dem Bett.|Prä
Ich esse einen Apfel **und** eine Birne.|K
Wir bleiben zu Hause, **weil** es regnet.|K
Willst du Tee **oder** Saft?|K
Er ist müde, **aber** er spielt weiter.|K
Ich weiß, **dass** du recht hast.|K
**Heute** schreiben wir einen Test.|Adv
Wir treffen uns **dort** beim Brunnen.|Adv
Ich lese **gern** Comics.|Adv
**Morgen** fahren wir ans Meer.|Adv`,
    reihe: `Die Katze schläft. :: 3 Wörter => Artikel – Nomen – Verb
Ein großer Hund bellt. :: 4 Wörter => Artikel – Adjektiv – Nomen – Verb
Wir essen süße Kirschen. :: 4 Wörter => Pronomen – Verb – Adjektiv – Nomen
Der Bus kommt pünktlich. :: 4 Wörter => Artikel – Nomen – Verb – Adjektiv
Meine Schwester malt ein Bild. :: 5 Wörter => Pronomen – Nomen – Verb – Artikel – Nomen
Das kleine Kind weint. :: 4 Wörter => Artikel – Adjektiv – Nomen – Verb
Er trinkt kalten Kakao. :: 4 Wörter => Pronomen – Verb – Adjektiv – Nomen
Die Sonne scheint hell. :: 4 Wörter => Artikel – Nomen – Verb – Adjektiv
Ein Vogel sitzt auf dem Dach. :: 6 Wörter => Artikel – Nomen – Verb – Präposition – Artikel – Nomen
Wir spielen heute Fußball. :: 4 Wörter => Pronomen – Verb – Adverb – Nomen
Ich lese und du schreibst. :: 5 Wörter => Pronomen – Verb – Konjunktion – Pronomen – Verb
Der Ball liegt unter dem Auto. :: 6 Wörter => Artikel – Nomen – Verb – Präposition – Artikel – Nomen
Morgen fahren wir mit dem Zug. :: 6 Wörter => Adverb – Verb – Pronomen – Präposition – Artikel – Nomen
Sie ist müde, aber glücklich. :: 5 Wörter => Pronomen – Verb – Adjektiv – Konjunktion – Adjektiv`
  },
  levels: {
    1: {
      ichkann: ['Du kannst Nomen, Verben und Adjektive unterscheiden.', 'Du kannst die Wortart in einem Satz erkennen.'],
      tasks: [
        { type: 'sort', pool: 'woerter', keys: ['N', 'V', 'A'], cover: true, n: 12, title: 'Ordne die Wörter.', instr: 'Schreibe jedes Wort in die richtige Spalte. Achtung: Nomen schreibst du groß!', opts: [['N', 'Nomen'], ['V', 'Verb'], ['A', 'Adjektiv']] },
        { type: 'choice', pool: 'markiert', keys: ['N', 'V', 'A'], cover: true, n: 8, title: 'Welche Wortart ist das unterstrichene Wort?', instr: 'Kreuze an.', opts: [['N', 'Nomen'], ['V', 'Verb'], ['A', 'Adjektiv']] }
      ]
    },
    2: {
      ichkann: ['Du kannst Nomen, Verben, Adjektive, Artikel und Pronomen unterscheiden.', 'Du kannst die Wortarten in einem ganzen Satz bestimmen.'],
      tasks: [
        { type: 'sort', pool: 'woerter', keys: ['N', 'V', 'A', 'Art', 'P'], cover: true, n: 12, title: 'Ordne die Wörter.', instr: 'Schreibe jedes Wort in die richtige Spalte.', opts: [['N', 'Nomen'], ['V', 'Verb'], ['A', 'Adjektiv'], ['Art', 'Artikel'], ['P', 'Pronomen']] },
        { type: 'choice', pool: 'markiert', keys: ['N', 'V', 'A', 'Art', 'P'], cover: true, n: 5, asText: true, col: 'Wortart', title: 'Bestimme die unterstrichenen Wörter.', instr: 'Schreibe: Nomen, Verb, Adjektiv, Artikel oder Pronomen.', opts: [['N', 'Nomen'], ['V', 'Verb'], ['A', 'Adjektiv'], ['Art', 'Artikel'], ['P', 'Pronomen']] },
        { type: 'pair', pool: 'reihe', filter: x => !/Präposition|Konjunktion|Adverb/.test(x.a), n: 3, title: 'Wortarten-Detektiv', instr: 'Schreibe die Wortart jedes Wortes der Reihe nach auf.' }
      ]
    },
    3: {
      ichkann: ['Du kennst acht Wortarten mit ihren Fachbegriffen.', 'Du kannst Präpositionen, Konjunktionen und Adverbien erkennen.', 'Du kannst alle Wörter eines Satzes bestimmen.'],
      tasks: [
        { type: 'choice', pool: 'markiert', cover: true, keys: ['N', 'V', 'A', 'Art', 'P', 'Prä', 'K', 'Adv'], n: 10, asText: true, col: 'Wortart', title: 'Bestimme die unterstrichenen Wörter.', instr: 'Verwende die Fachbegriffe: Nomen, Verb, Adjektiv, Artikel, Pronomen, Präposition, Konjunktion, Adverb.', opts: [['N', 'Nomen'], ['V', 'Verb'], ['A', 'Adjektiv'], ['Art', 'Artikel'], ['P', 'Pronomen'], ['Prä', 'Präposition'], ['K', 'Konjunktion'], ['Adv', 'Adverb']] },
        { type: 'pair', pool: 'reihe', filter: x => /Präposition|Konjunktion|Adverb/.test(x.a), n: 4, title: 'Bestimme jedes Wort.', instr: 'Schreibe die Wortarten der Reihe nach auf.' },
      ]
    }
  }
});
